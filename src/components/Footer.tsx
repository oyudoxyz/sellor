'use client';
import { Linkedin, Instagram } from 'lucide-react';

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill="currentColor"
      />
      <path
        d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
        stroke="#171717"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="16"
        fill="currentColor"
      />
      <path
        d="M21.5 12.5c-.7 0-1.3-.2-1.8-.6v5.2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.2 0 .5 0 .7.1v2.1c-.2-.1-.4-.1-.7-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-9.5h2c.1 1.1 1 2 2.1 2.2v1.6z"
        fill="#171717"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f0] py-5 px-4 flex flex-col md:flex-row items-center justify-between font-manrope gap-4">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <span className="text-lg md:text-xl font-extrabold text-black">
          How can we help?
        </span>
        <nav className="flex gap-6 md:gap-8 text-black font-medium text-base">
          <a
            href="mailto:hello@sellor.xyz"
            className="hover:underline"
          >
            hello@sellor.xyz
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6 md:gap-8">
        <div className="flex gap-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Linkedin
              size={20}
              className="text-[#f7f7f0]"
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <XIcon
              width={20}
              height={20}
              className="text-[#f7f7f0]"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Instagram
              size={20}
              className="text-[#f7f7f0]"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <TikTokIcon
              width={20}
              height={20}
              className="text-[#f7f7f0]"
            />
          </a>
        </div>
        <a
          href="#get-started"
          className="ml-4 bg-black text-white font-semibold rounded-full border border-black px-6 py-2 flex items-center gap-2 text-base shadow-md transition-all duration-200 hover:bg-white hover:text-black"
        >
          Get started
        </a>
      </div>
    </footer>
  );
}
