'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  name: string;
};

export default function PhotoSlider({ images, name }: Props) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrent(index);
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="photo-slider"
        onScroll={handleScroll}
      >
        {images.map((src, i) => (
          <div key={src} className="photo-slide relative h-72 sm:h-96">
            <Image
              src={src}
              alt={`${name} 写真${i + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              sliderRef.current?.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: 'smooth' });
              setCurrent(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-5' : 'bg-white/50'
            }`}
            aria-label={`写真${i + 1}`}
          />
        ))}
      </div>

      {/* Count */}
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
