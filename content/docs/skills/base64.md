---
title: Base64
---

# Base64

Base64 Encoder / Decoder

## Examples

### Encode

<pre class="example">
<code>"Hello world!" to base64</code>
</pre>

### Decode

<pre class="example">
<code>SGVsbG8gd29ybGQh</code>
</pre>

<pre class="example">
<code>iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAACoAAAAqAF59LPGAAAAB3RJTUUH5gYdDQspiGT6KQAAAalJREFUeNql0wOMHFEAgOFJY2ys2rZ9tm3btq3obMa1bTes3fCwil3+y2iN4eP3vEwikayXy+UPle9v5YuFr6rsfbFYvE7QVsbG94EK+KWbMT8/bynwSzCUkZ2dzanTp3jz4a1ZRDCW0dLTzpYxf063hlFxsZszty8yMDDA69evDQMLCwuUFuXi5XaCIH8PHj58QEpnIXHtORxLcOdQkitzc3OMjo4aBjLSEugqdedyfziX+sNwPnWAb9++qfLU//KSfGIjg5ieHDcMeDgdZrY9gIMHDhDutZvqTAccHE4TGRmJw8lDjDX5cn04gszoU7Q21+sDro5HuNgXxqHda6jNPE1RkgMzM9PU1taSEXmUrnI/3Bz2cn8yBjfHw/rAyFA/Yb5HmGr1ozHPBW9PJ5QbhenpKRpyXdTo9k3LuTkaibuTAUD13r17l+rKYgYH+njx4gVxcXE8e/YMx1MH1cO7PxVDQcJpaqvLzS/j5OQkIpGI8+fP8/HjR3IyUwgO8GRosBeZTGYe+PnzJ0VFRarCZjfSL8OZlm/lB3YA9wXVkVQFbDjO91R1FZIKQwuB2OZZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA2LTI5VDEzOjExOjQxKzAwOjAwmuMGcAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNi0yOVQxMzoxMTo0MSswMDowMOu+vswAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC</code>
</pre>

{{< hint warning >}}
Too short text may not be recognized as a Base64 input.
{{< /hint >}}
