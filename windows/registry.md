---
title: レジストリ
description: Windowsの設定情報を確認するためのレジストリの基本と、安全な扱い方を学びます。
outline: false
pageClass: wsus-page registry-page
lastUpdated: false
---

# レジストリ

<p class="article-subtitle">Windowsの設定情報を管理する仕組み</p>
<p class="article-summary">Windowsのレジストリは、Windowsやアプリケーションが使用する各種設定情報を、階層構造で管理する仕組みです。ユーザー、サービス、アプリケーションの設定や、一部のハードウェア情報などが保存されます。ただし、Windowsのすべての設定がレジストリに保存されているわけではありません。社内ITではトラブル対応や設定確認のために参照しますが、誤った変更は動作に影響します。まずは「変更する場所」ではなく「設定情報を確認する場所」として理解しましょう。</p>

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

<div class="standard-callout standard-callout--key"><strong>最初に覚えること</strong><p>レジストリは、Windowsやアプリケーションが利用する設定情報を階層的に管理する仕組みです。</p></div>
<div class="registry-overview"><div class="registry-overview__sources"><span>Windows</span><span>アプリケーション</span><span>ユーザー設定</span></div><span class="registry-arrow">↓</span><strong>レジストリ</strong><span class="registry-arrow">↓</span><span>各種設定情報</span></div>
<p>設定画面と連動している項目もあれば、管理者向けの設定としてレジストリ上で確認する項目もあります。</p>

## <span class="wsus-section-heading-icon is-green" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-1.2.8-1.6 1.3-1.6 2.55M12 17h.01"/></svg></span>レジストリはなぜ重要なのか {#why-important}

<p>Windowsの動作、ユーザーごとの表示、アプリケーション、サービス、一部のハードウェア、グループポリシーによる設定などがレジストリに保存・反映されることがあります。</p>
<div class="registry-card-grid"><div><strong>設定画面だけでは分かりにくい値</strong><p>指定されたキーと値を確認します。</p></div><div><strong>アプリケーションの設定状態</strong><p>メーカー資料に示された値と比較します。</p></div><div><strong>設定の反映状況</strong><p>トラブル時に現在の値と管理元を確認します。</p></div></div>
<div class="standard-callout"><strong>値があるだけでは管理元は分からない</strong><p>Windows、アプリケーション、グループポリシー、管理ツールなどが値を作成・更新する場合があります。値が存在していても、手動で設定されたとは限りません。</p></div>

### 誤った変更による影響

<p>誤った変更によって、アプリケーションやサービスが起動しない、Windowsの一部機能やユーザー設定が正常に動作しないなどの問題が起こり得ます。変更箇所によってはログオンや起動にも影響します。</p>
<div class="standard-callout standard-callout--warning"><strong>内容を理解せずに変更・削除しない</strong><p>変更する場合は、対象、現在値、影響範囲、設定の管理元を確認してから作業します。</p></div>

## <span class="wsus-section-heading-icon is-cyan" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.4-4.2 2.3-6.3 5.5-6.3s5.1 2.1 5.5 6.3M14.5 14.5c3.5-.4 5.5 1.4 6 5.5"/></svg></span>実際の利用シーン {#typical-scenarios}

<div class="registry-scenario-grid registry-scenario-grid--compact-labels">
<div class="scenario-card"><p class="scenario-kicker">利用シーン 01</p><h3>アプリケーションの設定をレジストリで確認する</h3><p><strong>状況</strong><br>メーカー資料や社内手順書で、特定のレジストリ値を確認するよう案内されることがあります。</p><p><strong>具体例</strong><br>手順書で <code>1</code> が指定されている場合に、<code>Enabled = 1</code> になっているか確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>指定されたパス、値の名前、値の種類、データを手順書と照合します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 02</p><h3>設定画面の内容とレジストリ上の設定を確認する</h3><p><strong>状況</strong><br>Windowsやアプリケーションの設定が、どのような状態になっているか確認したい場合があります。</p><p><strong>具体例</strong><br>設定画面で特定の機能が有効なとき、関連するレジストリ値の状態を確認します。</p><p class="scenario-point"><strong>確認ポイント</strong><br>すべてが1対1で対応するわけではないため、必要に応じてGPOやIntuneなどの管理元も確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 03</p><h3>特定のユーザーだけ動作や設定が異なる</h3><p><strong>状況</strong><br>同じ端末でも、サインインするユーザーによってアプリケーションの動作や設定が異なる場合があります。</p><p><strong>具体例</strong><br>同じPCで、Aさんには設定が反映されているが、Bさんには反映されていない場合があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br><a href="#hkcu"><code>HKCU</code></a> などのユーザー単位の設定と、<a href="#hklm"><code>HKLM</code></a> などの端末全体の設定を分けて確認します。</p></div>
<div class="scenario-card"><p class="scenario-kicker">利用シーン 04</p><h3>レジストリ変更後に動作が変わった</h3><p><strong>状況</strong><br>手順書に従って値を変更したあと、Windowsやアプリケーションの動作が変わることがあります。</p><p><strong>具体例</strong><br>アプリケーションの再起動後に設定が反映されたり、正常に起動しなくなったりする場合があります。</p><p class="scenario-point"><strong>確認ポイント</strong><br>変更した場所と変更前の値を確認し、必要に応じて承認された手順で元の状態へ戻します。</p></div>
</div>

## <span class="wsus-section-heading-icon is-purple" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 14.8 6L14.5 3h-5l-.3 3A8 8 0 0 0 7.5 7L5 6.1 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.3 3h5l.3-3a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z"/></svg></span>基本的な仕組み {#how-it-works}

### レジストリエディター

<p>Windowsでは、<code>Windowsキー + R</code> で「ファイル名を指定して実行」を開き、<code>regedit</code> と入力するとレジストリエディターを起動できます。キーと値を階層構造で確認できます。</p>
<div class="standard-callout standard-callout--warning"><strong>確認中も編集に注意する</strong><p>レジストリエディターでは設定を直接変更できます。確認だけの場合でも、誤って編集しないよう注意します。</p></div>

### レジストリの場所をどう確認するか

<p>手順書やメーカー資料では、<code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft...</code> のようにレジストリパスが指定されることがあります。レジストリエディターでは、左側のツリーを順番に開いて、指定されたキーを確認します。</p>
<ol class="registry-steps"><li>レジストリパスが一致しているか</li><li>値の名前が一致しているか</li><li>値の種類が一致しているか</li><li>データの内容が想定どおりか</li></ol>
<div class="standard-callout standard-callout--key"><strong>似た名前から推測しない</strong><p>似た名前のキーや値を推測して変更しないでください。パス、値の名前、値の種類まで確認します。</p></div>

### レジストリの構造

<div class="registry-tree"><span>ルートキー</span><i>↓</i><span>キー</span><i>↓</i><span>サブキー</span><i>↓</i><span>値</span></div>
<p>キーは、イメージとしてはフォルダーに近い階層構造です。値には設定情報が保存されます。例えば <code>HKEY_LOCAL_MACHINE</code> → <code>SOFTWARE</code> → <code>Microsoft</code> のように下位へたどります。ただし、ファイルシステムと同じものではありません。</p>

### 主なルートキー

<div class="registry-root-grid"><div id="hklm"><strong>HKEY_LOCAL_MACHINE <small>HKLM</small></strong><p>端末全体に関係する設定です。Windows、サービス、ドライバー、一部のアプリケーション設定などを確認します。</p></div><div id="hkcu"><strong>HKEY_CURRENT_USER <small>HKCU</small></strong><p>現在サインインしているユーザーに関係する設定です。表示、個人設定、アプリケーション設定などを確認します。</p></div></div>
<div class="registry-card-grid"><div><strong>HKEY_CLASSES_ROOT <small>HKCR</small></strong><p>ファイルの関連付けやアプリケーションの登録情報などを確認します。</p></div><div><strong>HKEY_USERS <small>HKU</small></strong><p>読み込まれているユーザープロファイルごとの設定を確認できます。</p></div><div><strong>HKEY_CURRENT_CONFIG <small>HKCC</small></strong><p>現在のハードウェア構成に関する情報を参照します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>まずはHKLMとHKCU</strong><p>日常的な社内IT業務では、端末全体の設定か、現在のユーザーの設定かを分けて考えることが重要です。</p></div>

### 端末全体の設定とユーザーごとの設定

<div class="registry-root-grid"><div><strong>HKLM</strong><p>端末全体に影響する設定</p></div><div><strong>HKCU</strong><p>現在のユーザーに影響する設定</p></div></div>
<p>同じ端末でAさんには問題が出るがBさんには出ない場合、ユーザー単位の設定を疑う材料になります。ただし、それだけで原因を断定はできません。</p>

### キー・値・データ

<div class="registry-value-example"><p><code>HKEY_LOCAL_MACHINE\SOFTWARE\Example</code></p><ul><li><strong>HKEY_LOCAL_MACHINE</strong>：ルートキー</li><li><strong>SOFTWARE</strong>：キー</li><li><strong>Example</strong>：サブキー</li></ul><p><code>Enabled　REG_DWORD　1</code></p><ul><li><strong>Enabled</strong>：値の名前</li><li><strong>REG_DWORD</strong>：値の種類</li><li><strong>1</strong>：データ</li></ul></div>
<p>サブキーは、あるキーの下にあるキーを指す呼び方です。サブキー自体もレジストリキーです。</p>

### 主な値の種類

<div class="registry-card-grid"><div><strong>REG_SZ</strong><p>文字列を保存します。例：<code>ServerName = server01</code></p></div><div><strong>REG_DWORD</strong><p>32ビットの数値を保存します。例：<code>0</code>、<code>1</code></p></div><div><strong>REG_EXPAND_SZ</strong><p>環境変数を含む文字列を保存できます。例：<code>%SystemRoot%</code></p></div><div><strong>REG_MULTI_SZ</strong><p>複数の文字列を保存します。</p></div><div><strong>REG_BINARY</strong><p>バイナリ形式のデータを保存します。詳しい読み方はここでは扱いません。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>数値の意味は設定ごとに確認する</strong><p><code>0</code> が無効、<code>1</code> が有効とは限りません。手順書や公式資料で値の意味を確認します。</p></div>

### 32ビットと64ビット

<p>64ビット版Windowsでは、一部の32ビットアプリケーションの設定が <code>WOW6432Node</code> 配下に保存されることがあります。</p>
<div class="registry-path-pair"><code>HKEY_LOCAL_MACHINE\SOFTWARE</code><code>HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node</code></div>
<div class="standard-callout standard-callout--key"><strong>場所を決めつけない</strong><p>すべての32ビットアプリケーション設定が <code>WOW6432Node</code> に保存されるわけではありません。確認する場所はアプリケーションやメーカー資料に従います。</p></div>

### レジストリと設定の管理元

<div class="registry-root-grid"><div><strong>グループポリシー</strong><p>グループポリシーで設定された内容の一部は、レジストリに反映されます。直接値を変更しても、ポリシーの再適用で元に戻る場合があります。</p></div><div><strong>Intune・MDM</strong><p>MDMはもともとモバイル端末管理を表す名称ですが、現在はスマートフォンやタブレットだけでなく、Windows PCの管理にも利用されます。IntuneやMDMによって適用された設定の中には、レジストリ上で確認できるものもありますが、すべての設定がレジストリにそのまま保存されるわけではありません。管理対象端末ではレジストリだけで判断せず、適用されているポリシー側も確認します。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>レジストリは設定の管理元とは限らない</strong><p>レジストリに値が存在していても、その値はWindows、アプリケーション、グループポリシー、Intuneなどによって作成・更新されている場合があります。直接変更する前に、その設定がどこから適用されているか確認します。</p></div>

### 変更前の記録とエクスポート

<p>レジストリエディターでは対象のキーを <code>.reg</code> ファイルとしてエクスポートできます。変更前の状態を記録する方法の一つです。</p>
<p>1つのレジストリ値を変更するような作業では、変更前の値を記録し、対象キーをエクスポートしておくことで、変更前の状態を確認しやすくなります。</p>
<ol class="registry-steps"><li>対象キーを選択する</li><li>右クリックする</li><li>「エクスポート」を選択する</li><li>保存する</li></ol>
<p><code>.reg</code> ファイルのエクスポートは、選択したキーや値を記録する方法であり、Windowsやアプリケーション全体の状態を保存するものではありません。設定変更に伴ってファイルやサービスなどの状態も変わる場合や、GPO、Intune、Windows、アプリケーションによって値が再設定される場合があります。値を戻したあとに再起動や再度のサインインが必要になることもあります。</p>
<div class="standard-callout standard-callout--warning"><strong>エクスポートは完全なバックアップではない</strong><p>変更前の値、変更箇所、作業日時、その設定がどこから適用されているかも記録しておきます。</p></div>

<div class="registry-card-grid"><div><strong>.reg エクスポート</strong><p>指定したレジストリキーや値を記録します。</p></div><div><strong>復元ポイント</strong><p>「システムの復元」で、Windowsのシステム状態を以前の時点へ戻します。</p></div><div><strong>システムイメージ・組織のバックアップ</strong><p>端末をより広い範囲で復元します。対象範囲は方法や設定によって異なります。</p></div></div>
<div class="standard-callout"><strong>より広い範囲を戻したい場合</strong><p>Windowsには、システムの状態を以前の時点へ戻すための「復元ポイント」があります。レジストリだけでなく、システムファイル、ドライバー、一部のWindows設定などを復元対象にできます。ただし、端末全体の完全なバックアップではなく、個人ファイルやすべてのアプリケーションデータを保存・復元する仕組みではありません。</p></div>
<div class="standard-callout"><strong>端末全体を戻したい場合</strong><p>端末をバックアップ時点に近い状態へ戻したい場合は、システムイメージ、ディスクバックアップ、組織で指定されたバックアップ方法を使用します。Windows、アプリケーション、設定、ディスク上のデータなど、復元ポイントより広い範囲を対象にできる場合があります。</p></div>
<div class="standard-callout standard-callout--admin"><strong>変更内容に応じて保護方法を選ぶ</strong><p>目安として、1つの値の変更では変更前の記録と対象キーのエクスポート、Windowsの動作に大きく影響する変更では必要に応じて復元ポイントや組織指定のバックアップ、端末全体の復旧ではシステムイメージなどを検討します。組織の手順と、実際に復元できる範囲を確認して選びます。</p></div>

### 変更後はいつ反映されるのか

<p>レジストリの変更がいつ反映されるかは、設定によって異なります。設定によっては、次の操作が必要になる場合があります。</p>
<div class="registry-card-grid"><div><strong>アプリケーションの再起動</strong><p>対象のアプリケーションを終了し、再度起動します。</p></div><div><strong>再度サインイン</strong><p>サインアウトしたあと、もう一度サインインします。</p></div><div><strong>Windowsの再起動</strong><p>端末の再起動後に設定が反映される場合があります。</p></div><div><strong>グループポリシーが関係する設定</strong><p>ポリシーの再適用によって設定が更新されたり、手動で変更した値が元に戻ったりする場合があります。</p></div></div>
<div class="standard-callout standard-callout--key"><strong>反映条件を先に確認する</strong><p>変更したのに反映されないからといって、さらに別の値を変更しないでください。まず、その設定がいつ反映されるのかを手順書や公式資料で確認します。</p></div>

### .reg ファイル

<p><code>.reg</code> ファイルは、レジストリのキーや値を追加・変更するために使用できます。内容によっては削除を行うこともできます。</p>
<div class="standard-callout standard-callout--warning"><strong>内容を確認せずに適用しない</strong><p>内容を確認せずに <code>.reg</code> ファイルを適用しないでください。メーカーや社内から提供されたファイルでも、対象環境と変更内容を確認してから使用します。</p></div>

### コマンドで確認する

<div class="registry-command"><code>reg query "HKLM\SOFTWARE\Example"</code><p><code>reg query</code> でキーや値をコマンドから確認できます。変更用の <code>reg add</code> や <code>reg delete</code> もありますが、このページでは確認を中心に扱います。</p></div>

## <span class="wsus-section-heading-icon is-orange" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 12l2.2 2.2 4.8-5"/></svg></span>管理者の確認ポイント {#administrator-checks}

<div class="admin-principles registry-admin-grid"><div><span>1</span><strong>端末全体かユーザー単位か確認する</strong><p>HKLMとHKCUのどちらに関係する設定か確認します。</p></div><div><span>2</span><strong>変更前の値を記録する</strong><p>現在値を記録し、必要に応じて対象キーをエクスポートします。</p></div><div><span>3</span><strong>設定の管理元を確認する</strong><p>Windows、アプリケーション、GPO、Intuneなどのどこから設定されているか確認します。</p></div><div><span>4</span><strong>値の種類と意味を確認する</strong><p>REG_DWORDやREG_SZの種類だけでなく、値の意味を手順書や公式資料で確認します。</p></div><div><span>5</span><strong>影響範囲を確認する</strong><p>1ユーザー、端末全体、複数端末のどこまで影響するか確認します。</p></div><div><span>6</span><strong>変更履歴を残す</strong><p>誰が、いつ、どの値を、何から何へ変更したか記録します。</p></div></div>
<div class="standard-callout standard-callout--admin"><strong>「値があるから削除する」ではなく、設定の意味を確認する</strong><p>不要に見える値でも用途を確認せず削除しません。メーカー、Microsoft、社内の資料など、根拠のある情報に基づいて作業します。</p></div>

## <span class="wsus-section-heading-icon is-red" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 6h8M9 6V4h6v2M7 10h10v6a5 5 0 0 1-10 0v-6Z"/><path d="M3 13h4M17 13h4M4 18l3-1M20 18l-3-1"/></svg></span>よくあるトラブル {#common-issues}

<div class="trouble-grid trouble-grid--six registry-trouble-grid"><div><span>1</span><h3>指定されたキーが見つからない</h3><p>パス、Windowsやアプリケーションのバージョン、32ビット・64ビット、キーが作成される条件を確認します。</p></div><div><span>2</span><h3>値を変更しても反映されない</h3><p>アプリケーションの再起動、サインアウトと再度のサインイン、Windowsの再起動が必要か確認します。GPOやIntuneによる再適用や、その設定固有の反映条件も確認します。</p></div><div><span>3</span><h3>変更した値が元に戻る</h3><p>GPOやIntuneなどの管理ポリシーによって再適用されている可能性があります。</p></div><div><span>4</span><h3>他のユーザーでは問題が起きない</h3><p>HKCUなど、ユーザー単位の設定を確認します。</p></div><div><span>5</span><h3>32ビットアプリケーションの設定が見つからない</h3><p>資料を確認し、必要に応じてWOW6432Node側も確認します。必ずそこにあるとは限りません。</p></div><div><span>6</span><h3>変更後に動作が不安定になった</h3><p>変更箇所、変更前の値、影響範囲、元に戻せるかを確認します。</p></div></div>

### 確認に使う主なツール・コマンド

<div class="registry-card-grid"><div><strong><code>regedit</code></strong><p>レジストリを画面上で確認します。</p></div><div><strong><code>reg query</code></strong><p>キーや値をコマンドから確認します。</p></div><div><strong><code>gpresult /r</code></strong><p>グループポリシーの適用状況を確認します。</p></div><div><strong><code>whoami</code></strong><p>現在サインインしているユーザーを確認します。</p></div></div>

### よくある失敗と推奨対応

<div class="wsus-practice-comparison"><div class="wsus-practice-heading wsus-practice-heading--warning"><strong>よくある失敗</strong></div><div class="wsus-practice-heading wsus-practice-heading--recommended"><strong>推奨される対応</strong></div><div class="wsus-practice-item wsus-practice-item--warning"><span>1</span><p>インターネットで見つけた値をそのまま変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>1</span><p>対象OSとアプリケーションの版、公式資料や社内手順を確認する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>2</span><p>現在値を記録せずに変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>2</span><p>変更前の値を記録し、必要に応じて対象キーをエクスポートする</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>3</span><p>不要そうな値を削除する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>3</span><p>値の役割を確認し、根拠がある場合だけ変更する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>4</span><p>HKLMとHKCUを区別せず確認する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>4</span><p>端末全体かユーザー単位かを先に判断する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>5</span><p>GPOやIntuneで管理されている値を直接変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>5</span><p>管理元を確認し、必要なら管理側の設定を修正する</p></div><div class="wsus-practice-item wsus-practice-item--warning"><span>6</span><p>複数の値をまとめて変更する</p></div><div class="wsus-practice-item wsus-practice-item--recommended"><span>6</span><p>変更内容を記録し、1つずつ影響を確認する</p></div></div>

## <span class="wsus-section-heading-icon is-blue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg></span>まとめ {#page-summary}

<div class="takeaway-card"><ul><li><span class="takeaway-number">01</span><p class="takeaway-content"><span class="takeaway-lead"><strong>レジストリはWindowsの設定情報を管理する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">Windows、アプリケーション、ユーザーなどが利用する情報を階層的に管理します。</span></p></li><li><span class="takeaway-number">02</span><p class="takeaway-content"><span class="takeaway-lead"><strong>HKLMとHKCUの違いを理解する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">端末全体とユーザーごとの設定を分けて考えます。</span></p></li><li><span class="takeaway-number">03</span><p class="takeaway-content"><span class="takeaway-lead"><strong>変更前に現在値と管理元を確認する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">GPOやIntuneなど、別の仕組みから管理される設定もあります。</span></p></li><li><span class="takeaway-number">04</span><p class="takeaway-content"><span class="takeaway-lead"><strong>根拠を持って変更する</strong><span class="takeaway-separator" aria-hidden="true">&#8288;—</span></span><span class="takeaway-detail">意味と影響範囲を確認し、変更前の状態と作業内容を記録します。</span></p></li></ul></div>

## 関連ページ

<div class="related-pages registry-related-pages"><a href="./gpo"><span>Windows・認証基盤</span><strong>グループポリシー</strong><p>端末の設定をまとめて適用する仕組み</p></a><a href="./windows-update"><span>Windows・認証基盤</span><strong>Windows Update</strong><p>Windowsの更新を確認・適用する仕組み</p></a><a href="../operations/troubleshooting"><span>運用・障害対応</span><strong>Windowsトラブルシューティング</strong><p>問題の原因を順番に切り分ける方法</p></a><a href="../cloud/intune"><span>クラウド・端末管理</span><strong>Microsoft Intune</strong><p>管理対象端末に設定を適用する仕組み</p></a><a href="./active-directory"><span>Windows・認証基盤</span><strong>Active Directory</strong><p>ユーザーと端末を管理する認証基盤</p></a></div>

<p class="registry-last-updated">最終更新：2026/09/18</p>
