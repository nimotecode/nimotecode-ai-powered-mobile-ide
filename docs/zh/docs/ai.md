# AI 助手

NimoteCode 提供两类 AI 能力：AI Chat 用于即时辅助，AI Agent 用于多步骤执行。

## AI Chat

适合高频开发问答场景：

- 解释陌生代码
- 分析终端报错
- 给出重构建议
- 在提交前提供更稳妥的改动建议

## AI Agent

适合需要连续动作的复杂任务：

- 分步骤执行流程
- 运行进度与状态可视化
- 高风险操作前提示确认
- 支持自动模式与确认模式

## 多提供商支持

可按团队偏好选择：

- OpenAI
- Anthropic
- Gemini
- Grok
- DeepSeek
- Zhipu
- Moonshot
- Ollama
- 自定义 OpenAI 兼容端点

## 可配置能力

- 模型与服务端点
- 采样参数与输出规模
- 流式响应模式
- 系统提示词与上下文窗口
- 文件上下文开关（代码库感知）

## 推荐配置方式

1. 保留一个主力模型与一个备用模型。
2. 代码任务优先低随机性。
3. 项目级分析开启文件上下文。
4. 生产使用前对 AI 结果做人工校验。

## 相关页面

- [配置指南](/zh/docs/configuration)
- [Source Control](/zh/docs/source-control)
- [Timeline 面板](/zh/docs/timeline)
