# Configuration Examples

This page provides configuration examples for various NimoteCode features.

## SSH Configuration

### Basic SSH Connection

```yaml
Connection Name: My Server
Host: 192.168.1.100
Port: 22
Username: developer
Authentication: Password
Password: ********
```

### SSH with Key Authentication

```yaml
Connection Name: Production Server
Host: prod.example.com
Port: 22
Username: deploy
Authentication: SSH Key
Private Key: |
  -----BEGIN OPENSSH PRIVATE KEY-----
  b3BlbnNzaC1rZXktdjEAAAAABG5vbmU...
  -----END OPENSSH PRIVATE KEY-----
```

### SSH with Custom Port

```yaml
Connection Name: Custom Port Server
Host: server.example.com
Port: 2222
Username: admin
Authentication: Password
Password: ********
```

### Multiple SSH Connections

```yaml
Connections:
  - Name: Development
    Host: dev.example.com
    Port: 22
    Username: dev
    Auth: Password
    
  - Name: Staging
    Host: staging.example.com
    Port: 22
    Username: staging
    Auth: Key
    
  - Name: Production
    Host: prod.example.com
    Port: 22
    Username: prod
    Auth: Key
```

## AI Provider Configuration

### Ollama (Local)

```yaml
Provider: Ollama
Name: Local Ollama
Base URL: http://192.168.1.100:11434
Default Model: llama2
Max Tokens: 2000
Temperature: 0.7
```

**Setup**:
1. Install Ollama on your server
2. Pull model: `ollama pull llama2`
3. Start Ollama: `ollama serve`
4. Configure in NimoteCode

### OpenAI

```yaml
Provider: OpenAI
Name: OpenAI GPT-4
API Key: sk-xxxxxxxxxxxxxxxx
Default Model: gpt-4
Max Tokens: 2000
Temperature: 0.7
```

**Models**:
- `gpt-4` - Most capable
- `gpt-4-turbo` - Faster, cheaper
- `gpt-3.5-turbo` - Fast, economical

### SiliconFlow

```yaml
Provider: SiliconFlow
Name: SiliconFlow
API Key: sk-xxxxxxxxxxxxxxxx
Base URL: https://api.siliconflow.cn/v1
Default Model: Qwen/Qwen2.5-7B-Instruct
Max Tokens: 2000
Temperature: 0.7
```

**Popular Models**:
- `Qwen/Qwen2.5-7B-Instruct`
- `THUDM/glm-4-9b-chat`
- `meta-llama/Meta-Llama-3-8B-Instruct`

### Groq

```yaml
Provider: Groq
Name: Groq Fast
API Key: gsk_xxxxxxxxxxxxxxxx
Base URL: https://api.groq.com/openai/v1
Default Model: llama2-70b-4096
Max Tokens: 2000
Temperature: 0.7
```

**Models**:
- `llama2-70b-4096` - Llama 2 70B
- `mixtral-8x7b-32768` - Mixtral 8x7B
- `gemma-7b-it` - Gemma 7B

## GitHub Configuration

### Single Repository Mode

```yaml
Mode: Single Repository
Repository: owner/repo-name
Branch: main
Auto Commit: true
Commit Message: "Update {filename}"
```

### Multi-Repository Mode

```yaml
Mode: Multi Repository
Show Private: true
Show Public: true
Sort By: name  # name, updated, pushed
```

### GitHub Enterprise

```yaml
Mode: GitHub Enterprise
Base URL: https://github.yourcompany.com/api/v3
Repository: org/repo
Branch: main
```

## Editor Configuration

### Basic Editor Settings

```yaml
Editor:
  Font Size: 14
  Font Family: "Fira Code"
  Tab Size: 2
  Insert Spaces: true
  Word Wrap: true
  Line Numbers: true
  Auto Save: true
  Auto Save Delay: 5000  # milliseconds
```

### Theme Configuration

```yaml
Theme: Dark
# Options: Dark, Light, Solarized Dark, Solarized Light, Dracula, Monokai

Custom Colors:
  Background: "#1e1e1e"
  Foreground: "#d4d4d4"
  Selection: "#264f78"
  Line Number: "#858585"
  Cursor: "#aeafad"
```

### Syntax Highlighting

```yaml
Syntax Highlighting:
  Enabled: true
  Theme: "One Dark"
  Languages:
    - JavaScript
    - TypeScript
    - Python
    - Rust
    - Go
    - Java
    - C++
    - HTML
    - CSS
    - JSON
    - YAML
    - Markdown
```

## Terminal Configuration

### Basic Terminal Settings

```yaml
Terminal:
  Font Size: 12
  Font Family: "Fira Code"
  Scrollback: 10000
  Cursor Style: block  # block, underline, bar
  Cursor Blink: true
  Bell Sound: false
```

### Terminal Theme

```yaml
Terminal Theme:
  Background: "#1e1e1e"
  Foreground: "#d4d4d4"
  Cursor: "#ffffff"
  Selection: "#264f78"
  Black: "#000000"
  Red: "#cd3131"
  Green: "#0dbc79"
  Yellow: "#e5e510"
  Blue: "#2472c8"
  Magenta: "#bc3fbc"
  Cyan: "#11a8cd"
  White: "#e5e5e5"
  Bright Black: "#666666"
  Bright Red: "#f14c4c"
  Bright Green: "#23d18b"
  Bright Yellow: "#f5f543"
  Bright Blue: "#3b8eea"
  Bright Magenta: "#d670d6"
  Bright Cyan: "#29b8db"
  Bright White: "#e5e5e5"
```

### Quick Commands

```yaml
Quick Commands:
  - Name: List Files
    Icon: 📋
    Command: ls -la
    
  - Name: Find
    Icon: 🔍
    Command: find . -name
    
  - Name: NPM Install
    Icon: 📦
    Command: npm install
    
  - Name: Git Status
    Icon: 🔀
    Command: git status
    
  - Name: Docker PS
    Icon: 🐳
    Command: docker ps
```

## Git Configuration

### Basic Git Settings

```yaml
Git:
  User Name: Your Name
  User Email: your.email@example.com
  Auto Refresh: true
  Refresh Interval: 8000  # milliseconds
  Show Untracked: true
```

### Git Diff Settings

```yaml
Git Diff:
  Context Lines: 3
  Show Line Numbers: true
  Highlight Changes: true
  Colors:
    Addition: "#4caf50"
    Deletion: "#f44336"
    Modification: "#ff9800"
```

## Search Configuration

### File Search

```yaml
Search:
  Case Sensitive: false
  Whole Word: false
  Regular Expression: false
  Max Results: 100
  Include Pattern: "*"
  Exclude Pattern: "node_modules, .git"
```

### Symbol Search

```yaml
Symbol Search:
  Enabled: true
  Languages:
    - JavaScript
    - TypeScript
    - Python
    - Rust
    - Go
  Max Results: 50
```

## Network Configuration

### Connection Settings

```yaml
Network:
  Connection Timeout: 10000  # milliseconds
  Read Timeout: 30000
  Write Timeout: 30000
  Retry Attempts: 3
  Retry Delay: 1000
```

### Proxy Settings

```yaml
Proxy:
  Enabled: false
  Host: proxy.example.com
  Port: 8080
  Username: user
  Password: pass
```

## Security Configuration

### SSH Key Management

```yaml
SSH Keys:
  - Name: Personal
    Type: RSA
    Bits: 4096
    Path: ~/.ssh/id_rsa
    
  - Name: Work
    Type: ED25519
    Path: ~/.ssh/work_key
```

### Credential Storage

```yaml
Credentials:
  Storage: Encrypted  # Encrypted, PlainText
  Auto Lock: true
  Lock Timeout: 300  # seconds
  Biometric Unlock: true
```

## Performance Configuration

### Editor Performance

```yaml
Performance:
  Max File Size: 100000  # lines
  Virtual Scrolling: true
  Lazy Rendering: true
  Cache Size: 100  # MB
```

### Terminal Performance

```yaml
Terminal Performance:
  Max Scrollback: 10000
  Fast Scroll: true
  GPU Acceleration: true
```

## Backup Configuration

### Settings Backup

```yaml
Backup:
  Enabled: true
  Include:
    - SSH Connections
    - AI Providers
    - Editor Settings
    - Terminal Settings
  Exclude:
    - Passwords
    - API Keys
  Auto Backup: true
  Backup Interval: 86400  # seconds (24 hours)
```

## Example Configurations

### Web Developer Setup

```yaml
# Web Developer Configuration
SSH:
  Default Connection: dev-server
  
Editor:
  Tab Size: 2
  Word Wrap: true
  
Terminal:
  Quick Commands:
    - npm install
    - npm run dev
    - npm test
    - npm run build
    
AI:
  Provider: OpenAI
  Model: gpt-4
```

### DevOps Engineer Setup

```yaml
# DevOps Configuration
SSH:
  Connections:
    - prod-server
    - staging-server
    - ci-server
    
Terminal:
  Quick Commands:
    - kubectl get pods
    - docker ps
    - ansible-playbook
    - terraform apply
    
AI:
  Provider: Ollama
  Model: llama2
```

### Python Developer Setup

```yaml
# Python Developer Configuration
Editor:
  Tab Size: 4
  Insert Spaces: true
  
Terminal:
  Quick Commands:
    - python --version
    - pip install -r requirements.txt
    - python manage.py runserver
    - pytest
    
AI:
  Provider: OpenAI
  Model: gpt-4
```

## Next Steps

- [SSH Remote Development](/docs/ssh) - Learn SSH features
- [Terminal Usage](/docs/terminal) - Terminal tips
- [AI Assistant](/docs/ai) - Configure AI providers
- [GitHub Integration](/docs/github) - GitHub setup

## Support

Need help with configuration?

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)