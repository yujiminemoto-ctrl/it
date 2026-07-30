---
title: WSUSとは
description: Windows Server Update Servicesの役割と仕組みを、IT初学者向けに説明します。
---

# WSUSとは？

<span class="badge">Windows</span> <span class="badge">初級</span> <span class="badge">約10分</span>

**WSUS（Windows Server Update Services）**は、社内のWindows PCやWindows Serverに配布する更新プログラムを、一か所で管理するための仕組みです。

簡単に言うと、**社内版のWindows Update管理センター**です。

<div class="status-note">

**現在の位置付け**

WSUSは既存環境で引き続き利用できますが、Microsoftは非推奨機能として案内しています。  
学習・既存運用では重要ですが、新しい環境を設計するときはクラウド型の更新管理も比較します。

</div>

## なぜ必要なのか

WSUSがない場合、各PCは個別にMicrosoft Updateへ接続します。

<div class="learning-grid">
  <div class="learning-card">
    <h3>WSUSなし</h3>
    <ul>
      <li>各PCが同じ更新を個別にダウンロード</li>
      <li>更新時期が端末ごとにばらばら</li>
      <li>問題が起きた更新も適用される可能性</li>
      <li>管理者が状況を把握しにくい</li>
    </ul>
  </div>
  <div class="learning-card">
    <h3>WSUSあり</h3>
    <ul>
      <li>更新を社内でまとめて管理</li>
      <li>承認した更新だけを配布</li>
      <li>端末グループごとに配布時期を変更</li>
      <li>段階的な展開が可能</li>
    </ul>
  </div>
</div>

## 更新プログラムが届くまで

<div class="architecture">
<svg viewBox="0 0 980 320" role="img" aria-label="WSUSの更新配布フロー">
  <defs>
    <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 Z" fill="#0078d4"/>
    </marker>
  </defs>
  <rect x="35" y="105" width="220" height="110" rx="22" fill="#fff" stroke="#0078d4" stroke-width="3"/>
  <text x="145" y="152" text-anchor="middle" font-size="19" font-weight="700">Microsoft Update</text>
  <text x="145" y="182" text-anchor="middle" font-size="14" fill="#666">更新プログラムの配信元</text>

  <line x1="270" y1="160" x2="390" y2="160" stroke="#0078d4" stroke-width="4" marker-end="url(#arr)"/>
  <text x="330" y="136" text-anchor="middle" fill="#0078d4" font-weight="700">① 同期</text>

  <rect x="405" y="75" width="220" height="170" rx="22" fill="#eaf4fc" stroke="#0078d4" stroke-width="3"/>
  <text x="515" y="125" text-anchor="middle" font-size="20" font-weight="700">WSUSサーバー</text>
  <text x="515" y="158" text-anchor="middle" font-size="14" fill="#555">更新を取得・保存</text>
  <rect x="458" y="185" width="114" height="34" rx="8" fill="#dff3e7" stroke="#107c41"/>
  <text x="515" y="207" text-anchor="middle" font-size="13" fill="#107c41" font-weight="700">② 管理者が承認</text>

  <line x1="640" y1="160" x2="750" y2="160" stroke="#0078d4" stroke-width="4" marker-end="url(#arr)"/>
  <text x="695" y="136" text-anchor="middle" fill="#0078d4" font-weight="700">③ 配布</text>

  <rect x="770" y="52" width="165" height="62" rx="12" fill="#fff" stroke="#0078d4" stroke-width="3"/>
  <rect x="770" y="129" width="165" height="62" rx="12" fill="#fff" stroke="#0078d4" stroke-width="3"/>
  <rect x="770" y="206" width="165" height="62" rx="12" fill="#fff" stroke="#0078d4" stroke-width="3"/>
  <text x="852" y="90" text-anchor="middle" font-weight="700">検証用PC</text>
  <text x="852" y="167" text-anchor="middle" font-weight="700">一般社員PC</text>
  <text x="852" y="244" text-anchor="middle" font-weight="700">サーバー</text>
</svg>
</div>

### 1. 同期

WSUSサーバーがMicrosoft Updateから、利用可能な更新情報や更新ファイルを取得します。

### 2. 承認

管理者が内容を確認し、「どの更新を」「どの端末グループへ」配布するかを決めます。

### 3. 配布

承認された更新が、対象のPCやサーバーへ配布されます。

## 主なメリット

### 更新の集中管理

管理者が配布する更新、対象端末、配布時期をまとめて決められます。

### 通信量の削減

各PCが同じ更新をインターネットから個別取得する負担を減らせます。

### 段階的な展開

最初に検証用PCへ配布し、問題がなければ一般社員PCへ展開できます。

## 注意点

::: warning サーバー管理が必要
同期状態、ディスク容量、承認状況、端末の適用結果などを継続的に確認する必要があります。
:::

::: warning 更新前の検証
業務アプリケーションへの影響を確認するため、全社配布の前に検証用端末でテストします。
:::

::: tip 覚え方
WSUSの基本は **「同期 → 承認 → 配布」** の3段階です。
:::

## 最初に覚える用語

| 用語 | 意味 |
|---|---|
| 同期 | Microsoft Updateから更新情報やファイルを取得すること |
| 承認 | 更新を特定の端末へ配布してよいと管理者が決めること |
| コンピューターグループ | PCやサーバーを用途別に分けて管理する単位 |
| クライアント | WSUSから更新を受け取るPCやサーバー |

## 理解度チェック

<div class="quiz">

**Q1. WSUSの主な役割はどれですか？**

- A. PCの故障を修理する
- B. Windowsの更新を一元管理する
- C. 社内メールを管理する

<details>
<summary>答えを見る</summary>

**正解：B**

WSUSはWindowsの更新プログラムを集中管理し、承認した更新を対象端末へ配布します。

</details>
</div>

<div class="quiz">

**Q2. 全社へ更新を配布する前に、何をするのが望ましいですか？**

- A. 検証用端末で動作を確認する
- B. 必ずすべての更新を拒否する
- C. WSUSサーバーを停止する

<details>
<summary>答えを見る</summary>

**正解：A**

更新が業務アプリに影響しないか、最初に少数の端末で確認します。

</details>
</div>

## まとめ

- WSUSは社内のWindows Updateを一元管理する仕組み
- 基本の流れは **同期 → 承認 → 配布**
- 通信量の削減や段階的な展開に役立つ
- サーバー運用と更新前の検証が必要
- 新規設計ではクラウド型更新管理も比較する
