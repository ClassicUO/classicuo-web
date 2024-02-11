// #define WASM_USE_SHA256

using LegacyMUL;
using System.Buffers;
using System.Buffers.Binary;
using System.Globalization;
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


internal static class Program
{
  private static int blockSize;
  private static int chunkSize;
  private static bool writeUopTarget;

  public static void Main(string[] args)
  {
    if (args.Length < 4)
    {
      throw new ArgumentOutOfRangeException(nameof(args));
    }

    var sourceDir = Directory.Exists(args[0]) ? new DirectoryInfo(args[0]) : Directory.CreateDirectory(args[0]);
    var targetDir = Directory.Exists(args[1]) ? new DirectoryInfo(args[1]) : Directory.CreateDirectory(args[1]);
    var outputDir = Directory.Exists(args[2]) ? new DirectoryInfo(args[2]) : Directory.CreateDirectory(args[2]);
    var fileName = args[3];

    int.TryParse(Environment.GetEnvironmentVariable("PATCH_BLOCK_SIZE") ?? "32", out blockSize);
    int.TryParse(Environment.GetEnvironmentVariable("PATCH_CHUNK_SIZE") ?? "64", out chunkSize);
    writeUopTarget = (Environment.GetEnvironmentVariable("PATCH_WRITE_UOP_TARGET") ?? "false") == "true";
    

    var patches = Patch(sourceDir, targetDir, outputDir, fileName).ToList();

    using var stdout = Console.OpenStandardOutput();
    foreach (var patch in patches)
    {
      JsonSerializer.Serialize(stdout, patch, typeof(PatchInfo), JsonSourceGenerationContext.Default);
    }
  }

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

    var subfolder = GetSubfolder(
      sourceDir,
      new DirectoryInfo(
        GetCaseNudgedDirectoryName(
          sourceDir.FullName,
          GetSubfolder(targetDir, targetFile.Directory)
        )
      )
    );


    var outputSubfolder = Path.Combine(outputDir.FullName, subfolder);
    if (!Directory.Exists(outputSubfolder))
    {
      Directory.CreateDirectory(outputSubfolder);
    }

    var uopMulName = GetUopMulName(targetFile.Name);
    if (uopMulName is null)
    {
      var sourcePath = GetCaseNudgedPathName(sourceDir.FullName, subfolder, targetFile.Name);
      var dictPath = GetCaseNudgedPathName(sourceDir.FullName, "dict.bin");
      var sourceFile = new FileInfo(File.Exists(sourcePath) ? sourcePath : dictPath);

      using var sourceStream = sourceFile.OpenRead();
      using var targetStream = targetFile.OpenRead();
      var outputFile = new FileInfo(Path.Combine(outputDir.FullName, subfolder, $"{targetFile.Name}.patch"));

      if (outputFile.Directory?.Exists == false)
      {
        outputFile.Directory?.Create();
      }

      using var output = outputFile.Create();

      EncodeFile(sourceStream, targetStream, output, fileName);
      output.Flush(true);

      yield return new PatchInfo(
        File.Exists(sourcePath) ? Path.Combine(subfolder, sourceFile.Name) : sourceFile.Name,
        Path.Combine(subfolder, outputFile.Name),
        CalculateSHA256(output),
        output.Length,
        CalculateSHA256(targetStream),
        targetStream.Length,
        CalculateSHA256(sourceStream),
        sourceStream.Length
      );

      yield break;
    }

    (Stream mul, Stream idx) source;
    (Stream mul, Stream idx) target;

    // target is UOP file, convert to MUL,IDX
    TryConvertUopToMul(targetFile, targetDir, out target);

    var sourceMulFile = new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, subfolder, uopMulName + ".mul"));
    var sourceIdxFile = new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, subfolder, GetMulIdxName(uopMulName)));

#if DEBUG
    if (!sourceMulFile.Exists || !sourceIdxFile.Exists)
    {
      TryConvertUopToMul(
        new FileInfo(GetCaseNudgedPathName(sourceDir.FullName, subfolder, targetFile.Name)),
        targetDir,
        out source
      );
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
#endif
    {
      source = (sourceMulFile.Open(FileMode.Open), sourceIdxFile.Exists ? sourceIdxFile.Open(FileMode.Open) : null);
    }

    try
    {
      using var outputMulPatch =
        File.Open(
          GetCaseNudgedPathName(outputDir.FullName, subfolder, sourceMulFile.Name + ".patch"),
          FileMode.Create
        );

      EncodeFile(source.mul, target.mul, outputMulPatch, fileName);

      yield return new PatchInfo(
        Path.Combine(subfolder, sourceMulFile.Name),
        Path.Combine(subfolder, sourceMulFile.Name) + ".patch",
        CalculateSHA256(outputMulPatch),
        outputMulPatch.Length,
        CalculateSHA256(target.mul),
        target.mul.Length,
        CalculateSHA256(source.mul),
        source.mul.Length
      );

      if (source.idx is not null && target.idx is not null)
      {
        using var outputIdxPatch =
          File.Open(
            GetCaseNudgedPathName(outputDir.FullName, subfolder, sourceIdxFile.Name + ".patch"),
            FileMode.Create
          );

        EncodeFile(source.idx, target.idx, outputIdxPatch, fileName);
        yield return new PatchInfo(
          Path.Combine(subfolder, sourceIdxFile.Name),
          Path.Combine(subfolder, sourceIdxFile.Name) + ".patch",
          CalculateSHA256(outputIdxPatch),
          outputIdxPatch.Length,
          CalculateSHA256(target.idx),
          target.idx.Length,
          CalculateSHA256(source.idx),
          source.idx.Length
        );
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
    FileInfo sourceFile,
    DirectoryInfo targetDir,
    out (Stream outputMul, Stream outputIdx) streams
  )
  {
    var converter = new LegacyMULConverter();
    var uopMulName = GetUopMulName(sourceFile.Name);

    if (uopMulName is null)
    {
      streams = (null, null);
      return false;
    }

    int idx = 0;
    var idxNameMatch = Regex.Match(sourceFile.Name, @"\d+", RegexOptions.IgnoreCase);
    if (idxNameMatch.Success) int.TryParse(idxNameMatch.Value, out idx);

    using var inputUop = sourceFile.Open(FileMode.Open);
    Stream outputMul;
    Stream outputIdx;

    if (writeUopTarget)
    {
      outputMul = new FileInfo(GetCaseNudgedPathName(targetDir.FullName, uopMulName + ".mul")).Create();
      outputIdx = new FileInfo(GetCaseNudgedPathName(targetDir.FullName, GetMulIdxName(uopMulName))).Create();
    }
    else
    {
      outputMul = new MemoryStream();
      outputIdx = new MemoryStream();
    }
    
    
    var mulType = MulNameToType(uopMulName);

    converter.FromUOP(inputUop, outputMul, outputIdx, mulType, idx, new ConsoleProgress(sourceFile.Name, "uopToMul"));
    streams = (outputMul, mulType != FileType.MapLegacyMUL ? outputIdx : null);

    return true;
  }

  static bool EncodeFile(Stream source, Stream target, Stream output, string fileName)
  {
    source.Seek(0, SeekOrigin.Begin);
    target.Seek(0, SeekOrigin.Begin);
    output.Seek(0, SeekOrigin.Begin);

    using var encoder = new VCDiff.Encoders.VcEncoder(
      source,
      target,
      output,
      maxBufferSize: 1,
      blockSize: blockSize,
      chunkSize: chunkSize
    );
    var progress = new ConsoleProgress(fileName, "vcdiff");
    var result = encoder.Encode(interleaved: false, progress: new ConsoleProgress(fileName, "vcdiff"));

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

  static string CalculateSHA256(Stream stream)
  {
    // Use managed SHA256 impl on WASM as it does not have access to native crypto
    if (RuntimeInformation.OSArchitecture == Architecture.Wasm)
    {
#if WASM_USE_SHA256
      stream.Seek(0, SeekOrigin.Begin);
      Span<byte> block = stackalloc byte[4096];
      var sha256 = new SHA256ManagedImplementation();
      int length;
      while ((length = stream.Read(block)) > 0)
      {
        sha256.HashCore(block, 0, length);
      }
    
      var hash = sha256.HashFinal();
      return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
#else
      return "";
#endif
    }
    else
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
  }

  static bool IsValidUOFile(FileInfo f) =>
    f.Extension switch
    {
      ".mul" or ".idx" or ".uop" or ".txt" or ".def" or ".rle" or ".mp3" or ".midi" => true,
      _ => false
    } || f.Name.StartsWith("cliloc.", StringComparison.InvariantCultureIgnoreCase);

  private static string RemoveRootPath(string root, string path) =>
    path.Replace(root, string.Empty)
      .TrimStart('/')
      .TrimStart('\\')
      .TrimEnd('/')
      .TrimEnd('\\');
}