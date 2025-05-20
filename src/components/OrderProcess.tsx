
import React from 'react';
import { Search, MessageSquare, FileText, CreditCard, PaintRoller, Package } from 'lucide-react';

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Envision Your Perfect Piece",
      description: "Browse our collections or imagine your ideal custom creation. Consider colors, styles, and specific elements that resonate with you or your recipient.",
      icon: <Search size={24} />
    },
    {
      id: 2,
      title: "Reach Out",
      description: "Message us on Instagram @kraft_kitties_ with your ideas. Include any reference photos or inspiration to help us understand your vision.",
      icon: <MessageSquare size={24} />
    },
    {
      id: 3,
      title: "Refine Your Request",
      description: "We'll collaborate to perfect your design, discuss materials, answer questions, establish pricing, and set a realistic timeline.",
      icon: <FileText size={24} />
    },
    {
      id: 4,
      title: "Confirm & Begin",
      description: "Once you're happy with the plan, complete your payment (details provided during our conversation) to reserve your spot in our creation queue.",
      icon: <CreditCard size={24} />
    },
    {
      id: 5,
      title: "Crafting With Care",
      description: "Your piece comes to life as we meticulously craft each element, ensuring quality and attention to the details that matter to you.",
      icon: <PaintRoller size={24} />
    },
    {
      id: 6,
      title: "Delivery To You",
      description: "We'll coordinate convenient pickup or delivery in Ranchi, or arrange shipping options for those beyond our local area.",
      icon: <Package size={24} />
    }
  ];

  return (
    <section id="ordering" className="section-padding bg-kraft-secondary bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How Your Custom Creation Happens</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">From initial spark to finished piece, here's our simple six-step journey to bringing your vision to life:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div 
              className="process-step group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" 
              key={step.id}
            >
              <div className="process-step-icon group-hover:bg-kraft-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <div>
                <div className="process-step-number group-hover:text-kraft-primary transition-colors duration-300">
                  {step.id}. {step.title}
                </div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.instagram.com/kraft_kitties_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center group px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageSquare size={20} className="mr-2" />
            Start Your Custom Order
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
