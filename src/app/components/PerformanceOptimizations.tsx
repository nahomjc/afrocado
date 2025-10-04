"use client";

import { useEffect } from "react";

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      ];

      fontPreloads.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = href;
        link.onload = () => {
          link.rel = "stylesheet";
        };
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Add cookie consent banner for third-party content
      const cookieConsent = document.createElement("div");
      cookieConsent.id = "cookie-consent";
      cookieConsent.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1f2937; color: white; padding: 16px; z-index: 1000; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <p style="margin: 0; font-size: 14px;">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
          </div>
          <div style="display: flex; gap: 8px;">
            <button id="accept-cookies" style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Accept</button>
            <button id="decline-cookies" style="background: #6b7280; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Decline</button>
          </div>
        </div>
      `;

      // Only show if cookies haven't been accepted
      if (!localStorage.getItem("cookies-accepted")) {
        document.body.appendChild(cookieConsent);

        document
          .getElementById("accept-cookies")
          ?.addEventListener("click", () => {
            localStorage.setItem("cookies-accepted", "true");
            cookieConsent.remove();
          });

        document
          .getElementById("decline-cookies")
          ?.addEventListener("click", () => {
            localStorage.setItem("cookies-accepted", "false");
            cookieConsent.remove();
          });
      }
    };

    // Optimize animations for performance
    const optimizeAnimations = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty(
          "--animation-duration",
          "0.01ms"
        );
        document.documentElement.style.setProperty(
          "--transition-duration",
          "0.01ms"
        );
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();
    optimizeAnimations();

    // Cleanup function
    return () => {
      // Remove any event listeners or observers if needed
    };
  }, []);

  return null;
}
