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

## ドメイン連携手順（新しいHPを作るたびに実施）

### 概要
Xserverドメインで取得 → XserverでDNSレコード設定 → VercelにカスタムドメインをAdd

### Step 1: Vercel でドメインを追加
1. https://vercel.com/gratitude-s-projects1 を開く
2. 対象プロジェクト → Settings → Domains
3. 「既存のものを追加」でドメインを入力（例: okinawa-party-yarou.com）
4. Vercel が表示する DNS レコードの値をメモ（A レコードのIP・CNAME の値）

### Step 2: Xserver DNS レコード設定
- **管理URL**: https://secure.xserver.ne.jp/xapanel/xdomain/domain/dns/index
- ブラウザにログイン情報が保存済みのため、Chrome ブラウザツールで操作可能

設定するレコード:
| ホスト名 | 種別 | 内容 |
|---------|------|------|
| （空欄）| A | Vercelが指定するIPアドレス |
| www | CNAME | Vercelが指定するCNAME値（末尾の `.` は入力しない） |

⚠️ **注意**: XserverはCNAMEの末尾ドット（`.`）不可。`xxx.vercel-dns-017.com` のように入力すること。

### Step 3: 確認
- Vercel の Domains 画面で `✅ 有効な構成` が出れば完了
- DNS反映まで最大48時間かかる場合があるが、通常数分〜数十分

### ぱーてぃー野郎の現在のドメイン設定（参考）
```
okinawa-party-yarou.com     → www にリダイレクト（307）
www.okinawa-party-yarou.com → Vercel 本番（生産）
```

### Xserver アカウント情報
- アカウント: chrg144365
- 管理会社: 株式会社Gratitutde
- ログインは Chrome ブラウザのパスワードマネージャーで自動入力される

---

## SEO / LLMO 対応

- 各ページに `metadata` オブジェクトで title / description / OGP を設定
- `layout.tsx` に Organization 構造化データ（JSON-LD）
- 会場詳細ページに EventVenue 構造化データ
- `siteName`: ぱーてぃー野郎
- ターゲットキーワード: 沖縄 二次会 / 那覇 貸切パーティー / 沖縄 結婚式二次会

---

## 会場追加テンプレート

新しい会場を `data/venues.ts` の `venues` 配列に追加する際は以下をコピーして使う。

```typescript
{
  id: '10',                          // 現在の最大ID + 1（現在は9まで使用済み）
  name: '店舗名',                     // 正式な店舗名（例: PARTYSPACE NEXT）
  slug: 'store-name-area',           // URLスラッグ：英小文字・ハイフンのみ（例: partyspace-next）
  area: '国際通り',                   // 那覇 / 国際通り / 北谷 / 沖縄市 / 宜野湾 / 浦添
  address: '沖縄県那覇市〇〇X-X',     // 正式住所
  capacityMin: 30,                   // 最小収容人数
  capacityMax: 150,                  // 最大収容人数
  priceText: '¥3,500〜 / 1名（飲み放題込）', // 料金の表示テキスト
  description:
    '会場の説明文。場所・雰囲気・特徴・対応シーンを2〜3文で。',
  images: [
    '/venues/store-name-1.jpg',      // public/venues/ に配置。ファイル名は {slug}-{n}.jpg
    '/venues/store-name-2.jpg',      // 複数枚ある場合は続ける（1枚でもOK）
  ],
  tags: ['100名以上', '結婚式二次会', '貸切OK', '国際通り', 'DJイベント'],
  // タグ選択肢: 100名以上 / 結婚式二次会 / 貸切OK / 飲み放題 / 音響 / DJイベント / 国際通り 等
  facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
  // 設備選択肢（型定義に合わせること）:
  // 貸切OK / 飲み放題 / プロジェクター / 音響 / カラオケ / 駐車場 / 深夜OK
  scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
  // シーン選択肢: 結婚式二次会 / 歓送迎会 / 忘年会 / 新年会 / 同窓会 / 会社イベント / DJイベント
  access: 'ゆいレール「〇〇駅」より徒歩X分 / 〇〇通りすぐ',
  mapUrl: 'https://maps.google.com/?q=那覇市牧志+店舗名', // Google Maps リンク
  lineUrl: LINE_URL,                 // 固定（変更不要）
  phone: PHONE,                      // 固定（変更不要）
  recommendedPoint:
    'おすすめポイント。会場の一番の強みを3〜4文で。アクセス・収容・設備・雰囲気などを具体的に。',
  faq: [
    {
      question: 'よくある質問1（例：下見はできますか？）',
      answer: '回答テキスト。ぱーてぃー野郎のスタッフが〜というフレーズを入れると統一感が出る。',
    },
    {
      question: 'よくある質問2（会場固有の質問）',
      answer: '回答テキスト。',
    },
    {
      question: '二次会の幹事サポートはありますか？',
      answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。',
    },
  ],
  isFeatured: false,                 // トップページ「今月のおすすめ」に出す場合は true
  instagramUrl: 'https://www.instagram.com/アカウント名/', // ★任意: Instagram がある場合のみ
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...', // ★任意: Google Maps 埋め込みURL
},
```

### 会場追加の手順
1. 上のテンプレートをコピーして `venues` 配列の末尾（`];` の直前）に追加
2. 各フィールドを実際の情報で埋める
3. 写真を `public/venues/{slug}-1.jpg` の形式で配置
4. `mapEmbedUrl` は Google Maps で会場を検索 → 「共有」→「地図を埋め込む」→ iframe の src を取得
5. `npx tsc --noEmit` でエラーがないことを確認してから commit & push

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

---

## ガイド記事 microCMS 投稿ワークフロー

ユーザーが「テーマ：〇〇」と指示したら、以下を自動実行する。

### トリガー
「テーマ：〇〇」または「〇〇の記事を書いて」と言われたとき。

### 実行手順

**Step 1：記事生成**
以下をすべて生成する。
- `title`：SEOキーワードを含む日本語タイトル（〜｜〜を完全解説 形式）
- `slug`：英小文字・ハイフンのみ（例: summer-wedding-okinawa）
- `description`：120〜140字。冒頭にキーワード、記事の内容列挙、ぱーてぃー野郎への言及で締める
- `seoDescription`：120字前後。検索結果に表示されるmeta description。descriptionと少し変化をつける
- `body`：HTML形式。構成は必ず「結論（H2）→ 失敗パターン → 選び方条件 → 費用相場（table）→ チェックリスト → タイムライン」。LLMO対応のため冒頭に結論・具体的数字・断定表現を使う
- `faq`：6問。AIに選ばれやすい質問形式（「〜するべきですか？」「何ヶ月前から？」「費用は？」など）
- `category`：テーマに合うカテゴリIDを選ぶ（下記参照）

**カテゴリID一覧**
| カテゴリ名 | ID |
|---|---|
| 二次会ガイド | d-ji27je-f |
| エリア別ガイド | kigfrvwzkeu6 |
| 人数別ガイド | hwkge9jhpt |
| 用途別ガイド | rzz2xvh4803 |
| 幹事向けノウハウ | 9w24k-ma59w |

**Step 2：画像アップロード（添付がある場合）**
```javascript
// Node.js で実行
const {createManagementClient} = require('microcms-js-sdk');
const fs = require('fs');
const c = createManagementClient({
  serviceDomain: 'party-yarou',
  apiKey: 'gRn9ZcUDAoZzLqdKC0phmuP32bOKvT2kV1dE'
});
const file = fs.readFileSync('画像パス');
const blob = new Blob([file], {type:'image/jpeg'});
const result = await c.uploadMedia({data: blob, name: 'slug-eyecatch.jpg'});
// result.url を eyecatch フィールドに使う
```

**Step 3：microCMS POST（下書き作成）**
```
POST https://party-yarou.microcms.io/api/v1/guidearticles
X-MICROCMS-API-KEY: gRn9ZcUDAoZzLqdKC0phmuP32bOKvT2kV1dE
```
送信フィールド：`title` / `slug` / `description` / `category` / `body` / `eyecatch`（URLを文字列で）

**Step 4：PATCH で追加フィールドを設定**
```
PATCH https://party-yarou.microcms.io/api/v1/guidearticles/{id}
```
送信フィールド：`seoDescription`

**Step 5：完了報告**
- microCMSのURL（`https://party-yarou.microcms.io/apis/guidearticles/{id}`）を表示
- 「公開ボタンを押すとHPに反映されます」と伝える

### 注意事項
- `faq` フィールドはmicroCMS側で未対応のため、投稿後に手動で入力する
- `ogImage` フィールドIDは未確定のため、eyecatchと同じ画像を手動で設定する
- 画像添付がない場合はStep 2をスキップし、eyecatchなしで投稿する
- 記事は必ず**下書き状態**で投稿する（公開はユーザーが行う）
