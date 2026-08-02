import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: '社内ITラーニングポータル',
  description: '社内IT担当者が、必要な分野を選んで学習・復習できる社内ナレッジポータル',
  base: '/it/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [
    ['meta', { name: 'theme-color', content: '#245b8f' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '社内ITラーニングポータル',
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
      { text: 'ネットワーク', link: '/network/' },
      { text: 'Windows・認証', link: '/windows/' },
      { text: 'クラウド・端末管理', link: '/cloud/' },
      { text: '運用・障害対応', link: '/operations/' },
      { text: '用語集', link: '/glossary' }
    ],
    sidebar: [
      {
        text: 'ポータル案内',
        items: [
          { text: 'このポータルについて', link: '/guide/' },
          { text: '社内IT担当者の考え方', link: '/guide/admin-mindset' },
          { text: '初めて学ぶ方への参考', link: '/guide/learning-path' }
        ]
      },
      {
        text: 'ネットワーク',
        collapsed: false,
        items: [
          { text: 'カテゴリ概要', link: '/network/' },
          { text: 'IPアドレス', link: '/network/ip-address' },
          { text: 'DNS', link: '/network/dns' },
          { text: 'DHCP', link: '/network/dhcp' }
        ]
      },
      {
        text: 'Windows・認証基盤',
        collapsed: false,
        items: [
          { text: 'カテゴリ概要', link: '/windows/' },
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
          { text: 'カテゴリ概要', link: '/cloud/' },
          { text: 'Microsoft 365', link: '/cloud/microsoft-365' },
          { text: 'Microsoft Intune', link: '/cloud/intune' }
        ]
      },
      {
        text: '運用・障害対応',
        items: [
          { text: 'カテゴリ概要', link: '/operations/' },
          { text: '障害対応の基本', link: '/operations/troubleshooting' }
        ]
      },
      {
        text: 'リファレンス',
        items: [{ text: '用語集', link: '/glossary' }]
      }
    ],
    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    footer: {
      message: '必要な知識を、必要なときに確認できる社内ITポータル。',
      copyright: '社内ITラーニングポータル'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yujiminemoto-ctrl/it' }]
  }
})
