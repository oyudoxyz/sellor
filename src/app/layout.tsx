import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sellor - AI-Powered Field Sales Platform | Automate Placements & Commission Tracking',
    template: '%s | Sellor'
  },
  description: 'Transform your field sales operations with Sellor\'s AI-powered platform. Automate shift assignments, track commissions in real-time, GPS check-ins, and master your pitch with AI coaching. Join 5.5M reps upgrading to smarter sales tools.',
  keywords: [
    'field sales management',
    'sales automation platform',
    'AI sales coaching',
    'commission tracking software',
    'GPS sales check-in',
    'sales rep tools',
    'field sales CRM',
    'sales performance tracking',
    'automated shift scheduling',
    'sales training platform',
    'real-time earnings tracking',
    'sales team management',
    'field sales app',
    'sales productivity tools',
    'Cydcor alternatives',
    'door-to-door sales software',
    'direct sales management',
    'sales rep automation',
    'field sales automation',
    'field sales software',
    'salesperson',
    'sales rep',
    'field sales ',
    'field sales management software',
    
  ],
  authors: [{ name: 'Sellor Team', url: 'https://sellor.app' }],
  creator: 'Sellor',
  publisher: 'Sellor Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sellor.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Sellor - AI-Powered Field Sales Platform | Automate Placements & Commission Tracking',
    description: 'Transform your field sales operations with automated shift assignments, real-time commission tracking, GPS check-ins, and AI-powered pitch coaching. Join the beta today.',
    url: 'https://sellor.app',
    siteName: 'Sellor',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sellor - AI-Powered Field Sales Platform',
      },
      {
        url: '/sellorlogo.svg',
        width: 316,
        height: 112,
        alt: 'Sellor Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellor - AI-Powered Field Sales Platform',
    description: 'Automate placements, track commissions in real-time, and master your pitch with AI coaching. Transform your field sales game.',
    images: ['/assets/og-image.jpg'],
    creator: '@sellor',
    site: '@sellor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code-here',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Business Software',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sellor',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2A2723',
    'theme-color': '#2A2723',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2A2723',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Sellor',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              description: 'AI-powered field sales platform that automates shift assignments, tracks commissions in real-time, and provides AI coaching for sales reps.',
              url: 'https://sellor.app',
              author: {
                '@type': 'Organization',
                name: 'Sellor Limited',
                url: 'https://sellor.app'
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                description: 'Free beta access'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '150',
                bestRating: '5',
                worstRating: '1'
              },
              featureList: [
                'Automated shift assignments',
                'GPS check-in/check-out',
                'Real-time commission tracking',
                'AI-powered pitch coaching',
                'Live sales feed',
                'Instant payouts',
                'Learning center',
                'Team performance insights'
              ]
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sellor Limited',
              alternateName: 'Sellor',
              url: 'https://sellor.app',
              logo: 'https://sellor.app/sellorlogo.svg',
              description: 'Leading provider of AI-powered field sales management solutions',
              foundingDate: '2024',
              industry: 'Software',
              numberOfEmployees: '2-10',
              sameAs: [
                'https://twitter.com/sellor',
                'https://linkedin.com/company/sellor'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://sellor.app/contact'
              }
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Sellor',
              url: 'https://sellor.app',
              description: 'AI-powered field sales platform for automated placements, commission tracking, and sales coaching',
              publisher: {
                '@type': 'Organization',
                name: 'Sellor Limited'
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://sellor.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cal.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
