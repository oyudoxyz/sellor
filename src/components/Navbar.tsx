'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reps', href: '#reps' },
  { label: 'FAQ', href: '#faq' },
];

function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string
) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

export default function Navbar({ hide }: { hide?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile: always show hamburger, never up-arrow
  return (
    <>
      <nav
        className={`transition-all duration-300 fixed left-0 right-0 ${
          scrolled ? 'top-8' : 'top-0'
        } z-30 font-manrope${
          hide ? ' -translate-y-full pointer-events-none opacity-0' : ''
        } ${
          scrolled
            ? 'bg-[#f7f7f0] rounded-[2rem] shadow-xl border border-gray-200 py-4 px-2 md:px-12 mx-auto max-w-6xl scale-100 flex justify-center items-center'
            : 'w-full flex justify-center bg-[#f7f7f0] py-3 px-2 md:px-8'
        } `}
        style={{
          transition:
            'margin-top 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
          marginTop: scrolled ? 0 : 0,
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}
      >
        <div
          className={`flex items-center gap-8 md:gap-16 mx-auto p-2 md:p-4 whitespace-nowrap w-full justify-between`}
          style={{ maxWidth: 1800 }}
        >
          <Link href="/">
            <Image
              src="/repzo-titled.svg"
              alt="Repzo Logo"
              width={120}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <ul className="flex gap-8 text-[16px] font-medium text-black/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="hover:text-black transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 ml-8">
              <a
                href="#book-demo"
                className="bg-black hover:bg-white text-white hover:text-black font-semibold rounded-full px-6 py-2 text-[15px] shadow-sm transition-all duration-200 border border-black"
              >
                Book a demo
              </a>
              <a
                href="#become-rep"
                className="border border-black/80 hover:bg-black hover:text-white text-black font-semibold rounded-full px-6 py-2 text-[15px] transition-all duration-200"
              >
                Become a rep
              </a>
            </div>
          </div>
          {/* Mobile nav: always hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        {/* Mobile full-screen menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-[#f7f7f0] flex flex-col items-center justify-center animate-fade-in">
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 transition-colors"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-8 text-2xl font-bold text-black mb-12">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      scrollToSection(e, item.href);
                      setMenuOpen(false);
                    }}
                    className="hover:text-gray-600 transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href="#book-demo"
                className="bg-black hover:bg-white text-white hover:text-black font-semibold rounded-full px-6 py-3 text-lg shadow-sm transition-all duration-200 border border-black text-center"
                onClick={() => setMenuOpen(false)}
              >
                Book a demo
              </a>
              <a
                href="#become-rep"
                className="border border-black/80 hover:bg-black hover:text-white text-black font-semibold rounded-full px-6 py-3 text-lg transition-all duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Become a rep
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Floating back to top button */}
      {showBackToTop && (
        <button
          aria-label="Back to top"
          onClick={(e) => scrollToSection(e, '#')}
          className="fixed bottom-6 right-6 z-40 bg-black text-white rounded-full p-3 shadow-lg hover:bg-white hover:text-black border border-black transition-all duration-200 md:hidden"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}
