'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Bookmark, BookOpen, MessageCircle, Phone } from 'lucide-react';
import { PHONE } from '@/data/venues';
import { trackLineClick, trackPhoneClick } from '@/lib/gtag';
import LineModal from '@/components/LineModal';
import { useFavorites } from '@/lib/FavoritesContext';

const navLinks = [
  { href: '/',       label: 'ホーム' },
  { href: '/venues', label: '会場一覧' },
  { href: '/search', label: '会場検索' },
  { href: '/guide',  label: 'ガイド' },
  { href: '/faq',    label: 'よくある質問' },
];

export default function Header() {
  const pathname = usePathname();
  const { ids } = useFavorites();
  const savedCount = ids.size;

  return (
    <header className="hidden lg:block sticky top-0 z-50 bg-gray-950 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="ぱーてぃー野郎"
            width={1199}
            height={499}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* 保存 */}
          <Link
            href="/saved"
            className="relative flex items-center gap-1.5 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm font-bold"
          >
            <Bookmark size={16} />
            保存済み
            {savedCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center px-0.5">
                {savedCount}
              </span>
            )}
          </Link>

          {/* 電話 */}
          <a
            href={`tel:${PHONE}`}
            onClick={() => trackPhoneClick('header')}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm font-bold"
          >
            <Phone size={15} />
            {PHONE}
          </a>

          {/* LINE CTA */}
          <LineModal>
            {(open) => (
              <button
                type="button"
                onClick={() => { trackLineClick('header'); open(); }}
                className="flex items-center gap-2 bg-[#06C755] text-white font-black text-sm rounded-xl px-4 py-2 hover:bg-[#05a847] transition-colors shadow-md shadow-green-900/30"
              >
                <MessageCircle size={16} />
                LINEで無料相談
              </button>
            )}
          </LineModal>
        </div>

      </div>
    </header>
  );
}
