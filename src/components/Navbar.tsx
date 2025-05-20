
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img src="https://raw.githubusercontent.com/druggedtm/kk/main/images/logo.jpeg" alt="Kraft Kitties Logo" className="h-12 w-12 rounded-full mr-3" />
              <span className="text-xl font-merriweather font-bold text-kraft-dark">Kraft Kitties</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#collections" className="nav-link">Creations</a>
            <a href="#ordering" className="nav-link">How to Order</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://www.instagram.com/kraft_kitties_/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-kraft-primary text-white rounded-full hover:bg-opacity-90 transition-all">
              <Instagram size={18} className="mr-2" />
              <span>Order on Instagram</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-kraft-dark hover:text-kraft-primary focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">Home</a>
            <a href="#about" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">About</a>
            <a href="#collections" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">Creations</a>
            <a href="#ordering" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">How to Order</a>
            <a href="#testimonials" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">Testimonials</a>
            <a href="#contact" onClick={closeMenu} className="block px-3 py-2 text-center font-medium hover:bg-kraft-secondary rounded-md">Contact</a>
            <a href="https://www.instagram.com/kraft_kitties_/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mt-3 bg-kraft-primary text-white rounded-full hover:bg-opacity-90 transition-all">
              <Instagram size={18} className="mr-2" />
              <span>Order on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
