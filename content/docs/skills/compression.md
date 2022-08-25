---
title: Compression
---

# Compression

Lossless compressions

## Examples

### Compression

<pre class="example">
<code>"Can you can a can as a canner can can a can?" to deflate</code>
</pre>

<pre class="example">
<code>"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" to lz4</code>
</pre>

### Decompression

<pre class="example">
<code>decompress deflate c07MU6jML1VIBtKJELJYAczISy0C8+Ey9gA=</code>
</pre>

<pre class="example">
<code>decomp lz4 BCJNGGBAggwAAAAfYQEAFmBhYWFhYWEAAAAA</code>
</pre>

## Algorithms

| Algorithm | Keys |
|---|---|
| Zlib | `zlib` |
| Gzip | `gzip` `gz` |
| Deflate | `deflate` |
| Snappy | `snappy` |
| LZ4 | `lz4` |