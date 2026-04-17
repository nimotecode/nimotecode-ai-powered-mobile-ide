---
title: Features | NimoteCode
---

# Features

<div class="feature-hero">
  <p class="feature-eyebrow">NimoteCode Capability Map</p>
  <h2>Mobile Delivery Stack for Real Engineering Work</h2>
  <p class="feature-lead">From SSH access to final commit, NimoteCode keeps coding, diagnosis, automation, and release workflows connected in one focused mobile interface.</p>
</div>

## Overview

| Category | Capabilities | Availability |
|----------|-------------|-------------|
| **Workspace & File Management** | Local & SSH workspaces, file explorer, SSH profiles, auto-reconnection | Free |
| **Terminal** | Multi-tab, persistence, search, output parsing | Free |
| **Source Control** | Git workflow, diffs, commits, branches, stash, Git AI | Pro |
| **LSP & Debug** | Diagnostics, code actions, breakpoints, call stack, variables | Pro |
| **AI & Automation** | AI Chat, AI Agent, memory system, provider templates | Free |
| **Tasks & Timeline** | Task runner, timeline tracing, causal analysis, AI diagnostics | Free |
| **Sync / Cache** | Local↔Remote sync, path safety, operation history | Pro |
| **Settings & Account** | Theme, language, keyboard, authentication, subscriptions | Free |

---

## Workspace & Connectivity

### Core Workspace Features

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Dual Workspace Modes** | Support for both local filesystem and remote SSH workspaces | Local: device storage access; SSH: secure remote connection | Free |
| **SSH Connection Profiles** | Save and manage multiple server configurations | Persistent storage via Hive, automatic last workspace restoration | Free |
| **Heartbeat Monitoring** | Continuous connection health checking | 30-second keepalive intervals, background/foreground awareness | Free |
| **Auto-Reconnection** | Automatic recovery from network failures | Stateful reconnection with terminal session restoration | Free |
| **App Lifecycle Awareness** | Smart connection management based on app state | Pauses monitoring in background, verifies on resume | Free |

### File Operations

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **File Explorer** | Tree-based navigation with editor integration | Local & remote (SFTP) filesystem providers | Free |
| **File Operations** | Create, move, rename, delete files and directories | Atomic operations with error handling | Free |
| **Editor Integration** | Seamless navigation between explorer and editor | File path tracking, quick open, recent files | Free |

---

## Terminal & Command Execution

### Terminal Capabilities

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Multi-Tab Terminal** | Concurrent terminal sessions | Independent channel management, session switching | Free |
| **Terminal Persistence** | Session restoration after reconnection | Working directory preservation, shell state restoration | Free |
| **Real-time Output** | Live streaming of command output | Pseudo-terminal emulation, ANSI color support | Free |
| **Output Search** | Fast search through terminal history | Keyword matching, incremental search | Free |
| **Terminal Output Parsing** | Automatic extraction of errors and warnings | Rust-based parser, error/warning detection, exit code analysis | Free |

---

## Source Control (Pro)

### Git Workflow

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Change Management** | Staged/unstaged/conflicted changes view | File-level granularity, diff preview per file | Pro |
| **Commit & Sync** | Complete Git operations in-app | Commit, pull, push, fetch, rebase support | Pro |
| **Branch Management** | Branch creation, switching, deletion | Local and remote branch listing, checkout | Pro |
| **Stash Operations** | Stash and apply changes | Stash list, apply, drop, pop operations | Pro |
| **History & Diff** | Commit history and file diffs | Line-level diff display, blame annotation | Pro |

### Git AI Integration

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **AI Commit Messages** | Generate high-quality commit messages | Diff analysis, semantic understanding, multiple suggestions | Pro |
| **Change Explanation** | AI-powered explanation of modifications | Context-aware analysis, impact assessment | Pro |
| **Risk Detection** | Identify potentially problematic changes | Pattern recognition, anti-pattern detection | Pro |

---

## LSP & Debug (Pro)

### Language Server Protocol

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Diagnostics Panel** | Real-time error and warning display | Severity filtering (Error/Warning/Info/Hint), file grouping | Pro |
| **Code Actions** | Quick fixes and refactor suggestions | LSP codeAction provider, one-click application | Pro |
| **LSP Install Wizard** | Guided language server setup | Auto-detection, installation, verification flow | Pro |
| **Go to Definition** | Symbol navigation | LSP definition provider, peek support | Pro |
| **Reference Finding** | Find all references to a symbol | LSP references provider, usage listing | Pro |

### Debugger

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Runtime Controls** | Pause, continue, step operations | Step over, step into, step out, restart | Pro |
| **Breakpoints** | Line breakpoints with conditions | Breakpoint management, hit counting, conditional breakpoints | Pro |
| **Call Stack** | Stack trace navigation | Frame switching, async stack traces | Pro |
| **Variables Panel** | Inspect and modify variables | Scope grouping, value editing, watch expressions | Pro |
| **Watch Expressions** | Custom expression evaluation | Real-time updates, formatted output | Pro |
| **Debug Console** | REPL and expression evaluation | Command execution, output display | Pro |

---

## AI & Automation

### AI Chat & Agent

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Dual AI Modes** | Chat for Q&A, Agent for automation | Intent-based routing, task complexity assessment | Free |
| **Provider Templates** | Pre-configured AI providers | OpenAI, Anthropic, custom OpenAI-compatible endpoints | Free |
| **Secure Credential Storage** | Safe API key management | Encrypted storage, keychain integration | Free |
| **Advanced Model Config** | Fine-grained model parameters | Temperature, max tokens, top-p, streaming options | Free |

### Memory System

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Short-Term Memory** | Current session context | Message queue, max 100 messages, metadata tracking | Free |
| **Long-Term Memory** | Persistent knowledge storage | Memory item indexing, tag-based organization, max 1000 items | Free |
| **Smart Compression** | Multiple compression strategies | Summarize, sliding window, importance-based, hybrid modes | Free |
| **Token Budget Management** | Context window optimization | Token counting, budget allocation, auto-compression triggers | Free |
| **Similarity Retrieval** | Relevant memory search | Keyword matching, tag filtering, importance scoring | Free |

### Agent Execution System

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Tool Registry** | Built-in and user-defined tools | File operations, terminal commands, Git operations, custom tools | Free |
| **Secure Tool Execution** | Validation and safety checks | Path validation, command whitelisting, concurrent locking | Free |
| **Error Handling** | Robust error recovery | Retry policies, fallback mechanisms, self-correction | Free |
| **Observability** | Execution tracing and logging | Step-by-step visibility, performance metrics, audit trail | Free |
| **Reflection Engine** | Self-assessment and improvement | Outcome evaluation, strategy adaptation, learning from mistakes | Free |

### Project Indexing

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Workspace Understanding** | Project structure analysis | File type detection, dependency graph, build system identification | Free |
| **User Tools** | Custom workflow automation | Tool templates, parameter configuration, reuse across sessions | Free |
| **Chat History** | Persistent conversation storage | Workspace-scoped history, searchable archives | Free |

---

## Tasks & Timeline

### Tasks Panel

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Task Grouping** | Organized task collections | Folder-based organization, drag & drop reordering | Free |
| **Remote Execution** | Run commands on SSH servers | Working directory selection, environment variables | Free |
| **State Tracking** | Real-time task status | Pending/Running/Success/Failed states, progress indication | Free |
| **Output Capture** | Command output streaming | Live updates, log retention, error highlighting | Free |

### Timeline Panel

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Event Ingestion** | Comprehensive event capture | Debug, LSP, terminal, Git, AI, user edit events | Free |
| **Trace Building** | Causal event chaining | Event correlation, timeline construction, session scoping | Free |
| **Filtering** | Source and severity filters | Multi-select filtering, search, temporal ranges | Free |
| **Trace Persistence** | Automatic saving to .nimote | JSON storage, auto-save interval, max 50 traces | Free |
| **Export Capabilities** | Trace sharing and handoffs | JSON export, summary generation, incident reporting | Free |

### Timeline AI

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Root Cause Analysis** | AI-powered problem diagnosis | Pattern recognition, causal inference, error correlation | Free |
| **Fix Suggestions** | Actionable recommendations | Context-aware suggestions, code snippets, step-by-step guidance | Free |
| **Auto-Analysis** | Triggered on errors | Debounced analysis, background processing, status notifications | Free |

---

## Sync / Cache (Pro)

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Bidirectional Sync** | Local ↔ Remote transfer | Direction selection, file comparison, conflict detection | Pro |
| **Path Safety** | Target path constraints | Whitelist validation, parent directory checks, dry-run preview | Pro |
| **Operation History** | Sync activity log | Timestamped records, status tracking, retry capability | Pro |
| **Selective Sync** | File and folder selection | Include/exclude patterns, size filters, modification time | Pro |

---

## Settings & Account

### Application Settings

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Theme System** | Light/Dark/System themes | Material Design 3, dynamic color, OLED optimization | Free |
| **Multi-Language** | 6+ language support | English, 中文, 日本語, 한국어, Русский, Español | Free |
| **Editor Typography** | Font and spacing controls | Font family, size, line height, word wrap | Free |
| **Keyboard Behavior** | Input method optimization | Soft keyboard tuning, hardware keyboard support, key mapping | Free |

### Account & Subscription

| Feature | Description | Technical Details | Availability |
|---------|-------------|-------------------|-------------|
| **Authentication** | Multiple sign-in methods | Email/password, Google Sign-In, Apple Sign-In | Free |
| **Anonymous Upgrade** | Guest to account conversion | Data migration, seamless transition | Free |
| **Entitlement Check** | Pro status verification | Subscription validation, trial tracking, grace period | Free |
| **Purchase Restore** | Subscription recovery | App Store/Google Play integration, receipt validation | Free |

---

## Pro Gating & Limitations

### Current Pro-Locked Features

| Panel | Status | Notes |
|-------|--------|-------|
| `sourceControl` | 🔒 Pro | Git workflow, diffs, commits, Git AI |
| `lsp` | 🔒 Pro | Diagnostics, code actions, language servers |
| `debug` | 🔒 Pro | Breakpoints, call stack, variables, watch |
| `syncCache` | 🔒 Pro | Local↔Remote sync, transfer operations |

### Mode Restrictions

| Feature | Local Mode | SSH Mode |
|---------|-----------|----------|
| File Explorer | ✅ | ✅ |
| Terminal | ✅ | ✅ |
| Source Control | ✅ (Pro) | ✅ (Pro) |
| LSP | ✅ (Pro) | ✅ (Pro) |
| Debug | ❌ | ✅ (Pro) |
| Tasks | ❌ | ✅ |
| Timeline | ✅ | ✅ |
| AI Chat/Agent | ✅ | ✅ |
| Sync/Cache | ✅ (Pro) | ✅ (Pro) |

### Data Persistence

| Data Type | Location | Scope |
|-----------|----------|-------|
| Workspace Metadata | `.nimote/index.json` | Per workspace |
| Chat Histories | `.nimote/chat_histories/` | Per workspace |
| Agent Histories | `.nimote/agent_histories/` | Per workspace |
| Timeline Traces | `.nimote/timeline/` | Per workspace |
| SSH Profiles | App Storage | Global |
| AI Config | Secure Storage | Global |

---

## Explore More

- [Quick Start Guide](/docs/quick-start)
- [SSH Workspace Setup](/docs/ssh)
- [Source Control Workflow](/docs/source-control)
- [AI Assistant](/docs/ai)
- [Timeline Panel](/docs/timeline)
