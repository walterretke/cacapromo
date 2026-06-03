'use client';

import { useEffect } from 'react';
import { Hero } from './Hero';
import { Ticker } from './Ticker';
import { Logos } from './Logos';
import { Steps } from './Steps';
import { Comparison } from './Comparison';
import { Testimonials } from './Testimonials';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

export default function LandingPage() {
  const WHATSAPP_URL = "https://urlgeni.us/whatsapp/uBdHWI";

  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
    window.location.href = WHATSAPP_URL;
  };

  useEffect(() => {
    // Small delay to ensure all components are rendered (especially if they were dynamic before)
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-navy-primary text-white selection:bg-blue-primary/30 min-h-screen">
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
