---
title: Punycode
---

# Punycode

Punycode Encoder / Decoder

## Examples

### Encode

This skill detects domain names with non-ASCII characters and encodes them into punycode.

Domain names must end with TLD listed in https://www.iana.org/domains/root/db.

```
🌵🌵🌵.com
```

### Decode

An input string must start with `xn--`.

```
xn--3o8h
```