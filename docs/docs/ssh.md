# SSH Remote Development

NimoteCode provides powerful SSH remote development capabilities, allowing you to connect to your servers and edit files from anywhere.

## Overview

SSH (Secure Shell) is a protocol for securely connecting to remote servers. NimoteCode uses SSH to provide:

- **Secure Connections**: Encrypted connections to your servers
- **SFTP File Manager**: Browse and edit remote files
- **Terminal Access**: Run commands on remote servers
- **Multi-Session Support**: Work with multiple servers simultaneously

## Connection Management

### Adding a New Connection

1. Open the **Remote Explorer** panel
2. Click the **+** button or "Add Connection"
3. Enter connection details:
   - **Name**: Friendly name for the connection
   - **Host**: Server IP address or domain
   - **Port**: SSH port (default: 22)
   - **Username**: SSH username
   - **Authentication**: Password or SSH key

### Authentication Methods

#### Password Authentication

1. Select "Password" authentication
2. Enter your SSH password
3. Click "Connect"

**Note**: Passwords are securely stored in device storage.

#### SSH Key Authentication

1. Select "SSH Key" authentication
2. Paste your private key content
3. Optionally add a passphrase
4. Click "Connect"

**Supported Key Types**:
- RSA
- ED25519
- ECDSA

### Connection Features

- **Connection Timeout**: 10-second timeout protection
- **Auto-Reconnect**: Automatically reconnects on disconnect (up to 2 attempts)
- **Connection Status**: Real-time status display
  - 🟢 Connected
  - 🟡 Connecting
  - 🔴 Disconnected

### Managing Connections

- **Edit**: Modify connection settings
- **Delete**: Remove saved connections
- **Duplicate**: Create a copy of existing connection
- **Quick Connect**: Tap to connect instantly

## Remote File Browser

### Browsing Files

Once connected, you can browse the remote file system:

- **Tree View**: Hierarchical file and folder structure
- **File Icons**: Different icons for file types
- **Path Navigation**: Breadcrumb navigation
- **Refresh**: Manual refresh of directory contents

### File Operations

#### Create Files

1. Navigate to the target directory
2. Tap the **+** button
3. Select "New File"
4. Enter file name
5. The file opens in the editor

#### Create Directories

1. Navigate to the parent directory
2. Tap the **+** button
3. Select "New Folder"
4. Enter folder name

#### Rename Files/Folders

1. Long-press the file or folder
2. Select "Rename"
3. Enter new name
4. Confirm

#### Delete Files/Folders

1. Long-press the file or folder
2. Select "Delete"
3. Confirm deletion

**Warning**: Deletion is permanent and cannot be undone!

### File Editor

#### Opening Files

- Tap any file to open it in the editor
- Files are loaded with syntax highlighting
- Large files (>100,000 lines) are truncated

#### Editing Files

- **Syntax Highlighting**: Automatic based on file extension
- **Auto-Save**: Changes saved after 5 seconds
- **Undo/Redo**: Multiple levels of history
- **Line Numbers**: Optional line number display

#### Saving Files

- **Auto-Save**: Enabled by default (5-second delay)
- **Manual Save**: Tap save button or use shortcut
- **Save Status**: Visual indicator of save progress

## Terminal Sessions

### Opening Terminals

1. Connect to SSH server
2. Tap the **Terminal** icon
3. A new terminal session opens

### Multi-Terminal Support

- **Concurrent Sessions**: Up to 6 terminals simultaneously
- **Tabbed Interface**: Each terminal has its own tab
- **Session Persistence**: Sessions persist when switching panels
- **Unique Channels**: Each terminal has a unique channel ID

### Terminal Features

- **Full Shell Support**: Bash, Zsh, Fish, etc.
- **Command History**: Use arrow keys to navigate history
- **Tab Completion**: Press Tab for auto-completion
- **ANSI Colors**: Full color support
- **Unicode Support**: Complete Unicode character support

### Terminal Controls

- **New Terminal**: Open additional terminal sessions
- **Close Terminal**: Close current terminal
- **Clear Terminal**: Clear terminal content
- **Full Screen**: Expand terminal to full screen

## Quick Commands

NimoteCode provides quick access to common commands:

### File System Commands

| Command | Description |
|---------|-------------|
| `ls` | List directory contents |
| `ls -la` | List all files with details |
| `pwd` | Print working directory |
| `find` | Find files and directories |

### Development Commands

| Command | Description |
|---------|-------------|
| `npm` | Node.js package manager |
| `yarn` | Yarn package manager |
| `pnpm` | PNPM package manager |
| `cargo` | Rust package manager |

### System Commands

| Command | Description |
|---------|-------------|
| `top` | Display system processes |
| `ps` | List processes |
| `ping` | Network connectivity test |
| `grep` | Search text patterns |

## AI Terminal Analysis

NimoteCode can analyze terminal output using AI:

### How to Use

1. Run a command in the terminal
2. Tap the **AI Analysis** button
3. AI analyzes the output and provides:
   - Quick summary
   - Error identification
   - Fix suggestions
   - Next steps

### Analysis Format

```
**Quick Summary:** Brief overview of output

**Errors & Warnings:** List of errors with fix suggestions

**Output Summary:** Key information from output

**Next Steps:** Recommended actions
```

## Best Practices

### Security

- **Use SSH Keys**: More secure than passwords
- **Key Passphrases**: Protect your private keys
- **Regular Updates**: Keep your keys updated
- **Limited Access**: Use principle of least privilege

### Performance

- **Large Files**: Be cautious with very large files
- **Network Quality**: Good connection improves experience
- **Terminal Sessions**: Close unused terminals
- **File Caching**: Refresh when needed

### Workflow

1. **Save Frequently**: Let auto-save work for you
2. **Use Bookmarks**: Mark frequently accessed directories
3. **Multi-Terminal**: Use different terminals for different tasks
4. **Quick Commands**: Leverage quick commands for efficiency

## Troubleshooting

### Connection Failed

1. Check network connectivity
2. Verify server address and port
3. Confirm username and credentials
4. Check firewall settings
5. Try password instead of key (or vice versa)

### File Not Loading

1. Check file size (may be too large)
2. Verify file permissions
3. Check connection stability
4. Try refreshing the directory

### Terminal Not Working

1. Ensure SSH connection is active
2. Check if shell is available on server
3. Try closing and reopening terminal
4. Restart the app if needed

### Slow Performance

1. Check network latency
2. Reduce number of open terminals
3. Close unused file tabs
4. Check server load

## Advanced Features

### SSH Config

NimoteCode supports advanced SSH configurations:

- **Custom Port**: Non-standard SSH ports
- **Jump Hosts**: Connect through bastion servers
- **Keep-Alive**: Maintain connection during idle
- **Compression**: Enable SSH compression

### Environment Variables

Set environment variables for your sessions:

1. Open connection settings
2. Navigate to "Environment"
3. Add key-value pairs
4. Variables are set on connection

### Port Forwarding (Coming Soon)

Future versions will support:

- Local port forwarding
- Remote port forwarding
- Dynamic port forwarding (SOCKS)

## Next Steps

- [Terminal Usage](/docs/terminal) - Master terminal features
- [AI Assistant](/docs/ai) - Configure AI providers
- [GitHub Integration](/docs/github) - Connect GitHub repositories

## Support

Need help with SSH?

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)