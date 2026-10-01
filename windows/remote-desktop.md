---
title: リモートデスクトップ
description: Windows PCへ遠隔接続し、安全に操作・管理するための基本を学びます。
outline: false
pageClass: wsus-page registry-page remote-desktop-page
lastUpdated: false
---

# リモートデスクトップ

<p class="article-subtitle">Windows PCへ遠隔接続し、操作・管理するための基本機能</p>
<p class="article-summary">リモートデスクトップは、離れた場所にあるWindows PCへネットワーク経由で接続し、そのPCのデスクトップを操作するための機能です。社内PCやWindows Serverの設定確認、管理作業、遠隔でのトラブル対応などに利用されます。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、Windows Server<br>社内PC・管理対象端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年9月</strong></div>
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

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>接続すると、自分の端末上に接続先Windowsのデスクトップが表示され、キーボードやマウスを使って遠隔操作できます。</p></div>
<div class="remote-connection-flow"><div><strong>接続元PC</strong><span>操作する側</span></div><i>→</i><div><strong>ネットワーク</strong><span>通信経路</span></div><i>→</i><div><strong>接続先PC</strong><span>操作される側</span></div></div>
<p>リモートデスクトップでは、単に画面を共有するのではなく、接続先Windowsへユーザーとしてログオンし、リモートセッションを利用します。</p>
<div class="standard-callout standard-callout--info"><strong>画面共有とは目的が異なる</strong><p>Teamsなどの画面共有は、現在利用しているユーザーの画面を一緒に確認する用途で使われることが多いのに対し、リモートデスクトップは接続先PCへログオンして操作するために利用されます。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>リモートデスクトップはなぜ重要なのか {#why-important}

<p>社内ITでは、利用者が別フロアや別拠点にいる、管理対象PCが遠隔地にある、サーバーがサーバールームに設置されているなど、現地へ行かずに確認・作業する必要があります。そのようなときに、リモートデスクトップは重要な管理手段になります。</p>
<div class="remote-requirements"><div><strong>端末</strong><p>接続先PCが起動している</p></div><div><strong>ネットワーク</strong><p>接続元から接続先まで通信できる</p></div><div><strong>設定</strong><p>リモートデスクトップが有効</p></div><div><strong>権限</strong><p>リモートログオンが許可されている</p></div><div><strong>ファイアウォール</strong><p>RDPに必要な通信が許可されている</p></div><div><strong>認証</strong><p>認証情報が正しい</p></div></div>
<div class="standard-callout standard-callout--key"><strong>「接続できない」だけで原因を決めない</strong><p>接続には複数の条件があります。ネットワーク障害と決めつけず、どの段階で問題が起きているかを切り分けます。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>社内PCを遠隔で確認する</h3><p><strong>状況</strong><br>利用者から、PCの設定を確認してほしいと問い合わせがあった。</p><p><strong>具体例</strong><br>別フロアや別拠点のPCへ接続し、Windows設定、イベントログ、サービス状態などを確認する。</p><p class="scenario-point"><strong>確認ポイント</strong><br>利用者が作業中ではないか、その端末へ接続してよいかを事前に確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>サーバーを管理する</h3><p><strong>状況</strong><br>管理者がWindows Serverの状態を確認する必要がある。</p><p><strong>具体例</strong><br>サーバールームへ行かずに接続し、設定確認や管理作業を行う。</p><p class="scenario-point"><strong>確認ポイント</strong><br>誤操作の影響が大きいため、接続先と作業内容を確認してから操作します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>在宅勤務から社内PCへ接続する</h3><p><strong>状況</strong><br>社外から社内環境のPCを利用する必要がある。</p><p><strong>具体例</strong><br>会社が指定したVPNなどの接続方法を利用して、社内PCへ接続する。</p><p class="scenario-point"><strong>確認ポイント</strong><br>社外から直接接続できるとは限りません。会社指定のリモートアクセス方式を利用します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>トラブル対応で遠隔確認する</h3><p><strong>状況</strong><br>利用者PCで問題が発生しているが、管理者が現地にいない。</p><p><strong>具体例</strong><br>接続して、設定、サービス、ログ、ネットワーク情報などを確認する。</p><p class="scenario-point"><strong>確認ポイント</strong><br>接続自体ができない場合は、別の方法で状況を確認し、端末やネットワークから切り分けます。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### 接続するために必要なもの

<div class="remote-requirements"><div><strong>PC名・IPアドレス</strong><p>どのPCへ接続するかを指定します。</p></div><div><strong>ネットワーク</strong><p>接続元から接続先まで通信できる必要があります。</p></div><div><strong>RDP設定</strong><p>接続先で利用できる状態にします。</p></div><div><strong>ユーザーアカウント</strong><p>接続先へログオンできるアカウントが必要です。</p></div><div><strong>リモートログオン権限</strong><p>そのPCへの接続が許可されている必要があります。</p></div><div><strong>ファイアウォール</strong><p>必要な通信が許可されている必要があります。</p></div></div>

### 接続元と接続先

<div class="registry-root-grid"><div><strong>接続元</strong><p>リモートデスクトップを開始し、操作する側の端末です。</p></div><div><strong>接続先</strong><p>実際に操作されるWindows PCやWindows Serverです。</p></div></div>
<p>「接続を開始する側」と「接続を受ける側」を分けて考えます。</p>
<div class="standard-callout standard-callout--key"><strong>設定を確認する側に注意する</strong><p>「リモートデスクトップが有効か」を確認するのは、基本的に接続先PC側です。</p></div>

### PC名とIPアドレス

<p>接続先は、一般的にPC名またはIPアドレスで指定します。PC名で接続する場合は、DNSなどによって名前からIPアドレスを確認できる必要があります。</p>
<div class="registry-tree"><span>IPアドレスでは接続できる</span><i>↓</i><span>PC名では接続できない</span><i>↓</i><span>名前解決を確認する</span></div>
<div class="standard-callout standard-callout--admin"><strong>名前解決とRDP自体の問題を分ける</strong><p>PC名で接続しているのか、IPアドレスで接続しているのかを確認し、名前解決の問題とRDP自体の問題を分けて考えます。</p></div>

### Windowsのエディション

<p>Windows PCを接続先として利用する場合は、対応するWindowsエディションが必要です。Windows 11では、主にPro、Enterprise、Educationを接続先として利用できます。</p>
<p>Windows Serverも、リモートデスクトップの接続先として利用できます。</p>
<div class="registry-root-grid"><div><strong>Pro・Enterprise・Education</strong><p>標準のリモートデスクトップ機能の接続先として利用できます。</p></div><div><strong>Home</strong><p>別のPCへ接続する側にはなれますが、標準機能で接続を受ける側にはできません。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>設定が見つからないときはエディションも確認する</strong><p>設定が表示されない、接続を受けられない場合は、接続先Windowsのエディションを確認します。</p></div>

### リモートデスクトップを有効にする

<p>Windows 11では通常、「設定 → システム → リモート デスクトップ」で確認します。接続先PC側で有効になっている必要があります。</p>
<div class="standard-callout standard-callout--info"><strong>会社PCでは管理設定を確認する</strong><p>グループポリシーなどで制御されている場合があります。「設定を変更できない＝故障」とは判断しません。</p></div>

### 接続する

<p>Windowsの「リモート デスクトップ接続」を使用します。「ファイル名を指定して実行」やコマンドから <code>mstsc</code> を実行して開くこともできます。</p>
<div class="remote-sequence remote-sequence--operation"><div><span>01</span><p>リモート デスクトップ接続を開く</p></div><i>↓</i><div><span>02</span><p>PC名またはIPアドレスを入力する</p></div><i>↓</i><div><span>03</span><p>接続する</p></div><i>↓</i><div><span>04</span><p>ユーザーアカウントで認証する</p></div><i>↓</i><div><span>05</span><p>リモートセッションを開始する</p></div></div>

### RDPとポート番号

<p>リモートデスクトップでは、RDP（Remote Desktop Protocol）が利用されます。標準構成ではTCP/UDP 3389番ポートが使われます。初心者の段階では、ポート番号を暗記するより、RDPにもネットワーク上の通信経路とファイアウォールの許可が必要だと理解することが重要です。</p>

### 認証と権限は別に考える

<p>一般ユーザーとして接続した場合、基本的にはそのユーザーが持つ権限で操作します。管理者権限が必要な操作では、UACや管理者資格情報が必要になる場合があります。</p>
<div class="standard-callout standard-callout--warning"><strong>リモート接続と管理者権限は別</strong><p>「リモートデスクトップで接続できた＝管理者権限を持っている」ではありません。</p></div>

### Network Level Authentication（NLA）

<p>NLAは、リモートセッションを開始する前にユーザー認証を行う仕組みです。通常は有効にした状態で利用します。</p>
<div class="standard-callout standard-callout--warning"><strong>理由を確認せず無効化しない</strong><p>接続できない場合でも、NLAを安易に無効化せず、接続条件や認証の状態を確認します。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>まず接続先を確認する</strong><p>似たPC名やサーバー名に注意し、作業対象が正しいか確認します。</p></div><div><span>2</span><strong>PCの状態を確認する</strong><p>電源、スリープ、休止状態など、接続先が利用できる状態か確認します。</p></div><div><span>3</span><strong>ネットワークを確認する</strong><p>同一ネットワークか、VPNが必要か、別拠点かを確認します。</p></div><div><span>4</span><strong>設定と権限を確認する</strong><p>RDPが有効でも、すべてのユーザーが接続できるわけではありません。</p></div><div><span>5</span><strong>変更前に切り分ける</strong><p>すぐにファイアウォール無効化やポリシー変更を行いません。</p></div><div><span>6</span><strong>社外へ直接公開しない</strong><p>社外利用では、VPNなど会社指定の安全な方式を利用します。</p></div></div>

### 接続できないときの基本的な確認順序

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>接続先PCは起動しているか</p></div><i>↓</i><div><span>02</span><p>PC名・IPアドレスは正しいか</p></div><i>↓</i><div><span>03</span><p>ネットワーク上で通信できるか</p></div><i>↓</i><div><span>04</span><p>リモートデスクトップが有効か</p></div><i>↓</i><div><span>05</span><p>ファイアウォールでRDP通信が許可されているか</p></div><i>↓</i><div><span>06</span><p>接続ユーザーにリモートログオン権限があるか</p></div><i>↓</i><div><span>07</span><p>認証情報は正しいか</p></div><i>↓</i><div><span>08</span><p>VPN・社内ポリシー・認証方式など追加条件がないか</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>一度に複数の設定を変更しない</strong><p>どの段階で問題が起きているかを順番に確認します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>接続先が見つからない</h3><p>PC名とDNSによる名前解決を確認します。IPアドレスなら接続できる場合は名前解決側を疑います。</p></div><div><span>2</span><h3>IPアドレスでも接続できない</h3><p>接続先の電源、ネットワーク、VPN、ファイアウォールを確認します。</p></div><div><span>3</span><h3>ネットワーク通信はできるがRDP接続できない</h3><p>接続先との通信を確認できる場合は、RDP設定、ファイアウォール、関連サービス、ポリシーを確認します。</p></div><div><span>4</span><h3>認証に失敗する</h3><p>ユーザー名形式、パスワード、接続先で利用できるアカウントかを確認します。</p></div><div><span>5</span><h3>接続権限がない</h3><p>ユーザーにリモートログオンが許可されているか確認します。</p></div><div><span>6</span><h3>接続後に管理作業ができない</h3><p>接続ユーザーの権限を確認します。リモート接続と管理者権限は別です。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>Pingが通ればRDPも必ず使える</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>PingとRDPは通信方式や条件が異なります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>管理者アカウントなら必ず接続できる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>リモートログオンの権限やポリシーも必要です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>接続できないならネットワーク障害</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>設定、通信、権限、認証を分けて確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>切断とサインアウトは同じ</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>切断ではセッションが残り、サインアウトでは終了します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>RDPを直接公開すれば簡単に社外利用できる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>VPNなど組織が定めた安全な方式を利用します</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-card-grid remote-foundation-grid"><div><strong>端末</strong><p>接続先PCは起動し、利用できる状態か。</p></div><div><strong>ネットワーク</strong><p>接続元から接続先まで通信できるか。</p></div><div><strong>RDP設定</strong><p>接続先でRDPが有効で、通信が許可されているか。</p></div><div><strong>認証・権限</strong><p>ユーザーが認証され、リモートログオンを許可されているか。</p></div></div>
<p>この4つを一つずつ確認すると、「接続できない」という大きな問題を小さく分けて考えられます。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>離れたWindows PCへ接続して操作する機能</strong></span><span class="takeaway-detail">社内PCやWindows Serverを現地へ行かずに管理するときに利用します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>接続には複数の条件がある</strong></span><span class="takeaway-detail">端末、ネットワーク、RDP設定、認証、権限などを順番に確認します。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>リモート接続と管理者権限は別</strong></span><span class="takeaway-detail">接続後の操作範囲は、そのユーザーが持つ権限で決まります。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>社外では安全な接続方式を優先する</strong></span><span class="takeaway-detail">RDPを直接公開せず、VPNなど組織が定めた方法を利用します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="../network/ip-address"><strong>IPアドレス</strong><p>接続先を識別するための基本</p></a><a href="../network/dns"><strong>DNS</strong><p>PC名からIPアドレスを調べる仕組み</p></a><a href="../network/basic-structure"><strong>ネットワークの基本構成</strong><p>接続経路と機器の役割</p></a><a href="./administrator-privileges"><strong>管理者権限</strong><p>接続後の権限と安全な使い方</p></a><a aria-disabled="true"><strong>Windowsファイアウォール</strong><p>準備中</p></a><a aria-disabled="true"><strong>VPN</strong><p>準備中</p></a></div>

<p class="registry-last-updated">最終更新：2026/09/29</p>
