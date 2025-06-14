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
    function handleScroll() {
      const nav = document.querySelector('nav');
      const features = featuresSectionRef.current;
      if (!nav || !features) return;
      const navRect = nav.getBoundingClientRect();
      const featuresRect = features.getBoundingClientRect();
      const buffer = 16;
      if (featuresRect.top - navRect.bottom > buffer) {
        setHideNav(false);
      } else if (featuresRect.bottom > navRect.bottom + buffer) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
