'use client';

import { MessageCircle } from 'lucide-react';
import LineModal from '@/components/LineModal';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function LineCta({ className, children }: Props) {
  return (
    <LineModal>
      {(open) => (
        <button
          type="button"
          onClick={open}
          className={className}
        >
          {children ?? (
            <>
              <MessageCircle size={20} />
              LINEで無料相談する（完全無料）
            </>
          )}
        </button>
      )}
    </LineModal>
  );
}
