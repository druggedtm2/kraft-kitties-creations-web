
import React from 'react';
import { Instagram, User, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-kraft-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">Ready to discuss your project or have questions? We're here to help.</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="https://www.instagram.com/kraft_kitties_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mr-4 text-kraft-primary">
                <Instagram size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">DM @kraft_kitties_</h3>
                <p className="text-gray-600">Message us on Instagram</p>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/samyyy_09._/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mr-4 text-kraft-primary">
                <User size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Meet the Artist: @samyyy_09._</h3>
                <p className="text-gray-600">Follow Samyyy's personal account</p>
              </div>
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin size={24} className="text-kraft-primary mr-2" />
              <h3 className="text-lg font-semibold">Handmade in Ranchi, Jharkhand, India</h3>
            </div>
            <p className="text-gray-600">All items are crafted with care in our Ranchi studio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
