---
title: DHCP
description: DHCPが配布するネットワーク設定、DORA、リース、スコープ、予約、リレーと障害確認の基本を解説します。
outline: false
pageClass: wsus-page dhcp-page
lastUpdated: false
---

# DHCP

<p class="article-subtitle">ネットワーク設定を自動で配布する仕組み</p>
<p class="article-summary">DHCPは、PCやスマートフォンなどの端末に、IPアドレスやDNSサーバーなどのネットワーク設定を自動的に配布する仕組みです。社内ITでは、新しい端末が通信できない、一部の端末だけIPアドレスがおかしい、DNSサーバーやデフォルトゲートウェイが正しく配布されていない、といったトラブルを切り分けるために基本の理解が欠かせません。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 4.5 6.2 4.5 9S15 17.8 12 21M12 3c-3 3.2-4.5 6.2-4.5 9S9 17.8 12 21"/></svg></span><span>対象環境</span><strong>社内ネットワーク、Windows<br>Linux、モバイル端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年8月</strong></div>
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

DHCP（Dynamic Host Configuration Protocol）は、端末がネットワークを利用するために必要な設定を自動配布します。管理者は、端末ごとの手入力を減らし、配布する値と利用中のIPアドレスをまとめて管理できます。

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>DHCPは「IPアドレスだけを配る仕組み」ではありません。サブネットマスク、デフォルトゲートウェイ、DNSサーバーなど、通信に必要なネットワーク設定をまとめて配布できます。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>DHCPはなぜ重要なのか {#why-important}

DHCPがない場合、端末ごとにIPアドレス、サブネットマスク、デフォルトゲートウェイ、DNSサーバーを手動で設定する必要があります。

<div class="dhcp-config-example"><div><span>IPアドレス</span><code>192.168.10.25</code></div><div><span>サブネットマスク</span><code>255.255.255.0</code></div><div><span>デフォルトゲートウェイ</span><code>192.168.10.1</code></div><div><span>DNSサーバー</span><code>192.168.10.10</code></div></div>

<div class="comparison-grid standard-comparison dhcp-comparison">
<div class="comparison-card comparison-card--without"><p class="comparison-label">DHCPがない場合</p><div class="comparison-card__content"><h3>端末ごとに手動設定</h3><ul><li>端末ごとに設定作業が必要</li><li>入力ミスが発生しやすい</li><li>同じIPアドレスを設定する可能性がある</li><li>変更時に各端末の修正が必要</li></ul></div><div class="dhcp-compare-visual"><svg viewBox="0 0 520 230" role="img" aria-label="IT管理者が縦に並んだ3台のPCを1台ずつ手動設定する状態"><defs><marker id="dhcp-manual-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#d98984" stroke="none"/></marker></defs><g class="dhcp-admin"><circle cx="62" cy="70" r="16"/><path d="M38 126c2-27 10-41 24-41s22 14 24 41M51 101h22v29H51zM56 109h12M56 117h8"/><text x="62" y="154">IT管理者</text></g><path class="dhcp-manual-line" d="M100 116L391 47" marker-end="url(#dhcp-manual-arrow)"/><path class="dhcp-manual-line" d="M100 116H391" marker-end="url(#dhcp-manual-arrow)"/><path class="dhcp-manual-line" d="M100 116L391 185" marker-end="url(#dhcp-manual-arrow)"/><g class="dhcp-pcs"><g transform="translate(401 24)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 1</text></g><g transform="translate(401 93)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 2</text></g><g transform="translate(401 162)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 3</text></g></g><text class="dhcp-figure-label" x="252" y="216">手動設定</text></svg></div></div>
<div class="comparison-card comparison-card--with"><p class="comparison-label">DHCPがある場合</p><div class="comparison-card__content"><h3>ネットワーク設定を自動配布</h3><ul><li>IPアドレスを自動配布できる</li><li>DNSやデフォルトゲートウェイもまとめて配布できる</li><li>IPアドレスの重複を防ぎやすい</li><li>ネットワーク設定を一元管理しやすい</li></ul></div><div class="dhcp-compare-visual"><svg viewBox="0 0 520 230" role="img" aria-label="DHCPサーバーが一組のネットワーク設定を3台のPCへ自動配布する状態"><defs><marker id="dhcp-auto-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#2f6fba" stroke="none"/></marker></defs><g class="dhcp-server"><rect x="18" y="48" width="72" height="128" rx="7"/><path d="M30 70h48M30 91h48M30 112h48M70 154h.01"/><text x="54" y="204">DHCPサーバー</text></g><path class="dhcp-auto-line" d="M100 115H116" marker-end="url(#dhcp-auto-arrow)"/><g class="dhcp-settings-bundle"><rect x="125" y="25" width="190" height="180" rx="9"/><g class="dhcp-settings-content" transform="translate(220 115)"><text class="dhcp-bundle-title" x="0" y="-60">配布される設定</text><text x="0" y="-30">IPアドレス</text><text x="0" y="0">サブネットマスク</text><text x="0" y="30">デフォルトゲートウェイ</text><text x="0" y="60">DNSサーバー</text></g></g><path class="dhcp-auto-line" d="M325 116H350M350 47V185"/><path class="dhcp-auto-line" d="M350 47H391" marker-end="url(#dhcp-auto-arrow)"/><path class="dhcp-auto-line" d="M350 116H391" marker-end="url(#dhcp-auto-arrow)"/><path class="dhcp-auto-line" d="M350 185H391" marker-end="url(#dhcp-auto-arrow)"/><g class="dhcp-pcs"><g transform="translate(401 24)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 1</text></g><g transform="translate(401 93)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 2</text></g><g transform="translate(401 162)"><rect width="92" height="46" rx="5"/><path d="M-5 55h102M27 46v9h38v-9"/><text x="46" y="30">PC 3</text></g></g></svg></div></div>
</div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="dhcp-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>新しいPCを社内ネットワークへ接続する</h3><p>新しいPCをLANやWi-Fiへ接続すると、DHCPからIPアドレス、サブネットマスク、デフォルトゲートウェイ、DNSサーバーを取得できます。</p><p class="scenario-point"><strong>実務のポイント</strong><br>通信できない場合は、まずDHCPからネットワーク設定を取得できているか確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>PCを別のフロアやネットワークへ移動する</h3><div class="dhcp-network-move"><code>3階：192.168.30.0/24</code><span>→</span><code>4階：192.168.40.0/24</code></div><p>新しいネットワークへ接続すると、その場所に合った設定を取得できます。</p><p class="scenario-point"><strong>実務のポイント</strong><br>古い固定IP設定が残っていると、新しいネットワークで通信できない場合があります。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>DNSサーバーを変更する</h3><div class="dhcp-network-move"><code>旧：192.168.10.10</code><span>→</span><code>新：192.168.10.11</code></div><p>DHCPの配布設定を変更すると、クライアントはリース更新時などに新しいDNS設定を取得できます。</p><p class="scenario-point"><strong>実務のポイント</strong><br>各PCを1台ずつ手動変更せずに切り替えられる場合があります。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>一部の機器だけ同じIPを使わせたい</h3><p>プリンター、サーバー、ネットワーク機器、監視機器などに毎回同じIPアドレスを配布したい場合は、DHCP予約を利用する方法があります。</p><p class="scenario-point"><strong>実務のポイント</strong><br>固定IPとDHCP予約のどちらを使うかは、環境と管理方針に合わせて決めます。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#basic-mechanism}

### DHCPで配布される主な情報

<div class="dhcp-distribution-grid"><div><span>1</span><h3>IPアドレス</h3><code>192.168.10.25</code><p>ネットワーク上で端末を識別するためのアドレスです。</p></div><div><span>2</span><h3>サブネットマスク</h3><code>255.255.255.0</code><p>どこまでが同じネットワークかを判断するために使用します。</p></div><div><span>3</span><h3>デフォルトゲートウェイ</h3><code>192.168.10.1</code><p>別のネットワークへ通信するときの出口として使用します。</p></div><div><span>4</span><h3>DNSサーバー</h3><code>192.168.10.10</code><p>名前解決に使用するDNSサーバーのアドレスです。</p></div><div><span>5</span><h3>リース期間</h3><code>8時間</code><p>配布されたIPアドレスを使用できる期間です。</p></div></div>

### DHCPでネットワーク設定を取得する流れ

端末とDHCPサーバーは、設定を探す、提示する、要求する、許可する、という順序で情報をやり取りします。

<div class="diagram-panel dhcp-dora-panel"><div class="dhcp-dora-flow"><div class="dhcp-dora-row is-to-server"><span class="dhcp-dora-number">1</span><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="26" rx="3"/><path d="M2 41h44M17 34v7h14v-7"/></svg><strong>クライアントPC</strong></div><div class="dhcp-dora-exchange"><div><strong>DHCPサーバーを探す</strong><small>Discover</small><p>「DHCPサーバーはありますか？」</p></div><i aria-hidden="true"></i></div><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="4" width="28" height="40" rx="3"/><path d="M16 13h16M16 22h16M16 31h10M31 38h.01"/></svg><strong>DHCPサーバー</strong></div></div><div class="dhcp-dora-row is-to-client"><span class="dhcp-dora-number">2</span><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="26" rx="3"/><path d="M2 41h44M17 34v7h14v-7"/></svg><strong>クライアントPC</strong></div><div class="dhcp-dora-exchange"><div><strong>設定を提示する</strong><small>Offer</small><p>「この設定を使えます」</p></div><i aria-hidden="true"></i></div><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="4" width="28" height="40" rx="3"/><path d="M16 13h16M16 22h16M16 31h10M31 38h.01"/></svg><strong>DHCPサーバー</strong></div></div><div class="dhcp-dora-row is-to-server"><span class="dhcp-dora-number">3</span><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="26" rx="3"/><path d="M2 41h44M17 34v7h14v-7"/></svg><strong>クライアントPC</strong></div><div class="dhcp-dora-exchange"><div><strong>設定を要求する</strong><small>Request</small><p>「この設定を使いたいです」</p></div><i aria-hidden="true"></i></div><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="4" width="28" height="40" rx="3"/><path d="M16 13h16M16 22h16M16 31h10M31 38h.01"/></svg><strong>DHCPサーバー</strong></div></div><div class="dhcp-dora-row is-to-client"><span class="dhcp-dora-number">4</span><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="26" rx="3"/><path d="M2 41h44M17 34v7h14v-7"/></svg><strong>クライアントPC</strong></div><div class="dhcp-dora-exchange"><div><strong>使用を許可する</strong><small>ACK</small><p>「この設定を使ってよいです」</p></div><i aria-hidden="true"></i></div><div class="dhcp-dora-endpoint"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="4" width="28" height="40" rx="3"/><path d="M16 13h16M16 22h16M16 31h10M31 38h.01"/></svg><strong>DHCPサーバー</strong></div></div></div></div>

<div class="standard-callout"><strong>DORA</strong><p>Discover → Offer → Request → ACK の頭文字を取って「DORA」と呼びます。まずは日本語で流れを理解し、英語名は必要に応じて確認しましょう。</p></div>

### DHCPのリース

#### IPアドレスは「貸し出される」

DHCPから取得したIPアドレスは、通常、端末へ永久に割り当てられるわけではありません。一定期間だけ使用できる「リース」として貸し出されます。

<div class="dhcp-lease-card"><div><span>IPアドレス</span><code>192.168.10.25</code></div><div><span>リース期間</span><strong>8時間</strong></div><p>クライアントは期限が切れる前に更新を試みます。更新できれば同じ設定を継続し、できない場合は再試行や再取得が必要になることがあります。</p></div>

### DHCPスコープ

#### DHCPスコープとは

DHCPスコープは、「このネットワークでは、どの範囲のIPアドレスを配るか」を決める設定です。あわせて、デフォルトゲートウェイやDNSサーバーなどのネットワーク設定もまとめて管理します。

<div class="diagram-panel dhcp-scope-panel"><p class="diagram-title">192.168.10.0/24 のスコープ例</p><div class="dhcp-scope-figure"><section class="dhcp-scope-settings"><h4>スコープで配布する主な設定</h4><div><p><span>デフォルトゲートウェイ</span><code>192.168.10.1</code></p><p><span>DNSサーバー</span><code>192.168.10.10</code></p></div></section><section class="dhcp-address-space"><div class="dhcp-address-scale"><code>192.168.10.1</code><span aria-hidden="true"></span><code>192.168.10.254</code></div><div class="dhcp-address-bar"><div class="is-before"><strong>固定IP・予約など</strong><code>192.168.10.1 ～ 192.168.10.99</code><small>デフォルトゲートウェイ<br>DNSサーバー・プリンター<br>ADサーバーなど</small></div><div class="is-pool"><strong>DHCP配布範囲</strong><code>192.168.10.100 ～ 192.168.10.200</code><div class="dhcp-exclusion"><span>除外範囲</span><code>192.168.10.150 ～ 192.168.10.160</code></div></div><div class="is-after"><strong>配布範囲外</strong><code>192.168.10.201 ～ 192.168.10.254</code></div></div></section></div><p class="diagram-caption">デフォルトゲートウェイやDNSサーバーは、DHCPで配布するクライアント用アドレス範囲とは別に管理できます。DHCPは指定した範囲からアドレスを配布します。</p></div>

#### 除外範囲

配布範囲の中でも、自動配布したくないIPアドレスを除外できます。上の例では、<code>192.168.10.150 ～ 192.168.10.160</code> はクライアントへ自動配布されません。

### DHCP予約

#### DHCP予約とは

特定の端末に対して、毎回同じIPアドレスを配布するための仕組みです。端末側はDHCPを利用したまま、DHCPサーバー側で配布するIPアドレスを固定します。

<div class="dhcp-reservation-flow"><span>プリンター<br><small>MAC：00-11-22-33-44-55</small></span><i>→</i><span>DHCP予約</span><i>→</i><span class="is-result">192.168.10.50</span></div>

### 固定IPとDHCP予約の違い

<div class="dhcp-choice-grid"><div><h3>固定IP</h3><p>端末自身にIPアドレスを手動設定します。</p><code>プリンター側で<br>192.168.10.50 を設定</code></div><div><h3>DHCP予約</h3><p>端末はDHCPを利用し、サーバーが毎回同じIPを配布します。</p><code>MACアドレス → DHCPサーバー<br>→ 192.168.10.50</code></div></div>

<div class="standard-callout standard-callout--admin"><strong>使い分けは管理方針で決める</strong><p>一般ユーザーPC、ノートPC、スマートフォン、一時利用端末にはDHCPが向いています。サーバー、プリンター、ルーター、スイッチ、監視機器などは、環境に応じて固定IPまたはDHCP予約を検討します。</p></div>

### DHCPリレーとは

DHCPリレーは、別のネットワークにあるDHCPサーバーへ、クライアントからのDHCPの要求を届けるための仕組みです。

Discoverではブロードキャストが使われますが、通常、ブロードキャストはルーターを越えて別のネットワークには届きません。

そのため、DHCPサーバーが別のVLANやネットワークにある環境では、ルーターやL3スイッチなどでDHCPリレーを利用します。

<div class="diagram-panel dhcp-relay-panel"><p class="diagram-title">別ネットワークのDHCPサーバーへ要求を中継する</p><div class="dhcp-relay-flow"><div><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="8" width="38" height="26" rx="3"/><path d="M2 41h44M17 34v7h14v-7"/></svg><strong>クライアントPC</strong><span>VLAN 10</span></div><i>→</i><div><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><path d="M11 24h26M24 11v26M15 15l18 18M33 15 15 33"/></svg><strong>DHCPリレー</strong><span>ルーター・L3スイッチ</span></div><i>→</i><div><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="4" width="28" height="40" rx="3"/><path d="M16 13h16M16 22h16M16 31h10"/></svg><strong>DHCPサーバー</strong><span>VLAN 100</span></div></div></div>

### DHCPとDNSの関係

DHCPはIPアドレスだけでなく、クライアントが使用するDNSサーバーのアドレスも配布できます。

<div class="dhcp-config-example dhcp-config-example--compact"><div><span>IPアドレス</span><code>192.168.10.25</code></div><div><span>DNSサーバー</span><code>192.168.10.10</code></div></div>

<div class="standard-callout standard-callout--key"><strong>取得できた設定を分けて確認する</strong><p>DHCPの設定が誤っていると、IPアドレスは取得できても名前解決だけできない場合があります。「インターネットへ接続できない＝DHCP障害」と決めつけず、IPアドレス、デフォルトゲートウェイ、DNSを分けて確認します。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="dhcp-admin-checks"><div><span>1</span><h3>配布範囲に十分な空きがあるか</h3><p>利用可能なIPアドレスが不足すると、新しい端末が取得できない場合があります。</p></div><div><span>2</span><h3>固定IPと配布範囲が重複していないか</h3><p>同じIPを別の端末へ配布すると、アドレス重複が発生する可能性があります。</p></div><div><span>3</span><h3>DNSとデフォルトゲートウェイが正しいか</h3><p>IPを取得できても、DNSやデフォルトゲートウェイが誤っていると通信に問題が発生します。</p></div><div><span>4</span><h3>リース期間が環境に合っているか</h3><p>固定PCが多い環境と短時間接続の多い環境では、適した期間が異なります。</p></div><div><span>5</span><h3>予約と固定IPの管理ルールを統一する</h3><p>管理方法がばらばらになると、どのIPを誰が使っているか分かりにくくなります。</p></div><div><span>6</span><h3>変更前に影響範囲を確認する</h3><p>DNS、デフォルトゲートウェイ、スコープ、リース期間の変更は多くのクライアントへ影響します。</p></div><div><span>7</span><h3>DHCPサーバーだけでなくネットワーク経路も確認する</h3><p>別VLANや別ネットワークの場合は、DHCPリレー、ルーター、VLANなども確認します。</p></div></div>

### 管理者の基本作業

DHCPの仕組みを理解したうえで、管理者は配布設定とクライアントの取得結果を順番に確認します。

<div class="process-steps dhcp-admin-process"><div><span>1</span><section><h3>対象ネットワークとスコープを確認する</h3><p>端末が接続するVLANと、使用するスコープを特定します。</p></section></div><div><span>2</span><section><h3>配布範囲と空きアドレスを確認する</h3><p>利用可能なアドレスが残っているか確認します。</p></section></div><div><span>3</span><section><h3>デフォルトゲートウェイ・DNSなどの設定を確認する</h3><p>クライアントへ配布する値を確認します。</p></section></div><div><span>4</span><section><h3>重複を確認する</h3><p>予約、除外範囲、固定IPとの重複を確認します。</p></section></div><div><span>5</span><section><h3>クライアントで取得結果を確認する</h3><p><code>ipconfig /all</code> などで実際の値を確認します。</p></section></div><div><span>6</span><section><h3>実際の通信まで確認する</h3><p>名前解決と対象サービスへの接続を確認します。</p></section></div></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid dhcp-trouble-grid"><div><span>1</span><h3>IPアドレスを取得できない</h3><p>Windowsでは、DHCPからIPアドレスを取得できない場合に、<code>169.254.x.x</code> のアドレスが自動設定されることがあります。これは「APIPA<span class="dhcp-apipa-expansion">（Automatic Private IP Addressing）</span>」と呼ばれます。</p><p>DHCPサーバー、スコープの空き、DHCPリレー、VLAN、LANやWi-Fiを確認します。</p></div><div><span>2</span><h3>IPアドレスはあるが外部へ通信できない</h3><p>デフォルトゲートウェイ、ルーティング、ファイアウォール、DNSを確認します。</p></div><div><span>3</span><h3>IPでは通信できるが名前解決できない</h3><p>配布されたDNSサーバー、DNSへの通信、DNS側の状態を確認します。</p></div><div><span>4</span><h3>一部の端末だけIPを取得できない</h3><p>固定IP設定、DHCPの有効状態、アダプター、予約のMACアドレス、VLANを確認します。</p></div><div><span>5</span><h3>IPアドレスが重複する</h3><p>固定IPと配布範囲の重複、同一固定IP、予約や除外範囲の管理を確認します。</p></div><div><span>6</span><h3>変更した設定が反映されない</h3><p>現在のリース、更新時刻、参照しているDHCPサーバーを確認します。</p></div><div><span>7</span><h3>別VLANだけIPを取得できない</h3><p>DHCPリレー、ルーター / L3スイッチ、VLAN、ACL、ファイアウォール、経路を確認します。</p></div></div>

### 確認に使う主なコマンド

<div class="dhcp-command-list"><div><code>ipconfig /all</code><p>DHCPが有効かどうか、IPv4アドレス、サブネットマスク、デフォルトゲートウェイ、DHCPサーバー、DNSサーバー、リースの取得時刻と期限を確認できます。</p></div><div><code>ipconfig</code><p>IPアドレス、サブネットマスク、デフォルトゲートウェイを素早く確認します。</p></div><div><code>ipconfig /release</code><p>現在のDHCPリースを解放します。</p></div><div><code>ipconfig /renew</code><p>DHCPサーバーへ新しいネットワーク設定を要求します。</p></div><div><code>Get-NetIPConfiguration</code><p>PowerShellからネットワーク設定を確認します。</p></div></div>

<div class="standard-callout standard-callout--warning"><strong>IPアドレスの解放・再取得を行う前に</strong><p><code>ipconfig /release</code> を実行すると、一時的にネットワーク通信が切断されます。リモート接続中は特に注意し、現在のIPアドレスやDHCPサーバーを確認してから実行します。</p></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></svg></span><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>IPを取得できないので、すぐ固定IPを設定する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>まずDHCPサーバー、スコープ、DHCPリレー、ネットワーク経路を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p><code>169.254.x.x</code>を正常な社内IPだと思う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>DHCPから正しいIPアドレスを取得できているか確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>固定IPをDHCP配布範囲内に設定する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>固定IP、予約、除外範囲の管理ルールを統一する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>IPを取得できたのでDHCPは正常と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>デフォルトゲートウェイ、DNS、リース情報まで確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>新しい設定が反映されないので何度も再起動する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>現在のリースとDHCP設定を確認し、必要に応じてリースを更新する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>DHCPサーバーだけを確認する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>別VLANの場合はDHCPリレーやネットワーク経路も確認する</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>DHCPはネットワーク設定を自動配布する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IPアドレスだけでなく、デフォルトゲートウェイやDNSなどもまとめて配布できます。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>IPアドレスにはリース期間がある</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">DHCPから取得したアドレスは、一定期間クライアントへ貸し出されます。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>スコープ・予約・除外範囲を正しく管理する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">固定IPとの重複を避け、利用可能なアドレスを適切に管理します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>IPだけでなく取得した設定全体を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">障害時はIPアドレス、デフォルトゲートウェイ、DNS、リースを分けて確認します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages dhcp-related-pages"><a href="./dns"><span>ネットワーク</span><strong>DNS</strong><p>名前から接続先を見つける仕組み</p></a><a href="./ip-address"><span>ネットワーク</span><strong>IPアドレス</strong><p>端末や通信先を識別するアドレスの基本</p></a><a href="../windows/active-directory"><span>Windows・認証基盤</span><strong>Active Directory</strong><p>社内のユーザーとコンピューターを管理する認証基盤</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>ネットワークトラブルシューティング</strong><p>接続できない原因を順序立てて切り分ける方法</p></a></div>

<p class="dhcp-last-updated">最終更新：2026/08/10</p>
