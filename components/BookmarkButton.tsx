'use client';

import { Bookmark } from 'lucide-react';
import { useFavorites } from '@/lib/FavoritesContext';
import { trackBookmarkClick } from '@/lib/gtag';

export default function BookmarkButton({ venueId }: { venueId: string }) {
  const { isSaved, toggle } = useFavorites();
  const saved = isSaved(venueId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        trackBookmarkClick(venueId, saved);
        toggle(venueId);
      }}
      aria-label={saved ? '保存済み' : '保存する'}
      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all active:scale-90 ${
        saved
          ? 'bg-primary text-white'
          : 'bg-white/90 backdrop-blur-sm text-gray-600'
      }`}
    >
      <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} strokeWidth={2} />
    </button>
  );
}
