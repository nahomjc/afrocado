"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import LoadingScreen from "./components/LoadingScreen";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <TestimonialSection />
          <TeamSection />
          <ContactSection />
          <Footer />
          <ChatBot />
        </>
      )}
    </div>
  );
}
