"use client";

import { useEffect, useCallback } from "react";

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({
  children,
}: PerformanceOptimizerProps) {
  // Optimize scroll performance with requestAnimationFrame
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Update any scroll-dependent elements here if needed
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Setup performance optimizations
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      // Add class to disable animations for users who prefer reduced motion
      document.documentElement.classList.add("reduce-motion");
    }

    // Listen for changes in motion preference
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("reduce-motion");
      } else {
        document.documentElement.classList.remove("reduce-motion");
      }
    };

    prefersReducedMotion.addEventListener(
      "change",
      handleMotionPreferenceChange
    );

    // Setup scroll optimization
    const cleanupScroll = optimizeScrollPerformance();

    // Optimize font loading
    if ("fonts" in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add("fonts-loaded");
      });
    }

    // Cleanup function
    return () => {
      prefersReducedMotion.removeEventListener(
        "change",
        handleMotionPreferenceChange
      );
      cleanupScroll();
    };
  }, [optimizeScrollPerformance]);

  // Add performance-related meta tags and styles
  useEffect(() => {
    // Add DNS prefetch for external resources
    const addDnsPrefetch = (href: string) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = href;
      document.head.appendChild(link);
    };

    // Prefetch common external domains
    addDnsPrefetch("//fonts.googleapis.com");
    addDnsPrefetch("//images.unsplash.com");

    // Add preconnect for critical resources
    const addPreconnect = (href: string) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      document.head.appendChild(link);
    };

    addPreconnect("https://fonts.gstatic.com");
  }, []);

  return <>{children}</>;
}
