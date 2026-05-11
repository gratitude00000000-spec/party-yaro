'use client';

import { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import VenueCard from '@/components/VenueCard';
import type { Venue } from '@/lib/types';

const AREAS = ['すべて', '那覇', '国際通り', '北谷', '宜野湾', '浦添', '沖縄市'];
const SCENES = ['すべて', '結婚式二次会', '忘年会', '新年会', '歓送迎会', '同窓会', '会社イベント', 'DJイベント'];
const FACILITIES = ['すべて', '貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '駐車場', '深夜OK'];

type Props = {
  venues: Venue[];
  initialArea?: string;
  initialScene?: string;
  initialFacility?: string;
};

export default function VenueListClient({ venues, initialArea, initialScene, initialFacility }: Props) {
  const [area, setArea] = useState(initialArea || 'すべて');
  const [scene, setScene] = useState(initialScene || 'すべて');
  const [facility, setFacility] = useState(initialFacility || 'すべて');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      if (area !== 'すべて' && v.area !== area) return false;
      if (scene !== 'すべて' && !v.scenes.includes(scene)) return false;
      if (facility !== 'すべて' && !v.facilities.includes(facility)) return false;
      return true;
    });
  }, [venues, area, scene, facility]);

  const hasActiveFilters = area !== 'すべて' || scene !== 'すべて' || facility !== 'すべて';

  const resetFilters = () => {
    setArea('すべて');
    setScene('すべて');
    setFacility('すべて');
  };

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
                  {[area, scene, facility].filter((f) => f !== 'すべて').length}
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

      {/* Venue grid */}
      <div className="px-4 py-4 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-bold text-gray-700 mb-1">条件に合う会場が見つかりませんでした</p>
            <p className="text-sm text-gray-500 mb-4">条件を変えて再検索するか、LINEでご相談ください</p>
            <button onClick={resetFilters} className="btn-primary-sm">
              条件をリセット
            </button>
          </div>
        ) : (
          filtered.map((venue) => <VenueCard key={venue.id} venue={venue} />)
        )}
      </div>
    </div>
  );
}
