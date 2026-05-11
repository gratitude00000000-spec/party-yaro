import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Search, ChevronRight, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { getFeaturedVenues } from '@/data/venues';
import { LINE_URL, PHONE } from '@/data/venues';
import VenueCard from '@/components/VenueCard';
import LineBanner from '@/components/LineBanner';
import FaqAccordion from '@/components/FaqAccordion';

const popularTags = [
  { label: '結婚式二次会', href: '/venues?scene=結婚式二次会' },
  { label: '50名以上', href: '/venues?capacity=50' },
  { label: '貸切OK', href: '/venues?facility=貸切OK' },
  { label: 'プロジェクターあり', href: '/venues?facility=プロジェクター' },
  { label: '那覇エリア', href: '/venues?area=那覇' },
  { label: '北谷エリア', href: '/venues?area=北谷' },
  { label: '忘年会', href: '/venues?scene=忘年会' },
  { label: 'DJイベント', href: '/venues?scene=DJイベント' },
];

const steps = [
  {
    no: '01',
    title: 'LINEまたは電話で相談',
    desc: '人数・エリア・予算・用途を伝えるだけ。しつこい営業は一切ありません。',
  },
  {
    no: '02',
    title: '候補会場をご提案',
    desc: '600件以上の実績から、あなたの条件に合った会場を複数ご提案します。',
  },
  {
    no: '03',
    title: '内覧・予約をサポート',
    desc: '会場の内覧手配から予約まで、すべて無料でサポートします。',
  },
];

const topFaqs = [
  {
    question: 'ぱーてぃー野郎の利用は本当に無料ですか？',
    answer: 'はい、完全無料です。ぱーてぃー野郎は提携会場からの紹介料で運営しています。お客様への費用は一切かかりません。',
  },
  {
    question: '相談だけでも大丈夫ですか？',
    answer: 'もちろんです。会場を決めなくてもご相談だけでもお気軽にどうぞ。',
  },
  {
    question: '急いでいるのですが対応できますか？',
    answer: '急なご依頼にも可能な限り対応します。まずはLINEまたはお電話でご連絡ください。',
  },
  {
    question: '内覧せずに会場を決めることはできますか？',
    answer: 'はい、可能です。各会場の詳細情報・写真・スタッフの生の声をもとに、内覧なしでもご案内できます。',
  },
];

export default function HomePage() {
  const featuredVenues = getFeaturedVenues();

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="relative gradient-hero min-h-[80vh] flex flex-col justify-end pb-10 px-5 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 right-5 w-60 h-60 rounded-full bg-red-800 blur-3xl" />
        </div>

        {/* Logo / Brand */}
        <div className="absolute top-8 left-0 right-0 flex justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-2">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white text-xs font-bold">イベント案内実績 618件</span>
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
            </div>
            <h1 className="text-white font-black text-4xl tracking-tight">
              ぱーてぃー<span className="text-primary">野郎</span>
            </h1>
          </div>
        </div>

        {/* Copy */}
        <div className="relative z-10 mb-8">
          <p className="text-white/70 text-sm font-medium mb-2">
            沖縄の二次会・貸切パーティー会場探しなら
          </p>
          <h2 className="text-white font-black text-2xl sm:text-3xl leading-tight text-balance mb-3">
            あなたの理想のパーティーを
            <br />
            <span className="text-primary">無料</span>でご提案します
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            結婚式二次会・忘年会・歓送迎会・イベント会場
            <br />
            相談・紹介・内覧手配すべて完全無料
          </p>
        </div>

        {/* CTA buttons */}
        <div className="relative z-10 flex flex-col gap-3">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-xl shadow-green-900/50 active:scale-95 transition-transform"
          >
            <MessageCircle size={22} strokeWidth={2.5} />
            LINEで無料相談する
          </a>
          <Link
            href="/search"
            className="flex items-center justify-center gap-3 bg-white/15 border border-white/30 text-white font-bold text-base rounded-2xl py-4 backdrop-blur-sm active:scale-95 transition-transform"
          >
            <Search size={20} />
            会場を検索する
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Popular tags */}
      <section className="py-6 px-4">
        <h2 className="section-title mb-4">
          人気の<span>検索条件</span>
        </h2>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {popularTags.map((tag) => (
            <Link
              key={tag.label}
              href={tag.href}
              className="shrink-0 flex items-center gap-1.5 bg-red-50 text-primary border border-red-100 font-bold text-xs rounded-full px-4 py-2 active:scale-95 transition-transform"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured venues */}
      <section className="py-2 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title">
            おすすめ<span>会場</span>
          </h2>
          <Link href="/venues" className="flex items-center gap-1 text-primary text-sm font-bold">
            すべて見る
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="space-y-4">
          {featuredVenues.slice(0, 4).map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        <Link
          href="/venues"
          className="mt-6 flex items-center justify-center gap-2 border-2 border-primary text-primary font-black rounded-2xl py-4 active:scale-95 transition-transform"
        >
          全会場を見る
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-8 px-4 mt-6">
        <h2 className="section-title mb-6 text-center">
          はじめての方へ<br />
          <span>ご利用の流れ</span>
        </h2>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.no} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                  {step.no}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-red-200 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-black text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 mt-4">
          <p className="font-black text-gray-900 mb-3 text-sm">ぱーてぃー野郎3つの安心</p>
          {[
            '相談・紹介・内覧手配すべて無料',
            '沖縄600件以上のイベント案内実績',
            'しつこい営業・勧誘は一切なし',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 mb-2 last:mb-0">
              <CheckCircle size={16} className="text-[#06C755] shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LINE Banner */}
      <LineBanner />

      {/* FAQ */}
      <section className="py-8 px-4">
        <h2 className="section-title mb-1">
          よくある<span>ご質問</span>
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          初めてご利用の方からよく寄せられる質問です。
        </p>
        <FaqAccordion items={topFaqs} />
        <Link
          href="/faq"
          className="mt-6 flex items-center justify-center gap-2 text-primary font-bold text-sm border border-primary rounded-xl py-3"
        >
          よくある質問をすべて見る
          <ChevronRight size={16} />
        </Link>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-8">
        <div className="bg-gray-900 rounded-3xl p-6 text-center">
          <p className="text-gray-400 text-xs mb-2">いつでも無料相談受付中</p>
          <h2 className="text-white font-black text-xl mb-4">
            会場選びに迷ったら<br />まずはLINEへ
          </h2>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-lg shadow-green-900/40 active:scale-95 transition-transform mb-3"
          >
            <MessageCircle size={22} />
            LINEで無料相談
          </a>
          <a
            href={`tel:${PHONE}`}
            className="text-gray-400 text-sm font-medium"
          >
            📞 {PHONE}（24時間受付）
          </a>
        </div>
      </section>
    </div>
  );
}
