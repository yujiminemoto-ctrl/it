# IT Learning Portal v2

日本企業の社内IT新人向けに作成した VitePress 学習ポータルです。

## ローカルで確認
```bash
npm install
npm run docs:dev
```

## 本番ビルド
```bash
npm run docs:build
```

## GitHub Pages
`.vitepress/config.mjs` の `base` は `/it/` に設定されています。GitHubリポジトリ名が異なる場合は変更してください。

## v2の主な変更
- ホーム画面とナビゲーションを全面整理
- DNS、DHCP、IPアドレスを実用レベルまで追加
- Active Directory、OU・グループ、GPOを追加
- Microsoft 365、Intuneを追加
- 障害対応の基本、用語集、学習ルートを追加
- 全ページのカード、演習、注意事項のデザインを統一
