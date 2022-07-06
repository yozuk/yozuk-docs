---
title: Command Line
weight: 2
---

# Command Line App

## Introduction

If you prefer a terminal interface, Yozuk has a CLI application called `zuk`.

There are pre-built binaries for some platforms, but you can build it from the source by yourself.

`zuk` has no specific syntax for input arguments.

```Shell
$ zuk "Hello world!" to base64
SGVsbG8gd29ybGQh

$ zuk md5 sha1 < README.md
MD5: 9a66c2053bdd56085aa239fb72398fdf
SHA-1: ce45d3f41d0010ae30fe0fe285511665b255882f
```

Without arguments, `zuk` starts as an interactive (REPL) mode.

```
$ zuk
Hi. I'm Yozuk. How may I assist you?
» SGVsbG8gd29ybGQh
Base64 Decoder: Decoding Base64 string
Hello world!
» roll dice
3
» 
```


## Installation

### Pre-built Binaries

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


### Package Manager

#### crates.io

```Shell
cargo install zuk
```

#### Homebrew

```Shell
brew tap yozuk/yozuk
brew install zuk
```

#### WAPM

```Shell
wapm install yozuk/zuk
```

### From Repository

#### Build Requirements

- Rust toolchain: 1.60.0 or later
- CMake: 3.12 or later

```Shell
git clone https://github.com/yozuk/yozuk.git
cd yozuk/zuk
cargo install .
```

#### Features

- `rayon` (default) - Enables parallelization.
- `rpc` (default) - Enables RPC server mode.
- `secure-context` (default) - Restricts available system calls for further security.
This feature takes effect only on Linux.

