import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X} from 'lucide-react';
import CustomConnectButton from '../common/CustomConnectButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const websiteUrl = import.meta.env.VITE_WEBSITE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commonLinkClasses = "text-gray-100 hover:bg-pink-500/20 transition-colors flex items-center group p-3 rounded-md text-sm font-medium";
  const commonIconClasses = "h-4 w-4 mr-3 text-zinc-400 group-hover:text-pink-500 transition-colors";

  return (
    <header className={`text-white px-2 py-4 sm:p-4 fixed w-full top-0 z-50 border-white/10 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#1a1a2e]/90 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-0 md:px-4 lg:px-8 flex justify-end items-center">
        {/* Right side content */}
        <div className="flex items-center space-x-1">
          {/* Connect Button - Desktop */}
          <div className="hidden lg:block">
            <CustomConnectButton />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center">
            <CustomConnectButton isMobile={true} />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="sm:ml-2 p-2 rounded-md text-gray-100 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden absolute top-full left-0 right-0 z-40 w-full shadow-lg
          bg-[#1a1a2e]/90 overflow-hidden
          transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'max-h-[calc(100vh-64px)]' : 'max-h-0'}
        `}
      >
        <div className={`p-4 transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          {/* Menu Items Area */}
        </div>
      </div>
    </header>
  );
};

export default Header;