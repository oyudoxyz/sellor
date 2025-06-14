'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActive(index);
            }
          }
        });
      },
      {
        threshold: 0.3, // Lower threshold to make it more responsive
        rootMargin: '-10% 0px -10% 0px', // Reduced margin for better detection
      }
    );

    // Observe all feature elements
    featureRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    // Add resize handler to update active feature on viewport changes
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      // Find the most visible feature
      let maxVisibility = 0;
      let mostVisibleIndex = 0;

      featureRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const visibility =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleIndex = index;
        }
      });

      setActive(mostVisibleIndex);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [features.length]);

  // Desktop: scroll logic for active index
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
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
        className="relative flex justify-center w-full mb-16 sticky top-0 z-20 bg-white pt-8 overflow-hidden md:overflow-visible"
        style={{ minHeight: 60 }}
      >
        <motion.div
          className="flex gap-12 md:gap-24 absolute left-1/2 -translate-x-1/2 ml-80 md:ml-0"
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
      <div className="w-full max-w-5xl">
        {/* Mobile: stacked image and text, image sticky under nav */}
        <div className="flex flex-col md:hidden">
          {features.map((f, i) => (
            <div
              key={f.key}
              className="mb-40 last:mb-0"
              ref={(el) => {
                if (el) featureRefs.current[i] = el;
              }}
            >
              <div className="w-full h-[180px] flex items-center justify-center mb-6">
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                  <Image
                    src={f.image}
                    alt={f.heading}
                    fill
                    style={{ objectFit: 'cover', filter: 'blur(0px)' }}
                    className="transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 100%)',
                      filter: 'blur(28px)',
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start max-w-md w-full mx-auto">
                <div className="mb-2 text-lg text-gray-500 font-semibold">
                  {f.subheading}
                </div>
                <div className="text-2xl text-black font-bold mb-4">
                  {f.heading}
                </div>
                <p className="text-base text-gray-700">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: side-by-side layout as before */}
        <div className="hidden md:flex flex-row items-start justify-center w-full gap-20">
          <div className="relative w-[520px] h-[340px] flex items-center justify-center sticky top-32 self-start transition-all duration-300">
            {features.map((f) => (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: active === features.indexOf(f) ? 1 : 0,
                  scale: active === features.indexOf(f) ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center justify-center ${
                  active === features.indexOf(f) ? 'z-10' : 'z-0'
                }`}
                style={{
                  pointerEvents:
                    active === features.indexOf(f) ? 'auto' : 'none',
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden relative">
                  <Image
                    src={f.image}
                    alt={f.heading}
                    fill
                    style={{ objectFit: 'cover', filter: 'blur(0px)' }}
                    className="transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 100%)',
                      filter: 'blur(28px)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-start max-w-md w-full">
            {features.map((f) => (
              <div
                key={f.key}
                ref={(el) => {
                  featureRefs.current[features.indexOf(f)] = el;
                }}
                className="mb-40 last:mb-0 min-h-[340px] flex flex-col justify-center"
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
      </div>
    </section>
  );
}
