---
outline: deep
---

# Test Your Browser

## Browser support

Before you start testing your browser it's important to note not all browsers are compatible with the Web Client.

Here's what works and what doesn't:

| Browser                                                                                                        | Status       | Notes                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome@2.0.0/chrome_24x24.png"> **Chrome**               | Recommended  | Best overall compatibility and performance                                                                                                              |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome@2.0.0/chrome_24x24.png"> **Chrome <br> (as app)** | Recommended  | Fewer UI distractions, less issues with hardcoded browser keybinds                                                                                      |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge@2.0.7/edge_24x24.png"> **Microsoft Edge**           | Supported    | Same Chromium engine as Chrome. Often grants more storage quota. Good choice as a [dedicated game browser](/players/troubleshooting-dedicated-browser). |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/brave@3.0.13/brave_24x24.png"> **Brave**                 | No support   | We don't target or test it while developing or releasing features. Don't expect any help with browser specific issues.                                  |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox@3.0.10/firefox_24x24.png"> **Firefox**           | No support   | We don't target or test it while developing or releasing features. Don't expect any help with browser specific issues.                                  |
| <img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari@2.0.0/safari_24x24.png"> **Safari**               | No support   | We don't target or test it while developing or releasing features. Don't expect any help with browser specific issues.                                  |
| **Incognito / Private mode**                                                                                   | Incompatible | Severely limited storage quota, game files won't fit.                                                                                                   |

_Last updated: March 8, 2026_

## Is WebGL working?

The Web Client needs WebGL to render graphics. If WebGL isn't working, the game won't run at all.

- **[get.webgl.org/webgl2](https://get.webgl.org/webgl2)**: You should see a spinning cube. If you see an error message
  instead, WebGL is not working on your setup and you'll need to fix that first (see the
  [performance guide](/players/troubleshooting-performance)).
- **[webglreport.com](https://webglreport.com/?v=2)**: Shows a detailed report of what GPU your browser is using and
  what it supports. Look at the **"Unmasked Renderer"** field; it should show your actual graphics card name (e.g.,
  "NVIDIA GeForce RTX 3060" or "Apple M2"). If it says any of the following, your browser is using slow software
  rendering instead of your GPU:

  - **Google SwiftShader** (Chrome/Edge on any OS)
  - **llvmpipe** (Linux)
  - **Apple Software Renderer** (macOS)

  If you see one of these, follow the [performance guide](/players/troubleshooting-performance) to enable hardware
  acceleration.

## How fast is your GPU in the browser?

If the game runs but feels slow, these benchmarks can help you compare your setup to others and confirm whether your GPU
is actually being used:

- **[WebGPUStress.com](https://webgpustress.com/)**: A stress test for your GPU using WebGL. Useful for checking if your
  graphics card overheats or produces visual glitches under heavy load.
- **[Volume Shader BM](https://www.volumeshader.dev/en/gpu-test)**: A detailed GPU benchmark with FPS and frame time
  graphs.

## Is WebAssembly working?

The game engine runs on WebAssembly (WASM). All modern browsers support it, but you can double-check here:

- **[wasm.joway.io](https://wasm.joway.io/)**: A simple yes/no check. If it says your browser doesn't support WASM,
  you'll need to update your browser.

## Overall browser speed

- **[Speedometer 3.1](https://browserbench.org/Speedometer3.1/)**: The industry-standard benchmark for how responsive
  your browser is. Takes a few minutes to run. A low score could mean your browser is bogged down by extensions,
  settings, or an older machine.
