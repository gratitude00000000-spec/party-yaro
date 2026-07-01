'use client';

import { MessageCircle, Gift } from 'lucide-react';
import { PHONE } from '@/data/venues';
import LineLink from '@/components/LineLink';
import { trackPhoneClick } from '@/lib/gtag';

export default function LineBanner() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 text-red-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-primary/30">
          <Gift size={12} />
          相談・紹介 完全無料
        </div>

        <h2 className="text-white font-black text-2xl sm:text-3xl mb-2 leading-tight">
          会場選びに迷ったら<br />
          <span className="text-[#06C755]">LINEで気軽に相談</span>を
        </h2>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          沖縄600件以上の実績があるスタッフが<br />
          あなたの条件に合った会場を無料でご提案します
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LineLink
            location="banner"
            className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 px-8 shadow-lg shadow-green-900/40 active:scale-95 transition-transform"
          >
            <MessageCircle size={24} strokeWidth={2.5} />
            LINEで無料相談
          </LineLink>
          <a
            href={`tel:${PHONE}`}
            onClick={() => trackPhoneClick('banner')}
            className="flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 text-white font-bold text-base rounded-2xl py-4 px-8 active:scale-95 transition-transform backdrop-blur-sm"
          >
            📞 {PHONE}
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-4">
          24時間受付中 ・ 内覧手配も無料 ・ しつこい営業一切なし
        </p>
      </div>
    </section>
  );
}
