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
  title: 'Repzo',
  description: 'Field Sales Management The Efficient Way',
  keywords: ['sales', 'field sales', 'sales management', 'CRM', 'mobile sales'],
  authors: [{ name: 'Repzo Team' }],
  creator: 'Repzo',
  publisher: 'Repzo Inc.',
  openGraph: {
    title: 'Repzo - Field Sales Management',
    description: 'Manage your field sales operations efficiently with Repzo',
    url: 'https://repzo.xyz',
    siteName: 'Repzo',
    images: [
      {
        url: '/repzo-titled.svg',
        width: 316,
        height: 112,
        alt: 'Repzo Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Repzo - Field Sales Management',
    description: 'Manage your field sales operations efficiently with Repzo',
    images: ['/repzo-titled.svg'],
    creator: '@repzo',
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
