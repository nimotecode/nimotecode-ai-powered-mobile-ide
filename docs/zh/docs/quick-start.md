# 快速开始（3 分钟）

本指南以“第一次就跑通”为目标。

## 目标

3 分钟内完成：

1. 打开工作区
2. 跑通一条命令
3. 编辑并保存一个文件
4. 使用一个高价值面板（Source Control / AI / Debug）

## 第一步：打开工作区（30 秒）

选择一种模式：

- Local Explorer：打开本地项目目录
- Remote Explorer：通过 SSH 连接远程工作区

若使用远程模式：

1. 新建 SSH 配置（`host`、`port`、`username`）
2. 选择认证方式（密码或私钥）
3. 连接并确认工作区根路径

## 第二步：终端执行命令（30 秒）

1. 打开终端面板
2. 执行验证命令（如 `pwd`、`ls` 或你的 build/test 命令）
3. 输出过长时使用终端搜索

## 第三步：编辑并保存（45 秒）

1. 从文件树打开源码文件
2. 修改一行代码
3. 保存文件
4. 需要时使用符号导航或查找替换

## 第四步：选择一个结果路径（75 秒）

### 路径 A：提交改动

打开 Source Control：

- 查看改动文件
- 暂存变更
- 提交（已配置可继续 push）

参考：[/zh/docs/source-control](/zh/docs/source-control)

### 路径 B：用 AI 提速

打开 AI 面板：

- 选择 provider 配置
- 发起解释/重构/修复建议
- 需要时使用 AI Agent 执行自动化流程

参考：[/zh/docs/ai](/zh/docs/ai)

### 路径 C：快速定位问题（Pro）

打开 LSP/Debug：

- 查看诊断
- 应用代码动作
- 启动调试并检查变量/Watch

参考：[/zh/docs/lsp](/zh/docs/lsp)、[/zh/docs/debug](/zh/docs/debug)

## 高价值使用场景

1. 远程环境热修复：`/zh/docs/ssh` + `/zh/docs/terminal` + `/zh/docs/source-control`
2. 快速 bug 诊断：`/zh/docs/lsp` + `/zh/docs/debug` + `/zh/docs/timeline`
3. 重复任务自动化：`/zh/docs/tasks` + `/zh/docs/ai`
4. 稳定日常配置：`/zh/docs/settings` + `/zh/docs/configuration`

## 下一步最佳动作

首次跑通后，建议立即配置：

- AI provider 配置：[/zh/docs/configuration](/zh/docs/configuration)
- 编辑器与键盘偏好：[/zh/docs/settings](/zh/docs/settings)
