import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, CheckCircle, ChevronRight, MapPin, Users, Star } from 'lucide-react';
import { venues, LINE_URL, PHONE } from '@/data/venues';
import VenueCard from '@/components/VenueCard';
import Breadcrumb from '@/components/Breadcrumb';
import LineLink from '@/components/LineLink';
import FaqAccordion from '@/components/FaqAccordion';
import LineBanner from '@/components/LineBanner';

const BASE_URL = 'https://www.okinawa-party-yarou.com';

export const metadata: Metadata = {
  title: '沖縄の結婚式二次会 会場探し｜那覇・国際通り・北谷 完全ガイド【2026年版】',
  description: '沖縄で結婚式二次会の会場を探すなら「ぱーてぃー野郎」。那覇・国際通り・北谷エリア対応。費用相場・選び方・おすすめ会場を完全解説。LINE相談・内覧手配すべて無料。',
  alternates: {
    canonical: `${BASE_URL}/wedding-afterparty`,
  },
  openGraph: {
    title: '沖縄の結婚式二次会 会場探し｜那覇・国際通り・北谷 完全ガイド【2026年版】',
    description: '沖縄で結婚式二次会の会場を探すなら「ぱーてぃー野郎」。那覇・国際通り・北谷エリア対応。費用相場・選び方・おすすめ会場を完全解説。',
    url: `${BASE_URL}/wedding-afterparty`,
  },
};

const weddingVenues = venues.filter(
  (v) => v.name.trim() && v.scenes.includes('結婚式二次会')
);

const areaLinks = [
  { label: '那覇・国際通りエリア', href: '/wedding-afterparty/naha', desc: '県庁前・牧志・久茂地の会場' },
  { label: '北谷エリア', href: '/areas/chatan', desc: '美浜・アメリカンビレッジの会場' },
  { label: '沖縄市エリア', href: '/areas/okinawa-city', desc: 'コザ・中の町の会場' },
];

const faqItems = [
  {
    question: '沖縄で結婚式二次会の会場を探すのに費用はかかりますか？',
    answer: 'ぱーてぃー野郎の相談・紹介・内覧手配はすべて無料です。提携会場からの紹介料で運営しているため、お客様への費用は一切かかりません。',
  },
  {
    question: '結婚式二次会の費用相場はどのくらいですか？',
    answer: '沖縄の結婚式二次会は、飲み放題込みで1名あたり3,500〜4,500円が相場です。会場使用料は基本無料で、人数が増えても1名あたりの単価は変わりません。保証人数に満たない場合のみ単価が上がる可能性があります。',
  },
  {
    question: '二次会の幹事サポートはしてもらえますか？',
    answer: 'はい。ぱーてぃー野郎の専任スタッフが、会場探しから内覧手配・予約相談まで無料でサポートします。進行プランのご相談もLINEでお気軽にどうぞ。',
  },
  {
    question: '何ヶ月前から準備を始めればよいですか？',
    answer: '結婚式の3〜6ヶ月前からの準備をおすすめします。人気会場は早めに埋まるため、結婚式の日程が決まったらすぐにご相談ください。直前のご相談にも可能な限り対応します。',
  },
  {
    question: '国際通りから近い会場はありますか？',
    answer: 'はい。ゆいレール「県庁前駅」または「牧志駅」から徒歩5分圏内の会場が複数あります。遠方からのゲストにもアクセスしやすい立地の会場をご提案します。',
  },
  {
    question: 'プロジェクター・スクリーンがある会場はありますか？',
    answer: 'プロジェクター・大型スクリーン完備の会場を多数ご紹介しています。映像演出・スライドショー・サプライズムービーを上映したい方はその旨をLINEでお伝えください。',
  },
];

export default function WeddingAfterpartyPage() {
  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: '結婚式二次会 会場ガイド', item: `${BASE_URL}/wedding-afterparty` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '結婚式二次会 会場ガイド' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="px-4 pt-4 pb-8 border-b border-gray-100">
        <p className="text-xs text-primary font-bold tracking-widest mb-2 uppercase">Wedding After Party</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-3">
          沖縄の<span className="text-primary">結婚式二次会</span><br />会場探し完全ガイド
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          沖縄で結婚式二次会の会場を探すなら「ぱーてぃー野郎」。<br />
          那覇・国際通り・北谷エリアを中心に、<strong className="text-gray-900">20名〜150名以上</strong>に対応した会場を無料でご提案します。相談・内覧手配・予約サポートまですべて無料です。
        </p>
        <ul className="space-y-2 mb-5">
          {[
            '相談・紹介・内覧手配すべて無料',
            '費用相場 1名あたり3,500〜4,500円（飲み放題込み・会場使用料基本無料）',
            'プロジェクター・スクリーン完備の会場多数',
            '那覇・国際通り・北谷・沖縄市エリア対応',
            '急な相談・直前依頼にも可能な限り対応',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle size={15} className="text-[#06C755] shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <LineLink
          location="wedding_hero"
          className="flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-md shadow-green-900/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={22} strokeWidth={2.5} />
          LINEで無料相談する
        </LineLink>
      </section>

      {/* ── 結論：選び方の3ポイント ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-1">
          結婚式二次会の会場選び<span className="text-primary">3つのポイント</span>
        </h2>
        <p className="text-xs text-gray-500 mb-5">まずここを押さえれば失敗しない</p>
        <div className="space-y-4">
          {[
            {
              no: '01',
              title: '人数と収容キャパシティを確認する',
              body: '招待人数の1.2倍のキャパがある会場を選ぶのが鉄則。当日のドタキャン・増加に備えて余裕をもった選択を。沖縄では20名〜150名以上に対応する会場が揃っています。',
            },
            {
              no: '02',
              title: 'プロジェクター・スクリーン・音響を確認する',
              body: '映像演出・サプライズムービー・BGMはほぼ必須。「音響完備」でも出力や機材の内容はまちまちなので、予約前に「プロジェクター・マイク・スクリーンが使えるか」を必ず確認する。',
            },
            {
              no: '03',
              title: '交通アクセスを最優先する',
              body: '結婚式後にゲストが移動するため、ゆいレール駅から徒歩圏内・駐車場完備の会場が最適。特に遠方からのゲストが多い場合は那覇・国際通りエリアが便利。',
            },
          ].map((item) => (
            <div key={item.no} className="flex gap-4 bg-gray-50 rounded-2xl p-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                {item.no}
              </div>
              <div>
                <h3 className="font-black text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 費用相場 ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-4">
          沖縄の結婚式二次会<span className="text-primary">費用相場</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left font-bold rounded-tl-xl">人数</th>
                <th className="p-3 text-center font-bold">1名あたり（飲み放題込み）</th>
                <th className="p-3 text-center font-bold rounded-tr-xl">備考</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '1名あたり料金', price: '3,500〜4,500円', room: '飲み放題込み' },
                { size: '会場使用料', price: '基本無料', room: '—' },
                { size: '人数による単価変動', price: 'なし', room: '保証人数未満の場合のみ増額の可能性あり' },
                { size: '平均参加人数の目安', price: '披露宴招待の約1/3', room: '例：招待150名→二次会約50名' },
              ].map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-bold text-gray-900 border-b border-gray-100">{row.size}</td>
                  <td className="p-3 text-center text-gray-700 border-b border-gray-100">{row.price}</td>
                  <td className="p-3 text-center text-gray-700 border-b border-gray-100">{row.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">※会場・プランにより異なります。詳細はLINEでご相談ください。</p>
      </section>

      {/* ── 詳細ガイド記事への誘導 ── */}
      <section className="px-4 py-6 border-b border-gray-100">
        <Link
          href="/guide/okinawa-wedding-afterparty-complete-guide"
          className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-primary transition-colors"
        >
          <span className="text-2xl shrink-0">📖</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-gray-900 text-sm">沖縄で結婚式二次会の会場を探すなら｜完全解説ガイド</p>
            <p className="text-xs text-gray-500 mt-0.5">費用・流れ・選び方・幹事ノウハウを詳しく解説</p>
          </div>
          <ChevronRight size={16} className="text-primary shrink-0" />
        </Link>
      </section>

      {/* ── エリア別ガイド ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-4">
          エリア別<span className="text-primary">会場ガイド</span>
        </h2>
        <div className="space-y-3">
          {areaLinks.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <div>
                  <p className="font-black text-gray-900 text-sm">{a.label}</p>
                  <p className="text-xs text-gray-500">{a.desc}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-gray-400 shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── おすすめ会場一覧 ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-gray-900">
            結婚式二次会<span className="text-primary">おすすめ会場</span>
          </h2>
          <Link href="/venues?scene=結婚式二次会" className="text-sm text-primary font-bold flex items-center gap-1">
            すべて見る<ChevronRight size={14} />
          </Link>
        </div>
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          {weddingVenues.slice(0, 4).map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        <Link
          href="/venues"
          className="mt-6 flex items-center justify-center gap-2 border-2 border-primary text-primary font-black rounded-2xl py-4 hover:bg-red-50 transition-colors"
        >
          全会場ラインナップを見る
          <ChevronRight size={18} />
        </Link>
      </section>

      {/* ── LINE Banner ── */}
      <LineBanner />

      {/* ── FAQ ── */}
      <section className="px-4 py-8">
        <h2 className="text-xl font-black text-gray-900 mb-1">
          よくある<span className="text-primary">ご質問</span>
        </h2>
        <p className="text-xs text-gray-500 mb-5">結婚式二次会の会場探しでよく寄せられる質問</p>
        <FaqAccordion items={faqItems} />
      </section>
    </div>
  );
}
