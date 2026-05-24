import type { Metadata } from 'next';
import { venues } from '@/data/venues';
import VenueListClient from '@/components/VenueListClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '会場一覧 | 沖縄の二次会・貸切パーティー会場',
  description:
    '沖縄の二次会・貸切パーティー会場一覧。那覇・国際通り・北谷・宜野湾・浦添・沖縄市エリアの会場をエリア・人数・用途・設備で絞り込み検索できます。',
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
