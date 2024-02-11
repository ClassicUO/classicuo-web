using System.Text.Json.Serialization;

namespace LegacyMUL;

public readonly record struct PatchInfo(
  string source,
  string file,
  string patchHash,
  long patchLength,
  string targetHash,
  long targetLength,
  string sourceHash,
  long sourceLength
)
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