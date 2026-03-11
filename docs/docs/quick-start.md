# Quick Start Guide

Get started with NimoteCode in just a few minutes!

## Download & Install

### iOS

[![Download on the App Store](https://img.shields.io/badge/Download-App_Store-blue)](https://apps.apple.com/app/idXXXXXX)

1. Open the App Store
2. Search for "NimoteCode"
3. Tap "Get" to download
4. Open the app after installation

### Android

[![Get it on Google Play](https://img.shields.io/badge/Get-Google_Play-green)](https://play.google.com/store/apps/details?id=com.nimotecode)

1. Open Google Play Store
2. Search for "NimoteCode"
3. Tap "Install"
4. Open the app after installation

## First Launch

### Sign In

When you first open NimoteCode, you'll need to sign in:

1. **Google Sign In** - Tap "Sign in with Google"
2. **Apple Sign In** (iOS) - Tap "Sign in with Apple"
3. **Email Sign In** - Enter your email and password

::: tip Free Trial
New users get a 7-day free trial of Pro features!
:::

### Grant Permissions

NimoteCode may request permissions:

- **Storage** - To save files locally
- **Network** - For SSH connections

Grant these permissions for full functionality.

## Connect to Your Server

### Step 1: Add SSH Connection

1. Tap the **Remote Explorer** icon (📁) in the left sidebar
2. Tap **+ Add Connection**
3. Enter your server details:

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Connection name | "My Server" |
| **Host** | Server IP or domain | `192.168.1.100` or `server.example.com` |
| **Port** | SSH port | `22` (default) |
| **Username** | SSH username | `root` or `ubuntu` |
| **Auth Type** | Password or SSH Key | Password |

### Step 2: Connect

1. Tap **Connect**
2. If using password authentication, enter your password
3. Wait for connection (usually 2-5 seconds)

::: tip SSH Keys
For better security, use SSH key authentication instead of passwords.
:::

### Step 3: Explore Files

Once connected, you'll see your server's file system:

- **Tap** a file to open it
- **Tap** a folder to expand it
- **Long-press** for more options (rename, delete, etc.)

## Edit Files

### Open a File

1. Navigate to your file in the Remote Explorer
2. Tap the file
3. It opens in the editor with syntax highlighting

### Edit

- **Type** to edit
- Changes are **auto-saved** after 5 seconds
- Tap the save icon for manual save

### Editor Features

| Feature | How to Use |
|---------|------------|
| **Syntax Highlighting** | Automatic for 50+ languages |
| **Line Numbers** | Shown on the left |
| **Undo/Redo** | Tap undo/redo buttons |
| **Find** | Tap search icon |
| **Find & Replace** | Tap search, then "Replace" |

## Use Terminal

### Open Terminal

1. Connect to your server
2. Tap the **Terminal** icon in bottom bar
3. Terminal opens at your home directory

### Run Commands

Just type and press Enter:

```bash
ls -la              # List files
cd /var/www         # Change directory
npm install         # Install packages
docker ps           # List containers
```

### Quick Commands

Tap the ⚡ button for quick commands:

- 📋 `ls` - List files
- 📁 `ls -la` - List all files
- 📦 `npm install` - Install packages
- 🔀 `git status` - Check Git status
- 📊 `top` - System monitor

### Multiple Terminals

- Tap **+** to open new terminal
- Tap terminal tab to switch
- Maximum: 6 concurrent terminals

## Use AI Assistant

### Set Up AI

1. Tap the **AI** icon (🤖) in left sidebar
2. Tap **Add Provider**
3. Choose your provider:

#### Option 1: OpenAI (Recommended)

```yaml
Provider: OpenAI
API Key: sk-xxxxxxxxxxxx
Model: gpt-4
```

Get your API key at [platform.openai.com](https://platform.openai.com)

#### Option 2: Ollama (Free & Local)

```yaml
Provider: Ollama
URL: http://your-server:11434
Model: llama2
```

Install Ollama on your server:
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama2
ollama serve
```

#### Option 3: SiliconFlow (China)

```yaml
Provider: SiliconFlow
API Key: sk-xxxxxxxxxxxx
Model: Qwen/Qwen2.5-7B-Instruct
```

Get your API key at [siliconflow.cn](https://siliconflow.cn)

### Chat Mode

Use AI as a coding assistant:

1. Open AI panel
2. Ensure "Chat" mode is selected
3. Type your question
4. AI responds with helpful information

**Examples**:
```
"How do I fix this error: ..."
"Explain this code: ..."
"What's the best way to ..."
```

### Edit Mode

Let AI edit your code:

1. Open a file
2. Open AI panel
3. Switch to "Edit" mode
4. Describe what you want to change
5. Review AI's suggestions
6. Apply or reject changes

**Examples**:
```
"Add error handling to this function"
"Refactor this code to use async/await"
"Add comments explaining this code"
```

## Connect GitHub

### Authorize

1. Tap **GitHub** icon (🐙) in left sidebar
2. Tap **Connect GitHub**
3. Authorize NimoteCode in browser
4. Return to app

### Browse Repositories

Once connected:

- **Single Repo Mode**: View one specific repo
- **Multi Repo Mode**: View all your repos

### Edit Files on GitHub

1. Browse to your file
2. Tap to open
3. Edit the file
4. Changes auto-commit after 5 seconds

## Use Git

::: warning Pro Feature
Git integration requires a Pro subscription.
:::

### View Git Status

1. Open a Git repository on your server
2. Tap **Source Control** icon (🔀) in left sidebar
3. View modified files

### View Changes

1. Tap a modified file
2. View diff with color-coded changes:
   - 🟢 Green: Added lines
   - 🔴 Red: Removed lines
   - 🟡 Yellow: Modified lines

### View History

1. Open Source Control panel
2. Tap "History" tab
3. Browse commits
4. Tap a commit to see details

## Customize Settings

### Editor Settings

Go to **Settings → Editor**:

| Setting | Options |
|---------|---------|
| **Font Size** | 10 - 24 |
| **Theme** | Dark, Light, Solarized, Dracula, Monokai |
| **Tab Size** | 2, 4, 8 |
| **Word Wrap** | On/Off |
| **Auto Save** | On/Off |

### Terminal Settings

Go to **Settings → Terminal**:

| Setting | Options |
|---------|---------|
| **Font Size** | 10 - 20 |
| **Theme** | Multiple color schemes |
| **Scrollback** | 1000 - 50000 lines |

## Tips & Tricks

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+S** | Save file |
| **Ctrl+Z** | Undo |
| **Ctrl+Shift+Z** | Redo |
| **Ctrl+F** | Find |
| **Ctrl+H** | Find & Replace |

### Productivity Tips

1. **Pin Connections**: Long-press a connection to pin it to the top
2. **Quick Switch**: Swipe left/right to switch between open files
3. **Split View**: On tablets, use split view for file + terminal
4. **Quick Commands**: Customize terminal quick commands
5. **AI Context**: Open a file before using AI for better context

### Performance Tips

1. **Close Unused Terminals**: Each terminal uses resources
2. **Limit File Size**: Files > 100MB may be slow
3. **Use Quick Commands**: Faster than typing long commands
4. **Clear Cache**: Settings → Storage → Clear Cache

## Troubleshooting

### Can't Connect to Server

**Check**:
- ✅ Internet connection
- ✅ Server address is correct
- ✅ SSH port is open (default: 22)
- ✅ Username and password are correct
- ✅ Server is running

**Test from computer**:
```bash
ssh username@your-server.com
```

### Files Not Saving

**Check**:
- ✅ Internet connection
- ✅ File permissions on server
- ✅ Disk space on server

### Terminal Not Working

**Check**:
- ✅ SSH connection is active
- ✅ Shell is available on server
- ✅ Try reconnecting

### AI Not Responding

**Check**:
- ✅ API key is correct
- ✅ Internet connection
- ✅ API quota not exceeded
- ✅ Model name is correct

## Next Steps

Now that you're set up, explore these features:

- 📖 [SSH Remote Development](/docs/ssh) - Deep dive into SSH features
- 💻 [Terminal Usage](/docs/terminal) - Master the terminal
- 🤖 [AI Assistant](/docs/ai) - Get the most from AI
- 🐙 [GitHub Integration](/docs/github) - Work with GitHub
- 🔀 [Git Version Control](/docs/faq) - Manage your code
- ⚙️ [Configuration Examples](/docs/configuration) - Advanced setup

## Get Help

Need assistance?

- 📧 **Email**: [aoun.ma@foxmail.com](mailto:aoun.ma@foxmail.com)
- 🐙 **GitHub**: [Submit an issue](https://github.com/nimotecode/nimote_issues)
- ❓ **FAQ**: [Frequently Asked Questions](/docs/faq)

---

**Welcome to NimoteCode!** 🎉

You're now ready to develop from anywhere, anytime!