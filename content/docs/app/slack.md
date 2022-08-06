---
title: Slack Bot
weight: 10
---

# Slack Bot

## Usage

### Processing files

Some commands accept files as input. You can send command text with attachments.

<img alt="File upload dialog" src="/images/yozuk-slack-file.png" width="314" />

## Pre-built Binaries

- Linux x64 [yozuk-slack-x86_64-unknown-linux-gnu.tar.xz](https://github.com/yozuk/yozuk/releases/latest/download/yozuk-slack-x86_64-unknown-linux-gnu.tar.xz)

## Repository

https://github.com/yozuk/yozuk-slack

## Bot Configuration

### Scopes

`yozuk-slack` requires the following permission scopes.

- `app_mentions:read`
- `chat:write`
- `file:write`
- `im:history`

### Event Subscriptions

`yozuk-slack` receives requests via the [Slack Events API](https://api.slack.com/apis/connections/events-api).

You have to add the following bot user events.

- `app_mention`
- `message.im`