# Introduction

Welcome to NimoteCode, a powerful mobile remote development IDE designed for Android and iOS.

## What is NimoteCode?

NimoteCode is a cross-platform mobile Integrated Development Environment (IDE) that brings the full power of a desktop development environment to your mobile device. Whether you're using a phone or tablet, NimoteCode provides a seamless coding experience.

## Key Features

### 🖥️ Modern Code Editor

- **Syntax Highlighting**: Support for 50+ programming languages
- **Code Folding**: Collapse and expand functions, classes, and code blocks
- **Auto-Save**: Changes saved automatically after 5 seconds
- **Large File Support**: Handle files up to 100,000 lines
- **Undo/Redo**: Multiple levels of operation history
- **Virtual Keyboard**: Mobile-optimized programming keyboard

### 🔐 Secure SSH Remote Development

- **SSH Connections**: Password and key-based authentication
- **SFTP File Manager**: Browse, upload, download, and edit remote files
- **Multi-Terminal**: Run up to 6 terminal sessions simultaneously
- **Auto-Reconnect**: Automatic reconnection after disconnect (up to 2 attempts)
- **Connection Status**: Real-time connection status display

### 🖥️ Terminal Features

- **xterm Compatible**: Full terminal emulator support
- **ANSI Colors**: Complete color support for commands
- **Quick Commands**: One-click access to common commands
- **AI Analysis**: Intelligent terminal output analysis
- **Full Screen Mode**: Expand terminal to full screen

### 🤖 AI-Powered Assistant

- **Multi-Provider Support**: OpenAI, Ollama, SiliconFlow, Groq
- **Chat Mode**: Ask questions and get help
- **Edit Mode**: AI-assisted code modifications
- **Context Aware**: Automatically includes current file context
- **Streaming Responses**: Real-time AI response display

### 📦 GitHub Integration

- **Repository Access**: Browse all your repos (public and private)
- **File Editing**: Edit files directly from your device
- **Auto-Commit**: Changes are automatically committed
- **Branch Support**: Work with different branches
- **OAuth Authentication**: Secure GitHub login

### 🔧 Git Version Control

- **Visual Git**: See your changes at a glance
- **Commit History**: Browse and compare commits
- **Diff Viewer**: Visual comparison of changes
- **Line History**: See who changed what and when
- **Real-time Status**: Status refreshes every 8 seconds

### 🔍 Powerful Search

- **File Search**: Find files by name
- **Content Search**: Search within files
- **Symbol Search**: Jump to functions, classes, variables
- **Remote Search**: Search on remote servers

### 🎨 Customizable Interface

- **6 Themes**: Dark, Light, Solarized Dark, Solarized Light, Dracula, Monokai
- **Responsive Layout**: Adapts to phones and tablets
- **Three-Column Layout**: Efficient workspace organization
- **Status Bar**: Shows cursor position, encoding, save status

## Who is NimoteCode For?

### Developers on the Go

Need to fix a bug while away from your desk? NimoteCode lets you connect to your servers and make changes from anywhere.

### Students

Learn programming and manage projects without a laptop. Perfect for coding on a tablet.

### System Administrators

Manage servers, run commands, and edit configuration files from your mobile device.

### DevOps Engineers

Monitor systems, run deployments, and troubleshoot issues while on call.

### Freelancers

Work on client projects from anywhere, without being tied to a desk.

## Platform Support

### Android

- **Requirements**: Android 8.0 (Oreo) or higher
- **Architecture**: ARM64 and x86_64 support
- **Optimization**: Split APKs for smaller downloads

### iOS

- **Requirements**: iOS 14.0 or higher
- **Devices**: iPhone, iPad, and iPod Touch
- **Optimization**: Native iOS experience

## Technical Architecture

NimoteCode is built with modern technologies:

| Component | Technology |
|-----------|------------|
| **Frontend** | Flutter (Dart) |
| **Backend** | Rust (via Flutter Rust Bridge) |
| **State Management** | Provider |
| **Local Storage** | Hive |
| **HTTP Client** | Dio |

### Why Rust?

Rust provides:
- **Performance**: Near-native speed for SSH and Git operations
- **Safety**: Memory-safe code for critical operations
- **Reliability**: Strong error handling

### Key Plugins

- **SSH Plugin**: SFTP file operations and SSH terminal
- **Git Plugin**: Remote Git command execution
- **GitHub Plugin**: GitHub API calls
- **Highlight Plugin**: Code syntax highlighting
- **Diff Plugin**: File difference calculation
- **Code Analysis Plugin**: Symbol recognition and analysis

## Getting Started

1. **Download**: Get NimoteCode from the App Store or Google Play
2. **Sign In**: Create an account or sign in with Google/Apple
3. **Connect**: Add your first SSH connection or GitHub account
4. **Code**: Start coding from anywhere!

## Subscription Plans

### Free Plan

- ✅ Basic code editor
- ✅ SSH remote development
- ✅ Terminal access (up to 6 sessions)
- ✅ GitHub integration
- ✅ Limited AI features
- ✅ 6 themes

### Professional Plan

- ✅ All free features
- ✅ Full Git version control
- ✅ Enhanced AI capabilities
- ✅ Priority support
- ✅ Early access to new features
- ✅ Cloud sync for settings

## Latest Updates

### March 2026 Update

**Terminal Enhancements**:
- New quick commands configuration system
- New AI terminal output analysis service
- Improved code organization and maintainability
- Optimized terminal performance

**AI Improvements**:
- Optimized AI component performance
- Improved provider configuration system
- Enhanced error handling

**Bug Fixes**:
- Fixed SSH login history session deletion bug
- Fixed subscription access without login issue
- Optimized title bar file search

**UI Improvements**:
- Updated color schemes
- Optimized search functionality
- Added quick commands to terminal

## Next Steps

- [Features Overview](/features) - Learn about all features
- [SSH Remote Development](/docs/ssh) - Configure remote connections
- [Terminal Usage](/docs/terminal) - Master terminal features
- [AI Assistant](/docs/ai) - Configure AI providers
- [GitHub Integration](/docs/github) - Connect GitHub repositories
- [Download](/download) - Get NimoteCode

## Contact Us

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub**: https://github.com/nimotecode/nimote_issues