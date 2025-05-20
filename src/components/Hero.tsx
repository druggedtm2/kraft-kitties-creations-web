
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
          <a href="#collections" className="btn-primary">View Collection</a>
          <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-kraft-primary">Start a Conversation</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
