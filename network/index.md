# ネットワークの全体像
<div class="lesson-meta"><span>ネットワーク</span><span>初級</span><span>約10分</span></div>
<div class="lesson-lead">社内ITの問い合わせでは、「インターネットにつながらない」「共有フォルダーが開かない」「社内システムだけ使えない」といった相談が頻繁にあります。まず通信に必要な三つの基本を押さえましょう。</div>

<div class="portal-grid portal-grid--3">
<div class="portal-card"><span class="card-kicker">ADDRESS</span><h3>IPアドレス</h3><p>通信相手を識別するための住所です。</p></div>
<div class="portal-card"><span class="card-kicker">NAME</span><h3>DNS</h3><p>人が使う名前をIPアドレスへ変換します。</p></div>
<div class="portal-card"><span class="card-kicker">SETTING</span><h3>DHCP</h3><p>端末へIPアドレスなどの通信設定を自動配布します。</p></div>
</div>

## 三つは別々ではありません
PCがDHCPから設定を受け取り、DNSで接続先のIPアドレスを調べ、そのIPアドレス宛てに通信します。障害対応では、この流れのどこで止まっているかを切り分けます。

<div class="scenario-flow"><span>DHCPで設定取得</span><b>→</b><span>DNSで名前解決</span><b>→</b><span>IPアドレス宛てに通信</span></div>
