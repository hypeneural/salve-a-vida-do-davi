
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import DMDSection from '@/components/DMDSection';
import TreatmentSection from '@/components/TreatmentSection';
import DonationSection from '@/components/DonationSection';
import TransparencySection from '@/components/TransparencySection';
import MediaSection from '@/components/MediaSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Heart, MessageCircle } from 'lucide-react';

const Index = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#D5E57C] text-gray-900 antialiased">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <StorySection />
        <DMDSection />
        <TreatmentSection />
        <DonationSection />
        <TransparencySection />
        <MediaSection />
        <FAQSection />
      </main>
      <Footer />

      {/* Sticky Mobile CTA Bar - native app feel */}
      <div className={`sticky-cta-bar ${showStickyCta ? '' : 'hidden'}`}>
        <div className="flex gap-3">
          <button
            onClick={() => scrollToSection('#ajudar')}
            className="flex-1 flex items-center justify-center gap-2 bg-davi-green-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <Heart className="w-5 h-5" />
            Doar agora
          </button>
          <a
            href="https://wa.me/5548996175837"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;

