'use client';
import { BadgeCheck, Users, Star } from 'lucide-react';

const featureCards = [
  {
    icon: BadgeCheck,
    title: 'Automated Reporting',
    desc: 'No more manual spreadsheets. Get instant insights.',
    bg: '#e0f7fa',
    className: 'absolute left-[8%] top-20 rotate-[-10deg] scale-110 shadow-2xl',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Keep your reps in sync, wherever they are.',
    bg: '#fce4ec',
    className: 'absolute right-[10%] top-2 rotate-[13deg] scale-95 shadow-xl',
  },
  {
    icon: Star,
    title: 'Performance Tracking',
    desc: "See who's crushing it and who needs help.",
    bg: '#fff9c4',
    className:
      'absolute left-1/2 top-[60%] -translate-x-1/2 rotate-[-3deg] scale-105 shadow-xl',
  },
];

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
  className?: string;
  bg: string;
};

function FeatureCard({
  icon: Icon,
  title,
  desc,
  className,
  bg,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-4 md:p-6 max-w-[160px] md:max-w-xs flex flex-col items-start gap-2 md:gap-3 font-manrope border border-gray-100 ${className}`}
      style={{ background: bg }}
    >
      <div className="text-black/80">
        <Icon
          size={20}
          className="md:size-[28px]"
        />
      </div>
      <div className="font-semibold text-base md:text-lg text-black">
        {title}
      </div>
      <div className="text-gray-700 text-xs md:text-sm">{desc}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#f7f7f0] pt-40 pb-10 px-4 relative min-h-[60vh] font-manrope">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-black mb-4 max-w-2xl">
        Direct sales operations. <br />
        Made effortless.
      </h1>
      <p className="text-lg md:text-xl text-center text-black/70 mb-10 max-w-xl">
        Empower your team, automate the busywork, and focus on what matters:
        closing deals and growing your business.
      </p>
      <a
        href="#book-demo"
        className="bg-black hover:bg-white text-white hover:text-black font-semibold rounded-full px-8 py-3 text-[17px] shadow-md transition-all duration-200 border border-black mb-5"
      >
        Book a demo
      </a>
      <div
        className="relative w-full flex justify-center items-center min-h-[320px] mt-2 mb-8"
        style={{ height: 340 }}
      >
        {featureCards.map((card, i) => (
          <FeatureCard
            key={i}
            {...card}
          />
        ))}
      </div>
    </section>
  );
}
