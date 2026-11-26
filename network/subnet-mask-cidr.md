---
title: サブネットマスクとCIDR
description: IPv4のサブネットマスクとCIDR、ネットワーク範囲、アドレス数の基本を解説します。
outline: false
pageClass: wsus-page registry-page subnet-mask-cidr-page
lastUpdated: false
---

# サブネットマスクとCIDR

<p class="article-subtitle">IPアドレスのネットワーク範囲を理解し、同じサブネットかどうかを判断するための基本知識</p>
<p class="article-summary">サブネットマスクとCIDRは、IPアドレスが属するネットワークの範囲を判断するために使われます。このページでは、<code>/24</code>や<code>/25</code>を例に、サブネットの範囲、利用可能なアドレス数、Windowsでの確認方法を説明します。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 4.5 6.2 4.5 9S15 17.8 12 21M12 3c-3 3.2-4.5 6.2-4.5 9S9 17.8 12 21"/></svg></span><span>対象環境</span><strong>IPv4、Windows 11、Windows Server<br>社内ネットワーク</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>20～30分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年11月</strong></div>
</div>

<nav class="wsus-nav-standard" aria-label="このページの内容">
<p><span class="wsus-nav-standard__title-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 0 0-3-3H6.5A3.5 3.5 0 0 0 3 5.5v16A3.5 3.5 0 0 1 6.5 18H9a3 3 0 0 1 3 3V5Z"/><path d="M12 5a3 3 0 0 1 3-3h2.5A3.5 3.5 0 0 1 21 5.5v16a3.5 3.5 0 0 0-3.5-3.5H15a3 3 0 0 0-3 3V5Z"/></svg></span>このページの内容</p>
<a href="#why-important"><span class="wsus-nav-standard__icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span><span>なぜ重要なのか</span></a>
<a href="#typical-scenarios"><span class="wsus-nav-standard__icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span><span>実際の利用シーン</span></a>
<a href="#how-it-works"><span class="wsus-nav-standard__icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span><span>基本的な仕組み</span></a>
<a href="#administrator-checks"><span class="wsus-nav-standard__icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span><span>管理者のポイント</span></a>
<a href="#common-issues"><span class="wsus-nav-standard__icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span><span>よくあるトラブル</span></a>
<a href="#page-summary"><span class="wsus-nav-standard__icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span><span>まとめ</span></a>
</nav>

## 概要

<p>サブネットマスクは、IPv4アドレスのどこまでがネットワーク部分なのかを示すための情報です。IPアドレスが似ていても、サブネットマスクの設定によって、同じサブネットに属するかどうかが変わります。</p>
<p>CIDRは、従来のアドレスクラスにとらわれず、IPアドレスのネットワーク範囲をプレフィックス長で表し、扱うための仕組みです。例えば、<code>192.168.1.0/24</code>の「<code>/24</code>」は、先頭24ビットがネットワーク部分であることを示します。</p>
<div class="subnet-setting-example"><div><span>ネットワークアドレス</span><code>192.168.1.0</code></div><div><span>サブネットマスク</span><code>255.255.255.0</code></div><div><span>CIDR表記</span><code>192.168.1.0/24</code></div></div>
<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>IPアドレスだけでは、同じサブネットかどうかを正確に判断できません。IPアドレスとサブネットマスク、またはCIDRのプレフィックス長を組み合わせて、ネットワークの範囲を確認することが重要です。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>サブネットマスクとCIDRはなぜ重要なのか {#why-important}

<div class="registry-root-grid"><div><strong>01　ネットワークの範囲が分かる</strong><p>IPアドレスとサブネットマスクを組み合わせることで、どのアドレス範囲が同じサブネットに属するかを判断できます。</p></div><div><strong>02　通信経路を考える基礎になる</strong><p>PCは、宛先が同じサブネットに属するかどうかを判断し、設定された経路に従って通信します。</p></div><div><strong>03　IPアドレスの設定ミスを調べられる</strong><p>IPアドレスが正しく見えても、サブネットマスクが間違っていると、通信に問題が発生する場合があります。</p></div><div><strong>04　ネットワーク設計の理解につながる</strong><p>端末数やネットワーク構成に応じて、アドレス範囲を分ける考え方を理解できます。</p></div></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>同じ部署のPCに接続できない</h3><p><strong>状況</strong><br>同じ社内ネットワークに接続しているはずのPC同士で通信できない。</p><p><strong>具体例</strong><br>PC-Aが<code>192.168.1.10/24</code>、PC-Bが<code>192.168.1.20/24</code>の場合、両方とも<code>192.168.1.0/24</code>に属します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>IPアドレスとサブネットマスクを確認します。同じサブネットでも、接続状態やファイアウォールなどによって通信できない場合があります。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>IPアドレスは似ているのに通信できない</h3><p><strong>状況</strong><br>IPアドレスの最初の3つの数字が同じなのに、通信できない。</p><p><strong>具体例</strong><br>PC-Aが<code>192.168.1.10/25</code>、PC-Bが<code>192.168.1.200/25</code>の場合、それぞれ異なるサブネットに属します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>両方の端末のIPアドレスとサブネットマスクを確認し、それぞれが属するサブネットを比較します。異なるサブネット間で通信する場合は、適切なルーティングが必要です。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>一部のネットワークにだけ接続できない</h3><p><strong>状況</strong><br>同じサブネット内の機器には接続できるが、別のネットワークにあるサーバーには接続できない。</p><p><strong>具体例</strong><br>PCが<code>192.168.1.10/24</code>、サーバーが<code>192.168.2.10/24</code>の場合、一般的にはルーターなどを経由した通信が必要です。</p><p class="scenario-point"><strong>確認ポイント</strong><br>サブネットマスクに加えて、デフォルトゲートウェイ、ルーティング設定、通信を許可する設定などを確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>ネットワークのアドレス範囲を見直す</h3><p><strong>状況</strong><br>端末が増えたため、現在のネットワークで利用できるIPアドレス数を確認したい。</p><p><strong>具体例</strong><br><code>/24</code>と<code>/26</code>では、1つのサブネットに含まれるIPv4アドレスの数が異なります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>必要な端末数、ネットワーク機器、予約するアドレス、DHCPの配布範囲などを確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### A. サブネットの基本を理解する

#### サブネットとは

<p>サブネットは、IPネットワークを区切った一つのネットワーク範囲です。社内ネットワークでは、部署や用途、セキュリティ要件などに合わせて、ネットワークを複数のサブネットに分けることがあります。例えば、社員用PCとサーバーを別々のサブネットに配置する構成があります。</p>
<p>ただし、サブネットを分けるだけで通信が自動的に禁止されるわけではありません。異なるサブネット間でも、適切な通信経路と許可設定があれば通信できます。</p>

#### サブネットマスクとは

<p>IPv4アドレスは32ビットで構成されています。サブネットマスクは、そのうちどこまでがネットワーク部分なのかを示します。</p>
<div class="subnet-definition"><span>IPアドレス<code>192.168.1.10</code></span><span>サブネットマスク<code>255.255.255.0</code></span><strong>所属するサブネット<code>192.168.1.0/24</code></strong></div>

#### <code>/24</code>はなぜ<code>255.255.255.0</code>なのか

<div class="subnet-binary"><p><strong>サブネットマスク</strong><code>255.255.255.0</code></p><div class="subnet-binary__bits" aria-label="11111111.11111111.11111111.00000000"><span><b>11111111</b><i>.</i><b>11111111</b><i>.</i><b>11111111</b></span><span><i>.</i><b>00000000</b></span></div><div class="subnet-binary__labels"><span><strong>先頭24ビット</strong><small>ネットワーク部分</small></span><span><strong>残り8ビット</strong><small>ホスト部分</small></span></div></div>
<p>サブネットマスクでは、先頭から連続する1の部分がネットワーク部分を表します。<code>255.255.255.0</code>を2進数にすると、先頭に1が24個並ぶため、プレフィックス長は<code>/24</code>になります。残りの8ビットは、サブネット内のアドレスを区別する部分です。</p>

#### CIDRとは

<p>CIDRは、従来のアドレスクラスにとらわれず、IPアドレスのネットワーク範囲をプレフィックス長で表し、扱うための仕組みです。例えば、<code>192.168.1.0/24</code>の「<code>/24</code>」は、32ビットのIPv4アドレスのうち、先頭24ビットがネットワーク部分であることを示します。<code>/25</code>の場合は、先頭25ビットがネットワーク部分になります。</p>

<p>例えば、<code>255.255.255.0</code>は<code>/24</code>、<code>255.255.255.128</code>は<code>/25</code>に対応します。プレフィックス長が変わると、ネットワーク部分の長さも変わります。</p>
<div class="standard-callout standard-callout--info"><strong>サブネットマスクとCIDRの関係</strong><p>サブネットマスクは、ネットワーク部分を32ビットの値で示します。CIDR表記では、ネットワーク部分の長さを<code>/24</code>などの数字で表します。</p></div>

### B. ネットワークの範囲を判断する

#### <code>/24</code>と<code>/25</code>で判断が変わる

<div class="subnet-prefix-compare"><section class="is-same"><h4><code>/24</code>の場合</h4><p>サブネットマスク：<code>255.255.255.0</code></p><div><span>PC-A<code>192.168.1.10/24</code><small>所属：192.168.1.0/24</small></span><span>PC-B<code>192.168.1.200/24</code><small>所属：192.168.1.0/24</small></span></div><strong>同じサブネット</strong></section><section class="is-different"><h4><code>/25</code>の場合</h4><p>サブネットマスク：<code>255.255.255.128</code></p><div><span>PC-A<code>192.168.1.10/25</code><small>所属：192.168.1.0/25</small></span><span>PC-B<code>192.168.1.200/25</code><small>所属：192.168.1.128/25</small></span></div><strong>異なるサブネット</strong></section></div>
<p>比較しているIPアドレスは同じでも、両方に設定するプレフィックス長によって、所属するサブネットが変わります。</p>

#### <code>/24</code>を2つの<code>/25</code>に分ける

<div class="subnet-split-diagram"><div class="subnet-split-diagram__source"><strong>元の範囲</strong><code>192.168.1.0/24</code><span>192.168.1.0 ～ 192.168.1.255</span><small>アドレス総数：256個</small></div><i aria-hidden="true">↓</i><div class="subnet-split-diagram__parts"><section><strong>サブネットA</strong><code>192.168.1.0/25</code><span>192.168.1.0 ～ 192.168.1.127</span><small>アドレス総数：128個</small></section><section><strong>サブネットB</strong><code>192.168.1.128/25</code><span>192.168.1.128 ～ 192.168.1.255</span><small>アドレス総数：128個</small></section></div></div>
<p>ここで示している128個は、各サブネットに含まれる<strong>アドレス総数</strong>です。通常のホストに割り当て可能な数とは区別します。</p>

#### ネットワークアドレス

<p>ネットワークアドレスは、サブネットそのものを表すアドレスです。例えば、<code>192.168.1.0/24</code>のネットワークアドレスは<code>192.168.1.0</code>です。一般的なIPv4サブネットでは、このアドレスを通常のPCに割り当てません。</p>

#### ブロードキャストアドレス

<p>ブロードキャストアドレスは、そのIPv4サブネットに向けたブロードキャスト通信で使用されるアドレスです。例えば、<code>192.168.1.0/24</code>の場合、<code>192.168.1.255</code>がブロードキャストアドレスです。一般的には、このアドレスも通常のPCに割り当てません。</p>

#### <code>/24</code>のアドレス範囲

<div class="wsus-cloud-table">

| 項目 | アドレス・個数 |
|---|---|
| ネットワークアドレス | `192.168.1.0` |
| 通常のホストに割り当て可能な範囲 | `192.168.1.1 ～ 192.168.1.254` |
| ブロードキャストアドレス | `192.168.1.255` |
| アドレス総数 | 256個 |
| 通常のホストに割り当て可能な数 | 254個 |

</div>
<div class="standard-callout standard-callout--key"><strong>アドレス総数と割り当て可能な数は異なる</strong><p><code>/24</code>には256個のIPv4アドレスが含まれます。一般的なIPv4サブネットでは、ネットワークアドレスとブロードキャストアドレスを除いた254個が、通常のホストに割り当て可能な数です。さらに、ルーターやサーバーなどにもアドレスを使用するため、社員PCに割り当てられる数は254台分より少なくなる場合があります。</p></div>
<p>この説明は一般的なIPv4サブネットを対象としています。<code>/31</code>や<code>/32</code>には異なる用途や扱いがあるため、すべてのIPv4プレフィックスで必ず2アドレスを差し引くわけではありません。</p>

### C. アドレス数と設定を確認する

#### CIDRによってアドレス数が変わる

<p>IPv4では、プレフィックス長が1ビット増えると、1つのサブネットに含まれるアドレス数は半分になります。例えば、<code>/24</code>の範囲を<code>/25</code>で区切ると、同じ範囲を2つのサブネットに分けられます。<code>/26</code>で区切ると、元の<code>/24</code>を4つに分けられます。</p>

#### よく使われるCIDRの例

<div class="wsus-cloud-table">

| CIDR | サブネットマスク | アドレス総数 | 通常のホストに割り当て可能な数 |
|---|---|---:|---:|
| `/24` | `255.255.255.0` | 256 | 254 |
| `/25` | `255.255.255.128` | 128 | 126 |
| `/26` | `255.255.255.192` | 64 | 62 |
| `/27` | `255.255.255.224` | 32 | 30 |
| `/28` | `255.255.255.240` | 16 | 14 |

</div>
<p>この表は一般的なIPv4サブネットの例です。<code>/31</code>や<code>/32</code>などには異なる用途や扱いがあります。</p>

#### <code>/26</code>で分けた場合

<p><code>192.168.1.0/24</code>を<code>/26</code>で分けると、次の4つのサブネットになります。</p>
<div class="wsus-cloud-table">

| サブネット | 通常のホストに割り当て可能な範囲 |
|---|---|
| `192.168.1.0/26` | `192.168.1.1 ～ 192.168.1.62` |
| `192.168.1.64/26` | `192.168.1.65 ～ 192.168.1.126` |
| `192.168.1.128/26` | `192.168.1.129 ～ 192.168.1.190` |
| `192.168.1.192/26` | `192.168.1.193 ～ 192.168.1.254` |

</div>
<p>1つの<code>/26</code>に含まれるアドレスは64個です。一般的なIPv4サブネットでは、通常のホストに割り当て可能な数は62個です。</p>
<div class="standard-callout standard-callout--admin"><strong>アドレス数だけでサブネットを決めない</strong><p>ネットワークを設計するときは、必要な端末数に加えて、将来の増加、ネットワーク機器、DHCPの設定、管理方法、セキュリティ要件なども考慮します。</p></div>

#### Windowsで設定を確認する

##### <code>ipconfig</code>で確認する

<pre><code>ipconfig /all</code></pre>
<p>Windowsのコマンドプロンプトでこのコマンドを実行すると、ネットワーク設定の情報を確認できます。</p>
<div class="registry-card-grid"><div><strong>IPv4 アドレス</strong><p>PCに設定されているIPv4アドレスです。</p></div><div><strong>サブネット マスク</strong><p>そのPCが使用しているサブネットマスクです。</p></div><div><strong>デフォルト ゲートウェイ</strong><p>別のネットワークへ通信する際に、通常利用するルーターなどのアドレスです。</p></div><div><strong>DHCP 有効</strong><p>DHCPでIPアドレスを取得する設定かどうかを確認します。</p></div><div><strong>DHCP サーバー</strong><p>DHCPから設定を取得している場合に、配布元のサーバーを確認できます。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>まずは設定値を確認する</strong><p>ネットワークにつながらない場合は、IPアドレスだけでなく、サブネットマスク、デフォルトゲートウェイ、DHCPの設定も確認します。原因を確認する前に、自己判断で設定を変更する必要はありません。</p></div>

#### 同じサブネットでも通信できるとは限らない

<p>同じサブネットに属していることは、通信できることを保証するものではありません。一般的なLAN構成では、同じサブネット内の機器とはルーターを経由せずに通信できます。ただし、実際には、ネットワーク接続の状態や、ファイアウォールなどの設定によって通信できない場合があります。</p>
<p>また、IPアドレス上は同じサブネットでも、異なるVLANなどに分かれている場合は、期待どおりに通信できないことがあります。一方、異なるサブネットに属していても、適切なルーティングと通信許可があれば通信できます。</p>
<div class="standard-callout standard-callout--admin"><strong>アドレスの範囲と実際の通信を分けて考える</strong><p>サブネットマスクは、IPアドレスからサブネットの範囲を判断するための情報です。実際に通信できるかどうかは、接続状態、経路、VLAN、通信制御なども関係します。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>01</span><strong>IPアドレスとサブネットマスクをセットで確認する</strong><p>IPアドレスだけでは、所属するサブネットの範囲を判断できません。</p></div><div><span>02</span><strong>CIDRの数字が表す意味を理解する</strong><p><code>/24</code>や<code>/25</code>は、ネットワーク部分の長さを示しています。</p></div><div><span>03</span><strong>同じサブネットかどうかを正しく判断する</strong><p>IPアドレスとサブネットマスクを組み合わせて、各端末が属するサブネットを確認します。</p></div><div><span>04</span><strong>デフォルトゲートウェイと通信経路を確認する</strong><p>別のサブネットへの通信では、適切なルーティング設定が必要です。</p></div><div><span>05</span><strong>DHCPで配布される設定を確認する</strong><p>DHCPから配布されるIPアドレス、サブネットマスク、ゲートウェイなどが、ネットワーク構成に合っているか確認します。</p></div><div><span>06</span><strong>設定変更前に影響範囲を確認する</strong><p>サブネットマスクを変更すると、端末が判断するネットワーク範囲が変わります。影響を確認せずに設定を変更しないでください。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>サブネットマスクを自己判断で変更しない</strong><p>サブネットマスクの変更は、端末の経路選択や通信に影響する場合があります。社内ネットワークの設定を変更する場合は、管理手順とネットワーク構成を確認してください。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>01</span><h3>IPアドレスは設定されているのに通信できない</h3><p>サブネットマスク、デフォルトゲートウェイ、接続先のIPアドレスなどを確認します。IPアドレスが表示されているだけでは、正しく通信できるとは限りません。</p></div><div><span>02</span><h3>同じようなIPアドレスなのに別サブネットになる</h3><p>IPアドレスの一部が同じでも、CIDRのプレフィックス長によってサブネットの範囲が異なります。両方の端末の設定を確認します。</p></div><div><span>03</span><h3>同じサブネットのはずなのに通信できない</h3><p>IP設定に加えて、物理接続、VLAN、ファイアウォール、対象機器の状態などを確認します。</p></div><div><span>04</span><h3>別のネットワークにあるサーバーへ接続できない</h3><p>デフォルトゲートウェイ、ルーティング設定、通信制御などを確認します。サブネットマスクだけを変更して解決しようとしないでください。</p></div><div><span>05</span><h3>DHCPで取得した設定が想定と異なる</h3><p>取得したIPアドレス、サブネットマスク、ゲートウェイと、想定しているネットワーク構成を比較します。必要に応じてDHCPの配布設定を確認します。</p></div><div><span>06</span><h3>ネットワーク内のアドレスが不足する</h3><p>現在のサブネットに含まれるアドレス数と、実際に使用・予約されているアドレスを確認します。将来の端末増加も考慮します。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>IPアドレスだけで同じサブネットか分かる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>サブネットマスクも必要です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>最初の3つの数字が同じなら同じサブネット</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p><code>/25</code>などでは異なる場合があります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p><code>/24</code>は254個のIPアドレスしか含まない</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>総数は256個で、通常のホストに割り当て可能な数が254個です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>同じサブネットなら必ず通信できる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>接続状態や通信制御なども関係します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>別サブネットとは通信できない</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>適切な経路と通信許可があれば通信できます</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>範囲</strong><p>IPアドレスとサブネットマスクから、どのサブネットに属するのか。</p></div><div><strong>経路</strong><p>宛先が同じサブネットか、別の経路を利用する必要があるのか。</p></div><div><strong>設定</strong><p>端末、DHCP、ルーターなどの設定は整合しているか。</p></div><div><strong>影響</strong><p>サブネットマスクやネットワーク構成を変更すると、どの機器に影響するのか。</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>サブネットマスクはネットワークの範囲を判断するための情報</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IPアドレスと組み合わせて、ネットワーク部分を確認します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>CIDRはネットワーク部分の長さを数字で表す</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail"><code>/24</code>や<code>/25</code>などのプレフィックス長によって、同じIPアドレスでも所属するサブネットが変わります。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>サブネットの範囲によってアドレス数が変わる</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">プレフィックス長が変わると、1つのサブネットに含まれるアドレス数も変わります。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>同じサブネットでも通信できるとは限らない</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">IP設定だけでなく、通信経路、VLAN、ファイアウォールなども確認することが重要です。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages subnet-related-pages"><a href="./ip-address"><span>ネットワーク</span><strong>IPアドレス</strong><p>端末や通信先を識別するアドレスの基本</p></a><a href="./dhcp"><span>ネットワーク</span><strong>DHCP</strong><p>ネットワーク設定を自動配布する仕組み</p></a><a href="./routing"><span>ネットワーク</span><strong>ルーティング</strong><p>異なるネットワーク間の通信経路</p></a><a href="./basic-structure"><span>ネットワーク</span><strong>ネットワークの基本構成</strong><p>通信を支える機器と役割</p></a><a href="./dns"><span>ネットワーク</span><strong>DNS</strong><p>名前から接続先を調べる仕組み</p></a><div class="subnet-related-pending"><span>ネットワーク</span><strong>VLAN</strong><p>準備中</p></div></div>

<p class="registry-last-updated">最終更新：2026/11/16</p>
