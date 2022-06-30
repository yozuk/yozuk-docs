---
title: Base64
---

Base64 Encoder / Decoder

## Encode Base64

```Shell
# From text
$ zuk "Hello world!" to base64

# From pipe
$ zuk base64 < data.txt
```

## Decode Base64

```
$ zuk SGVsbG8gd29ybGQh
```

{{< hint type=note >}}
Too short text may not be recognized as a Base64 input.
{{< /hint >}}