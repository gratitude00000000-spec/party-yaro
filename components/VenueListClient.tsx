'use client';

import { useState, useMemo, useEffect } from 'react';
import { Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import VenueCard from '@/components/VenueCard';
import type { Venue } from '@/lib/types';

const NAHA_PAGE_SIZE = 10;

const MAIN_AREAS = ['那覇', '国際通り', '北谷', '沖縄市'];
const AREAS = ['すべて', ...MAIN_AREAS, 'その他エリア'];
const SCENES = ['すべて', '結婚式二次会', '忘年会', '新年会', '歓送迎会', '同窓会', '会社イベント', 'DJイベント', 'その他イベント'];
const FACILITIES = ['すべて', '貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', 'アミューズメント'];
const CAPACITIES = [
  { label: 'すべて',   value: 'すべて' },
  { label: '20名以下', value: 'max20' },
  { label: '20名以上', value: 'min20' },
  { label: '40名〜',   value: 'min40' },
  { label: '50名〜',   value: 'min50' },
  { label: '80名以上〜', value: 'min80' },
];

type Props = {
  venues: Venue[];
  initialArea?: string;
  initialScene?: string;
  initialFacility?: string;
  initialCapacity?: string;
};

function matchesCapacity(v: Venue, capacity: string): boolean {
  if (capacity === 'すべて') return true;
  if (capacity === 'max20') return v.capacityMin <= 20;
  const minVal = parseInt(capacity.slice(3), 10); // 'min20' → 20
  return v.capacityMax >= minVal;
}

export default function VenueListClient({ venues, initialArea, initialScene, initialFacility, initialCapacity }: Props) {
  const [area,     setArea]     = useState(initialArea     || 'すべて');
  const [scene,    setScene]    = useState(initialScene    || 'すべて');
  const [facility, setFacility] = useState(initialFacility || 'すべて');
  const [capacity, setCapacity] = useState(initialCapacity || 'すべて');
  const [showFilters, setShowFilters] = useState(false);
  const [nahaPage, setNahaPage] = useState(1);

  // エリア変更時はページをリセット
  useEffect(() => { setNahaPage(1); }, [area, scene, facility, capacity]);

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      // エリア
      if (area === 'その他エリア') {
        if (MAIN_AREAS.includes(v.area)) return false;
      } else if (area !== 'すべて') {
        if (v.area !== area) return false;
      }
      // 用途
      if (scene !== 'すべて' && !v.scenes.includes(scene)) return false;
      // 設備
      if (facility !== 'すべて' && !v.facilities.includes(facility)) return false;
      // 人数
      if (!matchesCapacity(v, capacity)) return false;
      return true;
    });
  }, [venues, area, scene, facility, capacity]);

  const activeCount = [area, scene, facility, capacity].filter((f) => f !== 'すべて').length;
  const hasActiveFilters = activeCount > 0;

  const resetFilters = () => {
    setArea('すべて');
    setScene('すべて');
    setFacility('すべて');
    setCapacity('すべて');
  };

  // 那覇スマホ用: 名前あり優先ソート → ページ分割
  const nahaSorted = useMemo(() => {
    if (area !== '那覇') return filtered;
    return [...filtered].sort((a, b) => {
      const aHasName = a.name.trim() !== '';
      const bHasName = b.name.trim() !== '';
      if (aHasName && !bHasName) return -1;
      if (!aHasName && bHasName) return 1;
      return 0;
    });
  }, [filtered, area]);

  const nahaPageCount = Math.ceil(nahaSorted.length / NAHA_PAGE_SIZE);
  const nahaPaged = nahaSorted.slice((nahaPage - 1) * NAHA_PAGE_SIZE, nahaPage * NAHA_PAGE_SIZE);

  return (
    <div>
      {/* Filter header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-10 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            <span className="font-black text-gray-900 text-base">{filtered.length}</span> 件の会場
          </span>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-primary border border-primary rounded-full px-3 py-1"
              >
                <X size={12} />
                リセット
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-1.5 text-sm font-bold rounded-full px-3 py-1.5 border transition-colors ${
                showFilters || hasActiveFilters
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Filter size={14} />
              絞り込み
              {hasActiveFilters && (
                <span className="w-4 h-4 bg-white text-primary text-xs rounded-full flex items-center justify-center font-black">
                  {activeCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Area chips — always visible */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {AREAS.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                area === a
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-200 text-gray-600 bg-white'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded filter panel */}
      {showFilters && (
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-4 space-y-4">
          {/* 人数 */}
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">人数</p>
            <div className="flex flex-wrap gap-2">
              {CAPACITIES.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setCapacity(value)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    capacity === value
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 text-gray-600 bg-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 用途 */}
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">用途</p>
            <div className="flex flex-wrap gap-2">
              {SCENES.map((s) => (
                <button
                  key={s}
                  onClick={() => setScene(s)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    scene === s
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 text-gray-600 bg-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 設備・条件 */}
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">設備・条件</p>
            <div className="flex flex-wrap gap-2">
              {FACILITIES.map((f) => (
                <button
                  key={f}
                  onClick={() => setFacility(f)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                    facility === f
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-200 text-gray-600 bg-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Venue grid — スマホ（那覇のみページネーション） */}
      <div className="lg:hidden px-4 py-4 grid grid-cols-1 gap-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-bold text-gray-700 mb-1">条件に合う会場が見つかりませんでした</p>
            <p className="text-sm text-gray-500 mb-4">条件を変えて再検索するか、LINEでご相談ください</p>
            <button onClick={resetFilters} className="btn-primary-sm">条件をリセット</button>
          </div>
        ) : area === '那覇' ? (
          <>
            {nahaPaged.map((venue) => <VenueCard key={venue.id} venue={venue} />)}
            {/* ページネーション */}
            {nahaPageCount > 1 && (
              <div className="flex items-center justify-center gap-3 pt-4 pb-2">
                <button
                  onClick={() => { setNahaPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  disabled={nahaPage === 1}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={14} />前へ
                </button>
                <span className="text-sm font-bold text-gray-700">
                  {nahaPage} / {nahaPageCount}
                </span>
                <button
                  onClick={() => { setNahaPage(p => Math.min(nahaPageCount, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  disabled={nahaPage === nahaPageCount}
                  className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  次へ<ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        ) : (
          filtered.map((venue) => <VenueCard key={venue.id} venue={venue} />)
        )}
      </div>

      {/* Venue grid — PC（ページネーションなし） */}
      <div className="hidden lg:grid px-4 py-4 grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-bold text-gray-700 mb-1">条件に合う会場が見つかりませんでした</p>
            <p className="text-sm text-gray-500 mb-4">条件を変えて再検索するか、LINEでご相談ください</p>
            <button onClick={resetFilters} className="btn-primary-sm">条件をリセット</button>
          </div>
        ) : (
          filtered.map((venue) => <VenueCard key={venue.id} venue={venue} />)
        )}
      </div>
    </div>
  );
}
