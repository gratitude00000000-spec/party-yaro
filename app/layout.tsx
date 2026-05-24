import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Outfit, Bebas_Neue, Mochiy_Pop_One } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import FloatingLine from '@/components/FloatingLine';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import { FavoritesProvider } from '@/lib/FavoritesContext';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
});

const mplusRounded = Mochiy_Pop_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dela',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.party-yaro.com'),
  title: {
    default: 'ぱーてぃー野郎｜沖縄の貸切パーティー会場探し',
    template: '%s | ぱーてぃー野郎',
  },
  description:
    '沖縄の二次会・貸切パーティー会場探しなら「ぱーてぃー野郎」。那覇・北谷・浦添エリア対応。LINE相談・内覧手配無料。',
  keywords: [
    '沖縄 二次会',
    '沖縄 貸切パーティー',
    '那覇 二次会',
    '那覇 貸切',
    'パーティー会場',
    '結婚式二次会',
    '沖縄 結婚式二次会',
    '沖縄 忘年会 会場',
    '沖縄 歓送迎会 会場',
    'ぱーてぃー野郎',
  ],
  openGraph: {
    title: 'ぱーてぃー野郎｜沖縄の貸切パーティー会場探し',
    description:
      '沖縄の二次会・貸切パーティー会場を無料でご提案。那覇・北谷・浦添エリア対応。LINE相談・内覧手配無料。',
    url: 'https://www.party-yaro.com',
    siteName: 'ぱーてぃー野郎',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ぱーてぃー野郎｜沖縄の貸切パーティー会場探し',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ぱーてぃー野郎｜沖縄の貸切パーティー会場探し',
    description: '沖縄の二次会・貸切パーティー会場を無料でご提案。那覇・北谷・浦添エリア対応。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico',          sizes: 'any' },
      { url: '/icons/icon-16.png',    sizes: '16x16',  type: 'image/png' },
      { url: '/icons/icon-32.png',    sizes: '32x32',  type: 'image/png' },
      { url: '/icons/icon-192.png',   sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ぱーてぃー野郎',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#111111',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ぱーてぃー野郎',
  description:
    '沖縄県内の二次会・貸切パーティー会場を無料でご提案するサービス。結婚式二次会・忘年会・歓送迎会・イベント会場を幹事の代わりにご提案します。',
  url: 'https://www.party-yaro.com',
  telephone: '098-975-5682',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '牧志2-18-4 2-C',
    addressLocality: '那覇市',
    addressRegion: '沖縄県',
    postalCode: '900-0013',
    addressCountry: 'JP',
  },
  areaServed: {
    '@type': 'State',
    name: '沖縄県',
  },
  serviceType: 'パーティー会場紹介',
  priceRange: '無料',
  openingHours: 'Mo-Su 00:00-24:00',
  sameAs: [
    'https://instagram.com/partyyarou.okinawa',
    'https://line.me/ti/p/@381ivfov',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${outfit.variable} ${bebasNeue.variable} ${mplusRounded.variable}`}>
      <head>
        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icons/icon-64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />

        {/* ── Apple Touch Icon (iPhone ホーム画面追加) ── */}
        {/* iOS は /apple-touch-icon.png をルートで自動探索するため両方設定 */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* ── PWA / Web App ── */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ぱーてぃー野郎" />
        <meta name="application-name" content="ぱーてぃー野郎" />
        <meta name="theme-color" content="#111111" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans bg-white">
        <FavoritesProvider>
          <main>{children}</main>
          <FloatingLine />
          <BottomNav />
        </FavoritesProvider>
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  );
}
