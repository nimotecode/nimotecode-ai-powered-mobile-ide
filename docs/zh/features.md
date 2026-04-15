# 功能特性

<div class="feature-hero">
  <p class="feature-eyebrow">NimoteCode 能力矩阵</p>
  <h2>面向真实交付的移动端工程工作台</h2>
  <p class="feature-lead">从 SSH 接入到最终提交，NimoteCode 将编码、诊断、自动化与发布能力整合在一个高效移动工作流中。</p>
</div>

<div class="feature-kpis">
  <div class="feature-kpi">
    <p class="kpi-value">10+</p>
    <p class="kpi-label">核心面板能力</p>
  </div>
  <div class="feature-kpi">
    <p class="kpi-value">2 模式</p>
    <p class="kpi-label">本地 + SSH 工作区</p>
  </div>
  <div class="feature-kpi">
    <p class="kpi-value">Pro</p>
    <p class="kpi-label">LSP / Debug / Sync / Source Control</p>
  </div>
  <div class="feature-kpi">
    <p class="kpi-value">全链路</p>
    <p class="kpi-label">编辑、执行、分析、交付</p>
  </div>
</div>

## 功能汇总面板

<p class="feature-section-note">先看全局能力，再进入各模块细节。</p>

<div class="feature-grid feature-grid-primary">
<VPFeatures>
  <VPFeature
    title="远程工作区"
    details="连接 SSH 工作区，管理服务器配置档，在移动端直接处理真实远程项目。文档：/zh/docs/ssh"
  />
  <VPFeature
    title="终端与命令"
    details="在多标签终端执行 build/test/deploy，并通过输出搜索快速定位关键日志。文档：/zh/docs/terminal"
  />
  <VPFeature
    title="Source Control"
    details="应用内完成 Git 全流程：差异审查、干净提交、分支同步，并用 Git AI 降低交付风险。文档：/zh/docs/source-control"
  />
  <VPFeature
    title="LSP 与 Debug（Pro）"
    details="先用诊断与代码动作收敛问题，再用断点、调用栈、变量与 Watch 精准定位。文档：/zh/docs/lsp、/zh/docs/debug"
  />
  <VPFeature
    title="AI 工作流"
    details="按团队偏好接入 AI 提供商，结合 AI Chat 与 AI Agent 完成分析、重构与自动化。文档：/zh/docs/ai"
  />
  <VPFeature
    title="Tasks 与 Timeline"
    details="将重复命令标准化执行，并把运行事件转为可行动的根因 Trace 与修复建议。文档：/zh/docs/tasks、/zh/docs/timeline"
  />
  <VPFeature
    title="Sync / Cache（Pro）"
    details="在本地与远程间安全传输项目内容，具备方向控制、路径约束与历史记录。文档：/zh/docs/sync-cache"
  />
  <VPFeature
    title="账户与订阅"
    details="登录、试用与订阅状态校验、恢复购买，保障 Pro 工作流连续可用。"
  />
  <VPFeature
    title="设置与键盘"
    details="主题、语言、编辑器排版、软键盘与键盘行为均可调优，适合长时移动开发。文档：/zh/docs/settings"
  />
  <VPFeature
    title="通知"
    details="通过应用内通知及时掌握关键流程状态与更新信息。"
  />
</VPFeatures>
</div>

## 核心工作区

<p class="feature-section-note">稳定接入与低摩擦文件操作，是后续所有流程的基础。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="资源管理与文件操作"
    details="快速创建、移动、重命名与编辑文件，并保持与编辑器定位联动。"
  />
  <VPFeature
    title="SSH 连接配置"
    details="为 Staging、Production 等环境复用连接配置档，提升切换效率。"
  />
  <VPFeature
    title="编辑器与面板协同"
    details="在代码、诊断、调试与任务面板间高效切换，减少上下文丢失。"
  />
</VPFeatures>
</div>

## 终端

<p class="feature-section-note">构建、测试、部署与故障响应都围绕终端高频发生。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="多终端工作流"
    details="将构建、测试、部署、日志拆分到不同终端标签并发执行。"
  />
  <VPFeature
    title="命令执行与输出"
    details="实时查看命令输出，在排障期间保留高价值日志上下文。"
  />
  <VPFeature
    title="搜索与定位"
    details="在长输出中快速搜索失败点，直接进入下一步处理动作。"
  />
</VPFeatures>
</div>

## Source Control（Pro）

<p class="feature-section-note">通过应用内 Git + AI 辅助，提高提交质量与交付可控性。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="变更管理"
    details="精准查看已暂存、未暂存与冲突改动，按文件粒度控制交付内容。"
  />
  <VPFeature
    title="提交与同步"
    details="在同一移动流程内完成 commit、pull/push/fetch，减少切换成本。"
  />
  <VPFeature
    title="分支与 Stash"
    details="在应用内完成分支切换、集成与 stash 生命周期管理。"
  />
  <VPFeature
    title="历史与差异"
    details="通过提交/文件/行级历史与 diff 视图做更稳妥的改动决策。"
  />
  <VPFeature
    title="Git AI"
    details="生成更清晰提交信息、解释改动逻辑并提前识别潜在风险。"
  />
</VPFeatures>
</div>

## LSP 与 Debug（Pro）

<p class="feature-section-note">诊断先收敛，调试再验证，显著缩短问题处理路径。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="LSP 诊断"
    details="集中查看错误与警告，按严重级别筛选并一键跳转代码位置。"
  />
  <VPFeature
    title="LSP 代码动作"
    details="快速应用可用修复并刷新诊断结果，缩短问题处理周期。"
  />
  <VPFeature
    title="LSP 安装向导"
    details="通过检测/安装/复检流程，完成支持语言服务能力准备。"
  />
  <VPFeature
    title="调试运行控制"
    details="使用暂停/继续/单步控制检查运行状态，定位复杂行为异常。"
  />
  <VPFeature
    title="调试检查面板"
    details="在一处查看断点、线程、调用栈、变量、Watch 与调试输出。"
  />
  <VPFeature
    title="详细文档"
    details="LSP 文档：/zh/docs/lsp；Debug 文档：/zh/docs/debug"
  />
</VPFeatures>
</div>

## AI 与自动化

<p class="feature-section-note">简单问题即时回答，复杂任务分步骤执行，效率和可控性兼顾。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="AI Chat 与 Agent"
    details="简单问题用对话快速解决，复杂任务交给分步骤 Agent 执行。"
  />
  <VPFeature
    title="提供商模板"
    details="可用内置模板或自定义 OpenAI 兼容端点，匹配你的团队技术栈。"
  />
  <VPFeature
    title="高级模型参数"
    details="通过模型参数、上下文与流式选项平衡质量、速度与成本。"
  />
  <VPFeature
    title="用户工具与历史"
    details="加载工作区用户工具并保留 chat/agent 历史，形成可复用流程资产。"
  />
</VPFeatures>
</div>

## Tasks、Timeline 与 Sync

<p class="feature-section-note">将重复操作、事件分析与项目传输统一到可追踪流程里。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="Tasks 面板"
    details="按分组执行远程任务并跟踪状态，让团队重复操作标准化。文档：/zh/docs/tasks"
  />
  <VPFeature
    title="Timeline 面板"
    details="将事件流转为 Trace 诊断，通过来源/严重级别筛选快速收敛问题。文档：/zh/docs/timeline"
  />
  <VPFeature
    title="Causal Timeline AI"
    details="通过 issue/session 流程和 AI 分析导出，加速复杂问题交接与协同。"
  />
  <VPFeature
    title="Sync / Cache 面板（Pro）"
    details="支持 local->remote 同步与 remote->local 缓存，具备路径约束与历史回溯。文档：/zh/docs/sync-cache"
  />
</VPFeatures>
</div>

## 设置、账户与订阅

<p class="feature-section-note">保障身份与权益连续性，同时优化长时间移动端开发体验。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="认证"
    details="支持邮箱密码与 Google 登录，并支持匿名用户升级绑定流程。"
  />
  <VPFeature
    title="订阅与试用"
    details="可查看权益状态、刷新校验并恢复购买，保障付费能力稳定可用。"
  />
  <VPFeature
    title="设置系统"
    details="统一管理主题、语言、编辑器排版与输入偏好，提升日常开发舒适度。"
  />
  <VPFeature
    title="通知"
    details="及时获取流程相关通知和状态更新。"
  />
</VPFeatures>
</div>

## Pro 与模式说明

<p class="feature-section-note">当前门控边界与模式限制，帮助你规划可用路径。</p>

<div class="feature-grid">
<VPFeatures>
  <VPFeature
    title="当前 Pro 门控面板"
    details="`sourceControl`、`lsp`、`debug`、`syncCache`。"
  />
  <VPFeature
    title="Local Explorer 限制"
    details="当前逻辑会在 Local Explorer 模式下限制 `debug` 与 `tasks`。"
  />
  <VPFeature
    title="工作区数据持久化"
    details="工作区元数据及 AI/chat/tool 数据会按工作流写入工作区 `.nimote` 路径。"
  />
</VPFeatures>
</div>
