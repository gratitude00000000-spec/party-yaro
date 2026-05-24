import { createClient } from 'microcms-js-sdk';
import type { MicroCMSImage, MicroCMSQueries } from 'microcms-js-sdk';

// ── CMS content types ──────────────────────────────────────────────────────

export type CMSCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
  description?: string;
};

export type CMSArticle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  description: string;
  eyecatch?: MicroCMSImage;
  category?: CMSCategory;
  body: string;
  faq?: Array<{
    fieldId: string;
    question: string;
    answer: string;
  }>;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: MicroCMSImage;
};

// ── Client ─────────────────────────────────────────────────────────────────

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? '';
const apiKey = process.env.MICROCMS_API_KEY ?? '';

export const isCMSConfigured =
  !!(serviceDomain && apiKey &&
     serviceDomain !== 'your-service-domain' &&
     apiKey !== 'your-api-key');

export const cmsClient = isCMSConfigured
  ? createClient({ serviceDomain, apiKey })
  : null;

// ── Fetch helpers ──────────────────────────────────────────────────────────

export async function fetchArticles(queries?: MicroCMSQueries) {
  if (!cmsClient) return null;
  return cmsClient.getList<CMSArticle>({
    endpoint: 'guidearticles',
    queries: { limit: 100, orders: '-publishedAt', ...queries },
  });
}

export async function fetchCategories() {
  if (!cmsClient) return null;
  return cmsClient.getList<CMSCategory>({
    endpoint: 'guidecategories',
    queries: { limit: 50, orders: 'createdAt' },
  });
}
