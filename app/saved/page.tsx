import type { Metadata } from 'next';
import SavedClient from './SavedClient';

export const metadata: Metadata = {
  title: '保存した会場',
  robots: { index: false, follow: false },
};

export default function SavedPage() {
  return <SavedClient />;
}
