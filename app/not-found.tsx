import Link from 'next/link';
import { Search, Home, MessageCircle } from 'lucide-react';
import LineCta from '@/components/LineCta';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center pb-24">
      <div className="text-6xl mb-4">🎉</div>
      <h1 className="text-2xl font-black text-gray-900 mb-2">
        ページが見つかりません
      </h1>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        お探しのページは移動または削除された可能性があります。<br />
        会場を探す場合は下のボタンからどうぞ。
      </p>

      <div className="w-full max-w-xs space-y-3">
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white font-black rounded-2xl py-4"
        >
          <Home size={18} />
          トップへ戻る
        </Link>
        <Link
          href="/venues"
          className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold rounded-2xl py-4"
        >
          <Search size={18} />
          会場一覧を見る
        </Link>
        <LineCta className="w-full flex items-center justify-center gap-2 bg-[#06C755] text-white font-black rounded-2xl py-4">
          <MessageCircle size={18} />
          LINEで無料相談
        </LineCta>
      </div>
    </div>
  );
}
