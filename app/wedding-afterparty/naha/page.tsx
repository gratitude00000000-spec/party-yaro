import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, CheckCircle, ChevronRight, MapPin, Star } from 'lucide-react';
import { venues } from '@/data/venues';
import VenueCard from '@/components/VenueCard';
import Breadcrumb from '@/components/Breadcrumb';
import LineLink from '@/components/LineLink';
import FaqAccordion from '@/components/FaqAccordion';
import LineBanner from '@/components/LineBanner';

const BASE_URL = 'https://www.okinawa-party-yarou.com';

export const metadata: Metadata = {
  title: '那覇・国際通りの結婚式二次会 会場まとめ｜費用相場・選び方【2026年版】',
  description: '那覇・国際通りエリアで結婚式二次会の会場を探すなら「ぱーてぃー野郎」。ゆいレール駅徒歩圏内の会場多数。費用相場・選び方・おすすめ会場を完全解説。相談・内覧すべて無料。',
  alternates: {
    canonical: `${BASE_URL}/wedding-afterparty/naha`,
  },
  openGraph: {
    title: '那覇・国際通りの結婚式二次会 会場まとめ｜費用相場・選び方【2026年版】',
    description: '那覇・国際通りエリアで結婚式二次会の会場を探すなら「ぱーてぃー野郎」。ゆいレール駅徒歩圏内の会場多数。費用相場・選び方・おすすめ会場を完全解説。',
    url: `${BASE_URL}/wedding-afterparty/naha`,
  },
};

const nahaWeddingVenues = venues.filter(
  (v) =>
    v.name.trim() &&
    v.scenes.includes('結婚式二次会') &&
    (v.area === '那覇' || v.area === '国際通り' || v.extraAreas?.includes('国際通り'))
);

const faqItems = [
  {
    question: '那覇・国際通りで結婚式二次会の会場を探す費用はかかりますか？',
    answer: 'ぱーてぃー野郎の相談・紹介・内覧手配はすべて無料です。提携会場からの紹介料で運営しているため、お客様への費用は一切かかりません。',
  },
  {
    question: '国際通り周辺の結婚式二次会の費用相場はいくらですか？',
    answer: '那覇・国際通りエリアの二次会は、飲み放題込みで1名あたり3,500〜5,500円が相場です。会場によっては新郎新婦・幹事様の無料特典がある場合もあります。',
  },
  {
    question: 'ゆいレール駅から近い会場はありますか？',
    answer: 'はい。「県庁前駅」「牧志駅」「旭橋駅」から徒歩5分以内の会場が多数あります。遠方からのゲストにも移動しやすい立地をご提案します。',
  },
  {
    question: '100名以上の大人数でも対応できますか？',
    answer: 'はい。那覇・国際通りエリアには50〜150名以上に対応できる大型会場が複数あります。人数が確定していなくても、仮の人数でご相談いただけます。',
  },
  {
    question: '内覧はできますか？',
    answer: 'ぱーてぃー野郎のスタッフが内覧の手配を無料で行います。LINEでご相談いただければ、希望日時に合わせて調整します。',
  },
  {
    question: '結婚式当日でも二次会の相談はできますか？',
    answer: '急なご相談にも可能な限り対応します。まずはLINEまたはお電話でご連絡ください。過去にも直前依頼でご案内した実績があります。',
  },
];

export default function WeddingAfterpartyNahaPage() {
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
              { '@type': 'ListItem', position: 3, name: '那覇・国際通りの結婚式二次会', item: `${BASE_URL}/wedding-afterparty/naha` },
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
          { label: '結婚式二次会', href: '/wedding-afterparty' },
          { label: '那覇・国際通り' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="px-4 pt-4 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <MapPin size={12} />
          那覇・国際通りエリア
        </div>
        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-3">
          那覇・国際通りの<br /><span className="text-primary">結婚式二次会 会場まとめ</span>
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          那覇・国際通りエリアは、ゆいレール「県庁前駅」「牧志駅」から徒歩圏内の会場が充実しており、<strong className="text-gray-900">遠方からのゲストにも移動しやすい</strong>沖縄随一のアクセス立地です。20名の小規模二次会から150名以上の大型パーティーまで、ぱーてぃー野郎が無料でご提案します。
        </p>
        <div className="bg-red-50 rounded-2xl p-4 mb-5 border border-red-100">
          <p className="text-xs font-bold text-primary mb-2">那覇・国際通りエリアの特徴</p>
          <ul className="space-y-1.5">
            {[
              'ゆいレール駅から徒歩5分以内の会場が多数',
              '50〜150名規模の大型会場が揃う',
              'プロジェクター・スクリーン・音響完備の会場あり',
              '深夜まで営業可能な会場あり',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                <CheckCircle size={13} className="text-[#06C755] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <LineLink
          location="wedding_naha_hero"
          className="flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-md shadow-green-900/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={22} strokeWidth={2.5} />
          LINEで無料相談する
        </LineLink>
      </section>

      {/* ── 費用相場 ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-4">
          那覇・国際通りの<span className="text-primary">費用相場</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left font-bold rounded-tl-xl">人数</th>
                <th className="p-3 text-center font-bold">1名あたり（飲み放題込み）</th>
                <th className="p-3 text-center font-bold rounded-tr-xl">会場使用料</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: '20〜40名', price: '3,500〜4,500円', room: '無料〜30,000円' },
                { size: '40〜80名', price: '3,500〜5,000円', room: '無料〜50,000円' },
                { size: '80〜120名', price: '3,500〜5,500円', room: '無料〜70,000円' },
                { size: '120名以上', price: '4,000〜5,500円', room: '無料〜100,000円' },
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

      {/* ── 会場一覧 ── */}
      <section className="px-4 py-8 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-gray-900">
            那覇・国際通り<span className="text-primary">おすすめ会場</span>
          </h2>
          <span className="text-sm text-gray-500">{nahaWeddingVenues.length}件</span>
        </div>
        {nahaWeddingVenues.length > 0 ? (
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            {nahaWeddingVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 py-6 text-center">LINEからご相談ください。非掲載会場もご案内できます。</p>
        )}
        <Link
          href="/venues"
          className="mt-6 flex items-center justify-center gap-2 border-2 border-primary text-primary font-black rounded-2xl py-4 hover:bg-red-50 transition-colors"
        >
          全会場ラインナップを見る
          <ChevronRight size={18} />
        </Link>
      </section>

      {/* ── 他エリアへ ── */}
      <section className="px-4 py-6 bg-gray-50 border-b border-gray-100">
        <h2 className="text-lg font-black text-gray-900 mb-3">他のエリアで探す</h2>
        <div className="space-y-2">
          {[
            { label: '沖縄全域の結婚式二次会を探す', href: '/wedding-afterparty' },
            { label: '北谷エリアの会場を見る', href: '/areas/chatan' },
            { label: '沖縄市エリアの会場を見る', href: '/areas/okinawa-city' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100 hover:border-primary transition-colors"
            >
              <span className="text-sm font-bold text-gray-800">{l.label}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── LINE Banner ── */}
      <LineBanner />

      {/* ── FAQ ── */}
      <section className="px-4 py-8">
        <h2 className="text-xl font-black text-gray-900 mb-1">
          よくある<span className="text-primary">ご質問</span>
        </h2>
        <p className="text-xs text-gray-500 mb-5">那覇・国際通りの結婚式二次会でよく寄せられる質問</p>
        <FaqAccordion items={faqItems} />
      </section>
    </div>
  );
}
