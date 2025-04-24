
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold gradient-text">XCollaber</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-800 hover:text-xc-purple px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <a href="#how-it-works" className="text-gray-800 hover:text-xc-purple px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </a>
              <a href="#features" className="text-gray-800 hover:text-xc-purple px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#faq" className="text-gray-800 hover:text-xc-purple px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
              <a href="#about" className="text-gray-800 hover:text-xc-purple px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <Button className="gradient-bg text-white font-medium" asChild>
                <a href="#waitlist">Join Waitlist</a>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-xc-purple hover:bg-xc-purple/10 focus:outline-none"
              aria-expanded="false"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-800 hover:bg-xc-purple/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#how-it-works" 
              className="text-gray-800 hover:bg-xc-purple/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-gray-800 hover:bg-xc-purple/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#faq" 
              className="text-gray-800 hover:bg-xc-purple/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:bg-xc-purple/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <div className="pt-2">
              <Button className="w-full gradient-bg text-white font-medium" asChild>
                <a href="#waitlist" onClick={() => setIsOpen(false)}>Join Waitlist</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
