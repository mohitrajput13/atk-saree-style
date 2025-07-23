import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PopupModal from '@/components/PopupModal';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - exactly like screenshot */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading exactly like in image */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-800 leading-tight">
              Where Every Thread
              <br />
              Tells a Story
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover the finest collection of handloom sarees, where traditional craftsmanship 
              meets contemporary elegance. Choose your perfect style and budget.
            </p>

            {/* Call to Action Button */}
            <div className="pt-8">
              <Button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-lg font-medium rounded-lg group"
              >
                Choose Your Style
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Price indication */}
            <p className="text-gray-500 text-base pt-4">
              Premium handloom sarees starting from ₹999 • Luxury collection from ₹1799
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Fabric Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Our Collections
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From affordable everyday elegance to luxury masterpieces, 
              find the perfect saree for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Affordable Preview */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl font-bold">₹</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                Affordable Collection
              </h3>
              
              <div className="text-3xl font-bold text-orange-600 mb-4">
                Starting from ₹999
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beautiful handloom sarees with traditional craftsmanship 
                at accessible prices for everyday elegance.
              </p>
              
              <Button 
                onClick={() => setIsPopupOpen(true)}
                className="border-2 border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white px-6 py-2 rounded transition-all"
              >
                Explore Collection
              </Button>
            </div>

            {/* Luxury Preview */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl font-bold">✨</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                Luxury Collection
              </h3>
              
              <div className="text-3xl font-bold text-orange-600 mb-4">
                Starting from ₹1799
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premium handwoven sarees with intricate embroidery and 
                finest materials for connoisseurs of exceptional artistry.
              </p>
              
              <Button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <PopupModal 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;