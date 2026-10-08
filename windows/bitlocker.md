---
title: BitLocker
description: Windowsのドライブを暗号化し、紛失・盗難時のデータを保護する基本を学びます。
outline: false
pageClass: wsus-page registry-page bitlocker-page
lastUpdated: false
---

# BitLocker

<p class="article-subtitle">Windowsのドライブを暗号化し、紛失・盗難時のデータを保護する機能</p>
<p class="article-summary">BitLockerは、Windowsのドライブを暗号化し、PCの紛失・盗難などによって保存データが不正に読み取られるリスクを減らすためのセキュリティ機能です。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11<br>社内PC・管理対象端末</strong></div>
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

<p>通常、Windowsへ正しくサインインして利用しているときは、ユーザーが暗号化を強く意識することはありません。一方、PCからSSDを取り外して別のPCへ接続するなど、通常の起動方法を使わずにデータへアクセスしようとした場合、BitLockerで保護されたドライブは簡単には読み取れません。</p>
<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>BitLockerの目的は、PCの利用を制限することではなく、保存データを保護することです。</p></div>

### WindowsサインインとBitLockerの役割

<div class="registry-root-grid"><div><strong>Windowsサインイン</strong><p>Windowsを利用するユーザーを確認します。</p></div><div><strong>BitLocker</strong><p>ドライブに保存されているデータを暗号化して保護します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>役割を分けて考える</strong><p>Windowsのパスワードを設定しているだけで、ストレージ内のデータそのものが暗号化されるわけではありません。</p></div>

### BitLockerが守る範囲

<div class="standard-callout"><strong>主に「保存されているデータ」を保護する</strong><p>Windowsへ正常にサインインし、ドライブのロックが解除された状態では、ユーザーやアプリケーションは権限の範囲内でファイルへアクセスできます。BitLockerはウイルス対策やバックアップとは役割が異なります。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>BitLockerはなぜ重要なのか {#why-important}

<p>会社のPCには、メール、文書、顧客情報、社内資料などの業務データが保存される場合があります。Windowsのサインインパスワードだけでは、ストレージを別の環境から読み取るようなアクセスに対して十分ではありません。BitLockerはドライブ自体を暗号化し、オフラインからの不正な読み取りを防ぎます。</p>
<div class="process-steps process-steps--four"><div><span>01</span><section><h3>BitLockerが有効</h3></section><p>PCを利用しているときからドライブが暗号化されています。</p></div><div><span>02</span><section><h3>PCを紛失・盗難</h3></section><p>第三者がPCやSSDを入手する可能性があります。</p></div><div><span>03</span><section><h3>別の環境から読み取り</h3></section><p>SSDを取り外すなど、通常のWindows起動を使わずに読み取ろうとします。</p></div><div><span>04</span><section><h3>保存データを保護</h3></section><p>正しい回復情報がなければ簡単には読み取れません。</p></div></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>社用ノートPCを紛失した</h3><p><strong>状況</strong><br>社員が外出先で会社のノートPCを紛失した。</p><p><strong>具体例</strong><br>第三者がPCやSSDを入手し、別の環境からファイルを読み取ろうとする可能性があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>対象PCでBitLockerが有効かつ保護状態だったか、回復情報が組織で適切に管理されているか確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>起動時に突然回復キーを要求された</h3><p><strong>状況</strong><br>通常のサインイン画面ではなくBitLocker回復画面が表示された。</p><p><strong>具体例</strong><br>TPM、BIOS/UEFI、起動構成、ハードウェア状態などの変化で、OSドライブのロックを自動的に解除できない場合があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>回復キーを入力して終わりにせず、なぜ回復モードになったかも確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>BIOS/UEFIやファームウェアを更新する</h3><p><strong>状況</strong><br>PCメーカーの手順に従って、BIOS/UEFIやTPM関連のファームウェアを更新する。</p><p><strong>具体例</strong><br>更新方法やメーカー手順によって、事前にBitLocker保護の一時停止が必要になる場合があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>必ず一時停止するとは限りません。メーカー手順や社内手順を確認し、必要な場合だけ行います。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>修理・ハードウェア交換を行う</h3><p><strong>状況</strong><br>PCの修理、部品交換、基板交換などを行う。</p><p><strong>具体例</strong><br>TPMや起動環境に関係する部品交換によって、BitLocker回復が必要になる場合があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>作業前に回復キーの保管状況と、BitLockerへの影響を確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### BitLockerはドライブを暗号化する

<p>BitLockerは、ファイルを一つずつ個別に暗号化するのではなく、ボリューム全体を暗号化して保護します。</p>
<div class="registry-root-grid"><div><strong>通常の起動</strong><p>Windows起動 → 必要な確認 → BitLockerで保護されたOSドライブのロックを解除 → Windowsを利用</p></div><div><strong>通常とは異なる場合</strong><p>起動環境に重要な変化 → 通常の方法でOSドライブのロックを解除できない → BitLocker回復 → 回復キーを要求</p></div></div>

### TPMとは

<p>TPM（Trusted Platform Module）は、暗号鍵などのセキュリティ情報を保護し、PCの起動状態を確認するために利用されるセキュリティ機能です。BitLockerではTPMと連携し、起動環境に問題がないことを確認したうえで、通常時のOSドライブのロックを解除します。</p>
<div class="registry-root-grid"><div><strong>BitLocker</strong><p>ドライブを暗号化します。</p></div><div><strong>TPM</strong><p>保護された起動を支える仕組みの一つです。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>TPMと回復キーを混同しない</strong><p>「TPMの中にBitLockerの回復キーがそのまま保存されている」という単純な関係ではありません。</p></div>

### 回復キーとは

<p>BitLockerの回復画面で入力する代表的な回復情報は、48桁の数字で構成される「回復パスワード」です。一般には「BitLocker回復キー」と呼ばれることも多いため、このページでは以降「回復キー」と表記します。</p>
<div class="standard-callout"><strong>なぜ回復キーが必要になるのか</strong><p>通常のロック解除条件を満たせない場合、安全のため自動的にドライブのロックを解除せず、回復キーを要求することがあります。これは必ずしもPCやSSDの故障を意味しません。</p></div>
<p>会社で管理しているPCでは、回復情報がMicrosoft Entra ID、Active Directory、その他の組織の管理システムに保存されている場合があります。自己判断で設定を変更せず、社内の対応手順を確認します。</p>
<div class="standard-callout standard-callout--warning"><strong>回復キーは安全に扱う</strong><p>回復キーは、BitLockerで保護されたドライブのロックを解除するために使用できる重要な情報です。組織が許可していない場所へ保存・共有せず、社内ルールに従って安全に管理します。</p></div>

### 回復キーID

<p>BitLocker回復画面では、回復キーそのものとは別に「回復キーID」が表示される場合があります。複数の回復キーが管理されている場合、このIDを使って対応する回復キーを特定します。</p>
<div class="standard-callout standard-callout--key"><strong>回復キーID ≠ 回復キー</strong><p>回復キーIDだけではドライブのロックを解除できません。IDで対応する回復キーを特定し、その回復キーを使用します。</p></div>

### Windowsのエディションと「デバイスの暗号化」

<div class="registry-root-grid"><div><strong>BitLockerの詳細な管理</strong><p>Windows 11では、主にWindows Pro、Enterprise、Pro Education、Educationで手動設定や詳細管理を利用できます。</p></div><div><strong>デバイスの暗号化</strong><p>対応する端末では、Windows Homeを含む環境でもBitLockerベースの暗号化が利用される場合があります。</p></div></div>
<div class="standard-callout"><strong>Windows Homeでも「デバイスの暗号化」が利用できる場合がある</strong><p>「デバイスの暗号化」と「BitLockerを詳細に設定・管理する機能」は同じ扱いではありません。「Windows Homeではドライブ暗号化をまったく利用できない」とは限りません。</p></div>

### BitLockerの状態を確認する

<p>Windowsでは、環境によってコントロールパネルなどからBitLockerの状態を確認できます。管理者がコマンドで確認する場合は、次の方法があります。</p>
<div class="registry-command"><code>manage-bde -status</code><p>ドライブの暗号化状態や保護状態などを確認できます。初心者は設定変更より先に、まず現在の状態を確認します。</p></div>

### 「暗号化状態」と「保護状態」

<div class="registry-root-grid"><div><strong>暗号化状態</strong><p>ドライブ内のデータが暗号化されているかを示します。</p></div><div><strong>保護状態</strong><p>BitLockerの保護機能が現在有効かを示します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>暗号化状態と保護状態は分けて確認する</strong><p>BitLocker保護を一時停止しても、ドライブ自体は暗号化されたままです。</p></div>

### 「保護の一時停止」と「BitLockerを無効にする」

<div class="registry-root-grid bitlocker-action-comparison"><div><strong>BitLocker保護を一時停止する</strong><ul><li>ドライブの暗号化は維持される</li><li>起動時の保護確認が一時的に停止する</li><li>BIOS/UEFI・ファームウェア関連作業などで必要になる場合がある</li><li>作業後は保護状態を確認する</li></ul></div><div><strong>BitLockerを無効にする</strong><ul><li>ドライブの復号が行われる</li><li>完了後はBitLockerで暗号化されていない状態になる</li><li>BitLockerによる保護を終了する操作</li></ul></div></div>
<div class="standard-callout standard-callout--key"><strong>一時停止と無効化は異なる</strong><p>「BitLockerを一時停止する」と「BitLockerを無効にして復号する」は同じ操作ではありません。</p></div>
<div class="standard-callout standard-callout--warning"><strong>回復キーの要求を避けることだけを目的に、保護を一時停止しない</strong><p>回復キーを要求された原因と組織の手順を確認します。</p></div>

### OSドライブ以外のBitLocker

<p>BitLockerはOSドライブだけでなく、固定データドライブなどにも利用できます。USBメモリなどのリムーバブルドライブを保護する仕組みは「BitLocker To Go」と呼ばれます。このページでは詳細設定までは扱わず、「BitLockerはCドライブだけの機能ではない」と理解できれば十分です。</p>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>まずBitLockerの状態を確認する</strong><p>有効・無効だけでなく、暗号化状態、保護状態、回復状態を確認します。</p></div><div><span>2</span><strong>回復キーの保管場所を確認する</strong><p>管理対象PCでは、障害前から回復情報が正しく管理されていることを確認します。</p></div><div><span>3</span><strong>回復モードになった原因を確認する</strong><p>TPM、BIOS/UEFI、ファームウェア、起動設定、ハードウェア変更などを確認します。</p></div><div><span>4</span><strong>構成変更前に影響を確認する</strong><p>更新や部品交換の前に、BitLockerへの影響と回復方法を確認します。</p></div><div><span>5</span><strong>安易にBitLockerを無効にしない</strong><p>原因確認前から無効化・復号せず、まず現在の状態と原因を確認します。</p></div><div><span>6</span><strong>回復キーを安全に扱う</strong><p>ドライブのロック解除に使える重要な情報として、組織のルールに従って管理します。</p></div></div>

### BitLocker回復画面が表示されたときの基本的な確認順序

<div class="remote-sequence remote-sequence--checks"><div><span>01</span><p>利用者・対象PCを確認する</p></div><i>↓</i><div><span>02</span><p>回復キーIDを確認する</p></div><i>↓</i><div><span>03</span><p>社内手順・本人確認を行う</p></div><i>↓</i><div><span>04</span><p>対応する回復キーを確認する</p></div><i>↓</i><div><span>05</span><p>回復キーを使ってドライブのロックを解除する</p></div><i>↓</i><div><span>06</span><p>Windowsが正常に起動するか確認する</p></div><i>↓</i><div><span>07</span><p>回復モードになった原因を確認する</p></div><i>↓</i><div><span>08</span><p>BitLockerの暗号化状態・保護状態を再確認する</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>回復できただけで対応を終えない</strong><p>「回復キーを入力して起動できた」だけで完了とせず、なぜ回復モードになったかを確認します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>突然回復キーを要求された</h3><p>直前にBIOS/UEFI、TPM、ファームウェア、起動設定、ハードウェアの変更がなかったか確認します。</p></div><div><span>2</span><h3>回復キーが見つからない</h3><p>個人判断で設定変更せず、会社PCでは組織の回復キー管理先と社内手順を確認します。</p></div><div><span>3</span><h3>回復キーが複数表示される</h3><p>回復キーIDを使って、対象PC・対象ドライブに対応する回復キーを確認します。</p></div><div><span>4</span><h3>保護が一時停止になっている</h3><p>直前の保守作業や更新を確認し、作業完了後は社内手順に従って保護状態を確認します。</p></div><div><span>5</span><h3>BitLockerの状態が分からない</h3><p>BitLocker管理画面や <code>manage-bde -status</code> などで、暗号化状態・保護状態を確認します。</p></div><div><span>6</span><h3>暗号化されているのに保護が一時停止されている</h3><p>「暗号化済み」と「保護中」は同じ意味ではありません。暗号化状態と保護状態を分けて確認します。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>WindowsのパスワードがあればSSDを取り外されても安全</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>Windowsサインインとドライブ暗号化は役割が異なります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>ウイルスや誤削除からもファイルを守れる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>ウイルス対策やバックアップとは役割が異なります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>回復キーの要求はPCかSSDの故障を意味する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>起動環境やTPMなどの状態変化でも回復モードになる場合があります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>一時停止はドライブを復号すること</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>一時停止しても暗号化は維持され、無効化・復号とは異なります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>回復キーで起動できれば対応完了</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>回復モードになった原因とBitLockerの状態も確認します</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>暗号化</strong><p>ドライブ内のデータが暗号化されているか。</p></div><div><strong>保護</strong><p>BitLockerの保護機能が現在有効か。</p></div><div><strong>回復</strong><p>通常の方法でロックを解除できない場合に、対応する回復キーを利用できる状態か。</p></div><div><strong>原因</strong><p>回復モードになった場合、TPMや起動構成などにどのような変化があったか。</p></div></div>
<p>この4つを分けて考えると、BitLockerの状態を整理しやすくなります。</p>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>ドライブを暗号化して保存データを保護する</strong></span><span class="takeaway-detail">PCの紛失・盗難などで、ストレージへ直接アクセスされるリスクを減らします。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>TPMと連携して通常時の安全な起動とロック解除を支える</strong></span><span class="takeaway-detail">起動環境などに重要な変化がある場合、回復キーが要求されることがあります。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>回復キーはBitLocker運用で重要な情報</strong></span><span class="takeaway-detail">保管場所を事前に確認し、組織のルールに従って安全に管理します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>回復後も原因と保護状態を確認する</strong></span><span class="takeaway-detail">回復キーを入力するだけで終わらず、なぜ回復モードになったかまで確認します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="./administrator-privileges"><strong>管理者権限</strong><p>安全に管理作業を行うための基本</p></a><a href="./gpo"><strong>グループポリシー</strong><p>Windows端末の設定をまとめて管理する仕組み</p></a><a href="./windows-update"><strong>Windows Update</strong><p>更新前後に端末の状態を確認する基本</p></a><a aria-disabled="true"><strong>TPM</strong><p>準備中</p></a><a href="../cloud/intune"><strong>Microsoft Intune</strong><p>管理対象端末の設定と状態を管理する仕組み</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>問題の原因を順番に切り分ける方法</p></a></div>

<p class="registry-last-updated">最終更新：2026/10/07</p>
