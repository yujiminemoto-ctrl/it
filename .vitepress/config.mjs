import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'IT Learning Portal',
  description: '社内ITをこれから担当する人のための、実務につながる学習ポータル',
  base: '/it/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'IT Learning Portal',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'サイト内を検索', buttonAriaLabel: 'サイト内を検索' },
          modal: {
            noResultsText: '検索結果がありません',
            resetButtonTitle: '検索条件をリセット',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' }
          }
        }
      }
    },
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '学習を始める', link: '/guide/' },
      { text: 'ネットワーク', link: '/network/' },
      { text: 'Windows・認証', link: '/windows/active-directory' },
      { text: 'クラウド管理', link: '/cloud/microsoft-365' },
      { text: '用語集', link: '/glossary' }
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'このポータルについて', link: '/guide/' },
          { text: '社内IT担当者の考え方', link: '/guide/admin-mindset' },
          { text: 'おすすめの学習順序', link: '/guide/learning-path' }
        ]
      },
      {
        text: 'ネットワーク基礎',
        collapsed: false,
        items: [
          { text: 'ネットワークの全体像', link: '/network/' },
          { text: 'IPアドレス', link: '/network/ip-address' },
          { text: 'DNS', link: '/network/dns' },
          { text: 'DHCP', link: '/network/dhcp' }
        ]
      },
      {
        text: 'Windows・認証基盤',
        collapsed: false,
        items: [
          { text: 'Active Directory', link: '/windows/active-directory' },
          { text: 'OU・ユーザー・グループ', link: '/windows/ad-objects' },
          { text: 'グループポリシー', link: '/windows/gpo' },
          { text: 'WSUS', link: '/windows/wsus' }
        ]
      },
      {
        text: 'クラウド・端末管理',
        collapsed: false,
        items: [
          { text: 'Microsoft 365', link: '/cloud/microsoft-365' },
          { text: 'Microsoft Intune', link: '/cloud/intune' }
        ]
      },
      {
        text: '実務で使う資料',
        items: [
          { text: '障害対応の基本', link: '/operations/troubleshooting' },
          { text: '用語集', link: '/glossary' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    footer: {
      message: '社内ITを、暗記ではなく実務の流れから学ぶ。',
      copyright: 'IT Learning Portal'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yujiminemoto-ctrl/it' }]
  }
})
