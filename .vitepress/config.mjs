import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'IT Learning Portal',
  description: 'IT初学者向けの社内学習ポータル',
  base: '/it/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0078d4' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'IT Learning Portal',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '検索結果がありません',
            resetButtonTitle: '検索をリセット',
            footer: {
              selectText: '選択',
              navigateText: '移動',
              closeText: '閉じる'
            }
          }
        }
      }
    },
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'Windows', link: '/windows/wsus' },
      { text: 'ネットワーク', link: '/network/' }
    ],
    sidebar: {
      '/windows/': [
        {
          text: 'Windows',
          items: [
            { text: 'WSUSとは', link: '/windows/wsus' },
            { text: 'Active Directory（準備中）', link: '/windows/active-directory' }
          ]
        }
      ],
      '/network/': [
        {
          text: 'ネットワーク',
          items: [
            { text: '概要', link: '/network/' },
            { text: 'IPアドレス（準備中）', link: '/network/ip-address' },
            { text: 'DNS（準備中）', link: '/network/dns' },
            { text: 'DHCP（準備中）', link: '/network/dhcp' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: 'このページ'
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    lastUpdated: {
      text: '最終更新'
    },
    footer: {
      message: 'IT初学者のための学習ポータル',
      copyright: 'IT Learning Portal'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yujiminemoto-ctrl/it' }
    ]
  }
})
