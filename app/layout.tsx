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
    default: 'ぱーてぃー野郎 | 沖縄の二次会・貸切パーティー会場探しならここ！',
    template: '%s | ぱーてぃー野郎',
  },
  description:
    '沖縄の二次会・貸切パーティー会場探しはぱーてぃー野郎へ。那覇・北谷・宜野湾・浦添エリアの結婚式二次会・忘年会・歓送迎会・DJイベント会場を無料でご提案。相談・紹介完全無料。',
  keywords: [
    '沖縄 二次会',
    '沖縄 貸切会場',
    '那覇 二次会',
    '那覇 貸切パーティー',
    '沖縄 結婚式二次会',
    '那覇 結婚式二次会',
    '沖縄 パーティー会場',
    '沖縄 忘年会 会場',
    '沖縄 歓送迎会 会場',
    'ぱーてぃー野郎',
  ],
  openGraph: {
    title: 'ぱーてぃー野郎 | 沖縄の二次会・貸切パーティー会場',
    description:
      '沖縄の二次会・貸切パーティー会場を無料でご提案。那覇・北谷・宜野湾・浦添エリア対応。',
    url: 'https://www.party-yaro.com',
    siteName: 'ぱーてぃー野郎',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ぱーてぃー野郎 | 沖縄の二次会・貸切パーティー会場',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ぱーてぃー野郎 | 沖縄の二次会・貸切パーティー会場',
    description: '沖縄の二次会・貸切パーティー会場を無料でご提案。',
  },
  robots: {
    index: true,
    follow: true,
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
  themeColor: '#E8001C',
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
        <link rel="icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
