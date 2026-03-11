# GitHub Integration

NimoteCode provides seamless GitHub integration, allowing you to browse, edit, and manage your repositories directly from your mobile device.

## Overview

GitHub integration features:

- **Repository Access**: Browse all your repositories
- **File Editing**: Edit files with syntax highlighting
- **Commit Changes**: Auto-commit your edits
- **Branch Support**: Work with different branches
- **OAuth Authentication**: Secure GitHub login

## Authentication

### Connecting GitHub

1. Open the **GitHub** panel
2. Click **"Connect GitHub"**
3. Authorize NimoteCode on GitHub
4. You're connected!

### OAuth Flow

NimoteCode uses OAuth for secure authentication:

1. Tap "Connect GitHub"
2. GitHub authorization page opens
3. Grant permissions to NimoteCode
4. Automatically redirected back
5. Access token stored securely

### Permissions

NimoteCode requests these permissions:

- **repo**: Full access to public and private repositories
- **user**: Read access to your profile

### Disconnecting

To disconnect GitHub:

1. Open **Settings**
2. Find **GitHub** section
3. Click **"Disconnect"**
4. Confirm disconnection

Or revoke access on GitHub:
1. Go to GitHub Settings → Applications
2. Find NimoteCode
3. Click "Revoke access"

## Repository Modes

### Single Repository Mode

Connect to a specific repository:

**Configuration**:
```yaml
Repository: owner/repo-name
Branch: main (or your preferred branch)
```

**Features**:
- Direct access to one repository
- Faster loading
- Simpler interface

### Multi-Repository Mode

Access all your repositories:

**Features**:
- List all repositories (public + private)
- Sorted alphabetically
- Shows repository info:
  - Description
  - Public/Private badge
  - Star count

### Switching Modes

1. Open GitHub panel
2. Tap **Settings** icon
3. Select repository mode
4. Configure repositories

## Browsing Repositories

### Repository List

In multi-repo mode, you'll see:

```
┌─────────────────────────────────────┐
│ 🔒 my-private-repo                  │
│    Private • My private project     │
├─────────────────────────────────────┤
│ 🌐 my-public-repo                   │
│    Public • Open source project     │
├─────────────────────────────────────┤
│ 🔒 another-repo                     │
│    Private • Another project        │
└─────────────────────────────────────┘
```

### File Browser

Navigate repository files:

- **Tree Structure**: Hierarchical file view
- **Lazy Loading**: Directories load on expand
- **File Icons**: Different icons for file types
- **Cached Content**: Previously loaded content cached

### File Information

Tap a file to see:

- **File name**: Name with extension
- **File size**: Size in bytes/KB/MB
- **Last commit**: Latest commit message
- **SHA**: File's Git SHA

## File Operations

### Viewing Files

1. Navigate to the file
2. Tap to open
3. View with syntax highlighting

**Supported Features**:
- Syntax highlighting for 50+ languages
- Line numbers
- Code folding
- Read-only mode for binary files

### Editing Files

1. Open a file
2. Make your edits
3. Auto-save triggers after 5 seconds
4. Changes commit automatically

**Edit Features**:
- Full text editor
- Undo/Redo
- Find and Replace
- Syntax highlighting

### Creating Files

1. Navigate to target directory
2. Tap **+** button
3. Select **"New File"**
4. Enter file name
5. Edit the new file
6. Auto-commit creates the file

### Renaming Files

1. Long-press the file
2. Select **"Rename"**
3. Enter new name
4. Confirm rename

**Note**: Renaming creates a new file and deletes the old one.

### Deleting Files

1. Long-press the file
2. Select **"Delete"**
3. Confirm deletion

**Warning**: Deletion is permanent and immediately committed!

## Committing Changes

### Auto-Commit

NimoteCode automatically commits changes:

- **Trigger**: 5 seconds after last edit
- **Commit Message**: "Update filename.ext"
- **Branch**: Current branch

### Manual Commit

For custom commit messages:

1. Edit your files
2. Tap **"Commit"** button
3. Enter commit message
4. Tap **"Commit"**

### Commit History

View file history:

1. Open a file
2. Tap **"History"** button
3. See all commits for this file
4. Tap commit to see diff

## Branch Support

### Default Branch

Set a default branch in configuration:

```yaml
Branch: main
```

### Branch Display

Current branch shown in title bar:

```
my-repo (main)
```

### Switching Branches

1. Open repository
2. Tap branch selector
3. Select different branch
4. Files reload from new branch

### Creating Branches

Currently, branch creation is not supported in the app. Use GitHub web interface or Git commands in terminal.

## Working with Directories

### Directory Structure

```
📁 root
  📁 src
    📁 components
      📄 Button.tsx
      📄 Card.tsx
    📁 utils
      📄 helpers.ts
  📁 tests
    📄 test.ts
  📄 README.md
  📄 package.json
```

### Directory Operations

- **Expand**: Tap directory to expand
- **Collapse**: Tap again to collapse
- **Refresh**: Pull to refresh or tap refresh button
- **Navigate**: Tap through directories

### Directory Indicators

- **📁**: Directory
- **📄**: File
- **🔒**: Private repository
- **🌐**: Public repository

## Search and Navigation

### Finding Files

1. Tap **Search** icon
2. Enter file name or path
3. Results show matching files
4. Tap to open

### Recent Files

Recently opened files appear in:

- **Recent list**: Quick access to recent files
- **History**: Full browsing history

### Bookmarks

Save frequently accessed files:

1. Open a file
2. Tap **Bookmark** icon
3. Access from Bookmarks menu

## Best Practices

### Commit Strategy

- **Small commits**: Make focused, small changes
- **Clear messages**: Write descriptive commit messages
- **Review before commit**: Check your changes
- **Test changes**: Verify functionality before committing

### File Management

- **Use .gitignore**: Ignore generated files
- **Avoid large files**: GitHub has file size limits
- **Binary files**: Be cautious with binary files
- **Conflict awareness**: Be aware of merge conflicts

### Security

- **Don't commit secrets**: Never commit API keys, passwords
- **Use .env files**: Keep secrets in environment files
- **Review changes**: Always review before committing
- **Revoke access**: Disconnect when not needed

## Limitations

### File Size Limits

- **Maximum file size**: 100 MB
- **Repository size**: Recommended < 1 GB
- **Large files**: Use Git LFS for files > 50 MB

### Feature Limitations

- **Branch creation**: Not supported in app
- **Pull requests**: View only, cannot create
- **Issues**: View only, cannot create
- **Merge conflicts**: Cannot resolve in app

### Rate Limits

GitHub API has rate limits:

- **Authenticated**: 5,000 requests/hour
- **Unauthenticated**: 60 requests/hour

NimoteCode caches aggressively to minimize API calls.

## Troubleshooting

### Authentication Failed

1. Check internet connection
2. Try disconnecting and reconnecting
3. Revoke and re-authorize on GitHub
4. Check GitHub's status page

### Can't See Repository

1. Verify repository exists
2. Check your access permissions
3. Refresh repository list
4. Check if repository is private

### File Won't Save

1. Check internet connection
2. Verify write permissions
3. Check file size limits
4. Try manual commit

### Rate Limited

1. Wait for limit reset (1 hour)
2. Reduce API calls
3. Use caching effectively
4. Contact support if persistent

## Advanced Features

### Custom Endpoints

For GitHub Enterprise:

1. Open GitHub settings
2. Enter custom API endpoint
3. Configure for your instance
4. Connect normally

### Multiple Accounts

Currently, NimoteCode supports one GitHub account at a time. To switch:

1. Disconnect current account
2. Connect new account
3. Authorize new account

### Webhook Integration (Coming Soon)

Future versions will support:

- Real-time repository updates
- Push notifications
- CI/CD integration

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+F | Find in file |
| Ctrl+H | Find and replace |
| Ctrl+S | Save/Commit |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |

## Next Steps

- [SSH Remote Development](/docs/ssh) - Connect to servers
- [AI Assistant](/docs/ai) - Configure AI providers
- [Terminal Usage](/docs/terminal) - Use terminal features

## Support

Need help with GitHub integration?

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)