# ぱーてぃー野郎 HP — Claude Code 開発指示書

## プロジェクト概要
沖縄県内の貸切パーティー会場を無料で紹介するPWA。
幹事向けに会場探し・LINE相談・内覧手配をワンストップで提供するサービス。

- **サービス名**: ぱーてぃー野郎
- **ドメイン**: https://www.okinawa-party-yarou.com
- **リポジトリ**: https://github.com/gratitude00000000-spec/party-yaro
- **デプロイ**: GitHub push → Vercel 自動デプロイ
- **プレビューURL**: https://party-yaro.vercel.app

---

## 技術スタック

- **フレームワーク**: Next.js 14 App Router（Server Components + Client Components）
- **スタイル**: Tailwind CSS v3（カスタムカラー: primary=#E8001C, line-green=#06C755）
- **言語**: TypeScript（strict）
- **フォント**: Noto Sans JP / Outfit / Bebas Neue / Mochiy Pop One（next/font/google）
- **アイコン**: lucide-react
- **アニメーション**: CSS keyframes（globals.css に定義済み）
- **PWA**: manifest.json + sw.js

---

## ディレクトリ構成

```
app/
  page.tsx          # トップページ
  layout.tsx        # 共通レイアウト（Header・BottomNav・FloatingLine）
  globals.css       # グローバルスタイル・カスタムクラス
  venues/
    page.tsx        # 会場一覧
    [slug]/page.tsx # 会場詳細
  search/page.tsx   # 会場検索
  saved/page.tsx    # 保存済み会場
  guide/            # ガイド記事
  faq/page.tsx      # よくある質問
components/
  Header.tsx        # PCヘッダー（lg:block / スマホ非表示）
  BottomNav.tsx     # スマホ下部ナビ（lg:hidden）
  FloatingLine.tsx  # LINE浮きボタン
  VenueCard.tsx     # 会場カード
  PhotoSlider.tsx   # 写真スライダー
  VenueListClient.tsx # 会場一覧フィルター（Client Component）
  FaqAccordion.tsx  # FAQアコーディオン
  LineBanner.tsx    # LINEバナー
  LineLink.tsx      # LINEリンク（GA追跡付き）
  Breadcrumb.tsx    # パンくずリスト
data/
  venues.ts         # 会場データ（静的）・LINE_URL・PHONE定数
  guides.ts         # ガイド記事データ
lib/
  types.ts          # TypeScript型定義（Venue・Guide等）
  gtag.ts           # Google Analytics 4
  FavoritesContext.tsx # お気に入り（localStorage）
public/
  venues/           # 実際の会場写真（partyspace-next-1.jpg 等）
  logo.png          # ぱーてぃー野郎ロゴ
  py-logo-dance.mp4 # ヒーローキャラクター動画
  apple-touch-icon.png
  og-image.jpg
  manifest.json
```

---

## 重要な定数（data/venues.ts）

```typescript
LINE_URL = 'https://line.me/ti/p/@381ivfov'
PHONE    = '098-975-5682'
ADDRESS  = '〒900-0013 沖縄県那覇市牧志2-18-4 2-C'
```

---

## Venue 型の主要フィールド（lib/types.ts）

```typescript
type Venue = {
  id: string
  name: string
  slug: string          // URLスラッグ（例: partyspace-next）
  area: string          // 那覇 / 国際通り / 北谷 / 沖縄市 / 宜野湾 / 浦添
  address: string
  capacityMin: number
  capacityMax: number
  priceText: string
  description: string
  images: string[]      // /venues/xxx.jpg（公共フォルダ）またはURL
  tags: string[]
  facilities: string[]  // 貸切OK / 飲み放題 / プロジェクター / 音響 / カラオケ / 駐車場 / 深夜OK
  scenes: string[]      // 結婚式二次会 / 歓送迎会 / 忘年会 / 新年会 / 同窓会 / 会社イベント / DJイベント
  access: string
  mapUrl: string
  mapEmbedUrl?: string  // Google Maps iframeのsrc URL
  lineUrl: string
  phone: string
  recommendedPoint: string
  faq: VenueFaq[]
  isFeatured: boolean   // トップページ「今月のおすすめ会場」に表示
  instagramUrl?: string // 店舗のInstagram URL
}
```

---

## レスポンシブ設計

- **スマホ（〜1023px）**: BottomNav表示 / Headerなし / 1列レイアウト
- **PC（1024px〜）**: Header表示 / BottomNav非表示 / 2〜3列グリッド
- `page-container` クラス = `max-w-2xl mx-auto pb-24 lg:max-w-7xl lg:pb-10`

---

## コーディングルール

- **変更前に必ず Read ツールでファイルを確認**してから Edit する
- TypeScript エラーは `npx tsc --noEmit` で確認してからpush
- 新しい会場画像は `public/venues/` に配置し、ファイル名は `{slug}-{n}.jpg` 形式
- ダミー画像（picsum.photos）は本番に残さない
- `console.log` はデバッグ後に削除する
- コミット前にプレビューでスマホ・PC両方を確認する

---

## デプロイフロー

```
コード変更 → git add → git commit → git push origin main
→ GitHub → Vercel 自動ビルド → 本番反映（約1〜2分）
```

---

## SEO / LLMO 対応

- 各ページに `metadata` オブジェクトで title / description / OGP を設定
- `layout.tsx` に Organization 構造化データ（JSON-LD）
- 会場詳細ページに EventVenue 構造化データ
- `siteName`: ぱーてぃー野郎
- ターゲットキーワード: 沖縄 二次会 / 那覇 貸切パーティー / 沖縄 結婚式二次会

---

## 現在の掲載会場

| id | 名前 | エリア | isFeatured |
|----|------|--------|------------|
| 1 | OPUS NAHA | 那覇 | ✅ |
| 2 | THE LUXE 国際通り | 国際通り | - |
| 3 | BLUE CREST 北谷 | 北谷 | - |
| 4 | ROUGE GINOWAN | 宜野湾 | - |
| 5 | SKY GARDEN 浦添 | 浦添 | - |
| 6 | SONIC BEAT 沖縄市 | 沖縄市 | - |
| 7 | CRYSTAL HALL 那覇 | 那覇 | - |
| 8 | SUNSET LOUNGE 北谷 | 北谷 | - |
| 9 | **PARTYSPACE NEXT** | 国際通り | ✅（実在店舗・写真あり） |

> id: 1〜8はダミーデータ。実在店舗が追加されたらダミーを削除していく。
