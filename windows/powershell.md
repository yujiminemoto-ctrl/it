---
title: PowerShell
description: Windowsの状態確認・管理・自動化を行うためのPowerShellの基本を学びます。
outline: false
pageClass: wsus-page registry-page command-prompt-page powershell-page
lastUpdated: false
---

# PowerShell

<p class="article-subtitle">Windowsの状態確認・管理・自動化を行うためのコマンドライン環境</p>
<p class="article-summary">PowerShellは、Windowsの状態確認や管理、繰り返し作業の自動化に利用できるコマンドライン環境です。初心者は、まず確認系のcmdletと結果の見方から理解します。</p>

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

<p>PowerShellは、Windowsの状態確認、管理、繰り返し作業の自動化などに利用できるコマンドライン環境です。コマンドプロンプトと同じように文字でコマンドを実行できますが、Windows管理を効率よく行うためのcmdlet、オブジェクト、パイプライン、スクリプトなどの仕組みがあります。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>Get-Process</code></strong><p>実行中のプロセスを確認します。</p></div><div><strong><code>Get-Service</code></strong><p>Windowsサービスを確認します。</p></div><div><strong><code>Get-ComputerInfo</code></strong><p>Windowsや端末の情報を確認します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>PowerShellは、コマンドを大量に暗記するためのツールではありません。何を確認したいかを決め、必要なコマンドとヘルプを探し、結果を確認してから必要に応じて次の処理へ渡します。</p></div>

### コマンドプロンプトとPowerShell

<div class="registry-root-grid"><div><strong>コマンドプロンプト</strong><p>Windowsで長く利用されている従来のコマンドライン環境です。<code>ipconfig</code>、<code>ping</code>、<code>whoami</code> などのWindowsコマンドを使い、状態確認やトラブル切り分けを行えます。</p></div><div><strong>PowerShell</strong><p>Windows管理や自動化をより柔軟に行えるコマンドライン環境です。PowerShell専用のcmdletやスクリプトを利用できます。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>目的に応じて使い分ける</strong><p>PowerShellがあるためコマンドプロンプトが不要になるわけではありません。目的や利用するコマンドに応じて使い分けます。</p></div>

### Windows PowerShellとPowerShell

<div class="registry-root-grid"><div><strong>Windows PowerShell</strong><p>Windowsに標準搭載されている従来のPowerShellです。Windows 11では主にWindows PowerShell 5.1が利用されます。</p><p><strong>実行ファイル</strong><br><code>powershell.exe</code></p></div><div><strong>PowerShell</strong><p>現在も開発が続いているPowerShellで、Windows PowerShell 5.1とは別にインストールして並行利用できます。</p><p><strong>実行ファイル</strong><br><code>pwsh.exe</code></p></div></div>
<div class="standard-callout standard-callout--key"><strong>似ていますが同じ環境ではない</strong><p>Windows PowerShell 5.1とPowerShell 7では、利用できるモジュールや互換性が異なる場合があります。</p></div>

#### 現在のPowerShellバージョンを確認する

<div class="registry-command"><strong><code>$PSVersionTable.PSVersion</code></strong><p>現在実行しているPowerShellのバージョンを確認できます。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>PowerShellはなぜ重要なのか {#why-important}

<p>社内ITでは、画面を一つずつ開かなくても、PowerShellからWindowsのさまざまな状態を確認できます。</p>
<div class="process-steps process-steps--three"><div><span>01</span><section><h3>プロセス</h3></section><p>実行中のプログラムを確認します。</p></div><div><span>02</span><section><h3>Windowsサービス</h3></section><p>サービスの状態を確認します。</p></div><div><span>03</span><section><h3>PC情報</h3></section><p>Windowsや端末の基本情報を確認します。</p></div><div><span>04</span><section><h3>ネットワーク</h3></section><p>IPアドレスやDNSなどの構成を確認します。</p></div><div><span>05</span><section><h3>ファイル・フォルダー</h3></section><p>保存場所の内容を確認します。</p></div><div><span>06</span><section><h3>システム情報</h3></section><p>目的に応じたWindows情報を取得します。</p></div></div>
<p>PowerShellを使う目的は、コマンドを多く覚えることではなく、必要な情報を効率よく取得・整理することです。</p>
<div class="standard-callout standard-callout--admin"><strong>状態確認から始める</strong><p>PowerShellには <code>Get</code> から始まる確認系cmdletが多くあります。初心者は、いきなり設定を変更せず、まず情報を取得する処理から利用します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>Windowsサービスを確認する</h3><p><strong>状況</strong><br>アプリケーションやWindows機能が正常に動作していない。</p><p><strong>具体例</strong><br><code>Get-Service</code> を使ってサービスの状態を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>停止していることだけで原因を断定せず、関連設定やイベントログなども確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>実行中のプロセスを確認する</h3><p><strong>状況</strong><br>PCの動作が重い、または特定のアプリケーションが動作しているか確認したい。</p><p><strong>具体例</strong><br><code>Get-Process</code> で現在のプロセスを確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>プロセス名だけで不要と判断して終了せず、役割や影響を確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>ネットワーク情報を確認する</h3><p><strong>状況</strong><br>ネットワークトラブルを切り分けたい。</p><p><strong>具体例</strong><br><code>Get-NetIPConfiguration</code> でネットワーク構成を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>取得した情報だけで原因を断定せず、DNS、DHCP、ネットワーク機器なども合わせて確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>PC情報を確認する</h3><p><strong>状況</strong><br>Windowsや端末の基本情報をまとめて確認したい。</p><p><strong>具体例</strong><br><code>Get-ComputerInfo</code> などを利用します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>情報量が多いため、何を確認したいのかを決めてから結果を見ます。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### cmdletとは

<p>PowerShellで利用される専用コマンドの一種を、cmdlet（コマンドレット）と呼びます。多くのcmdletは、<code>Get-Process</code> のように「動詞－名詞（Verb-Noun）」の形式で名前が付いています。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>Get-Process</code></strong><p>プロセスを取得します。</p></div><div><strong><code>Get-Service</code></strong><p>サービスを取得します。</p></div><div><strong><code>Get-NetIPConfiguration</code></strong><p>ネットワーク構成を取得します。</p></div></div>

### cmdletは「動詞－名詞」で考える

<div class="registry-root-grid"><div><strong><code>Get-Process</code></strong><p><code>Get</code> は情報を取得する動詞、<code>Process</code> は対象を表す名詞です。</p></div><div><strong><code>Get-Service</code></strong><p><code>Get</code> は情報を取得する動詞、<code>Service</code> は対象を表す名詞です。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>「何をするか」＋「何を対象にするか」</strong><p>すべてのPowerShellコマンドが完全に同じ命名規則になるわけではありませんが、cmdletを理解・検索する重要な手掛かりになります。</p></div>

### よく見る動詞

<div class="registry-root-grid"><div><strong>Get</strong><p>情報を取得します。</p></div><div><strong>Set</strong><p>設定を変更します。</p></div><div><strong>New</strong><p>新しく作成します。</p></div><div><strong>Remove</strong><p>削除します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>変更系cmdletは影響を確認する</strong><p><code>Set</code>、<code>New</code>、<code>Remove</code> などは環境を変更する場合があります。初心者は、まず <code>Get</code> を中心に確認系cmdletから利用します。</p></div>

### コマンドを探す

<div class="registry-command"><strong><code>Get-Command *Service*</code></strong><p>名前に <code>Service</code> を含むコマンドを探す例です。</p></div>
<div class="standard-callout standard-callout--admin"><strong>推測して実行しない</strong><p>コマンド名を推測して実行するより、<code>Get-Command</code> や公式資料で確認します。</p></div>

### ヘルプを確認する

<div class="registry-root-grid"><div><strong><code>Get-Help Get-Service</code></strong><p><code>Get-Service</code> の説明を確認します。</p></div><div><strong><code>Get-Help Get-Service -Examples</code></strong><p>使用例を確認します。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>暗記に頼らない</strong><p>パラメーターや使い方を正確に覚えていない場合は、ヘルプを確認します。</p></div>

### パラメーター

<p><code>Get-Service -Name Spooler</code> は、cmdlet、パラメーター、値を組み合わせた例です。</p>
<div class="registry-root-grid command-prompt-three-grid"><div><strong>cmdlet</strong><p><code>Get-Service</code></p></div><div><strong>パラメーター</strong><p><code>-Name</code></p></div><div><strong>値</strong><p><code>Spooler</code></p></div></div>

### PowerShellはオブジェクトを扱う

<p>PowerShellのcmdletは、多くの場合、単なる表示文字ではなく、構造を持つオブジェクトを出力します。例えば <code>Get-Service</code> を実行すると、画面には <code>Status</code>、<code>Name</code>、<code>DisplayName</code> などが表示されます。PowerShell内部では、取得したサービス情報をオブジェクトとして扱えます。</p>
<div class="standard-callout standard-callout--key"><strong>表示される表が情報のすべてとは限らない</strong><p>画面に表示されていない情報をオブジェクトが持っている場合があります。</p></div>
<div class="standard-callout standard-callout--info"><strong>cmdletと外部コマンドを区別する</strong><p>PowerShell cmdletではオブジェクトを扱えることが大きな特徴です。一方、<code>ipconfig</code> や <code>ping</code> などの外部コマンドでは、出力が文字列として扱われる場合があります。</p></div>

### Get-Member

<div class="registry-command"><strong><code>Get-Service | Get-Member</code></strong><p>取得したオブジェクトがどのような情報を持っているか確認できます。画面に見えていない情報もあることを理解するための例です。</p></div>

### パイプライン

<p><code>|</code> を使うと、前のコマンドの結果を次の処理へ渡せます。PowerShell cmdlet同士のパイプラインでは、主にオブジェクトを次のcmdletへ渡します。</p>
<div class="registry-command"><strong><code>Get-Service | Get-Member</code></strong><p><code>Get-Service</code> が取得したオブジェクトを <code>Get-Member</code> へ渡します。</p></div>

#### パイプの考え方の違い

<div class="registry-root-grid"><div><strong>コマンドプロンプト</strong><p>主にコマンドの文字出力を次の処理へ渡します。</p></div><div><strong>PowerShell</strong><p>PowerShell cmdletでは、構造を持つオブジェクトを次のcmdletへ渡せます。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>外部コマンドは別に考える</strong><p>初心者は「コマンドプロンプトは主に文字出力、PowerShell cmdletはオブジェクト」と理解すれば十分です。PowerShell内で外部コマンドを実行した場合まで、すべてがオブジェクトになるわけではありません。</p></div>

### 必要な情報だけを見る

<div class="registry-command"><strong><code>Get-Service | Select-Object Name, Status</code></strong><p>取得したサービス情報から、<code>Name</code> と <code>Status</code> だけを表示する例です。</p></div>
<div class="standard-callout standard-callout--admin"><strong>確認目的に合わせて絞る</strong><p>大量の情報をすべて読むのではなく、何を確認したいかを決めて必要な情報に絞ります。</p></div>

### 条件に合う情報を見る

<div class="registry-command"><strong><code>Get-Service | Where-Object Status -eq 'Running'</code></strong><p>取得したサービスのうち、実行中のものだけを絞り込む例です。</p></div>

### よく使う確認cmdlet

<p>コマンド一覧として暗記するのではなく、何を確認するためのcmdletかを理解します。</p>
<div class="registry-card-grid"><div><strong><code>Get-Process</code></strong><p>実行中のプロセスを確認します。</p></div><div><strong><code>Get-Service</code></strong><p>Windowsサービスを確認します。</p></div><div><strong><code>Get-ComputerInfo</code></strong><p>WindowsやPCに関する情報を確認します。</p></div><div><strong><code>Get-NetIPConfiguration</code></strong><p>IPアドレスやDNSサーバーなどのネットワーク構成を確認します。</p></div><div><strong><code>Get-Date</code></strong><p>現在の日付と時刻を確認します。</p></div><div><strong><code>Get-ChildItem</code></strong><p>ファイルやフォルダーなどを一覧表示します。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>cmdlet名を優先して理解する</strong><p>PowerShellでは <code>dir</code> のような別名を利用できる場合もありますが、このページではPowerShell本来のcmdlet名を優先します。</p></div>

### 従来のWindowsコマンドも実行できる

<div class="registry-root-grid command-prompt-three-grid"><div><strong><code>ipconfig</code></strong><p>ネットワーク情報を確認する外部コマンドです。</p></div><div><strong><code>ping</code></strong><p>基本的なIP通信を確認する外部コマンドです。</p></div><div><strong><code>nslookup</code></strong><p>名前解決を確認する外部コマンドです。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>PowerShell専用cmdletだけではない</strong><p>PowerShellから外部コマンドを実行できる場合があります。一方、PowerShell画面で実行したものがすべてcmdletになるわけではありません。</p></div>

### PowerShellを開く

<p>Windowsでは環境によって、Windows PowerShell、PowerShell、Windows TerminalからPowerShellを開く方法など、複数の入口が見える場合があります。Windows TerminalはPowerShellそのものではありません。どの画面から開いたかだけでなく、必要に応じて前述の方法で現在のPowerShell環境を確認します。</p>

### 通常実行と管理者として実行

<div class="registry-root-grid"><div><strong>通常実行</strong><p>状態確認など、通常ユーザーで利用できるcmdletを実行します。</p></div><div><strong>管理者として実行</strong><p>システム設定の変更など、昇格が必要な操作で利用する場合があります。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>PowerShellを開いたことと管理者として開いたことは別</strong><p>すべてのcmdletに管理者権限が必要なわけではありません。必要な操作だけを管理者権限で実行します。</p></div>

### スクリプトとは

<p>PowerShellでは、複数のコマンドをファイルへ保存して実行できます。一般的な拡張子は <code>.ps1</code> です。複数の状態確認、繰り返し処理、定型的な管理作業などに利用されます。</p>
<div class="standard-callout standard-callout--key"><strong>内容を理解してから実行する</strong><p>スクリプトは複数の処理をまとめて実行できるため、内容を理解せず実行すると影響が大きくなる場合があります。</p></div>

### 実行ポリシー（Execution Policy）

<p>Windows上のPowerShellには、スクリプトや構成ファイルをどのような条件で読み込み・実行できるかを制御する実行ポリシーがあります。</p>
<div class="registry-root-grid"><div><strong><code>Get-ExecutionPolicy</code></strong><p>現在の実行ポリシーを確認します。</p></div><div><strong><code>Get-ExecutionPolicy -List</code></strong><p>複数の適用範囲に対する状態を確認します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>実行ポリシーを安易に変更しない</strong><p>実行ポリシーは、意図しないスクリプトの実行を防ぎやすくするための仕組みですが、セキュリティ境界ではありません。スクリプトが動かないという理由だけで、自己判断により変更しないでください。</p></div>

#### 実行ポリシーの適用範囲

<div class="registry-card-grid"><div><strong>MachinePolicy</strong><p>コンピューター全体に対して、組織のポリシーで設定される範囲です。</p></div><div><strong>UserPolicy</strong><p>現在のユーザーに対して、組織のポリシーで設定される範囲です。</p></div><div><strong>Process</strong><p>現在実行しているPowerShellプロセスだけに適用される範囲です。</p></div><div><strong>CurrentUser</strong><p>現在のユーザーに適用される範囲です。</p></div><div><strong>LocalMachine</strong><p>このPCを利用するすべてのユーザーに適用される範囲です。</p></div></div>
<p>実行ポリシーには複数の適用範囲があり、グループポリシーなど組織側の設定が影響する場合があります。</p>
<div class="standard-callout standard-callout--key"><strong>PowerShell環境ごとに確認する</strong><p>Windows PowerShell 5.1とPowerShell 7では実行ポリシーの設定が別に管理されるため、片方の設定がそのままもう片方へ適用されるとは限りません。</p></div>

### スクリプト実行前に確認する

<div class="registry-card-grid"><div><strong>作成元</strong><p>誰が、どの目的で作成したか。</p></div><div><strong>内容</strong><p>どのような処理を実行するか。</p></div><div><strong>対象</strong><p>どの端末、サービス、ファイル、設定が対象か。</p></div><div><strong>権限</strong><p>管理者権限が必要か。</p></div><div><strong>復旧方法</strong><p>問題が起きた場合に元へ戻せるか。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>入手したコマンドをそのまま実行しない</strong><p>Webサイト、メール、チャットなどから取得したPowerShellコマンドやスクリプトを、内容を理解せず実行しないでください。</p></div>

### 実行結果を読む

<p>PowerShellでは正常結果だけでなく、エラーメッセージも重要な情報です。コマンド名の入力ミス、利用できないcmdletやモジュール、正しくないパラメーター、権限不足、存在しない対象などを確認します。</p>
<div class="standard-callout standard-callout--admin"><strong>エラーを読んでから次へ進む</strong><p>エラーが表示された場合は、すぐ別のコマンドを試すのではなく、まずメッセージを確認します。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>まずGet系cmdletから使う</strong><p>設定変更より先に現在の状態を確認します。</p></div><div><span>2</span><strong>暗記するより探し方を覚える</strong><p><code>Get-Command</code> と <code>Get-Help</code> を利用します。</p></div><div><span>3</span><strong>オブジェクトとして結果を見る</strong><p>PowerShell cmdletでは、表示文字だけでなくオブジェクトとして情報を扱えることを意識します。</p></div><div><span>4</span><strong>管理者権限が必要か確認する</strong><p>必要な処理だけを管理者として実行します。</p></div><div><span>5</span><strong>スクリプトの内容と対象を確認する</strong><p><code>.ps1</code> や複数行の処理を、意味を理解せず実行しません。</p></div><div><span>6</span><strong>実行ポリシーを安易に変更しない</strong><p>スクリプトを実行できない場合は、組織設定や原因を先に確認します。</p></div></div>

### PowerShellを使うときの基本的な流れ

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>何を確認・管理したいか決める</p></div><i>↓</i><div><span>02</span><p>必要なcmdletを探す</p></div><i>↓</i><div><span>03</span><p><code>Get-Help</code> などで使い方を確認する</p></div><i>↓</i><div><span>04</span><p>対象・パラメーター・権限を確認する</p></div><i>↓</i><div><span>05</span><p>コマンドを実行する</p></div><i>↓</i><div><span>06</span><p>結果やエラーを確認する</p></div><i>↓</i><div><span>07</span><p>必要に応じて絞り込み・次の処理へ進む</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>必要な処理だけを実行する</strong><p>PowerShellでも、コマンドを多く実行することが目的ではありません。目的を決め、必要な処理だけを実行します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>コマンドが見つからない</h3><p>入力ミス、PowerShellのバージョン、必要なモジュールが利用できるか確認します。</p></div><div><span>2</span><h3>パラメーターが認識されない</h3><p><code>Get-Help</code> などで、現在の環境で利用できるパラメーターか確認します。</p></div><div><span>3</span><h3>アクセス拒否などのエラー</h3><p>管理者権限だけでなく、対象へのアクセス権や組織ポリシーも確認します。</p></div><div><span>4</span><h3>PowerShell環境によって動作が異なる</h3><p>Windows PowerShell 5.1とPowerShell 7では、利用できるモジュールや互換性が異なる場合があります。現在どのPowerShell環境で実行しているか確認します。</p></div><div><span>5</span><h3>スクリプトを実行できない</h3><p>実行ポリシー、組織のポリシー、スクリプトの入手元、必要な条件などを確認します。実行ポリシーだけが原因とは限りません。</p></div><div><span>6</span><h3>結果が多すぎる</h3><p><code>Select-Object</code> などで必要な項目に絞ります。まず確認目的を決めます。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>PowerShellはコマンドプロンプトの新しいバージョン</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>どちらもコマンドライン環境ですが、PowerShellはcmdlet、オブジェクト、スクリプトなど独自の仕組みを持ちます</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>PowerShellでは従来のWindowsコマンドを使えない</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p><code>ipconfig</code> や <code>ping</code> などの外部コマンドも実行できる場合があります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>PowerShellの結果はすべて単なる文字列</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>PowerShell cmdletは多くの場合オブジェクトを出力し、次の処理に利用できます</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>実行ポリシーを厳しくすれば危険なコードを完全に防げる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>実行ポリシーは意図しないスクリプト実行を防ぎやすくする仕組みですが、セキュリティ境界ではありません</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>スクリプトが動かなければ実行ポリシーを変更すればよい</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>組織ポリシーや原因を確認し、自己判断で設定を変更しません</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>目的</strong><p>何を確認・管理したいのか。</p></div><div><strong>対象</strong><p>どのPC、サービス、プロセス、ファイル、設定が対象か。</p></div><div><strong>権限</strong><p>通常ユーザーで実行できるか、管理者権限が必要か。</p></div><div><strong>結果</strong><p>出力されたオブジェクトやエラーが何を示しているか。</p></div></div>
<p>この4つを分けて考えると、意味を理解せずPowerShellコマンドを実行することを防ぎやすくなります。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>Windowsの状態確認・管理・自動化を行うためのコマンドライン環境</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">cmdletやスクリプトを使って、Windows管理を効率化できます。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>PowerShellではcmdletとオブジェクトの考え方が重要</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">Verb-Noun形式のcmdletを利用し、取得した情報をオブジェクトとして次の処理に活用できます。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>暗記するより、探し方と結果の見方を覚える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail"><code>Get-Command</code>、<code>Get-Help</code>、<code>Get-Member</code> などを利用します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>スクリプトや設定変更は対象・権限・影響を確認してから行う</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">実行ポリシーを含め、組織の管理設定を自己判断で変更しません。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="./command-prompt"><strong>コマンドプロンプト</strong><p>従来のWindowsコマンドを使う基本</p></a><a href="./administrator-privileges"><strong>管理者権限</strong><p>昇格と安全な管理作業の考え方</p></a><a aria-disabled="true"><strong>Windowsサービス</strong><p>準備中</p></a><a href="../network/basic-structure"><strong>ネットワークの基本構成</strong><p>端末から接続先までの構成を理解する基本</p></a><a href="./gpo"><strong>グループポリシー</strong><p>Windows設定をまとめて適用する仕組み</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>問題の原因を順番に切り分ける方法</p></a></div>

<p class="registry-last-updated">最終更新：2026/10/21</p>
