---
weight: 1
title: FAQ
bookFlatSection: true
---

# FAQ

## Natural Language Processing

### Does Yozuk use AIaaS (Artificial Intelligence as a service) such as Amazon Lex or Google Cloud NLP?

No, it doesn’t. Yozuk has the internal NLP engine.

### Does Yozuk learn from conversations with users?

No, it doesn’t. Yozuk does not save any data. The machine-learning process was done in the build step and Yozuk will never be affected by user inputs.

## Security

### Is it safe to exchange sensitive data with a chatbot?

We strongly recommend using [Web App]({{< relref "/docs/app/web" >}}) or [Command Line App]({{< relref "/docs/app/cli" >}}) when you process sensitive data such as passwords. Instant messaging services are not safe for confidential communication because administrators are capable of reading or modifying your data.

### Does Yozuk always use a secure random number generator?

Yes, it does. Yozuk depends on the [getrandom](https://crates.io/crates/getrandom) crate, which always provides cryptographically secure random data without insecure fallbacks.