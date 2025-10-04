"use client";

import { useEffect, useState } from "react";

interface MobileOptimizerProps {
  children: React.ReactNode;
}

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    // Detect low-end device based on hardware concurrency and memory
    const checkLowEndDevice = () => {
      const isLowEnd =
        navigator.hardwareConcurrency <= 2 ||
        (navigator as any).deviceMemory <= 2 ||
        /Android.*Chrome\/[0-5][0-9]/.test(navigator.userAgent);
      setIsLowEndDevice(isLowEnd);
    };

    checkMobile();
    checkLowEndDevice();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply mobile-specific optimizations
  useEffect(() => {
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.3s"
      );
      document.documentElement.style.setProperty(
        "--transition-duration",
        "0.3s"
      );

      // Optimize scroll behavior
      document.documentElement.style.scrollBehavior = "smooth";

      // Add mobile-specific classes
      document.body.classList.add("mobile-optimized");

      if (isLowEndDevice) {
        document.body.classList.add("low-end-device");
        // Further reduce complexity for low-end devices
        document.documentElement.style.setProperty(
          "--animation-duration",
          "0.1s"
        );
        document.documentElement.style.setProperty(
          "--transition-duration",
          "0.1s"
        );
      }
    } else {
      // Remove mobile optimizations on desktop
      document.body.classList.remove("mobile-optimized", "low-end-device");
      document.documentElement.style.removeProperty("--animation-duration");
      document.documentElement.style.removeProperty("--transition-duration");
    }

    return () => {
      document.body.classList.remove("mobile-optimized", "low-end-device");
      document.documentElement.style.removeProperty("--animation-duration");
      document.documentElement.style.removeProperty("--transition-duration");
    };
  }, [isMobile, isLowEndDevice]);

  // Preload critical resources on mobile
  useEffect(() => {
    if (isMobile) {
      // Preload critical images
      const criticalImages = ["/about-img/logo1-removebg-preview.png"];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [isMobile]);

  return <>{children}</>;
}
