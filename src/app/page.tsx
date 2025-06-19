'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Main Page Component
export default function SellorLandingPage() {
  // Set body background to match the page background
  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom right, rgb(245, 245, 244), rgb(250, 250, 250), rgb(245, 245, 244))';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-stone-100 via-neutral-50 to-stone-50 font-manrope text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <WhyUseSellor />
        <OwnTheFuture />
        <Footer />
      </main>
    </div>
  );
}

// Header Component - Outverse inspired
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
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
          />
        </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Removed all navigation links */}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-[#2A2723] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
          >
                Get a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section - Cool sophisticated background
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Cool Sophisticated Background with Circular Patterns */}
      <div className="absolute inset-0">
        {/* Continuous concentric circles throughout hero section */}
        <div className="absolute inset-0 opacity-20">
          {/* Main large concentric circles - top right */}
          <svg className="absolute top-20 right-20 w-96 h-96" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="50" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.6"/>
            <circle cx="200" cy="200" r="100" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.5"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.4"/>
            <circle cx="200" cy="200" r="200" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.3"/>
            <circle cx="200" cy="200" r="250" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.2"/>
            <circle cx="200" cy="200" r="300" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.15"/>
          </svg>
          
          {/* Extended circles continuing the pattern - center */}
          <svg className="absolute top-0 left-1/2 w-[600px] h-[600px]" viewBox="0 0 600 600">
            <circle cx="300" cy="300" r="350" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.1"/>
            <circle cx="300" cy="300" r="400" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.08"/>
            <circle cx="300" cy="300" r="450" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.06"/>
            <circle cx="300" cy="300" r="500" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.04"/>
          </svg>
          
          {/* Large background circles - bottom left */}
          <svg className="absolute bottom-0 left-0 w-[800px] h-[800px]" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="550" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.05"/>
            <circle cx="400" cy="400" r="600" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.04"/>
            <circle cx="400" cy="400" r="650" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.03"/>
            <circle cx="400" cy="400" r="700" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.02"/>
          </svg>
          
          {/* Additional medium circles for continuity */}
          <svg className="absolute top-1/3 left-1/4 w-80 h-80" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="80" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.25"/>
            <circle cx="160" cy="160" r="120" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.2"/>
            <circle cx="160" cy="160" r="160" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.15"/>
            <circle cx="160" cy="160" r="200" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.1"/>
          </svg>
          
          {/* Right side continuation */}
          <svg className="absolute bottom-1/4 right-0 w-96 h-96" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="100" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.2"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.15"/>
            <circle cx="200" cy="200" r="200" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.1"/>
            <circle cx="200" cy="200" r="250" fill="none" stroke="rgb(168, 162, 158)" strokeWidth="1" opacity="0.08"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            {/* Hero Content - Left aligned, same grid as navbar */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 mb-6 leading-tight max-w-4xl">
            Deliver  {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
               impactful sales
              </span>{' '}
               at the highest level
      </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl">
             Automate your placements, commissions, and pitch training with AI, so your team can focus on selling, earning faster, and scaling effortlessly.
      </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2A2723] text-white px-6 py-3 rounded-lg text-lg  hover:bg-stone-800 transition-all duration-200 group shadow-lg hover:shadow-xl"
      >
                 Speak with the team
              </Link>
              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center text-stone-600 hover:text-[#2A2723] transition-colors px-6 py-3 border border-stone-300 rounded-lg hover:border-[#2A2723] hover:bg-white"
              >
                 Watch the demo
              </Link> */}
            </div>

            {/* Hero Images - Side by side on desktop, stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Image
                  src="/assets/hero-image-1.svg"
                  alt="Sellor Mobile App Interface"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                  unoptimized
                  style={{
                    imageRendering: 'crisp-edges',
                    shapeRendering: 'geometricPrecision'
                  }}
                />
              </div>
              <div className="flex-1">
                <Image
                  src="/assets/hero-image-2.svg"
                  alt="Sellor Dashboard Interface"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                  unoptimized
                  style={{
                    imageRendering: 'crisp-edges',
                    shapeRendering: 'geometricPrecision'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Use Sellor Section
function WhyUseSellor() {
  const reasons = [
    {
      number: "I",
      title: "Auto-Assign & GPS Check-In",
      description: "Never dig through spreadsheets or chats again. Automatically assign your next placement and clock-in/out by geofence, so you start selling the second you arrive.",
      image: "/assets/usecase-image-1.svg"
    },
    {
      number: "III", 
      title: "Live Commission Tracking",
      description: "Capture every sale instantly in your Feed, watch your wallet grow in real time, and request payouts whenever you need. No more waiting weeks for payday.",
      image: "/assets/usecase-image-2.svg"
    },
    {
      number: "III",
      title: "AI-Powered Pitch Practice", 
      description: "Hone your sales script with our Duolingo-style simulations, get instant feedback on tone, adherence, and conversation control. Close more deals on brand.",
      image: "/assets/usecase-image-3.svg"
    }
  ];

const features = [
  {
      feature: "Shift Assignment",
      traditional: "Manual scheduling in spreadsheets",
      sellor: "Auto-assign via algorithm"
    },
    {
      feature: "GPS Clock-In/Out",
      traditional: "Unverifiable manual clock-ins/outs",
      sellor: "GPS clock-in/out with photo verification"
  },
  {
      feature: "Sales Logging",
      traditional: "Unreliable write down or report sales later",
      sellor: "Instant in-app logging, auto-posted to feed"
    },
    {
      feature: "Commission Visibility",
      traditional: "Wait weeks to see unexpexcted commissions",
      sellor: "Watch earnings grow, cash out anytime"
  },
  {
      feature: "Pitch Consistency & Training",
      traditional: "Inconsistent training with no progress tracking or material",
      sellor: "AI simulations + trackable Learning Centre courses"
    },
    {
      feature: "Team Engagement",
      traditional: "Limited visibility or feedback on daily sales",
      sellor: "See, like, and comment on real-time wins"
  },
  {
      feature: "Shift Applications",
      traditional: "Disorganized shift requests by message or in person",
      sellor: "Browse & apply for upcoming shifts in one tap"
    },
    {
      feature: "Verification & Compliance",
      traditional: "Paperwork and long HR delays",
      sellor: "In-app background check and start quickly"
    },
    {
      feature: "Store Insights",
      traditional: "Rely on memory or secondhand advice",
      sellor: "Know when and where to pitch smarter"
    },
    {
      feature: "Support & Help",
      traditional: "Call or wait on replies from managers",
      sellor: "Search FAQs or contact support instantly"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
          Why Teams Use Sellor
          </h1>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
          Skip spreadsheets, clock-ins, and scattered tools. Manage shifts, track earnings instantly, and sharpen your pitch with AI coaching in one seamless app.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-md transition-shadow duration-200">
              {/* Number */}
              <div className="text-sm font-bold text-stone-400 mb-2">
                {reason.number}
      </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-stone-900 mb-3 leading-tight">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                {reason.description}
              </p>
              
              {/* Screenshot */}
              <div className="flex items-center justify-center">
                <Image
                  src={reason.image}
                  alt={`${reason.title} screenshot`}
                  width={400}
                  height={300}
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Breakdown Section */}
        <div className="text-center mb-12">
 
          <h1 className="text-3xl font-light text-stone-900 mb-6">
            Feature breakdown
          </h1>
          <p className="text-lg text-stone-600 mb-8">
            Compare traditional workflows to see why Sellor is the better choice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2A2723] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
          >
            Get a demo
 
          </Link>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="rounded-2xl overflow-hidden pb-4 min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-stone-50">
              <div className="p-6 text-left border-b border-stone-200 flex items-center">
                <h3 className="text-lg text-stone-600 font-medium">Features</h3>
              </div>
              <div className="relative z-20 p-6 text-center bg-white rounded-t-xl border border-stone-200 border-b-0 flex items-center justify-center">
                <Image
                  src="/sellorlogo.svg"
                  alt="Sellor"
                  width={240}
                  height={64}
                  className="h-12 w-auto"
                />
              </div>
              <div className="p-6 text-center border-b border-stone-200 flex items-center justify-center">
                <h3 className="text-lg text-stone-600 font-medium">Old way</h3>
              </div>
            </div>

            {/* Table Body with Special Middle Column */}
            <div className="relative">
              {/* Middle Column Background - Continuous with rounded bottom corners, no shadow */}
              <div className="absolute left-1/3 right-1/3 top-0 bottom-0 bg-white rounded-b-xl border-l border-r border-b border-stone-200"></div>
              
              {/* Table Rows */}
              {features.map((item, index) => (
                <div key={index} className="relative grid grid-cols-3">
                  {/* Feature Name */}
                  <div className={`p-6 text-left flex items-center ${index < features.length - 1 ? 'border-b border-stone-200' : ''}`}>
                    <h4 className="text-lg text-stone-600 font-medium">
                      {item.feature}
                    </h4>
                  </div>
                  
                  {/* Sellor Solution - Green text, consistent styling */}
                  <div className="relative z-10 p-6 text-left flex items-center">
                    <p className="text-lg leading-relaxed font-medium" style={{color: '#31A269'}}>
                      {item.sellor}
                    </p>
                  </div>
                  
                  {/* Traditional Workflow - Red text, consistent styling */}
                  <div className={`p-6 text-left flex items-center ${index < features.length - 1 ? 'border-b border-stone-200' : ''}`}>
                    <p className="text-lg leading-relaxed font-medium" style={{color: '#CC0000'}}>
                      {item.traditional}
                    </p>
                  </div>
            </div>
          ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

        </div>
      </div>
    </section>
  );
}

// Own the Future Section - Combined Market Opportunity & Become a Rep
function OwnTheFuture() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
            Own the Future of Field Sales
          </h2>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
            5.5 M reps will upgrade to automated shifts, real-time earnings, and AI scripting by 2032—why wait? Join the Sellor Beta today and supercharge your sales hustle.
          </p>
        </div>

        {/* Card 1 - Market Opportunity */}
        <div className="rounded-2xl mb-12 overflow-hidden" style={{backgroundColor: '#F7F2EB'}}>
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Content - 60% width */}
            <div className="flex-1 lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-light text-stone-900 mb-6">
                Market Opportunity
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                The field sales industry is experiencing unprecedented growth. With millions of reps seeking better tools and automated solutions, the market is ripe for disruption.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#2A2723] hover:text-stone-800 font-medium transition-colors"
              >
                Get a demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
      </div>

            {/* Visual - 40% width, full height */}
            <div className="lg:w-2/5 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 flex items-center justify-center min-h-[300px] lg:min-h-full">
              <Image
                src="/assets/market-opportunity-image.svg"
                alt="Market opportunity visualization"
                width={400}
                height={300}
                className="w-auto h-auto max-w-full max-h-full scale-75"
        />
      </div>
      </div>
    </div>

        {/* Card 2 - Ready to Sell */}
        <div className="rounded-2xl overflow-hidden" style={{backgroundColor: '#F7F2EB'}}>
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* Visual - 40% width, full height, on left for this card */}
            <div className="lg:w-2/5 bg-gradient-to-br from-yellow-100 via-orange-100 to-blue-100 flex items-center justify-center min-h-[300px] lg:min-h-full lg:order-1">
              <Image
                src="/assets/become-a-rep-image.svg"
                alt="Become a rep interface"
                width={400}
                height={300}
                className="w-auto h-auto max-w-full max-h-full scale-75"
              />
            </div>

            {/* Content - 60% width */}
            <div className="flex-1 lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center lg:order-2">
              <h3 className="text-3xl font-light text-stone-900 mb-6">
                Ready to Sell at the Highest Level?
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                Join thousands of reps who&apos;ve already upgraded their sales game. Get early access to Sellor&apos;s beta and start earning more today.
              </p>
              
              <Link
                href="https://cal.com/sellor/become-a-rep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#2A2723] hover:text-stone-800 font-medium transition-colors"
              >
                Become a Rep
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Section - Better designed but simple
function Footer() {
  return (
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
                Contact us
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
  );
}
