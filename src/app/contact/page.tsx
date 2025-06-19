import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// SEO metadata for contact page
export const metadata: Metadata = {
  title: 'Contact Sellor - Schedule Your Meeting | Get Beta Access & Investor Info',
  description: 'Schedule a meeting with Sellor team. Get beta access to our AI-powered direct sales platform, explore investment opportunities, or learn about becoming a sales rep.',
  keywords: [
    'contact sellor',
    'schedule meeting',
    'beta access',
    'direct sales platform demo',
    'investor meeting',
    'sales rep opportunities',
    'AI sales coaching demo',
    'commission tracking platform',
    'direct sales automation',
    'sellor team contact'
  ],
  openGraph: {
    title: 'Contact Sellor - Schedule Your Meeting | Get Beta Access & Investor Info',
    description: 'Schedule a meeting with Sellor team. Get beta access to our AI-powered direct sales platform, explore investment opportunities, or learn about becoming a sales rep.',
    url: 'https://sellor.app/contact',
    images: [
      {
        url: 'https://sellor.app/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sellor - Schedule Your Meeting',
      },
    ],
  },
  twitter: {
    title: 'Contact Sellor - Schedule Your Meeting | Get Beta Access & Investor Info',
    description: 'Schedule a meeting with Sellor team. Get beta access to our AI-powered direct sales platform, explore investment opportunities, or learn about becoming a sales rep.',
    images: ['https://sellor.app/assets/og-image.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <Image
                  src="/sellorlogo.svg"
                  alt="Sellor"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6 leading-tight">
                  Schedule a demo with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
                    Sellor
                  </span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Choose the option that best fits your needs. Whether you&apos;re an investor interested in our growth story, a business ready to try our platform, or someone looking to join our direct sales team - we have the right conversation for you.
                </p>
              </div>
            </div>

            {/* Right Column - Booking Cards */}
            <div className="space-y-6">
              {/* Investor Intro Card */}
              <Link
                href="https://cal.com/sellor/investor-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-8 lg:p-12 transition-all duration-200 hover:border-2 hover:border-[#352F28] cursor-pointer"
                style={{backgroundColor: '#F7F2EB'}}
              >
                <h3 className="text-xl font-medium text-stone-900 mb-6">Investor Introduction</h3>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  Interested in learning about investment opportunities? Schedule a call to discuss our vision, traction, and growth plans.
                </p>
                <span className="inline-flex items-center text-[#2A2723] hover:text-stone-800 font-medium transition-colors">
                  Schedule investor call
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* Beta Access Card */}
              <Link
                href="https://cal.com/sellor/get-beta-access"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-8 lg:p-12 transition-all duration-200 hover:border-2 hover:border-[#352F28] cursor-pointer"
                style={{backgroundColor: '#F7F2EB'}}
              >
                <h3 className="text-xl font-medium text-stone-900 mb-6">Get Beta Access</h3>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  Ready to try Sellor? Get early access to our platform and be among the first to experience the future of direct sales.
                </p>
                <span className="inline-flex items-center text-[#2A2723] hover:text-stone-800 font-medium transition-colors">
                  Join beta program
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* Become a Rep Card */}
              <Link
                href="https://cal.com/sellor/become-a-rep"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-8 lg:p-12 transition-all duration-200 hover:border-2 hover:border-[#352F28] cursor-pointer"
                style={{backgroundColor: '#F7F2EB'}}
              >
                <h3 className="text-xl font-medium text-stone-900 mb-6">Become a Rep</h3>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  Interested in joining our direct sales team? Learn about opportunities to work with Sellor and grow your sales career.
                </p>
                <span className="inline-flex items-center text-[#2A2723] hover:text-stone-800 font-medium transition-colors">
                  Explore opportunities
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            {/* Left side - Logo, Socials, Copyright */}
            <div>
              <Image
                src="/sellorlogo.svg"
                alt="Sellor"
                width={120}
                height={32}
                className="h-8 w-auto mb-12"
              />
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-16">
                <Link href="#" className="text-stone-400 hover:text-[#2A2723] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-[#2A2723] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-stone-400 hover:text-[#2A2723] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
              
              {/* Copyright */}
              <p className="text-stone-500 text-sm">
                © {new Date().getFullYear()} Sellor Limited. All rights reserved.
              </p>
            </div>
            
            {/* Right side - Company Links */}
            <div>
              <h4 className="font-semibold text-stone-900 mb-4">Company</h4>
              <div className="space-y-3">
                <Link 
                  href="/contact" 
                  className="block text-stone-600 hover:text-[#2A2723] transition-colors font-medium"
                >
                  Schedule demo
                </Link>
                <Link 
                  href="https://candy-slayer-7af.notion.site/Terms-Conditions-2166567444808036a394eef2d410698a?source=copy_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-stone-600 hover:text-[#2A2723] transition-colors font-medium"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="https://candy-slayer-7af.notion.site/Privacy-Policy-216656744480804abb94edb925ebe0b0?source=copy_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-stone-600 hover:text-[#2A2723] transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 