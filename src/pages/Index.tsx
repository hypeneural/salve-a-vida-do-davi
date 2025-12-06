
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Header />
      <main className="space-y-10 sm:space-y-16">
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
    </div>
  );
};

export default Index;
