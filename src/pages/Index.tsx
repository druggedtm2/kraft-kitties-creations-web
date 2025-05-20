
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Collections from '../components/Collections';
import OrderProcess from '../components/OrderProcess';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ThemeSwitcher from '../components/ThemeSwitcher';

// Import the animation observer
import AnimationObserver from '../components/AnimationObserver';

const Index = () => {
  useEffect(() => {
    document.title = "Kraft Kitties - Handmade Gifts & Custom Art";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimationObserver>
        <About />
        <Collections />
        <OrderProcess />
        <Testimonials />
        <Contact />
      </AnimationObserver>
      <Footer />
      <ScrollToTop />
      <ThemeSwitcher />
    </div>
  );
};

export default Index;
