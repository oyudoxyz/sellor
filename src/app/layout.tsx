import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
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
  title: 'Sellor - Field Sales Management',
  description: 'Deliver impactful sales at the highest level with automated placements, real-time earnings, and AI coaching',
  keywords: ['field sales', 'sales management', 'AI coaching', 'commission tracking', 'sales automation'],
  authors: [{ name: 'Sellor Team' }],
  creator: 'Sellor',
  publisher: 'Sellor Limited',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sellor - Field Sales Management',
    description: 'Automate your placements, commissions, and pitch training with AI',
    url: 'https://sellor.com',
    siteName: 'Sellor',
    images: [
      {
        url: '/sellorlogo.svg',
        width: 316,
        height: 112,
        alt: 'Sellor Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sellor - Field Sales Management',
    description: 'Automate your placements, commissions, and pitch training with AI',
    images: ['/sellorlogo.svg'],
    creator: '@sellor',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
