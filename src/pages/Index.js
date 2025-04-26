
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import AboutSection from "../components/AboutSection";
import WaitlistSection from "../components/WaitlistSection";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FAQSection />
        <AboutSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
