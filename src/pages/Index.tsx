
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import DMDSection from '@/components/DMDSection';
import TreatmentSection from '@/components/TreatmentSection';
import DonationSection from '@/components/DonationSection';
import TransparencySection from '@/components/TransparencySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <DMDSection />
        <TreatmentSection />
        <DonationSection />
        <TransparencySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
