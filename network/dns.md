---
title: DNS
description: DNSの基本的な役割、名前解決の流れ、主なレコード、管理者の確認ポイントを実務目線で解説します。
outline: false
pageClass: wsus-page dns-page
lastUpdated: false
---

# DNS

<p class="article-subtitle">名前から接続先を見つける仕組み</p>
<p class="article-summary">DNSは、サーバー名やWebサイトの名前を、通信に必要なIPアドレスへ変換する仕組みです。社内ITの業務では、「IPアドレスでは接続できるのに、サーバー名では接続できない」「DNSレコードを変更したのに、古い接続先へアクセスしてしまう」といったトラブルを正しく切り分けるために、DNSの基本理解が欠かせません。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-7 17c.7-4.1 3.2-6.2 7-6.2s6.3 2.1 7 6.2"/></svg></span><span>対象</span><strong>管理者</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 4.5 6.2 4.5 9S15 17.8 12 21M12 3c-3 3.2-4.5 6.2-4.5 9S9 17.8 12 21"/></svg></span><span>対象環境</span><strong>社内ネットワーク、Windows<br>Linux、クラウド環境</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年8月</strong></div>
</div>

<nav class="wsus-nav-standard" aria-label="このページの内容">
<p><span class="wsus-nav-standard__title-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 0 0-3-3H6.5A3.5 3.5 0 0 0 3 5.5v16A3.5 3.5 0 0 1 6.5 18H9a3 3 0 0 1 3 3V5Z"/><path d="M12 5a3 3 0 0 1 3-3h2.5A3.5 3.5 0 0 1 21 5.5v16a3.5 3.5 0 0 0-3.5-3.5H15a3 3 0 0 0-3 3V5Z"/></svg></span>このページの内容</p>
<a href="#why-important"><span class="wsus-nav-standard__icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span><span>なぜ重要なのか</span></a>
<a href="#typical-scenarios"><span class="wsus-nav-standard__icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span><span>実際の利用シーン</span></a>
<a href="#name-resolution"><span class="wsus-nav-standard__icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span><span>基本的な仕組み</span></a>
<a href="#administrator-checks"><span class="wsus-nav-standard__icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span><span>管理者のポイント</span></a>
<a href="#common-issues"><span class="wsus-nav-standard__icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span><span>よくあるトラブル</span></a>
<a href="#page-summary"><span class="wsus-nav-standard__icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span><span>まとめ</span></a>
</nav>

## 概要

DNS（Domain Name System）は、利用者が入力した名前を、コンピューターが通信に使用するIPアドレスへ対応付ける仕組みです。

名前解決の結果を確認できると、DNSの問題なのか、その後のネットワークやサービスの問題なのかを切り分けやすくなります。

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>DNSは、ドメイン名やホスト名をIPアドレスに変換する「名前解決」の仕組みです。<br>利用者が名前で接続したときに、正しいIPアドレスが返されることが重要です。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>DNSはなぜ重要なのか {#why-important}

コンピューター同士の通信では、接続先をIPアドレスで指定します。ただし、利用者が毎回IPアドレスを覚えるのは現実的ではありません。

<div class="dns-name-example"><code>192.168.10.20</code><span>と</span><code>fileserver.corp.example.com</code></div>

社内ファイルサーバーへ接続するときに、IPアドレスではなく名前を使えるのは、DNSが名前とIPアドレスを対応付けているためです。

<div class="comparison-grid standard-comparison dns-comparison">
<div class="comparison-card comparison-card--without"><p class="comparison-label">DNSがない場合</p><div class="comparison-card__body"><div class="comparison-card__content"><h3>IPアドレスを直接管理</h3><ul><li>サーバーごとのIPアドレスを利用者が覚える必要がある</li><li>IPアドレス変更時に、多くの設定を書き換える必要がある</li><li>システムの移行や切り替えが難しくなる</li><li>接続先を間違えやすい</li></ul></div><div class="comparison-card__diagram dns-compare-visual"><svg viewBox="0 0 360 210" role="img" aria-label="3台のクライアントが記憶したIPアドレスを使ってファイルサーバーへ直接接続する状態"><defs><marker id="dns-direct-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#d98984" stroke="none"/></marker></defs><g><rect x="125" y="8" width="110" height="80" rx="8"/><path d="M166 19h28v31h-28zM172 27h16M172 35h16M172 43h16"/><text x="180" y="66">ファイルサーバー</text><text class="dns-small-text" x="180" y="81">192.168.10.20</text></g><path class="dns-warning-mark" d="M61 126C91 108 120 101 150 94" marker-end="url(#dns-direct-arrow)"/><path class="dns-warning-mark" d="M180 126V94" marker-end="url(#dns-direct-arrow)"/><path class="dns-warning-mark" d="M299 126C269 108 240 101 210 94" marker-end="url(#dns-direct-arrow)"/><rect x="142" y="100" width="76" height="22" rx="11" fill="var(--vp-c-bg-soft)" stroke="none"/><text class="dns-small-text" x="180" y="115">IPで接続</text><g><rect x="25" y="133" width="72" height="42" rx="4"/><path d="M20 183h82M39 175v8h44v-8"/><text class="dns-small-text" x="61" y="158">クライアントPC</text><rect x="144" y="133" width="72" height="42" rx="4"/><path d="M139 183h82M158 175v8h44v-8"/><text class="dns-small-text" x="180" y="158">クライアントPC</text><rect x="263" y="133" width="72" height="42" rx="4"/><path d="M258 183h82M277 175v8h44v-8"/><text class="dns-small-text" x="299" y="158">クライアントPC</text></g><text class="dns-small-text" x="180" y="204">接続先IP: 192.168.10.20 を覚える</text><path class="dns-warning-mark" d="m333 13-10 18h20l-10-18Zm0 6v6m0 3h.01"/></svg></div></div></div>
<div class="comparison-card comparison-card--with"><p class="comparison-label">DNSがある場合</p><div class="comparison-card__body"><div class="comparison-card__content"><h3>名前で一元管理</h3><ul><li>人が理解しやすい名前で接続できる</li><li>IPアドレスを変更しても、名前を維持できる</li><li>サービス移行時の影響を小さくできる</li><li>社内システムを一元的に管理しやすい</li></ul></div><div class="comparison-card__diagram comparison-card__diagram--with dns-compare-visual"><svg viewBox="0 0 360 210" role="img" aria-label="クライアントがDNSへ名前を問い合わせ、返されたIPアドレスを使ってファイルサーバーへ接続する流れ"><defs><marker id="dns-flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#2f6fba" stroke="none"/></marker></defs><g><rect x="18" y="108" width="78" height="52" rx="5"/><path d="M12 168h90M34 160v8h46v-8"/><text class="dns-small-text" x="57" y="138">クライアントPC</text></g><text class="dns-small-text" x="75" y="198">fileserver.corp.example.com</text><g><rect class="dns-node" x="145" y="20" width="70" height="58" rx="9"/><text x="180" y="55">DNS</text></g><g><rect x="281" y="88" width="56" height="84" rx="6"/><path d="M289 101h40M289 112h40M289 123h40M321 158h.01"/><text class="dns-small-text" x="309" y="194">ファイルサーバー</text><text class="dns-small-text" x="309" y="73">192.168.10.20</text></g><path class="diagram-route" d="M91 107C111 76 127 56 138 49" marker-end="url(#dns-flow-arrow)"/><text class="dns-small-text" x="72" y="32">名前を問い合わせ</text><path class="diagram-route" d="M151 82C133 96 116 111 102 126" marker-end="url(#dns-flow-arrow)"/><text class="dns-small-text" x="205" y="101">IPを返す</text><path class="diagram-route" d="M103 148H273" marker-end="url(#dns-flow-arrow)"/><text class="dns-small-text" x="188" y="138">IPで接続</text></svg></div></div></div>
</div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="dns-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>社内ファイルサーバーへ接続する</h3><code>\\fileserver.corp.example.com\share</code><p>PCはDNSへ名前を問い合わせ、対応するIPアドレスを取得してからファイルサーバーへ接続します。</p><p class="scenario-point"><strong>実務のポイント</strong><br>名前で失敗するときは、IPアドレスで接続できるかを比較すると切り分けに役立ちます。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>社内システムのサーバーを移行する</h3><p><code>旧：192.168.10.20</code><br><code>新：192.168.20.30</code><br><code>system.corp.example.com</code></p><p>DNSレコードを変更すれば、利用者は同じ名前を使い続けられ、端末ごとのショートカットやアプリ設定を変更せずに済みます。</p><p class="scenario-point"><strong>実務のポイント</strong><br>切り替え前にTTLと参照元を確認し、変更後は名前解決とサービス接続の両方を確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>クラウドサービスへ名前で接続する</h3><code>service.example.com</code><p>クラウドサービスのIPアドレスは変わる場合があるため、通常は固定したIPアドレスではなくDNS名を使って接続します。</p><p class="scenario-point"><strong>実務のポイント</strong><br>接続制御では、サービス側の仕様と名前解決の変化を考慮します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>メールの配送先を決める</h3><p>MXレコードは、対象ドメイン宛てのメールをどのメールサーバーへ配送するかを示します。</p><p class="scenario-point"><strong>実務のポイント</strong><br>DNSはWebだけでなく、メールや認証など多くのサービスで利用されます。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>名前解決の仕組み {#name-resolution}

<div class="diagram-panel dns-resolution-panel"><p class="diagram-title">名前から接続先を見つける流れ</p><div class="dns-resolution-flow">
<div><span>1</span><strong>名前を入力</strong><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="13" r="7"/><path d="M10 40c1-12 6-18 14-18s13 6 14 18"/></svg><b>利用者</b><small>fileserver.corp.example.comへ接続したい</small></div><i>→</i>
<div><span>2</span><strong>キャッシュを確認</strong><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="25" rx="3"/><path d="M3 39h42M17 33v6h14v-6M17 17h14M17 23h10"/></svg><b>クライアントPC</b><small>保存済みの回答がないか確認</small></div><i>→</i>
<div><span>3</span><strong>DNSへ問い合わせ</strong><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="6" width="28" height="36" rx="3"/><path d="M16 15h16M16 24h16M16 33h10"/></svg><b>DNSサーバー</b><small>名前に対応するIPを検索</small></div><i>→</i>
<div><span>4</span><strong>IPアドレスを回答</strong><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 15h32v23H8zM15 8h25v23M15 22h18"/></svg><b>192.168.10.20</b><small>問い合わせ元のPCへ返す</small></div><i>→</i>
<div class="is-result"><span>5</span><strong>接続する</strong><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="25" rx="3"/><path d="M3 39h42M17 33v6h14v-6M17 20l5 5 10-11"/></svg><b>クライアントPC</b><small>192.168.10.20へ接続</small></div>
</div><p class="diagram-caption">PCは最初に手元のキャッシュを確認し、回答がなければDNSサーバーへ問い合わせます。取得したIPアドレスを使って、実際の通信を開始します。</p></div>

### 名前解決と通信は別の処理

DNSが成功しても、必ず接続できるとは限りません。DNSは接続先のIPアドレスを調べるところまでです。その後の通信では、次の要素も関係します。

<div class="dns-factor-list"><span>サーバーが起動しているか</span><span>ネットワーク経路が正常か</span><span>ファイアウォールで拒否されていないか</span><span>対象サービスが待ち受けているか</span><span>利用者にアクセス権があるか</span></div>

<div class="standard-callout"><strong>名前解決と接続結果を分けて考える</strong><p>DNSでIPアドレスを取得できたことと、サービスへ接続できたことは同じではありません。</p></div>

### DNSの問い合わせ先

クライアントは、ネットワーク設定で指定されたDNSサーバーへ問い合わせます。企業ネットワークでは、DHCPからDNSサーバーのアドレスを自動配布する構成が一般的です。

<div class="dns-server-addresses"><div><span>優先DNSサーバー</span><strong>192.168.10.10</strong></div><div><span>代替DNSサーバー</span><strong>192.168.10.11</strong></div></div>

<div class="scenario-flow dns-query-flow"><span>クライアントPC</span><b>→</b><span>社内DNSサーバー</span><b>→</b><span>上位DNSサーバーなど</span><b>→</b><span>回答</span></div>

社内DNSサーバーが回答を持っていない場合は、フォワーダーや上位のDNSサーバーなどへ問い合わせます。

#### 再帰問い合わせ

クライアントの代わりに、DNSサーバーが必要な問い合わせを続け、最終的な回答を返す処理を再帰問い合わせと呼びます。外部の名前を調べる場合、DNSサーバーは複数のDNSサーバーへ順番に問い合わせることがあります。

### キャッシュとTTL

<div class="dns-cache-grid"><div><h4>キャッシュの目的</h4><ul><li>問い合わせ回数を減らす</li><li>名前解決を高速化する</li><li>DNSサーバーの負荷を減らす</li><li>一時的な通信障害の影響を小さくする</li></ul></div><div><h4>TTL</h4><p>TTLは、DNSの回答をキャッシュに保持できる時間です。</p><code>TTL：3600秒</code><p>この場合、回答は最大1時間キャッシュされる可能性があります。</p></div></div>

DNSレコードを変更しても、端末やDNSサーバーに古い情報が残っている場合があります。そのため、変更直後は端末によって異なるIPアドレスが返されることがあります。

<div class="standard-callout standard-callout--key"><strong>変更直後に確認すること</strong><p>DNSレコードを変更した直後に結果がそろわない場合、設定ミスだけでなく、DNSキャッシュの影響も確認します。</p></div>

<div class="dns-ttl-comparison"><div><strong>TTLが長い場合</strong><ul><li>DNSサーバーへの問い合わせが減る</li><li>名前解決が安定しやすい</li><li>変更の反映に時間がかかる</li></ul></div><div><strong>TTLが短い場合</strong><ul><li>変更を早く反映しやすい</li><li>DNSサーバーへの問い合わせが増える</li><li>障害時の影響を受けやすくなる場合がある</li></ul></div></div>

<div class="standard-callout standard-callout--admin"><strong>移行前のTTL調整</strong><p>サーバー移行の予定がある場合は、事前にTTLを短くしておき、切り替え後に元へ戻す方法があります。ただし、変更直前にTTLを短くしても、すでに保存されている古いTTLにはすぐ反映されません。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h5M8 17h7"/></svg></span>主なDNSレコード {#dns-records}

<div class="dns-record-intro">
<h3>DNSレコードとは</h3>
<p>DNSレコードとは、DNSサーバーに登録される「名前と情報の対応関係」です。</p>
<p>たとえば、ホスト名とIPアドレスを対応付けるAレコードや、メールの配送先を指定するMXレコードなど、用途によってさまざまな種類があります。</p>
<p>DNSサーバーは、問い合わせ内容に応じて該当するレコードを参照し、必要な情報を返します。</p>
<div class="dns-record-chain"><code>fileserver.corp.example.com</code><span>↓ <b>Aレコード</b></span><code class="is-result">192.168.10.20</code></div>
</div>

<div class="dns-record-grid">
<div><span>A</span><h3>Aレコード</h3><p>ホスト名とIPv4アドレスを対応付けるレコードです。名前から接続先のIPv4アドレスを調べるときに使われます。</p><div class="dns-record-chain"><code>fileserver.corp.example.com</code><span>↓ <b>Aレコード</b></span><code class="is-result">192.168.10.20</code></div></div>
<div><span>AAAA</span><h3>AAAAレコード</h3><p>ホスト名とIPv6アドレスを対応付けるレコードです。AレコードのIPv6版として使用されます。</p><div class="dns-record-chain"><code>server.example.com</code><span>↓ <b>AAAAレコード</b></span><code class="is-result">2001:db8::10</code></div></div>
<div><span>CNAME</span><h3>CNAMEレコード</h3><p>実際のホスト名に、利用者が使いやすい別名を設定するレコードです。サーバーを変更しても別名を維持できるため、利用者側の接続先を変えずに切り替えやすくなります。</p><div class="dns-record-chain"><code>portal.example.com</code><span>↓ <b>CNAME</b></span><code>webserver.example.com</code><span>↓ <b>Aレコード</b></span><code class="is-result">192.168.10.20</code></div></div>
<div><span>MX</span><h3>MXレコード</h3><p>ドメイン宛てのメールを、どのメールサーバーへ配送するかを指定するレコードです。複数登録する場合は、優先度で配送先の順序を指定できます。</p><div class="dns-record-chain"><code>example.com</code><span>↓ <b>MXレコード</b></span><code class="is-result">mail.example.com</code><small>メールサーバー</small></div></div>
<div><span>PTR</span><h3>PTRレコード</h3><p>IPアドレスからホスト名を調べる「逆引き」に使用するレコードです。Aレコードとは、調べる方向が逆になります。</p><div class="dns-record-chain"><code>192.168.10.20</code><span>↓ <b>PTRレコード</b></span><code class="is-result">fileserver.corp.example.com</code></div></div>
<div><span>TXT</span><h3>TXTレコード</h3><p>ドメインに文字情報を登録するためのレコードです。メール認証やドメイン所有確認など、設定情報を公開するときに使用されます。</p><div class="dns-record-chain"><code>example.com</code><span>↓ <b>TXTレコード</b></span><code class="is-result">&quot;v=spf1 ...&quot;</code></div><ul><li>SPF</li><li>DKIM</li><li>ドメイン所有確認</li><li>サービス設定情報</li></ul></div>
</div>

### 正引きと逆引き

<div class="dns-direction-grid"><div><span>正引き</span><strong>fileserver.corp.example.com</strong><b>→</b><code>192.168.10.20</code></div><div><span>逆引き</span><strong>192.168.10.20</strong><b>→</b><code>fileserver.corp.example.com</code></div></div>

<div class="standard-callout"><strong>正引きと逆引きは別のレコード</strong><p>Aレコードを登録しても、PTRレコードが自動的に作成されるとは限りません。</p></div>

### 内部DNSと外部DNS

<div class="dns-scope-grid"><div><h3>内部DNS</h3><p>社内ネットワークだけで利用する名前を管理します。</p><code>fileserver.corp.example.com<br>intranet.corp.example.com<br>printer01.corp.example.com</code></div><div><h3>外部DNS</h3><p>インターネットから利用する名前を管理します。</p><code>www.example.com<br>mail.example.com<br>service.example.com</code></div></div>

社内と社外で同じ名前に対して異なるIPアドレスを返す構成もあります。これは分割DNS、Split DNSなどと呼ばれます。このページでは概念だけを扱い、具体的な設定方法には立ち入りません。

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-checks}

<div class="dns-admin-checks">
<div><span>1</span><h3>正しいDNSサーバーが設定されているか</h3><p>外部DNSサーバーだけを参照していると、社内名を解決できない場合があります。</p></div>
<div><span>2</span><h3>レコードの名前とIPアドレスが正しいか</h3><p>入力ミス、古いIPアドレス、重複したレコードがないか確認します。</p></div>
<div><span>3</span><h3>DNSサーバーへ通信できるか</h3><p>ネットワーク経路やファイアウォールの問題で問い合わせできない場合があります。</p></div>
<div><span>4</span><h3>キャッシュが残っていないか</h3><p>クライアント、DNSサーバー、アプリケーションに古い情報が残っていないか確認します。</p></div>
<div><span>5</span><h3>TTLを考慮しているか</h3><p>変更直後にすべての端末へ同時反映されるとは限りません。</p></div>
<div><span>6</span><h3>正引きと逆引きを混同していないか</h3><p>名前からIPを調べる処理と、IPから名前を調べる処理は別です。</p></div>
<div><span>7</span><h3>変更前に影響範囲を確認したか</h3><ul><li>どのシステムが参照しているか</li><li>古い接続先を停止してよいか</li><li>TTLはいくつか</li><li>元に戻す方法があるか</li><li>切り替え後の確認方法は何か</li></ul></div>
</div>

### 管理者の基本作業

DNSの仕組みを理解したうえで、管理者は変更前の確認から接続結果の確認までを順番に行います。

<div class="process-steps dns-admin-process">
<div><span>1</span><section><h3>現在の回答を確認する</h3><p>対象の名前と、現在返されるIPアドレスを確認します。</p></section></div>
<div><span>2</span><section><h3>変更理由と影響範囲を確認する</h3><p>参照するシステム、端末、利用者を整理します。</p></section></div>
<div><span>3</span><section><h3>TTLと切り替え時間を確認する</h3><p>古い回答が残る時間と作業時刻を確認します。</p></section></div>
<div><span>4</span><section><h3>DNSレコードを変更する</h3><p>対象レコードを確認し、計画した内容へ変更します。</p></section></div>
<div><span>5</span><section><h3>複数の場所から確認する</h3><p>複数の端末やDNSサーバーから回答を確認します。</p></section></div>
<div><span>6</span><section><h3>サービスへ接続する</h3><p>取得した接続先で、利用サービスが正常に動作するか確認します。</p></section></div>
</div>

<div class="standard-callout standard-callout--key"><strong>変更作業の完了条件</strong><p>DNSレコードの変更確認では、「正しいIPアドレスが返ること」だけでなく、その先のサービスへ正常に接続できることまで確認します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid dns-trouble-grid">
<div><span>1</span><h3>名前では接続できないが、IPでは接続できる</h3><p>DNSサーバー設定、レコード、名前の入力、DNSへの通信、キャッシュを確認します。</p><code>nslookup 対象ホスト名</code></div>
<div><span>2</span><h3>変更後も古いIPアドレスが返る</h3><p>クライアントとDNSサーバーのキャッシュ、参照先DNS、TTL、DNSサーバー間の情報を確認します。</p></div>
<div><span>3</span><h3>一部のPCだけ名前解決できない</h3><p>DNSサーバー設定、VPN、固定IP設定、hostsファイル、ローカルキャッシュの違いを確認します。</p></div>
<div><span>4</span><h3>社内名は解決できるが、外部名を解決できない</h3><p>外部への問い合わせ、フォワーダー、インターネット接続、DNS通信の許可を確認します。</p></div>
<div><span>5</span><h3>名前解決は成功するが、サービスへ接続できない</h3><p>サーバー、ポート、ファイアウォール、アプリケーション、アクセス権、証明書を確認します。</p></div>
<div><span>6</span><h3>PCによって異なるIPアドレスが返る</h3><p>キャッシュ時間、参照先DNS、サーバー間の情報差、複数IPによる負荷分散を確認します。</p></div>
</div>

<div class="standard-callout"><strong>複数の回答は必ずしも障害ではない</strong><p>負荷分散などの目的で複数のIPアドレスを登録している場合があります。期待する構成と回答を比較して判断します。</p></div>

### 確認に使う主なコマンド

<div class="dns-command-list">
<div><code>nslookup fileserver.corp.example.com</code><p>問い合わせ先のDNSサーバー、返されたIPアドレス、エラーの有無を確認します。</p></div>
<div><code>ipconfig /all</code><p>DNSサーバー、DHCPの有効／無効、IPv4アドレス、デフォルトゲートウェイを確認します。</p></div>
<div><code>ipconfig /displaydns</code><p>Windowsクライアントに保存されているDNSキャッシュを確認します。</p></div>
<div><code>ipconfig /flushdns</code><p>WindowsクライアントのDNSキャッシュを削除します。</p></div>
<div><code>Resolve-DnsName fileserver.corp.example.com</code><p>A、AAAA、CNAME、MXなど、レコードの種類を指定して確認しやすいコマンドです。</p></div>
</div>

<div class="standard-callout standard-callout--warning"><strong>キャッシュを削除する前に</strong><p>現在の回答、参照しているDNSサーバー、キャッシュ内容を記録します。先に削除すると、原因調査に必要な情報が失われることがあります。</p></div>

<div class="wsus-practice-comparison">
<div class="wsus-practice-heading wsus-practice-heading--warning"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></svg></span><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><strong>推奨される対応</strong></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>DNSレコードだけ変更して作業完了とする</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>実際のサービスへ接続できるところまで確認する</p></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>TTLを確認せずに切り替える</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>事前にTTLを確認し、必要に応じて計画的に変更する</p></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>IPアドレスで接続できるためDNSは正常と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>ホスト名を使った名前解決を別に確認する</p></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>すぐにキャッシュを削除する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>削除前に現在の回答、参照DNSサーバー、キャッシュ内容を確認する</p></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>1台のPCだけで確認する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>複数端末、複数DNSサーバー、必要に応じて社内外から確認する</p></div>
<div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>古いDNSレコードを残し続ける</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>利用状況を確認し、不要なレコードを定期的に整理する</p></div>
</div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul>
<li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>DNSは名前とIPアドレスを対応付ける</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">利用者が覚えやすい名前を使って、接続先を特定できるようにします。</span></p></li>
<li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>名前解決と通信は別の処理</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IPアドレスを取得できても、サービスへ接続できるとは限りません。</span></p></li>
<li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>変更時はキャッシュとTTLを考慮する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">DNSレコードの変更は、すべての端末へ同時に反映されるとは限りません。</span></p></li>
<li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>管理者は回答と接続結果の両方を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">正しいIPアドレスが返り、実際のサービスが利用できることまで確認します。</span></p></li>
</ul></div>

## 関連ページ

<div class="related-pages dns-related-pages"><a href="./ip-address"><span>ネットワーク</span><strong>IPアドレス</strong><p>通信先を識別するためのアドレスの基本</p></a><a href="./dhcp"><span>ネットワーク</span><strong>DHCP</strong><p>IPアドレスやDNSサーバー情報を自動配布する仕組み</p></a><a href="../windows/active-directory"><span>Windows・認証基盤</span><strong>Active Directory</strong><p>DNSを利用してドメイン内のサービスを見つける認証基盤</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>ネットワークトラブルシューティング</strong><p>接続できない原因を順序立てて切り分ける方法</p></a></div>

<p class="dns-last-updated">最終更新：2026/08/06</p>
