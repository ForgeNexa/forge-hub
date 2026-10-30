# Forge Hub

> Unified application launcher, project discovery, and developer ecosystem manager for ForgeNexa.

[![Forge Hub CI](https://github.com/ForgeNexa/forge-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/ForgeNexa/forge-hub/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Forge Hub is the central mission-control desktop launcher for the **ForgeNexa** developer ecosystem. It automatically discovers installed Forge applications, detects local git projects, monitors runtime processes, and offers one-click project context switching.

---

## Features

- **Automated Ecosystem Discovery**: Scans `$PATH` and standard installation locations for Forge IDE, Forge API, Forge Terminal, and Forge Git.
- **Project Workspaces**: Quickly open any active repository across all compatible Forge tools.
- **Process Supervision**: Monitor running instances, resource utilization, and background daemons.
- **Unified Settings**: Synchronize keyboard shortcuts, theme preferences, and developer profiles.

---

## Architecture

- **Discovery Supervisor**: Built in Go (`discovery/`), providing low-latency system-level process queries, binary path resolution, and filesystem monitoring.
- **Hub Workbench**: Built with React 19, TypeScript, Vite, Tailwind CSS, and Lucide icons.

---

## Getting Started

### Prerequisites

- Go 1.22+
- Bun 1.2+ or Node.js 20+

### Development

```bash
# Test the discovery engine
cd discovery
go test -v -race ./...

# Run the frontend workbench
cd ../web
bun install
bun run dev
```

---

## Part of the ForgeNexa Ecosystem

- [Forge IDE](https://github.com/ForgeNexa/forge-ide) — Extensible, high-performance code editor
- [Forge API](https://github.com/ForgeNexa/forge-api) — Interactive API testing and debugging client
- [Forge Terminal](https://github.com/ForgeNexa/forge-terminal) — High-throughput multiplexed terminal emulator
- [Forge Git](https://github.com/ForgeNexa/forge-git) — Visual git workspace and diff inspector
- [Forge Hub](https://github.com/ForgeNexa/forge-hub) — Unified launcher and project supervisor
- [Forge Core](https://github.com/ForgeNexa/forge-core) — Shared Go foundation libraries

---

## License

MIT © [ForgeNexa](https://forgenexa.github.io)
