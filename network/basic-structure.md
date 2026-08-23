---
title: ネットワークの基本構成
description: PCからインターネットまでの通信を支える機器と役割を、企業ネットワークの基本構成から学びます。
outline: false
pageClass: wsus-page network-structure-page
lastUpdated: false
---

# ネットワークの基本構成

<p class="article-subtitle">PCからインターネットまで、通信を支える機器と役割</p>
<p class="article-summary">社内ネットワークでは、PCが単独で通信しているわけではありません。スイッチ、ルーター、L3スイッチ、ファイアウォール、アクセスポイントなど、複数の機器がそれぞれの役割を持って通信を支えています。社内ITでは、「どの機器が、どの役割を担当しているか」を把握することが、障害対応や構成確認の基本になります。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 4.5 6.2 4.5 9S15 17.8 12 21M12 3c-3 3.2-4.5 6.2-4.5 9S9 17.8 12 21"/></svg></span><span>対象環境</span><strong>社内ネットワーク、Windows<br>有線LAN、Wi-Fi</strong></div>
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

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>社内ネットワークでは、通信先によって通る機器が変わります。まずは「PC → スイッチ → L3スイッチやルーター → ファイアウォール → インターネット」という基本的な流れをイメージできれば十分です。</p></div>

<div class="network-structure-overview"><div class="network-main-flow"><span><strong>PC</strong><small>利用端末</small></span><i>→</i><span><strong>アクセススイッチ</strong><small>有線・無線端末の通信が合流</small></span><i>→</i><span><strong>L3スイッチ・ルーター</strong><small>別ネットワークへ中継</small></span><i>→</i><span><strong>ファイアウォール</strong><small>通信を許可・拒否</small></span><i>→</i><span><strong>インターネット</strong></span></div><div class="network-wifi-branch"><span><strong>ノートPC・スマートフォン</strong></span><i><small>Wi-Fi</small>↓</i><span><strong>アクセスポイント</strong></span><i class="network-wifi-join"><small>主経路のアクセススイッチへ接続</small><span aria-hidden="true">↓</span></i></div></div>

<p class="network-structure-note">実際の企業ネットワークでは構成が異なりますが、まずは各機器の役割を理解することが重要です。</p>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>ネットワークの基本構成はなぜ重要なのか {#why-important}

通信できないときは、PCだけではなく、通信経路上のどこで問題が起きているかを考える必要があります。

<div class="network-route-strip"><span>PC</span><i>→</i><span>スイッチ</span><i>→</i><span>L3スイッチ</span><i>→</i><span>ファイアウォール</span><i>→</i><span>インターネット</span></div>

<div class="network-impact-grid"><div><strong>PCだけ通信できない</strong><p>端末設定や接続を確認します。</p></div><div><strong>同じフロアの複数PCが通信できない</strong><p>スイッチや上位接続を確認します。</p></div><div><strong>別のネットワークだけ通信できない</strong><p>L3スイッチやルーティングを確認します。</p></div><div><strong>インターネットだけ通信できない</strong><p>ファイアウォールや外部接続を確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="network-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>PCをLANケーブルで接続しても通信できない</h3><p><strong>状況</strong><br>PCにLANケーブルを接続しても、社内ネットワークへ接続できない場合があります。</p><p class="network-scenario-flow-title">確認の流れ</p><ol class="network-scenario-flow"><li><span>1</span><div><strong>物理接続を確認</strong><p>LANケーブルが正しく接続され、PCとスイッチがリンクしているか確認します。</p></div></li><li><span>2</span><div><strong>ネットワークアダプターを確認</strong><p>Windowsで有線LANアダプターが有効か確認します。</p></div></li><li><span>3</span><div><strong>IP設定を確認</strong><p><code>ipconfig /all</code>でIPアドレス、サブネットマスク、デフォルトゲートウェイを確認します。</p></div></li><li><span>4</span><div><strong>必要に応じてDHCP側を確認</strong><p><code>169.254.x.x</code>などの場合は、DHCPから設定を取得できていない可能性を確認します。</p></div></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>「PC → ケーブル → スイッチ → IP設定」の順に確認すると、問題の場所を絞り込みやすくなります。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>Wi-Fiには接続できるが社内システムへ接続できない</h3><p><strong>状況</strong><br>Wi-Fiの接続表示は正常でも、目的の社内ネットワークへ通信できない場合があります。</p><p class="network-scenario-flow-title">確認の流れ</p><ol class="network-scenario-flow"><li><span>1</span><div><strong>接続しているSSIDを確認</strong><p>目的の社内ネットワーク用SSIDへ接続しているか確認します。</p></div></li><li><span>2</span><div><strong>IP設定を確認</strong><p>想定しているネットワークのIPアドレスを取得しているか確認します。</p></div></li><li><span>3</span><div><strong>VLANやネットワーク範囲を確認</strong><p>そのSSIDから目的の社内ネットワークへ通信できる構成か確認します。</p></div></li><li><span>4</span><div><strong>通信経路を確認</strong><p>デフォルトゲートウェイ、ルーティング、ファイアウォールなど、目的地までの経路を確認します。</p></div></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>「Wi-Fiに接続できている」ことと、「目的のネットワークへ通信できる」ことは別です。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>同じネットワークでは通信できるが、別のネットワークへ通信できない</h3><p><strong>状況</strong><br>同じネットワーク内の機器には接続できても、別VLANや別ネットワークのサーバーへ接続できない場合があります。</p><p class="network-scenario-flow-title">確認の流れ</p><ol class="network-scenario-flow"><li><span>1</span><div><strong>同じネットワーク内への通信を確認</strong><p>同一ネットワークの機器へ通信できることを確認します。</p></div></li><li><span>2</span><div><strong>デフォルトゲートウェイを確認</strong><p>設定されているゲートウェイが正しく、通信できるか確認します。</p></div></li><li><span>3</span><div><strong>L3スイッチやルーターを確認</strong><p>別ネットワークへのルーティングがあるか確認します。</p></div></li><li><span>4</span><div><strong>通信制御を確認</strong><p>ファイアウォールなどで通信が拒否されていないか確認します。</p></div></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>同じネットワーク内の通信が正常なら、端末そのものより、別ネットワークへ出る経路を優先して確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>社内ネットワークは使えるがインターネットへ接続できない</h3><p><strong>状況</strong><br>社内サーバーには接続できても、外部のWebサイトへ接続できない場合があります。</p><p class="network-scenario-flow-title">確認の流れ</p><ol class="network-scenario-flow"><li><span>1</span><div><strong>社内ネットワークへの通信を確認</strong><p>社内サーバーなどへ正常に接続できることを確認します。</p></div></li><li><span>2</span><div><strong>外部へのIP通信を確認</strong><p>インターネット側へIP通信できるか確認します。</p><em>通信できない場合：ゲートウェイ、ファイアウォール、外部回線を確認</em></div></li><li><span>3</span><div><strong>名前解決を確認</strong><p>IP通信できても名前で接続できない場合は、DNSを確認します。</p></div></li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>「外部へのIP通信」と「DNSによる名前解決」を分けて確認すると、問題の場所を切り分けやすくなります。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#basic-mechanism}

ネットワーク機器は、端末を接続する、異なるネットワークへ中継する、通信を制御するなど、役割を分担しています。

<div class="network-physical-logical"><div><strong>物理的な構成</strong><p>ケーブル、スイッチ、アクセスポイントなど、どの機器につながっているかを確認します。</p></div><div><strong>論理的な構成</strong><p>IPネットワークやVLANなど、どのネットワークに所属しているかを確認します。</p></div></div>

<p class="network-structure-note">ネットワークでは、物理的な構成と論理的な構成の両方を見ることが重要です。</p>

### ネットワークアダプター

<div class="network-definition-card"><p>PCがネットワークへ接続するための入口です。</p><div class="network-adapter-grid"><span><strong>有線LAN</strong><small>LANケーブルで接続</small></span><span><strong>Wi-Fi</strong><small>無線で接続</small></span><span><strong>VPN</strong><small>仮想的な接続として表示されることがある</small></span></div><p>Windowsでは、VPNソフトウェアによって仮想的なネットワークアダプターが追加されることがあります。IPアドレスはPC全体に1つだけ設定されるとは限らず、ネットワークアダプターごとに設定されることがあります。</p></div>

### LAN

<div class="network-definition-card"><p>LAN（Local Area Network）は、会社や家庭など、比較的限られた範囲で構成されるネットワークです。</p><strong>LANが構成される範囲の例</strong><div class="network-example-tags"><span>オフィス内</span><span>フロア内</span><span>拠点内</span></div></div>

<div class="standard-callout standard-callout--important"><strong>場所だけでは判断できない</strong><p>実際にはVLANなどによって、同じ建物や同じフロアの中でも複数のネットワークに分かれていることがあります。</p></div>

### スイッチ

<p>スイッチは、同じLAN内の複数の機器を接続し、通信を中継するために使われます。PC、プリンター、アクセスポイントなどの端末を直接接続するスイッチは、アクセススイッチと呼ばれることがあります。</p>
<div class="network-device-diagram network-switch-diagram"><span>PC A</span><i>↘</i><strong>スイッチ</strong><i>→</i><span>サーバー</span><span>PC B</span><i>↗</i></div>
<p>アクセススイッチは、接続した端末の通信を上位のL3スイッチやルーターなどへ送ります。スイッチは接続されている機器を見分けながら、必要なポートへ通信を転送します。転送先を判断するときには、MACアドレスという機器を識別するための情報が使われます。</p>
<div class="standard-callout"><strong>このページで扱う範囲</strong><p>このページではMACアドレスの詳しい仕組みまでは扱いません。</p></div>

### アクセスポイント

<p>アクセスポイントは、ノートPCやスマートフォンなどの無線端末を有線ネットワークへ接続するための機器です。</p>
<div class="network-device-diagram network-linear-diagram"><span>ノートPC</span><i>Wi-Fi</i><strong>アクセスポイント</strong><i>→</i><span>スイッチ</span></div>
<div class="standard-callout standard-callout--important"><strong>家庭用機器との違い</strong><p>家庭用Wi-Fiルーターと異なり、企業ネットワークではアクセスポイントとルーターが別の機器になっていることがあります。</p></div>

### ルーター

<p>ルーターは、異なるネットワーク間の通信を中継する機器です。宛先IPアドレスを確認し、どの方向へ通信を送るか判断します。</p>
<div class="network-device-diagram network-linear-diagram"><code>192.168.10.0/24</code><i>→</i><strong>ルーター</strong><i>→</i><code>192.168.20.0/24</code></div>
<p>端末から見た「別のネットワークへ通信するときの最初の送り先」がデフォルトゲートウェイです。その役割は、ルーターやL3スイッチなどが担当することがあります。</p>
<p class="network-structure-note">詳しい判断方法は、今後作成する「ルーティング」ページで扱います。</p>

### L3スイッチ

<p>L3スイッチは、スイッチとして端末を接続しながら、異なるネットワークやVLAN間の通信も中継できる機器です。</p>
<div class="network-two-card"><div><strong>L2スイッチ</strong><p>主に同じネットワーク内の通信を中継</p></div><div class="is-primary"><strong>L3スイッチ</strong><p>異なるネットワーク間の通信も中継できる</p><small>複数のVLAN間を通信させるために利用されることがあります。</small></div></div>
<div class="standard-callout standard-callout--important"><strong>企業ネットワークでの役割</strong><p>企業ネットワークでは、VLAN間の通信やデフォルトゲートウェイの役割をL3スイッチが担当することがあります。</p></div>

### VLAN

<p>VLANは、スイッチ上のネットワークを論理的に分ける仕組みです。物理的に同じスイッチへ接続されていても、異なるVLANに所属している場合は、別のネットワークとして扱われます。</p>
<div class="network-vlan-physical-example"><span><strong>PC A</strong><small>VLAN 10</small></span><i>—</i><strong>同じ物理スイッチ</strong><i>—</i><span><strong>PC B</strong><small>VLAN 20</small></span><p class="network-vlan-blocked"><strong>× 直接通信できない</strong><span>所属VLANが異なるため、別のネットワークとして扱われます。</span></p></div>
<p class="network-structure-note">同じスイッチに接続していても、所属VLANが異なれば同じネットワークとしては扱われず、そのままでは直接通信できません。</p>
<p>異なるVLAN同士で通信したい場合は、L3スイッチやルーターで中継します。</p>
<div class="network-vlan-diagram"><div><strong>VLAN 10</strong><span>社員PC</span><code>192.168.10.0/24</code></div><i><span>相互通信</span><b aria-hidden="true">↔</b></i><div class="is-router"><strong>L3スイッチ・ルーター</strong><small>異なるVLAN・ネットワーク間の通信を中継</small></div><i><span>相互通信</span><b aria-hidden="true">↔</b></i><div><strong>VLAN 20</strong><span>サーバー</span><code>192.168.20.0/24</code></div></div>
<p class="network-structure-note">VLANごとにネットワークを分けたまま、必要な通信をL3スイッチやルーターで中継できます。必要な条件がそろえば、通信は双方向に行えます。</p>
<h4 class="network-reason-title">VLANを分けて運用する主な目的</h4>
<div class="network-reason-grid"><div><strong>部署や用途ごとにネットワークを分ける</strong><p>社員PC用、サーバー用、来客用などを分けて管理できます。</p></div><div><strong>必要な通信だけを中継する</strong><p>異なるVLAN間で必要な通信だけを、L3スイッチやルーターで中継できます。</p></div><div><strong>管理とセキュリティを整理しやすくする</strong><p>障害切り分けやアクセス制御の考え方を整理しやすくなります。</p></div></div>

### ファイアウォール

<p>ファイアウォールは、ルールに基づいてネットワーク通信を許可または拒否する機器や機能です。</p>
<div class="network-device-diagram network-linear-diagram"><span>社内ネットワーク</span><i>→</i><strong>ファイアウォール</strong><i>→</i><span>インターネット</span></div>
<div class="standard-callout standard-callout--important"><strong>経路が正しくても通信できないことがある</strong><p>IPアドレスやルーティングが正しくても、ファイアウォールで通信が拒否されていると接続できません。</p></div>

### 家庭と企業ネットワークの違い

<div class="network-home-enterprise"><div><strong>家庭</strong><p>一般的な家庭用Wi-Fiルーターでは、複数の機能が1台にまとめられていることがあります。</p><ul><li>アクセスポイント</li><li>スイッチ</li><li>ルーター</li><li>DHCP</li><li>NAT</li><li>ファイアウォール</li></ul></div><div><strong>企業</strong><p>役割が複数の機器やサーバーに分かれていることがあります。</p><ul><li>アクセスポイント</li><li>アクセススイッチ</li><li>L3スイッチ</li><li>ルーター</li><li>ファイアウォール</li><li>DHCPサーバー</li></ul></div></div>
<p class="network-structure-note">家庭では1台にまとめられている機能が、企業では複数の機器に分かれていることがあります。</p>

### 通信の基本的な流れ

<div class="network-path-patterns"><section><strong>A. 同じネットワーク</strong><div><span>PC A</span><i>→</i><span>スイッチ</span><i>→</i><span>PC B</span></div><p>同じネットワーク内では、通常ルーターを経由せず通信します。</p></section><section><strong>B. 別のネットワーク</strong><div><span>PC</span><i>→</i><span>スイッチ</span><i>→</i><span class="is-gateway">L3スイッチ・ルーター<small>デフォルトゲートウェイ</small></span><i>→</i><span>別ネットワークのサーバー</span></div><p>別のネットワークへ通信するときは、デフォルトゲートウェイへ通信を渡します。</p></section><section><strong>C. インターネット</strong><div><span>PC</span><i>→</i><span>スイッチ</span><i>→</i><span class="is-gateway">L3スイッチ・ルーター<small>デフォルトゲートウェイ</small></span><i>→</i><span>ファイアウォール</span><i>→</i><span>インターネット</span></div><p>端末は最初にデフォルトゲートウェイへ通信を渡し、ファイアウォールなどを経由して社外へ通信します。</p></section></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles network-admin-checks"><div><span>1</span><strong>通信経路を順番に考える</strong><p>PCだけでなく、途中の機器も含めて確認します。</p></div><div><span>2</span><strong>同じネットワークか別のネットワークかを判断する</strong><p>通信経路や確認する機器が変わります。</p></div><div><span>3</span><strong>物理構成と論理構成を分けて考える</strong><p>同じスイッチに接続されていても、VLANが異なれば別ネットワークになることがあります。</p></div><div><span>4</span><strong>機器名より役割を確認する</strong><p>ルーター、L3スイッチ、ファイアウォールなどが、実際にどの役割を担当しているか確認します。</p></div><div><span>5</span><strong>Wi-Fi接続とネットワーク通信を分けて考える</strong><p>Wi-Fi接続済みでも、目的のネットワークへ通信できるとは限りません。</p></div><div><span>6</span><strong>変更前に構成を確認する</strong><p>VLAN、ポート、ゲートウェイ、ファイアウォールなどの変更前に現在の状態を確認します。</p></div></div>

### 管理者の基本作業

<div class="process-steps network-admin-process"><div><span>1</span><section><h3>接続しているネットワークを確認する</h3><p>有線LAN、Wi-Fi、IPアドレスなどから、現在の接続先を確認します。</p></section></div><div><span>2</span><section><h3>使用しているスイッチやアクセスポイントを確認する</h3><p>端末がどの機器を経由してネットワークへ参加しているか確認します。</p></section></div><div><span>3</span><section><h3>VLANを確認する</h3><p>端末やポートが所属する論理的なネットワークを確認します。</p></section></div><div><span>4</span><section><h3>デフォルトゲートウェイを確認する</h3><p>別のネットワークへ通信を渡す出口を確認します。</p></section></div><div><span>5</span><section><h3>通信経路上のL3スイッチやルーターを確認する</h3><p>異なるネットワーク間を中継する機器を確認します。</p></section></div><div><span>6</span><section><h3>ファイアウォールや外部接続を確認する</h3><p>社外へ出る通信が許可され、外部接続が正常か確認します。</p></section></div></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid network-trouble-grid"><div><span>1</span><h3>LANケーブルを接続しても通信できない</h3><p>ケーブル、アダプター、スイッチポートを順番に確認します。</p></div><div><span>2</span><h3>Wi-Fiに接続できるが社内ネットワークへ接続できない</h3><p>SSID、IP設定、VLAN、社内ネットワークへの経路を確認します。</p></div><div><span>3</span><h3>同じVLANでは通信できるが別VLANへ通信できない</h3><p>デフォルトゲートウェイやL3スイッチ・ルーターを確認します。</p></div><div><span>4</span><h3>一部のフロアだけ通信できない</h3><p>対象フロアのスイッチや上位接続、電源状態を確認します。</p></div><div><span>5</span><h3>社内通信はできるがインターネットへ接続できない</h3><p>ファイアウォール、DNS、外部接続側を確認します。</p></div><div><span>6</span><h3>同じスイッチに接続しているのに通信できない</h3><p>VLANが異なると、物理的に同じスイッチへ接続していても別のネットワークとして扱われます。</p></div></div>

### 確認に使う主なコマンド

<div class="network-command-list"><div><code>ipconfig /all</code><p>ネットワーク設定を確認します。</p></div><div><code>ping</code><p>指定した相手までIP通信できるか確認します。</p></div><div><code>tracert</code><p>通信経路を確認します。</p></div><div><code>arp -a</code><p>PCが認識しているIPv4アドレスとMACアドレスの対応を確認します。</p></div><div><code>Get-NetAdapter</code><p>Windowsのネットワークアダプターの状態を確認します。</p></div></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/></svg></span><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><span class="wsus-practice-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>Wi-Fiが接続済みなのでネットワークも正常と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>IP設定と目的のネットワークへの通信まで確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>同じスイッチにつながっているから同じネットワークだと思う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>VLANとIPネットワークを確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>通信できないのでPCだけを確認する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>PCから通信先までの経路を順番に確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>ルーター、L3スイッチ、ファイアウォールを同じ役割だと考える</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>機器名ではなく、それぞれが担当している役割を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>別ネットワークへ通信できないのでDNSだけを変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>ゲートウェイ、ルーティング、ファイアウォール、DNSを役割ごとに切り分ける</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>社内ネットワークは複数の機器で構成される</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">PC、スイッチ、ルーター、L3スイッチ、ファイアウォールなどが役割を分担します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>同じネットワークと別のネットワークでは通信経路が異なる</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">別ネットワークへの通信ではL3スイッチやルーターなどが必要です。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>VLANは物理的な接続とは別にネットワークを分ける</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">同じスイッチに接続していても、異なるVLANなら別ネットワークになることがあります。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>障害時は通信経路を順番に確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">PCだけでなく、スイッチ、ゲートウェイ、ファイアウォールなど途中の機器も確認します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages network-related-pages"><a href="./ip-address"><span>ネットワーク</span><strong>IPアドレス</strong><p>通信相手を識別する番号とネットワーク設定</p></a><a href="./dhcp"><span>ネットワーク</span><strong>DHCP</strong><p>端末へネットワーク設定を自動配布する仕組み</p></a><a href="./dns"><span>ネットワーク</span><strong>DNS</strong><p>名前から接続先のIPアドレスを調べる仕組み</p></a><div class="is-pending"><span>準備中</span><strong>ルーティング</strong><p>異なるネットワーク間の通信経路</p></div><div class="is-pending"><span>準備中</span><strong>ネットワークトラブルシューティング</strong><p>通信障害を順番に切り分ける方法</p></div></div>

<p class="network-last-updated">最終更新：2026/08/17</p>
