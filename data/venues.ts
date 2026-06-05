import type { Venue } from '@/lib/types';

export const LINE_URL = 'https://line.me/ti/p/@381ivfov';
export const PHONE = '098-975-5682';
export const ADDRESS = '〒900-0013 沖縄県那覇市牧志2-18-4 2-C';

export const venues: Venue[] = [
  {
    id: '9',
    name: 'PARTYSPACE NEXT',
    slug: 'partyspace-next',
    area: '国際通り',
    address: '沖縄県那覇市牧志（沖映通り沿い）',
    capacityMin: 30,
    capacityMax: 150,
    priceText: '¥3,500〜 / 1名（飲み放題込）',
    description:
      '那覇・国際通りと沖映通りに隣接する大型パーティースペース。最大150名を収容できる広々とした空間で、結婚式二次会から企業イベント・DJパーティーまで幅広いシーンに対応。プロジェクター・大型スクリーン・プロ音響・カラオケを完備し、深夜まで賑やかなパーティーをお楽しみいただけます。那覇随一のアクセスで、遠方からのゲストにも最適な立地です。',
    images: [
      '/venues/partyspace-next-1.jpg',
    ],
    tags: ['100名以上', '結婚式二次会', '貸切OK', '国際通り', 'DJイベント'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「牧志駅」より徒歩5分 / 国際通り・沖映通りすぐ',
    mapUrl: 'https://maps.google.com/?q=那覇市牧志+沖映通り',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '観光客にも地元の方にも馴染み深い国際通り・沖映通りに位置する那覇最大級のパーティースペース。100名以上の大人数にも余裕で対応し、結婚式二次会・忘年会・歓送迎会・DJイベントまでどんなシーンもワンストップでサポート。プロ仕様の音響・照明・大型スクリーンが揃い、深夜営業にも対応しているので、盛り上がりを最後まで続けられます。',
    faq: [
      {
        question: '100名以上の大人数でも対応できますか？',
        answer: 'はい、最大150名まで対応可能です。大規模な結婚式二次会や企業イベントも専任スタッフが丁寧にサポートします。',
      },
      {
        question: '国際通りからすぐ来られますか？',
        answer: 'はい、国際通り・沖映通りからすぐの場所にあります。ゆいレール牧志駅からも徒歩5分とアクセス抜群です。',
      },
      {
        question: '深夜まで利用できますか？',
        answer: 'はい、深夜営業に対応しています。詳細な終了時間はLINEまたはお電話でご確認ください。',
      },
      {
        question: 'DJブースや音響設備はありますか？',
        answer: 'プロ仕様の音響システムとDJブースを完備しています。外部DJの持ち込みも可能です。',
      },
    ],
    isFeatured: true,
    instagramUrl: 'https://www.instagram.com/partyspacenext_okinawa/',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.304473184186!2d127.68551409999999!3d26.2192947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569a1ab33fa45%3A0xdf525a657735f1f4!2sPOLEDANCE%26PARTYSPACE%20NEXT!5e0!3m2!1sja!2sjp!4v1779955396537!5m2!1sja!2sjp',
  },
  {
    id: '10',
    name: 'PARTYSPACE NEXTⅡ 沖縄市',
    slug: 'partyspace-next2-okinawa',
    area: '沖縄市',
    address: '〒904-0022 沖縄県沖縄市園田1丁目15番地26号 ニュー山根ビル6F',
    capacityMin: 30,
    capacityMax: 180,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '那覇で話題のPARTYSPACE NEXTが沖縄市・コザの繁華街に進出。着席180名・立食250名に対応できる大型完全貸切スペースで、結婚式二次会から企業イベント・DJパーティーまで幅広いシーンに対応。100インチ大型スクリーン＆プロジェクター・モニター12台・カラオケ・DJブース・ダーツを完備。ステージ・マイク・控室も揃った本格仕様で、会場使用料・貸切保証金は無料です。',
    images: [
      '/venues/partyspace-next2-okinawa-1.jpg',
      '/venues/partyspace-next2-okinawa-2.jpg',
      '/venues/partyspace-next2-okinawa-3.jpg',
      '/venues/partyspace-next2-okinawa-4.jpg',
      '/venues/partyspace-next2-okinawa-5.jpg',
    ],
    tags: ['100名以上', '結婚式二次会', '貸切OK', '沖縄市', 'DJイベント'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: '沖縄自動車道「沖縄南IC」より車で約20分 / 沖縄市コザ繁華街すぐ',
    mapUrl: 'https://maps.google.com/?q=沖縄市園田+PARTYSPACE+NEXT2',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      'コザ・沖縄市の繁華街に構える大型完全貸切会場。着席180名・立食250名に対応し、100インチスクリーン・モニター12台・DJブース・カラオケ・ステージ・控室が一式揃っています。会場使用料・貸切保証金は無料で、新郎新婦様＆幹事様のご入場も無料。近隣の結婚式場から車で5〜6分というアクセスの良さも魅力です。',
    faq: [
      {
        question: '何名から貸切できますか？',
        answer: '30名様から貸切でご利用いただけます。着席180名・立食250名まで対応可能ですので、小規模から大規模まどんなパーティーにも対応します。',
      },
      {
        question: '会場使用料はかかりますか？',
        answer: '会場使用料・貸切保証金は無料です。飲み放題プランのみのお支払いとなります。お気軽にご相談ください。',
      },
      {
        question: '結婚式場から近いですか？',
        answer: 'NBC・モーリアクラシックなど沖縄市の人気結婚式場から車で5〜6分とアクセス抜群です。ぱーてぃー野郎スタッフが二次会の会場探しから当日の進行まで無料でサポートします。',
      },
    ],
    isFeatured: true,
    instagramUrl: 'https://www.instagram.com/next.okinawacity/',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.868882157608!2d127.79713170000001!3d26.330744900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e513264c359f65%3A0xeb5080cbc3cccbf6!2zUEFSVFlTUEFDRSBORVhU4oWhIOaylue4hOW4gg!5e0!3m2!1sja!2sjp!4v1780031274380!5m2!1sja!2sjp',
  },
];

export const getVenueBySlug = (slug: string): Venue | undefined =>
  venues.find((v) => v.slug === slug);

export const getFeaturedVenues = (): Venue[] => venues.filter((v) => v.isFeatured);

export const filterVenues = (params: {
  area?: string;
  capacity?: number;
  scene?: string;
  facility?: string;
}): Venue[] => {
  return venues.filter((v) => {
    if (params.area && v.area !== params.area) return false;
    if (params.capacity && v.capacityMax < params.capacity) return false;
    if (params.scene && !v.scenes.includes(params.scene)) return false;
    if (params.facility && !v.facilities.includes(params.facility)) return false;
    return true;
  });
};
