
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/druggedtm/kk/main/images/lovelypinkbouquet.jpeg" 
          alt="Kraft Kitties Bouquet" 
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Unique Handmade Gifts, <br />Crafted with Care
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Find beautiful crochet items, custom bouquets, and personalized glass art by Kraft Kitties in Ranchi. Quality gifts for every occasion.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <a href="#collections" className="btn-primary group">
            View Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-kraft-primary group">
            Start a Conversation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#collections" className="flex flex-col items-center text-white text-sm">
          <span className="mb-2">Scroll to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
