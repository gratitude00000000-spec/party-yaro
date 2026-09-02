import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MessageCircle, ChevronRight, MapPin } from 'lucide-react';
import { venues, LINE_URL } from '@/data/venues';
import VenueCard from '@/components/VenueCard';
import Breadcrumb from '@/components/Breadcrumb';
import LineLink from '@/components/LineLink';

type AreaConfig = {
  label: string;
  title: string;
  description: string;
  h1: string;
  body: string;
  relatedAreas: { label: string; slug: string }[];
};

const AREA_CONFIG: Record<string, AreaConfig> = {
  naha: {
    label: '那覇',
    title: '那覇の貸切パーティー会場｜二次会・忘年会・結婚式二次会',
    description: '那覇エリアの貸切パーティー会場を無料でご提案。結婚式二次会・忘年会・歓送迎会など幹事の悩みをサポート。LINE相談・内覧手配無料。',
    h1: '那覇の貸切パーティー会場',
    body: '那覇市内には、牧志・久茂地・泊など多彩なエリアに貸切パーティー会場が揃っています。結婚式二次会・忘年会・歓送迎会・DJイベントまで、ぱーてぃー野郎が無料でご提案します。',
    relatedAreas: [
      { label: '国際通りエリア', slug: 'kokusai-dori' },
      { label: '北谷エリア', slug: 'chatan' },
      { label: '沖縄市エリア', slug: 'okinawa-city' },
    ],
  },
  'kokusai-dori': {
    label: '国際通り',
    title: '国際通りの貸切パーティー会場｜二次会・忘年会・結婚式二次会',
    description: '国際通りエリアの貸切パーティー会場を無料でご提案。アクセス抜群の那覇・国際通りで二次会・忘年会・歓送迎会に最適な会場を探すなら「ぱーてぃー野郎」。',
    h1: '国際通りの貸切パーティー会場',
    body: '国際通り周辺には、ゆいレール県庁前駅・牧志駅から徒歩圏内の貸切会場が多数あります。観光客・社内イベント・結婚式二次会など幅広いニーズに対応した会場をご紹介します。',
    relatedAreas: [
      { label: '那覇エリア', slug: 'naha' },
      { label: '北谷エリア', slug: 'chatan' },
      { label: '沖縄市エリア', slug: 'okinawa-city' },
    ],
  },
  chatan: {
    label: '北谷',
    title: '北谷の貸切パーティー会場｜二次会・忘年会・結婚式二次会',
    description: '北谷エリアの貸切パーティー会場を無料でご提案。美浜・アメリカンビレッジ周辺の会場で結婚式二次会・忘年会・歓送迎会を。LINE相談・内覧手配無料。',
    h1: '北谷の貸切パーティー会場',
    body: '北谷町・美浜エリアには、アメリカンビレッジを中心におしゃれな貸切会場が揃っています。リゾート感あふれる空間で、結婚式二次会・忘年会・各種パーティーをお楽しみください。',
    relatedAreas: [
      { label: '那覇エリア', slug: 'naha' },
      { label: '国際通りエリア', slug: 'kokusai-dori' },
      { label: '沖縄市エリア', slug: 'okinawa-city' },
    ],
  },
  'okinawa-city': {
    label: '沖縄市',
    title: '沖縄市の貸切パーティー会場｜二次会・忘年会・コザ',
    description: '沖縄市（コザ）エリアの貸切パーティー会場を無料でご提案。忘年会・歓送迎会・DJイベントに対応した会場をぱーてぃー野郎が無料でサポートします。',
    h1: '沖縄市の貸切パーティー会場',
    body: '沖縄市（コザ）には、ライブ文化が根付いたユニークな貸切会場が多数あります。DJイベント・忘年会・歓送迎会など、中部エリアで会場をお探しの方はぱーてぃー野郎にご相談ください。',
    relatedAreas: [
      { label: '那覇エリア', slug: 'naha' },
      { label: '国際通りエリア', slug: 'kokusai-dori' },
      { label: '北谷エリア', slug: 'chatan' },
    ],
  },
};

type Props = { params: { area: string } };

export function generateStaticParams() {
  return Object.keys(AREA_CONFIG).map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = AREA_CONFIG[params.area];
  if (!config) return {};
  const BASE_URL = 'https://www.okinawa-party-yarou.com';
  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: `${BASE_URL}/areas/${params.area}`,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${BASE_URL}/areas/${params.area}`,
    },
  };
}

export default function AreaPage({ params }: Props) {
  const config = AREA_CONFIG[params.area];
  if (!config) notFound();

  const BASE_URL = 'https://www.okinawa-party-yarou.com';

  const areaVenues = venues.filter(
    (v) => v.name.trim() && (v.area === config.label || v.extraAreas?.includes(config.label))
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: '会場一覧', item: `${BASE_URL}/venues` },
      { '@type': 'ListItem', position: 3, name: config.h1, item: `${BASE_URL}/areas/${params.area}` },
    ],
  };

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場一覧', href: '/venues' },
          { label: config.h1 },
        ]}
      />

      {/* Hero */}
      <div className="px-4 pt-4 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <MapPin size={12} />
          {config.label}エリア
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">{config.h1}</h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{config.body}</p>
        <LineLink
          location={`area_${params.area}_hero`}
          className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 shadow-md shadow-green-900/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          LINEで無料相談する
        </LineLink>
      </div>

      {/* Venue list */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-gray-900">
            {config.label}エリアの<span className="text-primary">掲載会場</span>
          </h2>
          <span className="text-sm text-gray-500">{areaVenues.length}件</span>
        </div>

        {areaVenues.length > 0 ? (
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            {areaVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 py-8 text-center">
            現在このエリアの掲載会場はありません。<br />LINEからご相談いただくと、非掲載会場もご案内できます。
          </p>
        )}

        <Link
          href="/venues"
          className="mt-6 flex items-center justify-center gap-2 border-2 border-primary text-primary font-black rounded-2xl py-4 active:scale-95 transition-transform hover:bg-red-50"
        >
          全エリアの会場を見る
          <ChevronRight size={18} />
        </Link>
      </div>

      {/* Related areas */}
      <div className="px-4 py-6 bg-gray-50 border-t border-gray-100">
        <h2 className="text-lg font-black text-gray-900 mb-3">他のエリアを探す</h2>
        <div className="flex flex-wrap gap-2">
          {config.relatedAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
            >
              <MapPin size={12} />
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-8 border-t border-gray-100">
        <div className="bg-gray-900 rounded-3xl p-6 text-center">
          <p className="text-gray-400 text-xs mb-2">無料相談受付中</p>
          <h2 className="text-white font-black text-xl mb-4">
            {config.label}で会場をお探しなら<br />まずはぱーてぃー野郎へ
          </h2>
          <LineLink
            location={`area_${params.area}_bottom`}
            className="flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-lg shadow-green-900/40 active:scale-95 transition-transform"
          >
            <MessageCircle size={22} />
            LINEで無料相談
          </LineLink>
        </div>
      </div>
    </div>
  );
}
