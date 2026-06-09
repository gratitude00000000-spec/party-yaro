import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Users, MessageCircle, ChevronRight } from 'lucide-react';
import type { Venue } from '@/lib/types';
import BookmarkButton from '@/components/BookmarkButton';
import { getVenueImageAlt } from '@/lib/venueUtils';

type Props = {
  venue: Venue;
  compact?: boolean;
};

export default function VenueCard({ venue, compact = false }: Props) {
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
          <a
            href={venue.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-line-sm"
          >
            <MessageCircle size={14} />
            LINE相談
          </a>
        </div>
      </div>
    </div>
  );
}
