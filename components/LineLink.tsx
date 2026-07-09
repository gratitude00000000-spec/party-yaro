'use client';

import { trackLineClick } from '@/lib/gtag';
import LineModal from '@/components/LineModal';

interface LineLinkProps {
  location: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

export default function LineLink({ location, className, children, style, 'aria-label': ariaLabel }: LineLinkProps) {
  return (
    <LineModal>
      {(open) => (
        <button
          type="button"
          className={className}
          style={style}
          aria-label={ariaLabel}
          onClick={() => { trackLineClick(location); open(); }}
        >
          {children}
        </button>
      )}
    </LineModal>
  );
}
