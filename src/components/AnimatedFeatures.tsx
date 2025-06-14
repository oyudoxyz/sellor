'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

export default function AnimatedFeatures() {
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
