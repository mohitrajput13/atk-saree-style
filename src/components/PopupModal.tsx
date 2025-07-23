import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal = ({ isOpen, onClose }: PopupModalProps) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOptionSelect = (option: 'affordable' | 'luxury') => {
    setSelectedOption(option);
    
    // Navigate to the appropriate page after a brief delay
    setTimeout(() => {
      if (option === 'affordable') {
        navigate('/affordable');
      } else {
        navigate('/luxury');
      }
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-2xl shadow-luxury max-w-4xl w-full mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-soft p-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gradient-luxury mb-4">
            Choose Your Style
          </h2>
          <p className="text-muted-foreground text-lg">
            Select the perfect collection that matches your taste and budget
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Affordable Option */}
          <div 
            className={`p-8 cursor-pointer transition-all duration-300 hover:bg-accent group ${
              selectedOption === 'affordable' ? 'bg-accent ring-2 ring-primary' : ''
            }`}
            onClick={() => handleOptionSelect('affordable')}
          >
            <div className="text-center space-y-6">
              {/* Icon/Badge */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">₹</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Affordable Look
                </h3>
                <div className="text-3xl font-bold text-primary">
                  ₹999
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful handloom sarees with traditional craftsmanship at accessible prices. 
                  Perfect for everyday elegance and special occasions.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Quality handloom fabric</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Traditional designs</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Free shipping</span>
                </div>
              </div>

              <Button 
                variant="outline-luxury" 
                size="lg"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Explore Affordable Collection
              </Button>
            </div>
          </div>

          {/* Luxury Option */}
          <div 
            className={`p-8 cursor-pointer transition-all duration-300 hover:bg-accent group border-l border-border ${
              selectedOption === 'luxury' ? 'bg-accent ring-2 ring-primary' : ''
            }`}
            onClick={() => handleOptionSelect('luxury')}
          >
            <div className="text-center space-y-6">
              {/* Icon/Badge */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">✨</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Luxury Look
                </h3>
                <div className="text-3xl font-bold text-gradient-gold">
                  ₹1799
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Premium handwoven sarees with intricate embroidery and finest materials. 
                  Crafted for connoisseurs who appreciate exceptional artistry.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Premium silk & fabrics</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Intricate embroidery work</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>Exclusive designs</span>
                </div>
              </div>

              <Button 
                variant="luxury" 
                size="lg"
                className="w-full"
              >
                Explore Luxury Collection
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bg-accent/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            ✨ Both collections feature authentic handloom craftsmanship and come with our quality guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;