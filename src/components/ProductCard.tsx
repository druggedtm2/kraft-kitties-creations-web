
import React from 'react';
import { Instagram } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const ProductCard = ({ image, title, subtitle }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <a 
              href="https://www.instagram.com/kraft_kitties_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-full bg-white text-kraft-primary py-2 px-4 rounded"
            >
              <Instagram size={18} className="mr-2" />
              DM for Price & Details
            </a>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h4 className="product-title">{title}</h4>
        <p className="product-subtitle">{subtitle}</p>
        <a 
          href="https://www.instagram.com/kraft_kitties_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="product-link flex items-center"
        >
          Contact for Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
