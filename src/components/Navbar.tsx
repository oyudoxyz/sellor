'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reps', href: '#reps' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ hide }: { hide?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      className={`transition-all duration-300 fixed left-0 right-0 ${
        scrolled ? 'top-8' : 'top-0'
      } z-30 font-manrope${
        hide ? ' -translate-y-full pointer-events-none opacity-0' : ''
      } ${
        scrolled
          ? 'bg-[#f7f7f0] rounded-[2rem] shadow-xl border border-gray-200 py-4 px-12 mx-auto max-w-6xl scale-100 flex justify-center items-center'
          : 'w-full flex justify-center bg-[#f7f7f0] py-3 px-8'
      } `}
      style={{
        transition:
          'margin-top 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
        marginTop: scrolled ? 0 : 0,
      }}
    >
      <div
        className={`flex items-center gap-16 mx-auto p-4 whitespace-nowrap ${
          scrolled ? 'w-full justify-between' : ''
        }`}
        style={{ maxWidth: scrolled ? 1800 : 1500 }}
      >
        <Link href="/">
          <Image
            src="/repzo-titled.svg"
            alt="Repzo Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-8 text-[16px] font-medium text-black/80">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
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
    </nav>
  );
}
