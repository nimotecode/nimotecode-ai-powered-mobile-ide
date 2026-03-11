# Terminal Usage

NimoteCode provides a powerful terminal experience with multi-session support, quick commands, and AI-powered analysis.

## Overview

The terminal in NimoteCode is a full-featured SSH terminal that supports:

- **Multiple Sessions**: Up to 6 concurrent terminals
- **Full Shell Support**: Bash, Zsh, Fish, and more
- **ANSI Colors**: Complete color support
- **Unicode**: Full Unicode character support
- **AI Analysis**: Analyze terminal output with AI

## Opening Terminals

### From SSH Connection

1. Connect to an SSH server
2. Tap the **Terminal** icon in the toolbar
3. A new terminal session opens automatically

### From File Browser

1. Long-press any file or directory
2. Select **"Open in Terminal"**
3. Terminal opens at that location

### Multiple Terminals

- **New Terminal**: Tap the **+** button in terminal panel
- **Maximum**: Up to 6 concurrent terminals
- **Tabbed Interface**: Each terminal has its own tab

## Terminal Interface

### Layout

```
┌─────────────────────────────────────┐
│ [Tab 1] [Tab 2] [+] [×]             │  ← Terminal tabs
├─────────────────────────────────────┤
│                                     │
│   Terminal Output Area              │  ← Command output
│                                     │
│                                     │
├─────────────────────────────────────┤
│ $ _                                 │  ← Input line
├─────────────────────────────────────┤
│ [Quick Commands] [AI] [Full]       │  ← Action buttons
└─────────────────────────────────────┘
```

### Tab Controls

- **Switch Tabs**: Tap on tab name
- **Close Tab**: Tap × on tab
- **Add Tab**: Tap + button

### Action Buttons

| Button | Function |
|--------|----------|
| **Quick Commands** | Show quick command menu |
| **AI Analysis** | Analyze output with AI |
| **Full Screen** | Expand terminal to full screen |

## Terminal Features

### Shell Support

NimoteCode supports various shell types:

- **Bash**: Most common Linux shell
- **Zsh**: Popular with Oh My Zsh
- **Fish**: User-friendly shell
- **Dash**: Lightweight shell
- **Custom Shells**: Any shell installed on server

### Input Features

- **Command History**: Use ↑↓ arrows to navigate
- **Tab Completion**: Press Tab for auto-completion
- **Copy/Paste**: Long-press for context menu
- **Text Selection**: Long-press and drag

### Output Features

- **ANSI Colors**: Full 256-color support
- **ANSI Escape Codes**: All standard sequences
- **Unicode**: Complete Unicode character support
- **Emoji**: Full emoji support

### Display Options

- **Font Size**: Adjust in settings
- **Font Family**: Choose from available fonts
- **Color Themes**: Select terminal color scheme
- **Scrollback**: Up to 10,000 lines of history

## Quick Commands

Quick commands provide one-tap access to common operations.

### File System Commands

| Icon | Command | Description |
|------|---------|-------------|
| 📋 | `ls` | List directory contents |
| 📁 | `ls -la` | List all files with details |
| 🔍 | `find . -name` | Find files by name |
| 🔧 | `make` | Build project |

### Package Managers

| Icon | Command | Description |
|------|---------|-------------|
| 📦 | `npm install` | Install Node.js packages |
| 📦 | `yarn install` | Install with Yarn |
| 📦 | `pnpm install` | Install with PNPM |
| 📦 | `cargo build` | Build Rust project |

### System Commands

| Icon | Command | Description |
|------|---------|-------------|
| 📊 | `top` | Display system processes |
| 📋 | `ps aux` | List all processes |
| 🌐 | `ping google.com` | Test network connectivity |
| 🔍 | `grep -r` | Search in files |

### Using Quick Commands

1. Tap the **Quick Commands** button
2. Select a command category
3. Tap the desired command
4. Command executes immediately

## AI Terminal Analysis

Analyze terminal output with AI to understand errors and get suggestions.

### How to Use

1. Run a command in the terminal
2. Wait for output to complete
3. Tap the **AI Analysis** button
4. Review AI-generated analysis

### Analysis Output

The AI provides structured analysis:

```
**Quick Summary:**
Brief overview of what happened

**Errors & Warnings:**
- Error 1: Description and fix suggestion
- Error 2: Description and fix suggestion

**Output Summary:**
Key information extracted from output

**Next Steps:**
1. Recommended action 1
2. Recommended action 2
```

### Use Cases

- **Error Diagnosis**: Understand why a command failed
- **Output Summary**: Get quick summary of long output
- **Fix Suggestions**: Get AI-powered fix recommendations
- **Learning**: Understand unfamiliar commands

### Supported Languages

AI analysis supports multiple languages:

- English
- Chinese (中文)
- Japanese (日本語)
- And more...

## Terminal Sessions

### Session Management

- **Unique Channels**: Each terminal has a unique ID
- **Session Persistence**: Sessions persist when switching panels
- **Auto Cleanup**: Sessions close when workspace closes
- **Reconnection**: Sessions reconnect on SSH reconnect

### Multiple Sessions

Use multiple terminals for different tasks:

```
Terminal 1: npm run dev     (Development server)
Terminal 2: git status      (Version control)
Terminal 3: docker logs     (Container logs)
Terminal 4: vim config      (File editing)
```

### Session Best Practices

1. **Name Your Tabs**: Keep track of terminal purposes
2. **Close Unused**: Free up resources
3. **Use Quick Commands**: Speed up common tasks
4. **Analyze Errors**: Use AI analysis for troubleshooting

## Keyboard Shortcuts

### Terminal Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+C | Interrupt current command |
| Ctrl+D | Exit/logout |
| Ctrl+L | Clear screen |
| Ctrl+R | Search command history |
| Ctrl+A | Move to line start |
| Ctrl+E | Move to line end |
| Ctrl+U | Clear line before cursor |
| Ctrl+K | Clear line after cursor |
| Tab | Auto-complete |

### Navigation Shortcuts

| Shortcut | Action |
|----------|--------|
| ↑ | Previous command |
| ↓ | Next command |
| PgUp | Scroll up |
| PgDn | Scroll down |

## Customization

### Terminal Settings

Access terminal settings from:

**Settings → Terminal**

Available options:

- **Font Size**: 10-24pt
- **Font Family**: Monospace fonts
- **Color Theme**: Built-in themes
- **Scrollback Lines**: 1000-10000
- **Bell Sound**: Enable/disable
- **Cursor Style**: Block/Underline/Bar
- **Cursor Blink**: Enable/disable

### Color Themes

Built-in terminal themes:

- **Default**: Standard terminal colors
- **Solarized Dark**: Popular dark theme
- **Solarized Light**: Popular light theme
- **Dracula**: Purple-tinted dark theme
- **Monokai**: Classic editor theme
- **Custom**: Define your own colors

## Performance Tips

### For Better Performance

1. **Limit Sessions**: Keep only needed terminals open
2. **Clear Output**: Clear large outputs periodically
3. **Use Pipes**: Pipe output to files for large results
4. **Close Unused**: Close terminals not in use

### For Large Output

When dealing with large output:

```bash
# Pipe to file
command > output.txt

# Use less for viewing
command | less

# Use head/tail for partial output
command | head -n 100
command | tail -n 100
```

## Troubleshooting

### Terminal Not Opening

1. Check SSH connection status
2. Verify shell is available on server
3. Try reconnecting to SSH
4. Restart the app

### Display Issues

1. Check terminal settings
2. Verify font compatibility
3. Try different color theme
4. Check for special characters

### Input Problems

1. Check keyboard settings
2. Verify terminal mode
3. Try external keyboard
4. Check for stuck keys

### Performance Issues

1. Reduce scrollback lines
2. Clear terminal output
3. Close unused terminals
4. Check server load

## Advanced Features

### Environment Variables

Set environment variables in terminal:

```bash
export NODE_ENV=production
export API_KEY=your_key_here
```

### Command Aliases

Create aliases for common commands:

```bash
alias ll='ls -la'
alias gs='git status'
alias npmd='npm run dev'
```

### Shell Scripts

Run shell scripts:

```bash
# Make executable
chmod +x script.sh

# Run
./script.sh
```

## Next Steps

- [SSH Remote Development](/docs/ssh) - Set up SSH connections
- [AI Assistant](/docs/ai) - Configure AI providers
- [GitHub Integration](/docs/github) - Connect GitHub

## Support

Need help with terminal?

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)