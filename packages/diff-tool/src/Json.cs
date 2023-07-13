using System.Text.Json;
using System.Text.Json.Serialization;

namespace LegacyMUL;

public readonly record struct PatchInfo(string source, string file, string sha256, long length, long size)
{
  public string _tag { get; } = "PatchInfo";
}

public readonly record struct PatchProgress(string file, string type, float value)
{
  public string _tag { get; } = "PatchProgress";
}


[JsonSourceGenerationOptions(WriteIndented = true, PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase)]
[JsonSerializable(typeof(PatchInfo))]
[JsonSerializable(typeof(PatchProgress))]
internal partial class JsonSourceGenerationContext : JsonSerializerContext
{
}