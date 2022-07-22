---
title: Punycode
---

# Punycode

Punycode Encoder / Decoder

## Examples

### Encode

This skill detects domain names with non-ASCII characters and encodes them into punycode.

Domain names must end with TLD listed in https://www.iana.org/domains/root/db.

<pre class="example">
<code>🌵🌵🌵.com</code>
</pre>

### Decode

An input string must start with `xn--`.

<pre class="example">
<code>xn--3o8h</code>
</pre>
