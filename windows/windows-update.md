---
title: Windows Update
description: Windows端末を安全な状態に保つための更新の仕組みと、企業での確認ポイントを学びます。
outline: false
pageClass: wsus-page windows-update-page
lastUpdated: false
---

# Windows Update

<p class="article-subtitle">Windows端末を安全な状態に保つための更新の仕組み</p>
<p class="article-summary">Windows Updateは、Windowsのセキュリティ修正、不具合修正、機能更新、ドライバーなどを取得・適用するための仕組みです。社内ITでは、更新できるかどうかだけでなく、配布されている更新、再起動の要否、失敗の有無、会社の管理方針による制御を確認することが重要です。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、Windows 10<br>社内PC、管理対象端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年8月</strong></div>
</div>

<nav class="wsus-nav-standard" aria-label="このページの内容">
<p><span class="wsus-nav-standard__title-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5a3 3 0 0 0-3-3H6.5A3.5 3.5 0 0 0 3 5.5v16A3.5 3.5 0 0 1 6.5 18H9a3 3 0 0 1 3 3V5Z"/><path d="M12 5a3 3 0 0 1 3-3h2.5A3.5 3.5 0 0 1 21 5.5v16a3.5 3.5 0 0 0-3.5-3.5H15a3 3 0 0 0-3 3V5Z"/></svg></span>このページの内容</p>
<a href="#why-important"><span class="wsus-nav-standard__icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span><span>なぜ重要なのか</span></a>
<a href="#typical-scenarios"><span class="wsus-nav-standard__icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span><span>実際の利用シーン</span></a>
<a href="#how-it-works"><span class="wsus-nav-standard__icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span><span>基本的な仕組み</span></a>
<a href="#administrator-perspective"><span class="wsus-nav-standard__icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span><span>管理者のポイント</span></a>
<a href="#common-issues"><span class="wsus-nav-standard__icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span><span>よくあるトラブル</span></a>
<a href="#page-summary"><span class="wsus-nav-standard__icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span><span>まとめ</span></a>
</nav>

## 概要

### Windows Updateの全体像

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>Windows Updateは、利用可能な更新を確認し、端末へ適用し、必要に応じて再起動する一連の処理です。</p></div>

会社のPCでは、WSUS、Windows Update for Business、Intuneなどによって、更新のタイミングや配布方法が管理されている場合があります。

<div class="windows-update-flow windows-update-flow--overview"><span>更新を確認</span><i>→</i><span>更新を適用</span><i>→</i><span>必要に応じて再起動</span><i>→</i><span>完了</span></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>Windows Updateはなぜ重要なのか {#why-important}

<div class="windows-update-purpose-grid"><div><strong>セキュリティ上の問題を修正する</strong><p>既知の脆弱性を修正し、攻撃や不正利用のリスクを減らします。</p></div><div><strong>Windowsの不具合を修正する</strong><p>動作上の問題や安定性に関する修正を適用します。</p></div><div><strong>新しい機能や仕様に対応する</strong><p>Windowsの新しいバージョンや仕様変更へ対応します。</p></div><div><strong>一部のドライバーを更新する</strong><p>機器を動作させるドライバーが提供される場合があります。</p></div></div>

### 更新しないと起こる可能性があること

<div class="windows-update-risk-list"><span>既知のセキュリティ問題が残る</span><span>不具合が修正されない</span><span>新しい機能や仕様へ対応できない</span><span>社内システムとの互換性に影響する</span><span>会社のセキュリティ基準を満たせない</span></div>

<div class="standard-callout standard-callout--key"><strong>更新は影響を確認して適用する</strong><p>更新は重要ですが、業務への影響を確認せず、すべてを即時適用すればよいわけではありません。企業では、WSUSなどを利用して事前検証や段階的な配布を行うことがあります。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="windows-update-scenario-grid">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>「再起動が必要」と表示されている</h3><p><strong>状況</strong><br>更新のインストール後に再起動が必要と表示される場合があります。</p><ol><li>作業中のファイルを保存する</li><li>業務への影響がない時間を確認する</li><li>PCを再起動する</li><li>再起動後に更新状態を再確認する</li></ol><p class="scenario-point"><strong>実務のポイント</strong><br>使用中のシステムファイルを置き換えるため、再起動が必要になる更新があります。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>「最新の状態です」と表示されるが、別のPCには更新がある</h3><p><strong>状況</strong><br>端末によって表示される更新が異なる場合があります。</p><ol><li>Windowsのバージョンを確認する</li><li>更新の管理方式を確認する</li><li>WSUSやIntuneなどの配布対象を確認する</li><li>公開時期や段階配布を確認する</li></ol><p class="scenario-point"><strong>実務のポイント</strong><br>「最新の状態です」は、すべてのWindows PCで同じ更新が適用済みという意味ではありません。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>ダウンロードやインストールが進まない</h3><p><strong>状況</strong><br>更新処理が途中の段階で止まる場合があります。</p><ol><li>ネットワーク接続を確認する</li><li>ストレージの空き容量を確認する</li><li>再起動待ちの更新を確認する</li><li>エラーコードと更新履歴を確認する</li></ol><p class="scenario-point"><strong>実務のポイント</strong><br>ダウンロード、インストール、再起動のどの段階で止まっているかを確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>更新後にアプリや周辺機器の動作がおかしくなった</h3><p><strong>状況</strong><br>更新後にアプリや機器の問題が見つかる場合があります。</p><ol><li>適用された更新を確認する</li><li>問題が発生した時刻を確認する</li><li>他の端末でも発生しているか確認する</li><li>更新との関連を切り分ける</li></ol><p class="scenario-point"><strong>実務のポイント</strong><br>更新後に発生したことと、更新が原因であることは同じではありません。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### Windows Updateの基本的な流れ

<div class="windows-update-flow windows-update-flow--vertical"><span>更新を確認</span><i>↓</i><span>利用可能な更新を検出</span><i>↓</i><span>ダウンロード</span><i>↓</i><span>インストール</span><i>↓</i><span>必要に応じて再起動</span><i>↓</i><span>更新履歴で確認</span></div>

更新によっては、ダウンロードやインストールが自動で行われます。端末の設定や会社の管理方針によって動作は異なります。

### 更新の主な種類

<div class="windows-update-type-grid"><div><strong>品質更新プログラム</strong><p>セキュリティ修正や不具合修正を含む更新です。</p><ul><li>定期的に提供される</li><li>セキュリティ修正を含むことがある</li><li>累積更新として提供されることが多い</li></ul></div><div><strong>機能更新プログラム</strong><p>Windowsの新しいバージョンや大きな機能変更を適用する更新です。</p><code>Windows 11 24H2 → 25H2</code><p>変更範囲が大きく、適用に時間がかかる場合があります。</p></div><div><strong>セキュリティ更新</strong><p>Windowsの脆弱性を修正し、攻撃や不正利用のリスクを減らすための更新です。</p><p>品質更新プログラムに含まれて提供されることがあります。</p></div><div><strong>ドライバー更新</strong><p>機器を動作させるドライバーが提供されることがあります。</p><ul><li>ディスプレイ</li><li>ネットワーク</li><li>オーディオ</li><li>プリンター</li></ul></div></div>

### 累積更新とは

<div class="windows-update-definition"><p>累積更新は、過去の修正内容をまとめて含む更新です。前回までの更新を適用していない場合でも、最新の累積更新に過去の修正が含まれていることがあります。</p></div>

### オプションの更新プログラム

必須ではない更新や、特定の問題に対する修正、ドライバー更新などが表示されることがあります。

<div class="standard-callout standard-callout--key"><strong>必要性を確認して適用する</strong><p>「オプション」と表示されている更新を、理由なくすべて適用する必要はありません。</p></div>

### 再起動が必要な理由

Windowsが動作中に使用しているファイルやシステムの一部は、そのまま置き換えられない場合があります。

<div class="windows-update-mini-flow"><span>更新をインストール</span><i>→</i><span>再起動</span><i>→</i><span>Windows起動時に更新を反映</span></div>

再起動を長期間延期すると、更新が完全に適用されない状態が続く場合があります。

### アクティブ時間と更新の一時停止

<div class="windows-update-two-card"><div><strong>アクティブ時間</strong><p>Windowsを利用している時間帯として設定・判断される時間です。作業中の自動再起動を避けるために利用されます。</p></div><div><strong>更新の一時停止</strong><p>Windows Updateを一時的に停止する機能です。業務都合や一時的な問題回避に利用できますが、長期間更新しないための機能ではありません。</p></div></div>

### 更新履歴

「設定 → Windows Update → 更新の履歴」から、いつどの更新が適用されたかを確認できます。

<div class="windows-update-history-list"><span>品質更新プログラム</span><span>ドライバー更新</span><span>その他の更新</span><span>更新の適用結果</span></div>

トラブル時に最初に確認する基本的な場所の一つです。

### Windows Updateと企業の更新管理

<div class="windows-update-management"><div><strong>個人PCの例</strong><p>PC → Windows Update → Microsoftの更新サービス</p></div><div><strong>WSUSで管理する例</strong><p>PC → WSUS → 承認された更新を取得</p></div><div><strong>クラウドで方針を管理する例</strong><p>PC → Windows Update</p><small>Windows Update for BusinessやIntuneで適用時期などを管理</small></div></div>

<div class="standard-callout"><strong>画面が同じでも管理方式は異なる</strong><p>Windows Updateの画面が同じでも、更新の取得先や適用タイミングは会社の管理方式によって異なる場合があります。</p></div>

<div class="windows-update-management-notes"><div><strong>WSUS</strong><p>社内で更新を集中管理し、承認や配布タイミングを制御します。</p></div><div><strong>Windows Update for Business</strong><p>Windows Updateを利用しながら、適用時期や延期などをポリシーで管理します。</p></div><div><strong>Intune</strong><p>クラウドからWindows端末の更新方針を管理できます。</p></div></div>

<div class="standard-callout"><strong>「更新プログラムのチェック」の意味</strong><p>手動で実行すると、端末が利用可能な更新を再確認します。ただし、会社の管理ポリシーで配布時期が制御されている場合は、すぐに更新が表示されないことがあります。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-perspective}

<div class="admin-principles windows-update-admin-grid"><div><span>1</span><strong>Windows Updateの状態を確認する</strong><p>利用可能な更新、進行状況、エラー表示、再起動待ちを確認します。</p></div><div><span>2</span><strong>更新履歴を確認する</strong><p>適用済みの更新、失敗した更新、適用時刻を確認します。</p></div><div><span>3</span><strong>Windowsのバージョンを確認する</strong><p>WindowsのバージョンとOSビルドを確認し、対象となる更新が異ならないか確認します。</p></div><div><span>4</span><strong>更新の管理方式を確認する</strong><p>WSUS、Intune、Windows Update for Businessなど、端末がどの方式で管理されているか確認します。</p></div><div><span>5</span><strong>影響範囲と発生時刻を確認する</strong><p>1台だけか複数台か、更新前後のどの時点から問題が発生したかを確認します。</p></div><div><span>6</span><strong>必要に応じてエラーコードやログを確認する</strong><p>基本情報を確認したうえで、必要な場合にエラーコードやログを使って詳しく切り分けます。</p></div></div>

<div class="standard-callout standard-callout--key"><strong>更新を適用するときは業務への影響も確認する</strong><p>再起動、アプリケーションとの互換性、利用者への影響を考慮し、必要に応じて適切な時間帯や段階配布を検討します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid windows-update-trouble-grid"><div><span>1</span><h3>更新が0％から進まない</h3><p>ネットワーク、空き容量、再起動待ち、更新元を確認します。</p></div><div><span>2</span><h3>インストールに失敗する</h3><p>エラーコード、更新履歴、空き容量、再起動状態を確認します。</p></div><div><span>3</span><h3>再起動後も「再起動が必要」と表示される</h3><p>更新状態と履歴を再確認し、処理中の更新が残っていないか確認します。</p></div><div><span>4</span><h3>同じ更新が何度も表示される</h3><p>更新履歴、失敗した更新、管理側の配布状態を確認します。</p></div><div><span>5</span><h3>一部のPCだけ更新が表示されない</h3><p>Windowsのバージョン、管理方式、配布対象、適用時期を確認します。</p></div><div><span>6</span><h3>更新後にアプリが動かない</h3><p>発生時刻、適用更新、他端末の状態、アプリ側の情報を確認します。</p></div><div><span>7</span><h3>ドライバー更新後に機器が動作しない</h3><p>適用されたドライバー、機器の状態、メーカー提供情報を確認します。</p></div></div>

### 確認に使う主な画面・コマンド

<div class="windows-update-check-list"><div><strong>Windows Update</strong><code>設定 → Windows Update</code><p>更新状態、再起動待ち、利用可能な更新を確認します。</p></div><div><strong>更新の履歴</strong><code>設定 → Windows Update → 更新の履歴</code><p>適用済み更新や失敗した更新を確認します。</p></div><div><strong><code>winver</code></strong><p>WindowsのバージョンとOSビルドを確認します。</p></div><div><strong>PowerShell：<code>Get-HotFix</code></strong><p>一部のインストール済み更新を確認します。Windows Updateに関するすべての情報が表示されるわけではありません。</p></div></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>更新が表示されないので何度も確認を実行する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>管理方式、配布対象、適用時期を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>失敗したらすぐにOS修復を始める</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>エラーコード、再起動状態、空き容量、更新履歴を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>更新後の問題は更新が原因だと決めつける</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>発生時刻、他端末、アプリやドライバーの状態を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>再起動を長期間延期する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>業務への影響を確認し、適切な時間に再起動する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>オプションの更新をすべて適用する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>必要性と影響を確認してから適用する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>1台だけの問題と複数台の問題を同じように扱う</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>影響範囲を確認して切り分ける</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>Windows UpdateはWindowsを安全・安定した状態に保つ</strong><span class="takeaway-separator">&#8288;—</span></span><span class="takeaway-detail">セキュリティ修正や不具合修正などを適用します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>更新には種類がある</strong><span class="takeaway-separator">&#8288;—</span></span><span class="takeaway-detail">品質更新、機能更新、ドライバー更新など、目的や影響が異なります。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>更新は再起動まで含めて確認する</strong><span class="takeaway-separator">&#8288;—</span></span><span class="takeaway-detail">インストール後に再起動が必要な場合があります。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>企業PCでは更新の管理方式も確認する</strong><span class="takeaway-separator">&#8288;—</span></span><span class="takeaway-detail">WSUS、Windows Update for Business、Intuneなどで取得方法や適用時期が異なる場合があります。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages windows-update-related"><a href="./wsus"><span>Windows・認証基盤</span><strong>WSUS</strong><p>社内でWindows更新を集中管理する仕組み</p></a><a href="./gpo"><span>Windows・認証基盤</span><strong>グループポリシー</strong><p>Windows端末へ設定を適用する仕組み</p></a><a href="../cloud/intune"><span>クラウド・端末管理</span><strong>Microsoft Intune</strong><p>クラウドから端末と更新方針を管理する仕組み</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>Windowsトラブルシューティング</strong><p>問題の影響範囲と原因を順番に切り分ける方法</p></a></div>

<p class="windows-update-last-updated">最終更新：2026/08/24</p>
