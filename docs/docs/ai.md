# AI Assistant

NimoteCode integrates AI-powered coding assistance to help you write, edit, and understand code more efficiently.

## Overview

The AI Assistant provides two main modes:

- **Chat Mode**: Ask questions, get explanations, and receive coding assistance
- **Edit Mode**: Structured code editing with AI-generated modifications

## AI Providers

NimoteCode supports multiple AI providers:

### Ollama (Local)

**Best for**: Privacy, offline use, fast local inference

- **Type**: Local deployment
- **Setup**: Requires Ollama server running on your network
- **Models**: Any Ollama-compatible model
- **Advantages**:
  - Complete privacy
  - No internet required
  - No API costs
  - Fast inference on capable hardware

**Setup**:
1. Install Ollama on your server/computer
2. Pull a model: `ollama pull llama2`
3. In NimoteCode, add provider with your Ollama URL
4. Start using AI locally

### OpenAI

**Best for**: Powerful models, complex tasks

- **Type**: Cloud service
- **Models**: GPT-4, GPT-3.5, and more
- **Advantages**:
  - State-of-the-art models
  - Excellent reasoning
  - Wide knowledge base

**Setup**:
1. Get API key from OpenAI
2. Add provider in NimoteCode
3. Enter your API key
4. Select model and start using

### SiliconFlow

**Best for**: Chinese users, fast access in China

- **Type**: Cloud service (China)
- **Models**: Various open-source models
- **Advantages**:
  - Fast access in China
  - Competitive pricing
  - Multiple model options

**Setup**:
1. Get API key from SiliconFlow
2. Add provider in NimoteCode
3. Enter your API key
4. Select model

### Groq

**Best for**: Speed, real-time applications

- **Type**: Cloud service
- **Models**: Llama, Mixtral (optimized)
- **Advantages**:
  - Extremely fast inference
  - Low latency
  - Good for real-time use

**Setup**:
1. Get API key from Groq
2. Add provider in NimoteCode
3. Enter your API key
4. Select model

## Configuration

### Adding a Provider

1. Open **AI Configuration** panel
2. Click **Add Provider**
3. Select provider type
4. Enter configuration:
   - **Name**: Friendly name for the provider
   - **API Key**: Your API key (for cloud providers)
   - **Base URL**: Custom endpoint (optional)
   - **Default Model**: Primary model to use
5. Click **Save**

### Provider Settings

| Setting | Description |
|---------|-------------|
| **Name** | Display name for the provider |
| **API Key** | Authentication key |
| **Base URL** | Custom API endpoint |
| **Default Model** | Model to use by default |
| **Max Tokens** | Maximum response length |
| **Temperature** | Response randomness (0-1) |

### Switching Providers

1. Open AI panel
2. Click provider dropdown
3. Select different provider
4. Start chatting

## Chat Mode

Chat mode is for general programming assistance.

### Starting a Chat

1. Open AI panel
2. Ensure **Chat Mode** is selected
3. Type your question or request
4. Press Enter or tap Send

### File Context

Automatically attach current file to your message:

- **Auto-attach**: Current file is automatically attached
- **File Name**: Shows which file is attached
- **Truncation**: Files >20,000 characters are truncated
- **Indicator**: Shows "Content truncated" if applicable

### Chat Features

- **Streaming Responses**: See responses in real-time
- **Code Blocks**: Syntax-highlighted code in responses
- **Copy Code**: One-tap copy for code blocks
- **Chat History**: Previous messages preserved

### Example Conversations

**Ask for explanations**:
```
User: What does this regex do?
     /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

AI: This regex pattern matches email addresses...
```

**Get code suggestions**:
```
User: How do I read a file in Python?

AI: Here's how to read a file in Python:

```python
with open('file.txt', 'r') as f:
    content = f.read()
```
```

**Debug assistance**:
```
User: Why am I getting "undefined is not a function"?

AI: This error typically occurs when...
```

## Edit Mode

Edit mode is for structured code modifications.

### Using Edit Mode

1. Open AI panel
2. Switch to **Edit Mode**
3. Select the file to edit
4. Describe the changes you want
5. AI generates a structured edit plan

### Edit Structure

AI generates edits in this format:

```json
{
  "edits": [
    {
      "startLine": 10,
      "endLine": 15,
      "newCode": "// New code here",
      "explanation": "Why this change was made"
    }
  ]
}
```

### Applying Edits

1. Review the suggested changes
2. Click **Apply** to make changes
3. Or click **Reject** to discard
4. Changes can be undone with Ctrl+Z

### Edit Examples

**Add a function**:
```
User: Add a function to validate email addresses

AI: I'll add an email validation function:

[Shows the code to add at line 25]
```

**Refactor code**:
```
User: Refactor this to use async/await instead of promises

AI: I'll convert the promise chain to async/await:

[Shows the refactored code]
```

**Fix bugs**:
```
User: Fix the null pointer exception in the getUser function

AI: I'll add null checks to prevent the exception:

[Shows the fix with null checks]
```

## Context Management

### File Context

- **Auto-attach**: Current file automatically included
- **Character Limit**: 20,000 characters max
- **Truncation Notice**: Shows when content is truncated
- **File Name Display**: Shows attached file name

### Managing Context

- **Clear Context**: Remove attached file
- **Change File**: Switch to different file
- **View Context**: See what's attached

## Best Practices

### Effective Prompts

**Be specific**:
```
❌ "Fix this code"
✅ "Fix the null pointer exception in the getUser function"
```

**Provide context**:
```
❌ "Add validation"
✅ "Add email validation to the registration form submit handler"
```

**Ask for explanations**:
```
❌ "What's wrong?"
✅ "Explain why this async function isn't working as expected"
```

### Code Quality

- **Review AI suggestions**: Always review generated code
- **Test changes**: Test AI-modified code thoroughly
- **Understand first**: Make sure you understand the change
- **Iterate**: Refine prompts if initial result isn't perfect

### Performance

- **Clear context**: Remove unnecessary context
- **Be concise**: Shorter prompts are faster
- **Use edit mode**: For targeted changes, use edit mode
- **Choose right provider**: Match provider to task complexity

## Advanced Features

### Custom Endpoints

Use custom API endpoints:

1. Add provider
2. Enter custom Base URL
3. Configure as usual
4. Useful for:
   - Self-hosted models
   - Proxies
   - Alternative endpoints

### Temperature Control

Adjust response creativity:

- **0.0**: Deterministic, consistent
- **0.5**: Balanced
- **1.0**: Creative, varied

**Use cases**:
- Code generation: 0.0-0.3
- Explanations: 0.3-0.7
- Creative tasks: 0.7-1.0

### Max Tokens

Control response length:

- **Short responses**: 100-500 tokens
- **Normal responses**: 500-1000 tokens
- **Long responses**: 1000+ tokens

## Privacy & Security

### Data Handling

- **API Keys**: Stored securely on device
- **Chat History**: Kept locally
- **File Content**: Sent to AI provider for analysis
- **No Cloud Storage**: We don't store your data

### Best Practices

- **Don't send sensitive data**: Avoid sending passwords, keys
- **Use local AI**: For sensitive projects, use Ollama
- **Review permissions**: Check what data is sent
- **Clear history**: Clear chat history if needed

## Troubleshooting

### Connection Issues

1. Check internet connection
2. Verify API key is correct
3. Check API endpoint URL
4. Try different provider

### Slow Responses

1. Check network latency
2. Use local Ollama for speed
3. Reduce max tokens
4. Use faster model

### Poor Quality Responses

1. Provide more context
2. Be more specific in prompts
3. Try different temperature
4. Use more capable model

### File Not Attaching

1. Check file size (max 20,000 chars)
2. Ensure file is open in editor
3. Try manual attachment
4. Check for special characters

## Limitations

### Context Limits

- **File Size**: 20,000 characters max
- **Chat History**: Last 50 messages
- **Token Limits**: Varies by provider

### Feature Availability

- **Free Tier**: Basic AI features
- **Professional**: Full AI capabilities
- **Provider Support**: Varies by provider

## Future Enhancements

Coming soon:

- [ ] Custom quick commands
- [ ] Direct AI API calls
- [ ] Multi-file context
- [ ] Code completion
- [ ] AI-powered search

## Next Steps

- [Terminal Usage](/docs/terminal) - Use terminal with AI analysis
- [SSH Remote Development](/docs/ssh) - Connect to servers
- [GitHub Integration](/docs/github) - Manage repositories

## Support

Need help with AI Assistant?

- 📧 **Email**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [Submit an issue](https://github.com/nimotecode/nimote_issues)