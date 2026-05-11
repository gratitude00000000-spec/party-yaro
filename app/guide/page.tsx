import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight, MessageCircle } from 'lucide-react';
import { guides } from '@/data/guides';
import { LINE_URL } from '@/data/venues';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '幹事ガイド | 沖縄の二次会・貸切会場選び完全ガイド',
  description:
    '沖縄の結婚式二次会・忘年会・歓送迎会の会場選びに役立つ幹事向けガイド。エリア別選び方・チェックリスト・失敗しない方法を徹底解説。',
};

const categoryColors: Record<string, string> = {
  '結婚式二次会': 'bg-pink-50 text-pink-700 border-pink-100',
  'パーティー会場': 'bg-purple-50 text-purple-700 border-purple-100',
  '幹事ガイド': 'bg-blue-50 text-blue-700 border-blue-100',
  '大人数パーティー': 'bg-orange-50 text-orange-700 border-orange-100',
  '那覇エリア': 'bg-red-50 text-red-700 border-red-100',
};

export default function GuidePage() {
  return (
    <div className="page-container">
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '幹事ガイド' },
        ]}
      />

      <div className="px-4 pb-4">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          <span className="text-primary">幹事ガイド</span>
        </h1>
        <p className="text-sm text-gray-500">
          沖縄で二次会・貸切会場を探す幹事の方向け完全ガイド。
          会場選びに失敗しないためのポイントを解説します。
        </p>
      </div>

      {/* Guide articles */}
      <div className="px-4 space-y-4">
        {guides.map((guide) => (
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
                      categoryColors[guide.category] || 'bg-gray-50 text-gray-600 border-gray-100'
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

      {/* CTA */}
      <div className="px-4 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-red-950 rounded-3xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-[#06C755]/20 rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-[#06C755]" />
            </div>
          </div>
          <h2 className="text-white font-black text-xl mb-2">
            読んでも迷ったら<br />まずLINEへ
          </h2>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            条件を伝えるだけで、経験豊富なスタッフが<br />
            最適な会場を無料でご提案します
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 active:scale-95 transition-transform"
          >
            <MessageCircle size={20} />
            LINEで無料相談する
          </a>
        </div>
      </div>
    </div>
  );
}
