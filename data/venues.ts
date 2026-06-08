import type { Venue } from '@/lib/types';

export const LINE_URL = 'https://line.me/ti/p/@381ivfov';
export const PHONE = '098-975-5682';
export const ADDRESS = '〒900-0013 沖縄県那覇市牧志2-18-4 2-C';

export const venues: Venue[] = [
  {
    id: '22',
    name: 'Bar Oasis',
    slug: 'bar-oasis-naha',
    area: '那覇',
    address: '沖縄県那覇市久茂地2丁目3-11 レナトス久茂地ビル2F',
    capacityMin: 10,
    capacityMax: 36,
    priceText: '¥2,500〜 / 1名（飲み放題込）',
    description:
      '那覇・久茂地に佇む隠れ家的なラグジュアリーバー。緑の植物ウォールとフェアリーライトが幻想的な雰囲気を醸し出し、プロジェクター・カラオケ・ダーツ・音響を完備。少人数のプライベートな貸切パーティーを洗練された空間で過ごせる、久茂地の隠れ家的存在です。',
    images: [
      '/venues/bar-oasis-naha-1.jpg',
    ],
    tags: ['貸切OK', '那覇', '深夜OK', '隠れ家', 'ダーツ'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント'],
    access: 'ゆいレール「県庁前駅」より徒歩5分 / 久茂地エリア',
    mapUrl: 'https://maps.google.com/?q=那覇市久茂地2-3-11+レナトス久茂地ビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '緑の植物ウォール×フェアリーライトが幻想的なラグジュアリーバー。プロジェクター・カラオケ・ダーツ・音響完備で、最大36名までの少人数プライベートパーティーに最適。那覇・久茂地の好立地ながら非日常感あふれる隠れ家空間で特別なひとときを演出します。',
    faq: [
      {
        question: '少人数でも貸切できますか？',
        answer: '10名様からご利用いただけます。小規模なプライベートパーティーや誕生日会など、特別な場面にぴったりの隠れ家空間をご用意しています。',
      },
      {
        question: 'ダーツやプロジェクターは自由に使えますか？',
        answer: 'はい、貸切時間中はダーツ・プロジェクター・カラオケ・音響設備をご自由にお使いいただけます。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '21',
    name: 'STATION 久茂地店',
    slug: 'station-kumoji',
    area: '那覇',
    address: '沖縄県那覇市久茂地1丁目8-3 クイーンプラザビル6F',
    capacityMin: 10,
    capacityMax: 150,
    priceText: '¥2,500〜 / 1名（飲み放題込）',
    description:
      '那覇・久茂地の中心部にあるルーフトップBBQ会場。6Fのオープンエアテラスに大型スクリーンを完備し、夜景を眺めながらBBQ＆カラオケが楽しめる絶景パーティースペース。ロoftop・メインフロア・個室と4フロアを使い分けでき、10名から最大150名まで柔軟に対応します。',
    images: [
      '/venues/station-kumoji-1.jpg',
    ],
    tags: ['100名以上', '貸切OK', '那覇', 'BBQ', 'ルーフトップ', '夜景'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「県庁前駅」より徒歩5分 / 国際通りから徒歩3分 / 久茂地中心部',
    mapUrl: 'https://maps.google.com/?q=那覇市久茂地1-8-3+クイーンプラザビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '那覇・久茂地の好立地に構えるルーフトップBBQ会場。夜空の下で大型スクリーンを見ながらBBQ＆カラオケが楽しめる圧倒的な非日常体験が魅力。10名〜150名まで対応でき、ロoftop・フロア・個室と使い分けられるので少人数から大規模イベントまで完璧に対応します。',
    faq: [
      {
        question: '雨の日でも利用できますか？',
        answer: 'ルーフトップのほか、室内フロアや個室もご用意しています。天候に合わせて最適な空間をご提案しますのでご安心ください。',
      },
      {
        question: '大型スクリーンで映像演出はできますか？',
        answer: 'はい、大型スクリーン＆プロジェクターを完備しています。結婚式二次会の映像演出やカラオケにもお使いいただけます。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '20',
    name: 'STATION 国場店',
    slug: 'station-kokuba',
    area: '那覇',
    address: '沖縄県那覇市国場120 1F',
    capacityMin: 15,
    capacityMax: 40,
    priceText: '¥2,500〜 / 1名（飲み放題込）',
    description:
      '那覇・国場にあるBBQ＆シミュレーションゴルフが楽しめるエンタメ会場。ネオンが輝くスタイリッシュな室内空間で、BBQを楽しみながらゴルフ・ダーツ・カラオケまで遊び放題。少人数のプライベートパーティーから歓送迎会・忘年会まで幅広く対応する那覇市内の個性派貸切会場です。',
    images: [
      '/venues/station-kokuba-1.jpg',
    ],
    tags: ['貸切OK', '那覇', 'BBQ', 'シミュレーションゴルフ', 'ダーツ'],
    facilities: ['貸切OK', '飲み放題', '音響', '深夜OK'],
    scenes: ['歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', '結婚式二次会'],
    access: '那覇市国場エリア / ゆいレール「小禄駅」より車で約5分',
    mapUrl: 'https://maps.google.com/?q=那覇市国場120',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      'BBQ＋シミュレーションゴルフ＋ダーツ＋カラオケが一度に楽しめる那覇唯一の複合エンタメ会場。¥2,500〜のリーズナブルな料金で、いつもと違う個性的なパーティーが実現。10名からの少人数にも対応しているので、仲間内の集まりにも最適です。',
    faq: [
      {
        question: 'シミュレーションゴルフは初心者でも楽しめますか？',
        answer: 'はい、ゴルフ初心者の方でも気軽に楽しめます。パーティーの余興としても大人気のアクティビティです。',
      },
      {
        question: 'BBQと室内設備は同時に使えますか？',
        answer: 'はい、BBQ・シミュレーションゴルフ・ダーツ・カラオケはすべて貸切時間中にご利用いただけます。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '19',
    name: 'BBQ STATION',
    slug: 'bbq-station-okinawa',
    area: '沖縄市',
    address: '沖縄県沖縄市東1丁目5-17 4F',
    capacityMin: 10,
    capacityMax: 80,
    priceText: '¥2,500〜 / 1名（飲み放題込）',
    description:
      '沖縄市・コザにある屋上BBQ専門スペース。白を基調としたスタイリッシュな空間に鮮やかなアートウォールが映え、オシャレなパーティー気分を演出。BBQグリル常設でカラオケ・プロジェクター・音響まで完備した、昼も夜も楽しめる手ぶらBBQ会場です。',
    images: [
      '/venues/bbq-station-okinawa-1.jpg',
    ],
    tags: ['貸切OK', '沖縄市', 'BBQ', '深夜OK'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント'],
    access: '沖縄市東エリア / 沖縄自動車道「沖縄北IC」より車で約5分',
    mapUrl: 'https://maps.google.com/?q=沖縄市東1-5-17',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '手ぶらOKの屋上BBQが¥2,500〜という破格のコスパが魅力。白いソファとカラフルな壁アートで映えるスペースに、カラオケ・プロジェクター・音響も完備。昼から夜まで使えるオールラウンドな沖縄市の貸切BBQ会場です。',
    faq: [
      {
        question: '手ぶらで参加できますか？',
        answer: 'はい、BBQ機材・食材・飲み物はすべてご用意しています。手ぶらでお越しいただけますので、幹事様の準備負担が少ないのも魅力です。',
      },
      {
        question: 'BBQ以外の設備はありますか？',
        answer: 'カラオケ・プロジェクター・音響設備も完備しています。BBQで盛り上がった後はカラオケや映像演出も楽しめます。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '18',
    name: 'station 港川店',
    slug: 'station-urasoe',
    area: '浦添',
    address: '沖縄県浦添市港川337-3',
    capacityMin: 10,
    capacityMax: 150,
    priceText: '¥2,500〜 / 1名（飲み放題込）',
    description:
      '浦添・港川の開放的なBBQ専門会場。人工芝が広がるアウトドアスペースに屋根が付いており、雨天でも快適にBBQパーティーを楽しめます。10名の少人数から最大150名の大規模イベントまで対応。歓送迎会・忘年会・会社イベントなど幅広いシーンで喜ばれる沖縄らしい開放感あふれる会場です。',
    images: [
      '/venues/station-urasoe-1.jpg',
    ],
    tags: ['100名以上', '貸切OK', '浦添', 'BBQ', '屋根付き'],
    facilities: ['貸切OK', '飲み放題', '音響', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント'],
    access: '浦添市港川エリア / 那覇空港より車で約20分 / 国道58号線沿い',
    mapUrl: 'https://maps.google.com/?q=浦添市港川337-3',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '雨でも安心の屋根付きBBQ会場。沖縄の青空と緑を感じながら本格BBQが楽しめるオープンエアな空間で、10名〜150名まで柔軟に対応。リーズナブルな料金設定で歓送迎会・忘年会・会社イベントにぴったりの会場です。',
    faq: [
      {
        question: '雨の日でも利用できますか？',
        answer: 'はい、屋根付きのBBQスペースなので雨天でも快適にご利用いただけます。天候を気にせずパーティーをお楽しみください。',
      },
      {
        question: '少人数でも貸切できますか？',
        answer: '10名様からご利用いただけます。少人数から大人数まで、ぱーてぃー野郎スタッフが最適なレイアウトをご提案します。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '17',
    name: 'Free Style Bar Relations',
    slug: 'relations-okinawa',
    area: '沖縄市',
    address: '沖縄県沖縄市園田3丁目 メイフラワーホテル1F',
    capacityMin: 30,
    capacityMax: 70,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '沖縄市・コザのエンタメ街に位置するフリースタイルバー。ビリヤード・ダーツ・カラオケを完備し、赤を基調としたポップアートな空間が非日常感を演出。120種類のカクテルと豊富なフードメニューも揃い、二次会・三次会から結婚式二次会まで幅広く対応できる沖縄市屈指の大箱バーです。',
    images: [
      '/venues/relations-okinawa-1.jpg',
    ],
    tags: ['貸切OK', '沖縄市', '深夜OK', 'ダーツ'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: '沖縄市園田・コザ中の町エリア / 沖縄自動車道「沖縄南IC」より車で約15分',
    mapUrl: 'https://maps.google.com/?q=沖縄市園田+Free+Style+Bar+Relations',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '沖縄市コザの繁華街に佇む個性派フリースタイルバー。ビリヤード・ダーツ・カラオケが揃い、飲んで遊べる空間が魅力。深夜まで営業しているので二次会・三次会にも最適。120種類のカクテルと豊富なフードで、あらゆるパーティーシーンを盛り上げます。',
    faq: [
      {
        question: 'ビリヤードやダーツは貸切中も使えますか？',
        answer: 'はい、貸切中はビリヤード・ダーツなどアミューズメント設備を自由にご利用いただけます。パーティーの盛り上げにご活用ください。',
      },
      {
        question: '深夜まで利用できますか？',
        answer: 'はい、深夜営業に対応しています。二次会・三次会として遅い時間からのご利用も大歓迎です。詳細はLINEまたはお電話でご確認ください。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
  },
  {
    id: '16',
    name: 'ENTRANCE',
    slug: 'entrance-naha',
    area: '那覇',
    address: '沖縄県那覇市久茂地3-23-10 よなはビル5F',
    capacityMin: 50,
    capacityMax: 120,
    priceText: '¥3,500〜 / 1名（飲み放題込）',
    description:
      '那覇・久茂地のビル5Fに広がるアミューズメントバー。ビリヤード・ダーツ・卓球・テレビゲーム・ボードゲームが揃い、飲んで遊べる完全貸切パーティースペース。ポップアートな内装とブルーネオンの空間で、結婚式二次会からDJイベントまで幅広いシーンを盛り上げます。',
    images: [
      '/venues/entrance-naha-1.jpg',
    ],
    tags: ['貸切OK', '那覇', '深夜OK', 'ビリヤード', 'ダーツ'],
    facilities: ['貸切OK', '飲み放題', '音響', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「県庁前駅」より徒歩4分 / 久茂地交差点そば',
    mapUrl: 'https://maps.google.com/?q=那覇市久茂地3-23-10+よなはビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '那覇・県庁前から徒歩4分の好立地アミューズメントバー。ビリヤード・ダーツ・卓球など遊びが充実しており、最大120名まで対応可能。ポップアートと青いネオンが彩る個性的な空間で、二次会からDJイベントまで記憶に残るパーティーが実現します。',
    faq: [
      {
        question: 'ビリヤードやダーツは無料で使えますか？',
        answer: 'はい、貸切時間中はビリヤード・ダーツ・卓球などアミューズメント設備を無料でご利用いただけます。パーティーをさらに盛り上げましょう。',
      },
      {
        question: '50名以下の少人数でも貸切できますか？',
        answer: '50名様からの貸切に対応しています。ご人数やご予算に合わせた最適なプランをぱーてぃー野郎スタッフがご提案します。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
    instagramUrl: 'https://www.instagram.com/entrance_0301/',
  },
  {
    id: '15',
    name: 'Music Bar KING',
    slug: 'musicbar-king-okinawa',
    area: '沖縄市',
    address: '沖縄県沖縄市諸見里1丁目1-5 2F',
    capacityMin: 50,
    capacityMax: 120,
    priceText: '¥3,500〜 / 1名（飲み放題込）',
    description:
      '沖縄市・コザに構えるスポーツ＆ミュージックバー。全方向に大型モニターを完備し、琉球ゴールデンキングスをイメージしたバスケットボール型シャンデリアが圧倒的な存在感を放つ。カラオケ・ダーツ・ビリヤード・テーブルゲーム20種類以上が無料で楽しめ、会場使用料・保証金も無料。50〜120名の完全貸切に対応します。',
    images: [
      '/venues/musicbar-king-okinawa-1.jpg',
    ],
    tags: ['100名以上', '貸切OK', '沖縄市', 'DJイベント', '駐車場'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '駐車場', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: '沖縄自動車道「沖縄北IC」より車で約5分 / 沖縄市諸見里・コザエリア',
    mapUrl: 'https://maps.google.com/?q=沖縄市諸見里1-1-5',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '沖縄市コザの大型スポーツ＆ミュージックバー。全方向大型モニター・カラオケ・ダーツ・ビリヤード・テーブルゲーム20種以上が揃い、会場使用料・保証金が無料なのも嬉しいポイント。駐車場完備で車でのアクセスも抜群。50名から120名まで柔軟に対応します。',
    faq: [
      {
        question: 'ダーツやビリヤードは追加料金がかかりますか？',
        answer: 'ダーツ・ビリヤード・テーブルゲーム20種以上はすべて無料でご利用いただけます。パーティーをさらに盛り上げるアクティビティとしてお楽しみください。',
      },
      {
        question: '会場使用料はかかりますか？',
        answer: '会場使用料・貸切保証金は無料です。飲み放題プランのみのお支払いとなります。ぱーてぃー野郎スタッフが詳細をご案内します。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
    instagramUrl: 'https://www.instagram.com/king_musicbar_okinawa/',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.894057759263!2d127.7948931!3d26.3299298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e51305e91388a9%3A0x634295f45c35e5ec!2sMusic%20Bar%20KING!5e0!3m2!1sja!2sjp!4v1780841224645!5m2!1sja!2sjp',
  },
  {
    id: '14',
    name: 'Hash tag',
    slug: 'hashtag-kokusai',
    area: '国際通り',
    address: '沖縄県那覇市牧志3丁目1-6 勉強堂ビル5F',
    capacityMin: 30,
    capacityMax: 120,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '国際通り・牧志のビル5Fに広がる大型アミューズメントバー。最大120名を収容できる広々とした空間に、ダーツ・卓球・カラオケ・音響設備が揃い、飲んで遊んで盛り上がれるエンタメ満載の貸切会場です。二次会から忘年会・歓送迎会まであらゆるシーンを盛り上げます。',
    images: [
      '/venues/hashtag-kokusai-1.jpg',
    ],
    tags: ['100名以上', '貸切OK', '国際通り', 'ダーツ', '深夜OK'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「牧志駅」より徒歩5分 / 国際通りから徒歩3分 / 勉強堂ビル5F',
    mapUrl: 'https://maps.google.com/?q=那覇市牧志3-1-6+勉強堂ビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '国際通りそばで最大120名まで対応できる大型アミューズメントバー。ダーツ・卓球・カラオケと遊びが充実しており、ただ飲むだけじゃないパーティーが楽しめます。深夜まで営業しているので二次会・三次会にも最適な会場です。',
    faq: [
      {
        question: 'ダーツや卓球は自由に使えますか？',
        answer: 'はい、貸切時間中はダーツ・卓球設備をご自由にお使いいただけます。パーティーの盛り上げアイテムとして大人気です。',
      },
      {
        question: '120名の大人数でも対応できますか？',
        answer: 'はい、最大120名まで対応可能です。大規模な忘年会や会社イベントもぱーてぃー野郎スタッフが無料でサポートします。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
    instagramUrl: 'https://www.instagram.com/bar_hash_tag/',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3982598360626!2d127.6885622!3d26.2162461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569dd38877cfd%3A0x7a1d9fd4ad5d56b3!2zQkFSIOODj-ODg-OCt-ODpeOCv-OCsCDjgqLjg5_jg6Xjg7zjgrrjg6Hjg7Pjg4gm44OV44O844OJ44OQ44O8!5e0!3m2!1sja!2sjp!4v1780840553068!5m2!1sja!2sjp',
  },
  {
    id: '13',
    name: 'Over Alls',
    slug: 'overalls-naha',
    area: '那覇',
    address: '沖縄県那覇市牧志2丁目21-21番地',
    capacityMin: 20,
    capacityMax: 50,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '那覇・牧志の国際通りそばに佇む明るくカジュアルな洋風ダイニングバー。温かみのある木のインテリアとアメリカンポップな内装が心地よい空間を演出。20名の小規模から最大50名（立食80名）まで対応できる貸切会場として、歓送迎会・忘年会・誕生日会などあらゆるパーティーシーンに対応します。',
    images: [
      '/venues/overalls-naha-1.png',
    ],
    tags: ['貸切OK', '那覇', '飲み放題', '国際通り'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「牧志駅」より徒歩3分 / 国際通りから徒歩2分',
    mapUrl: 'https://maps.google.com/?q=那覇市牧志2-21-21',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '国際通りから徒歩2分の抜群のアクセスを誇るカジュアルダイニング。明るく開放的な空間で、少人数の歓送迎会から大人数の忘年会まで柔軟に対応。飲み放題プランが充実しており、気軽に楽しめるパーティー会場として人気です。',
    faq: [
      {
        question: '少人数でも貸切できますか？',
        answer: '20名様からご利用いただけます。少人数のアットホームなパーティーから大人数の宴会まで、ぱーてぃー野郎スタッフが最適なプランをご提案します。',
      },
      {
        question: '料理の持ち込みはできますか？',
        answer: 'ケーキの持ち込みは無料で承っています。その他のお持ち込みはお気軽にLINEまたはお電話でご相談ください。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の進行まで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
    instagramUrl: 'https://www.instagram.com/overalls0502/',
  },
  {
    id: '12',
    name: 'Black Berry',
    slug: 'blackberry-naha',
    area: '那覇',
    address: '沖縄県那覇市久茂地2丁目4-17 マルユウビル4F',
    capacityMin: 30,
    capacityMax: 60,
    priceText: '¥3,000〜 / 1名（飲み放題込）',
    description:
      '那覇・久茂地に佇むディスコライクなMusicBar。カラフルな照明と重厚な音響がパーティーを非日常空間へと演出。貸切専用設定でプライベート感たっぷりの二次会・イベントを楽しめます。深夜まで賑やかに盛り上がれる那覇随一のMusic Bar会場です。',
    images: [
      '/venues/blackberry-naha-1.png',
    ],
    tags: ['貸切OK', '那覇', '深夜OK', 'DJイベント', '音響'],
    facilities: ['貸切OK', '飲み放題', 'プロジェクター', '音響', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「県庁前駅」より徒歩5分 / 国際通りすぐ / 久茂地交差点そば',
    mapUrl: 'https://maps.google.com/?q=那覇市久茂地2-4-17+マルユウビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      'ディスコのような非日常空間が魅力のMusic Bar。プロ仕様の音響・照明設備で、DJイベントから結婚式二次会まで幅広く対応。那覇・県庁前エリアの好立地で深夜まで営業しており、盛り上がりを最後まで楽しめます。',
    faq: [
      {
        question: 'DJの持ち込みや音楽のリクエストはできますか？',
        answer: 'はい、外部DJの持ち込みも可能です。プロ仕様の音響設備をそのままご利用いただけます。リクエスト等はLINEまたはお電話でご相談ください。',
      },
      {
        question: '深夜まで利用できますか？',
        answer: 'はい、深夜営業に対応しています。二次会の二次会としてもご利用いただける深夜対応会場です。詳細な終了時間はお問い合わせください。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。お気軽にLINEでご相談ください。',
      },
    ],
    isFeatured: false,
    instagramUrl: 'https://www.instagram.com/musicbar___blackberry/',
  },
  {
    id: '11',
    name: 'ゆいまーる',
    slug: 'yuimaru-naha',
    area: '那覇',
    address: '沖縄県那覇市安里1丁目1番60号 大光不動産ビル5F',
    capacityMin: 20,
    capacityMax: 60,
    priceText: '¥3,300〜 / 1名（飲み放題込）',
    description:
      '那覇・安里に構える沖縄の雰囲気たっぷりの貸切パーティー会場。琉球の文化と空気感を感じられる空間で、本格ステージを完備。カラオケ・ダーツ・音響設備が揃い、二次会から歓送迎会・同窓会まで沖縄らしいひとときをお楽しみいただけます。',
    images: [
      '/venues/yuimaru-naha-1.png',
    ],
    tags: ['結婚式二次会', '貸切OK', '沖縄らしさ', 'ステージあり'],
    facilities: ['貸切OK', '飲み放題', '音響', 'カラオケ', '深夜OK'],
    scenes: ['結婚式二次会', '歓送迎会', '忘年会', '新年会', '同窓会', '会社イベント', 'DJイベント'],
    access: 'ゆいレール「安里駅」より徒歩3分 / 国際通りから徒歩5分圏内',
    mapUrl: 'https://maps.google.com/?q=那覇市安里1-1-60+大光不動産ビル',
    lineUrl: LINE_URL,
    phone: PHONE,
    recommendedPoint:
      '沖縄らしい雰囲気を味わえる那覇・安里の完全貸切会場。本格ステージを備えており、余興や生演奏など盛りだくさんの演出が可能。ゆいレール安里駅から徒歩3分・国際通りも徒歩圏内でアクセス抜群。カラオケ・ダーツ・音響完備で、最大60名（立食100名）まで対応します。',
    faq: [
      {
        question: 'ステージはどのように使えますか？',
        answer: '余興・生演奏・DJ・ダンスパフォーマンスなど自由にご利用いただけます。マイクや音響設備も完備していますのでお気軽にご相談ください。',
      },
      {
        question: '最大何名まで対応できますか？',
        answer: '着席60名・立食100名まで対応可能です。ぱーてぃー野郎スタッフが人数に合わせたレイアウトをご提案します。',
      },
      {
        question: '二次会の幹事サポートはありますか？',
        answer: 'ぱーてぃー野郎の専任スタッフが、会場選びから当日の流れまで無料でサポートします。',
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
