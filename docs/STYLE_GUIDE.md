# コンテンツ・スタイルガイド

このドキュメントは、本サイト（AI入門コンテンツ）を執筆・実装するすべてのサブエージェントが従う統一ルールです。**新しい章を作る前に必ず読んでください**。

---

## 1. 文体・トーン

- 想定読者：**営業/コンサル新人**（クライアント対応想定）。プログラミング経験は問わない
- 一人称は使わない。「私たち」「弊社」も避ける。客観的・教科書的トーン
- 専門用語は**初出時に「日本語（English）」または短い定義**を併記する
- 例：「教師あり学習（supervised learning）」「埋め込み（embedding）」
- 一文を短く。読点を多用しない。1段落は3〜4文以内を目安
- 数式は使わない。どうしても必要なら言葉で言い換える
- 「〜と思います」「〜でしょう」は使わず、断定または「〜と整理できる」のような客観表現
- カタカナ語の表記は[内閣告示の現代仮名遣い](https://www.bunka.go.jp/)に準拠（「ベクトル」○、「ヴェクター」×）
- 半角英数の前後に半角スペースは入れない（日本語組版に従う）。例：「機械学習で予測する」○

---

## 2. ページ構造（章ページ共通テンプレート）

各章HTMLは以下の構造を守る。テンプレートは `docs/template-chapter.html` を参照。

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>第◯章 タイトル｜AI入門</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
  <header class="site-header">…共通ヘッダー（後述）…</header>

  <main>
    <h1>第◯章 タイトル</h1>
    <div class="chapter-meta">
      <span class="badge">Chapter ◯</span>
      <span>読了目安 約◯分</span>
    </div>

    <div class="summary-card">
      <h3>この章の要点</h3>
      <ul>
        <li>要点1（1行）</li>
        <li>要点2（1行）</li>
        <li>要点3（1行）</li>
      </ul>
    </div>

    <h2>…</h2>
    …本文…

    <section class="further">
      <h2>もっと知りたい人へ</h2>
      <ul>
        <li><a href="…">…</a> — 簡単な紹介</li>
      </ul>
    </section>

    <nav class="chapter-nav">
      <a href="…" class="prev"><span class="nav-label">← PREV</span>前の章タイトル</a>
      <a href="…" class="next"><span class="nav-label">NEXT →</span>次の章タイトル</a>
    </nav>
  </main>

  <footer class="site-footer">© 2026 AI入門コンテンツ</footer>
  <script src="../assets/js/main.js"></script>
</body>
</html>
```

### 共通ヘッダー（全ページ共通でコピペ）

```html
<header class="site-header">
  <div class="site-header-inner">
    <a href="../index.html" class="site-logo">AI入門 / for Newcomers</a>
    <nav class="site-nav">
      <a href="../index.html">目次</a>
      <a href="../chapters/01-overview.html">全体像</a>
      <a href="../chapters/06-case-study.html">ケース</a>
    </nav>
  </div>
</header>
```

トップページ（`index.html`）はパス階層が1段浅いので、`../` を `./` に置き換えること。

---

## 3. デザイン要素の使い分け

| 要素 | クラス | 用途 |
|---|---|---|
| 3行サマリ | `.summary-card` | 各章冒頭に必ず1つ |
| ポイント解説 | `.callout.info` | 補足・定義の整理 |
| 注意・落とし穴 | `.callout.warn` | アンチパターン、誤解しがちな点 |
| 実務Tips | `.callout.tip` | 営業現場での使い方 |
| 比較表 | `<table class="compare">` | 手法比較などに使う |
| 用語ツールチップ | `<span class="term" data-tip="定義">用語</span>` | 初出語に付ける |
| 図版 | `<figure>` + SVG | 図には必ず `<figcaption>` を付ける |
| 図版（広め） | `<figure class="wide-figure">` | キー図はこちら |
| 章末参考 | `.further` | 外部リンク集 |

---

## 4. SVG図版ルール

すべて自前SVGで作成（外部画像は使わない）。

### 共通仕様

- ビューボックス：`viewBox="0 0 800 500"` 基準（横長）または `0 0 600 600`（正方形）
- フォント指定：`font-family="-apple-system, 'Hiragino Sans', 'Noto Sans JP', sans-serif"`
- フォントサイズ：本文ラベル 14px、補足 12px、見出し 18px
- 線幅：`stroke-width="1.5"` を基本、強調線は 2.5
- 角は丸める：`stroke-linecap="round"` `stroke-linejoin="round"`
- カラーは**CSS変数を直接書かず**、以下の固定値を使う（SVG単独でも表示可能にするため）

### カテゴリ別カラー（覚えやすい固定パレット）

| 種別 | 色（ライト） | 色（ダーク補正） |
|---|---|---|
| ルールベース | `#d4a72c` | `#e3b341` |
| 機械学習 | `#218bff` | `#58a6ff` |
| 深層学習 | `#8250df` | `#a371f7` |
| 生成AI | `#cf222e` | `#ff7b72` |
| NLP / ベクトル | `#1a7f37` | `#3fb950` |
| ニュートラル線 | `#57606a` | — |
| 背景の塗り | 上記色 + `opacity="0.12"` | — |

ダーク対応は **CSSのprefers-color-schemeに任せ、SVG内では固定色のまま**でOK（CSS側で `figure svg { filter: ... }` のような調整は不要）。視認性確保のため、塗りは透明度0.12〜0.2の薄塗りを使い、線とテキストは濃色を保つ。

### キー図一覧

1. **AI分類ベン図**（01章ヒーロー）：`assets/img/ai-venn.svg` — ルールベースを並列、AI⊃ML⊃DL⊃生成AIの一部
2. **ベクトル空間と類似度**（05章）：`assets/img/vector-space.svg` — 2D空間にプロット、コサイン類似度の角度を示す
3. **ノイズ混入の散布図**（06章）：`assets/img/noisy-data.svg` — 真のNGとノイズNGが分離不能な様子
4. **既存ML vs 埋め込みモデル対比**（06章）：`assets/img/model-contrast.svg`
5. **提案フロー図**（06章）：Mermaidで可。`<pre class="mermaid">` でもよいが軽量化のため可能ならSVG手書き

---

## 5. 外部リンク方針

- リンクは `target="_blank" rel="noopener"` を付ける
- リンク文は「サービス名 / 著者名」を冒頭に、続けて何が読めるかを1文
- 推奨ソース：総務省情報通信白書、JDLA、Google ML Crash Course、scikit-learn公式、Hugging Face、OpenAI/Cohere公式、arXiv日本語解説
- 学習素材の正確性が疑わしいブログは避ける

---

## 6. ファイル命名と相対パス

- 章HTMLは `chapters/0X-keyword.html`
- SVGは `assets/img/keyword.svg`
- CSS/JSへの参照は章ページから `../assets/...`、トップから `./assets/...`
- IDは英小文字＋ハイフン区切り（例：`#section-overview`）

---

## 7. 品質チェックリスト（執筆エージェントが完了前に確認）

- [ ] 章冒頭に `summary-card` の3行サマリがある
- [ ] 読了目安が記載されている
- [ ] 初出専門用語に `.term[data-tip]` が付いている
- [ ] 図版に `<figcaption>` が付いている
- [ ] 章末に `.further` セクションがある（外部リンク2件以上）
- [ ] 章ナビ（prev/next）が両端に設定されている（最初/最後の章は片方のみ）
- [ ] HTMLが妥当（タグの閉じ忘れなし）
- [ ] 文体ルール（短文、客観、用語併記）に従っている
- [ ] テンプレート構造を守っている
