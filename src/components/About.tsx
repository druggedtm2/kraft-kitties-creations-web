
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-kraft-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">The Creator: Samyyy</h2>
        <p className="text-center text-gray-600 mb-12">The hands behind @kraft_kitties_</p>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://raw.githubusercontent.com/druggedtm/kk/main/images/thirdpinkbouquet.jpeg" 
              alt="Samyyy showing handmade item" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              I'm Samyyy (@samyyy_09._), working from my Ranchi studio to create pieces that matter. My focus is simple: crafting items with careful attention—whether it's a crochet companion that sits on your shelf for years, a ribbon bouquet that brightens a room without fading, or glass art that captures what matters to you.
            </p>
            
            <p className="text-lg">
              This work isn't just about making things; it's about creating objects that earn their place in your home. Each piece gets the time it deserves, from first sketch to final stitch.
            </p>
            
            <div className="mt-8">
              <a 
                href="https://www.instagram.com/samyyy_09._/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-kraft-primary hover:underline"
              >
                Follow me on Instagram @samyyy_09._
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
