import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Search, ChevronRight, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { getFeaturedVenues } from '@/data/venues';
import { PHONE, LINE_URL } from '@/data/venues';
import VenueCard from '@/components/VenueCard';
import LineBanner from '@/components/LineBanner';
import LineLink from '@/components/LineLink';
import FaqAccordion from '@/components/FaqAccordion';

const popularTags = [
  { label: '結婚式二次会', href: '/venues?scene=結婚式二次会' },
  { label: '50名以上', href: '/venues?capacity=min50' },
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
    desc: '人数・エリア・予算・用途を伝えるだけ。',
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

      {/* ═══════════════════════════════════════
          Hero
      ═══════════════════════════════════════ */}
      <section className="relative gradient-hero min-h-[80vh] lg:min-h-[88vh] flex flex-col lg:flex-row lg:items-center pb-10 lg:pb-0 px-5 lg:px-16 xl:px-24 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 right-5 w-60 h-60 rounded-full bg-red-800 blur-3xl" />
        </div>

        {/* テキスト可読性グラデーション */}
        <div
          className="absolute inset-0 pointer-events-none z-[15]"
          style={{
            background: 'linear-gradient(to right, rgba(10,0,4,0.88) 0%, rgba(10,0,4,0.82) 45%, rgba(10,0,4,0.45) 72%, transparent 100%)',
          }}
        />

        {/* キャラクター動画 */}
        <div className="absolute right-[-90px] bottom-[140px] w-[280px] sm:w-[320px] lg:w-[480px] lg:right-0 lg:bottom-0 pointer-events-none select-none z-10">
          <video
            src="/py-logo-dance.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain object-bottom"
            style={{
              mixBlendMode: 'multiply',
              maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 94%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 94%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>

        {/* ── 左カラム（テキスト） ── */}
        <div className="relative z-20 flex flex-col lg:max-w-[55%] w-full">
          {/* 上部スペーサー（スマホのみ） */}
          <div className="h-[4vh] lg:hidden" />

          {/* Badge + Logo */}
          <div className="flex flex-col items-center lg:items-start mb-1">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-3">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white text-xs font-bold">
                イベント案内実績 <span className="font-outfit font-bold text-sm">792</span>件
              </span>
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
            </div>
            <h1 className="m-0 leading-none">
              <Image
                src="/logo.png"
                alt="ぱーてぃー野郎"
                width={1199}
                height={499}
                className="block w-[240px] lg:w-[320px] h-auto"
                priority
              />
            </h1>
          </div>

          {/* Copy */}
          <div className="mb-4 lg:mb-6">
            <p className="text-yellow-400 text-base font-black tracking-wider mb-2 animate-glow-pulse">
              沖縄県最大級。
            </p>
            <div className="relative py-2 mb-3">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(251,191,36,0.9) 0%, rgba(255,255,255,0.25) 55%, transparent 100%)' }} />
              <h2 className="animate-heading-shimmer text-4xl sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'var(--font-dela)', lineHeight: 1.25 }}>
                <span style={{ display: 'block' }}>
                  {['貸','切'].map((c, i) => (
                    <span key={c+i} className="inline-block" style={{ color: '#fff', textShadow: '0 0 16px rgba(255,255,255,0.8)', animation: `slideInRight 0.4s ease-out ${i * 0.09}s forwards`, opacity: 0 }}>{c}</span>
                  ))}
                  <span className="animate-party-glow" style={{ display: 'inline' }}>
                    {['パ','ー','テ','ィ','ー','会','場'].map((c, i) => (
                      <span key={c+i} className="inline-block" style={{ color: '#FFE04B', animation: `slideInRight 0.4s ease-out ${(2 + i) * 0.09}s forwards`, opacity: 0 }}>{c}</span>
                    ))}
                  </span>
                </span>
                <span style={{ display: 'block' }}>
                  {['専','門','サ','イ','ト'].map((c, i) => (
                    <span key={c+i} className="inline-block" style={{ color: '#fff', textShadow: '0 0 16px rgba(255,255,255,0.8)', animation: `slideInRight 0.4s ease-out ${(9 + i) * 0.09}s forwards`, opacity: 0 }}>{c}</span>
                  ))}
                </span>
              </h2>
              <div className="absolute bottom-0 left-0 w-[230px] h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(251,191,36,0.9) 0%, rgba(255,255,255,0.25) 70%, transparent 100%)' }} />
            </div>
            <p className="text-gray-200 text-[15px] lg:text-base leading-relaxed pr-[155px] sm:pr-[200px] lg:pr-0">
              沖縄最大級の掲載数。<br />幹事の悩みを<span className="text-white font-black">無料</span>で解決します。
            </p>

            {/* ご利用用途 */}
            <div className="mt-3 pr-[150px] sm:pr-0 lg:pr-0">
              <p className="text-white/40 text-[10px] font-bold tracking-widest mb-1.5 uppercase">ご利用用途</p>
              <div className="flex flex-wrap gap-1.5">
                {['結婚式二次会', '忘年会', '歓送迎会', '新年会', '同窓会', '各種イベント'].map((tag) => (
                  <span key={tag} className="text-[11px] text-white/80 border border-white/20 rounded-full px-3 py-1 leading-none backdrop-blur-sm bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* フレキシブルスペーサー（スマホのみ） */}
          <div className="flex-1 min-h-[16px] lg:hidden" />

          {/* CTA buttons */}
          <div className="relative z-20 flex flex-col lg:flex-row gap-3 lg:gap-4">
            <LineLink
              location="hero"
              className="flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 lg:py-5 lg:px-8 shadow-xl shadow-green-900/50 active:scale-95 transition-transform"
            >
              <MessageCircle size={22} strokeWidth={2.5} />
              LINEで無料相談する
            </LineLink>
            <Link
              href="/search"
              className="flex items-center justify-center gap-3 bg-white/15 border border-white/30 text-white font-bold text-base rounded-2xl py-4 lg:py-5 lg:px-8 backdrop-blur-sm active:scale-95 transition-transform"
            >
              <Search size={20} />
              会場を検索する
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* PC 用 電話番号 */}
          <p className="hidden lg:block mt-4 text-white/40 text-sm">
            📞 <a href={`tel:${PHONE}`} className="hover:text-white/70 transition-colors">{PHONE}</a>（24時間受付）
          </p>

          <div className="lg:hidden h-[4vh]" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Popular tags
      ═══════════════════════════════════════ */}
      <section className="py-6 px-4 lg:px-8 xl:px-12">
        <div className="lg:max-w-5xl lg:mx-auto">
          <h2 className="section-title mb-4">
            人気の<span>検索条件</span>
          </h2>
          <div className="flex gap-2 flex-wrap lg:flex-wrap">
            {popularTags.map((tag) => (
              <Link
                key={tag.label}
                href={tag.href}
                className="shrink-0 flex items-center gap-1.5 bg-red-50 text-primary border border-red-100 font-bold text-xs rounded-full px-4 py-2 active:scale-95 transition-transform hover:bg-red-100"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          About: ぱーてぃー野郎とは？
      ═══════════════════════════════════════ */}
      <section className="px-4 lg:px-8 xl:px-12 py-7 border-b border-gray-100">
        <div className="lg:max-w-5xl lg:mx-auto lg:flex lg:gap-12 lg:items-start">
          {/* テキスト */}
          <div className="lg:flex-1">
            <h2 className="section-title mb-3">
              ぱーてぃー野郎<span>とは？</span>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ぱーてぃー野郎は、沖縄県内で二次会・貸切パーティー・結婚式二次会・忘年会・歓送迎会・各種イベントの会場を探している方向けの<strong className="text-gray-900 font-black">無料相談サービス</strong>です。那覇・国際通り・北谷・浦添などのエリアから、人数・予算・利用シーンに合う会場を提案し、内覧手配や予約相談までサポートします。
            </p>
          </div>
          {/* リスト + CTA */}
          <div className="lg:flex-1">
            <ul className="space-y-2 mb-5">
              {[
                '相談・紹介・内覧手配はすべて無料',
                '那覇・北谷など沖縄全域の二次会・貸切会場を提案',
                'LINEまたは電話で気軽に相談できる',
                '結婚式二次会・忘年会・歓送迎会・DJイベントに対応',
                '幹事の会場探しの手間をまるごとサポート',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-[#06C755] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <LineLink
              location="about_section"
              className="flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-black text-base rounded-2xl py-4 shadow-md shadow-green-900/20 active:scale-95 transition-transform"
            >
              <MessageCircle size={20} />
              無料で相談してみる（LINE）
            </LineLink>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Featured venues
      ═══════════════════════════════════════ */}
      <section className="py-6 px-4 lg:px-8 xl:px-12">
        <div className="lg:max-w-5xl lg:mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">
              今月のおすすめ<span>会場</span>
            </h2>
            <Link href="/venues" className="flex items-center gap-1 text-primary text-sm font-bold">
              すべて見る
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* スマホ:1列 / PC:2列グリッド */}
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>

          <Link
            href="/venues"
            className="mt-6 flex items-center justify-center gap-2 border-2 border-primary text-primary font-black rounded-2xl py-4 active:scale-95 transition-transform hover:bg-red-50"
          >
            全会場を見る
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          How it works
      ═══════════════════════════════════════ */}
      <section className="bg-gray-50 py-8 px-4 lg:px-8 xl:px-12 mt-6">
        <div className="lg:max-w-5xl lg:mx-auto">
          <h2 className="section-title mb-6 text-center">
            はじめての方へ<br />
            <span>ご利用の流れ</span>
          </h2>

          {/* スマホ:縦並び / PC:横3列 */}
          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6">
            {steps.map((step, i) => (
              <div key={step.no} className="flex gap-4 lg:flex-col lg:gap-3 lg:bg-white lg:rounded-2xl lg:p-5 lg:border lg:border-gray-100">
                <div className="flex flex-col items-center lg:flex-row lg:gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bebas text-xl shrink-0 tracking-wide">
                    {step.no}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-red-200 mt-2 lg:hidden" />
                  )}
                </div>
                <div className="pb-4 lg:pb-0">
                  <h3 className="font-black text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 lg:flex lg:items-center lg:gap-12">
            <p className="font-black text-gray-900 mb-3 lg:mb-0 text-sm lg:shrink-0">ぱーてぃー野郎3つの安心</p>
            <div className="lg:flex lg:gap-8">
              {[
                '相談・紹介・内覧手配すべて無料',
                '沖縄600件以上のイベント案内実績',
                '県内優良店舗のみ案内',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-2 last:mb-0 lg:mb-0">
                  <CheckCircle size={16} className="text-[#06C755] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINE Banner */}
      <LineBanner />

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="py-8 px-4 lg:px-8 xl:px-12">
        <div className="lg:max-w-5xl lg:mx-auto">
          <h2 className="section-title mb-1">
            よくある<span>ご質問</span>
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            初めてご利用の方からよく寄せられる質問です。
          </p>
          <FaqAccordion items={topFaqs} />
          <Link
            href="/faq"
            className="mt-6 flex items-center justify-center gap-2 text-primary font-bold text-sm border border-primary rounded-xl py-3 hover:bg-red-50 transition-colors"
          >
            よくある質問をすべて見る
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Final CTA
      ═══════════════════════════════════════ */}
      <section className="px-4 lg:px-8 xl:px-12 pb-8">
        <div className="lg:max-w-5xl lg:mx-auto">
          <div className="bg-gray-900 rounded-3xl p-6 lg:p-10 text-center lg:flex lg:items-center lg:text-left lg:gap-12">
            <div className="lg:flex-1 mb-4 lg:mb-0">
              <p className="text-gray-400 text-xs mb-2">いつでも無料相談受付中</p>
              <h2 className="text-white font-black text-xl lg:text-3xl">
                会場選びに迷ったら<br />まずはぱーてぃー野郎へ
              </h2>
            </div>
            <div className="lg:flex-1 flex flex-col gap-3">
              <LineLink
                location="final_cta"
                className="w-full flex items-center justify-center gap-3 bg-[#06C755] text-white font-black text-lg rounded-2xl py-4 shadow-lg shadow-green-900/40 active:scale-95 transition-transform"
              >
                <MessageCircle size={22} />
                LINEで無料相談
              </LineLink>
              <a
                href={`tel:${PHONE}`}
                className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold rounded-2xl py-3.5 hover:bg-white/20 transition-colors"
              >
                <Phone size={18} />
                {PHONE}（24時間受付）
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
