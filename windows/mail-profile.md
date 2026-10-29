---
title: メールプロファイルの作成
description: クラシック Outlookで新しいメールプロファイルを作成し、メールアカウントを追加して利用できることを確認する基本手順を学びます。
outline: false
pageClass: wsus-page registry-page command-prompt-page mail-profile-page
lastUpdated: false
---

# メールプロファイルの作成

<p class="article-subtitle">クラシック Outlookで新しいメールプロファイルを作成し、メールアカウントを設定する基本手順</p>
<p class="article-summary">このページでは、主にクラシック Outlookで新しいメールプロファイルを作成する手順を扱います。新しい Outlookでは、クラシック Outlookと同じ複数プロファイルの管理方式は使用しません。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、クラシック Outlook<br>Microsoft 365 Apps・管理対象端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>10～15分</strong></div>
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

<p>メールプロファイルは、Outlookで使用するメールアカウント、データファイル、設定などをまとめた構成です。新しいプロファイルを作成したあと、利用するメールアカウントを追加し、Outlookで正常に利用できることを確認します。</p>

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>「プロファイルを作成する」と「メールアカウントを追加する」は別の操作です。プロファイル作成 → アカウント追加 → Outlook起動 → 送受信確認までを一連の作業として進めます。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>メールプロファイルの作成はなぜ重要なのか {#why-important}

<div class="registry-root-grid"><div><strong>01　新しいPCを設定する</strong><p>PC交換や新規端末のセットアップで、Outlookを利用できる状態にします。</p></div><div><strong>02　Outlookを再設定する</strong><p>OfficeやOutlookの再設定後、必要に応じて新しいメールプロファイルを作成します。</p></div><div><strong>03　別のOutlook構成を作成する</strong><p>必要に応じて、既存プロファイルとは別の構成を作成します。</p></div><div><strong>04　トラブル切り分けにも利用できる</strong><p>既存プロファイルを残したまま新しいプロファイルを作成し、同じ問題が発生するか確認する場合があります。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>作成後の利用確認まで行う</strong><p>プロファイルを作成すること自体が目的ではありません。作成後にメールアカウントが正常に接続され、Outlookを利用できることまで確認します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>新しいPCでOutlookを利用する</h3><p><strong>状況</strong><br>新しいPCや交換後のPCでクラシック Outlookを利用したい。</p><p><strong>具体例</strong><br>新しいメールプロファイルを作成し、会社のメールアカウントを追加します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>サインインできること、メールを受信・送信できることを確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>Outlookを再設定する</h3><p><strong>状況</strong><br>Officeの再インストールやOutlookの再設定後に、メール環境を構成する。</p><p><strong>具体例</strong><br>必要に応じて新しいプロファイルを作成し、必要なアカウントを追加します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>以前利用していたアカウントや必要なローカルデータを事前に確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>複数のプロファイルを使い分ける</h3><p><strong>状況</strong><br>同じPCで異なるOutlook構成を分けて利用する必要がある。</p><p><strong>具体例</strong><br>既存プロファイルを残し、新しいプロファイルを追加します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>複数プロファイルが常に適しているとは限らないため、組織の運用方法を確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>トラブルを切り分ける</h3><p><strong>状況</strong><br>Outlookが正常に起動しない、または設定に問題がある。</p><p><strong>具体例</strong><br>既存プロファイルを削除せず、新しいプロファイルへ同じアカウントを設定します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>新しいプロファイルで正常に動作しても、元のプロファイルが原因だとすぐに断定しません。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### プロファイルとメールアカウント

<div class="registry-root-grid"><div><strong>メールプロファイル</strong><p>Outlookで利用するアカウント、データファイル、各種設定をまとめた構成です。</p></div><div><strong>メールアカウント</strong><p>Microsoft 365、Exchange、Outlook.com、Gmailなど、実際のメールサービスへ接続するためのアカウントです。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>作成と追加を分けて考える</strong><p>「プロファイルを作成する」と「メールアカウントを追加する」は別の操作です。</p></div>

### 作成前に確認する

<div class="registry-card-grid"><div><strong>使用しているOutlook</strong><p>クラシック Outlookか、新しい Outlookか確認します。</p></div><div><strong>対象ユーザー</strong><p>誰のメール環境を設定するのか確認します。</p></div><div><strong>メールアカウント</strong><p>追加するメールアドレスやアカウントが正しいか確認します。</p></div><div><strong>既存プロファイル</strong><p>すでに利用しているプロファイルがあるか確認します。</p></div><div><strong>必要なデータ</strong><p>既存の <code>.pst</code> など、引き続き利用する必要があるローカルデータがないか確認します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>既存プロファイルを先に削除しない</strong><p>既存プロファイルがある場合は、必要性を確認せず先に削除しないでください。</p></div>

### メールプロファイルを作成する

<p>プロファイルを作成して終わりにせず、アカウント追加、Outlook起動、受信確認、送信確認まで順番に進めます。</p>
<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>Outlookを終了する</p></div><i>↓</i><div><span>02</span><p>プロファイル ピッカーを開く</p></div><i>↓</i><div><span>03</span><p>新しいプロファイルを作成する</p></div><i>↓</i><div><span>04</span><p>プロファイル名を入力する</p></div><i>↓</i><div><span>05</span><p>メールアカウントを追加する</p></div><i>↓</i><div><span>06</span><p>メールアカウントの設定を完了する</p></div><i>↓</i><div><span>07</span><p>新しいプロファイルでOutlookを起動する</p></div><i>↓</i><div><span>08</span><p>メールを受信できるか確認する</p></div><i>↓</i><div><span>09</span><p>メールを送信できるか確認する</p></div></div>

#### 01 Outlookを終了する

<p>クラシック Outlookが起動している場合は終了します。</p>

#### 02 プロファイル ピッカーを開く

<div class="registry-card-grid"><div><strong>方法A</strong><p>Shiftキーを押しながらクラシック Outlookを起動します。</p></div><div><strong>方法B</strong><p>Windowsの「ファイル名を指定して実行」で <code>Outlook.exe /profiles</code> を実行します。</p></div><div><strong>方法C</strong><p>クラシック Outlookが開いている場合は、「ファイル」→「アカウント設定」→「プロファイルの変更」を選択します。Outlookが終了した場合は再度起動し、プロファイル選択画面を開きます。</p></div></div>

#### 03 新しいプロファイルを作成する

<p>プロファイル選択画面で「オプション」を開き、「新規作成」を選択します。</p>

#### 04 プロファイル名を入力する

<p>管理しやすい名前を入力し、「OK」を選択します。名前の例は <code>Outlook</code>、<code>Work</code>、<code>TestProfile</code> です。</p>
<div class="standard-callout standard-callout--admin"><strong>分かりやすい名前を付ける</strong><p>組織で命名ルールがある場合は、そのルールに従います。特に指定がない場合は、用途が分かりやすいシンプルな名前を付けます。</p></div>

#### 05 メールアカウントを追加する

<p>新しいプロファイルへ、利用するメールアカウントを追加します。メールアドレスを入力し、画面の案内に従って設定します。Microsoft 365やExchange Onlineなどでは、サインイン画面や多要素認証が表示される場合があります。</p>

#### 06 メールアカウントの設定を完了する

<p>アカウントの追加が正常に完了したことを確認します。</p>

#### 07 新しいプロファイルでOutlookを起動する

<p>作成したプロファイルを選択して、クラシック Outlookを起動します。正しいメールアカウントと必要なフォルダーが表示され、エラーが表示されていないことを確認します。</p>

#### 08 メールを受信できるか確認する

<p>受信トレイを更新し、新しいメールを受信できることを確認します。</p>

#### 09 メールを送信できるか確認する

<p>確認用のメールを送信し、正常に送信できることを確認します。</p>
<div class="standard-callout standard-callout--admin"><strong>実際に利用できることまで確認する</strong><p>「プロファイルを作成できた」で完了とせず、Outlookの起動、受信、送信まで確認します。</p></div>

### 既定のプロファイルと起動時の選択

<div class="registry-root-grid"><div><strong>既定のプロファイル</strong><p>通常利用するプロファイルを指定します。プロファイル選択画面で対象のプロファイルを選び、「オプション」から既定のプロファイルとして設定できます。</p></div><div><strong>起動時に選択する</strong><p>必要に応じて、Outlook起動時に利用するプロファイルを選択できます。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>切り替えるときはOutlookを起動し直す</strong><p>Outlookを起動したまま別のプロファイルへ切り替える操作ではありません。別のプロファイルを利用する場合は、Outlookを終了してから起動し直します。</p></div>

### 既存プロファイルがある場合の注意

<div class="registry-card-grid"><div><strong>既存プロファイルを残す</strong><p>新しいプロファイルの設定と動作確認が完了するまでは、既存プロファイルを残します。</p></div><div><strong>新しいプロファイルを確認する</strong><p>メールの受信・送信と、必要なデータを確認します。</p></div><div><strong>削除は最後に判断する</strong><p>古いプロファイルが不要であることを確認してから、削除するか判断します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>作成できただけで古いプロファイルを削除しない</strong><p>「新しいプロファイルが作成できたから、古いプロファイルは不要」とすぐに判断しないでください。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>クラシック Outlookか確認する</strong><p>この作成手順を利用する対象環境か最初に確認します。</p></div><div><span>2</span><strong>既存プロファイルを確認する</strong><p>現在利用している構成を確認せずに変更しません。</p></div><div><span>3</span><strong>正しいアカウントを設定する</strong><p>対象ユーザーとメールアドレスを確認します。</p></div><div><span>4</span><strong>既存プロファイルを先に削除しない</strong><p>新しいプロファイルの動作確認が終わるまで残します。</p></div><div><span>5</span><strong>作成後に送受信を確認する</strong><p>プロファイルの作成だけで完了とせず、受信と送信の両方を確認します。</p></div><div><span>6</span><strong>不要なプロファイルは確認後に整理する</strong><p>利用状況や必要なデータを確認してから削除を判断します。</p></div></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>Shiftキーを押してもプロファイル選択画面が表示されない</h3><p>クラシック Outlookを起動しているか確認します。必要に応じて <code>Outlook.exe /profiles</code> から開きます。</p></div><div><span>2</span><h3>「新規作成」が見つからない</h3><p>プロファイル選択画面で「オプション」を開いているか確認します。</p></div><div><span>3</span><h3>メールアカウントを追加できない</h3><p>メールアドレス、サインイン情報、ネットワーク、認証、組織側の設定などを確認します。プロファイル作成とアカウント接続の問題を分けて考えます。</p></div><div><span>4</span><h3>以前のメールが見えない</h3><p>Microsoft 365やExchangeなどのオンラインデータは再同期される場合がありますが、ローカルデータが自動的に引き継がれるとは限りません。必要なデータの保存場所を確認します。</p></div><div><span>5</span><h3>起動時に毎回プロファイル選択画面が表示される</h3><p>「使用するプロファイルを選択する」設定が有効になっている可能性があります。通常利用するプロファイルを既定にするか確認します。</p></div><div><span>6</span><h3>どのプロファイルを削除してよいか分からない</h3><p>現在利用しているプロファイル、必要なデータ、アカウントを確認します。確認できない状態では削除しません。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>プロファイルを作成すればOutlookを利用できる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>メールアカウントを追加し、正常に接続・送受信できることまで確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>新しいプロファイルを作ったら古いプロファイルはすぐ削除してよい</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>新しいプロファイルの動作や必要なデータを確認してから判断します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>プロファイルとメールアカウントは同じ</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>プロファイルは、メールアカウントや設定などをまとめたOutlookの構成です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>新しいプロファイルを作れば以前のローカルデータもすべて自動的に移行される</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>必要なデータがどこに保存されているかを確認し、必要に応じて別途対応します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>新しい Outlookでも同じ手順でプロファイルを作成する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>このページの手順は主にクラシック Outlookを対象としています</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>対象</strong><p>誰のPC、誰のメールアカウントを設定するのか。</p></div><div><strong>既存環境</strong><p>現在利用しているプロファイルや必要なデータがあるか。</p></div><div><strong>設定</strong><p>正しいメールアカウントを新しいプロファイルに追加できているか。</p></div><div><strong>確認</strong><p>Outlookの起動、受信、送信まで正常に動作しているか。</p></div></div>
<p>この4つを確認すると、安全にメールプロファイルを作成しやすくなります。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>メールプロファイルを作成してOutlookの利用環境を整える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">必要なメールアカウントを追加し、Outlookを利用できる状態にします。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>プロファイル作成後にメールアカウントを追加する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">プロファイル作成だけで完了せず、正しいアカウントを設定します。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>既存プロファイルは先に削除しない</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">新しいプロファイルで正常に利用できることを確認してから判断します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>作成後の動作確認までが作業</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">Outlookの起動、メールの受信・送信、必要なデータを確認して完了します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a aria-disabled="true"><strong>メールアカウント設定</strong><p>準備中：受信・送信サーバー、ポート、暗号化、認証の基本</p></a><a aria-disabled="true"><strong>Outlookデータファイル</strong><p>準備中</p></a><a href="../cloud/microsoft-365"><strong>Microsoft 365</strong><p>クラウドサービスとアカウントの基本</p></a><a aria-disabled="true"><strong>Microsoft Entra ID</strong><p>準備中</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>原因を順番に切り分ける方法</p></a><a href="../network/dns"><strong>DNS</strong><p>メールサービスへの名前解決を確認する基本</p></a></div>

<p class="registry-last-updated">最終更新：2026/10/29</p>
