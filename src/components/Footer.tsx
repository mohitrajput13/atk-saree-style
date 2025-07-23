import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-2">
                Atulya Karigari
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Where every thread tells a story of grace. Dedicated to heritage, 
                crafted for elegance, and passed on timeless artistry.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <Link 
                to="/privacy-policy" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/refund" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Refund Policy
              </Link>
              <Link 
                to="/shipping" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Shipping Policy
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Info</h4>
            <div className="space-y-3">
              <Link 
                to="/handloom" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Handloom
              </Link>
              <Link 
                to="/new-collection" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                New Collection
              </Link>
              <Link 
                to="/corporate-gifting" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Corporate Gifting
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/blogs" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Plot No 1238/1981, Khandagiri Bari, Ghatikia, Khandgiri, Bhubaneswar - 751030 Odisha (India)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:atulyakarigari@gmail.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  atulyakarigari@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+919937037039" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                >
                  +91 99370 37039
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h5 className="font-medium">Follow Us</h5>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Artisan Illustration */}
        <div className="mt-16 pt-8 border-t border-primary-light/20">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-full h-24 bg-gradient-to-r from-transparent via-secondary/20 to-transparent rounded-lg flex items-center justify-center">
              <div className="text-secondary font-heading text-sm tracking-wider">
                ~ Crafted with Love • Heritage • Tradition ~
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Atulya Karigari. All rights reserved. Made with ❤️ for preserving Indian textile heritage.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;