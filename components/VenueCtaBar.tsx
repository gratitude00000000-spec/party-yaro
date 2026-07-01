'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { trackPhoneClick } from '@/lib/gtag';

type Props = {
  lineUrl: string;
  phone: string;
};

export default function VenueCtaBar({ lineUrl, phone }: Props) {
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 z-30 max-w-2xl mx-auto">
      <div className="flex gap-2.5">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#06C755] text-white font-black rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md shadow-green-900/20"
        >
          <MessageCircle size={18} />
          LINEで相談（無料）
        </a>
        <a
          href={`tel:${phone}`}
          onClick={() => trackPhoneClick('venue_detail')}
          className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white font-black rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md shadow-red-900/20"
        >
          <Phone size={16} />
          電話で問い合わせ
        </a>
      </div>
    </div>
  );
}
