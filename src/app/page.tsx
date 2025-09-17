"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";

import ValuesSection from "./components/ValuesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import LoadingScreen from "./components/LoadingScreen";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";
import StickyFAQButton from "./components/StickyFAQButton";
import SocialPromoModal from "./components/SocialPromoModal";

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
          <main>
            <section
              id="home"
              className={
                highlightedSection === "home" ? "section-highlight" : ""
              }
              aria-label="Hero Section"
            >
              <HeroSection />
            </section>
            <section
              id="about"
              className={
                highlightedSection === "about" ? "section-highlight" : ""
              }
              aria-label="About Us"
            >
              <AboutSection />
            </section>
            <section
              id="products"
              className={
                highlightedSection === "products" ? "section-highlight" : ""
              }
              aria-label="Our Products"
            >
              <ProductsSection />
            </section>
            <section
              id="values"
              className={
                highlightedSection === "values" ? "section-highlight" : ""
              }
              aria-label="Our Values & Beliefs"
            >
              <ValuesSection />
            </section>
            <section
              id="testimonials"
              className={
                highlightedSection === "testimonials" ? "section-highlight" : ""
              }
              aria-label="Customer Testimonials"
            >
              <TestimonialSection />
            </section>
            <section
              id="team"
              className={
                highlightedSection === "team" ? "section-highlight" : ""
              }
              aria-label="Our Team"
            >
              <TeamSection />
            </section>
            <section
              id="contact"
              className={
                highlightedSection === "contact" ? "section-highlight" : ""
              }
              aria-label="Contact Us"
            >
              <ContactSection />
            </section>
          </main>
          <Footer />
          <ChatBot />
          <StickyFAQButton />
          <SocialPromoModal />
        </>
      )}
    </div>
  );
}
