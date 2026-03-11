# Features

Explore all the powerful features NimoteCode has to offer.

## Core Editor

### Syntax Highlighting

NimoteCode supports syntax highlighting for 50+ programming languages:

| Category | Languages |
|----------|-----------|
| **Web** | JavaScript, TypeScript, HTML, CSS, Vue, React |
| **Backend** | Python, Java, Go, Rust, C/C++, C# |
| **Mobile** | Swift, Kotlin, Dart, Flutter |
| **Data** | SQL, JSON, YAML, TOML, XML |
| **Scripting** | Bash, PowerShell, Python, Ruby |
| **Config** | Dockerfile, Kubernetes, Nginx, Apache |

### Code Folding

Collapse and expand code blocks for better navigation:

- Functions and methods
- Classes and structs
- Conditional blocks
- Loops
- Comments

### Editor Features

| Feature | Description |
|---------|-------------|
| **Auto-Save** | Changes saved automatically after 5 seconds |
| **Undo/Redo** | Multiple levels of undo history |
| **Cut/Copy/Paste** | Full clipboard support |
| **Select All** | Quick selection of all content |
| **Cursor Position** | Real-time line and column display |
| **Context Menu** | Right-click for quick actions |
| **Keyboard Shortcuts** | Ctrl+C/V/X and more |
| **Virtual Keyboard** | Mobile-optimized programming keyboard |

### Large File Support

- Handle files up to **100,000 lines**
- Chunked reading for large files
- Automatic truncation warning
- Smooth scrolling performance

### Save States

- **Dirty Flag**: Shows unsaved changes
- **Saving Indicator**: Shows when saving is in progress
- **Saved Confirmation**: Visual feedback when save completes

## SSH Remote Development

### Connection Management

| Feature | Details |
|---------|---------|
| **Authentication** | Password and SSH key support |
| **Timeout** | 10-second connection timeout |
| **Auto-Reconnect** | Up to 2 reconnection attempts |
| **Status Display** | Real-time connection status |

### Remote File Browser

- **Tree View**: Visual file system navigation
- **File Icons**: Type-specific icons
- **Path Navigation**: Auto-expand to current file
- **Directory Caching**: Performance optimization
- **Refresh**: Manual directory refresh
- **Collapse All**: Quick collapse of all folders

### File Operations

| Operation | Description |
|-----------|-------------|
| **Create** | New files and folders |
| **Edit** | Real-time editing with auto-save |
| **Rename** | Rename files and directories |
| **Delete** | Remove files and directories (with confirmation) |
| **Open** | Open files in the editor |

### Remote File Editing

- Real-time editing in the built-in editor
- Changes automatically saved after 5 seconds
- Chunked reading for large files
- Files over 100,000 lines are truncated with warning
- UTF-8 encoding support

### Multi-Terminal Sessions

- **6 Concurrent Sessions**: Run up to 6 terminals simultaneously
- **Session Persistence**: Sessions persist when switching panels
- **Independent Channels**: Each terminal has unique channel ID
- **Auto Cleanup**: All sessions close when workspace closes

## Terminal Features

### Terminal Capabilities

| Feature | Description |
|---------|-------------|
| **xterm Compatible** | Full terminal emulator support |
| **ANSI Colors** | Complete color support for commands |
| **Unicode Support** | Full Unicode character support |
| **Shell Support** | Bash, Zsh, Fish, and more |
| **Tab Completion** | Smart auto-completion |
| **Command History** | Persistent command history |

### Quick Commands (New!)

Access common commands instantly from the toolbar:

**File System Commands:**

| Icon | Command | Description |
|------|---------|-------------|
| 📋 | `ls` | List directory contents |
| 📁 | `ls -la` | List all files with details |
| 🔍 | `find . -name` | Search for files by name |
| 📂 | `cd` | Change directory |

**Package Managers:**

| Icon | Command | Description |
|------|---------|-------------|
| 📦 | `npm` | Node.js package manager |
| 📦 | `yarn` | Yarn package manager |
| 📦 | `pnpm` | Fast, disk space efficient |
| 🦀 | `cargo` | Rust package manager |

**System Commands:**

| Icon | Command | Description |
|------|---------|-------------|
| 📊 | `top` | Show running processes |
| 📋 | `ps aux` | Show all processes |
| 🌐 | `ping` | Test network connectivity |
| 🔍 | `grep -r` | Search text in files |

### AI Terminal Analysis (New!)

NimoteCode can analyze terminal output using AI:

- **Automatic Analysis**: AI analyzes command output
- **Error Diagnosis**: Identifies errors and suggests fixes
- **Summary Generation**: Extracts key information
- **Next Steps**: Recommends follow-up actions
- **Clipboard Integration**: Analysis prompt copied to clipboard

**Analysis Format:**

```
**Quick Summary:** Brief overview of what happened

**Errors & Warnings:** List of detected issues with fix suggestions

**Output Summary:** Key information extracted from output

**Next Steps:** Recommended follow-up actions
```

### Terminal Interface

- **Height Adjustment**: Drag to adjust panel height
- **Full Screen Mode**: Expand terminal to full screen
- **Scroll History**: Scroll through command history
- **Responsive Layout**: Adapts to screen size

## GitHub Integration

### Authentication

- **OAuth Login**: Secure GitHub authentication
- **Token Management**: Secure token storage
- **Auto-Refresh**: Tokens refreshed automatically
- **Permission Scope**: `repo` permission for full access

### Repository Modes

| Mode | Description |
|------|-------------|
| **Single Repository** | Focus on one configured repository |
| **Multi-Repository** | Browse all your repositories |

### File Operations

- **Browse**: Tree view of repository files
- **View**: Open files with syntax highlighting
- **Edit**: Make changes directly
- **Create**: Add new files
- **Rename**: Rename existing files
- **Delete**: Remove files

### Auto Commit

- Changes automatically committed
- Descriptive commit messages
- Instant push to remote
- SHA verification for safety

### Branch Support

- Configure default branch
- Current branch shown in title bar
- Switch between branches

## AI Assistant

### Key Features

| Feature | Description |
|---------|-------------|
| **Chat Mode** | General programming assistant for Q&A |
| **Edit Mode** | Structured code editing with auto-modifications |
| **Multi-Provider** | Support for multiple AI providers |
| **Context Aware** | Automatically includes current file context |
| **Streaming** | Real-time response streaming |

### Supported Providers

| Provider | Type | Features |
|----------|------|----------|
| **Ollama** | Local | Private, fast, no internet required |
| **OpenAI** | Cloud | GPT models, most capable |
| **SiliconFlow** | Cloud | China-friendly, fast access |
| **Groq** | Cloud | High-speed inference, low latency |

### Smart Context

- **File Context**: Current file automatically attached
- **Smart Truncation**: Files truncated at 20,000 characters
- **Truncation Notice**: "Content has been truncated" shown when applicable
- **File Name Display**: Shows attached file name

### Response Handling

- **Streaming Responses**: See responses as they generate
- **Cancel Support**: Stop generation at any time
- **Structured Responses**: JSON-formatted code modification suggestions
- **Auto-Apply**: One-click to apply AI suggestions

### Configuration Management

- **Multiple Configs**: Save multiple provider configurations
- **Quick Switch**: Switch between providers instantly
- **Default Models**: Set default model for each provider
- **Custom Endpoints**: Support for custom API endpoints

## Git Version Control

### Status Management

- **Real-time Monitoring**: Git status refreshed every 8 seconds
- **File Markers**: Icons show modified, added, deleted status
- **Directory Markers**: Folders show child file status
- **Background Polling**: Continuous polling when app is active

### Commit History

- **Commit List**: View all commit records
- **Commit Info**: Shows title, author, time
- **Commit Details**: Click to view details and diff

### File Diff

- **Diff Highlighting**: Uses `diff_match_patch` library
- **Line Number Mapping**: Shows diff line numbers
- **Color Coding**:
  - Green: Added content
  - Red: Removed content
  - Yellow: Modified content

### File History

- **All Versions**: View all historical versions
- **Version Compare**: Compare differences between versions
- **Version Restore**: View historical version content

### Line History

- **Line Info**: Shows modification history for specific lines
- **Last Modified**: Shows last commit that modified the line
- **Author Info**: Shows who made the modification
- **Modified Time**: Shows when the modification occurred

## User Interface

### Three-Column Layout

- **Left Activity Bar**: Fixed-width panel selector (icon buttons)
- **Middle Panel**: Collapsible auxiliary function panel
- **Right Editor Area**: Main code editing area

### Responsive Design

- **Landscape Layout**: Three columns side by side
- **Portrait Layout**: Editor slides, sidebar pops over
- **Adaptive Adjustment**: Auto-adjust based on screen orientation
- **Resizable Panels**: Drag to adjust middle panel width

### Theme System

6 built-in themes available:

| Theme | Type |
|-------|------|
| **Dark** | Dark |
| **Light** | Light |
| **Solarized Dark** | Dark |
| **Solarized Light** | Light |
| **Dracula** | Dark |
| **Monokai** | Dark |

### Status Bar

- **Cursor Position**: Current line and column number
- **File Encoding**: File encoding format
- **Save Status**: Saving/saved indicator
- **Connection Status**: SSH and GitHub connection status

## Search & Navigation

### File Search

- **File Name Search**: Quickly find files by name
- **Content Search**: Search for keywords in file contents
- **Remote Search**: Search in remote files
- **Search History**: Preserved search records

### Symbol Search

- **Symbol Navigation**: Jump to functions, classes, variables
- **Smart Filtering**: Fuzzy matching and keyword search
- **Results Display**: Bottom sheet shows search results
- **Symbol Types**: Recognizes and categorizes different symbol types

## Authentication & Subscription

### Login Methods

- **Firebase Authentication**: Integrated Firebase auth
- **Google Sign-In**: Google account login support
- **Apple Sign-In**: Sign in with Apple (iOS)
- **Email Login**: Email/password login support
- **Password Recovery**: Forgot password functionality

### Subscription System

- **RevenueCat Integration**: Subscription management
- **In-App Purchase**: iOS and Android store purchases
- **Professional Subscription**: Unlock premium features
- **Grace Period**: Access continues briefly after expiration
- **Subscription Restore**: Restore purchases across devices

### Free vs Professional

| Feature | Free | Professional |
|---------|------|--------------|
| Code Editor | ✅ | ✅ |
| SSH Remote Development | ✅ | ✅ |
| Terminal Access | ✅ | ✅ |
| GitHub Integration | ✅ | ✅ |
| AI Features | Basic | Full |
| Git Version Control | ❌ | ✅ |
| Cloud Sync | ❌ | ✅ |
| Priority Support | ❌ | ✅ |

## Multi-Language Support

- **Multi-Language UI**: Chinese and English interfaces
- **Dynamic Switching**: Change language at runtime
- **Localization Generation**: Uses `intl_utils` for localization
- **Bidirectional Text**: Support for LTR and RTL languages

## Platform Support

### Android

- **Requirements**: Android 8.0 (Oreo) or higher
- **Architecture**: ARM64 and x86_64 support
- **Optimization**: Split APKs for smaller downloads

### iOS

- **Requirements**: iOS 14.0 or higher
- **Devices**: iPhone, iPad, iPod Touch
- **Optimization**: Native iOS experience

---

## What's New (March 2026)

### Terminal Improvements
- ✅ New quick commands configuration system
- ✅ New AI terminal output analysis feature
- ✅ Improved code organization and maintainability
- ✅ Enhanced terminal performance

### AI Improvements
- ✅ Optimized AI component performance
- ✅ Improved provider configuration system
- ✅ Enhanced error handling

### Bug Fixes
- ✅ Fixed SSH login history session deletion bug
- ✅ Fixed subscription access without login issue
- ✅ Optimized title bar file search

### UI Improvements
- ✅ Updated color schemes
- ✅ Optimized search functionality
- ✅ Added quick commands to terminal