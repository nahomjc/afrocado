"use client";

import { useEffect } from "react";

export default function TouchTargetOptimizer() {
  useEffect(() => {
    // Ensure DOM is ready before running optimization
    if (typeof window === "undefined") return;

    // Ensure all interactive elements meet minimum touch target size
    const optimizeTouchTargets = () => {
      try {
        const interactiveElements = document.querySelectorAll(
          'button, a, input, select, textarea, [role="button"], [tabindex]'
        );

        interactiveElements.forEach((element) => {
          const el = element as HTMLElement;
          if (!el) return;

          const minSize = 44; // 44px minimum touch target size

          // Check if element has sufficient touch target size
          const width = el.offsetWidth;
          const height = el.offsetHeight;

          if (width < minSize || height < minSize) {
            // Add padding to meet minimum touch target requirements
            el.style.minWidth = `${minSize}px`;
            el.style.minHeight = `${minSize}px`;

            // Add visual indicator for small touch targets
            if (!el.classList.contains("touch-target-optimized")) {
              el.classList.add("touch-target-optimized");
            }
          }
        });
      } catch (error) {
        console.warn(
          "TouchTargetOptimizer: Error optimizing touch targets",
          error
        );
      }
    };

    // Wait for DOM to be ready
    const runOptimization = () => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", optimizeTouchTargets);
      } else {
        optimizeTouchTargets();
      }
    };

    // Run optimization
    runOptimization();

    // Re-run optimization when window is resized
    const handleResize = () => {
      optimizeTouchTargets();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("DOMContentLoaded", optimizeTouchTargets);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
