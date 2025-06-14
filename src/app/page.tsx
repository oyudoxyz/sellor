'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  BadgeCheck,
  Users,
  Star,
  Store,
  Home as HomeIcon,
  Sun,
  Pill,
  ShoppingCart,
  Shield,
  Phone,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reps', href: '#reps' },
  { label: 'FAQ', href: '#faq' },
];

function Navbar({ hide }: { hide?: boolean }) {
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

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
  className?: string;
};

function FeatureCard({
  icon: Icon,
  title,
  desc,
  className,
  bg,
}: FeatureCardProps & { bg: string }) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 max-w-xs flex flex-col items-start gap-3 font-manrope border border-gray-100 ${className}`}
      style={{ background: bg }}
    >
      <div className="text-black/80">
        <Icon size={28} />
      </div>
      <div className="font-semibold text-lg text-black">{title}</div>
      <div className="text-gray-700 text-sm">{desc}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#f7f7f0] pt-40 pb-10 px-4 relative min-h-[60vh] font-manrope">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-black mb-4 max-w-2xl">
        Field sales operations. <br />
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
        <FeatureCard
          icon={BadgeCheck}
          title="Automated Reporting"
          desc="No more manual spreadsheets. Get instant insights."
          bg="#e0f7fa"
          className="absolute left-[8%] top-20 rotate-[-10deg] scale-110 shadow-2xl"
        />
        <FeatureCard
          icon={Users}
          title="Team Collaboration"
          desc="Keep your reps in sync, wherever they are."
          bg="#fce4ec"
          className="absolute right-[10%] top-2 rotate-[13deg] scale-95 shadow-xl"
        />
        <FeatureCard
          icon={Star}
          title="Performance Tracking"
          desc="See who's crushing it and who needs help."
          bg="#fff9c4"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 rotate-[-3deg] scale-105 shadow-xl"
        />
      </div>
    </section>
  );
}

const features = [
  {
    key: 'train',
    heading: 'Train',
    image: '/assets/train.png',
    subheading: 'Onboard and educate your reps',
    body: 'Deliver interactive training modules and track progress to ensure your team is always ready to sell. With Repzo, you can create custom onboarding paths, assign quizzes, and monitor completion rates. Our platform ensures every rep is up to speed before they hit the field, reducing ramp-up time and increasing confidence. Built-in reminders and gamification keep your team engaged and motivated throughout the learning process.',
  },
  {
    key: 'deploy',
    heading: 'Deploy',
    image: '/assets/deploy.png',
    subheading: 'Get your team in the field fast',
    body: "Assign territories, routes, and leads with a click. Your reps are ready to go in minutes. Repzo's smart deployment tools let you optimize coverage, avoid overlaps, and respond to changes in real time. Whether you're launching a new product or expanding to a new region, you can deploy your team with confidence. Automated notifications and mobile check-ins keep everyone on track and accountable.",
  },
  {
    key: 'manage',
    heading: 'Manage',
    image: '/assets/deploy.png', // duplicate for now
    subheading: 'Oversee and optimize operations',
    body: "Monitor performance, coach in real time, and keep your team aligned with your goals. Repzo's management dashboard gives you a live view of every rep's activity, sales pipeline, and customer interactions. Set targets, track KPIs, and identify coaching opportunities instantly. With built-in communication tools, you can provide feedback, share updates, and celebrate wins—all in one place.",
  },
  {
    key: 'sell',
    heading: 'Sell',
    image: '/assets/chart.svg',
    subheading: 'Close more deals, faster',
    body: "Give your reps the tools and insights they need to win every opportunity. Repzo's mobile app puts product info, pricing, and customer history at your reps' fingertips. AI-powered suggestions help them overcome objections and tailor their pitch. Real-time analytics show what's working and where to improve, so your team can keep raising the bar.",
  },
];

function AnimatedFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      for (let i = 0; i < features.length; i++) {
        const el = featureRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          found = i;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 flex flex-col items-center justify-center font-manrope"
    >
      {/* Headings row */}
      <div
        className="relative flex justify-center w-full mb-16 sticky top-0 z-20 bg-white pt-8"
        style={{ minHeight: 60 }}
      >
        <motion.div
          className="flex gap-12 md:gap-24 absolute left-1/2 -translate-x-1/2"
          animate={{ x: `-${active * 180}px` }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${
                active === i ? 'text-black' : 'text-gray-300'
              }`}
              style={{ minWidth: 140, textAlign: 'center' }}
            >
              {f.heading}
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Animated image and text */}
      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-5xl gap-12 md:gap-20">
        <div className="relative w-full md:w-[520px] h-[340px] flex items-center justify-center sticky top-32 md:top-36 self-start">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: active === i ? 1 : 0,
                scale: active === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex items-center justify-center ${
                active === i ? 'z-10' : 'z-0'
              }`}
              style={{ pointerEvents: active === i ? 'auto' : 'none' }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                <Image
                  src={f.image}
                  alt={f.heading}
                  fill
                  style={{ objectFit: 'cover', filter: 'blur(0px)' }}
                  className="transition-all duration-500"
                />
                {/* Strong blur overlay for edges */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%)',
                    filter: 'blur(16px)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-start max-w-md w-full">
          {features.map((f, i) => (
            <div
              key={f.key}
              ref={(el) => {
                featureRefs.current[i] = el;
              }}
              className="mb-32 last:mb-0 min-h-[340px] flex flex-col justify-center"
            >
              <div className="mb-2 text-lg text-gray-500 font-semibold">
                {f.subheading}
              </div>
              <div className="text-2xl md:text-3xl text-black font-bold mb-4">
                {f.heading}
              </div>
              <p className="text-base md:text-lg text-gray-700">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofBanner() {
  return (
    <div className="w-full bg-white py-4 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-b border-gray-200 font-manrope">
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <BadgeCheck
          size={18}
          className="text-green-500"
        />
        Trusted by 1,200+ sales teams
      </div>
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <Users
          size={18}
          className="text-blue-500"
        />
        15,000+ reps onboarded
      </div>
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <Star
          size={18}
          className="text-yellow-500"
        />
        4.9/5 average rating
      </div>
    </div>
  );
}

function SectorsSection() {
  const sectors = [
    {
      name: 'Retail Sales',
      icon: Store,
      bg: 'bg-blue-50',
      color: 'text-blue-700',
      shadow: 'shadow-blue-100',
    },
    {
      name: 'Door to Door',
      icon: HomeIcon,
      bg: 'bg-green-50',
      color: 'text-green-700',
      shadow: 'shadow-green-100',
    },
    {
      name: 'Solar',
      icon: Sun,
      bg: 'bg-yellow-50',
      color: 'text-yellow-700',
      shadow: 'shadow-yellow-100',
    },
    {
      name: 'Pharma',
      icon: Pill,
      bg: 'bg-pink-50',
      color: 'text-pink-700',
      shadow: 'shadow-pink-100',
    },
    {
      name: 'FMCG',
      icon: ShoppingCart,
      bg: 'bg-purple-50',
      color: 'text-purple-700',
      shadow: 'shadow-purple-100',
    },
    {
      name: 'Insurance',
      icon: Shield,
      bg: 'bg-orange-50',
      color: 'text-orange-700',
      shadow: 'shadow-orange-100',
    },
    {
      name: 'Telecom',
      icon: Phone,
      bg: 'bg-cyan-50',
      color: 'text-cyan-700',
      shadow: 'shadow-cyan-100',
    },
  ];
  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center font-manrope">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-4 max-w-2xl">
        Repzo is trusted across every sector
      </h2>
      <p className="text-lg md:text-xl text-center text-black/70 mb-12 max-w-xl">
        From retail to renewables, Repzo empowers field teams in every industry
        to sell, serve, and succeed.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-5xl">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.name}
            className={`relative group ${sector.bg} ${sector.shadow} rounded-full px-8 py-7 flex flex-col items-center justify-center min-w-[170px] min-h-[120px] transition-all duration-200 hover:z-10 ${sector.color}`}
            style={{
              marginTop: i % 2 === 1 ? 32 : 0,
              marginBottom: i % 2 === 0 ? 32 : 0,
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.04)',
            }}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              type: 'spring',
              bounce: 0.3,
            }}
            whileHover={{
              y: -18,
              scale: 1.07,
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
            }}
          >
            <sector.icon
              size={36}
              className="mb-3 opacity-80"
            />
            <span className="text-lg md:text-xl font-semibold text-center whitespace-nowrap">
              {sector.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const [hideNav, setHideNav] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setHideNav(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }
    return () => {
      if (featuresSectionRef.current) {
        observer.unobserve(featuresSectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <Navbar hide={hideNav} />
      <Hero />
      <div ref={featuresSectionRef}>
        <AnimatedFeatures />
      </div>
      <SocialProofBanner />
      <SectorsSection />
    </>
  );
}
