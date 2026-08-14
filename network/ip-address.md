---
title: IPアドレス
description: IPアドレス、サブネットマスク、デフォルトゲートウェイと障害確認の基本を解説します。
outline: false
pageClass: wsus-page ip-address-page
lastUpdated: false
---

# IPアドレス

<p class="article-subtitle">ネットワーク上で機器を識別するための住所</p>
<p class="article-summary">IPアドレスは、ネットワーク上でPCやサーバーなどの機器を識別するための番号です。社内ITでは、IPアドレスだけでなく、サブネットマスクやデフォルトゲートウェイなどの設定もあわせて確認することが重要です。</p>

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

IPアドレスは、ネットワーク上で通信する相手を識別するために使用されます。IPアドレスだけではなく、サブネットマスクやデフォルトゲートウェイと組み合わせて、同じネットワークにいるか、別のネットワークへ通信できるかを判断します。

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>IPアドレスは単独で見るのではなく、サブネットマスクやデフォルトゲートウェイとあわせて確認します。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>IPアドレスはなぜ重要なのか {#why-important}

IPアドレスは、ネットワーク上で通信相手を識別するために使われます。通信するためには、自分と相手のIPアドレスだけでなく、サブネットマスクやデフォルトゲートウェイなどの設定も正しくなっている必要があります。

<div class="diagram-panel ip-basic-route"><div><span>PC A</span><code>192.168.10.25</code></div><i>→</i><div class="ip-route-destination"><small>宛先</small><code>192.168.10.30</code></div><i>→</i><div><span>PC B</span><code>192.168.10.30</code></div><p>IPアドレスによって通信先を識別する</p></div>

<h3 class="ip-impact-heading">IPアドレスやネットワーク設定が正しくないと</h3>

<div class="ip-impact-grid"><div><h4>同じネットワーク内の機器へ通信できない</h4><p>IPアドレスやサブネットマスクが正しくないと、近くのPCやサーバーにも通信できない場合があります。</p></div><div><h4>別のネットワークやインターネットへ接続できない</h4><p>デフォルトゲートウェイなどの設定が正しくないと、社内の別ネットワークやインターネットへ通信できない場合があります。</p></div><div><h4>名前で接続できない</h4><p>DNSサーバーの設定が正しくないと、IPアドレスでは通信できても、名前では接続できない場合があります。</p></div><div><h4>IPアドレスの重複で通信が不安定になる</h4><p>同じIPアドレスを複数の機器が使用すると、正常に通信できなくなることがあります。</p></div></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="ip-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>新しいPCがネットワークへ接続できない</h3><p><strong>状況</strong><br>新しいPCをLANやWi-Fiへ接続しても、社内ネットワークやインターネットへ接続できない場合があります。</p><p><strong>まず確認すること</strong></p><ul><li><strong>IPアドレス：</strong>PCに正しいアドレスが設定されているか</li><li><strong>サブネットマスク：</strong>接続先のネットワークに合っているか</li><li><strong>デフォルトゲートウェイ：</strong>別のネットワークへ出るための設定があるか</li><li><strong>DNSサーバー：</strong>名前で接続するための設定があるか</li></ul><p class="scenario-point"><strong>実務のポイント</strong><br><code>169.254.x.x</code> が設定されている場合は、DHCPから正しいネットワーク設定を取得できていない可能性があります。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>別のネットワークへ接続できない</h3><p><strong>状況</strong><br>同じネットワーク内のPCやサーバーには接続できるのに、別の社内ネットワークやインターネットへ接続できない場合があります。</p><p><strong>まず確認すること</strong></p><ul><li>デフォルトゲートウェイが設定されているか</li><li>PCとデフォルトゲートウェイが同じネットワークにあるか</li><li>サブネットマスクが正しいか</li></ul><p class="scenario-point"><strong>実務のポイント</strong><br>同じネットワーク内では通信できているため、IPアドレスそのものより、別ネットワークへ出るための設定を優先して確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>固定IPを設定した機器が通信できない</h3><p><strong>状況</strong><br>サーバーやプリンターなどに固定IPを設定したあと、通信できなくなる場合があります。</p><p><strong>まず確認すること</strong></p><ul><li>IPアドレス</li><li>サブネットマスク</li><li>デフォルトゲートウェイ</li><li>DNSサーバー</li><li>同じIPアドレスを他の機器が使っていないか</li></ul><p class="scenario-point"><strong>実務のポイント</strong><br>手動設定では入力ミスや設定の組み合わせ違いが起こりやすいため、1項目ずつではなく全体を確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>IPアドレスが重複している</h3><p><strong>状況</strong><br>2台以上の機器に同じIPアドレスが設定されると、通信できたりできなかったりするなど、不安定な状態になることがあります。</p><p><strong>まず確認すること</strong></p><ul><li>固定IPの設定</li><li>DHCP配布範囲</li><li>DHCP予約</li><li>他の機器が同じIPを使用していないか</li></ul><p class="scenario-point"><strong>実務のポイント</strong><br>固定IPを使用する場合は、DHCPの配布範囲や予約と重ならないように管理します。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#basic-mechanism}

IPアドレスは単体で見るのではなく、サブネットマスクやデフォルトゲートウェイとあわせて理解することが重要です。ここでは、それぞれの役割と関係を順に整理します。

<div class="ip-setting-overview"><div><strong>IPアドレス</strong><p>自分の機器を識別するための番号</p></div><div><strong>サブネットマスク</strong><p>どこまでを同じネットワークとして扱うかを判断する情報</p></div><div><strong>デフォルトゲートウェイ</strong><p>別のネットワークへ通信するときの出口</p></div><div><strong>DNSサーバー</strong><p>名前からIPアドレスを調べるための問い合わせ先</p></div><p>この4つはそれぞれ役割が異なります。ネットワーク障害を確認するときは、1つだけではなく組み合わせて確認します。</p></div>

### IPv4アドレス

<div class="ip-definition-card ip-ipv4-card"><div class="ip-octets" aria-label="192.168.10.25"><code>192</code><b>.</b><code>168</code><b>.</b><code>10</code><b>.</b><code>25</code></div><p>4つの数字を「.」で区切って表します。それぞれの数字は0～255の範囲です。</p><small>ネットワーク部分と端末を識別する部分の境界は、サブネットマスクによって決まります。</small></div>

<div class="ip-adapter-note"><h4>1台のPCに複数のIPアドレスがあることもある</h4><p>IPアドレスはPCそのものに1つだけ設定されるとは限りません。ネットワークアダプターごとに異なるIPアドレスが設定されることがあります。</p><div><span><strong>有線LAN</strong><code>192.168.10.25</code></span><span><strong>Wi-Fi</strong><code>192.168.20.30</code></span><span><strong>VPN</strong><code>10.10.5.12</code></span></div><p>IPv6アドレスが別に表示されることもあります。そのため、<code>ipconfig /all</code>を確認するときは、どのアダプターを使用しているかを見ることが重要です。</p></div>

### サブネットマスク

サブネットマスクは、IPアドレスのうち「どこまでが同じネットワークか」を判断するために使います。<code>255.255.255.0</code> は代表的な例の一つで、環境によってほかの値も使われます。
<div class="ip-network-compare"><div><strong>同じネットワーク</strong><code><b>192.168.10</b><span>.25 /24</span></code><code><b>192.168.10</b><span>.30 /24</span></code></div><div><strong>別のネットワーク</strong><code><b>192.168.10</b><span>.25 /24</span></code><code><b>192.168.20</b><span>.30 /24</span></code></div></div>
<p class="ip-support-note">/24の場合は、最初の3つの数字が同じアドレス同士を、同じネットワークとして考えることができます。</p>
<div class="standard-callout"><strong>計算より、見分け方を理解する</strong><p>このページでは手計算そのものではなく、「同じネットワークかどうかを見分ける考え方」を理解することを目的にします。</p></div>

### CIDR表記

CIDR表記は、サブネットマスクを短く表した書き方です。環境によって異なる値が使われるため、まずは代表的な対応関係を確認します。

<div class="ip-definition-card ip-cidr-card"><div class="ip-cidr-examples"><div><code>/24</code><span>＝</span><code>255.255.255.0</code><p>最初の3つの数字が同じなら、同じネットワークと考えます。</p><small><b>同じ：</b><code>192.168.10.25/24</code> と <code>192.168.10.30/24</code></small><small><b>別：</b><code>192.168.10.25/24</code> と <code>192.168.20.30/24</code></small></div><div><code>/16</code><span>＝</span><code>255.255.0.0</code><p>最初の2つの数字が同じなら、同じネットワークと考えます。</p><small><b>同じ：</b><code>192.168.10.25/16</code> と <code>192.168.20.30/16</code></small><small><b>別：</b><code>192.168.10.25/16</code> と <code>192.169.20.30/16</code></small></div><div class="is-host"><code>/32</code><span>＝</span><strong>1台だけを表す特別な指定</strong><p>ネットワークの広さではなく、この1つのIPアドレスだけを見るために使います。</p><small><code>192.168.10.25/32</code> は <code>192.168.10.25</code> だけを表します。</small><small><code>192.168.10.25/32</code> と <code>192.168.10.26/32</code> は、それぞれ別の1台です。</small></div></div></div>

<div class="standard-callout ip-reserved-address-note"><strong>PCに設定しないアドレスもある</strong><p>IPv4では、ネットワークそのものを表すアドレスや、同じネットワーク内の機器へ一斉に送信するためのブロードキャストアドレスがあります。</p><div><span><code>192.168.10.0</code><small>ネットワークを表すアドレス</small></span><span><code>192.168.10.255</code><small>ブロードキャストアドレス</small></span></div><p><code>192.168.10.0/24</code>の場合、これらは通常、PCなどの端末には設定しません。このページでは、これらのアドレスを求める計算方法までは扱いません。</p></div>

### デフォルトゲートウェイ

デフォルトゲートウェイは、別のネットワークへ通信するときの「出口」です。同じネットワーク内の機器同士で通信する場合は通常経由せず、別のネットワークへ通信するときに利用します。
<div class="diagram-panel ip-gateway-panel"><section><h4>同じネットワーク <small>直接通信</small></h4><div><span>PC A<code>192.168.10.25/24</code></span><i>→</i><span>PC B<code>192.168.10.30/24</code></span></div></section><section><h4>別のネットワーク <small>ゲートウェイを経由</small></h4><div><span>PC A<code>192.168.10.25/24</code></span><i>→</i><span class="is-gateway">デフォルトゲートウェイ<code>192.168.10.1</code></span><i>→</i><span>サーバー<code>192.168.20.30/24</code></span></div></section></div>

<p>デフォルトゲートウェイは通常、端末から直接通信できる同じネットワーク上に設定します。</p><div class="ip-gateway-config-grid"><div><strong>自然な設定例</strong><span>PC<code>192.168.10.25/24</code></span><span>デフォルトゲートウェイ<code>192.168.10.1</code></span><p>同じネットワークのアドレスです。</p></div><div class="needs-check"><strong>確認が必要な例</strong><span>PC<code>192.168.10.25/24</code></span><span>デフォルトゲートウェイ<code>192.168.20.1</code></span><p>/24の場合、PCとデフォルトゲートウェイが同じネットワークに属していないため、設定を確認する必要があります。</p></div></div>

<div class="ip-gateway-examples"><section><h4>家庭の例</h4><p>家庭では、Wi-Fiルーターやホームルーターがデフォルトゲートウェイになることが一般的です。</p><div class="ip-gateway-example-flow"><span><strong>PC</strong><code>192.168.1.20</code></span><i>→</i><span class="is-gateway-device"><strong>Wi-Fiルーター</strong><code>192.168.1.1</code><small>デフォルトゲートウェイ</small></span><i>→</i><span><strong>インターネット</strong></span></div></section><section><h4>企業ネットワークの例</h4><p>企業ネットワークでは、構成に応じてL3スイッチ、ルーター、ファイアウォールなどがデフォルトゲートウェイの役割を持ちます。</p><div class="ip-gateway-example-flow"><span><strong>PC</strong><code>192.168.10.25</code></span><i>→</i><span class="is-gateway-device"><strong>L3スイッチ</strong><code>192.168.10.1</code><small>デフォルトゲートウェイ</small></span><i>→</i><span><strong>社内の別ネットワーク</strong></span></div></section></div>

### プライベートIPとグローバルIP

ここからは、IPアドレスの種類と端末への設定方法を分けて整理します。

<div class="ip-type-grid ip-address-types"><div><h3>プライベートIP</h3><p>社内、家庭、クラウド内部のネットワークで使用します。</p><code>10.0.0.0/8</code><code>172.16.0.0/12</code><code>192.168.0.0/16</code><small>主な利用場所</small><ul><li>社内LAN</li><li>家庭内ネットワーク</li><li>クラウド内部ネットワーク</li></ul><p>プライベートIPは、インターネット上ではそのまま通信先として使用しません。</p></div><div><h3>グローバルIP</h3><p>グローバルIPは、インターネット上で使用されるIPアドレスです。プライベートIPや、予約済み・特殊用途のアドレスを除いた範囲が利用されます。</p><small>グローバルIPとして使われない代表例</small><ul><li>プライベートIP</li><li>ループバック</li><li>リンクローカル</li><li>その他の予約・特殊用途アドレス</li></ul><p>NAT（Network Address Translation）は、社内や家庭内で使われているプライベートIPアドレスを、インターネットへ通信するときにグローバルIPアドレスへ変換する仕組みです。</p></div></div>
<div class="diagram-panel ip-nat-flow"><div><strong>社内PC</strong><code>192.168.10.25</code></div><i>→</i><div class="is-nat"><strong>ルーター・ファイアウォール</strong><span>NAT</span><small>IPアドレスを変換</small></div><i>→</i><div><strong>インターネット</strong><span>グローバルIP</span></div></div>

### 特殊なIPアドレス

<div class="ip-special-grid"><div><code>127.0.0.1</code><strong>localhost</strong><p>自分自身のPCを表すアドレスです。</p></div><div><code>169.254.x.x</code><strong>APIPA</strong><p>DHCPからIPv4アドレスを取得できない場合に、自動設定されることがあります。</p></div></div>

### IPv6

<div class="ip-definition-card"><code>2001:db8::10</code><p>IPv4で使用できるアドレスには限りがあるため、より多くの機器を接続できるように、非常に広いアドレス空間を持つIPv6が作られました。</p><p>IPv6はすでに多くのネットワークやサービスで利用されていますが、現在はIPv4を完全に置き換えているわけではありません。PCやネットワークでは、IPv4とIPv6を同時に使用する構成が一般的です。</p><p>Windowsでは、IPv4とIPv6の両方のアドレスが同時に設定・表示されることがあります。IPv6が表示されているだけでは異常ではありません。</p><p>IPv6では、ルーターからの情報を利用して端末が自動的にIPv6アドレスを設定する仕組みがあります。この方式はSLAACと呼ばれます。DHCPv6を利用して設定を配布する構成や、サーバー・ネットワーク機器などへ手動で設定する構成もあります。</p><strong>初心者向けのポイント</strong><ul><li>IPv6はIPv4より非常に広いアドレス空間を持ちます。</li><li>現在はIPv4とIPv6が併用されることが多くあります。</li><li>IPv6は自動設定されることが多い一方、構成によって手動設定もできます。</li></ul><small>このページでは、IPv6アドレスの詳しい構造や省略表記、計算は扱いません。</small></div>

### 固定IPと自動取得

<div class="ip-type-grid ip-addressing-methods"><div><h3>自動取得</h3><p>DHCPからネットワーク設定を取得します。</p><small>よくある利用例</small><ul><li>一般PC</li><li>ノートPC</li><li>モバイル端末</li></ul></div><div><h3>固定IP</h3><p>端末側でIPアドレスなどを設定します。</p><small>よくある利用例</small><ul><li>サーバー</li><li>プリンター</li><li>ネットワーク機器</li></ul></div></div>
<div class="standard-callout"><strong>DHCP予約という選択肢</strong><p>端末側は自動取得のまま、同じIPアドレスを配布する方法もあります。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles admin-principles--five ip-admin-checks"><div><span>1</span><strong>IPアドレスだけで判断しない</strong><p>サブネットマスク、デフォルトゲートウェイ、DNSなどをあわせて確認します。</p></div><div><span>2</span><strong>同じネットワークかどうかを意識する</strong><p>通信先が同じネットワークか別のネットワークかで、確認するポイントが変わります。</p></div><div><span>3</span><strong>IP通信と名前解決を分けて考える</strong><p>IPアドレスでは通信できても、DNSの問題で名前では接続できない場合があります。</p></div><div><span>4</span><strong>固定IPとDHCPの管理範囲を分ける</strong><p>固定IP、DHCP配布範囲、DHCP予約が重複しないように管理します。</p></div><div><span>5</span><strong>変更前の状態を残す</strong><p>IPアドレス、サブネットマスク、デフォルトゲートウェイ、DNSなどを変更前に記録します。</p></div></div>

### 管理者の基本作業

<div class="process-steps ip-admin-process"><div><span>1</span><section><h3>使用中のネットワークアダプターを確認する</h3><p>有線LAN、Wi-Fi、VPNなど、どの接続を使用しているか確認します。</p></section></div><div><span>2</span><section><h3>現在のネットワーク設定を確認する</h3><p>IPアドレス、サブネットマスク、デフォルトゲートウェイ、DNSを確認します。</p></section></div><div><span>3</span><section><h3>IPアドレスの取得方法を確認する</h3><p>DHCPによる自動取得か、固定IPかを確認します。</p></section></div><div><span>4</span><section><h3>同じネットワークへの通信を確認する</h3><p>同じネットワーク上の機器へ通信できるか確認します。</p></section></div><div><span>5</span><section><h3>別のネットワークへの通信を確認する</h3><p>デフォルトゲートウェイを経由して、他のネットワークやインターネットへ通信できるか確認します。</p></section></div><div><span>6</span><section><h3>名前解決と実際のサービスを確認する</h3><p>DNSによる名前解決と、実際に利用するサービスへの接続を確認します。</p></section></div></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid ip-trouble-grid"><div><span>1</span><h3><code>169.254.x.x</code> が設定されている</h3><p>DHCPから設定を取得できているか確認します。</p></div><div><span>2</span><h3>IPとゲートウェイが合っていない</h3><p>ネットワーク範囲と設定値を確認します。</p></div><div><span>3</span><h3>別のネットワークへ通信できない</h3><p>デフォルトゲートウェイと経路を確認します。</p></div><div><span>4</span><h3>名前では接続できない</h3><p>IP通信とDNSによる名前解決を分けて確認します。</p></div><div><span>5</span><h3>IPアドレスが重複している</h3><p>固定IPとDHCPの管理範囲を確認します。</p></div><div><span>6</span><h3>一部のネットワークアダプターだけ通信できない</h3><p>有効なアダプターと各設定値を比較します。</p></div><div><span>7</span><h3>VPN接続後に通信経路が変わる</h3><p>VPN接続前後のIP設定と経路を比較します。</p></div></div>

### 確認に使う主なコマンド

<div class="ip-command-list"><div><code>ipconfig /all</code><p>ネットワーク設定全体を確認します。</p></div><div><code>ipconfig</code><p>基本的なIP設定を確認します。</p></div><div><code>ping</code><p>指定した相手までIP通信できるか確認します。</p></div><div><code>tracert</code><p>通信経路を確認します。</p></div><div><code>Get-NetIPConfiguration</code><p>PowerShellでネットワーク設定を確認します。</p></div></div>

<div class="standard-callout standard-callout--warning"><strong>pingの結果だけで判断しない</strong><p>pingに応答しないことだけで、必ず通信障害とは判断できません。pingは、相手に「通信できますか」と確認するためのICMPという仕組みを使っています。機器やファイアウォールの設定によって、この確認に応答しない場合もあります。</p></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></svg></span><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>IPアドレスだけを見る</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>サブネットマスク、デフォルトゲートウェイ、DNSも確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p><code>169.254.x.x</code>を正常な社内IPとして扱う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>DHCPから正しい設定を取得できているか確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>通信できないので、すぐ固定IPへ変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>現在の設定とDHCPの状態を先に確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>IPで通信できるのでDNSも正常と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>IP通信と名前解決を分けて確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>pingが失敗したので相手が停止していると判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>ファイアウォールやICMP設定、実際のサービス通信も確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>現在の設定を記録せず変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>変更前にIP、サブネットマスク、デフォルトゲートウェイ、DNSを記録する</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>IPアドレスは機器を識別するための番号</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">ネットワーク上で通信先を特定するために使用します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>サブネットマスクで同じネットワークか判断する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IPアドレスだけではネットワーク範囲を判断できません。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>別のネットワークへの通信にはデフォルトゲートウェイを使う</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">同一ネットワーク外への通信では出口の設定が重要です。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>ネットワーク設定全体を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IP、サブネットマスク、ゲートウェイ、DNSをまとめて確認します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages ip-related-pages"><a href="./dhcp"><span>ネットワーク</span><strong>DHCP</strong><p>ネットワーク設定を自動配布する仕組み</p></a><a href="./dns"><span>ネットワーク</span><strong>DNS</strong><p>名前から接続先を見つける仕組み</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>ネットワークトラブルシューティング</strong><p>接続できない原因を順序立てて確認する方法</p></a><a href="../windows/active-directory"><span>Windows・認証基盤</span><strong>Active Directory</strong><p>社内のユーザーとコンピューターを管理する認証基盤</p></a></div>

<p class="ip-last-updated">最終更新：2026/08/14</p>
