
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The crochet bouquet sits on my desk now, and it's exactly what I wanted—well-made, colorful, and something I'll keep for years. Samyyy listened carefully to what I was looking for and delivered perfectly.",
      name: "A. Sharma",
      location: "Ranchi"
    },
    {
      id: 2,
      content: "I ordered a glass painting of a character important to me, and the result shows real skill. The colors are right, the details are there, and it looks exactly as it should. Good work from a capable artist.",
      name: "R. Kumar",
      location: "Online Order"
    },
    {
      id: 3,
      content: "The ribbon bouquet worked perfectly for my sister's engagement celebration. It was well-constructed, looked elegant, and several people asked where it came from. Pleased with both the product and the service.",
      name: "P. Singh",
      location: "Ranchi"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-quote">"</div>
              <p className="mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-kraft-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
