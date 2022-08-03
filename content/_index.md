---
title: Introduction
type: docs
---

# Yozuk

## Introduction

Yozuk is an assistant bot designed for helping programmers with trivial tasks such as UUID generation, hash calculation and timestamp conversion.
Unlike normal command-line tools, Yozuk uses a simple NLP approach to infer the meaning of your requests, so you don't have to remember the exact syntax of commands.

## What can Yozuk do?

For example...

- UUID generation

    <pre class="example"><code>generate 3 uuids</code></pre>

- Calculation

    <pre class="example"><code>(12345 + 43) * sqrt(5)</code></pre>

- Dummy text generation

    <pre class="example"><code>25 words lorem ipsum</code></pre>

- Digest calculation

    <pre class="example"><code>"Sphinx of black quartz, judge my vow!" to sha384</code></pre>

- Base64 decoding

    <pre class="example"><code>8J+MuPCfjLzwn42E8J+Mvw==</code></pre>

- And so on!

  The comprehensive [skill list is here]({{< relref "/docs/skills" >}}).

## Getting Started

[Web App]({{< relref "/docs/app/web" >}}) is the easiest way to try Yozuk.

Yozuk provides a [Command Line App]({{< relref "/docs/app/cli" >}}) called `zuk`, if you prefer a terminal interface.

Also, chatbot integrations are available for [Telegram]({{< relref "/docs/app/telegram" >}}), [Slack]({{< relref "/docs/app/slack" >}}) and [Discord]({{< relref "/docs/app/discord" >}}).

## Development

https://github.com/yozuk/yozuk

Yozuk provides API for [Rust]({{< relref "/docs/development/rust" >}}) and 
[TypeScript]({{< relref "/docs/development/typescript" >}}) (and JavaScript).
