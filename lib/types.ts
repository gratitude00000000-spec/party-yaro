export type VenueFaq = {
  question: string;
  answer: string;
};

export type Venue = {
  id: string;
  name: string;
  slug: string;
  area: string;
  address: string;
  capacityMin: number;
  capacityMax: number;
  priceText: string;
  description: string;
  images: string[];
  tags: string[];
  facilities: string[];
  scenes: string[];
  access: string;
  mapUrl: string;
  lineUrl: string;
  phone: string;
  recommendedPoint: string;
  faq: VenueFaq[];
  isFeatured: boolean;
  instagramUrl?: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type CMSImage = {
  url: string;
  width: number;
  height: number;
};

export type Guide = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryId?: string;
  publishedAt: string;
  readingTime: number;
  faq?: GuideFaq[];
  // CMS fields (optional — static data does not have these)
  eyecatch?: CMSImage;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: CMSImage;
};

export type SearchParams = {
  area?: string;
  capacity?: string;
  scene?: string;
  facility?: string;
};
