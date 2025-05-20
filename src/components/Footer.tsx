
import React from 'react';
import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://raw.githubusercontent.com/druggedtm/kk/main/images/logo.jpeg" 
                alt="Kraft Kitties Logo" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <span className="text-xl font-merriweather font-bold">Kraft Kitties</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">Handmade gifts crafted with care in Ranchi</p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-kraft-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-kraft-primary transition-colors">About</a>
              <a href="#collections" className="hover:text-kraft-primary transition-colors">Creations</a>
              <a href="#ordering" className="hover:text-kraft-primary transition-colors">Order</a>
              <a href="#contact" className="hover:text-kraft-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center">
            <a 
              href="https://www.instagram.com/kraft_kitties_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-kraft-primary p-2 rounded-full hover:bg-kraft-primary hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 Kraft Kitties. All Rights Reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Website by a friend who cares about good work
            <Heart size={14} className="ml-1 text-kraft-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
