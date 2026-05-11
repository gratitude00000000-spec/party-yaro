'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-4 text-left gap-3 active:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="flex items-start gap-2.5 flex-1">
              <span className="text-primary font-black text-sm mt-0.5 shrink-0">Q</span>
              <span className="font-bold text-gray-900 text-sm leading-snug">{item.question}</span>
            </span>
            <ChevronDown
              size={18}
              className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === i && (
            <div className="pb-4 flex gap-2.5 animate-slide-up">
              <span className="text-[#06C755] font-black text-sm mt-0 shrink-0">A</span>
              <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
