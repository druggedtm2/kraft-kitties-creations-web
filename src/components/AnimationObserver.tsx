
import React, { useEffect, useRef } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation classes when element comes into view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          
          // Stop observing after animation is added
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    // Select all sections that should be animated
    const sections = document.querySelectorAll('section');
    
    // Add initial opacity-0 class and observe each section
    sections.forEach(section => {
      if (!section.classList.contains('animate-fade-in')) {
        section.classList.add('opacity-0');
        observerRef.current?.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AnimationObserver;
