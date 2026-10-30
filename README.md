# Forge Hub — Unified Ecosystem Launcher & Workspace Supervisor

[![Forge Hub Screenshot](assets/forge-hub.svg)](https://forgenexa.github.io/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Go Discovery](https://img.shields.io/badge/Go%20Discovery-1.23+-00ADD8?style=flat-square&logo=go)](https://golang.org)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![CI](https://github.com/ForgeNexa/forge-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/ForgeNexa/forge-hub/actions/workflows/ci.yml)

> **"Mission control for your developer tools."**  
> An open-source, local-first application launcher that discovers installed Forge tools, manages project workspaces, and supervises background processes.

---

## 🏷️ Tags & Hashtags

`#ForgeNexa` `#ForgeHub` `#AppLauncher` `#DeveloperTools` `#DevTools` `#GoLang` `#React19` `#TypeScript` `#ProcessSupervisor` `#OpenSource` `#LocalFirst`

---

## ✨ Features

- **Automated Ecosystem Discovery**: Discovers installed binaries for Forge IDE, Forge API, Forge Terminal, and Forge Git across `$PATH` and system directories.
- **Project Context Switcher**: One-click opening of active repositories across all compatible Forge tools.
- **Process Supervisor**: Monitor background daemon status, active ports, and memory footprint.
- **Unified Settings**: Sync keyboard shortcuts, themes, and developer profiles.

---

## 🛠️ Build & Development

```bash
# Test the Go Discovery Engine
cd discovery
go test -v -race ./...

# Build the React 19 Launcher Workbench
cd ../web
bun install --frozen-lockfile
bun run build
```

---

## 🌐 Part of ForgeNexa

Forge Hub is the central launcher of the [ForgeNexa Developer Tools Ecosystem](https://forgenexa.github.io/).

- [Forge IDE](https://github.com/ForgeNexa/forge-ide) — Code editor with Monaco and Go daemon
- [Forge API](https://github.com/ForgeNexa/forge-api) — High-throughput API testing client
- [Forge Terminal](https://github.com/ForgeNexa/forge-terminal) — Multiplexed terminal emulator
- [Forge Git](https://github.com/ForgeNexa/forge-git) — Visual commit graph DAG and diff viewer
- [Forge Core](https://github.com/ForgeNexa/forge-core) — Shared Go systems foundation

---

## 📄 License

MIT © [ForgeNexa](https://forgenexa.github.io)
