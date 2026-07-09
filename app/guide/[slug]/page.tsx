import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ChevronRight, MessageCircle, Search, Instagram } from 'lucide-react';
import { getAllSlugs, getGuideBySlug, getRelatedGuides } from '@/lib/guide-api';
import Breadcrumb from '@/components/Breadcrumb';
import LineCta from '@/components/LineCta';

export const revalidate = 3600; // ISR: 1時間ごとに再取得
export const dynamicParams = true; // 新記事はオンデマンド生成

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = await getGuideBySlug(params.slug);
  if (!guide) return {};

  const title = guide.seoTitle ?? `${guide.title} | ぱーてぃー野郎 会場探しガイド`;
  const description = guide.seoDescription ?? guide.excerpt;
  const ogImageUrl = guide.ogImage?.url ?? guide.eyecatch?.url;

  return {
    title,
    description,
    openGraph: ogImageUrl
      ? {
          title,
          description,
          images: [
            {
              url: ogImageUrl,
              width: guide.ogImage?.width ?? guide.eyecatch?.width ?? 1200,
              height: guide.ogImage?.height ?? guide.eyecatch?.height ?? 630,
            },
          ],
        }
      : undefined,
  };
}

const categoryColors: Record<string, string> = {
  '二次会ガイド': 'bg-pink-50 text-pink-700 border-pink-100',
  'エリア別ガイド': 'bg-blue-50 text-blue-700 border-blue-100',
  '人数別ガイド': 'bg-orange-50 text-orange-700 border-orange-100',
  '用途別ガイド': 'bg-purple-50 text-purple-700 border-purple-100',
  '幹事向けノウハウ': 'bg-green-50 text-green-700 border-green-100',
};

export default async function GuideDetailPage({ params }: Props) {
  const guide = await getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedGuides = await getRelatedGuides(guide.id, guide.category);

  // ── 構造化データ ────────────────────────────────────────────────────────

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    image: guide.eyecatch?.url ?? guide.ogImage?.url,
    author: { '@type': 'Organization', name: 'ぱーてぃー野郎' },
    publisher: {
      '@type': 'Organization',
      name: 'ぱーてぃー野郎',
      url: 'https://party-yaro.vercel.app',
    },
  };

  const faqSchema =
    guide.faq && guide.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guide.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://party-yaro.vercel.app' },
      { '@type': 'ListItem', position: 2, name: '会場探しガイド', item: 'https://party-yaro.vercel.app/guide' },
      { '@type': 'ListItem', position: 3, name: guide.title },
    ],
  };

  return (
    <div className="page-container">
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: '会場探しガイド', href: '/guide' },
          { label: guide.title },
        ]}
      />

      <article className="px-4">
        {/* カテゴリ・メタ */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
              categoryColors[guide.category] ?? 'bg-gray-50 text-gray-600 border-gray-100'
            }`}
          >
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock size={11} />
            読了目安 {guide.readingTime}分
          </span>
          <span className="text-xs text-gray-400">{guide.publishedAt}</span>
        </div>

        <h1 className="text-xl font-black text-gray-900 leading-snug mb-3">{guide.title}</h1>

        {/* アイキャッチ画像（CMS記事のみ） */}
        {guide.eyecatch && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5">
            <Image
              src={guide.eyecatch.url}
              alt={guide.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* サマリーボックス */}
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 mb-6 leading-relaxed border border-gray-100">
          {guide.excerpt}
        </div>

        {/* 本文 */}
        <div
          className="prose prose-sm max-w-none text-gray-700 leading-relaxed
            [&_h2]:text-lg [&_h2]:font-black [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:border-l-4 [&_h2]:border-primary [&_h2]:pl-3
            [&_h3]:font-black [&_h3]:text-gray-800 [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-base
            [&_p]:mb-4 [&_p]:text-sm [&_p]:leading-relaxed
            [&_ul]:space-y-1.5 [&_ul]:mb-4
            [&_ol]:space-y-1.5 [&_ol]:mb-4 [&_ol]:pl-5
            [&_li]:text-sm [&_li]:text-gray-700
            [&_strong]:font-black [&_strong]:text-gray-900
            [&_a]:text-primary [&_a]:underline
            [&_img]:rounded-xl [&_img]:w-full"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />

        {/* 中間CTA */}
        <div className="my-8 bg-gray-900 rounded-2xl p-5">
          <p className="text-white font-black text-base mb-1">
            会場選びに迷ったら、LINEで無料相談
          </p>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            人数・エリア・予算・用途を送るだけで、条件に合う貸切パーティー会場をご提案します。
          </p>
          <LineCta className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-3.5 active:scale-95 transition-transform">
            <MessageCircle size={20} />
            LINEで無料相談する（完全無料）
          </LineCta>
        </div>

        {/* FAQ */}
        {guide.faq && guide.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-black text-gray-900 mb-4 border-l-4 border-primary pl-3">
              よくある質問
            </h2>
            <div className="space-y-3">
              {guide.faq.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-black text-gray-900 text-sm mb-2">Q. {item.question}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">A. {item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Instagram誘導 */}
      <div className="px-4 mb-6">
        <a
          href="https://instagram.com/partyyarou.okinawa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl p-4 active:scale-[0.98] transition-transform"
          style={{
            background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Instagram size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-black text-sm leading-tight mb-0.5">
              @partyyarou.okinawa
            </p>
            <p className="text-white/80 text-xs leading-snug">
              会場の雰囲気・実際のパーティー写真をInstagramで公開中
            </p>
          </div>
          <ChevronRight size={18} className="text-white/70 shrink-0" />
        </a>
      </div>

      {/* おすすめ会場導線 */}
      <div className="px-4 mb-6">
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
          <p className="text-xs font-bold text-primary mb-1">この記事を読んだ方におすすめ</p>
          <p className="font-black text-gray-900 text-base mb-3">条件に合う会場を今すぐ探す</p>
          <Link
            href="/venues"
            className="flex items-center justify-center gap-2 bg-primary text-white font-black text-sm rounded-xl py-3 active:scale-95 transition-transform"
          >
            <Search size={16} />
            会場一覧を見る
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* 関連ガイド */}
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
                  <p className={`text-xs font-bold mb-0.5 ${(categoryColors[g.category] ?? '').split(' ')[1] || 'text-primary'}`}>
                    {g.category}
                  </p>
                  <p className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug">{g.title}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ボトムCTA */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-br from-gray-900 to-red-950 rounded-3xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-[#06C755]/20 rounded-full flex items-center justify-center">
              <MessageCircle size={24} className="text-[#06C755]" />
            </div>
          </div>
          <h2 className="text-white font-black text-xl mb-2">
            会場選びに迷ったら、<br />LINEで無料相談
          </h2>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            人数・エリア・予算・用途を送るだけで、<br />
            条件に合う貸切パーティー会場をご提案します。
          </p>
          <LineCta className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 active:scale-95 transition-transform mb-3 w-full">
            <MessageCircle size={20} />
            LINEで無料相談する
          </LineCta>
          <Link
            href="/venues"
            className="flex items-center justify-center gap-2 text-gray-400 text-sm font-bold border border-gray-700 rounded-2xl py-3 active:scale-95 transition-transform"
          >
            <Search size={16} />
            会場一覧から探す
          </Link>
        </div>
      </div>
    </div>
  );
}
