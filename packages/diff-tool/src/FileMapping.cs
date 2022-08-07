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

}