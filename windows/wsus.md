---
title: WSUS
description: Windows Server Update Servicesの役割と運用の基本を、将来のIT管理者向けにやさしく解説します。
---

# WSUS

<div class="lesson-meta"><span>Windows</span><span>初級</span><span>約25分</span></div>

## このページで学ぶこと

<div class="learning-goals">
<ol>
<li><strong>WSUSとは何か</strong><span>役割と管理対象を理解する</span></li>
<li><strong>なぜWSUSが必要なのか</strong><span>企業で更新を一元管理する理由を理解する</span></li>
<li><strong>更新が配布される仕組み</strong><span>同期・確認・承認・配布の流れを理解する</span></li>
<li><strong>管理者が行う仕事</strong><span>日常運用で確認・判断する内容を理解する</span></li>
<li><strong>運用時の注意点</strong><span>更新による業務影響を抑える考え方を理解する</span></li>
</ol>
</div>

## 1. WSUSとは何か

WSUS（Windows Server Update Services）は、社内のPCやWindows Serverに配布するMicrosoft製品の更新プログラムを、管理者が一か所で管理するためのWindows Serverの役割です。

管理者はWSUSを使い、**どの更新を、どの端末へ、いつ配布するか**を判断します。単に更新ファイルを保存するだけではなく、更新の配布範囲とタイミングをコントロールすることが重要です。

<div class="diagram-panel diagram-panel--portrait">
<p class="diagram-title">WSUSによる更新管理のイメージ</p>
<img src="/wsus-flow.svg" alt="Microsoft UpdateからWSUSを経由して社内端末へ更新を配布する流れ">
<p class="diagram-caption">更新をすぐに全端末へ配るのではなく、管理者が内容を確認・承認してから、対象端末へ段階的に配布します。</p>
</div>

::: info 管理する側として覚えること
WSUSを利用する担当者の仕事は、更新を機械的に配ることではありません。業務への影響を確認し、安全に展開できる順序を考えることです。
:::

## 2. なぜWSUSが必要なのか

たとえば、会社に500台のPCがあるとします。WSUSを使わない場合、500台すべてがMicrosoft Updateへ接続し、同じ更新ファイルを個別にダウンロードします。

<div class="comparison-grid">
<div class="comparison-card comparison-card--without">
<p class="comparison-label">WSUSなし</p>
<h3>PCごとに更新</h3>
<ul><li>各PCが外部へ直接接続</li><li>同じ更新を何度も取得</li><li>更新時期がばらばら</li><li>適用状況を把握しにくい</li></ul>
</div>
<div class="comparison-card comparison-card--with">
<p class="comparison-label">WSUSあり</p>
<h3>社内で一元管理</h3>
<ul><li>更新をまとめて管理</li><li>承認した更新だけを配布</li><li>グループごとに時期を調整</li><li>段階的な展開が可能</li></ul>
</div>
</div>

::: tip 初心者向けの考え方
WSUSは「更新ファイルを置くだけのサーバー」ではありません。  
**どの更新を、どの端末へ、いつ配布するかを管理する仕組み**です。
:::

## 3. 更新が配布される仕組み

### 1. 同期

WSUSサーバーがMicrosoft Updateへ接続し、利用可能な更新情報や更新ファイルを取得します。

### 2. 確認

管理者が新しく同期された更新の内容、対象製品、重要度、既知の問題などを確認します。

### 3. 承認

確認した内容をもとに、どのコンピューターグループへ配布するかを決めて更新を承認します。

- 業務アプリに影響がないか
- まず検証用PCへ配布するか
- 一般社員PCへいつ配布するか
- サーバーへ適用してよいか

### 4. 配布

承認された更新が、対象のPCやWindows Serverへ配布されます。

## 4. 管理者が行う仕事

WSUSの管理者は、更新プログラムを承認するだけではありません。同期状態、端末の接続状況、インストール結果、業務アプリへの影響を確認しながら、配布の判断を行います。

## 実際の仕事ではどう使う？

<div class="workplace-story">

### ある月の更新対応

**9:00** Microsoftから新しい更新が公開される。  
**10:00** WSUSで更新情報を同期する。  
**11:00** 管理者が内容を確認し、検証用PCへ配布する。  
**翌日** 業務アプリやPCの動作に問題がないことを確認する。  
**その後** 一般社員PCやサーバーへ段階的に展開する。

</div>

## 主なメリット

<div class="benefit-grid">
<div class="benefit-card"><h3>更新の集中管理</h3><p>更新、対象端末、配布時期をまとめて管理できます。</p></div>
<div class="benefit-card"><h3>通信量の削減</h3><p>同じ更新を各PCが外部から取得する負担を減らせます。</p></div>
<div class="benefit-card"><h3>段階的な展開</h3><p>検証用PCで確認してから一般端末へ展開できます。</p></div>
<div class="benefit-card"><h3>グループ管理</h3><p>部署や用途に応じて配布対象を分けられます。</p></div>
</div>

## 5. 運用時の注意点

::: warning WSUSサーバーの運用が必要
同期状態、ディスク容量、承認状況、適用結果を継続的に確認します。
:::

::: warning 更新前の検証が必要
業務アプリへの影響を避けるため、全社配布の前に検証します。
:::

## 現場でよくある質問

### PCに更新が届かないのはなぜ？

- PCがWSUSサーバーへ接続できない
- 更新が承認されていない
- 正しいコンピューターグループに入っていない
- グループポリシーの設定が正しくない
- PCが長期間起動していない

### すべての更新をすぐ承認してよい？

いいえ。まず更新内容を確認し、検証用PCで問題がないか確認します。

## 理解度チェック

<div class="quiz-block">

### Q1. WSUSの主な役割はどれですか？

- A. PCの故障を修理する
- B. Windows Updateを一元管理する
- C. メールを管理する

<details><summary>答えを見る</summary>

**正解：B**

</details>
</div>

<div class="quiz-block">

### Q2. WSUSの基本的な流れは？

- A. 配布 → 同期 → 承認
- B. 同期 → 確認 → 承認 → 配布
- C. 承認 → 配布 → 同期

<details><summary>答えを見る</summary>

**正解：B**

</details>
</div>

## まとめ

- WSUSは社内のWindows Updateを一元管理する仕組み
- 基本の流れは **同期 → 確認 → 承認 → 配布**
- 通信量の削減や段階的な展開に役立つ
- 全社配布の前に検証用PCで確認する
- 継続的な運用管理が必要
