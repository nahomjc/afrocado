"use client";

import { useState, useEffect } from "react";
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
  const [highlightedSection, setHighlightedSection] = useState<string | null>(
    null
  );

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Listen for highlight events from navigation
  useEffect(() => {
    const handleHighlight = (event: CustomEvent) => {
      setHighlightedSection(event.detail.section);
      // Remove highlight after 3 seconds
      setTimeout(() => {
        setHighlightedSection(null);
      }, 3000);
    };

    window.addEventListener(
      "section-highlight",
      handleHighlight as EventListener
    );
    return () => {
      window.removeEventListener(
        "section-highlight",
        handleHighlight as EventListener
      );
    };
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navigation />
          <section
            id="home"
            className={highlightedSection === "home" ? "section-highlight" : ""}
          >
            <HeroSection />
          </section>
          <section
            id="about"
            className={
              highlightedSection === "about" ? "section-highlight" : ""
            }
          >
            <AboutSection />
          </section>
          <section
            id="products"
            className={
              highlightedSection === "products" ? "section-highlight" : ""
            }
          >
            <ProductsSection />
          </section>
          <section
            id="testimonials"
            className={
              highlightedSection === "testimonials" ? "section-highlight" : ""
            }
          >
            <TestimonialSection />
          </section>
          <section
            id="team"
            className={highlightedSection === "team" ? "section-highlight" : ""}
          >
            <TeamSection />
          </section>
          <section
            id="contact"
            className={
              highlightedSection === "contact" ? "section-highlight" : ""
            }
          >
            <ContactSection />
          </section>
          <Footer />
          <ChatBot />
        </>
      )}
    </div>
  );
}
