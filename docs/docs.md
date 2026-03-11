# Documentation

Welcome to the NimoteCode documentation. Here you'll find comprehensive guides to help you get the most out of NimoteCode.

## Getting Started

- [Introduction](/introduction) - Learn what NimoteCode is and what it can do
- [Features](/features) - Explore all available features
- [Download](/download) - Get NimoteCode for your device

## Feature Guides

### Remote Development

- [SSH Remote Development](/docs/ssh) - Connect to your servers securely
  - SSH connection management
  - Remote file browser
  - File operations
  - Multi-terminal sessions

### Terminal

- [Terminal Usage](/docs/terminal) - Master the terminal features
  - Multi-terminal management
  - Quick commands
  - AI terminal analysis
  - Terminal interface

### AI Assistant

- [AI Assistant](/docs/ai) - Configure and use AI features
  - Supported providers
  - Chat mode
  - Edit mode
  - Configuration management

### GitHub Integration

- [GitHub Integration](/docs/github) - Connect with GitHub
  - OAuth authentication
  - Repository browsing
  - File editing
  - Branch support

## Quick Reference

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Copy | Ctrl+C |
| Paste | Ctrl+V |
| Cut | Ctrl+X |
| Select All | Ctrl+A |
| Undo | Ctrl+Z |
| Redo | Ctrl+Y |
| Save | Ctrl+S |
| Find | Ctrl+F |

### Quick Commands

**File System:**
- `ls` - List directory contents
- `ls -la` - List all files with details
- `cd <dir>` - Change directory
- `pwd` - Print working directory

**Development:**
- `npm install` - Install Node.js dependencies
- `yarn install` - Install with Yarn
- `cargo build` - Build Rust project
- `make` - Build project

**Git:**
- `git status` - Check repository status
- `git log --oneline` - View commit history
- `git branch` - List branches
- `git diff` - Show changes

### Supported Languages

NimoteCode supports syntax highlighting for 50+ languages including:

**Web:** JavaScript, TypeScript, HTML, CSS, Vue, React

**Backend:** Python, Java, Go, Rust, C/C++, C#

**Mobile:** Swift, Kotlin, Dart, Flutter

**Data:** SQL, JSON, YAML, TOML, XML

**Scripting:** Bash, PowerShell, Python, Ruby

**Config:** Dockerfile, Kubernetes, Nginx, Apache

## Troubleshooting

### SSH Connection Issues

1. Check your network connection
2. Verify server address and port
3. Confirm username and password/key
4. Check firewall settings

### Terminal Not Working

1. Ensure SSH connection is active
2. Try closing and reopening the terminal
3. Check if the shell is available on the server
4. Restart the app if needed

### AI Not Responding

1. Check your API key is valid
2. Verify network connectivity
3. Try a different provider
4. Check API rate limits

### File Not Saving

1. Check file permissions
2. Verify disk space
3. Ensure connection is stable
4. Try manual save

## FAQ

### Is NimoteCode free?

NimoteCode offers both free and professional plans. The free plan includes basic features like SSH, terminal, and GitHub integration. Professional plans unlock advanced features like Git version control and enhanced AI capabilities.

### Can I use NimoteCode offline?

Some features work offline (local file editing), but most features require an internet connection for SSH, GitHub, and AI features.

### How many terminal sessions can I have?

You can have up to 6 concurrent terminal sessions.

### Which AI providers are supported?

NimoteCode supports OpenAI, Ollama (local), SiliconFlow, and Groq.

### Is my data secure?

Yes! NimoteCode uses secure SSH connections, encrypted token storage, and does not store your code on our servers.

## Support

Need help? Here are your options:

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)
- 📖 **Documentation**: You're reading it!

## Version History

### v2.0 (March 2026)

**New Features:**
- Quick commands configuration system
- AI terminal output analysis
- Enhanced provider configuration

**Improvements:**
- Optimized terminal performance
- Improved AI component performance
- Enhanced error handling

**Bug Fixes:**
- Fixed SSH login history session deletion
- Fixed subscription access issues
- Optimized file search

### v1.5 (December 2025)

- Added multi-terminal support
- Added GitHub integration
- Added AI assistant
- Improved file browser

### v1.0 (September 2025)

- Initial release
- SSH remote development
- SFTP file manager
- Code editor with syntax highlighting