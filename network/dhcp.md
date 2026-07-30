# DHCP
<div class="lesson-meta"><span>ネットワーク</span><span>初級</span><span>約20分</span></div>
<div class="lesson-lead">DHCPは、PCやスマートフォンへIPアドレス、ゲートウェイ、DNSサーバーなどの設定を自動で配る仕組みです。端末ごとに手入力する作業と設定ミスを減らします。</div>

## DHCPが配る主な情報
- IPアドレス
- サブネットマスク
- デフォルトゲートウェイ
- DNSサーバー
- 利用できる期間（リース期間）

## アドレスを受け取る流れ
<div class="scenario-flow"><span>利用可能なDHCPを探す</span><b>→</b><span>アドレスの提案</span><b>→</b><span>利用を要求</span><b>→</b><span>DHCPが確定</span></div>

## 管理者が見る場所
<div class="admin-work-grid">
<div class="admin-work-card"><span class="admin-work-number">01</span><h3>スコープ</h3><p>配布できるIPアドレスの範囲と、残り件数を確認します。</p></div>
<div class="admin-work-card"><span class="admin-work-number">02</span><h3>除外範囲</h3><p>サーバーやネットワーク機器用として、自動配布しない範囲を確認します。</p></div>
<div class="admin-work-card"><span class="admin-work-number">03</span><h3>オプション</h3><p>ゲートウェイやDNSサーバーの値が正しいか確認します。</p></div>
<div class="admin-work-card"><span class="admin-work-number">04</span><h3>リース</h3><p>どの端末にどのIPアドレスが貸し出されているか確認します。</p></div>
</div>

## 端末側の更新
```powershell
ipconfig /release
ipconfig /renew
```

::: warning むやみに固定IPへ変更しない
一時的に通信できても、ほかの端末とIPアドレスが重複する可能性があります。管理ルールと割り当て状況を確認してから変更します。
:::
