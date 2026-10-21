---
title: コマンドプロンプト
description: Windowsでコマンドを実行し、状態確認やトラブル切り分けを行うための基本を学びます。
outline: false
pageClass: wsus-page registry-page command-prompt-page
lastUpdated: false
---

# コマンドプロンプト

<p class="article-subtitle">Windowsでコマンドを実行し、状態確認やトラブル切り分けを行うための基本ツール</p>
<p class="article-summary">コマンドプロンプトは、文字でコマンドを入力してWindowsへ処理を指示するためのツールです。社内ITでは、設定変更だけでなく、端末やネットワークの状態を素早く確認するためにも利用します。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、Windows Server<br>社内PC・管理対象端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年10月</strong></div>
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

<p>コマンドプロンプトは、文字でコマンドを入力してWindowsへ処理を指示するためのツールです。Windowsでは <code>cmd.exe</code> が入力されたコマンドを解釈して実行します。</p>
<p>社内ITでは、ネットワーク情報、PC名、ユーザー情報、ファイルやフォルダー、通信状態などを素早く確認するためにも利用します。</p>
<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>コマンドプロンプトは、難しい操作をするためだけの画面ではありません。Windowsの状態を文字で確認・操作するための基本的な入口です。初心者は、まず設定変更よりも状態確認に使うことを意識します。</p></div>

### 画面操作とコマンド

<div class="registry-root-grid"><div><strong>画面操作（GUI）</strong><p>画面上のボタン、メニュー、設定画面などを使って操作します。状態を目で確認しやすい方法です。</p></div><div><strong>コマンド</strong><p>決められた文字列を入力して処理を実行します。同じ情報を素早く確認したり、結果を記録したりするときに便利です。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>目的に応じて使い分ける</strong><p>設定画面とコマンドは、どちらか一方だけを使うものではありません。確認する内容や作業の目的に応じて使い分けます。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>コマンドプロンプトはなぜ重要なのか {#why-important}

<p>社内ITでは、問題の原因を判断する前に、端末の現在の状態を正確に確認する必要があります。コマンドを使うと、複数の確認項目を文字情報として取得できます。</p>
<div class="process-steps process-steps--three"><div><span>01</span><section><h3>ネットワーク情報</h3></section><p>IPアドレスやゲートウェイ、DNSなどを確認します。</p></div><div><span>02</span><section><h3>PC名</h3></section><p>操作している端末を識別します。</p></div><div><span>03</span><section><h3>通信状態</h3></section><p>接続先との基本的な通信を確認します。</p></div><div><span>04</span><section><h3>名前解決</h3></section><p>名前がどのIPアドレスへ解決されるか確認します。</p></div><div><span>05</span><section><h3>現在のユーザー</h3></section><p>どのユーザーで操作しているか確認します。</p></div><div><span>06</span><section><h3>グループ情報</h3></section><p>ユーザーに関係するグループ情報を確認します。</p></div></div>
<p>コマンドを使う目的は、たくさんの命令を覚えることではなく、必要な情報を正確に確認することです。</p>
<div class="standard-callout standard-callout--admin"><strong>状態確認から使う</strong><p>トラブル対応では、いきなり設定変更コマンドを実行せず、まず現在の状態を確認します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>ネットワーク情報を確認する</h3><p><strong>状況</strong><br>PCがネットワークへ接続できない。</p><p><strong>具体例</strong><br><code>ipconfig</code> や <code>ipconfig /all</code> で、IPアドレス、デフォルトゲートウェイ、DNSサーバーなどを確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>表示だけで原因を断定せず、DHCP、DNS、ネットワーク機器などと合わせて確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>接続先との通信を確認する</h3><p><strong>状況</strong><br>サーバーや別のPCへ接続できない。</p><p><strong>具体例</strong><br><code>ping</code> を使って基本的なIP通信を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>Pingが成功しても、RDP、Web、ファイル共有などを利用できるとは限りません。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>名前解決を確認する</h3><p><strong>状況</strong><br>IPアドレスでは通信できるが、PC名やサーバー名では接続できない。</p><p><strong>具体例</strong><br><code>nslookup</code> で、名前がどのIPアドレスへ解決されるか確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>ネットワーク通信とDNSによる名前解決を分けて考えます。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>ユーザーと権限を確認する</h3><p><strong>状況</strong><br>どのユーザーで操作しているか、所属グループを確認したい。</p><p><strong>具体例</strong><br><code>whoami</code> と <code>whoami /groups</code> を使います。</p><p class="scenario-point"><strong>確認ポイント</strong><br>Administrators所属と、現在のコマンドプロンプトが管理者として昇格していることは同じではありません。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### コマンドは「何をするか」と「追加指定」で考える

<p>コマンドは、基本となるコマンド名と、必要に応じたオプションや対象の指定を組み合わせて使います。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>ipconfig</code></strong><p>基本的なネットワーク情報を表示します。</p></div><div><strong><code>ipconfig /all</code></strong><p>より詳しいネットワーク情報を表示します。</p></div><div><strong><code>ping server01</code></strong><p><code>server01</code> を対象として通信を確認します。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>指定方法はコマンドごとに異なる</strong><p>似た書き方であっても、すべてのコマンドで同じオプションを使えるわけではありません。</p></div>

### ヘルプを確認する

<p>多くのWindowsコマンドでは、コマンド名の後ろに <code>/?</code> を付けると使用方法を確認できます。</p>
<div class="registry-root-grid"><div><strong><code>ipconfig /?</code></strong><p><code>ipconfig</code> の使用方法を確認します。</p></div><div><strong><code>whoami /?</code></strong><p><code>whoami</code> の使用方法を確認します。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>推測して実行しない</strong><p>オプションを正確に覚えていない場合は、推測して実行せず、ヘルプやMicrosoftの公式資料を確認します。</p></div>

### コマンドプロンプトを開く

<p>スタートメニューで「コマンド プロンプト」を検索して開けます。また、「ファイル名を指定して実行」で <code>cmd</code> を実行する方法もあります。</p>

### 通常実行と管理者として実行

<div class="registry-root-grid"><div><strong>通常のコマンドプロンプト</strong><p>情報確認など、通常ユーザーで利用できるコマンドを実行します。</p></div><div><strong>管理者として実行</strong><p>システム設定の変更など、管理者権限が必要な操作で使用する場合があります。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>開いただけでは管理者権限にならない</strong><p>「コマンドプロンプトを開いた」ことと、「管理者としてコマンドプロンプトを開いた」ことは別です。必要な操作だけを管理者として実行します。</p></div>
<p>管理者として起動するときは、「コマンド プロンプト」を右クリックして「管理者として実行」を選択します。UACや昇格については、関連ページの「<a href="./administrator-privileges">管理者権限</a>」で確認します。</p>

### 現在のフォルダー

<p>コマンドプロンプトでは、現在どのフォルダーにいるかが重要です。例えば <code>C:\Users\User&gt;</code> と表示されている場合、現在のフォルダーは <code>C:\Users\User</code> です。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>dir</code></strong><p>現在のフォルダー内のファイルやフォルダーを確認します。</p></div><div><strong><code>cd Documents</code></strong><p>現在のフォルダー内に <code>Documents</code> フォルダーがある場合、そのフォルダーへ移動します。<code>cd ..</code> では一つ上の階層へ戻ります。</p></div><div><strong><code>cls</code></strong><p>コマンドプロンプトの画面表示を消します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>操作対象を確認する</strong><p>ファイル操作では、現在どのフォルダーを対象にしているか確認します。この基礎ページでは、削除や初期化を行うコマンドは扱いません。</p></div>

### よく使う確認コマンド

<p>すべてを暗記するのではなく、何を確認するためのコマンドかを理解します。</p>

#### PC・ユーザーを確認する

<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>hostname</code></strong><p>現在のPC名を確認します。</p></div><div><strong><code>whoami</code></strong><p>現在のユーザーを確認します。通常は <code>ドメイン名\ユーザー名</code> などの形式で表示されます。</p></div><div><strong><code>whoami /groups</code></strong><p>現在のユーザーに関係するグループ情報を確認します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>グループ所属と昇格状態は別</strong><p>Administratorsグループに関する情報が表示されても、それだけで現在のプロセスが管理者として昇格しているとは判断しません。</p></div>

#### ネットワークを確認する

<div class="registry-root-grid"><div><strong><code>ipconfig</code></strong><p>基本的なIP情報を確認します。</p></div><div><strong><code>ipconfig /all</code></strong><p>IPv4・IPv6アドレス、サブネットマスク、デフォルトゲートウェイ、DNSサーバー、DHCP関連情報などを確認します。</p></div><div><strong><code>ping 192.168.1.1</code></strong><p>IPアドレスを指定して、対象との基本的なIP通信を確認します。</p></div><div><strong><code>ping server01</code></strong><p>名前を指定するため、基本的な通信に加えて名前解決も関係します。</p></div><div><strong><code>nslookup server01</code></strong><p>名前がどのIPアドレスへ解決されるか確認します。</p></div><div><strong><code>tracert server01</code></strong><p>宛先までのネットワーク経路を確認するときに利用します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>Ping成功は、すべての通信が正常という意味ではない</strong><p>RDP、Web、ファイル共有などは別の通信条件を確認する必要があります。また、<code>tracert</code> の途中に <code>*</code> が表示されても、ルーターが応答しない場合があるため、それだけで障害とは断定しません。</p></div>

#### ローカルユーザーとグループを確認する

<div class="registry-root-grid"><div><strong><code>net user</code></strong><p>現在のPCにあるローカルユーザーを確認します。</p></div><div><strong><code>net user username</code></strong><p>指定したローカルユーザーの情報を確認します。</p></div><div><strong><code>net localgroup</code></strong><p>ローカルグループの一覧を確認します。</p></div><div><strong><code>net localgroup administrators</code></strong><p>Administratorsグループを確認する例です。環境によって表示名などが異なる場合があるため、コマンドだけを暗記せず、表示結果も確認します。</p></div></div>
<p>ドメイン側を対象にする場合は <code>/domain</code> が関係しますが、このページでは詳細なドメインユーザー管理は扱いません。ローカルPCのユーザーとドメインのユーザーを混同しないことが重要です。</p>
<div class="standard-callout standard-callout--warning"><strong>確認目的と変更目的を分ける</strong><p><code>net user</code> にはユーザーを追加・変更・削除する機能もありますが、このページでは確認用途だけを扱います。</p></div>

### 実行結果を読む

<p>コマンド実行後には、正常結果、エラーメッセージ、警告、名前、IPアドレス、ファイルパス、数値などが表示されます。重要なのは、コマンドを実行したことではなく、表示された結果が何を意味するか確認することです。</p>
<div class="standard-callout standard-callout--admin"><strong>結果を確認してから次へ進む</strong><p>コマンドを実行したら、次のコマンドへ進む前に結果を確認します。</p></div>

### 実行結果をコピー・共有するとき

<p>コマンド出力には、PC名、ユーザー名、IPアドレス、ドメイン名、ネットワーク情報、ファイルパスなどが含まれる場合があります。</p>
<div class="standard-callout standard-callout--warning"><strong>出力結果も社内情報として扱う</strong><p>組織が許可していない場所へコマンド結果を不用意に貼り付けず、社内ルールに従って扱います。</p></div>

### パイプとリダイレクト

<p>コマンド結果を読みやすくしたり、ファイルへ記録したりするための記号があります。このページでは役割だけを確認します。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>|</code> パイプ</strong><p><code>ipconfig /all | more</code> のように、前のコマンドの出力を次のコマンドへ渡します。</p></div><div><strong><code>&gt;</code> リダイレクト</strong><p><code>ipconfig /all &gt; network.txt</code> のように、実行結果をファイルへ出力します。既存ファイルを指定した場合、その内容を上書きします。</p></div><div><strong><code>&gt;&gt;</code> 追記</strong><p><code>ipconfig &gt;&gt; network.txt</code> のように、既存ファイルの内容を残したまま、末尾へ結果を追記します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>記号と対象ファイルを確認する</strong><p><code>&gt;</code> と <code>&gt;&gt;</code> は動作が異なるため、既存ファイルへ出力するときは記号と対象ファイルを確認します。</p></div>

### コマンドプロンプトとPowerShell

<div class="registry-root-grid"><div><strong>コマンドプロンプト</strong><p>Windowsで長く利用されている従来のコマンドライン環境です。Windowsコマンドや既存の管理ツール、トラブル切り分けなどで現在も利用されます。</p></div><div><strong>PowerShell</strong><p>Windows管理や自動化をより強力に行うためのコマンドライン環境です。複雑な管理、繰り返し作業、スクリプトなどで利用されます。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>目的に応じて選ぶ</strong><p>PowerShellがあるためコマンドプロンプトが不要、という関係ではありません。PowerShellの詳しい仕組みは別ページで扱います。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>まず確認系コマンドから使う</strong><p>設定変更より先に、現在の状態を確認します。</p></div><div><span>2</span><strong>コマンドの意味を確認する</strong><p>Webサイトやチャットなどで見つけたコマンドを、意味を理解せずそのまま実行しません。</p></div><div><span>3</span><strong>管理者権限が必要か確認する</strong><p>必要な操作だけを管理者として実行します。</p></div><div><span>4</span><strong>実行対象を確認する</strong><p>PC名、IPアドレス、ユーザー名、ファイルパスなど、何を対象にしているか確認します。</p></div><div><span>5</span><strong>実行結果を読む</strong><p>表示された状態やエラーを確認してから、次の操作へ進みます。</p></div><div><span>6</span><strong>影響と復旧方法を確認する</strong><p>設定を変更する場合は、影響範囲と元に戻す方法を事前に確認します。</p></div></div>

### トラブル確認の基本的な流れ

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>何を確認したいのか決める</p></div><i>↓</i><div><span>02</span><p>対象PC・ユーザー・ネットワークを確認する</p></div><i>↓</i><div><span>03</span><p>確認目的に合うコマンドを選ぶ</p></div><i>↓</i><div><span>04</span><p>必要なオプション・対象を確認する</p></div><i>↓</i><div><span>05</span><p>コマンドを実行する</p></div><i>↓</i><div><span>06</span><p>表示された結果を確認する</p></div><i>↓</i><div><span>07</span><p>必要に応じて次の確認へ進む</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>必要なコマンドだけを使う</strong><p>コマンドをたくさん実行することが目的ではありません。何を確認したいのかを決め、必要なコマンドだけを使います。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>コマンドが見つからない</h3><p>入力ミス、コマンド名、現在のWindows環境で利用できるかを確認します。</p></div><div><span>2</span><h3>「アクセスが拒否されました」と表示される</h3><p>管理者権限が必要か、対象へのアクセス権に問題がないか確認します。管理者権限不足だけが原因とは限りません。</p></div><div><span>3</span><h3>実行結果が想定と違う</h3><p>実行したPC、ユーザー、オプション、対象、現在のフォルダーを確認します。</p></div><div><span>4</span><h3>PC名ではPingできないがIPアドレスではできる</h3><p>DNSなどの名前解決を確認します。ネットワーク全体の障害とすぐに判断しません。</p></div><div><span>5</span><h3>Pingできるのにサービスへ接続できない</h3><p>PingとRDP、Web、ファイル共有などは別の通信です。対象サービス、ポート、ファイアウォールなどを確認します。</p></div><div><span>6</span><h3>管理者グループなのに操作できない</h3><p>Administrators所属だけでなく、現在のコマンドプロンプトが昇格しているか、対象へのアクセス権があるか確認します。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>コマンドプロンプトは詳しい管理者だけが使うもの</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>IPアドレスやユーザー情報など、基本的な状態確認にも利用できます</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>黒い画面でコマンドを実行すれば管理者権限になる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>通常起動と「管理者として実行」は別です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>Pingが成功すればネットワークはすべて正常</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>Pingで確認できるのは一部です。対象サービスは別に確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>Webで見つけたコマンドはそのまま実行してよい</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>意味、対象、必要な権限、影響を確認してから実行します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>エラーが表示されたらコマンド自体が使えない</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>入力ミス、権限、対象、環境など複数の原因があります</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>目的</strong><p>何を確認・変更したいのか。</p></div><div><strong>対象</strong><p>どのPC、ユーザー、ネットワーク、ファイルが対象か。</p></div><div><strong>権限</strong><p>通常ユーザーで実行できるか、管理者権限が必要か。</p></div><div><strong>結果</strong><p>表示された結果が何を示しているか。</p></div></div>
<p>この4つを分けて考えると、意味を理解せずにコマンドを実行することを防ぎやすくなります。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>Windowsへ文字で命令を実行するための基本ツール</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">ネットワーク、PC、ユーザー、ファイルなどの状態確認に利用できます。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>変更より先に確認系コマンドから覚える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail"><code>hostname</code>、<code>ipconfig</code>、<code>ping</code>、<code>nslookup</code>、<code>whoami</code> などで現在の状態を確認します。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>通常実行と管理者として実行は別</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">必要な操作だけを管理者権限で実行し、常に昇格して使う必要はありません。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>目的と結果を理解することが重要</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">対象、権限、実行結果を確認しながら問題を切り分けます。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="../network/ip-address"><strong>IPアドレス</strong><p>端末のネットワーク設定を確認する基本</p></a><a href="../network/dns"><strong>DNS</strong><p>名前からIPアドレスを調べる仕組み</p></a><a href="../network/basic-structure"><strong>ネットワークの基本構成</strong><p>端末から接続先までの構成を理解する基本</p></a><a href="./administrator-privileges"><strong>管理者権限</strong><p>昇格と安全な管理作業の考え方</p></a><a href="./powershell"><strong>PowerShell</strong><p>cmdletとオブジェクトを使うWindows管理の基本</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>問題の原因を順番に切り分ける方法</p></a></div>

<p class="registry-last-updated">最終更新：2026/10/14</p>
