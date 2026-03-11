# Frequently Asked Questions (FAQ)

Find answers to common questions about NimoteCode.

## General

### What is NimoteCode?

NimoteCode is a cross-platform mobile IDE that lets you develop on remote servers from your phone or tablet. It combines:

- **SSH/SFTP**: Connect to remote servers
- **Code Editor**: Syntax-highlighted editor
- **Terminal**: Multiple SSH terminals
- **AI Assistant**: AI-powered coding help
- **Git Integration**: Version control
- **GitHub**: Repository management

### Which platforms are supported?

- **Android**: Android 5.0 (API 21) and above
- **iOS**: iOS 12.0 and above

### Is NimoteCode free?

NimoteCode offers both free and paid plans:

**Free Tier**:
- SSH connections
- File editing
- Terminal access
- Basic AI features

**Pro Tier**:
- Multiple SSH sessions
- Advanced AI features
- Git integration
- GitHub integration
- Priority support

### Can I use NimoteCode offline?

Limited offline functionality:
- View cached files
- Edit local copies
- Basic editor features

Full functionality requires internet connection for:
- SSH connections
- AI features
- GitHub sync
- Git operations

## SSH & Remote Development

### How do I connect to my server?

1. Open Remote Explorer (📁)
2. Tap **+ Add Connection**
3. Enter server details:
   - Host (IP or domain)
   - Port (default: 22)
   - Username
   - Password or SSH key
4. Tap **Connect**

### Can I use SSH keys?

Yes! NimoteCode supports SSH key authentication:

1. During connection setup
2. Select "SSH Key" authentication
3. Paste your private key
4. Or import from clipboard

**Supported key types**:
- RSA
- ED25519
- ECDSA

### How many SSH connections can I have?

- **Free**: 1 concurrent connection
- **Pro**: Unlimited saved connections, 6 concurrent terminals

### Why can't I connect to my server?

Common issues:

1. **Wrong credentials**: Double-check username/password
2. **Firewall**: Ensure port 22 is open
3. **SSH service**: Verify SSH is running on server
4. **IP address**: Check if IP changed
5. **Key permissions**: Ensure key format is correct

**Solution**:
```bash
# Test connection from computer
ssh username@your-server.com

# Check SSH service
sudo systemctl status sshd
```

### How do I edit files on my server?

1. Connect to server via SSH
2. Navigate to file in file browser
3. Tap to open
4. Edit with syntax highlighting
5. Changes auto-save after 5 seconds

### Can I upload/download files?

Yes! Using SFTP:

1. Long-press file or folder
2. Select "Download" or "Upload"
3. Choose destination

### What's the maximum file size?

- **Recommended**: < 10 MB
- **Maximum**: 100 MB
- **Lines**: Up to 100,000 lines

Large files may be truncated.

## Terminal

### How do I open a terminal?

1. Connect to SSH server
2. Tap terminal icon in bottom bar
3. Terminal opens at your home directory

### How many terminals can I have?

- **Maximum**: 6 concurrent terminals
- **Per connection**: Each SSH connection can have multiple terminals

### Can I customize terminal colors?

Yes! Go to:
1. Settings → Terminal
2. Choose color theme
3. Or customize individual colors

### How do I use quick commands?

Quick commands are pre-defined commands:

1. Open terminal
2. Tap quick command button (⚡)
3. Select command to execute

**Default commands**:
- `ls` - List files
- `ls -la` - List all files
- `npm install` - Install packages
- `git status` - Check Git status
- `top` - System monitor

### Can I add custom quick commands?

Currently, quick commands are pre-defined. Custom commands are planned for a future update.

### Terminal shows garbled text?

This usually means:

1. **Encoding issue**: Set terminal to UTF-8
2. **Locale issue**: Set locale on server
3. **Font issue**: Use monospace font

**Solution**:
```bash
# Set locale on server
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
```

## AI Assistant

### How do I set up AI?

1. Open AI panel (🤖)
2. Tap "Add Provider"
3. Choose provider:
   - Ollama (local)
   - OpenAI
   - SiliconFlow
   - Groq
4. Enter API key or URL
5. Save configuration

### Which AI providers are supported?

| Provider | Type | Speed | Quality |
|----------|------|-------|---------|
| Ollama | Local | Fast | Good |
| OpenAI | Cloud | Medium | Excellent |
| SiliconFlow | Cloud | Fast | Good |
| Groq | Cloud | Very Fast | Good |

### Can I use local AI?

Yes! Use Ollama:

1. Install Ollama on your server
2. Pull a model: `ollama pull llama2`
3. Start Ollama: `ollama serve`
4. In NimoteCode, configure:
   - Provider: Ollama
   - URL: http://your-server:11434
   - Model: llama2

### How do I use AI to edit code?

1. Open a file
2. Open AI panel
3. Switch to "Edit" mode
4. Describe what you want to change
5. AI will generate code changes
6. Review and apply changes

### AI is not responding?

Check:
1. **API key**: Verify your API key is correct
2. **Quota**: Check if you've exceeded your quota
3. **Internet**: Ensure internet connection
4. **URL**: Verify the API endpoint URL
5. **Model**: Check if model name is correct

### Can I cancel AI responses?

Yes! Tap the stop button (⏹️) during response generation.

## GitHub Integration

### How do I connect GitHub?

1. Open GitHub panel (🐙)
2. Tap "Connect GitHub"
3. Authorize NimoteCode
4. You're connected!

### What permissions are needed?

NimoteCode requests:
- `repo`: Access to your repositories
- `user`: Read your profile

### Can I use GitHub Enterprise?

Yes! Configure:
1. Settings → GitHub
2. Enable "GitHub Enterprise"
3. Enter your enterprise URL
4. Connect as usual

### How do I edit files on GitHub?

1. Connect GitHub
2. Browse to file
3. Tap to open
4. Edit the file
5. Changes auto-commit after 5 seconds

### Can I create new files on GitHub?

Yes:
1. Navigate to directory
2. Tap **+** button
3. Enter file name
4. Add content
5. File is auto-committed

### How do I switch branches?

1. Open repository
2. Tap branch selector (top bar)
3. Select different branch
4. Files reload from new branch

### Can I create branches?

Currently, branch creation is not supported in the app. Use:
- GitHub web interface
- Git commands in terminal
- GitHub CLI

## Git Integration

### Is Git integration free?

No, Git integration is a Pro feature.

### What Git features are available?

- **Status**: View modified files
- **Diff**: See line-by-line changes
- **History**: View commit history
- **File History**: Track file changes
- **Line History**: See who changed each line

### How do I view Git status?

1. Connect to SSH server
2. Open a Git repository
3. Open Source Control panel (🔀)
4. View modified files

### Can I commit from NimoteCode?

Currently, you can view Git status and history. Committing from the app is planned for a future update.

### How do I see file differences?

1. Open Source Control panel
2. Tap on a modified file
3. View diff with additions/deletions highlighted

## Editor

### What languages are supported for syntax highlighting?

NimoteCode supports 50+ languages including:

- JavaScript / TypeScript
- Python
- Java / Kotlin
- C / C++ / C#
- Go / Rust
- PHP / Ruby
- Swift / Objective-C
- HTML / CSS / SCSS
- JSON / YAML / XML
- Markdown
- Shell / Bash
- SQL
- And many more...

### How do I change the theme?

1. Settings → Editor → Theme
2. Choose from:
   - Dark
   - Light
   - Solarized Dark
   - Solarized Light
   - Dracula
   - Monokai

### Can I change font size?

Yes:
1. Settings → Editor
2. Adjust font size slider
3. Changes apply immediately

### Does NimoteCode have auto-save?

Yes! Files auto-save 5 seconds after last edit.

You can disable in settings:
1. Settings → Editor
2. Toggle "Auto Save"

### How do I search in a file?

1. Open file
2. Tap search icon (🔍)
3. Enter search term
4. Navigate results

### Can I find and replace?

Yes:
1. Open file
2. Tap search icon (🔍)
3. Enter search term
4. Tap "Replace" mode
5. Enter replacement text
6. Replace single or all

## Account & Subscription

### How do I sign up?

1. Open NimoteCode
2. Tap "Sign In"
3. Choose method:
   - Google
   - Apple ID (iOS)
   - Email

### What's included in Pro subscription?

**Pro features**:
- Multiple SSH sessions
- Advanced AI features
- Git integration
- GitHub integration
- Priority support
- No ads

### How do I subscribe?

1. Settings → Subscription
2. Choose plan (Monthly/Yearly)
3. Complete payment via:
   - Google Play (Android)
   - App Store (iOS)

### Can I restore my subscription?

Yes:
1. Settings → Subscription
2. Tap "Restore Purchase"
3. Your subscription will be restored

### How do I cancel subscription?

**Android**:
1. Google Play Store → Subscriptions
2. Find NimoteCode
3. Cancel

**iOS**:
1. Settings → Apple ID → Subscriptions
2. Find NimoteCode
3. Cancel

### Is there a free trial?

Yes! NimoteCode offers a 7-day free trial of Pro features.

## Troubleshooting

### App keeps crashing

Try:
1. Clear app cache
2. Update to latest version
3. Restart your device
4. Reinstall app

### Can't connect to server

1. Check internet connection
2. Verify server address
3. Test from computer: `ssh user@server`
4. Check firewall settings
5. Try SSH key instead of password

### Files not saving

1. Check internet connection
2. Verify file permissions
3. Check disk space on server
4. Try manual save

### Terminal not working

1. Ensure SSH is connected
2. Check if shell is available
3. Reconnect to server
4. Restart app

### AI not responding

1. Check API key
2. Verify internet connection
3. Check API quota
4. Try different provider

### GitHub not loading

1. Check internet connection
2. Re-authorize GitHub
3. Clear app cache
4. Reconnect GitHub

### Git status not showing

1. Ensure directory is a Git repository
2. Check if Git is installed on server
3. Verify Git is initialized: `git status`
4. Open the correct directory

## Security

### Is my data secure?

Yes! NimoteCode uses:

- **Encrypted SSH**: All SSH connections are encrypted
- **Secure storage**: Credentials stored securely
- **No data collection**: We don't collect your code or data
- **Local AI**: Use Ollama for completely local AI

### Where is my data stored?

- **Credentials**: Encrypted locally on device
- **Files**: On your remote servers only
- **Settings**: Locally on device
- **AI conversations**: Not stored by NimoteCode

### Can I use SSH keys?

Yes! SSH key authentication is fully supported and recommended for better security.

### How do I revoke GitHub access?

1. Go to GitHub.com → Settings → Applications
2. Find NimoteCode
3. Click "Revoke access"

## Performance

### App is slow

Try:
1. Close unused terminals
2. Clear app cache
3. Reduce terminal scrollback
4. Use smaller files

### Large files are slow

For large files:
1. Files > 100,000 lines are truncated
2. Consider splitting large files
3. Use `head` or `tail` to view portions

### Terminal is laggy

Improve terminal performance:
1. Reduce scrollback lines in settings
2. Close unused terminals
3. Avoid very long output commands

## Feature Requests

### How do I request a feature?

1. Visit our GitHub: [nimote_issues](https://github.com/nimotecode/nimote_issues)
2. Create a new issue
3. Use "Feature Request" label
4. Describe your idea

### What features are planned?

See our roadmap:
- Custom quick commands
- Terminal split view
- Code snippets
- Debugger integration
- Plugin system

## Support

### How do I get help?

- **Email**: aoun.ma@foxmail.com
- **GitHub Issues**: [Submit issue](https://github.com/nimotecode/nimote_issues)
- **Documentation**: Browse these docs

### How do I report a bug?

1. Visit GitHub Issues
2. Create new issue
3. Include:
   - Device model
   - OS version
   - App version
   - Steps to reproduce
   - Screenshots if possible

### Is there a community?

Join our community:
- GitHub Discussions
- Issue tracker

---

**Still have questions?** [Contact us](mailto:aoun.ma@foxmail.com)