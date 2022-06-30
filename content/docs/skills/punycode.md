---
title: Punycode
---

Punycode Encoder / Decoder

## Encode

This skill detects domain names with non-ASCII characters and encodes them into punycode.

Domain names must end with TLD listed in https://www.iana.org/domains/root/db.

```
$ zuk 🌵🌵🌵.com
```

## Decode

An input string must start with `xn--`.

```
$ zuk xn--3o8h
```