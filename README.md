# テーマ株ラボ

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## 記事の投稿方法

1. `content/articles/_template.md` をコピー
2. ファイル名をスラッグ（URL）にする例：`content/articles/nvidia-h100-2026.md`
3. フロントマター（---の間）を編集
4. Markdown本文を書く
5. `npm run build` でビルド確認

## フロントマター項目

| 項目 | 必須 | 説明 |
|------|------|------|
| title | ✅ | 記事タイトル |
| date | ✅ | 公開日 (YYYY-MM-DD) |
| type | ✅ | `single` / `multi` / `macro` |
| tags | ✅ | タグの配列 |
| excerpt | ✅ | 一覧ページ用の要約 |
| tickers | — | 銘柄コードの配列（省略可） |

## ディレクトリ構成

```
tema-kabu-lab/
├── content/articles/   # 記事Markdownファイル
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # UIコンポーネント
│   ├── lib/            # 記事読み込みロジック
│   └── types/          # TypeScript型定義
└── public/             # 静的ファイル
```
