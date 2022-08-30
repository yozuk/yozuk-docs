---
title: Security
---

# Security

## Is it safe to exchange sensitive data with a chatbot?

We strongly recommend using [Web App]({{< relref "/docs/app/web" >}}) or [Command Line App]({{< relref "/docs/app/cli" >}}) when you process sensitive data such as passwords. Instant messaging services are not safe for confidential communication because administrators are capable of reading or modifying your data.

## Does Yozuk always use a secure random number generator?

Yes, it does. Yozuk depends on the [getrandom](https://crates.io/crates/getrandom) crate, which always provides cryptographically secure random data without insecure fallbacks.