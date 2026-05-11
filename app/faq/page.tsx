import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { LINE_URL, PHONE } from '@/data/venues';
import FaqAccordion from '@/components/FaqAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'よくある質問 | ぱーてぃー野郎',
  description:
    'ぱーてぃー野郎のよくある質問。利用方法・料金・会場について・予約の流れなどご不明点をまとめました。解決しない場合はLINEでお気軽にご相談ください。',
};

const faqCategories = [
  {
    category: 'ご利用について',
    items: [
      {
        question: 'ぱーてぃー野郎を利用するメリットは何ですか？',
        answer:
          '沖縄600件以上の会場案内実績をもとに、あなたの条件に最適な会場を無料でご提案します。会場探しにかかる時間と手間を大幅に削減でき、成約時には弊社から特典もご用意しています。',
      },
      {
        question: '本当に無料で利用できますか？',
        answer:
          'はい、お客様への費用は一切かかりません。ぱーてぃー野郎は提携会場からの紹介料で運営しています。相談・提案・内覧手配・予約サポートすべて無料です。',
      },
      {
        question: '相談だけでも大丈夫ですか？',
        answer:
          'もちろんです。会場を決めなくてもご相談だけでもお気軽にどうぞ。しつこい営業は一切行っておりません。',
      },
      {
        question: '急な予約にも対応できますか？',
        answer:
          '急なご依頼にも可能な限り対応します。まずはLINEまたはお電話でご連絡ください。当日の空き確認から対応することもあります。',
      },
    ],
  },
  {
    category: '会場・予約について',
    items: [
      {
        question: '会場の内覧はできますか？',
        answer:
          'はい、内覧は無料で手配しています。気になる会場があれば、LINEまたはお電話でご連絡いただければ日程を調整します。',
      },
      {
        question: '内覧なしで予約できますか？',
        answer:
          'はい、可能です。各会場の詳細情報・写真・スタッフの生の声をもとに、内覧なしでもご案内できます。多忙な幹事の方にご好評いただいています。',
      },
      {
        question: 'キャンセルはできますか？',
        answer:
          '会場ごとのキャンセルポリシーに従います。キャンセル条件は事前にご確認いただけます。ご不明な点はLINEでお問い合わせください。',
      },
      {
        question: '複数の候補会場を比較できますか？',
        answer:
          'はい、お客様の条件をヒアリングしたうえで、複数の候補会場をご提案します。それぞれのメリット・デメリットも含めてご説明します。',
      },
    ],
  },
  {
    category: 'パーティーの内容について',
    items: [
      {
        question: '二次会の司会や進行もサポートしてもらえますか？',
        answer:
          '会場によっては司会進行サービスもご用意しています。また、進行表のテンプレートなど資料もご提供可能です。詳細はLINEでご相談ください。',
      },
      {
        question: 'ケーキや装飾の持ち込みはできますか？',
        answer:
          '会場によって持ち込み可否が異なります。ウェディングケーキは持ち込み可能な会場が多いですが、事前確認が必要です。ぱーてぃー野郎が代わりに確認します。',
      },
      {
        question: 'プロジェクターやマイクはすべての会場にありますか？',
        answer:
          'すべての会場に設置しているわけではありません。必要な設備を事前にお知らせいただければ、対応可能な会場をご提案します。',
      },
      {
        question: '料理のアレルギー対応はできますか？',
        answer:
          'アレルギー対応が可能な会場をご紹介できます。お申し付けの際に対象のアレルギーをお知らせください。',
      },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'よくある質問' },
        ]}
      />

      <div className="px-4 pb-6">
        <h1 className="text-2xl font-black text-gray-900 mb-1">
          <span className="text-primary">よくある</span>ご質問
        </h1>
        <p className="text-sm text-gray-500">
          ご利用前に気になる疑問をまとめました。解決しない場合はLINEでお気軽にどうぞ。
        </p>
      </div>

      <div className="px-4 space-y-8">
        {faqCategories.map((cat) => (
          <div key={cat.category}>
            <h2 className="font-black text-gray-900 text-lg mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full" />
              {cat.category}
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl px-4 shadow-sm">
              <FaqAccordion items={cat.items} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-8">
        <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
          <p className="font-black text-gray-900 mb-1">解決しない場合は</p>
          <p className="text-sm text-gray-500 mb-4">
            LINEでお気軽にご質問ください。<br />24時間受付中です。
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 active:scale-95 transition-transform mb-3"
          >
            <MessageCircle size={20} />
            LINEで質問する（無料）
          </a>
          <a href={`tel:${PHONE}`} className="text-sm text-gray-500 font-medium">
            📞 {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
