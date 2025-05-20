
import React from 'react';
import { Search, MessageSquare, FileText, CreditCard, PaintRoller, Package } from 'lucide-react';

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consider What You Want",
      description: "Look through our work or think about what you'd like to have made. Consider colors, subject matter, and general style.",
      icon: <Search size={24} />
    },
    {
      id: 2,
      title: "Send a Message",
      description: "Contact @kraft_kitties_ on Instagram with your request. Include reference photos if you have them.",
      icon: <MessageSquare size={24} />
    },
    {
      id: 3,
      title: "Review Details Together",
      description: "We'll discuss your request, clarify any questions, provide pricing, and establish a timeline.",
      icon: <FileText size={24} />
    },
    {
      id: 4,
      title: "Confirm With Payment",
      description: "Once you're satisfied with the plan, complete payment (details provided in our conversation) to begin work.",
      icon: <CreditCard size={24} />
    },
    {
      id: 5,
      title: "Creation Process",
      description: "Your item is made with care and attention to the details we've discussed.",
      icon: <PaintRoller size={24} />
    },
    {
      id: 6,
      title: "Delivery Options",
      description: "We'll arrange pickup or delivery in Ranchi, or discuss shipping for locations beyond our immediate area.",
      icon: <Package size={24} />
    }
  ];

  return (
    <section id="ordering" className="section-padding bg-kraft-secondary bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Simple Ordering Process</h2>
        <p className="text-center text-gray-600 mb-12">Getting your custom piece from Kraft Kitties works like this:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div className="process-step" key={step.id}>
              <div className="process-step-icon">
                {step.icon}
              </div>
              <div>
                <div className="process-step-number">{step.id}. {step.title}</div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/kraft_kitties_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center"
          >
            <MessageSquare size={18} className="mr-2" />
            Contact to Begin
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
