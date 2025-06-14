'use client';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AnimatedFeatures from '../components/AnimatedFeatures';
import SocialProofBanner from '../components/SocialProofBanner';
import SectorsSection from '../components/SectorsSection';
import BecomeARepSection from '../components/BecomeARepSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

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
      <div
        ref={featuresSectionRef}
        id="how-it-works"
      >
        <AnimatedFeatures />
      </div>
      <SocialProofBanner />
      <SectorsSection />
      <div id="reps">
        <BecomeARepSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}
