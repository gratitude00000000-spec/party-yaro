import { MessageCircle } from 'lucide-react';
import { LINE_URL } from '@/data/venues';

export default function FloatingLine() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 z-40 flex items-center gap-2 bg-[#06C755] text-white font-bold rounded-full shadow-lg shadow-green-500/30 px-4 py-3 text-sm active:scale-95 transition-transform"
      aria-label="LINEで無料相談"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span className="hidden sm:inline">LINEで無料相談</span>
    </a>
  );
}
