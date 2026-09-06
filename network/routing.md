---
title: ルーティング
description: 異なるネットワークへ通信を届けるための経路判断と、管理者の確認ポイントを学びます。
outline: false
pageClass: wsus-page routing-page
lastUpdated: false
---

# ルーティング

<p class="article-subtitle">異なるネットワークへ通信を届けるための仕組み</p>
<p class="article-summary">ルーティングは、異なるネットワーク間で通信するときに、データをどの経路へ送るかを判断する仕組みです。同じネットワーク内では基本的にルーターを経由せず、別のネットワークへ通信するときは、まずデフォルトゲートウェイへ送ります。社内ITでは、問題が端末からデフォルトゲートウェイまでにあるのか、その先の経路にあるのかを切り分けるために重要です。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 12h3M12 12V6h3M12 12v6h3"/></svg></span><span>対象環境</span><strong>社内ネットワーク、Windows端末<br>L3スイッチ、ルーター</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年9月</strong></div>
</div>

<nav class="wsus-nav-standard" aria-label="このページの内容">
<p><span class="wsus-nav-standard__title-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 0 0-3-3H6.5A3.5 3.5 0 0 0 3 5.5v16A3.5 3.5 0 0 1 6.5 18H9a3 3 0 0 1 3 3V5Z"/><path d="M12 5a3 3 0 0 1 3-3h2.5A3.5 3.5 0 0 1 21 5.5v16a3.5 3.5 0 0 0-3.5-3.5H15a3 3 0 0 0-3 3V5Z"/></svg></span>このページの内容</p>
<a href="#why-important"><span class="wsus-nav-standard__icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span><span>なぜ重要なのか</span></a>
<a href="#typical-scenarios"><span class="wsus-nav-standard__icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span><span>実際の利用シーン</span></a>
<a href="#basic-mechanism"><span class="wsus-nav-standard__icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span><span>基本的な仕組み</span></a>
<a href="#administrator-checks"><span class="wsus-nav-standard__icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span><span>管理者のポイント</span></a>
<a href="#common-issues"><span class="wsus-nav-standard__icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span><span>よくあるトラブル</span></a>
<a href="#page-summary"><span class="wsus-nav-standard__icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span><span>まとめ</span></a>
</nav>

## 概要

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>同じネットワーク内の通信と、別のネットワークへの通信では、データの送り方が異なります。</p></div>

<div class="routing-overview-grid"><div><strong>同じネットワーク</strong><div class="routing-inline-flow"><span>PC A</span><i>→</i><span>PC B</span></div><p>同じネットワーク内であれば、基本的にはルーターを経由せずに通信します。</p></div><div><strong>別のネットワーク</strong><div class="routing-inline-flow"><span>PC</span><i>→</i><span>デフォルトゲートウェイ</span><i>→</i><span>別のネットワーク</span></div><p>別のネットワークへ通信するときは、まずデフォルトゲートウェイへ通信を送ります。</p></div></div>

<p class="routing-note">ルーティングを理解すると、どこまで通信できていて、どこから先で止まっているのかを考えやすくなります。</p>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>ルーティングはなぜ重要なのか {#why-important}

社内では、社員PC、サーバー、無線LAN、来客用、拠点間、インターネットなど、用途ごとにネットワークが分かれていることがあります。

<div class="routing-network-tags"><span>社員PC用</span><span>サーバー用</span><span>無線LAN用</span><span>来客用</span><span>拠点間</span><span>インターネット</span></div>

<div class="routing-path routing-path--primary"><span><strong>社員PC</strong><code>192.168.10.0/24</code></span><i>→</i><span class="is-router"><strong>L3スイッチ・ルーター</strong><small>異なるネットワーク間を中継</small></span><i>→</i><span><strong>サーバー</strong><code>192.168.20.0/24</code></span></div>

<p>VLANやサブネットを分けるだけでは、異なるネットワーク同士はそのまま通信できません。必要な通信を中継するために、L3スイッチやルーターが利用されます。</p>

<div class="standard-callout"><strong>VLANとは</strong><p>VLANは、スイッチ上のネットワークを論理的に分ける仕組みです。異なるVLANに所属する端末は、基本的に別のネットワークとして扱われます。異なるVLAN間で通信する場合は、L3スイッチやルーターによる中継が必要です。詳しくは<a href="./basic-structure#vlan">「ネットワークの基本構成」ページ</a>で説明します。</p></div>

<div class="standard-callout"><strong>症状から確認場所を考える</strong><p>同じネットワーク内では通信できるのに別ネットワークへ通信できない場合は、デフォルトゲートウェイや、その先のルーティングに問題がある可能性があります。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="routing-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>デフォルトゲートウェイまでは通信できるが、その先へ通信できない</h3><p><strong>状況</strong><br>同じネットワーク内の機器とデフォルトゲートウェイには通信できますが、その先の別ネットワークへ到達できない場合があります。</p><p class="routing-flow-title">確認の流れ</p><ol class="routing-check-flow"><li><span>1</span><p>同じネットワーク内の通信が正常か確認する</p></li><li><span>2</span><p>デフォルトゲートウェイまで通信できるか確認する</p></li><li><span>3</span><p>宛先ネットワークへの経路があるか確認する</p></li><li><span>4</span><p>戻りの経路を確認する</p></li><li><span>5</span><p>必要に応じてファイアウォールなどを確認する</p></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>デフォルトゲートウェイまでは到達できる場合、その先のルーティングや通信制御を優先して確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>デフォルトゲートウェイに通信できない</h3><p><strong>状況</strong><br>端末から最初の送り先となるデフォルトゲートウェイへ到達できない場合があります。</p><p class="routing-flow-title">確認の流れ</p><ol class="routing-check-flow"><li><span>1</span><p>IPアドレスとサブネットマスクを確認する</p></li><li><span>2</span><p>デフォルトゲートウェイの設定値を確認する</p></li><li><span>3</span><p>デフォルトゲートウェイが同じネットワーク内にあるか確認する</p></li><li><span>4</span><p>VLANやスイッチ側の接続を確認する</p></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>その先のルーティングより先に、端末からデフォルトゲートウェイまでの経路を確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>あるネットワークだけ通信できない</h3><p><strong>状況</strong><br>ほかの宛先には通信できても、特定のネットワークだけ到達できない場合があります。</p><p class="routing-flow-title">確認の流れ</p><ol class="routing-check-flow"><li><span>1</span><p>通信できる宛先とできない宛先を整理する</p></li><li><span>2</span><p>宛先ネットワークを確認する</p></li><li><span>3</span><p>そのネットワークへの経路を確認する</p></li><li><span>4</span><p>戻りの経路も確認する</p></li><li><span>5</span><p>通信制御を確認する</p></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>端末全体ではなく、その宛先への経路や通信制御を疑います。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>インターネットには接続できるが社内サーバーへ接続できない</h3><p><strong>状況</strong><br>外部通信は正常でも、特定の社内ネットワークへ到達できない場合があります。</p><p class="routing-flow-title">確認の流れ</p><ol class="routing-check-flow"><li><span>1</span><p>社内サーバーのIPアドレスを確認する</p></li><li><span>2</span><p>名前解決と通信経路を分けて確認する</p></li><li><span>3</span><p><code>tracert</code>などで経路を確認する</p></li><li><span>4</span><p>社内ネットワークへの経路を確認する</p></li><li><span>5</span><p>通信制御やサーバー側を切り分ける</p></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>インターネット接続が正常でも、すべての社内ネットワークへの経路が正常とは限りません。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#basic-mechanism}

### 同じネットワークか、別のネットワークか

<div class="routing-address-grid"><div><strong>端末</strong><code>192.168.10.25/24</code></div><div class="is-same"><strong>宛先A</strong><code>192.168.10.50/24</code><p>同じ <code>192.168.10.0/24</code><br>→ 同じネットワーク内で通信</p></div><div class="is-other"><strong>宛先B</strong><code>192.168.20.10/24</code><p><code>192.168.20.0/24</code><br>→ デフォルトゲートウェイへ送る</p></div></div>

<div class="standard-callout standard-callout--key"><strong>IPアドレスだけで判断しない</strong><p>同じネットワークかどうかは、IPアドレスだけではなく、サブネットマスクやCIDRを含めて判断します。</p></div>

### デフォルトゲートウェイ

<p>デフォルトゲートウェイは、端末が自分とは異なるネットワークへ通信するときに、最初に通信を送る相手です。</p>
<div class="routing-path"><span><strong>PC</strong><code>192.168.10.25/24</code></span><i>→</i><span class="is-router"><strong>デフォルトゲートウェイ</strong><code>192.168.10.1</code></span><i>→</i><span><strong>サーバー</strong><code>192.168.20.10/24</code></span></div>
<p>端末は最終的な通信経路をすべて知る必要はありません。まずデフォルトゲートウェイへ送り、その後はL3スイッチやルーターが次の送り先を判断します。</p>

### L3スイッチ・ルーターは何をしているのか

<div class="routing-decision-flow"><span>通信を受け取る</span><i>↓</i><span>宛先IPアドレスを確認</span><i>↓</i><span>ルーティングテーブルを確認</span><i>↓</i><span>次の送り先を決める</span><i>↓</i><span>転送する</span></div>
<p>L3スイッチやルーターは、受け取った通信の宛先IPアドレスを確認し、どのネットワークへ送るべきかを判断します。</p>

### ルーティングテーブル

<p>ルーティングテーブルは、「どのネットワークへ通信するとき、どこへ送るか」を記録した情報です。</p>

| 宛先ネットワーク | 次の送り先 |
| --- | --- |
| `192.168.10.0/24` | 直接接続 |
| `192.168.20.0/24` | 直接接続 |
| `192.168.30.0/24` | `192.168.20.254` |
| その他 | デフォルトルート |

<p class="routing-note">実際のルーティングテーブルには、インターフェースや優先度など、さらに多くの情報があります。このページでは「宛先に応じて次の送り先を決める」という考え方を理解できれば十分です。</p>

### 直接接続されたネットワーク

<div class="routing-path"><span><strong>VLAN 10</strong><code>192.168.10.0/24</code></span><i>↔</i><span class="is-router"><strong>L3スイッチ</strong><small>両方へ直接接続</small></span><i>↔</i><span><strong>VLAN 20</strong><code>192.168.20.0/24</code></span></div>
<p>L3スイッチが両方のネットワークにL3として接続されている場合、ルーティングによってネットワーク間の通信を中継できます。物理的に同じ機器へ接続されているだけで、自動的に通信できるわけではありません。実際に通信できるかどうかは、ファイアウォールやアクセス制御などにも影響されます。</p>

### 次の送り先

<p>次の送り先（ネクストホップ）は、宛先ネットワークへ近づくために次に通信を渡す相手です。</p>
<div class="routing-path"><span>PC</span><i>→</i><span class="is-router">ルーターA</span><i>→</i><span class="is-router">ルーターB</span><i>→</i><span>サーバー</span></div>
<p>ルーターAがサーバーへ直接接続していなくても、「そのネットワークへ行くにはルーターBへ送る」という経路が分かっていれば転送できます。</p>

### デフォルトルート

<p>デフォルトルートは、より具体的な経路が見つからない場合に使用する経路です。IPv4のルーティングテーブルでは、すべてのIPv4宛先に一致する <code>0.0.0.0/0</code> がデフォルトルートとして使われます。簡単に言うと、「個別の経路が見つからなければ、こちらへ送る」という経路です。</p>
<div class="routing-definition"><code>0.0.0.0/0</code><p>すべてのIPv4宛先に一致します。ただし、<code>192.168.20.0/24</code>のような、より具体的な経路がある場合はそちらが優先されます。</p></div>
<div class="routing-path"><span>社内ネットワーク</span><i>→</i><span class="is-router">L3スイッチ</span><i class="routing-default-route"><small>デフォルトルート</small><b aria-hidden="true">→</b></i><span class="is-firewall">ファイアウォール</span><i>→</i><span>インターネット</span></div>
<p>この例では、L3スイッチに個別の経路がない宛先への通信を、デフォルトルートによってファイアウォールへ送ります。デフォルトルートは経路情報であり、ファイアウォールそのものを指す名称ではありません。</p>

### より具体的な経路が優先される

<div class="routing-specific-grid"><div><span>経路</span><code>192.168.20.0/24</code><strong>より具体的</strong></div><div><span>経路</span><code>0.0.0.0/0</code><strong>デフォルト</strong></div><div class="is-result"><span>宛先</span><code>192.168.20.10</code><strong>→ 192.168.20.0/24を使用</strong></div></div>
<p>複数の経路が一致する場合は、より具体的に宛先を指定している経路が優先されます。</p>

### 静的ルート

<div class="routing-definition"><p>この「宛先ネットワークへ行くときの次の送り先」を、管理者が手動で登録する方法の一つが静的ルートです。静的ルートは、管理者が手動で設定する経路です。</p><code>192.168.30.0/24へ通信するときは、192.168.20.254へ送る</code><p>小規模な構成や、特定のネットワークへの経路を明示したい場合などに利用されます。</p></div>
<div class="standard-callout"><strong>このページで扱う範囲</strong><p>OSPFやBGPなど、ルーター同士が経路情報を交換する仕組みもありますが、このページでは扱いません。</p></div>

### 行きの経路と戻りの経路

<p>通信は相手へ届くだけでは成立しません。相手からの応答が元の端末へ戻る経路も必要です。</p>
<div class="routing-round-trip"><span>PC</span><div class="routing-round-trip__lines"><p><small>行き</small><i aria-hidden="true">────────→</i></p><p><i aria-hidden="true">←────────</i><small>戻り</small></p></div><span>サーバー</span></div>
<div class="standard-callout standard-callout--key"><strong>戻りの経路も確認する</strong><p>行きの経路が正しくても、戻りの経路が存在しない場合は通信が成立しないことがあります。応答が返ってこないときは、相手側からの経路も確認します。</p></div>

#### 戻りの経路はどう確認するか

<p>通信相手の端末やサーバー側でも、元の端末へ応答を返すための経路が必要です。</p>
<p class="routing-flow-title">確認の流れ</p>
<ol class="routing-check-flow routing-return-flow"><li><span>1</span><p>相手側のIPアドレスとサブネットマスクを確認する</p></li><li><span>2</span><p>相手側のデフォルトゲートウェイを確認する</p></li><li><span>3</span><p>元の端末が所属するネットワークへの経路があるか確認する</p></li><li><span>4</span><p>必要に応じて <code>route print</code> や <code>tracert</code> で経路を確認する</p></li></ol>

<div class="standard-callout routing-return-example"><strong>例</strong><p>PC：<code>192.168.10.25/24</code><br>サーバー：<code>192.168.20.10/24</code></p><p>PCからサーバーへ通信が届いていても、サーバー側に <code>192.168.10.0/24</code> へ戻る経路がなければ、応答が元のPCへ返らないことがあります。</p></div>

<div class="routing-command-grid routing-return-commands"><div><code>ipconfig /all</code><p>相手側のIPアドレス、サブネットマスク、デフォルトゲートウェイを確認します。</p></div><div><code>route print</code><p>元の端末が所属する <code>192.168.10.0/24</code> への経路があるか確認します。個別の経路がない場合は、デフォルトルートが正しい方向を向いているか確認します。</p></div><div><code>tracert 192.168.10.25</code><p>必要に応じて、相手側から元のPCへ向かう途中経路を確認します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong><code>tracert</code>の表示だけで判断しない</strong><p>途中の機器が応答しない場合もあるため、<code>tracert</code>の表示だけで障害と断定しないでください。</p></div>

### ルーティングとファイアウォールの違い

<div class="routing-role-grid"><div><strong>ルーティング</strong><p>どこへ送るかを判断する</p></div><div><strong>ファイアウォール</strong><p>その通信を許可するか拒否するかを判断する</p></div></div>
<p>ルーティングが正しくても、ファイアウォールで拒否されれば通信できません。ファイアウォールで許可されていても、宛先への経路がなければ通信は届きません。</p>

### Windows端末で確認するルーティング

<div class="routing-command-detail"><div><h4><code>route print</code> の見方</h4><p><code>route print</code> では、まず次の3つを確認します。</p><ul><li><strong>宛先：</strong>どのネットワークへの通信か</li><li><strong>ネットマスク：</strong>その宛先ネットワークの範囲</li><li><strong>ゲートウェイ：</strong>次にどこへ送るか</li></ul><pre><code>宛先              ネットマスク          ゲートウェイ
0.0.0.0           0.0.0.0              192.168.10.1
192.168.10.0      255.255.255.0        On-link</code></pre><p><code>0.0.0.0 / 0.0.0.0</code> はデフォルトルートを表します。より具体的な経路が見つからない場合、この例では、デフォルトルートの次の送り先として端末のデフォルトゲートウェイ <code>192.168.10.1</code> が使用されています。</p><p><code>192.168.10.0 / 255.255.255.0 / On-link</code> は、<code>192.168.10.0/24</code> が別のゲートウェイを経由せず、端末から直接通信できるネットワークであることを示します。</p></div><div><strong><code>tracert</code></strong><p>宛先まで通信するときに、途中で経由する機器を確認します。</p><code>tracert 192.168.20.10</code><code>tracert example.com</code><p>途中の機器が応答しない場合もあるため、結果全体を見て判断します。</p></div></div>

<div class="routing-route-examples"><div><strong>例A：同じネットワーク</strong><p>端末：<code>192.168.10.25/24</code><br>宛先：<code>192.168.10.50</code></p><p><code>192.168.10.0/24</code> に一致<br>→ <code>On-link</code><br>→ 同じネットワークなので直接通信</p></div><div><strong>例B：別のネットワーク</strong><p>端末：<code>192.168.10.25/24</code><br>宛先：<code>192.168.20.10</code></p><p><code>192.168.10.0/24</code> には一致しない<br>→ 他に具体的な経路がなければ <code>0.0.0.0/0</code> を使用<br>→ <code>192.168.10.1</code> へ送る</p></div></div>
<div class="standard-callout standard-callout--warning"><strong><code>tracert</code>の「*」だけで判断しない</strong><p>途中の機器が応答しない場合があるため、「*」が表示されたことだけで通信障害とは判断できません。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-checks}

<div class="admin-principles routing-admin-grid"><div><span>1</span><strong>宛先が同じネットワークか確認する</strong><p>端末と宛先が同じネットワークなのか、別ネットワークなのかを確認します。</p></div><div><span>2</span><strong>デフォルトゲートウェイを確認する</strong><p>別ネットワークへの通信では、正しいデフォルトゲートウェイを使用しているか確認します。</p></div><div><span>3</span><strong>どこまで通信できるか確認する</strong><p>端末、デフォルトゲートウェイ、中継機器、宛先の順に切り分けます。</p></div><div><span>4</span><strong>宛先への経路を確認する</strong><p>目的のネットワークへ向かう経路が、ルーターやL3スイッチに存在するか確認します。</p></div><div><span>5</span><strong>戻りの経路も確認する</strong><p>相手側のデフォルトゲートウェイやルーティングテーブルを確認し、元の端末へ応答を返す経路があるか確認します。</p></div><div><span>6</span><strong>ルーティング以外の原因と分けて考える</strong><p>DNS、ファイアウォール、VLAN、端末設定なども切り分けます。</p></div></div>

<div class="standard-callout standard-callout--admin"><strong>機器名ではなく通信経路を追う</strong><p>トラブル時は「ルーターがおかしい」と最初から決めつけず、端末から宛先まで通信がどの経路を通るのかを順番に確認します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six routing-trouble-grid"><div><span>1</span><h3>デフォルトゲートウェイが設定されていない</h3><p>同じネットワーク内では通信できても、別ネットワークへ通信できません。<code>ipconfig /all</code>で確認します。</p></div><div><span>2</span><h3>デフォルトゲートウェイが間違っている</h3><p>IPアドレス、サブネットマスク、デフォルトゲートウェイが想定された組み合わせか確認します。</p></div><div><span>3</span><h3>宛先ネットワークへの経路がない</h3><p>特定のネットワークだけ通信できない場合は、L3スイッチやルーターの経路を確認します。</p></div><div><span>4</span><h3>戻りの経路がない</h3><p>相手まで届いても応答が返らない場合は、相手側のデフォルトゲートウェイや戻りの経路を確認します。</p></div><div><span>5</span><h3>ファイアウォールで拒否されている</h3><p>経路は存在しても特定の通信だけできない場合は、通信制御を分けて確認します。</p></div><div><span>6</span><h3>VLANやサブネットの認識が間違っている</h3><p>同じネットワークと思っていた場合は、IPアドレス、サブネットマスク、VLANを確認します。</p></div></div>

### 確認に使う主なコマンド

<div class="routing-command-grid"><div><code>ipconfig /all</code><p>IPアドレス、サブネットマスク、デフォルトゲートウェイを確認します。</p></div><div><code>ping</code><p>指定した相手との通信を確認します。</p></div><div><code>tracert</code><p>宛先までの途中経路を確認します。</p></div><div><code>route print</code><p>Windows端末のルーティングテーブルを確認します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong><code>ping</code>の失敗だけで判断しない</strong><p>応答しない機器もあるため、<code>ping</code>の失敗だけで経路障害とは判断できません。</p></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>通信できないので、すぐにルーターを疑う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>同じネットワーク内か、別ネットワークへの通信かを確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>デフォルトゲートウェイが設定されていれば問題ないと思う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>実際にデフォルトゲートウェイまで通信できるか確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>行きの経路だけ確認する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>相手から戻る経路も確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p><code>tracert</code>の途中に「*」があるので障害と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>全体の到達状況と合わせて判断する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>通信できない原因をすべてルーティングと考える</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>DNS、ファイアウォール、VLAN、端末設定も確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>IPアドレスだけを見て同じネットワークだと判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>サブネットマスクやCIDRを含めて判断する</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>別ネットワークへの通信にはルーティングが必要</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">L3スイッチやルーターによる中継が必要です。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>端末はまずデフォルトゲートウェイへ送る</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">宛先が別ネットワークの場合、最初の送り先として利用します。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>ルーティングテーブルで次の送り先を決める</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">宛先ネットワークに応じて転送先を判断します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>行きと戻りの両方の経路を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">応答が元の端末へ戻る経路も必要です。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages routing-related-pages"><a href="./ip-address"><span>ネットワーク</span><strong>IPアドレス</strong><p>同じネットワークか判断するための基礎</p></a><a href="./basic-structure"><span>ネットワーク</span><strong>ネットワークの基本構成</strong><p>通信を支える機器と役割</p></a><a href="./dhcp"><span>ネットワーク</span><strong>DHCP</strong><p>ネットワーク設定を自動配布する仕組み</p></a><a href="./dns"><span>ネットワーク</span><strong>DNS</strong><p>名前から接続先を調べる仕組み</p></a><div class="routing-related-pending"><span>運用・障害対応</span><strong>ネットワークトラブルシューティング</strong><p>準備中</p></div></div>

<p class="routing-last-updated">最終更新：2026/09/06</p>
