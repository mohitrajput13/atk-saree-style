import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  User,
  Heart
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-red-600">
              Atulya Karigari
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/collections" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Collections
            </Link>
            <Link 
              to="/fabrics" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Shop by Fabric
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link 
                to="/collections" 
                className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Collections
              </Link>
              <Link 
                to="/fabrics" 
                className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Shop by Fabric
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-4 py-2 rounded">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;