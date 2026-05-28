import type { Venue } from '@/lib/types';

export const LINE_URL = 'https://line.me/ti/p/@381ivfov';
export const PHONE = '098-975-5682';
export const ADDRESS = '〒900-0013 沖縄県那覇市牧志2-18-4 2-C';

export const venues: Venue[] = [
  {
    id: '1',
    name: 'OPUS NAHA',
    slug: 'opus-naha',
    area: '那覇',
    address: '沖縄県那覇市久茂地2-1-XX',
    capacityMin: 20,
    capacityMax: 80,
    priceText: '¥3,500〜 / 1名（飲み放題込）',
    description:
      '那覇の中心部に位置するモダンラウンジ。スタイリッシュな空間で、結婚式二次会から歓送迎会まで幅広いシーンに対応。プロのスタッフが当日の進行もサポートします。',
    images: [
      'https://picsum.photos/seed/opus-naha-1/800/600',
      'https://picsum.photos/seed/opus-naha-2/800/600',
      'https://picsum.photos/seed/opus-naha-3/800/600',
      'https://picsum.photos/seed/opus-naha-4/800/600',
    ],
    tags: ['結婚式二次会', '歓送迎会', '貸切OK'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', '駐車場'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '同窓会'],
    access: '沖縄都市モノレール「県庁前駅」より徒歩5分',
    mapUrl: 'https://maps.google.com/?q=那覇市久茂地',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '那覇中心部でアクセス抜群。広々としたフロアで最大80名まで対応。プロジェクターと音響が完備されているので、余興や映像演出も自由自在です。',
    faq: [
      {
        question: '会場の下見はできますか？',
        answer: 'はい、事前の下見は無料で受け付けています。LINEまたはお電話でご予約ください。',
      },
      {
        question: '料理の持ち込みは可能ですか？',
        answer: 'ケーキの持ち込みは無料です。その他のお持ち込みについてはお問い合わせください。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。',
      },
    ],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'THE LUXE 国際通り',
    slug: 'the-luxe-kokusai',
    area: '国際通り',
    address: '沖縄県那覇市牧志1-3-XX',
    capacityMin: 30,
    capacityMax: 100,
    priceText: '¥4,000〜 / 1名（コース料理＋飲み放題）',
    description:
      '国際通り至近の上質なパーティースペース。洗練されたインテリアと本格フードで、特別な夜を演出します。大型スクリーンでの映像演出にも対応。',
    images: [
      'https://picsum.photos/seed/luxe-kokusai-1/800/600',
      'https://picsum.photos/seed/luxe-kokusai-2/800/600',
      'https://picsum.photos/seed/luxe-kokusai-3/800/600',
    ],
    tags: ['結婚式二次会', '会社イベント', '飲み放題'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ'],
    scenes: ['結婚式二次会', '会社イベント', '忘年会', '新年会'],
    access: '沖縄都市モノレール「牧志駅」より徒歩3分',
    mapUrl: 'https://maps.google.com/?q=那覇市牧志',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '観光客にも地元の方にも人気の国際通りエリア。最大100名まで対応可能な広さで、結婚式二次会にも最適。当日の司会進行サービスもご用意しています。',
    faq: [
      {
        question: 'カラオケ設備はありますか？',
        answer: 'はい、最新カラオケシステムを完備しています。パーティーの盛り上げに最適です。',
      },
      {
        question: '料金に何が含まれますか？',
        answer: 'コース料理・飲み放題・会場費・音響照明設備の使用料が含まれます。',
      },
    ],
    isFeatured: false,
  },
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
    id: '6',
    name: 'SONIC BEAT 沖縄市',
    slug: 'sonic-beat-okinawa',
    area: '沖縄市',
    address: '沖縄県沖縄市中央XX-XX',
    capacityMin: 30,
    capacityMax: 80,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '音楽とパーティーを愛する人のための会場。本格的なDJシステムと生演奏にも対応したステージを完備。音楽好きが集まるイベントに最適なスペースです。',
    images: [
      'https://picsum.photos/seed/sonic-beat-1/800/600',
      'https://picsum.photos/seed/sonic-beat-2/800/600',
      'https://picsum.photos/seed/sonic-beat-3/800/600',
    ],
    tags: ['DJイベント', '音響', '貸切OK', '深夜OK'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '深夜OK'],
    scenes: ['DJイベント', '会社イベント', '歓送迎会', '忘年会'],
    access: '沖縄市コザ・ミュージックタウンより徒歩10分',
    mapUrl: 'https://maps.google.com/?q=沖縄市中央',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '音楽の街・沖縄市（コザ）の中心部にある本格音楽対応会場。プロ仕様のPAシステムで生演奏にも対応。DJイベントや音楽系パーティーには最高の環境です。',
    faq: [
      {
        question: '生演奏は可能ですか？',
        answer: 'はい、プロ仕様の音響システムで生演奏にも対応しています。事前にご相談ください。',
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
