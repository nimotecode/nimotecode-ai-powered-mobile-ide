# 文档

欢迎使用 NimoteCode 文档。这里提供全面的指南，帮助您充分利用 NimoteCode。

## 快速开始

- [简介](/zh/introduction) - 了解 NimoteCode 是什么以及它能做什么
- [功能特性](/zh/features) - 探索所有可用功能
- [下载安装](/zh/download) - 获取 NimoteCode

## 功能指南

### 远程开发

- [SSH 远程开发](/zh/docs/ssh) - 安全连接到您的服务器
  - SSH 连接管理
  - 远程文件浏览器
  - 文件操作
  - 多终端会话

### 终端

- [终端使用](/zh/docs/terminal) - 掌握终端功能
  - 多终端管理
  - 快捷命令
  - AI 终端分析
  - 终端界面

### AI 助手

- [AI 助手](/zh/docs/ai) - 配置和使用 AI 功能
  - 支持的提供商
  - 聊天模式
  - 编辑模式
  - 配置管理

### GitHub 集成

- [GitHub 集成](/zh/docs/github) - 连接 GitHub
  - OAuth 认证
  - 仓库浏览
  - 文件编辑
  - 分支支持

## 快速参考

### 键盘快捷键

| 操作 | 快捷键 |
|------|--------|
| 复制 | Ctrl+C |
| 粘贴 | Ctrl+V |
| 剪切 | Ctrl+X |
| 全选 | Ctrl+A |
| 撤销 | Ctrl+Z |
| 重做 | Ctrl+Y |
| 保存 | Ctrl+S |
| 查找 | Ctrl+F |

### 快捷命令

**文件系统：**
- `ls` - 列出目录内容
- `ls -la` - 列出所有文件详情
- `cd <目录>` - 切换目录
- `pwd` - 显示当前目录

**开发：**
- `npm install` - 安装 Node.js 依赖
- `yarn install` - 使用 Yarn 安装
- `cargo build` - 构建 Rust 项目
- `make` - 构建项目

**Git：**
- `git status` - 检查仓库状态
- `git log --oneline` - 查看提交历史
- `git branch` - 列出分支
- `git diff` - 显示更改

### 支持的语言

NimoteCode 支持 50+ 种语言的语法高亮，包括：

**Web:** JavaScript、TypeScript、HTML、CSS、Vue、React

**后端:** Python、Java、Go、Rust、C/C++、C#

**移动:** Swift、Kotlin、Dart、Flutter

**数据:** SQL、JSON、YAML、TOML、XML

**脚本:** Bash、PowerShell、Python、Ruby

**配置:** Dockerfile、Kubernetes、Nginx、Apache

## 故障排除

### SSH 连接问题

1. 检查网络连接
2. 验证服务器地址和端口
3. 确认用户名和密码/密钥
4. 检查防火墙设置

### 终端不工作

1. 确保 SSH 连接处于活动状态
2. 尝试关闭并重新打开终端
3. 检查服务器上是否可用 shell
4. 如需要，重启应用

### AI 不响应

1. 检查 API 密钥是否有效
2. 验证网络连接
3. 尝试不同的提供商
4. 检查 API 速率限制

### 文件无法保存

1. 检查文件权限
2. 验证磁盘空间
3. 确保连接稳定
4. 尝试手动保存

## 常见问题

### NimoteCode 是免费的吗？

NimoteCode 提供免费版和专业版。免费版包含 SSH、终端和 GitHub 集成等基础功能。专业版解锁 Git 版本控制和增强 AI 能力等高级功能。

### 可以离线使用 NimoteCode 吗？

某些功能可以离线工作（本地文件编辑），但大多数功能需要网络连接用于 SSH、GitHub 和 AI 功能。

### 可以有多少个终端会话？

您最多可以有 6 个并发终端会话。

### 支持哪些 AI 提供商？

NimoteCode 支持 OpenAI、Ollama（本地）、SiliconFlow 和 Groq。

### 我的数据安全吗？

是的！NimoteCode 使用安全的 SSH 连接、加密的令牌存储，不会在您的服务器上存储您的代码。

## 支持

需要帮助？以下是您的选择：

- 📧 **邮箱**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [提交问题](https://github.com/nimotecode/nimote_issues)
- 📖 **文档**: 您正在阅读！

## 版本历史

### v2.0 (2026年3月)

**新功能：**
- 快捷命令配置系统
- AI 终端输出分析
- 增强的提供商配置

**改进：**
- 优化终端性能
- 改进 AI 组件性能
- 增强错误处理

**Bug 修复：**
- 修复 SSH 登录历史 session 删除问题
- 修复订阅访问问题
- 优化文件搜索

### v1.5 (2025年12月)

- 添加多终端支持
- 添加 GitHub 集成
- 添加 AI 助手
- 改进文件浏览器

### v1.0 (2025年9月)

- 初始发布
- SSH 远程开发
- SFTP 文件管理器
- 带语法高亮的代码编辑器