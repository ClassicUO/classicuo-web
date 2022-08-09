using LegacyMUL;
using System.Buffers;
using System.Buffers.Binary;
using System.CommandLine;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.RegularExpressions;
using static LegacyMUL.FileMapping;
using System.Runtime.InteropServices;

// #if DEBUG
//
// args = new[]
// {
//     "--source", @"/home/jabin/Downloads/uo_files/7.0.95.0/",
//     "--target", @"/home/jabin/Downloads/uo_files/elemental/",
//     "--output", @"/home/jabin/Downloads/uo_files/elemental-patches/",
//     "artLegacyMUL.uop"
// };
//
// #endif

var jsonSettings = new JsonSerializerOptions
{
    WriteIndented = true,
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
};

var optionSrc = new Option<DirectoryInfo>("--source-dir", "Ultima Online source path");
var optionTarget = new Option<DirectoryInfo>("--target-dir", "Ultima Online target path");
var optionOutput = new Option<DirectoryInfo>("--output-dir", "Output directory to store the generated MULs & DIFF");
var fileArg = new Argument<string>("file", "File to process, e.g. artLegacyMUL.uop");

var cmd = new RootCommand();
cmd.AddOption(optionSrc);
cmd.AddOption(optionTarget);
cmd.AddOption(optionOutput);
cmd.AddArgument(fileArg);
cmd.SetHandler
(
    (sourceDir, targetDir, outputDir, fileName) =>
    {
        var patches = Patch(sourceDir, targetDir, outputDir, fileName).ToList();
        using var stdout = Console.OpenStandardOutput();
        JsonSerializer.Serialize(stdout, patches, jsonSettings);
    },
    optionSrc,
    optionTarget,
    optionOutput,
    fileArg
);

return cmd.Invoke(args);

static IEnumerable<PatchInfo> Patch(
    DirectoryInfo sourceDir,
    DirectoryInfo targetDir,
    DirectoryInfo outputDir,
    string fileName
)
{
    var targetFile = new FileInfo(GetCaseNudgedPathName(targetDir.FullName, fileName));

    if (!targetFile.Exists)
        throw new FileNotFoundException($"Target file doesn't exist: {targetFile}");

    if (outputDir is { Exists: false })
        outputDir.Create();

    var uopMulName = GetUopMulName(fileName);

    if (uopMulName is null)
    {
        var sourcePath = GetCaseNudgedPathName(sourceDir.FullName, targetFile.Name);
        var dictPath = GetCaseNudgedPathName(sourceDir.FullName, "dict.bin");
        
        var sourceFile = new FileInfo(File.Exists(sourcePath) ? sourcePath : dictPath);

        using var sourceStream = sourceFile.OpenRead();
        using var targetStream = targetFile.OpenRead();
        var output = File.Create(GetCaseNudgedPathName(outputDir.FullName, $"{targetFile.Name}.patch"));

        EncodeFile(sourceStream, targetStream, output);
        yield return new PatchInfo(sourceFile.Name, $"{targetFile.Name}.patch", CalculateSHA256Async(output), output.Length,
            targetStream.Length);
        yield break;
    }


    (Stream mul, Stream idx) source;
    (Stream mul, Stream idx) target;

    // target is UOP file, convert to MUL,IDX
    TryConvertUopToMul(targetFile, out target);

    var sourceMulFile = new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, uopMulName + ".mul"));
    var sourceIdxFile = new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, uopMulName.Replace("gumpart", "gump") + "idx.mul"));

    if (!sourceMulFile.Exists)
    {
        TryConvertUopToMul(new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, targetFile.Name)), out source);
        using var mulStream = sourceMulFile.Create();

        source.mul.Seek(0, SeekOrigin.Begin);
        source.mul.CopyTo(mulStream);

        if (source.idx is not null)
        {
            using var idxStream = sourceIdxFile.Create();
            source.idx.Seek(0, SeekOrigin.Begin);
            source.idx.CopyTo(idxStream);
        }
    }
    else
    {
        source = (sourceMulFile.OpenRead(), sourceIdxFile.Exists ? sourceIdxFile.OpenRead() : null);
    }

    try
    {
        using var outputMulPatch =
            File.Open(GetCaseNudgedPathName(outputDir.FullName, sourceMulFile.Name + ".patch"), FileMode.Create);
        EncodeFile(source.mul, target.mul, outputMulPatch);
        yield return new PatchInfo(sourceMulFile.Name, sourceMulFile.Name + ".patch", CalculateSHA256Async(outputMulPatch),
            outputMulPatch.Length, target.mul.Length);

        if (source.idx is not null && target.idx is not null)
        {
            using var outputIdxPatch =
                File.Open(GetCaseNudgedPathName(outputDir.FullName, sourceIdxFile.Name + ".patch"), FileMode.Create);
            EncodeFile(source.idx, target.idx, outputIdxPatch);
            yield return new PatchInfo(sourceIdxFile.Name, sourceIdxFile.Name + ".patch", CalculateSHA256Async(outputIdxPatch),
                outputIdxPatch.Length, target.idx.Length);
        }
    }
    finally
    {
        target.mul.Dispose();
        target.idx?.Dispose();
        source.mul.Dispose();
        source.idx?.Dispose();
    }
}


static bool TryConvertUopToMul(
    FileInfo source,
    out (Stream outputMul, Stream outputIdx) streams
)
{
    var converter = new LegacyMULConverter();
    var name = GetUopMulName(source.Name);

    if (name is null)
    {
        streams = (null, null);
        return false;
    }

    int idx = 0;
    var idxNameMatch = Regex.Match(source.Name, @"\d+", RegexOptions.IgnoreCase);
    if (idxNameMatch.Success) int.TryParse(idxNameMatch.Value, out idx);

    using var inputUop = source.OpenRead();
    var outputMul = new MemoryStream();
    var outputIdx = new MemoryStream();
    var mulType = MulNameToType(name);

    converter.FromUOP(inputUop, outputMul, outputIdx, mulType, idx);
    streams = (outputMul, mulType != FileType.MapLegacyMUL ? outputIdx : null);

    return true;
}

static bool EncodeFile(Stream source, Stream target, Stream output)
{
    source.Seek(0, SeekOrigin.Begin);
    target.Seek(0, SeekOrigin.Begin);
    output.Seek(0, SeekOrigin.Begin);

    using var encoder = new VCDiff.Encoders.VcEncoder
    (
        source,
        target,
        output
    );

    var result = encoder.Encode(interleaved: false);
    return result == VCDiff.Includes.VCDiffResult.SUCCESS;
}

static bool TryGetClientVersionFromExe(string clientpath, out string version)
{
    if (!string.IsNullOrEmpty(clientpath) && File.Exists(clientpath))
    {
        using (FileStream fs = new FileStream(clientpath, FileMode.Open, FileAccess.Read, FileShare.Read))
        {
            byte[] buffer = new byte[fs.Length];

            fs.Read(buffer, 0, (int)fs.Length);

            // VS_VERSION_INFO (unicode)
            Span<byte> vsVersionInfo = stackalloc byte[]
            {
                0x56, 0x00, 0x53, 0x00, 0x5F, 0x00, 0x56,
                0x00, 0x45, 0x00, 0x52, 0x00, 0x53, 0x00,
                0x49, 0x00, 0x4F, 0x00, 0x4E, 0x00, 0x5F,
                0x00, 0x49, 0x00, 0x4E, 0x00, 0x46, 0x00,
                0x4F, 0x00
            };

            var idx = buffer.AsSpan().IndexOf(vsVersionInfo);

            if (idx >= 0)
            {
                var offset = idx + 42; // 30 + 12

                var minorPart = BinaryPrimitives.ReadUInt16LittleEndian(buffer.AsSpan(offset));
                var majorPart = BinaryPrimitives.ReadUInt16LittleEndian(buffer.AsSpan(offset + 2));
                var privatePart = BinaryPrimitives.ReadUInt16LittleEndian(buffer.AsSpan(offset + 4));
                var buildPart = BinaryPrimitives.ReadUInt16LittleEndian(buffer.AsSpan(offset + 6));

                version = $"{majorPart}.{minorPart}.{buildPart}.{privatePart}";

                Console.WriteLine("client version found: {0}", version);

                return true;
            }
        }
    }

    Console.WriteLine("client version not found :(");

    version = string.Empty;

    return false;
}

static string CalculateSHA256Async(Stream stream)
{
    stream.Seek(0, SeekOrigin.Begin);
    var block = ArrayPool<byte>.Shared.Rent(8192);
    try
    {
        using (var sha256 = SHA256.Create())
        {
            int length;
            while ((length = stream.Read(block)) > 0)
            {
                sha256.TransformBlock(block, 0, length, null, 0);
            }

            sha256.TransformFinalBlock(block, 0, 0);

            var hash = sha256.Hash;
            return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
        }
    }
    finally
    {
        ArrayPool<byte>.Shared.Return(block);
    }
}

static bool IsValidUOFile(FileInfo f) => f.Extension switch
{
    ".mul" or ".idx" or ".uop" or ".txt" or ".def" or ".rle" or ".mp3" or ".midi" => true,
    _ => false
} || f.Name.StartsWith("cliloc.", StringComparison.InvariantCultureIgnoreCase);

static string GetCaseNudgedPathName(params string[] paths)
{
    var path = Path.Combine(paths);
    var retPath = path;
    var dir = Path.GetDirectoryName(path);
    var pattern = Path.GetFileName(path);

    var foundFiles = Directory.GetFiles(dir);
    int countMatch = 0;
    foreach (var foundFile in foundFiles)
    {
        if (foundFile.Equals(path, StringComparison.InvariantCultureIgnoreCase))
        {
            countMatch++;
            retPath = foundFile;
        }
    }

    if (countMatch > 1)
    {
        throw new Exception($"Ambiguous filename '{pattern}'");
    }

    return retPath;
}


static string RemoveRootPath(string root, string path) =>
    path.Replace(root, string.Empty)
        .TrimStart('/')
        .TrimStart('\\')
        .TrimEnd('/')
        .TrimEnd('\\');