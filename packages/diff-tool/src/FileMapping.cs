using System.Text.RegularExpressions;

namespace LegacyMUL;

public static class FileMapping
{
    public readonly record struct PatchInfo(string source, string file, string sha256, long length, long size);

    private static readonly Regex IdxRegex = new(@"\d+");
    
    public static readonly IReadOnlyDictionary<string, string> UopFileMap =
        new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase)
        {
            { "artLegacyMUL", "art" },
            { "gumpartLegacyMUL", "gumpart" },
            { "MultiCollection", "multi" },
            { "soundLegacyMUL", "sound" },
            { "map*LegacyMUL", "map*" },
        };

    public static readonly IReadOnlyDictionary<string, string> MulFileMap =
        UopFileMap.ToDictionary(kv => kv.Value, kv => kv.Key);

    private static string GetMappedName(IReadOnlyDictionary<string, string> map, string value)
    {
        if (map.TryGetValue(value, out string uop))
        {
            return uop;
        }

        var match = IdxRegex.Match(value);
        if (
            match.Success
            && int.TryParse(match.Value, out _)
            && map.TryGetValue(value.Replace(match.Value, "*"), out uop)
        )
        {
            return uop.Replace("*", match.Value);
        }

        return null;
    }

    public static string GetMulUopName(string mul) => GetMappedName(MulFileMap, mul.Replace(".mul", "", StringComparison.InvariantCultureIgnoreCase));
    public static string GetUopMulName(string uop) => GetMappedName(UopFileMap, uop.Replace(".uop", "",  StringComparison.InvariantCultureIgnoreCase));

    public static string GetMulIdxName(string mul)
    {
        var idx = mul.Replace(".mul", "", StringComparison.InvariantCultureIgnoreCase);

        if (idx.StartsWith("gumpart", StringComparison.InvariantCultureIgnoreCase))
        {
            return "gumpidx.mul";
        }

        if (idx.StartsWith("multi", StringComparison.InvariantCultureIgnoreCase))
        {
            return "multi.idx";
        }

        return idx + "idx.mul";
    }


    public static FileType MulNameToType(string mul)
    {
        if (mul.StartsWith("art", StringComparison.InvariantCultureIgnoreCase))
            return FileType.ArtLegacyMUL;
        
        if (mul.StartsWith("gump", StringComparison.InvariantCultureIgnoreCase))
            return FileType.GumpartLegacyMUL;
        
        if (mul.StartsWith("multi", StringComparison.InvariantCultureIgnoreCase))
            return FileType.MultiMUL;
        
        if (mul.StartsWith("sound", StringComparison.InvariantCultureIgnoreCase))
            return FileType.SoundLegacyMUL;
        
        if (mul.StartsWith("map", StringComparison.InvariantCultureIgnoreCase))
            return FileType.MapLegacyMUL;

        throw new ArgumentException($"Unknown MUL FileType mapping {mul} => ?");
    }


    public static string GetSubfolder(DirectoryInfo root, DirectoryInfo path) => 
        Path.TrimEndingDirectorySeparator(path.FullName)
            .Replace(Path.TrimEndingDirectorySeparator(root.FullName), "")
            .TrimStart(Path.DirectorySeparatorChar);
    
    public static string GetCaseNudgedPathName(params string[] paths)
    {
        var path = Path.Combine(paths);
        var dir = GetCaseNudgedDirectoryName(Path.GetDirectoryName(path));
        var pattern = Path.GetFileName(path);

        var files = Directory
            .GetFiles(dir, pattern, new EnumerationOptions { MatchCasing = MatchCasing.CaseInsensitive });
    
        if (files.Length > 1)
        {
            throw new Exception($"Ambiguous filename '{pattern}'");
        }

        return files.FirstOrDefault() ?? path;
    }

    public static string GetCaseNudgedDirectoryName(params string[] paths)
    {
        var path = Path.Combine(paths);
        var parent = Path.GetDirectoryName(path);

        if (!Path.Exists(parent))
        {
            parent = GetCaseNudgedDirectoryName(parent);
        }

        var dirName = path.Replace(parent, "", StringComparison.InvariantCultureIgnoreCase).Trim(Path.DirectorySeparatorChar);
        var dirs = Directory.GetDirectories(parent, dirName, new EnumerationOptions { MatchCasing = MatchCasing.CaseInsensitive });

        return dirs.FirstOrDefault() ?? path;
    }

}