---
title: Command Line
weight: 2
---

# Command Line App

## Introduction

Yozuk has a CLI application called `zuk`.

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

```Shell
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
- Windows x64 [zuk-x86_64-pc-windows-msvc.zip](https://github.com/yozuk/yozuk/releases/latest/download/zuk-x86_64-pc-windows-msvc.zip)
- Windows ARM64 [zuk-aarch64-pc-windows-msvc.zip](https://github.com/yozuk/yozuk/releases/latest/download/zuk-aarch64-pc-windows-msvc.zip)
- MacOS Intel [zuk-x86_64-apple-darwin.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-x86_64-apple-darwin.tar.xz)
- MacOS Silicon [zuk-aarch64-apple-darwin.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-aarch64-apple-darwin.tar.xz)
- Linux x64 [zuk-x86_64-unknown-linux-gnu.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-x86_64-unknown-linux-gnu.tar.xz)
- Linux ARM64 [zuk-aarch64-unknown-linux-gnu.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-aarch64-unknown-linux-gnu.tar.xz)

{{< expand "Other Platforms" "..." >}}

- Linux ARMv7 [zuk-armv7-unknown-linux-gnueabihf.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-armv7-unknown-linux-gnueabihf.tar.xz)
- Linux ARM64 Android (Termux) [zuk-aarch64-linux-android.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/zuk-aarch64-linux-android.tar.xz)

{{< /expand >}}

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

#### WAPM (Experimental)

```Shell
wapm install yozuk/zuk
```

{{< hint warning >}}
The WAPM binary runs on the Wasmer runtime and lacks some features available in the native app.
{{< /hint >}}

### From Repository

#### Build Requirements

{{< tabs "requrements" >}}
{{< tab "macOS x86_64" >}} 
- Rust toolchain: 1.60.0 or later
- CMake: 3.12 or later
{{< /tab >}}
{{< tab "Windows x86_64" >}}
- Rust toolchain: 1.60.0 or later
- CMake: 3.12 or later
{{< /tab >}}
{{< tab "Linux x86_64" >}}
- Rust toolchain: 1.60.0 or later
- CMake: 3.12 or later
- libseccomp
  - Debian: `apt-get install libseccomp-dev`
{{< /tab >}}
{{< /tabs >}}

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

