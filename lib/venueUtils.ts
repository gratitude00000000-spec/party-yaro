import type { Venue } from './types';

/**
 * 会場画像のalt属性を生成する
 * SEO・アクセシビリティ最適化済み
 */
export function getVenueImageAlt(venue: Venue, photoIndex = 0): string {
  const name = venue.name.trim();

  // 特徴タグからエリア名・汎用タグを除いてキーワードを抽出
  const SKIP = ['貸切OK', '那覇', '国際通り', '北谷', '沖縄市', '宜野湾', '浦添', '豊見城', '100名以上'];
  const feature = venue.tags.find(t => !SKIP.includes(t)) ?? '';

  const cap = `${venue.capacityMin}〜${venue.capacityMax}名`;

  const base = name
    ? `${name}｜${venue.area}の貸切パーティー会場・${cap}${feature ? `・${feature}` : ''}`
    : `${venue.area}の貸切パーティー会場・${cap}${feature ? `・${feature}` : ''}`;

  return photoIndex > 0 ? `${base}・写真${photoIndex + 1}` : base;
}
