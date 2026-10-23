---
title: メールプロファイル
description: クラシック Outlookで使用するメールプロファイル、アカウント、データファイルの違いと安全な切り分け方を学びます。
outline: false
pageClass: wsus-page registry-page command-prompt-page mail-profile-page
lastUpdated: false
---

# メールプロファイル

<p class="article-subtitle">クラシック Outlookのアカウント・データファイル・設定をまとめて管理する仕組み</p>
<p class="article-summary">このページでは、主にクラシック Outlookのメールプロファイルを扱います。新しい Outlookでは、クラシック Outlookと同じ複数プロファイルの管理方式は使用しません。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、クラシック Outlook<br>Microsoft 365 Apps・管理対象端末</strong></div>
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

<p>メールプロファイルは、クラシック Outlookで使用するアカウント・データファイル・設定をまとめた構成です。メールアドレスやメールアカウントそのものではありません。</p>

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>メールプロファイル、メールアカウント、データファイルは、それぞれ役割が異なります。「プロファイル ≠ アカウント ≠ データファイル」と分けて考えます。</p></div>

### クラシック Outlookと新しい Outlook

<div class="registry-root-grid"><div><strong>クラシック Outlook</strong><p>従来のメールプロファイルを利用します。必要に応じて複数のプロファイルを作成し、起動時に選択することもできます。</p></div><div><strong>新しい Outlook</strong><p>クラシック Outlookと同じ複数プロファイルの管理方式は使用しません。同じ「Outlook」でも、プロファイルの管理方法が異なります。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>利用しているOutlookを最初に確認する</strong><p>トラブル対応を行う前に、利用しているのがクラシック Outlookか新しい Outlookか確認します。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>メールプロファイルはなぜ重要なのか {#why-important}

<p>Outlookの問題は、必ずしもメールサービス側だけで発生するわけではありません。どの層に問題があるのかを分けて確認することが重要です。</p>
<div class="registry-root-grid"><div><strong>01　メールサービス</strong><p>Microsoft 365やExchangeなど、サービス側の状態です。</p></div><div><strong>02　アカウント・認証</strong><p>サインインやメールアカウントの設定です。</p></div><div><strong>03　メールプロファイル</strong><p>クラシック Outlookが利用する構成情報です。</p></div><div><strong>04　データファイル</strong><p>ローカルの同期データや保存データです。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>問題を層に分けて考える</strong><p>Outlookの問題を「メールが壊れた」とまとめず、どの層に問題があるのかを切り分けます。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>Outlookが正常に起動しない</h3><p><strong>状況</strong><br>Outlookがエラーになる、または正常に開けない。</p><p><strong>具体例</strong><br>元のプロファイルを削除せず、新しいプロファイルへ同じアカウントを設定して起動できるか確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>新しいプロファイルで正常に動作しても、元のプロファイルが原因と即断せず、結果を比較します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>同期や設定の問題を切り分ける</h3><p><strong>状況</strong><br>メール同期やOutlook設定に関する問題が発生している。</p><p><strong>具体例</strong><br>新しいプロファイルで同じアカウントを構成し、同じ症状が発生するか確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>新しいプロファイルでも再現する場合は、アカウントやサービスなど別の原因も考えます。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>必要に応じて別のプロファイルを利用する</h3><p><strong>状況</strong><br>同じPCで異なるOutlook構成を分ける必要がある。</p><p><strong>具体例</strong><br>必要な環境では複数のプロファイルを作成し、Outlook起動時に利用するものを選択します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>複数プロファイルが常に適しているとは限らないため、組織の運用方針を確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>PC交換やOutlook再設定を行う</h3><p><strong>状況</strong><br>PC交換、Office再設定、Outlook再構成などを行う。</p><p><strong>具体例</strong><br>現在使用しているアカウント、データファイル、必要な設定を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>プロファイルを作り直すだけで、すべてのOutlookデータが自動移行されるとは考えません。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### メールプロファイル・アカウント・データファイル

<div class="registry-card-grid"><div><strong>メールプロファイル</strong><p>クラシック Outlookが使用するアカウント、データファイル、設定をまとめた構成です。メールアドレスそのものではありません。</p></div><div><strong>メールアカウント</strong><p>Microsoft 365、Exchange、Outlook.com、Gmailなどのメールサービスへ接続するためのアカウントです。</p></div><div><strong>データファイル</strong><p>Outlookがメールや予定表などのデータをローカルで扱うために使用するファイルです。クラシック Outlookでは <code>.ost</code> や <code>.pst</code> などがあります。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>3つを混同しない</strong><p>プロファイル ≠ アカウント ≠ データファイルです。トラブル時は、どの部分を確認しているのかを意識します。</p></div>

### 関係を整理する

<div class="registry-tree"><span>メールプロファイル</span><i>↓</i><span>1つ以上のメールアカウント</span><i>↓</i><span>メールサービス</span></div>
<p>クラシック Outlookでは、この構成にローカル側のデータファイル（<code>.ost</code> / <code>.pst</code>）も関係します。</p>

### <code>.ost</code> と <code>.pst</code>

<div class="registry-root-grid"><div><strong><code>.ost</code></strong><p>Microsoft 365、Exchange、Outlook.com、IMAPなどで利用されることがあり、サーバー上のデータをOutlookで利用するためのローカル同期データとして使われます。独立した完全なバックアップではありません。</p></div><div><strong><code>.pst</code></strong><p>POPアカウントのデータ保存や、アーカイブ、エクスポートなどで利用されるOutlookデータファイルです。</p></div></div>
<div class="standard-callout standard-callout--key"><strong><code>.ost</code> と <code>.pst</code> は同じ扱いではない</strong><p>削除や移行を行う前に、どのデータファイルを利用しているか、必要なデータがどこにあるかを確認します。</p></div>

### プロファイルを確認する

<div class="registry-root-grid"><div><strong>Outlookが正常に開ける場合</strong><p>クラシック Outlookの「ファイル」→「アカウント設定」から、「プロファイルの変更」や「プロファイルの管理」などを確認できます。表示名はバージョンや環境で異なる場合があります。</p></div><div><strong>起動前に選択する場合</strong><p>Shiftキーを押しながらクラシック Outlookを起動するか、<code>Outlook.exe /profiles</code> でプロファイル選択画面を開きます。</p></div><div><strong>Outlookが起動できない場合</strong><p><code>Outlook.exe /manageprofiles</code> を利用して、プロファイル管理を開ける場合があります。</p></div><div><strong>コントロールパネルから確認する</strong><p>「コントロールパネル」→「メール」→「プロファイルの表示」などから確認します。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>コントロールパネルの「メール」は万能な追加画面ではない</strong><p>クラシック Outlookのプロファイル確認や既存設定の管理に利用できますが、現在の認証方式では、ここから新しいアカウントやプロファイルを追加できない場合があります。</p></div>

### 新しいプロファイルで動作を比較する

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>Outlookを終了する</p></div><i>↓</i><div><span>02</span><p>プロファイル選択画面または管理画面を開く</p></div><i>↓</i><div><span>03</span><p>新しいプロファイルを追加する</p></div><i>↓</i><div><span>04</span><p>プロファイル名を設定する</p></div><i>↓</i><div><span>05</span><p>メールアカウントを設定する</p></div><i>↓</i><div><span>06</span><p>Outlookを起動して動作を確認する</p></div><i>↓</i><div><span>07</span><p>元のプロファイルと結果を比較する</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>元のプロファイルを残して比較する</strong><p>トラブル切り分けでは、元のプロファイルを先に削除せず、新しいプロファイルを追加して結果を比較します。</p></div>

### 既定のプロファイルと起動時選択

<div class="registry-root-grid"><div><strong>既定のプロファイル</strong><p>通常利用するプロファイルを指定します。</p></div><div><strong>起動時に選択する</strong><p>必要に応じて、Outlook起動時に利用するプロファイルを選択できます。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>切り替えるときはOutlookを再起動する</strong><p>クラシック Outlookを起動したまま別プロファイルへ切り替える操作ではありません。Outlookを終了し、利用するプロファイルを選択して起動します。</p></div>

### プロファイルを削除すると何が変わるのか

<div class="registry-card-grid"><div><strong>プロファイル内の構成</strong><p>プロファイルに登録されているアカウントや設定情報が削除されます。Outlookでは、オフラインデータが削除される旨の警告が表示される場合があります。</p></div><div><strong><code>.pst</code> などのデータファイル</strong><p><code>.pst</code> ファイル自体は、プロファイルを削除しただけでは通常PC上に残ります。ただし、必要なローカルデータの保存場所を事前に確認します。</p></div><div><strong>サーバー上のデータ</strong><p>Microsoft 365、Exchange、Outlook.comなどのサーバー側に保存されたメールは、ローカルのプロファイルを削除しただけでは通常削除されません。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>「Microsoft 365なら削除しても戻る」と安易に判断しない</strong><p>同期されていないデータ、ローカルにしか存在しないデータ、独自に追加した <code>.pst</code>、その他必要なローカル情報がないか確認してから作業します。</p></div>

### 新しいプロファイルは切り分けにも使う

<div class="registry-root-grid"><div><strong>新しいプロファイルで正常に動作する</strong><p>元のプロファイルに関係する問題の可能性が高くなります。ただし、結果だけで原因を即断しません。</p></div><div><strong>新しいプロファイルでも同じ問題が起きる</strong><p>Outlook本体、アドイン、アカウント、認証、ネットワーク、Microsoft 365サービス、Windows側など、プロファイル以外の原因も考えます。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>改善した理由まで考える</strong><p>「新しいプロファイルで直った」で終わらず、何が変わったことで改善したのかを確認します。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>使用しているOutlookを確認する</strong><p>クラシック Outlookか、新しい Outlookか確認します。</p></div><div><span>2</span><strong>アカウントとプロファイルを分けて考える</strong><p>メールアカウントの問題と、Outlookプロファイルの問題を混同しません。</p></div><div><span>3</span><strong>データファイルを確認する</strong><p><code>.ost</code> や <code>.pst</code> の保存場所と役割を確認します。</p></div><div><span>4</span><strong>元のプロファイルをすぐ削除しない</strong><p>新しいプロファイルで比較してから判断します。</p></div><div><span>5</span><strong>新しいプロファイルで比較する</strong><p>問題がプロファイルに関係するかを確認します。</p></div><div><span>6</span><strong>削除前に復旧方法を確認する</strong><p>必要なデータ、設定、再構成方法を確認してから変更します。</p></div></div>

### Outlookトラブル時の基本的な確認順序

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>クラシック Outlookか新しい Outlookか確認する</p></div><i>↓</i><div><span>02</span><p>症状を確認する</p></div><i>↓</i><div><span>03</span><p>アカウント・認証・サービス側を確認する</p></div><i>↓</i><div><span>04</span><p>現在のプロファイルを確認する</p></div><i>↓</i><div><span>05</span><p>必要に応じて新しいプロファイルを追加する</p></div><i>↓</i><div><span>06</span><p>新旧プロファイルで結果を比較する</p></div><i>↓</i><div><span>07</span><p>原因を確認してから削除・再構成を判断する</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>比較できる状態を残す</strong><p>最初から元のプロファイルを削除せず、比較できる状態を残して切り分けます。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>コントロールパネルに「メール」が見つからない</h3><p>クラシック Outlookを利用できる環境か、Outlookがインストールされているか、コントロールパネルの検索などを確認します。</p></div><div><span>2</span><h3>新しいプロファイルでも改善しない</h3><p>アカウント、認証、ネットワーク、Outlook本体、サービス側など、プロファイル以外の原因を確認します。</p></div><div><span>3</span><h3>元のプロファイルを削除してよいか分からない</h3><p>新しいプロファイルで正常に利用できることと、必要なローカルデータが残っていないことを確認します。</p></div><div><span>4</span><h3>どのプロファイルを利用しているか分からない</h3><p>既定のプロファイルと、起動時に選択する設定を確認します。</p></div><div><span>5</span><h3>アカウントを削除するとプロファイルも消えると思った</h3><p>アカウントとプロファイルは別です。1つのプロファイルに複数のアカウントが含まれる場合もあります。</p></div><div><span>6</span><h3>新しい Outlookで「プロファイルの表示」が見つからない</h3><p>このページの複数メールプロファイル管理は主にクラシック Outlookを対象とし、新しい Outlookでは同じ方式を使用しません。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>メールアドレスとメールプロファイルは同じ</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>メールプロファイルは、アカウント・データファイル・設定をまとめたOutlookの構成です</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>プロファイルを削除するとサーバー上のメールもすべて削除される</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>ローカルのプロファイルを削除しても、Microsoft 365やExchangeなどのサーバー上のメールが同時に削除されるわけではありません。ただし、必要なローカルデータは事前に確認します。</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>Outlookの問題はすぐプロファイルを削除して作り直せばよい</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>元のプロファイルを残して新しいプロファイルを追加し、結果を比較します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p><code>.ost</code> と <code>.pst</code> は同じ</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>用途とデータの扱いが異なるため、削除・移行前に種類と保存場所を確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>新しい Outlookでもクラシック Outlookと同じプロファイル管理を行う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>新しい Outlookではプロファイルの管理方式が異なります</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>環境</strong><p>クラシック Outlookか、新しい Outlookか。</p></div><div><strong>構成</strong><p>どのアカウント、プロファイル、データファイルを利用しているか。</p></div><div><strong>データ</strong><p>必要な情報がサーバー側かローカル側か、どこに存在するか。</p></div><div><strong>影響</strong><p>プロファイルの追加・切り替え・削除で何が変わるか。</p></div></div>
<p>この4つを分けて考えると、Outlookの問題を安全に切り分けやすくなります。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>メールプロファイルはOutlookの構成をまとめて管理する仕組み</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">アカウント、データファイル、設定などをまとめて管理します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>アカウント・プロファイル・データファイルは別に考える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">Outlookの問題を確認するときは、どの部分に問題があるかを切り分けます。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>新しいプロファイルはトラブル切り分けにも利用できる</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">元のプロファイルをすぐ削除せず、新しい構成と動作を比較します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>削除前にデータと復旧方法を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail"><code>.ost</code>、<code>.pst</code>、サーバー側のデータなど、保存場所と影響を確認してから作業します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="../cloud/microsoft-365"><strong>Microsoft 365</strong><p>クラウドサービスとアカウントの基本</p></a><a aria-disabled="true"><strong>Microsoft Entra ID</strong><p>準備中</p></a><a href="../network/dns"><strong>DNS</strong><p>メールサービスへの名前解決を確認する基本</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>原因を順番に切り分ける方法</p></a><a aria-disabled="true"><strong>Outlookデータファイル</strong><p>準備中</p></a><a aria-disabled="true"><strong>新しい Outlook</strong><p>準備中</p></a></div>

<p class="registry-last-updated">最終更新：2026/10/23</p>
