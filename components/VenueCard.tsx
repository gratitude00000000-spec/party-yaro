'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, MessageCircle, ChevronRight, Lock } from 'lucide-react';
import type { Venue } from '@/lib/types';
import BookmarkButton from '@/components/BookmarkButton';
import { getVenueImageAlt } from '@/lib/venueUtils';
import LineModal from '@/components/LineModal';

type Props = {
  venue: Venue;
  compact?: boolean;
};

function AnonymousVenueCard({ venue, compact }: Props) {
  return (
    <div className="venue-card overflow-hidden">
      {/* Header */}
      <div className={`relative bg-gradient-to-br from-[#1e2540] to-[#2a3158] ${compact ? 'h-40' : 'h-52'} flex flex-col justify-between p-4`}>
        <div className="flex items-center justify-between">
          <span className="bg-white/15 text-white/80 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <MapPin size={10} />
            {venue.area}
          </span>
          <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Users size={10} />
            {venue.capacityMin}〜{venue.capacityMax}名
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
              <Lock size={11} className="text-white/60" />
            </div>
            <p className="text-white/50 text-xs">会場名・地図は非公開</p>
          </div>
          <h3 className="text-white font-black text-lg leading-tight">
            {venue.area}エリア｜提携会場
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {venue.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="text-xs text-gray-500 mb-3">{venue.priceText}</p>

        {/* CTA */}
        <LineModal>
          {(open) => (
            <button
              type="button"
              onClick={open}
              className="w-full btn-line-sm py-2.5"
            >
              <MessageCircle size={14} />
              LINEで詳細・空き確認
            </button>
          )}
        </LineModal>
        <p className="text-[10px] text-gray-400 text-center mt-1.5">会場名・写真・地図はLINEでご案内</p>
      </div>
    </div>
  );
}

export default function VenueCard({ venue, compact = false }: Props) {
  if (!venue.name.trim()) {
    return <AnonymousVenueCard venue={venue} compact={compact} />;
  }

  return (
    <div className="venue-card">
      {/* Image */}
      <Link href={`/venues/${venue.slug}`} className="block relative">
        <div className={`relative overflow-hidden ${compact ? 'h-40' : 'h-52'}`}>
          <Image
            src={venue.images[0]}
            alt={getVenueImageAlt(venue)}
            fill
            className="object-cover"
            style={venue.cardImagePosition ? { objectPosition: venue.cardImagePosition } : undefined}
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="absolute inset-0 gradient-dark-bottom" />

          {/* Area badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <MapPin size={10} />
            {venue.area}
          </span>

          {/* Capacity badge */}
          <span className="absolute top-3 right-12 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Users size={10} />
            {venue.capacityMin}〜{venue.capacityMax}名
          </span>

          {/* Bookmark */}
          <div className="absolute top-2.5 right-2.5">
            <BookmarkButton venueId={venue.id} />
          </div>

          {/* Venue name overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-black text-lg leading-tight drop-shadow">
              {venue.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* Body */}
      <div className="p-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {venue.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        {/* Recommended comment */}
        {!compact && (
          <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
            {venue.recommendedPoint}
          </p>
        )}

        {/* Price */}
        <p className="text-xs text-gray-500 mb-3">{venue.priceText}</p>

        {/* CTA buttons */}
        <div className="flex gap-2">
          <Link
            href={`/venues/${venue.slug}`}
            className="flex-1 flex items-center justify-center gap-1 border border-gray-200 text-gray-700 font-bold rounded-xl py-2.5 text-sm active:scale-95 transition-transform"
          >
            詳細を見る
            <ChevronRight size={14} />
          </Link>
          <LineModal>
            {(open) => (
              <button
                type="button"
                onClick={open}
                className="flex-1 btn-line-sm"
              >
                <MessageCircle size={14} />
                LINE相談
              </button>
            )}
          </LineModal>
        </div>
      </div>
    </div>
  );
}
