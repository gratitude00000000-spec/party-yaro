import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, MapPin, Users, Tag, Settings2, ChevronRight, MessageCircle } from 'lucide-react';
import LineCta from '@/components/LineCta';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '会場検索 | エリア・人数・用途で沖縄の貸切会場を検索',
  description:
    'エリア（那覇・国際通り・北谷・沖縄市）・人数・用途・設備で沖縄の貸切パーティー会場を検索。結婚式二次会・忘年会・歓送迎会・DJイベント・その他イベントに対応。',
};

const areas = ['那覇', '国際通り', '北谷', '沖縄市', 'その他エリア'];
const capacities = [
  { label: '20名以下', value: 'max20' },
  { label: '20名以上', value: 'min20' },
  { label: '40名〜',   value: 'min40' },
  { label: '50名〜',   value: 'min50' },
  { label: '80名以上〜', value: 'min80' },
];
const scenes = [
  '結婚式二次会', '忘年会', '新年会', '歓送迎会', '同窓会', '会社イベント', 'DJイベント', 'その他イベント',
];
const facilities = [
  '貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', 'アミューズメント',
];

export default function SearchPage() {
  return (
    <div className="page-container">
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場検索' },
        ]}
      />

      <div className="px-4 pb-3">
        <h1 className="text-2xl font-black text-gray-900">
          <span className="text-primary">会場を検索</span>する
        </h1>
        <p className="text-sm text-gray-500 mt-1">条件を選んで会場を絞り込めます</p>
      </div>

      {/* Area */}
      <section className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
            <MapPin size={14} className="text-primary" />
          </div>
          <h2 className="font-black text-gray-900">エリアから探す</h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {areas.map((area) => (
            <Link
              key={area}
              href={`/venues?area=${encodeURIComponent(area)}`}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 active:scale-95 transition-transform"
            >
              <span className="text-sm font-bold text-gray-800">{area}</span>
              <ChevronRight size={14} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* Capacity */}
      <section className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
            <Users size={14} className="text-primary" />
          </div>
          <h2 className="font-black text-gray-900">人数から探す</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {capacities.map(({ label, value }) => (
            <Link
              key={value}
              href={`/venues?capacity=${value}`}
              className="flex items-center gap-1.5 border-2 border-primary text-primary font-black text-sm rounded-xl px-4 py-2.5 active:scale-95 transition-transform"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Scenes */}
      <section className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
            <Tag size={14} className="text-primary" />
          </div>
          <h2 className="font-black text-gray-900">用途から探す</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {scenes.map((scene) => (
            <Link
              key={scene}
              href={`/venues?scene=${encodeURIComponent(scene)}`}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 active:scale-95 transition-transform"
            >
              <span className="text-sm font-bold text-gray-800">{scene}</span>
              <ChevronRight size={14} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
            <Settings2 size={14} className="text-primary" />
          </div>
          <h2 className="font-black text-gray-900">設備・条件から探す</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {facilities.map((f) => (
            <Link
              key={f}
              href={`/venues?facility=${encodeURIComponent(f)}`}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 active:scale-95 transition-transform"
            >
              <span className="text-sm font-bold text-gray-800">{f}</span>
              <ChevronRight size={14} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* All venues button */}
      <div className="px-4 py-4">
        <Link
          href="/venues"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white font-black rounded-2xl py-4 active:scale-95 transition-transform mb-3"
        >
          <Search size={18} />
          すべての会場を見る
        </Link>
        <p className="text-center text-sm text-gray-500 mb-4">または</p>
        <LineCta className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 shadow-lg shadow-green-900/20 active:scale-95 transition-transform">
          <MessageCircle size={20} />
          条件をLINEで伝えて会場を探す（無料）
        </LineCta>
        <p className="text-center text-xs text-gray-400 mt-2">
          「人数・エリア・予算」を伝えるだけでOK
        </p>
      </div>
    </div>
  );
}
