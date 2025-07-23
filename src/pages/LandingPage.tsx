import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PopupModal from '@/components/PopupModal';
import { Sparkles, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-secondary rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Brand Introduction */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                Welcome to Atulya Karigari
              </span>
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              <span className="text-gradient-luxury">
                Where Every Thread
              </span>
              <br />
              <span className="text-foreground">
                Tells a Story
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover the finest collection of handloom sarees, where traditional craftsmanship 
              meets contemporary elegance. Choose your perfect style and budget.
            </p>

            {/* Call to Action */}
            <div className="space-y-6 pt-8">
              <Button 
                variant="luxury" 
                size="xl"
                onClick={() => setIsPopupOpen(true)}
                className="group text-lg px-12 py-4"
              >
                Choose Your Style
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <p className="text-muted-foreground text-sm">
                ✨ Premium handloom sarees starting from ₹999 • Luxury collection from ₹1799
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Fabric Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm font-medium">Explore collections</span>
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Our Collections
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From affordable everyday elegance to luxury masterpieces, 
              find the perfect saree for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Affordable Preview */}
            <div className="card-luxury p-8 text-center group hover:shadow-luxury transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">₹</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4">
                Affordable Collection
              </h3>
              
              <div className="text-2xl font-bold text-primary mb-4">
                Starting from ₹999
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beautiful handloom sarees with traditional craftsmanship 
                at accessible prices for everyday elegance.
              </p>
              
              <Button 
                variant="outline-luxury" 
                onClick={() => setIsPopupOpen(true)}
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Explore Collection
              </Button>
            </div>

            {/* Luxury Preview */}
            <div className="card-luxury p-8 text-center group hover:shadow-gold transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">✨</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4">
                Luxury Collection
              </h3>
              
              <div className="text-2xl font-bold text-gradient-gold mb-4">
                Starting from ₹1799
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Premium handwoven sarees with intricate embroidery and 
                finest materials for connoisseurs of exceptional artistry.
              </p>
              
              <Button 
                variant="luxury" 
                onClick={() => setIsPopupOpen(true)}
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