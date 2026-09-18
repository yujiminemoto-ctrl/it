---
title: デバイスマネージャー
description: Windowsのハードウェアとドライバーの状態を確認し、デバイス問題を切り分けるための基礎を学びます。
outline: false
pageClass: wsus-page registry-page device-manager-page
lastUpdated: false
---

# デバイスマネージャー

<p class="article-subtitle">Windowsでハードウェアとドライバーの状態を確認するツール</p>
<p class="article-summary">デバイスマネージャーでは、Windowsがどのデバイスを認識しているか、ドライバーが正常に動作しているか、デバイスが無効化されていないかなどを確認できます。社内ITでは、ネットワークアダプター、USB機器、サウンドデバイス、ディスプレイアダプターなどのトラブルを切り分けるときに使用します。</p>

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

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>デバイスマネージャーは、Windowsが認識しているハードウェアと、そのデバイスを利用するためのドライバーの状態を確認するツールです。</p></div>
<div class="registry-tree"><span>Windows・アプリケーション</span><i>↕</i><span>ドライバー</span><i>↕</i><span>ハードウェア</span></div>
<p>Windowsやアプリケーションは、ドライバーを通じてハードウェアを利用します。正常に使えない場合も、原因が機器本体とは限りません。接続状態、ドライバー、設定、無効化などを順番に確認します。</p>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>デバイスマネージャーはなぜ重要なのか {#why-important}

<p>有線LANが使えない、Wi-Fiが表示されない、USB機器が認識されない、音が出ない、外部ディスプレイやBluetoothが使えない、といった問い合わせで利用します。</p>
<div class="registry-card-grid"><div><strong>認識・接続の問題</strong><p>Windowsの認識、USBポートや内部接続などを確認します。</p></div><div><strong>ドライバー・設定の問題</strong><p>ドライバーの動作、無効化、更新後の互換性を確認します。</p></div><div><strong>ほかの原因も考える</strong><p>OS、アプリケーション、Windows設定、ハードウェア側の可能性も切り分けます。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>最初から故障と決めつけない</strong><p>Windowsが対象デバイスをどのように認識しているかを、まず確認します。</p></div>

### ハードウェアとドライバー

<div class="registry-root-grid"><div><strong>ハードウェア</strong><p>実際の機器です。ネットワークアダプター、ディスプレイアダプター、サウンドデバイス、USB機器、Bluetoothアダプターなどがあります。</p></div><div><strong>ドライバー</strong><p>Windowsがハードウェアを利用するためのソフトウェアです。例えばネットワークアダプターとWindowsの間で、ネットワークドライバーが働きます。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>機器本体だけでは判断できない</strong><p>ハードウェアが正常でも、対応するドライバーに問題があると正常に利用できない場合があります。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>有線LANが突然使えなくなった</h3><p><strong>状況</strong><br>LANケーブルを接続していても、ネットワーク接続を利用できない場合があります。</p><p><strong>具体例</strong><br>「ネットワーク アダプター」の有線LANアダプターに警告マークが表示されている。</p><p class="scenario-point"><strong>確認ポイント</strong><br>認識状態、デバイスの状態、ドライバー、無効化の有無を確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>USB機器を接続しても使えない</h3><p><strong>状況</strong><br>USBメモリやカメラなどを接続しても認識されない場合があります。</p><p><strong>具体例</strong><br>「不明なデバイス」や警告マーク付きのデバイスが表示される。</p><p class="scenario-point"><strong>確認ポイント</strong><br>機器本体だけでなく、接続状態、USBポート、ドライバーも切り分けます。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>音が出ない・画面表示がおかしい</h3><p><strong>状況</strong><br>音声や映像の問題には、Windowsの設定だけでなくデバイスやドライバーが関係する場合があります。</p><p><strong>具体例</strong><br>「サウンド、ビデオ、およびゲーム コントローラー」や「ディスプレイ アダプター」で状態を確認する。</p><p class="scenario-point"><strong>確認ポイント</strong><br>対象デバイスがWindowsに正常に認識されているか確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>ドライバー更新後に不具合が発生した</h3><p><strong>状況</strong><br>Windows Updateやメーカーが提供するドライバーの更新後に、動作が不安定になる場合があります。</p><p><strong>具体例</strong><br>Wi-Fiが不安定になり、変更記録や更新履歴から直前のドライバー更新が分かった。</p><p class="scenario-point"><strong>確認ポイント</strong><br>提供元、バージョン、更新時期を確認し、以前のドライバーに戻せるか確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### デバイスマネージャーを開く

<div class="registry-root-grid"><div><strong>スタートメニューから</strong><p>スタートボタンを右クリックし、「デバイス マネージャー」を選択します。</p></div><div><strong>コマンドから</strong><p>「ファイル名を指定して実行」で <code>devmgmt.msc</code> を実行すると開けます。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>確認と変更では必要な権限が異なる</strong><p>デバイスの状態確認は通常のユーザーでも行える場合がありますが、ドライバーの更新、デバイスの無効化、アンインストールなどの変更操作では、管理者権限が必要になる場合があります。</p></div>

### デバイスは種類ごとに表示される

<p>ネットワーク アダプター、ディスプレイ アダプター、サウンド、ビデオ、およびゲーム コントローラー、Bluetooth、USB コントローラー、ディスク ドライブ、キーボード、マウスとそのほかのポインティング デバイス、システム デバイスなどに分類されます。</p>
<div class="standard-callout standard-callout--key"><strong>問題がある機器のカテゴリを確認する</strong><p>表示名は製品名やチップ名の場合があります。名前だけでは判断しにくいときは、端末の仕様やハードウェアIDも確認します。</p></div>

### プロパティで何を見るか

<p>対象デバイスを右クリックして「プロパティ」を開きます。</p>
<div class="registry-card-grid"><div><strong>全般</strong><p>デバイスの種類、製造元、場所、デバイスの状態を確認します。</p></div><div><strong>ドライバー</strong><p>提供元、日付、バージョンと、更新・元に戻す・無効化・アンインストールなどの操作を確認します。</p></div><div><strong>詳細</strong><p>ハードウェアIDなど、デバイスを特定する情報を確認します。</p></div></div>
<p>「このデバイスは正常に動作しています。」という表示は確認材料の一つですが、機器本体が完全に正常だと断定できるわけではありません。例えば、ネットワークアダプターが「正常」と表示されていても、LANケーブル、IP設定、ネットワーク側の問題などで通信できない場合があります。</p>
<p>ドライバーの「日付」は、その端末で実際に更新した日時とは限らないため、変更記録や更新履歴も確認します。</p>

### 黄色い警告マーク・無効化・不明なデバイス

<div class="registry-card-grid"><div><strong>黄色い警告マーク</strong><p>デバイスに何らかの問題があることを示します。ハードウェア故障とは限りません。デバイスの状態、エラーコード、ドライバー情報を確認します。</p></div><div><strong>無効化されたデバイス</strong><p>Windowsから利用できない状態です。故障とは限りません。無効化された理由、組織の設定、作業履歴を確認してから変更します。</p></div><div><strong>不明なデバイス</strong><p>Windowsが機器を検出していても、正しく識別できていない状態です。適切なドライバーが利用できない場合などが原因で、故障や単純な未導入とは限りません。ハードウェアID、端末仕様、ドライバーの提供元を確認します。</p></div></div>
<div class="registry-tree"><span>プロパティ</span><i>↓</i><span>デバイスの状態</span><i>↓</i><span>コード・メッセージを確認</span></div>
<div class="standard-callout standard-callout--key"><strong>警告や不明なデバイスだけで原因を断定しない</strong><p>黄色い警告は必ずしも故障ではなく、不明なデバイスも必ずしもドライバー未導入ではありません。コード 10などの番号を暗記せず、表示されたメッセージをMicrosoftやメーカーの資料と照合します。</p></div>

### ハードウェアID

<p>ハードウェアIDは、Windowsがデバイスを識別する情報の一つです。プロパティの「詳細」で確認し、不明なデバイスが何の機器か特定する手掛かりにします。</p>
<div class="registry-path-pair"><code>PCI\VEN_XXXX&amp;DEV_XXXX...</code><code>USB\VID_XXXX&amp;PID_XXXX...</code></div>
<div class="standard-callout standard-callout--warning"><strong>まず機器を特定し、信頼できる提供元を確認する</strong><p>検索で見つけた出所不明のサイトから直接ドライバーをダウンロードしないでください。機器を特定したあと、PCメーカーやデバイスメーカーのサポート情報を確認します。</p></div>

### ドライバーの更新と提供元

<p>「ドライバーの更新」では、利用可能なドライバーを検索したり、指定したドライバーを適用したりできます。一部はWindows Updateで配信されますが、すべてが提供されるわけではありません。</p>
<div class="registry-card-grid"><div><strong>Windows Update</strong><p>一部のデバイスドライバーを配信します。</p></div><div><strong>PCメーカー</strong><p>対象機種向けに検証・提供されたドライバーを使用する場合があります。</p></div><div><strong>デバイスメーカー</strong><p>個々の機器向けのドライバーを提供します。PCメーカーの推奨や社内方針も確認します。</p></div></div>
<p>PCメーカーは端末全体向けに検証したドライバーを提供する場合があり、デバイスメーカーは個々の機器向けにドライバーを提供します。どちらを使用するかは、PCメーカーの推奨や社内の管理方針を確認します。</p>
<div class="standard-callout standard-callout--admin"><strong>最新のドライバーが常に最適とは限らない</strong><p>新しいバージョンで互換性の問題が起こる場合もあります。PCメーカーの推奨、社内の管理方針、既知の問題を確認して判断します。</p></div>
<p>社内PCでは、自己判断で別の提供元のドライバーへ変更しないことが重要です。</p>

### 以前のドライバーに戻す（ロールバック）

<p>更新後に問題が起きた場合、以前のドライバーへ戻せる場合があります。「ドライバーを元に戻す」が利用できるかは、端末の状態や更新方法によって異なります。</p>

### 無効化とアンインストールの違い

<div class="registry-root-grid"><div><strong>デバイスの無効化</strong><p>Windowsからそのデバイスを利用しない状態にします。ネットワークアダプターや入力デバイスを不用意に無効化すると、作業に影響します。</p></div><div><strong>デバイスのアンインストール</strong><p>Windows上のデバイス登録をいったん削除します。ハードウェア本体を削除する操作ではありません。接続された機器は、再起動や再認識で再表示される場合があります。</p></div></div>
<p>デバイスの登録を削除することと、ドライバーパッケージ自体を削除することは同じではありません。</p>
<div class="standard-callout standard-callout--warning"><strong>変更前に復旧方法を確認する</strong><p>ドライバーまで削除されるかは操作内容やWindowsの状態で異なります。再インストールに必要なドライバーや復旧方法を確認してから作業します。必ず自動的に元へ戻るとは限りません。</p></div>

### ハードウェア変更のスキャンと表示されないデバイス

<p>「ハードウェア変更のスキャン」では、Windowsに接続されているハードウェアの変更を再確認し、必要に応じてデバイスを再認識します。接続後に表示されない場合や、アンインストール後の再認識に利用しますが、これだけで故障やドライバーの問題が解決するとは限りません。</p>
<p>表示されない場合は、接続や別ポート、Windowsの認識、BIOS/UEFI側の設定、機器本体なども考えます。BIOS/UEFIの変更はメーカー資料や社内手順に従い、安易に行いません。</p>

### 必要に応じて非表示のデバイスを確認する

<p>「表示 → 非表示のデバイスの表示」では、現在接続されていない機器の情報なども表示される場合があります。通常確認の最初の手順ではなく、必要に応じて利用します。非表示だから不要とは限らず、理由を確認せず削除しません。</p>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>まず表示されているか確認する</strong><p>Windowsが対象デバイスを認識しているか確認します。</p></div><div><span>2</span><strong>デバイスの状態を確認する</strong><p>警告マーク、エラーコード、無効化の有無を確認します。</p></div><div><span>3</span><strong>ドライバー情報を記録する</strong><p>変更前の提供元、バージョン、日付を記録します。</p></div><div><span>4</span><strong>更新元を確認する</strong><p>Windows Update、メーカー情報、社内手順を確認します。</p></div><div><span>5</span><strong>復旧方法を確認する</strong><p>ロールバックや再インストールが可能か確認します。</p></div><div><span>6</span><strong>故障と決めつけない</strong><p>接続、ドライバー、設定、OS側を順番に切り分けます。</p></div></div>

### デバイス問題を確認するときの基本的な流れ

<div class="registry-tree"><span>対象デバイスを確認</span><i>↓</i><span>一覧に表示されているか</span><i>↓</i><span>警告・無効化・エラーコードを確認</span><i>↓</i><span>ドライバーの提供元・バージョンを確認</span><i>↓</i><span>変更履歴や更新時期を確認</span><i>↓</i><span>必要に応じて更新・ロールバック・再認識を検討</span></div>
<p>最初から更新や故障判断をせず、現在の状態から順番に確認します。</p>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>黄色い警告マークが表示される</h3><p>デバイスの状態、エラーコード、ドライバー情報を確認します。</p></div><div><span>2</span><h3>不明なデバイスが表示される</h3><p>ハードウェアID、端末仕様、メーカー情報、ドライバーの提供元を確認します。</p></div><div><span>3</span><h3>デバイスが表示されない</h3><p>接続、別ポート、スキャンを確認し、機器側の可能性も考えます。BIOS変更は社内手順を確認します。</p></div><div><span>4</span><h3>デバイスが無効化されている</h3><p>理由、組織の設定、有効化して問題ないかを確認します。</p></div><div><span>5</span><h3>更新後に不具合が発生した</h3><p>更新時期、ドライバーのバージョン、ロールバックの可否、既知の問題を確認します。</p></div><div><span>6</span><h3>アンインストール後に再表示される</h3><p>Windowsが機器を再認識し、デバイスやドライバーを再登録した可能性があります。異常とは限りません。</p></div></div>

### 確認に使う主なツール・項目

<p><code>devmgmt.msc</code> で開き、プロパティで状態・ドライバー・詳細を確認します。ハードウェアIDは特定の手掛かりに、Windows Updateとメーカーのサポート情報は配信状況・推奨ドライバー・既知の問題の確認に利用します。</p>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>すぐ最新ドライバーへ更新する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>現在のバージョン、メーカーの推奨、更新履歴を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>黄色い警告を故障と判断する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>状態、エラーコード、ドライバーを確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>検索サイトからドライバーを入手する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>機器を特定し、信頼できるメーカーの提供元を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>情報を記録せず更新する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>提供元、バージョン、日付を記録してから変更する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>不用意にアンインストールする</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>再認識や再インストールの方法を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>このツールだけで原因を断定する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>接続、Windows設定、管理ポリシー、アプリケーションも確認する</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>Windowsの認識状態を確認する</strong></span><span class="takeaway-detail">表示されているか、どのような状態か確認します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>ハードウェアとドライバーを分けて考える</strong></span><span class="takeaway-detail">機器本体が正常でも、ドライバーの問題で利用できない場合があります。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>変更前に情報と復旧方法を確認する</strong></span><span class="takeaway-detail">提供元、バージョン、更新時期を記録します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>デバイスマネージャーだけで断定しない</strong></span><span class="takeaway-detail">接続、設定、管理ポリシー、ハードウェア側も切り分けます。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="./windows-update"><strong>Windows Update</strong><p>更新とドライバー配信の基本</p></a><a href="./administrator-privileges"><strong>管理者権限</strong><p>管理操作と安全な権限の使い方</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>問題を順番に切り分ける考え方</p></a><a href="../network/basic-structure"><strong>ネットワークの基本構成</strong><p>接続とネットワーク機器の役割</p></a><a href="./registry"><strong>レジストリ</strong><p>Windowsの設定情報の確認</p></a><a aria-disabled="true"><strong>Windowsサービス</strong><p>準備中</p></a></div>

<p class="registry-last-updated">最終更新：2026/09/18</p>
