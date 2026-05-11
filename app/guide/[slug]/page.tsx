import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ChevronRight, MessageCircle } from 'lucide-react';
import { getGuideBySlug, guides } from '@/data/guides';
import { LINE_URL } from '@/data/venues';
import Breadcrumb from '@/components/Breadcrumb';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | ぱーてぃー野郎 幹事ガイド`,
    description: guide.excerpt,
  };
}

export default function GuideDetailPage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'ぱーてぃー野郎',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ぱーてぃー野郎',
      url: 'https://www.party-yaro.com',
    },
  };

  const relatedGuides = guides.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '幹事ガイド', href: '/guide' },
          { label: guide.title },
        ]}
      />

      <article className="px-4">
        {/* Category & meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-primary bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock size={11} />
            読了目安 {guide.readingTime}分
          </span>
          <span className="text-xs text-gray-400">{guide.publishedAt}</span>
        </div>

        <h1 className="text-xl font-black text-gray-900 leading-snug mb-3">
          {guide.title}
        </h1>
        <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 mb-6 leading-relaxed border border-gray-100">
          {guide.excerpt}
        </p>

        {/* Content rendered as prose */}
        <div
          className="prose prose-sm max-w-none text-gray-700 leading-relaxed
            [&_h2]:text-lg [&_h2]:font-black [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:border-l-4 [&_h2]:border-primary [&_h2]:pl-3
            [&_h3]:font-black [&_h3]:text-gray-800 [&_h3]:mt-5 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:text-sm
            [&_ul]:space-y-1.5 [&_ul]:mb-4
            [&_li]:text-sm [&_li]:text-gray-700
            [&_strong]:font-black [&_strong]:text-gray-900"
          dangerouslySetInnerHTML={{ __html: guide.content.replace(/\n/g, '<br/>') }}
        />

        {/* Inline CTA */}
        <div className="my-8 bg-gray-900 rounded-2xl p-5">
          <p className="text-white font-black text-base mb-1">
            会場探しはぱーてぃー野郎に相談
          </p>
          <p className="text-gray-400 text-sm mb-4">
            無料で最適な会場をご提案します
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-3.5 active:scale-95 transition-transform"
          >
            <MessageCircle size={20} />
            LINEで無料相談
          </a>
        </div>
      </article>

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <div className="px-4 pb-6">
          <h2 className="font-black text-gray-900 mb-3">関連ガイド</h2>
          <div className="space-y-3">
            {relatedGuides.map((g) => (
              <Link
                key={g.id}
                href={`/guide/${g.slug}`}
                className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-3 active:scale-[0.98] transition-transform"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary font-bold mb-0.5">{g.category}</p>
                  <p className="text-sm font-bold text-gray-800 truncate">{g.title}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
