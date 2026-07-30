# Microsoft Intune
<div class="lesson-meta"><span>クラウド</span><span>端末管理</span><span>初級</span><span>約20分</span></div>
<div class="lesson-lead">Microsoft Intuneは、会社のPCやスマートフォンに設定を配布し、状態を確認し、アプリやセキュリティを管理するクラウドサービスです。</div>

## 管理できること
<div class="portal-grid">
<div class="portal-card"><span class="card-kicker">DEVICE</span><h3>端末登録と構成</h3><p>会社の管理対象として登録し、Wi-Fi、証明書、セキュリティ設定などを配布します。</p></div>
<div class="portal-card"><span class="card-kicker">APP</span><h3>アプリ管理</h3><p>必要なアプリを配布し、インストール状態を確認します。</p></div>
<div class="portal-card"><span class="card-kicker">COMPLIANCE</span><h3>準拠状態</h3><p>暗号化やパスコードなど、会社の基準を満たしているか確認します。</p></div>
<div class="portal-card"><span class="card-kicker">UPDATE</span><h3>更新管理</h3><p>更新リングなどを使い、対象と適用タイミングを段階的に管理します。</p></div>
</div>

## WSUSとの違い
WSUSは主に社内サーバーを使ったWindows更新管理です。Intuneはクラウドから端末設定、アプリ、準拠状態、更新などを管理します。どちらが正しいというより、端末の利用場所、既存構成、ネットワーク、ライセンス、運用体制から選びます。

## 問い合わせ時の確認
1. 対象端末がIntuneへ登録されているか
2. 最終チェックイン時刻は新しいか
3. 対象のユーザー・端末グループへポリシーが割り当てられているか
4. 適用状態が成功、保留、失敗のどれか
5. 競合するポリシーやライセンス不足がないか
