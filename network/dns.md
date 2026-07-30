# DNS
<div class="lesson-meta"><span>ネットワーク</span><span>初級</span><span>約20分</span></div>
<div class="lesson-lead">DNSは、サーバー名やWebサイト名を、通信に必要なIPアドレスへ変換する仕組みです。社内ITでは「IPアドレスなら接続できるのに、名前では接続できない」という症状の切り分けに欠かせません。</div>

## DNSを電話帳として考える
人は `fileserver01` のような名前を覚えやすい一方、PCは通信先としてIPアドレスを必要とします。DNSは名前を受け取り、対応するIPアドレスを返します。

<div class="scenario-flow"><span>fileserver01 と入力</span><b>→</b><span>DNSへ問い合わせ</span><b>→</b><span>10.10.20.15 を取得</span><b>→</b><span>サーバーへ接続</span></div>

## よく見るレコード
| 種類 | 主な役割 | 例 |
|---|---|---|
| A | 名前とIPv4アドレスを結びつける | server01 → 10.0.0.10 |
| AAAA | 名前とIPv6アドレスを結びつける | server01 → IPv6アドレス |
| CNAME | 別名を正式名へ結びつける | portal → web01 |
| MX | メールを受け取るサーバーを示す | example.jp のメールサーバー |
| PTR | IPアドレスから名前を調べる | 10.0.0.10 → server01 |
| SRV | 特定サービスの場所を示す | Active Directoryのドメインコントローラー |

## 確認コマンド
```powershell
nslookup fileserver01
ipconfig /flushdns
```

## Active Directoryとの関係
Active DirectoryはDNSを使ってドメインコントローラーなどのサービスを見つけます。そのため、社内PCのDNS設定に無関係な外部DNSだけを指定すると、サインインやGPO適用などに問題が起きることがあります。

<div class="quiz-block case-quiz">
<p class="case-label">CASE</p>
### WebサイトをIPアドレスでは開けますが、名前では開けません。最初に疑うものは？
<details><summary>答えを見る</summary>
DNSによる名前解決です。`nslookup` の結果、指定されているDNSサーバー、ほかの端末で同じ名前が解決できるかを確認します。
</details>
</div>
