'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';
import type { Guide } from '@/lib/types';
import { GUIDE_CATEGORIES } from '@/data/guides';

const categoryColors: Record<string, string> = {
  '二次会ガイド': 'bg-pink-50 text-pink-700 border-pink-100',
  'エリア別ガイド': 'bg-blue-50 text-blue-700 border-blue-100',
  '人数別ガイド': 'bg-orange-50 text-orange-700 border-orange-100',
  '用途別ガイド': 'bg-purple-50 text-purple-700 border-purple-100',
  '幹事向けノウハウ': 'bg-green-50 text-green-700 border-green-100',
};

export default function GuideListClient({ guides }: { guides: Guide[] }) {
  const [active, setActive] = useState<string>('すべて');

  const filtered = active === 'すべて' ? guides : guides.filter((g) => g.category === active);

  return (
    <div>
      {/* Category chips */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {GUIDE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                active === cat
                  ? 'bg-primary text-white border-primary'
                  : 'border-gray-200 text-gray-600 bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article cards */}
      <div className="px-4 space-y-4">
        {filtered.map((guide) => (
          <Link
            key={guide.id}
            href={`/guide/${guide.slug}`}
            className="block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                      categoryColors[guide.category] ?? 'bg-gray-50 text-gray-600 border-gray-100'
                    }`}
                  >
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} />
                    {guide.readingTime}分
                  </span>
                </div>
                <h2 className="font-black text-gray-900 text-base leading-snug mb-2">
                  {guide.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {guide.excerpt}
                </p>
                <p className="text-xs text-gray-400 mt-2">{guide.publishedAt}</p>
              </div>
              <ChevronRight size={18} className="text-gray-300 shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
