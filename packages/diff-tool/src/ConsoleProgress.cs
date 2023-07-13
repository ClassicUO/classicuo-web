using System.Diagnostics.CodeAnalysis;
using System.Text.Json;

namespace LegacyMUL;

public class ConsoleProgress : IProgress<float>
{
  public string FileName { get; }
  public string Type { get; }

  public ConsoleProgress(string fileName, string type)
  {
    FileName = fileName;
    Type = type;
  }

  public void Report(float value)
  {
    if ((int)(value * 10) % 1 == 0)
    {
      Console.WriteLine(
        JsonSerializer.Serialize(
          new PatchProgress(FileName, Type, value),
          typeof(PatchProgress),
          JsonSourceGenerationContext.Default
        )
      );
    }
  }
}