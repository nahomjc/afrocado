"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import VideoSection from "./components/VideoSection";
import ValuesSection from "./components/ValuesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import LoadingScreen from "./components/LoadingScreen";
import TestimonialSection from "./components/TestimonialSection";
import TeamSection from "./components/TeamSection";
import GlobeSection from "./components/GlobeSection";
import StickyFAQButton from "./components/StickyFAQButton";
import SocialPromoModal from "./components/SocialPromoModal";
import MobileOptimizer from "./components/MobileOptimizer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [highlightedSection, setHighlightedSection] = useState<string | null>(
    null
  );
  const [isScrolling, setIsScrolling] = useState(false);
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set());

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Optimized scroll handling with throttling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Section loading with intersection observer
  useEffect(() => {
    // Immediately load the first section (home) to prevent white screen
    setLoadedSections((prev) => new Set([...prev, "home"]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setLoadedSections((prev) => new Set([...prev, sectionId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    // Use a timeout to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

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

  // Memoized section components for better performance
  const sectionComponents = useMemo(
    () => ({
      hero: <HeroSection />,
      video: <VideoSection />,
      about: <AboutSection />,
      globe: <GlobeSection />,
      products: <ProductsSection />,
      values: <ValuesSection />,
      testimonials: <TestimonialSection />,
      team: <TeamSection />,
      contact: <ContactSection />,
    }),
    []
  );

  return (
    <MobileOptimizer>
      <div className="min-h-screen">
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <>
            <Navigation />
            <main
              className={`transition-opacity duration-300 ${
                isScrolling ? "opacity-95" : "opacity-100"
              }`}
            >
              <section
                id="home"
                className={`${
                  highlightedSection === "home" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Hero Section"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.hero}
              </section>
              <section
                id="video"
                className={`${
                  highlightedSection === "video" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Our Story Video"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.video}
              </section>
              <section
                id="about"
                className={`${
                  highlightedSection === "about" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="About Us"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.about}
              </section>
              <section
                id="globe"
                className={`${
                  highlightedSection === "globe" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Global Presence"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.globe}
              </section>
              <section
                id="products"
                className={`${
                  highlightedSection === "products" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Our Products"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.products}
              </section>
              <section
                id="values"
                className={`${
                  highlightedSection === "values" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Our Values & Beliefs"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.values}
              </section>
              <section
                id="testimonials"
                className={`${
                  highlightedSection === "testimonials"
                    ? "section-highlight"
                    : ""
                } transition-opacity duration-500`}
                aria-label="Customer Testimonials"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.testimonials}
              </section>
              <section
                id="team"
                className={`${
                  highlightedSection === "team" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Our Team"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.team}
              </section>
              <section
                id="contact"
                className={`${
                  highlightedSection === "contact" ? "section-highlight" : ""
                } transition-opacity duration-500`}
                aria-label="Contact Us"
                style={{ willChange: "transform" }}
              >
                {sectionComponents.contact}
              </section>
            </main>
            <Footer />
            <ChatBot />
            <StickyFAQButton />
            <SocialPromoModal />
          </>
        )}
      </div>
    </MobileOptimizer>
  );
}
