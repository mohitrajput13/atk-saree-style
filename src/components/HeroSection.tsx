import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-sarees.jpg';

interface HeroSectionProps {
  variant?: 'affordable' | 'luxury';
}

const HeroSection = ({ variant = 'luxury' }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = {
    affordable: {
      subtitle: 'Affordable Elegance',
      title: 'Beautiful Sarees',
      description: 'Discover our collection of stunning handloom sarees that blend traditional craftsmanship with modern style.',
      price: '₹999',
      priceLabel: 'Starting from',
      ctaText: 'Shop Affordable Collection'
    },
    luxury: {
      subtitle: 'Luxury Collection',
      title: 'Atulya Karigari',
      description: 'Where every thread tells a story of grace. Experience the finest handwoven sarees crafted by master artisans.',
      price: '₹1799',
      priceLabel: 'Premium collection from',
      ctaText: 'Explore Luxury Collection'
    }
  };

  const currentContent = content[variant];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Subtitle with Icon */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-medium tracking-wider uppercase text-sm">
                {currentContent.subtitle}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="text-gradient-luxury">
                  {currentContent.title}
                </span>
              </h1>
              
              {/* Price Badge */}
              <div className="inline-flex items-center space-x-2 bg-luxury-cream border border-secondary/20 rounded-full px-6 py-2">
                <span className="text-muted-foreground text-sm">
                  {currentContent.priceLabel}
                </span>
                <span className="text-2xl font-bold text-primary">
                  {currentContent.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {currentContent.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="luxury" 
                size="xl"
                className="group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {currentContent.ctaText}
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`} />
              </Button>
              
              <Button variant="outline-luxury" size="xl">
                View Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Fabric Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury group-hover:shadow-gold transition-all duration-500">
                <img 
                  src={heroImage}
                  alt="Beautiful handloom sarees collection"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Handcrafted</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;