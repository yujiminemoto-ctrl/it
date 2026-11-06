---
title: Windowsサービス
description: Windowsサービスの役割、状態、スタートアップの種類、確認方法を学びます。
outline: false
pageClass: wsus-page registry-page command-prompt-page powershell-page windows-services-page
lastUpdated: false
---

# Windowsサービス

<p class="article-subtitle">Windowsやアプリケーションの機能をバックグラウンドで支える仕組み</p>
<p class="article-summary">Windowsサービスの役割と状態の見方を理解し、機能が利用できないときに、停止・設定・依存関係などを順番に確認するための基礎を学びます。</p>

<div class="wsus-meta-standard">
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span><span>対象環境</span><strong>Windows 11、Windows Server<br>社内PC・管理対象端末</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span><span>読了目安</span><strong>15～20分</strong></div>
  <div><span class="wsus-meta-standard__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></svg></span><span>更新基準</span><strong>2026年11月</strong></div>
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

<p>Windowsサービスは、Windowsやアプリケーションの機能をバックグラウンドで動かす仕組みです。利用者が画面を開いていないときや、Windowsへサインインしていないときにも動作するものがあります。</p>
<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>サービスは画面がなくても動作します。また、停止しているサービスがすべて異常とは限りません。役割、スタートアップの種類、利用条件を確認して判断します。</p></div>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>Windowsサービスはなぜ重要なのか {#why-important}

<div class="registry-root-grid"><div><strong>Windowsの基本機能</strong><p>印刷や更新など、日常的に利用する機能を支えます。</p></div><div><strong>業務アプリケーション</strong><p>アプリケーションの処理や端末との連携を支える場合があります。</p></div><div><strong>バックグラウンド処理</strong><p>利用者の画面操作とは別に、必要な処理を継続します。</p></div><div><strong>トラブルの切り分け</strong><p>機能が利用できないときに、関連サービスの状態が確認材料になります。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>サービス名だけで判断しない</strong><p>サービスを確認するときは、対象機能との関係、現在の状態、スタートアップの種類、依存関係、直前の変更を合わせて確認します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels"><div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>印刷できない</h3><p><strong>状況</strong><br>プリンターへ印刷ジョブを送っても印刷が進みません。</p><p><strong>具体例</strong><br>Print Spoolerサービスの状態を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>サービスだけでなく、プリンター、接続、印刷キューも確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>Windows Updateが進まない</h3><p><strong>状況</strong><br>更新の確認や適用が正常に進みません。</p><p><strong>具体例</strong><br>Windows Updateに関係するサービスの状態を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>サービスの状態だけで原因を断定せず、更新履歴やエラーも確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>業務アプリケーションを利用できない</h3><p><strong>状況</strong><br>アプリケーションの画面は開いても、一部の機能を利用できません。</p><p><strong>具体例</strong><br>アプリケーションが必要とするサービスの状態を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>提供元の資料で、必要なサービス名と正常な状態を確認します。</p></div><div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>起動後に機能を利用できない</h3><p><strong>状況</strong><br>Windows起動後、通常は使える機能が利用できません。</p><p><strong>具体例</strong><br>関連サービスが開始されているか、スタートアップの種類を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>直前の更新や設定変更、依存するサービスも確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### サービスの基本を理解する

#### Windowsサービスとは

<p>Windowsサービスは、利用者が画面を開いて操作しなくても、必要な処理を実行できる仕組みです。Windowsの起動時に開始されるものや、特定の機能が必要になったときに開始されるものがあります。</p>

#### 通常のアプリケーションとサービス

<div class="registry-root-grid"><div><strong>通常のアプリケーション</strong><p>利用者が起動し、画面を操作して使用するものが中心です。終了すると処理も終わる場合が一般的です。</p></div><div><strong>Windowsサービス</strong><p>Windowsやアプリケーションの機能を裏側で支えます。利用者が画面を開いていなくても動作する場合があります。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>サインイン状態とは別に動作する場合がある</strong><p>サービスは専用のアカウントで動作できるため、利用者がサインアウトしても処理を継続するものがあります。</p></div>

#### Service Control Manager

<p>Service Control Managerは、Windowsサービスの登録、開始、停止、状態などを管理するWindowsの仕組みです。「サービス」画面やPowerShellは、この仕組みを通じてサービス情報を確認します。</p>

#### サービスの主な状態

<div class="registry-root-grid"><div><strong>実行中</strong><p>サービスが動作している状態です。</p></div><div><strong>停止</strong><p>サービスが動作していない状態です。停止が正常なサービスもあります。</p></div><div><strong>開始中・停止中など</strong><p>サービスの状態が切り替わっている途中です。長時間同じ状態が続く場合は、関連するエラーなどを確認します。</p></div><div><strong>一時停止</strong><p>処理を一時的に止めている状態です。すべてのサービスが一時停止に対応するわけではありません。</p></div></div>

#### スタートアップの種類

<div class="wsus-cloud-table">

| 種類 | 基本的な考え方 |
|---|---|
| 自動 | Windowsの起動時に開始するよう構成されています。 |
| 自動（遅延開始） | Windows起動時、ほかの自動開始サービスより遅れて開始されます。 |
| 手動 | 管理者の操作だけでなく、Windowsやアプリケーションによって必要なときに開始される場合があります。 |
| 無効 | 開始できないよう設定されています。必要なサービスを無効にすると機能へ影響します。 |

</div>
<p>Windowsには、特定のイベントをきっかけに自動で開始されるサービスもあります。そのため、「手動」と表示されていても、必ずしも人が手動で開始するわけではありません。</p>
<div class="standard-callout standard-callout--key"><strong>種類と現在の状態は別</strong><p>「自動」でも問題によって停止する場合があり、「手動」でも必要に応じて開始されます。自動だから常に実行中、手動だから異常という意味ではありません。</p></div>

### サービスの設定や関係を理解する

#### 表示名とサービス名

<div class="registry-root-grid"><div><strong>表示名</strong><p>管理画面で人が読みやすい名称です。例：Print Spooler</p></div><div><strong>サービス名</strong><p>PowerShellや設定で識別に使われる名称です。例：<code>Spooler</code></p></div></div>
<p>表示名とサービス名は異なる場合があります。手順書やコマンドで指定された名前がどちらか確認します。</p>

#### サービスの依存関係

<p>サービスAは、サービスBが動作していることを必要とします。サービスAを開始する際、必要に応じて依存先のサービスBが開始される場合があります。</p>
<div class="registry-tree"><span><strong>サービスA</strong><br>利用する側</span><i>↓</i><strong>サービスBに依存</strong><i>↓</i><span><strong>サービスB</strong><br>依存先のサービス</span></div>
<p>この図は通信の方向ではなく、サービスAがサービスBに依存している関係を示しています。</p>
<div class="standard-callout standard-callout--warning"><strong>対象サービスだけを見ない</strong><p>依存するサービスが停止していると、対象サービスを開始できない場合があります。依存関係を確認せず、関連サービスをむやみに停止しないでください。</p></div>

#### サービスを動かすアカウント

<p>Windowsサービスは、利用者がWindowsにサインインしているアカウントとは別のアカウントで動作する場合があります。サービスが使用するアカウントによって、利用できる権限や接続先へのアクセスが異なります。</p>
<div class="wsus-cloud-table">

| 種類 | 基本的な特徴 |
|---|---|
| Local System | 端末上で高い権限を持つ組み込みアカウントです。 |
| Local Service | 端末上で制限された権限を持つ組み込みアカウントです。 |
| Network Service | 端末上では制限された権限で動作し、ネットワーク上ではコンピューターの資格情報を使用する組み込みアカウントです。 |
| アプリケーション用サービスアカウント | 業務アプリケーションなどが、専用のアカウントを使用する場合があります。 |

</div>
<div class="standard-callout standard-callout--warning"><strong>アカウントを自己判断で変更しない</strong><p>サービスの実行アカウントを変更すると、権限や接続先へのアクセスに影響します。提供元の手順や社内方針を確認します。</p></div>

### サービスを確認する

#### 「サービス」画面を開く

<div class="registry-tree"><span><kbd>Windows</kbd> + <kbd>R</kbd></span><i>↓</i><span><code>services.msc</code> を入力</span><i>↓</i><span>「OK」を選択</span></div>
<p>「サービス」画面では、サービスの名前、説明、状態、スタートアップの種類などを確認できます。サービスのプロパティを開くと、実行アカウントや依存関係なども確認できます。</p>

#### PowerShellで状態を確認する

<div class="registry-root-grid"><div><strong><code>Get-Service</code></strong><p>サービスの一覧と状態を確認します。</p></div><div><strong><code>Get-Service -Name Spooler</code></strong><p>サービス名が <code>Spooler</code> のサービスを確認します。</p></div></div>
<div class="standard-callout standard-callout--info"><strong>このページでは確認から始める</strong><p>初心者は、まずサービスの状態と名前を確認します。開始・停止などの変更操作は、影響と社内手順を確認してから行います。</p></div>

#### 開始・停止・再起動の意味

<div class="registry-card-grid"><div><strong>開始</strong><p>停止しているサービスの処理を開始します。</p></div><div><strong>停止</strong><p>実行中のサービスの処理を止めます。</p></div><div><strong>再起動</strong><p>サービスをいったん停止し、再び開始します。</p></div></div>
<div class="standard-callout standard-callout--warning"><strong>利用者や他の機能への影響を確認する</strong><p>サービスを停止・再起動すると、利用中の機能や業務アプリケーションが一時的に使えなくなる場合があります。対象、影響範囲、復旧方法を確認します。</p></div>

#### サービスが実行中でも機能が正常とは限らない

<p>サービスの「実行中」は、そのサービスの処理が開始されていることを示します。接続先、設定、権限、依存先、アプリケーション側などに問題があれば、機能を利用できない場合があります。</p>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者のポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>01</span><strong>対象サービスを特定する</strong><p>表示名とサービス名を確認し、同じ名前の別項目と取り違えないようにします。</p></div><div><span>02</span><strong>現在の状態を記録する</strong><p>実行中・停止など、変更前の状態を記録します。</p></div><div><span>03</span><strong>スタートアップの種類を確認する</strong><p>停止していることが想定された動作か判断する材料にします。</p></div><div><span>04</span><strong>依存関係を確認する</strong><p>必要な別サービスが正常に動作しているか確認します。</p></div><div><span>05</span><strong>直前の変更と影響範囲を確認する</strong><p>更新、設定変更、障害の発生時刻と利用者への影響を確認します。</p></div><div><span>06</span><strong>変更後に機能を確認する</strong><p>サービスの状態だけでなく、対象機能が正常に使えるか確認します。</p></div></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>01</span><h3>サービスが停止している</h3><p>スタートアップの種類、利用条件、依存関係を確認し、停止が異常か判断します。</p></div><div><span>02</span><h3>サービスを開始できない</h3><p>表示されたエラー、依存するサービス、実行アカウント、必要な権限を確認します。</p></div><div><span>03</span><h3>開始してもすぐ停止する</h3><p>アプリケーションの設定、必要な接続先、エラー情報、直前の変更を確認します。</p></div><div><span>04</span><h3>自動なのに実行されていない</h3><p>開始時のエラー、依存関係、直前の更新や設定変更を確認します。</p></div><div><span>05</span><h3>手動のサービスが実行中になっている</h3><p>Windowsやアプリケーションが必要に応じて開始した可能性があります。異常とは限りません。</p></div><div><span>06</span><h3>実行中でも機能を利用できない</h3><p>接続先、設定、権限、アプリケーション側など、サービス以外の要素も確認します。</p></div></div>

### よくある勘違いと正しい考え方

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある勘違い</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>正しい考え方</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>停止しているサービスはすべて異常</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>必要なときだけ開始されるサービスもあるため、種類と利用条件を確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>自動なら常に実行中になる</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>自動は開始方法の設定であり、エラーなどで停止する場合があります</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>実行中なら機能全体も正常</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>接続先、設定、権限、アプリケーション側にも問題がないか確認します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>問題があればすぐ再起動する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>現在の状態、影響範囲、依存関係を確認してから対応します</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>不要に見えるサービスは無効にしてよい</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>Windowsやアプリケーションへの影響を確認し、自己判断で無効にしません</p></div></div>

### 管理者として覚えておきたい考え方

<div class="registry-root-grid"><div><strong>役割</strong><p>そのサービスがどの機能を支えているか。</p></div><div><strong>状態</strong><p>現在の状態とスタートアップの種類は何か。</p></div><div><strong>関係</strong><p>依存するサービスや接続先は何か。</p></div><div><strong>影響</strong><p>停止・再起動・設定変更で誰に何が起きるか。</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>Windowsサービスは機能をバックグラウンドで支える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">Windowsやアプリケーションに必要な処理を、画面操作とは別に実行します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>状態とスタートアップの種類を分けて考える</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">停止や手動という表示だけで異常と判断しません。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>依存関係と影響範囲を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">関連サービスや利用中の機能を確認してから変更します。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>実行中でも機能が正常とは限らない</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">設定、権限、接続先、アプリケーション側も順番に切り分けます。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages"><a href="./powershell"><strong>PowerShell</strong><p><code>Get-Service</code> で状態を確認する基本</p></a><a href="./windows-update"><strong>Windows Update</strong><p>Windows更新の仕組みと確認方法</p></a><a href="./administrator-privileges"><strong>管理者権限</strong><p>管理操作と安全な権限の使い方</p></a><a href="./command-prompt"><strong>コマンドプロンプト</strong><p>Windowsの状態確認に使う基本ツール</p></a><a aria-disabled="true"><strong>イベントビューアー</strong><p>準備中</p></a><a href="../operations/troubleshooting"><strong>Windowsトラブルシューティング</strong><p>問題の原因を順番に切り分ける方法</p></a></div>

<p class="registry-last-updated">最終更新：2026/11/06</p>
