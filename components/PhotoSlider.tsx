'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  name: string;
  imagePosition?: string;
  altBase?: string;
};

export default function PhotoSlider({ images, name, imagePosition, altBase }: Props) {
  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  // 複数枚あれば2秒後にスワイプヒントを表示し、2.5秒後に消す
  useEffect(() => {
    if (images.length <= 1) return;
    const show = setTimeout(() => setShowHint(true), 1200);
    const hide = setTimeout(() => setShowHint(false), 3200);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, [images.length]);

  const goTo = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({ left: index * sliderRef.current.offsetWidth, behavior: 'smooth' });
    setCurrent(index);
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      setShowHint(false);
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
    setCurrent(index);
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      setShowHint(false);
    }
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="photo-slider"
        onScroll={handleScroll}
      >
        {images.map((src, i) => (
          <div key={src} className="photo-slide relative aspect-video">
            <Image
              src={src}
              alt={altBase ? (i === 0 ? altBase : `${altBase}・写真${i + 1}`) : `${name} 写真${i + 1}`}
              fill
              className="object-cover"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* 左矢印 */}
      {images.length > 1 && current > 0 && (
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white active:scale-90 transition-transform"
          aria-label="前の写真"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* 右矢印 */}
      {images.length > 1 && current < images.length - 1 && (
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white active:scale-90 transition-transform"
          aria-label="次の写真"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* スワイプヒント */}
      {showHint && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full animate-swipe-hint">
            <span>👈</span>
            <span>スワイプで写真を見る</span>
            <span>👉</span>
          </div>
        </div>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-5' : 'bg-white/50 w-2'
              }`}
              aria-label={`写真${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Count */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
