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
    <footer className="bg-white text-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif text-red-600 font-bold mb-4">
              Atulya Karigari
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Where every thread tells a story of grace. Dedicated to heritage, 
              crafted for elegance, and passed on timeless artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">QUICK LINKS</h4>
            <div className="space-y-3">
              <div className="text-gray-600 text-sm">Privacy policy</div>
              <div className="text-gray-600 text-sm">Terms of Service</div>
              <div className="text-gray-600 text-sm">Refund Policy</div>
              <div className="text-gray-600 text-sm">Shipping Policy</div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">INFO</h4>
            <div className="space-y-3">
              <div className="text-gray-600 text-sm">Handloom</div>
              <div className="text-gray-600 text-sm">New Collection</div>
              <div className="text-gray-600 text-sm">Corporate Gifting</div>
              <div className="text-gray-600 text-sm">About us</div>
              <div className="text-gray-600 text-sm">Blogs</div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plot No 1238/1981, Khandagiri Bari, Ghatikia, Khandgiri, Bhubaneswar - 751030 Odisha (India)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  atulyakarigari@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  +91 99370 37039
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <Youtube className="h-5 w-5 text-gray-600 hover:text-red-600 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-600 hover:text-red-600 cursor-pointer" />
                <Facebook className="h-5 w-5 text-gray-600 hover:text-red-600 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-600 hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Illustration */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          {/* Traditional artisan illustration - exactly like in the image */}
          <div className="h-32 bg-contain bg-center bg-no-repeat opacity-20"
               style={{
                 backgroundImage: `url('/lovable-uploads/9054dddb-dd7b-4459-881f-8cfd259f2493.png')`
               }}>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;