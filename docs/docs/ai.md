# AI Assistant

NimoteCode includes two AI experiences: AI Chat for direct help and AI Agent for multi-step execution.

## AI Chat

Use AI Chat when you want fast answers during coding:

- Explain unfamiliar code
- Analyze terminal errors
- Propose refactor plans
- Generate safer next steps before commit

## AI Agent

Use AI Agent when work requires multiple actions and checks:

- Step-by-step execution flow
- Progress visibility and run status
- Risk prompts before sensitive actions
- Auto mode or confirm mode based on your control preference

## Provider Flexibility

NimoteCode supports multiple provider templates:

- OpenAI
- Anthropic
- Gemini
- Grok
- DeepSeek
- Zhipu
- Moonshot
- Ollama
- Custom OpenAI-compatible endpoints

## What You Can Configure

- Model identity and endpoint
- Sampling behavior and output size
- Streaming response mode
- System prompt and context size
- File-context usage for codebase-aware responses

## Best-Practice Setup

1. Keep one primary cloud model and one backup model.
2. Use lower creativity for deterministic coding tasks.
3. Keep file context on for project-level analysis.
4. Review AI output before running in production.

## Related Pages

- [Configuration](/docs/configuration)
- [Source Control](/docs/source-control)
- [Timeline](/docs/timeline)
