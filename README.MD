# NimoteCode

<p align="center">
  <strong>Mobile Remote Development IDE</strong><br>
  True development experience — anytime, anywhere — right from your phone or tablet.
</p>

<p align="center">
  <a href="https://apps.apple.com/app/idXXXXXX">App Store</a> • 
  <a href="https://play.google.com/store/apps/details?id=com.nimotecode">Google Play</a> • 
  <a href="https://github.com/nimotecode/nimote_issues">GitHub</a>
</p>

---

## Overview

NimoteCode is a powerful mobile Integrated Development Environment (IDE) built for Android and iOS devices. It brings the full power of a desktop development environment to your mobile device, enabling you to code, debug, and deploy applications from anywhere.

Built with **Flutter** for the frontend and **Rust** for the backend, NimoteCode delivers a responsive cross-platform interface combined with high-performance native capabilities.

## Key Features

### 🖥️ Modern Code Editor

- **Syntax Highlighting**: Support for 50+ programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, C/C++, PHP, Ruby, and more
- **Code Folding**: Collapse and expand functions, classes, and code blocks
- **Auto-Save**: Changes saved automatically after 5 seconds
- **Large File Support**: Handle files up to 100,000 lines efficiently
- **Undo/Redo**: Multiple levels of operation history
- **Virtual Keyboard**: Mobile-optimized programming keyboard with syntax-aware shortcuts

### 🔐 Secure SSH Remote Development

- **SSH Connections**: Password and key-based authentication (RSA, ED25519, ECDSA)
- **SFTP File Manager**: Browse, upload, download, and edit remote files
- **Multi-Terminal**: Run up to 6 terminal sessions simultaneously
- **Auto-Reconnect**: Automatic reconnection after disconnect with exponential backoff
- **Connection Status**: Real-time connection status display with visual indicators

### 🖥️ Terminal Features

- **xterm Compatible**: Full terminal emulator support
- **ANSI Colors**: Complete color support for all commands
- **Quick Commands**: One-click access to common commands
- **AI Analysis**: Intelligent terminal output analysis
- **Full Screen Mode**: Expand terminal to full screen for better visibility

### 🤖 AI-Powered Assistant

- **Multi-Provider Support**: OpenAI, Ollama, SiliconFlow, Groq
- **Chat Mode**: Ask questions and get help with your code
- **Edit Mode**: AI-assisted code modifications and refactoring
- **Context Aware**: Automatically includes current file context for accurate suggestions
- **Streaming Responses**: Real-time AI response display

### 📦 GitHub Integration

- **Repository Access**: Browse all your repositories (public and private)
- **File Editing**: Edit files directly from your mobile device
- **Auto-Commit**: Changes are automatically committed to your repository
- **Branch Support**: Work with different branches seamlessly
- **OAuth Authentication**: Secure GitHub login with OAuth

### 🔧 Git Version Control

- **Visual Git**: See your changes at a glance with color-coded indicators
- **Commit History**: Browse and compare commits with detailed information
- **Diff Viewer**: Visual comparison of changes with inline diffs
- **Line History**: See who changed what and when with blame information
- **Real-time Status**: Status refreshes every 8 seconds

### 🔍 Powerful Search

- **File Search**: Find files by name across your projects
- **Content Search**: Search within files for specific patterns
- **Symbol Search**: Jump to functions, classes, and variables
- **Remote Search**: Search on remote servers

### 🎨 Customizable Interface

- **6 Built-in Themes**: Dark, Light, Solarized Dark, Solarized Light, Dracula, Monokai
- **Responsive Layout**: Adapts seamlessly to phones and tablets
- **Three-Column Layout**: Efficient workspace organization with file explorer, editor, and terminal

## Technology Stack

### Frontend
- **Flutter**: Cross-platform UI framework for iOS and Android
- **Dart**: Primary programming language for Flutter
- **VitePress**: Documentation site generator

### Backend
- **Rust**: High-performance native backend capabilities
- **SSH Library**: Secure shell connection handling
- **SFTP Library**: Secure file transfer protocol implementation

## Screenshots

*(Add screenshots here in the docs)*

## Getting Started

### Installation

1. **iOS**: Download from the App Store
2. **Android**: Download from Google Play or APK

### Quick Start

1. Open NimoteCode on your device
2. Connect to your server via SSH
3. Browse and edit files
4. Use the integrated terminal for command-line tasks
5. Access GitHub repositories directly

## Documentation

- [Introduction](https://docs.nimotecode.com/docs/introduction)
- [Features](https://docs.nimotecode.com/docs/features)
- [Download](https://docs.nimotecode.com/docs/download)
- [Privacy Policy](https://docs.nimotecode.com/docs/privacy)
- [Terms of Service](https://docs.nimotecode.com/docs/terms)
- [Support](https://docs.nimotecode.com/docs/support)

## Development

### Prerequisites

- Flutter SDK
- Rust toolchain
- Node.js (for documentation)

### Building from Source

```bash
# Clone the repository
git clone https://github.com/nimotecode/nimote.git
cd nimote

# Install dependencies
flutter pub get

# Run the application
flutter run
```

### Documentation

```bash
# Start documentation server
npm run docs:dev

# Build documentation
npm run docs:build
```

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@nimotecode.com
- 💬 Discord: [Join our community](https://discord.gg/nimotecode)
- 🐛 Issues: [GitHub Issues](https://github.com/nimotecode/nimote_issues/issues)

## Acknowledgments

- Built with Flutter and Rust
- Powered by Tree-sitter for syntax highlighting
- Terminal emulation powered by xterm.js

---

<p align="center">
  Made with ❤️ for developers everywhere
</p>
