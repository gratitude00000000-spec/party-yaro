/**
 * Guide data abstraction layer.
 * microCMS が設定済みなら CMS から取得、未設定なら static data にフォールバック。
 */

import { isCMSConfigured, fetchArticles } from './microcms';
import type { CMSArticle } from './microcms';
import {
  guides as staticGuides,
  getGuideBySlug as staticGetBySlug,
  getRelatedGuides as staticGetRelated,
} from '@/data/guides';
import type { Guide } from './types';

// ── CMS → Guide 変換 ───────────────────────────────────────────────────────

function toGuide(article: CMSArticle): Guide {
  const text = article.body?.replace(/<[^>]*>/g, '') ?? '';
  const readingTime = Math.max(1, Math.ceil(text.length / 400));

  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.description ?? '',
    content: article.body ?? '',
    category: article.category?.name ?? 'ガイド',
    categoryId: article.category?.id,
    publishedAt: (article.publishedAt ?? article.createdAt).split('T')[0],
    readingTime,
    faq: article.faq?.map((f) => ({ question: f.question, answer: f.answer })),
    eyecatch: article.eyecatch
      ? { url: article.eyecatch.url, width: article.eyecatch.width ?? 800, height: article.eyecatch.height ?? 600 }
      : undefined,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription,
    ogImage: article.ogImage
      ? { url: article.ogImage.url, width: article.ogImage.width ?? 1200, height: article.ogImage.height ?? 630 }
      : undefined,
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

export async function getAllGuides(): Promise<Guide[]> {
  if (!isCMSConfigured) return staticGuides;

  try {
    const data = await fetchArticles();
    if (!data || data.contents.length === 0) return staticGuides;
    return data.contents.map(toGuide);
  } catch (err) {
    console.warn('[guide-api] microCMS fetch failed, using static data', err);
    return staticGuides;
  }
}

export async function getGuideBySlug(slug: string): Promise<Guide | undefined> {
  if (!isCMSConfigured) return staticGetBySlug(slug);

  try {
    const data = await fetchArticles({ filters: `slug[equals]${slug}`, limit: 1 });
    if (!data || data.contents.length === 0) return staticGetBySlug(slug);
    return toGuide(data.contents[0]);
  } catch (err) {
    console.warn('[guide-api] microCMS fetch failed, using static data', err);
    return staticGetBySlug(slug);
  }
}

export async function getRelatedGuides(
  currentId: string,
  category: string,
  limit = 3,
): Promise<Guide[]> {
  if (!isCMSConfigured) return staticGetRelated(currentId, category, limit);

  try {
    const all = await getAllGuides();
    const sameCategory = all.filter((g) => g.id !== currentId && g.category === category);
    const others = all.filter((g) => g.id !== currentId && g.category !== category);
    return [...sameCategory, ...others].slice(0, limit);
  } catch {
    return staticGetRelated(currentId, category, limit);
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const guides = await getAllGuides();
  return guides.map((g) => g.slug);
}
