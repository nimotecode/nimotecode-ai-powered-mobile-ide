# 配置示例

本页面提供各种 NimoteCode 功能的配置示例。

## SSH 配置

### 基本 SSH 连接

```yaml
连接名称: 我的服务器
主机: 192.168.1.100
端口: 22
用户名: developer
认证方式: 密码
密码: ********
```

### SSH 密钥认证

```yaml
连接名称: 生产服务器
主机: prod.example.com
端口: 22
用户名: deploy
认证方式: SSH 密钥
私钥: |
  -----BEGIN OPENSSH PRIVATE KEY-----
  b3BlbnNzaC1rZXktdjEAAAAABG5vbmU...
  -----END OPENSSH PRIVATE KEY-----
```

### 自定义端口 SSH

```yaml
连接名称: 自定义端口服务器
主机: server.example.com
端口: 2222
用户名: admin
认证方式: 密码
密码: ********
```

### 多个 SSH 连接

```yaml
连接列表:
  - 名称: 开发环境
    主机: dev.example.com
    端口: 22
    用户名: dev
    认证: 密码
    
  - 名称: 预发布环境
    主机: staging.example.com
    端口: 22
    用户名: staging
    认证: 密钥
    
  - 名称: 生产环境
    主机: prod.example.com
    端口: 22
    用户名: prod
    认证: 密钥
```

## AI 提供商配置

### Ollama（本地）

```yaml
提供商: Ollama
名称: 本地 Ollama
基础 URL: http://192.168.1.100:11434
默认模型: llama2
最大令牌: 2000
温度: 0.7
```

**设置步骤**：
1. 在服务器上安装 Ollama
2. 拉取模型：`ollama pull llama2`
3. 启动 Ollama：`ollama serve`
4. 在 NimoteCode 中配置

### OpenAI

```yaml
提供商: OpenAI
名称: OpenAI GPT-4
API 密钥: sk-xxxxxxxxxxxxxxxx
默认模型: gpt-4
最大令牌: 2000
温度: 0.7
```

**模型**：
- `gpt-4` - 最强大
- `gpt-4-turbo` - 更快、更便宜
- `gpt-3.5-turbo` - 快速、经济

### SiliconFlow

```yaml
提供商: SiliconFlow
名称: SiliconFlow
API 密钥: sk-xxxxxxxxxxxxxxxx
基础 URL: https://api.siliconflow.cn/v1
默认模型: Qwen/Qwen2.5-7B-Instruct
最大令牌: 2000
温度: 0.7
```

**热门模型**：
- `Qwen/Qwen2.5-7B-Instruct`
- `THUDM/glm-4-9b-chat`
- `meta-llama/Meta-Llama-3-8B-Instruct`

### Groq

```yaml
提供商: Groq
名称: Groq 快速
API 密钥: gsk_xxxxxxxxxxxxxxxx
基础 URL: https://api.groq.com/openai/v1
默认模型: llama2-70b-4096
最大令牌: 2000
温度: 0.7
```

**模型**：
- `llama2-70b-4096` - Llama 2 70B
- `mixtral-8x7b-32768` - Mixtral 8x7B
- `gemma-7b-it` - Gemma 7B

## GitHub 配置

### 单仓库模式

```yaml
模式: 单仓库
仓库: owner/repo-name
分支: main
自动提交: true
提交消息: "更新 {filename}"
```

### 多仓库模式

```yaml
模式: 多仓库
显示私有: true
显示公开: true
排序方式: name  # name, updated, pushed
```

### GitHub Enterprise

```yaml
模式: GitHub Enterprise
基础 URL: https://github.yourcompany.com/api/v3
仓库: org/repo
分支: main
```

## 编辑器配置

### 基本编辑器设置

```yaml
编辑器:
  字体大小: 14
  字体: "Fira Code"
  Tab 大小: 2
  插入空格: true
  自动换行: true
  行号: true
  自动保存: true
  自动保存延迟: 5000  # 毫秒
```

### 主题配置

```yaml
主题: Dark
# 选项: Dark, Light, Solarized Dark, Solarized Light, Dracula, Monokai

自定义颜色:
  背景: "#1e1e1e"
  前景: "#d4d4d4"
  选择: "#264f78"
  行号: "#858585"
  光标: "#aeafad"
```

### 语法高亮

```yaml
语法高亮:
  启用: true
  主题: "One Dark"
  语言:
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

## 终端配置

### 基本终端设置

```yaml
终端:
  字体大小: 12
  字体: "Fira Code"
  滚动缓冲: 10000
  光标样式: block  # block, underline, bar
  光标闪烁: true
  蜂鸣声: false
```

### 终端主题

```yaml
终端主题:
  背景: "#1e1e1e"
  前景: "#d4d4d4"
  光标: "#ffffff"
  选择: "#264f78"
  黑色: "#000000"
  红色: "#cd3131"
  绿色: "#0dbc79"
  黄色: "#e5e510"
  蓝色: "#2472c8"
  品红: "#bc3fbc"
  青色: "#11a8cd"
  白色: "#e5e5e5"
  亮黑: "#666666"
  亮红: "#f14c4c"
  亮绿: "#23d18b"
  亮黄: "#f5f543"
  亮蓝: "#3b8eea"
  亮品红: "#d670d6"
  亮青: "#29b8db"
  亮白: "#e5e5e5"
```

### 快捷命令

```yaml
快捷命令:
  - 名称: 列出文件
    图标: 📋
    命令: ls -la
    
  - 名称: 查找
    图标: 🔍
    命令: find . -name
    
  - 名称: NPM 安装
    图标: 📦
    命令: npm install
    
  - 名称: Git 状态
    图标: 🔀
    命令: git status
    
  - 名称: Docker PS
    图标: 🐳
    命令: docker ps
```

## Git 配置

### 基本 Git 设置

```yaml
Git:
  用户名: 您的名字
  邮箱: your.email@example.com
  自动刷新: true
  刷新间隔: 8000  # 毫秒
  显示未跟踪: true
```

### Git 差异设置

```yaml
Git 差异:
  上下文行数: 3
  显示行号: true
  高亮更改: true
  颜色:
    新增: "#4caf50"
    删除: "#f44336"
    修改: "#ff9800"
```

## 搜索配置

### 文件搜索

```yaml
搜索:
  区分大小写: false
  全词匹配: false
  正则表达式: false
  最大结果: 100
  包含模式: "*"
  排除模式: "node_modules, .git"
```

### 符号搜索

```yaml
符号搜索:
  启用: true
  语言:
    - JavaScript
    - TypeScript
    - Python
    - Rust
    - Go
  最大结果: 50
```

## 网络配置

### 连接设置

```yaml
网络:
  连接超时: 10000  # 毫秒
  读取超时: 30000
  写入超时: 30000
  重试次数: 3
  重试延迟: 1000
```

### 代理设置

```yaml
代理:
  启用: false
  主机: proxy.example.com
  端口: 8080
  用户名: user
  密码: pass
```

## 安全配置

### SSH 密钥管理

```yaml
SSH 密钥:
  - 名称: 个人
    类型: RSA
    位数: 4096
    路径: ~/.ssh/id_rsa
    
  - 名称: 工作
    类型: ED25519
    路径: ~/.ssh/work_key
```

### 凭证存储

```yaml
凭证:
  存储: 加密  # 加密, 明文
  自动锁定: true
  锁定超时: 300  # 秒
  生物识别解锁: true
```

## 性能配置

### 编辑器性能

```yaml
性能:
  最大文件大小: 100000  # 行
  虚拟滚动: true
  懒渲染: true
  缓存大小: 100  # MB
```

### 终端性能

```yaml
终端性能:
  最大滚动缓冲: 10000
  快速滚动: true
  GPU 加速: true
```

## 备份配置

### 设置备份

```yaml
备份:
  启用: true
  包含:
    - SSH 连接
    - AI 提供商
    - 编辑器设置
    - 终端设置
  排除:
    - 密码
    - API 密钥
  自动备份: true
  备份间隔: 86400  # 秒（24 小时）
```

## 示例配置

### Web 开发者设置

```yaml
# Web 开发者配置
SSH:
  默认连接: dev-server
  
编辑器:
  Tab 大小: 2
  自动换行: true
  
终端:
  快捷命令:
    - npm install
    - npm run dev
    - npm test
    - npm run build
    
AI:
  提供商: OpenAI
  模型: gpt-4
```

### DevOps 工程师设置

```yaml
# DevOps 配置
SSH:
  连接列表:
    - prod-server
    - staging-server
    - ci-server
    
终端:
  快捷命令:
    - kubectl get pods
    - docker ps
    - ansible-playbook
    - terraform apply
    
AI:
  提供商: Ollama
  模型: llama2
```

### Python 开发者设置

```yaml
# Python 开发者配置
编辑器:
  Tab 大小: 4
  插入空格: true
  
终端:
  快捷命令:
    - python --version
    - pip install -r requirements.txt
    - python manage.py runserver
    - pytest
    
AI:
  提供商: OpenAI
  模型: gpt-4
```

## 下一步

- [SSH 远程开发](/zh/docs/ssh) - 学习 SSH 功能
- [终端使用](/zh/docs/terminal) - 终端技巧
- [AI 助手](/zh/docs/ai) - 配置 AI 提供商
- [GitHub 集成](/zh/docs/github) - GitHub 设置

## 支持

需要配置帮助？

- 📧 **邮箱**: aoun.ma@foxmail.com
- 🐙 **GitHub Issues**: [提交问题](https://github.com/nimotecode/nimote_issues)