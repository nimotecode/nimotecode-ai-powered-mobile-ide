import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NIMOTECODE',
  description: 'A powerful mobile remote IDE for developers',
  base: '/',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Features', link: '/features' },
          { text: 'Support', link: '/support' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Terms',   link: '/terms'   }
        ],
        sidebar: {
          '/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/docs/quick-start' },
                { text: 'Introduction', link: '/introduction' },
                { text: 'Features', link: '/features' },
                { text: 'Download', link: '/download' }
              ]
            },
            {
              text: 'Documentation',
              items: [
                { text: 'SSH Remote Development', link: '/docs/ssh' },
                { text: 'Terminal Usage', link: '/docs/terminal' },
                { text: 'GitHub Integration', link: '/docs/github' },
                { text: 'AI Assistant', link: '/docs/ai' },
                { text: 'Git Version Control', link: '/docs/git' },
                { text: 'Editor Features', link: '/docs/editor' }
              ]
            },
            {
              text: 'Configuration',
              items: [
                { text: 'Configuration Examples', link: '/docs/configuration' }
              ]
            },
            {
              text: 'Help',
              items: [
                { text: 'FAQ', link: '/docs/faq' },
                { text: 'Support', link: '/support' }
              ]
            }
          ]
        }
      }
    },

    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/', 
      themeConfig: {
        nav: [
          { text: '功能', link: '/zh/features' },
          { text: '支持', link: '/zh/support' },
          { text: '隐私政策', link: '/zh/privacy' },
          { text: '服务条款', link: '/zh/terms' }
        ],
        sidebar: {
          '/zh/': [
            {
              text: '开始使用',
              items: [
                { text: '快速入门', link: '/zh/docs/quick-start' },
                { text: '简介', link: '/zh/introduction' },
                { text: '功能特性', link: '/zh/features' },
                { text: '下载安装', link: '/zh/download' }
              ]
            },
            {
              text: '文档指南',
              items: [
                { text: 'SSH 远程开发', link: '/zh/docs/ssh' },
                { text: '终端使用', link: '/zh/docs/terminal' },
                { text: 'GitHub 集成', link: '/zh/docs/github' },
                { text: 'AI 助手', link: '/zh/docs/ai' },
                { text: 'Git 版本控制', link: '/zh/docs/git' },
                { text: '编辑器功能', link: '/zh/docs/editor' }
              ]
            },
            {
              text: '配置',
              items: [
                { text: '配置示例', link: '/zh/docs/configuration' }
              ]
            },
            {
              text: '帮助',
              items: [
                { text: '常见问题', link: '/zh/docs/faq' },
                { text: '支持', link: '/zh/support' }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nimotecode/nimote_issues' },
      { icon: 'email', link: 'mailto:aoun.ma@foxmail.com' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present NimoteCode'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  }
})