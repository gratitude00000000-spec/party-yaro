import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin, Users, Phone, MessageCircle, Check, ChevronRight, Star, Instagram,
} from 'lucide-react';
import { getVenueBySlug, venues, LINE_URL, PHONE } from '@/data/venues';
import PhotoSlider from '@/components/PhotoSlider';
import FaqAccordion from '@/components/FaqAccordion';
import VenueCard from '@/components/VenueCard';
import Breadcrumb from '@/components/Breadcrumb';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueBySlug(params.slug);
  if (!venue) return {};
  return {
    title: `${venue.name} | ${venue.area}の貸切パーティー会場`,
    description: `${venue.name}（${venue.area}）は${venue.capacityMin}〜${venue.capacityMax}名に対応。${venue.recommendedPoint.slice(0, 80)}...`,
    openGraph: {
      images: [{ url: venue.images[0], width: 800, height: 600, alt: venue.name }],
    },
  };
}

export default function VenueDetailPage({ params }: Props) {
  const venue = getVenueBySlug(params.slug);
  if (!venue) notFound();

  const related = venues
    .filter((v) => v.id !== venue.id && v.area === venue.area)
    .slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: venue.name,
    description: venue.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.address,
      addressLocality: venue.area,
      addressRegion: '沖縄県',
      addressCountry: 'JP',
    },
    telephone: venue.phone,
    maximumAttendeeCapacity: venue.capacityMax,
    url: `https://www.party-yaro.com/venues/${venue.slug}`,
    image: venue.images,
  };

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場一覧', href: '/venues' },
          { label: venue.name },
        ]}
      />

      {/* Photo slider */}
      <PhotoSlider images={venue.images} name={venue.name} />

      {/* Basic info */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
              <MapPin size={12} />
              {venue.area}
            </div>
            <h1 className="text-2xl font-black text-gray-900 leading-tight">{venue.name}</h1>
          </div>
          <div className="text-right shrink-0">
            <div className="flex items-center gap-1 justify-end mb-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-gray-700">人気会場</span>
            </div>
            <p className="text-primary font-black text-sm">
              {venue.capacityMin}〜{venue.capacityMax}名
            </p>
          </div>
        </div>

        {/* Scene tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {venue.tags.map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {/* Price */}
        <div className="bg-gray-50 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-500 mb-0.5">料金目安</p>
          <p className="font-black text-gray-900">{venue.priceText}</p>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-4 border-b border-gray-100">
        <h2 className="font-black text-gray-900 mb-2">会場について</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{venue.description}</p>
      </div>

      {/* Recommended point */}
      <div className="px-4 py-4 border-b border-gray-100 bg-red-50/50">
        <h2 className="font-black text-primary mb-2 flex items-center gap-1.5">
          <Star size={16} className="fill-primary text-primary" />
          おすすめポイント
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{venue.recommendedPoint}</p>
      </div>

      {/* Facilities */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="font-black text-gray-900 mb-3">設備・サービス</h2>
        <div className="grid grid-cols-2 gap-2">
          {venue.facilities.map((f) => (
            <div key={f} className="flex items-center gap-2">
              <Check size={14} className="text-[#06C755] shrink-0" />
              <span className="text-sm text-gray-700">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenes */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="font-black text-gray-900 mb-3">こんなシーンにおすすめ</h2>
        <div className="flex flex-wrap gap-2">
          {venue.scenes.map((s) => (
            <span key={s} className="tag-chip-dark">{s}</span>
          ))}
        </div>
      </div>

      {/* Access */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h2 className="font-black text-gray-900 mb-2">アクセス</h2>
        <div className="flex gap-2">
          <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700 mb-1">{venue.address}</p>
            <p className="text-sm text-gray-600">{venue.access}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {venue.mapUrl && (
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-bold text-sm rounded-xl py-2.5"
            >
              <MapPin size={14} />
              Googleマップで見る
              <ChevronRight size={14} />
            </a>
          )}
          {venue.instagramUrl && (
            <a
              href={venue.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl py-2.5 font-bold text-sm text-white active:scale-95 transition-transform"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <Instagram size={16} />
              Instagram
            </a>
          )}
        </div>
      </div>

      {/* FAQ */}
      {venue.faq.length > 0 && (
        <div className="px-4 py-4 border-b border-gray-100">
          <h2 className="font-black text-gray-900 mb-3">この会場に関するよくある質問</h2>
          <FaqAccordion items={venue.faq} />
        </div>
      )}

      {/* Related venues */}
      {related.length > 0 && (
        <div className="px-4 py-6">
          <h2 className="font-black text-gray-900 mb-4">
            {venue.area}エリアの他の会場
          </h2>
          <div className="space-y-4">
            {related.map((v) => (
              <VenueCard key={v.id} venue={v} compact />
            ))}
          </div>
        </div>
      )}

      {/* Spacer for fixed bottom bar */}
      <div className="h-28" />

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 z-30 max-w-2xl mx-auto">
        <div className="flex gap-2.5">
          <a
            href={venue.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#06C755] text-white font-black rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md shadow-green-900/20"
          >
            <MessageCircle size={18} />
            LINEで相談（無料）
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white font-black rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md shadow-red-900/20"
          >
            <Phone size={16} />
            電話で問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
}
