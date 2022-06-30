---
title: Introduction
type: docs
---

## Introduction

Yozuk is an assistant bot designed for helping programmers with trivial tasks such as UUID generation, hash calculation and timestamp conversion.
Unlike normal command-line tools, Yozuk uses a simple NLP approach to infer the meaning of your requests, so you don't have to remember the exact syntax of commands.

## Apps

### Web App

The easiest way to try Yozuk is the web app.

Your inputs will be processed completely on your computer and never sent to the server.

### Command Line App

If you prefer a terminal interface, Yozuk has a CLI application called `zuk`.

There are pre-built binaries for some platforms, but you can build it from the source by yourself.
For more information, please refer to the [Installation](../../installation/cli) section.

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
