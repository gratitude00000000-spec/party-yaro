import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { getAllGuides } from '@/lib/guide-api';
import LineCta from '@/components/LineCta';
import Breadcrumb from '@/components/Breadcrumb';
import GuideListClient from '@/components/GuideListClient';

export const revalidate = 3600; // ISR: 1時間ごとに再取得

export const metadata: Metadata = {
  title: '会場探しガイド | 沖縄の貸切パーティー・二次会・忘年会完全ガイド',
  description:
    '沖縄の貸切パーティー会場・結婚式二次会・忘年会の選び方を徹底解説。エリア別・人数別・用途別・幹事向けノウハウをまとめた完全ガイドです。',
};

export default async function GuidePage() {
  const guides = await getAllGuides();

  return (
    <div className="page-container">
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場探しガイド' },
        ]}
      />

      <div className="px-4 pb-4">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          <span className="text-primary">会場探しガイド</span>
        </h1>
        <p className="text-sm text-gray-500">
          エリア・人数・用途別に、沖縄の貸切会場選びのポイントを解説します。
        </p>
      </div>

      <GuideListClient guides={guides} />

      {/* Bottom CTA */}
      <div className="px-4 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-red-950 rounded-3xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-[#06C755]/20 rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-[#06C755]" />
            </div>
          </div>
          <h2 className="text-white font-black text-xl mb-2">
            会場選びに迷ったら、<br />LINEで無料相談
          </h2>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            人数・エリア・予算・用途を送るだけで、<br />
            条件に合う貸切パーティー会場をご提案します。
          </p>
          <LineCta className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 active:scale-95 transition-transform w-full">
            <MessageCircle size={20} />
            LINEで無料相談する
          </LineCta>
        </div>
      </div>
    </div>
  );
}
