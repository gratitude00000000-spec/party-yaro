import type { Venue } from '@/lib/types';

export const LINE_URL = 'https://line.me/ti/p/@381ivfov';
export const PHONE = '098-975-5682';
export const ADDRESS = '〒900-0013 沖縄県那覇市牧志2-18-4 2-C';

export const venues: Venue[] = [
  {
    id: '3',
    name: 'BLUE CREST 北谷',
    slug: 'blue-crest-chatan',
    area: '北谷',
    address: '沖縄県北谷町美浜XX-XX',
    capacityMin: 40,
    capacityMax: 120,
    priceText: '¥3,800〜 / 1名（飲み放題込）',
    description:
      '北谷・美浜アメリカンビレッジそばのリゾートスタイル会場。非日常感あふれるインテリアで、大規模な二次会やイベントに対応。テラス席も完備。',
    images: [
      'https://picsum.photos/seed/blue-crest-1/800/600',
      'https://picsum.photos/seed/blue-crest-2/800/600',
      'https://picsum.photos/seed/blue-crest-3/800/600',
      'https://picsum.photos/seed/blue-crest-4/800/600',
    ],
    tags: ['50名以上', '貸切OK', 'DJイベント', '音響'],
    facilities: ['貸切OK', '飲み放題', '音響', 'プロジェクター', '駐車場', '深夜OK'],
    scenes: ['結婚式二次会', 'DJイベント', '会社イベント', '同窓会'],
    access: '北谷・美浜バス停より徒歩5分 / 駐車場50台完備',
    mapUrl: 'https://maps.google.com/?q=北谷町美浜',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      'リゾート感あふれる北谷エリア最大級の会場。DJブース常設で、本格的なパーティーが実現。深夜営業にも対応しており、盛り上がりが続いても安心です。',
    faq: [
      {
        question: 'DJの持ち込みは可能ですか？',
        answer: 'はい、外部DJの持ち込みも可能です。専用DJブースとプロ音響機材をご利用いただけます。',
      },
      {
        question: '深夜何時まで利用できますか？',
        answer: '最大午前3時まで対応可能です（別途深夜料金が発生します）。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '4',
    name: 'ROUGE GINOWAN',
    slug: 'rouge-ginowan',
    area: '宜野湾',
    address: '沖縄県宜野湾市真志喜XX-XX',
    capacityMin: 20,
    capacityMax: 60,
    priceText: '¥3,200〜 / 1名（飲み放題込）',
    description:
      'クラブライクな演出が特徴のスタイリッシュ会場。プロ仕様の照明・音響で、パーティーを最高の雰囲気に。少人数から貸切まで柔軟に対応。',
    images: [
      'https://picsum.photos/seed/rouge-ginowan-1/800/600',
      'https://picsum.photos/seed/rouge-ginowan-2/800/600',
      'https://picsum.photos/seed/rouge-ginowan-3/800/600',
    ],
    tags: ['貸切OK', '音響', 'DJイベント', '深夜OK'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '深夜OK'],
    scenes: ['歓送迎会', 'DJイベント', '会社イベント', '忘年会'],
    access: '宜野湾バスターミナルより車5分',
    mapUrl: 'https://maps.google.com/?q=宜野湾市真志喜',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      'プロ仕様の照明・音響で特別な演出が可能。アップライトやミラーボールなど多彩な照明機材でパーティーを彩ります。',
    faq: [
      {
        question: '照明演出のオプションはありますか？',
        answer: '各種照明プランをご用意しています。詳細はLINEまたはお電話でご確認ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '5',
    name: 'SKY GARDEN 浦添',
    slug: 'sky-garden-urasoe',
    area: '浦添',
    address: '沖縄県浦添市牧港XX-XX',
    capacityMin: 50,
    capacityMax: 150,
    priceText: '¥3,500〜 / 1名（飲み放題込）',
    description:
      '浦添の大型パーティースペース。最大150名まで収容可能で、企業イベントや大規模な二次会に最適。ガーデンテラスも利用可能で開放的なパーティーが楽しめます。',
    images: [
      'https://picsum.photos/seed/sky-garden-1/800/600',
      'https://picsum.photos/seed/sky-garden-2/800/600',
      'https://picsum.photos/seed/sky-garden-3/800/600',
    ],
    tags: ['100名以上', '貸切OK', '駐車場', '会社イベント'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', '駐車場'],
    scenes: ['会社イベント', '同窓会', '歓送迎会', '忘年会', '新年会'],
    access: '那覇空港より車20分 / 駐車場80台完備',
    mapUrl: 'https://maps.google.com/?q=浦添市牧港',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '沖縄最大級クラスの収容人数。大規模な企業イベントや同窓会も快適に開催できます。専用駐車場が充実しており、車での来場も安心です。',
    faq: [
      {
        question: '100名以上の大人数でも対応可能ですか？',
        answer: 'はい、最大150名まで対応可能です。大規模なイベントにも専任スタッフが対応します。',
      },
      {
        question: 'ガーデンテラスはどのように利用できますか？',
        answer: '室内フロアと合わせてご利用いただけます。天候に合わせた柔軟なご提案も可能です。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '7',
    name: 'CRYSTAL HALL 那覇',
    slug: 'crystal-hall-naha',
    area: '那覇',
    address: '沖縄県那覇市おもろまちXX-XX',
    capacityMin: 80,
    capacityMax: 200,
    priceText: '¥3,800〜 / 1名（コース＋飲み放題）',
    description:
      '那覇・おもろまちの大型宴会ホール。最大200名まで収容可能な広大な空間で、披露宴・企業パーティーなど格式あるイベントに対応。専属のコーディネーターが徹底サポートします。',
    images: [
      'https://picsum.photos/seed/crystal-hall-1/800/600',
      'https://picsum.photos/seed/crystal-hall-2/800/600',
      'https://picsum.photos/seed/crystal-hall-3/800/600',
      'https://picsum.photos/seed/crystal-hall-4/800/600',
    ],
    tags: ['100名以上', '結婚式二次会', '貸切OK', 'プロジェクター'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', '駐車場', 'カラオケ'],
    scenes: ['結婚式二次会', '会社イベント', '同窓会', '忘年会', '新年会'],
    access: 'ゆいレール「おもろまち駅」より徒歩7分 / 駐車場100台',
    mapUrl: 'https://maps.google.com/?q=那覇市おもろまち',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '沖縄最大規模の会場のひとつ。専任コーディネーターが進行表作成からゲスト誘導まで一括サポート。大人数の結婚式二次会でも安心してお任せください。',
    faq: [
      {
        question: '余興や演出の相談はできますか？',
        answer: '専任コーディネーターが会場選びから余興・演出の企画まで無料でご相談をお受けします。',
      },
      {
        question: '駐車場は十分ありますか？',
        answer: '専用駐車場を100台分ご用意しています。大人数の来場にも安心です。',
      },
    ],
    isFeatured: false,
  },
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
  {
    id: '8',
    name: 'SUNSET LOUNGE 北谷',
    slug: 'sunset-lounge-chatan',
    area: '北谷',
    address: '沖縄県北谷町砂辺XX-XX',
    capacityMin: 15,
    capacityMax: 50,
    priceText: '¥4,200〜 / 1名（コース＋飲み放題）',
    description:
      '北谷の海を望む絶景ロケーションのプレミアムラウンジ。少人数専用のプライベート空間で、特別な一夜をお過ごしください。カップルパーティーやVIPイベントに最適です。',
    images: [
      'https://picsum.photos/seed/sunset-lounge-1/800/600',
      'https://picsum.photos/seed/sunset-lounge-2/800/600',
      'https://picsum.photos/seed/sunset-lounge-3/800/600',
    ],
    tags: ['貸切OK', '飲み放題', '高級感'],
    facilities: ['貸切OK', '飲み放題', '音響', 'プロジェクター'],
    scenes: ['結婚式二次会', '歓送迎会', '同窓会'],
    access: '北谷・砂辺バス停より徒歩10分',
    mapUrl: 'https://maps.google.com/?q=北谷町砂辺',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '夕焼けの絶景が広がる北谷の隠れ家ラウンジ。少人数限定のプライベート感で、特別な二次会に唯一無二の思い出を。フォトジェニックな空間は女性にも大人気。',
    faq: [
      {
        question: '少人数でも貸切できますか？',
        answer: 'はい、15名様からでも貸切でご利用いただけます。プライベートなパーティーに最適です。',
      },
    ],
    isFeatured: false,
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
