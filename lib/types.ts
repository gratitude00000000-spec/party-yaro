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
};

export type Guide = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readingTime: number;
};

export type SearchParams = {
  area?: string;
  capacity?: string;
  scene?: string;
  facility?: string;
};
