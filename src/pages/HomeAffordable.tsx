import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FabricGrid from '@/components/FabricGrid';
import TestimonialsSection from '@/components/TestimonialsSection';

const HomeAffordable = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection variant="affordable" />
      <FabricGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomeAffordable;