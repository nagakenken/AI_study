# AI入門コンテンツ / for Newcomers

新社会人（特に営業・コンサル職）向けに、AIの種類と特徴を体系的に学べる入門サイトです。
クライアントへの提案・説明を想定した実践的な構成になっています。

## 構成

- 第1章 AIの全体像（包含関係）
- 第2章 ルールベース
- 第3章 機械学習
- 第4章 深層学習と生成AI
- 第5章 NLP・ベクトル化・類似度
- **第6章 ケーススタディ：濁ったデータと類似度提案**（メイン章）

## ローカルで見る

```sh
python3 -m http.server 8000
# http://localhost:8000/ を開く
```

## ディレクトリ

```
.
├── index.html              # 目次
├── chapters/               # 各章HTML
├── assets/
│   ├── css/style.css       # 共通スタイル（ライト/ダーク対応）
│   ├── js/main.js          # 軽量UIスクリプト
│   └── img/                # SVG図版
└── docs/
    ├── STYLE_GUIDE.md      # 執筆・実装ガイド
    └── template-chapter.html
```

## デプロイ

GitHub Pages に直接デプロイ可能です（静的ファイルのみ）。リポジトリ設定の Pages から `main` ブランチを公開してください。
