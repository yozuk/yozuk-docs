---
title: Command Line App
weight: 1
---

## Pre-built Binaries

Pre-built binaries for x64 Windows, Linux and macOS are available on [Github](https://github.com/yozuk/yozuk/releases).

{{< tabs "installation" >}}
{{< tab "macOS x64" >}} 
1. Download https://github.com/yozuk/yozuk/releases/latest/download/zuk-macos-x64.tar.xz
2. Run `tar xf zuk-macos-x64.tar.xz`
{{< /tab >}}
{{< tab "Linux x64" >}}
1. Download https://github.com/yozuk/yozuk/releases/latest/download/zuk-linux-x64.tar.xz
2. Run `tar xf zuk-linux-x64.tar.xz`
{{< /tab >}}
{{< tab "Windows x64" >}}
1. Download https://github.com/yozuk/yozuk/releases/latest/download/zuk-windows-x64.zip
2. Extract `zuk-windows-x64.zip`
{{< /tab >}}
{{< /tabs >}}

## Build from Source

### Build Requirements

- Rust toolchain: 1.60.0 or later
- CMake: 3.12 or later

### From crates.io

```Shell
cargo install zuk
```

### Git Repository

```Shell
git clone https://github.com/yozuk/yozuk.git
cd yozuk/zuk
cargo install .
```

### Features

- `rayon` (default) - Enables parallelization.
- `rpc` (default) - Enables RPC server mode.
- `secure-context` (default) - Restricts available system calls for further security.
This feature takes effect only on Linux.