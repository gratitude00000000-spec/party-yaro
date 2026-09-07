import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { venues } from '@/data/venues';
import VenueListClient from '@/components/VenueListClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '会場一覧 | 沖縄の二次会・貸切パーティー会場',
  description:
    '沖縄の二次会・貸切パーティー会場一覧。那覇・国際通り・北谷・宜野湾・浦添・沖縄市エリアの会場をエリア・人数・用途・設備で絞り込み検索できます。',
  alternates: {
    canonical: 'https://www.okinawa-party-yarou.com/venues',
  },
};

type Props = {
  searchParams: { area?: string; scene?: string; facility?: string; capacity?: string };
};

export default function VenuesPage({ searchParams }: Props) {
  return (
    <div className="page-container">
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場一覧' },
        ]}
      />

      <div className="px-4 pb-2">
        <h1 className="text-2xl font-black text-gray-900">
          沖縄の<span className="text-primary">貸切パーティー会場</span>一覧
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          結婚式二次会・忘年会・歓送迎会・DJイベントなど幅広いシーンに対応
        </p>
      </div>

      {/* 結婚式二次会ガイドへの誘導 */}
      <div className="px-4 pb-3">
        <Link
          href="/wedding-afterparty"
          className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl p-3.5 hover:border-primary transition-colors"
        >
          <span className="text-2xl shrink-0">💍</span>
          <div className="flex-1 min-w-0">
            <p className="font-black text-gray-900 text-sm">結婚式二次会の会場を探している方へ</p>
            <p className="text-xs text-gray-500 mt-0.5">費用相場・選び方・那覇・国際通りのおすすめ会場を解説</p>
          </div>
          <ChevronRight size={16} className="text-primary shrink-0" />
        </Link>
      </div>

      <VenueListClient
        venues={venues}
        initialArea={searchParams.area}
        initialScene={searchParams.scene}
        initialFacility={searchParams.facility}
        initialCapacity={searchParams.capacity}
      />
    </div>
  );
}
