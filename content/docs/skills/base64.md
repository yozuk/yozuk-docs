---
title: Base64
---

# Base64

Base64 Encoder / Decoder

## Examples

### Encode

#### From text

<pre class="example">
<code>"Hello world!" to base64</code>
</pre>

#### From a file

<pre class="example">
<code>base64</code><span class="file" data-filename="data.txt">SGVsbG8gd29ybGQh</span>
</pre>

### Decode

<pre class="example">
<code>SGVsbG8gd29ybGQh</code>
</pre>

{{< hint warning >}}
Too short text may not be recognized as a Base64 input.
{{< /hint >}}
