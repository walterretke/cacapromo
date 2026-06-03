'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from './Hero';

// Dynamically import heavy components to improve LCP and initial load
const Ticker = dynamic(() => import('./Ticker').then(mod => mod.Ticker), { ssr: true });
const Logos = dynamic(() => import('./Logos').then(mod => mod.Logos), { ssr: true });
const Steps = dynamic(() => import('./Steps').then(mod => mod.Steps), { ssr: true });
const Comparison = dynamic(() => import('./Comparison').then(mod => mod.Comparison), { ssr: true });
const Testimonials = dynamic(() => import('./Testimonials').then(mod => mod.Testimonials), { ssr: true });
const FinalCTA = dynamic(() => import('./FinalCTA').then(mod => mod.FinalCTA), { ssr: true });
const Footer = dynamic(() => import('./Footer').then(mod => mod.Footer), { ssr: true });

export default function LandingPage() {
  const WHATSAPP_URL = "https://urlgeni.us/whatsapp/uBdHWI";

  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
    window.location.href = WHATSAPP_URL;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-navy-primary text-white selection:bg-blue-primary/30">
      <Hero onCtaClick={handleCtaClick} />
      <Ticker />
      <Logos />
      <Steps />
      <Comparison />
      <Testimonials />
      <FinalCTA onCtaClick={handleCtaClick} />
      <Footer />
    </div>
  );
}
