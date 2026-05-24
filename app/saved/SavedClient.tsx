'use client';

import Link from 'next/link';
import { Bookmark, Search } from 'lucide-react';
import { useFavorites } from '@/lib/FavoritesContext';
import VenueCard from '@/components/VenueCard';
import { venues } from '@/data/venues';

export default function SavedClient() {
  const { ids } = useFavorites();
  const savedVenues = venues.filter((v) => ids.has(v.id));

  return (
    <div className="page-container">
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-black text-gray-900">
          <span className="text-primary">保存済み</span>会場
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          気になる会場をブックマークして比較しよう
        </p>
      </div>

      {savedVenues.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Bookmark size={28} className="text-gray-400" />
          </div>
          <p className="font-bold text-gray-700 mb-1">保存した会場はまだありません</p>
          <p className="text-sm text-gray-400 mb-6">
            会場カードの
            <Bookmark size={12} className="inline mx-1 -mt-0.5" />
            ボタンで保存できます
          </p>
          <Link
            href="/venues"
            className="flex items-center gap-2 btn-primary-sm"
          >
            <Search size={14} />
            会場を探す
          </Link>
        </div>
      ) : (
        <div className="px-4 py-4 space-y-4">
          <p className="text-sm text-gray-500">
            <span className="font-black text-gray-900 text-base">{savedVenues.length}</span> 件の会場を保存中
          </p>
          {savedVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      )}
    </div>
  );
}
