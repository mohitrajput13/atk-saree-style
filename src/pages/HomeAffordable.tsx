import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FabricGrid from '@/components/FabricGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';

const HomeAffordable = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section for Affordable - exactly like screenshot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                  Beautiful Sarees
                  <br />
                  <span className="text-orange-600">Affordable Elegance</span>
                </h1>
                
                <div className="text-4xl font-bold text-orange-600">
                  Starting from ₹999
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Discover our collection of stunning handloom sarees that blend traditional 
                craftsmanship with modern style. Perfect for everyday elegance and special occasions.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-lg">
                  Shop Affordable Collection
                </Button>
                
                <Button className="border-2 border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white px-8 py-3 text-lg rounded-lg">
                  View Catalog
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Fabric Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/046ae260-fc4b-4f74-89aa-929b5fa756cb.png"
                  alt="Beautiful affordable sarees collection"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FabricGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomeAffordable;