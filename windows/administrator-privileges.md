---
title: 管理者権限
description: Windowsの管理者権限、UAC、ローカル管理者の違いと安全な使い方を学びます。
outline: false
pageClass: wsus-page registry-page administrator-privileges-page
lastUpdated: false
---

# 管理者権限

<p class="article-subtitle">Windowsで管理作業を行うための権限と安全な使い方</p>
<p class="article-summary">Windowsでは、すべてのユーザーが同じ権限を持っているわけではありません。通常の業務を行うための標準的な権限と、ソフトウェアのインストールやシステム設定の変更などを行うための管理者権限が分けられています。誰が管理者権限を持つか、その作業に本当に必要か、端末側の権限か組織側の管理か、<a href="#uac">UAC</a>がどう関係するかを理解し、必要な場合だけ昇格して実行することが重要です。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、Windows 10<br>社内PC、管理対象端末</strong></div>
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

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>Windowsでは、「Administratorsグループに所属していること」と、「現在実行しているアプリケーションが管理者権限で動いていること」は同じではありません。</p></div>
<div class="registry-tree"><span>通常の業務</span><i>↓</i><span>管理作業が必要</span><i>↓</i><span>必要な場合だけ管理者権限へ昇格</span></div>
<p>通常の管理者アカウントでも、アプリケーションが常に完全な管理者権限で実行されるわけではありません。管理者権限が必要な操作では、<a href="#uac">UAC</a>による確認や昇格が行われます。</p>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>管理者権限はなぜ重要なのか {#why-important}

<p>管理者権限は、端末全体に影響する作業で必要になる場合があります。一方、強い権限での誤操作や不正プログラムの実行は、影響範囲も大きくします。</p>
<p>管理者権限は情報セキュリティの面でも重要です。管理者権限で不正なプログラムが実行されると、システム設定の変更、セキュリティ機能への影響、他のユーザーへの影響など、被害範囲が大きくなる可能性があります。そのため、必要のないユーザーやアプリケーションに管理者権限を与えず、必要な作業だけで使用することが重要です。</p>
<div class="registry-card-grid"><div><strong>必要になる作業の例</strong><p>ソフトウェアやドライバーの導入、サービスや一部のネットワーク設定の変更</p></div><div><strong>変更できる範囲</strong><p>システム領域、レジストリの一部、ローカルユーザーやセキュリティ設定</p></div><div><strong>権限が強いことのリスク</strong><p>重要な設定やファイル、他のユーザー、端末全体へ影響する可能性</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>必要な場合だけ使用する</strong><p>管理者権限は「便利だから使う」のではなく、その作業に必要な場合だけ使用します。</p></div>

### 最小権限の考え方

<p>必要な作業に必要な範囲だけ権限を与える考え方を、最小権限と呼びます。</p>
<div class="registry-root-grid"><div><strong>通常は管理者権限が不要</strong><p>Web閲覧、メール、Word・Excel、通常の業務アプリケーション利用</p></div><div><strong>必要になる場合がある</strong><p>システム設定の変更、ソフトウェアの導入、端末の管理作業</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>日常業務では常用しない</strong><p>必要な管理作業を行うときだけ管理者権限を使用します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>ソフトウェアをインストールすると<a href="#uac">UAC</a>が表示される</h3><p><strong>状況</strong><br>業務アプリケーションやドライバーの導入時に、<a href="#uac">UAC</a>が表示される場合があります。</p><p><strong>確認の流れ</strong></p><ol><li>ソフトウェアを確認する</li><li>提供元や発行元を確認する</li><li>管理者権限が必要か確認する</li><li>必要な場合だけ昇格する</li></ol><p class="scenario-point"><strong>判断ポイント</strong><br><a href="#uac">UAC</a>が表示されても自動的に許可せず、何を実行しようとしているか確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>「アクセスが拒否されました」と表示される</h3><p><strong>状況</strong><br>設定変更やファイル操作で、アクセス拒否や権限不足が表示される場合があります。</p><p><strong>確認の流れ</strong></p><ol><li>操作内容と対象を確認する</li><li>必要な権限を確認する</li><li>現在のユーザーを確認する</li><li>必要に応じてグループ所属を確認する</li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>原因は管理者権限だけとは限りません。アクセス権や組織のポリシーも確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>Administratorsに所属しているのに操作できない</h3><p><strong>状況</strong><br>管理者アカウントでも、対象アプリケーションが通常の権限で動いている場合があります。</p><p><strong>確認の流れ</strong></p><ol><li>グループ所属を確認する</li><li>現在の実行状態を確認する</li><li>管理者権限が必要か確認する</li><li>必要に応じて管理者として実行する</li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>グループへの所属と、現在のプロセスが昇格していることは別です。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>特定のPCだけ管理者権限がある</h3><p><strong>状況</strong><br>同じ会社のアカウントでも、端末によってローカル管理者権限が異なる場合があります。</p><p><strong>確認の流れ</strong></p><ol><li>対象端末を確認する</li><li>ローカルAdministratorsを確認する</li><li>GPOやIntuneの管理を確認する</li><li>業務上の必要性を確認する</li></ol><p class="scenario-point"><strong>判断ポイント</strong><br>ローカル管理者権限は端末ごとに設定され、別のPCでも同じとは限りません。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### 標準ユーザーと管理者アカウント

<div class="registry-root-grid"><div><strong>標準ユーザー</strong><p>通常の業務を行うユーザーです。アプリケーションの利用、自分のファイル操作やユーザー設定の変更を行えますが、端末全体に影響する変更には制限があります。</p></div><div><strong>管理者アカウント</strong><p>Administratorsグループに所属し、必要なときに管理者権限へ昇格して、ソフトウェアの導入やシステム設定などの管理作業を行えるアカウントです。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>管理者アカウントでも常に昇格しているわけではない</strong><p>管理者アカウントでサインインしていても、すべての操作が自動的に完全な管理者権限で実行されるわけではありません。</p></div>

### Administratorsグループとローカル管理者

<p>Windowsのローカルグループ <code>Administrators</code> に所属するアカウントは、その端末で必要に応じて管理者権限へ昇格し、管理作業を行うことができます。このようなアカウントを一般にローカル管理者と呼びます。</p>
<div class="registry-tree"><span>ユーザー</span><i>↓</i><span>Administrators</span><i>↓</i><span>この端末で管理作業を行える</span></div>
<div class="registry-root-grid"><div><strong>PC-A</strong><p><code>CONTOSO\UserA</code><br>Administratorsに所属</p></div><div><strong>PC-B</strong><p><code>CONTOSO\UserA</code><br>Administratorsに所属していない</p></div></div>
<div class="standard-callout"><strong>端末ごとに異なる</strong><p>Administratorsへの所属は、その端末に対する管理権限を意味します。同じアカウントでも別の端末で同じ権限を持つとは限りません。</p></div>

### AdministratorとAdministratorsの違い

<div class="registry-root-grid"><div><strong>Administrator</strong><p>Windowsに組み込まれている1つのローカル管理者アカウントです。</p></div><div><strong>Administrators</strong><p>管理者権限を持つアカウントなどを登録するローカルグループです。</p></div></div>
<p>組み込みAdministratorは、通常のAdministratorsグループのメンバーと<a href="#uac">UAC</a>の動作などが異なる場合があります。環境によって無効化、名前変更、利用方法の管理が行われます。詳しい違いはこのページでは扱いません。</p>
<div class="standard-callout standard-callout--warning"><strong>組織の管理手順を使用する</strong><p>「管理者権限が必要だからAdministratorでログオンする」のではなく、組織で定められた管理用アカウントや昇格手順を使用します。</p></div>

### ユーザーアカウント制御（UAC） {#uac}

<p>UACは、管理者権限が必要な操作を行うときに、ユーザーへ確認や資格情報の入力を求める仕組みです。意図しないシステム変更を防ぐための重要な確認ですが、UACだけで安全が保証されるわけではありません。</p>
<div class="registry-tree"><span>管理者アカウント</span><i>↓</i><span>通常の権限で実行</span><i>↓</i><span>管理者権限が必要</span><i>↓</i><span>UAC</span><i>↓</i><span>昇格して実行</span></div>
<p>UACが表示されたときは、プログラム名や発行元を確認し、何を実行しようとしているのかを確認します。標準ユーザーでは、管理者アカウントの資格情報を求められる場合があります。</p>
<div class="registry-root-grid"><div><strong>管理者アカウント</strong><p>管理者権限への昇格について確認を求められることがあります。</p></div><div><strong>標準ユーザー</strong><p>管理者権限が必要な場合、管理者アカウントの資格情報を求められることがあります。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>内容を確認してから選択する</strong><p>UACが表示されたときに、内容を確認せず「はい」を選択しないでください。表示や動作は端末設定や組織のポリシーで異なる場合があります。</p></div>

### 「管理者として実行」とは

<p>「管理者として実行」は、対象のアプリケーションを必要な管理者権限へ昇格して起動する操作です。そのプロセスに対して権限を使用するもので、ユーザー自身を恒久的に管理者へ変更する操作ではありません。</p>
<div class="registry-card-grid"><div><strong>コマンド操作</strong><p>コマンドプロンプト、PowerShell</p></div><div><strong>管理・設定ツール</strong><p>レジストリエディター、各種管理ツール</p></div><div><strong>導入作業</strong><p>一部のインストーラー</p></div></div>
<div class="standard-callout standard-callout--key"><strong>必要なアプリケーションだけ</strong><p>必要のないアプリケーションまで管理者として実行しないでください。</p></div>

### ローカルアカウントとドメインアカウント

<div class="registry-root-grid"><div><strong>ローカルアカウント</strong><p>そのWindows端末自身で管理されるアカウントです。例：<code>PC01\User01</code></p></div><div><strong>ドメインアカウント</strong><p>Active Directoryドメインで管理されるアカウントです。例：<code>CONTOSO\User01</code></p></div></div>
<div class="standard-callout"><strong>ドメインアカウントでも自動的に管理者にはならない</strong><p>その端末で管理者権限を持つかどうかは、Administratorsグループなどの設定によって決まります。</p></div>
<div class="standard-callout"><strong>アカウントの種類と権限は別</strong><p>ローカルで管理されるか、Active Directoryで管理されるかという「アカウントの種類」と、その端末で管理者権限を持つかどうかは別の考え方です。ローカルアカウントにも標準ユーザーと管理者があり、ドメインアカウントも端末によって管理者権限を持つ場合と持たない場合があります。</p></div>

### ローカル管理者とドメイン管理者

<div class="registry-root-grid"><div><strong>ローカル管理者</strong><p>特定のWindows端末を管理するための権限を持つアカウントです。</p></div><div><strong>ドメイン管理権限を持つアカウント</strong><p>Domain Adminsなど、Active Directoryドメインを管理するための高い権限を持つアカウントです。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>強すぎる権限を使わない</strong><p>日常的な端末作業のために、ドメイン全体の強い管理権限を使用するべきではありません。</p></div>

### 会社で管理されているPCの場合

<p>Microsoft Entra IDに参加している端末や、Intuneで管理されている端末では、ローカル管理者権限が組織側から管理されている場合があります。詳しい管理方法は環境によって異なるため、ここでは基本概念だけを扱います。</p>

### 管理者権限と他のアクセス制御

<div class="registry-root-grid"><div><strong>ファイルアクセス権</strong><p>Administratorsに所属していても、NTFSや共有フォルダーのアクセス権、所有者、組織の設定により、すべてへ自由にアクセスできるとは限りません。</p></div><div><strong>GPO・Intune</strong><p>ローカル管理者でも、UAC、ローカルグループ、セキュリティ設定、アプリケーション制御を自由に変更できるとは限りません。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>権限だけで判断しない</strong><p>「Administratorsに所属している＝すべてのアクセス制御を無視できる」ではありません。その設定を何が管理しているかも確認します。</p></div>

### 管理者権限を確認する

<div class="registry-card-grid"><div><strong><code>whoami</code></strong><p>現在サインインしているユーザーを確認します。</p></div><div><strong><code>whoami /groups</code></strong><p>所属グループを確認します。ただし、Administratorsへの所属と現在のコマンドやアプリケーションが昇格していることは別です。UACの状態によっては、Administratorsが制限された状態で表示されることがあります。</p></div><div><strong><code>net localgroup administrators</code></strong><p>この端末のAdministratorsに登録されたユーザーやグループを確認します。</p></div><div><strong><code>lusrmgr.msc</code></strong><p>ローカルユーザーとグループを確認・管理します。Windows Homeでは利用できません。</p></div><div><strong><code>compmgmt.msc</code></strong><p>「コンピューターの管理」を開きます。</p></div><div><strong><code>net user administrator</code></strong><p>組み込みAdministratorが既定名の環境で状態を確認する例です。名前が変更されている場合は、実際の名前を確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>管理者権限が必要か確認する</strong><p>必要のない作業まで管理者権限で実行しません。</p></div><div><span>2</span><strong>ユーザーと所属グループを確認する</strong><p>誰でサインインし、Administratorsに所属しているか確認します。</p></div><div><span>3</span><strong>管理元を確認する</strong><p>端末固有か、Active Directory、GPO、Intuneなどの管理かを確認します。</p></div><div><span>4</span><strong>UACの内容を確認する</strong><p>プログラム名や発行元を確認してから昇格します。</p></div><div><span>5</span><strong>影響範囲を確認する</strong><p>ユーザーだけか、端末全体に影響する変更か確認します。</p></div><div><span>6</span><strong>強い権限を日常利用しない</strong><p>必要な管理作業だけに管理者権限を使用します。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>管理者権限を「常用する権限」にしない</strong><p>通常のWeb閲覧、メール、文書作成などを常に高い権限で行う必要はありません。</p></div>

### 管理者権限を確認するときの基本的な流れ

<div class="registry-tree"><span>誰でサインインしているか</span><i>↓</i><span>その操作に管理者権限が必要か</span><i>↓</i><span>利用できる管理者権限を確認</span><i>↓</i><span>UACによる昇格が必要か確認</span><i>↓</i><span>それでも実行できない場合は他のアクセス制御を確認</span></div>
<p>必要に応じて、Administratorsへの所属や利用できる管理者アカウントを確認します。</p>
<p>権限トラブルでは、最初から「管理者権限がない」と決めつけず、どの段階で拒否されているかを確認します。</p>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>Administratorsに所属しているのに操作できない</h3><p>実行状態、UAC、ファイルアクセス権、GPOやIntuneの制御を確認します。</p></div><div><span>2</span><h3>アクセスが拒否される</h3><p>ユーザー、操作対象、必要な権限、アクセス権、組織のポリシーを確認します。</p></div><div><span>3</span><h3>UACが何度も表示される</h3><p>要求元や発行元、そのアプリケーションが起動や操作のたびに管理者権限を必要とする仕様か、組織の管理設定を確認します。UACの無効化を解決策にはしません。</p></div><div><span>4</span><h3>「管理者として実行」が必要になる</h3><p>管理作業が含まれる可能性がありますが、表示されたら必ず使用するのではなく、必要性を確認します。</p></div><div><span>5</span><h3>組み込みAdministratorを使用できない</h3><p>無効化、名前変更、パスワード管理、組織の利用制限を確認します。</p></div><div><span>6</span><h3>別のPCでは管理者権限がない</h3><p>ローカルAdministratorsのメンバーは端末ごとに異なる場合があります。</p></div></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>権限不足ならすぐ管理者として実行する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>必要な権限と別の原因を先に確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>業務ユーザーを全員Administratorsに追加する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>必要なユーザーだけに必要な範囲で与える</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>UACが面倒なので無効にする</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>UACの役割を理解し、必要な操作だけ昇格する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>Administratorを日常業務で使用する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>通常の業務用アカウントと組織の管理手順を使う</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>Administratorsならすべて操作できると思う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>UAC、アクセス権、GPO、Intuneも確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>ドメイン管理者を通常のPC作業に使う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>作業対象に必要な範囲の管理権限を使う</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>管理者権限は必要な管理作業に使用する</strong></span><span class="takeaway-detail">通常業務では標準的な権限を使い、必要な場合だけ昇格します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>AdministratorとAdministratorsは別</strong></span><span class="takeaway-detail">前者は組み込みアカウント、後者はローカルグループです。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>管理者アカウントでもUACによる昇格が必要な場合がある</strong></span><span class="takeaway-detail">グループへの所属と現在の実行権限は別です。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>権限不足は管理者権限だけが原因とは限らない</strong></span><span class="takeaway-detail">アクセス権、GPO、Intuneなども確認します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages registry-related-pages"><a href="./registry"><span>Windows・認証基盤</span><strong>レジストリ</strong><p>Windowsの設定情報を安全に確認する基礎</p></a><a href="./gpo"><span>Windows・認証基盤</span><strong>グループポリシー</strong><p>端末へ設定をまとめて適用する仕組み</p></a><a href="./active-directory"><span>Windows・認証基盤</span><strong>Active Directory</strong><p>ユーザーと端末を管理する認証基盤</p></a><a href="../cloud/intune"><span>クラウド・端末管理</span><strong>Microsoft Intune</strong><p>管理対象端末の設定を管理する仕組み</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>Windowsトラブルシューティング</strong><p>問題を順番に切り分ける方法</p></a><a aria-disabled="true"><span>Windows・認証基盤</span><strong>Windowsサービス</strong><p>準備中</p></a></div>

<p class="registry-last-updated">最終更新：2026/09/18</p>
