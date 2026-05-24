'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Bookmark, BookOpen, MessageCircle } from 'lucide-react';
import { LINE_URL } from '@/data/venues';
import { trackLineClick } from '@/lib/gtag';
import { useFavorites } from '@/lib/FavoritesContext';

const leftItems = [
  { href: '/', label: 'ホーム', icon: Home },
  { href: '/search', label: '探す', icon: Search },
];

const rightItems = [
  { href: '/saved', label: '保存', icon: Bookmark },
  { href: '/guide', label: 'ガイド', icon: BookOpen },
];

function NavTab({ href, label, icon: Icon, pathname, badge }: {
  href: string;
  label: string;
  icon: typeof Home;
  pathname: string;
  badge?: number;
}) {
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className="flex-1 flex flex-col items-center justify-center gap-1 touch-target relative isolate"
    >
      {isActive && (
        <span className="absolute inset-x-1.5 top-2 bottom-1.5 bg-red-50 rounded-2xl -z-10" />
      )}
      <span className="relative">
        <Icon
          size={24}
          strokeWidth={isActive ? 2.5 : 1.8}
          className={isActive ? 'text-primary' : 'text-gray-400'}
        />
        {badge != null && badge > 0 && (
          <span className="absolute -top-1 -right-1.5 min-w-[16px] h-4 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center px-0.5 leading-none">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </span>
      <span className={`text-[11px] ${isActive ? 'font-bold text-primary' : 'font-medium text-gray-400'}`}>
        {label}
      </span>
    </Link>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const { ids } = useFavorites();
  const savedCount = ids.size;

  return (
    <nav className="bottom-nav">
      <div className="flex items-stretch h-20 max-w-2xl mx-auto">
        {leftItems.map((item) => (
          <NavTab key={item.href} {...item} pathname={pathname} />
        ))}

        {/* LINE FAB */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-end pb-2 touch-target relative"
          onClick={() => trackLineClick('bottomnav')}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-14 h-14 bg-[#06C755] rounded-full flex items-center justify-center shadow-xl shadow-green-900/40 border-[3px] border-white">
            <MessageCircle size={26} strokeWidth={2.5} className="text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <span className="text-[11px] font-bold text-[#06C755]">LINE</span>
        </a>

        {rightItems.map((item) => (
          <NavTab
            key={item.href}
            {...item}
            pathname={pathname}
            badge={item.href === '/saved' ? savedCount : undefined}
          />
        ))}
      </div>
    </nav>
  );
}
