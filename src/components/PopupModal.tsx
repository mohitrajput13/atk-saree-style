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
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal Content - exactly like screenshot */}
      <div className="relative bg-white rounded-lg shadow-2xl w-[600px] mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-600 hover:text-gray-800"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Pop up landing heading - exact text from image */}
        <div className="text-center py-8 bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">
            Pop up landing
          </h2>
        </div>

        {/* Two Options Side by Side */}
        <div className="grid grid-cols-2">
          {/* Left Option - Affordable */}
          <div 
            className="p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleOptionSelect('affordable')}
          >
            <div className="space-y-6">
              {/* Main product image */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/046ae260-fc4b-4f74-89aa-929b5fa756cb.png"
                  alt="Affordable saree collection"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Home page lux
                </h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  ₹999/-
                </div>
              </div>

              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
              >
                Choose This
              </Button>
            </div>
          </div>

          {/* Right Option - Luxury */}
          <div 
            className="p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors border-l border-gray-200"
            onClick={() => handleOptionSelect('luxury')}
          >
            <div className="space-y-6">
              {/* Main product image */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/82fd4dde-7a76-46f0-ad1d-8b581d601d0a.png"
                  alt="Luxury saree collection"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Home page lux
                </h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">
                  ₹1799/-
                </div>
              </div>

              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded"
              >
                Choose This
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;