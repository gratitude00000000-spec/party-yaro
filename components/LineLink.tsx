'use client';

import { trackLineClick } from '@/lib/gtag';
import { LINE_URL } from '@/data/venues';

interface LineLinkProps {
  location: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function LineLink({ location, className, children, style }: LineLinkProps) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackLineClick(location)}
    >
      {children}
    </a>
  );
}
