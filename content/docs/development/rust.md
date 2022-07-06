---
title: Rust
---

# Rust

Yozuk is published as a Rust library, so it's really easy to integrate it with your Rust application.

- [`yozuk`](https://crates.io/crates/yozuk) - Core functionality.
- [`yozuk-sdk`](https://crates.io/crates/yozuk-sdk) - Types and utilities for development.

```Rust
use yozuk::Yozuk;
use yozuk_sdk::prelude::*;

let tokens = Tokenizer::new().tokenize("generate uuid");

let zuk = Yozuk::builder().build();
let commands = zuk.get_commands(&tokens, &[]);
if commands.is_empty() {
    println!("I can't understand your request.");
}

let result = zuk.run_commands(commands, &mut [], None);
```

## Features

- `default-skills` - (default) Uses the default skillset.
- `rayon` - Enables parallelization. This feature cannot be used with WebAssembly.