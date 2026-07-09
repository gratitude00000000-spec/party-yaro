'use client';

import { useState } from 'react';
import { X, MessageCircle, ChevronRight } from 'lucide-react';

const LINE_ACCOUNT = '@381ivfov';

const OPTIONS = [
  {
    emoji: '📍',
    label: '指定の店舗がある',
    sub: '気になる会場の空き状況・料金を確認したい',
    message: '指定の店舗があります。気になる会場の空き状況・料金を教えてください。',
  },
  {
    emoji: '🔍',
    label: '指定の店舗はない',
    sub: '条件を伝えておすすめを教えてほしい',
    message: '指定の店舗はありません。条件を伝えるのでおすすめを教えてください。',
  },
  {
    emoji: '💬',
    label: 'とりあえず色々教えてほしい',
    sub: 'どんな会場があるかざっくり知りたい',
    message: 'まずはどんな会場があるかざっくり教えてほしいです！',
  },
];

type Props = {
  children: (open: () => void) => React.ReactNode;
};

export default function LineModal({ children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      {children(() => setShow(true))}

      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setShow(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Sheet */}
          <div
            className="relative w-full max-w-sm bg-white rounded-3xl px-5 pt-5 pb-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#06C755] rounded-full flex items-center justify-center">
                  <MessageCircle size={14} className="text-white" />
                </div>
                <p className="font-black text-gray-900 text-sm">LINEで相談する</p>
              </div>
              <button
                onClick={() => setShow(false)}
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X size={14} className="text-gray-500" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mb-3">あてはまるものを選んでください</p>

            <div className="space-y-2">
              {OPTIONS.map((opt) => (
                <a
                  key={opt.label}
                  href={`https://line.me/R/oaMessage/${LINE_ACCOUNT}/?${encodeURIComponent(opt.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 active:scale-[0.98] transition-transform text-left"
                  onClick={() => setShow(false)}
                >
                  <span className="text-2xl shrink-0">{opt.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-gray-900 text-sm leading-tight">{opt.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{opt.sub}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
