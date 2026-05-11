'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Bookmark, BookOpen, MessageCircle } from 'lucide-react';
import { LINE_URL } from '@/data/venues';

const navItems = [
  { href: '/', label: 'ホーム', icon: Home },
  { href: '/search', label: '探す', icon: Search },
  { href: '/venues', label: '保存', icon: Bookmark },
  { href: '/guide', label: 'ガイド', icon: BookOpen },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      <div className="flex items-stretch h-16 max-w-2xl mx-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors touch-target ${
                isActive ? 'text-primary' : 'text-gray-400'
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={isActive ? 'text-primary' : 'text-gray-400'}
              />
              {label}
            </Link>
          );
        })}

        {/* LINE tab — always green */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-bold text-[#06C755] touch-target"
        >
          <div className="relative">
            <MessageCircle size={22} strokeWidth={2} className="text-[#06C755]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#06C755] rounded-full animate-pulse" />
          </div>
          LINE
        </a>
      </div>
    </nav>
  );
}
