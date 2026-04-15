# Quick Start (3 Minutes)

This guide is optimized for first success in one session.

## Goal

In 3 minutes, you will:

1. Open a workspace
2. Run a real command
3. Edit one file
4. Use one high-value panel (Source Control / AI / Debug)

## Step 1: Open Workspace (30s)

Choose one mode:

- Local Explorer: open local project directory
- Remote Explorer: connect via SSH

If using remote mode:

1. Create SSH profile (`host`, `port`, `username`)
2. Select auth method (password or private key)
3. Connect and confirm workspace root path

## Step 2: Run Command in Terminal (30s)

1. Open terminal panel
2. Run a verification command (for example `pwd`, `ls`, or your build/test command)
3. If output is long, use terminal search

## Step 3: Edit and Save (45s)

1. Open a source file from explorer
2. Edit one line
3. Save file
4. Use symbol navigation or in-file find/replace if needed

## Step 4: Choose One Outcome Path (75s)

### Path A: Commit Changes

Open Source Control and:

- inspect modified files
- stage changes
- commit (and push if configured)

Reference: [/docs/source-control](/docs/source-control)

### Path B: Ask AI to Accelerate

Open AI panel and:

- choose provider config
- ask for explanation/refactor/fix suggestions
- optionally run AI Agent for workflow automation

Reference: [/docs/ai](/docs/ai)

### Path C: Diagnose Faster (Pro)

Open LSP/Debug and:

- check diagnostics
- apply code actions
- start debug session and inspect variables/watch

References: [/docs/lsp](/docs/lsp), [/docs/debug](/docs/debug)

## High-Value Scenarios

1. Remote hotfix on production-like server: `/docs/ssh` + `/docs/terminal` + `/docs/source-control`
2. Fast bug triage: `/docs/lsp` + `/docs/debug` + `/docs/timeline`
3. Repetitive task automation: `/docs/tasks` + `/docs/ai`
4. Stable daily setup: `/docs/settings` + `/docs/configuration`

## Next Best Step

After first run, configure these immediately:

- AI provider profile: [/docs/configuration](/docs/configuration)
- Editor and keyboard preferences: [/docs/settings](/docs/settings)
