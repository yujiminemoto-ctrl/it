# グループポリシー（GPO）
<div class="lesson-meta"><span>Windows</span><span>Active Directory</span><span>初級</span><span>約20分</span></div>
<div class="lesson-lead">グループポリシーは、ドメインに参加しているユーザーやPCへ、会社の設定をまとめて適用する仕組みです。</div>

## どんな設定に使うか
- パスワードや画面ロックの設定
- Windows Defenderやファイアウォールの設定
- ネットワークドライブやプリンターの配布
- WSUSの接続先
- 特定機能の利用制限

## 適用される流れ
<div class="scenario-flow"><span>GPOを作成</span><b>→</b><span>サイト・ドメイン・OUへリンク</span><b>→</b><span>対象ユーザー・PCが取得</span><b>→</b><span>設定を適用</span></div>

## 確認コマンド
```powershell
gpupdate /force
gpresult /r
```

::: warning GPOを編集する前に
リンク先、対象、セキュリティフィルター、現在の設定、業務影響を確認します。全社へ影響する場所で直接試さず、検証用OUで確認します。
:::
