"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

interface GlobeSectionProps {
  className?: string;
}

export default function GlobeSection({ className = "" }: GlobeSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [phi, setPhi] = useState(0);
  const [theta, setTheta] = useState(0.3);
  const globeRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    const currentTheta = 0.3;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        if (globeRef.current) {
          globeRef.current.destroy();
        }
        initializeGlobe();
      }
    };

    const initializeGlobe = () => {
      if (!canvasRef.current) return;

      // Ensure canvas has proper dimensions
      if (width === 0) {
        width = canvasRef.current.offsetWidth;
      }

      console.log("Initializing globe with width:", width);

      try {
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 1,
          width: width,
          height: width,
          phi: currentPhi,
          theta: currentTheta,
          dark: 0,
          diffuse: 2,
          mapSamples: 4000,
          mapBrightness: 2.5,
          baseColor: [0.2, 0.7, 0.4],
          markerColor: [0.6, 1.0, 0.7],
          glowColor: [0.3, 0.8, 0.5],
          markers: [
            // North America
            { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
            { location: [40.7128, -74.006], size: 0.03 }, // New York
            { location: [43.6532, -79.3832], size: 0.03 }, // Toronto
            { location: [19.4326, -99.1332], size: 0.03 }, // Mexico City
            { location: [25.7617, -80.1918], size: 0.03 }, // Miami
            { location: [41.8781, -87.6298], size: 0.03 }, // Chicago
            { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles

            // Europe
            { location: [51.5074, -0.1278], size: 0.03 }, // London
            { location: [48.8566, 2.3522], size: 0.03 }, // Paris
            { location: [52.52, 13.405], size: 0.03 }, // Berlin
            { location: [41.9028, 12.4964], size: 0.03 }, // Rome
            { location: [40.4168, -3.7038], size: 0.03 }, // Madrid
            { location: [55.7558, 37.6176], size: 0.03 }, // Moscow
            { location: [59.9311, 10.7579], size: 0.03 }, // Oslo
            { location: [59.437, 24.7536], size: 0.03 }, // Tallinn

            // Asia
            { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
            { location: [39.9042, 116.4074], size: 0.03 }, // Beijing
            { location: [22.3193, 114.1694], size: 0.03 }, // Hong Kong
            { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
            { location: [28.6139, 77.209], size: 0.03 }, // New Delhi
            { location: [19.076, 72.8777], size: 0.03 }, // Mumbai
            { location: [37.5665, 126.978], size: 0.03 }, // Seoul
            { location: [13.7563, 100.5018], size: 0.03 }, // Bangkok

            // Africa
            { location: [-26.2041, 28.0473], size: 0.03 }, // Johannesburg
            { location: [-33.9249, 18.4241], size: 0.03 }, // Cape Town
            { location: [6.5244, 3.3792], size: 0.03 }, // Lagos
            { location: [-1.2921, 36.8219], size: 0.03 }, // Nairobi
            { location: [30.0444, 31.2357], size: 0.03 }, // Cairo
            { location: [33.5731, -7.5898], size: 0.03 }, // Casablanca
            { location: [-15.7801, -47.9292], size: 0.03 }, // Brasília
            { location: [-34.6118, -58.396], size: 0.03 }, // Buenos Aires

            // Oceania
            { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
            { location: [-37.8136, 144.9631], size: 0.03 }, // Melbourne
            { location: [-41.2865, 174.7762], size: 0.03 }, // Wellington
            { location: [-36.8485, 174.7633], size: 0.03 }, // Auckland

            // Middle East
            { location: [25.2048, 55.2708], size: 0.03 }, // Dubai
            { location: [31.7683, 35.2137], size: 0.03 }, // Jerusalem
            { location: [35.6892, 51.389], size: 0.03 }, // Tehran
            { location: [24.7136, 46.6753], size: 0.03 }, // Riyadh

            // Additional major cities
            { location: [-22.9068, -43.1729], size: 0.03 }, // Rio de Janeiro
            { location: [23.1291, 113.2644], size: 0.03 }, // Guangzhou
            { location: [12.9716, 77.5946], size: 0.03 }, // Bangalore
            { location: [55.7558, 37.6176], size: 0.03 }, // Moscow
            { location: [41.0082, 28.9784], size: 0.03 }, // Istanbul
            { location: [52.3676, 4.9041], size: 0.03 }, // Amsterdam
            { location: [55.6761, 12.5683], size: 0.03 }, // Copenhagen
            { location: [59.9139, 10.7522], size: 0.03 }, // Oslo
            { location: [60.1699, 24.9384], size: 0.03 }, // Helsinki
            { location: [59.3293, 18.0686], size: 0.03 }, // Stockholm
            { location: [50.0755, 14.4378], size: 0.03 }, // Prague
            { location: [47.4979, 19.0402], size: 0.03 }, // Budapest
            { location: [44.4268, 26.1025], size: 0.03 }, // Bucharest
            { location: [50.4501, 30.5234], size: 0.03 }, // Kyiv
            { location: [53.9045, 27.5615], size: 0.03 }, // Minsk
            { location: [56.9496, 24.1052], size: 0.03 }, // Riga
            { location: [54.6872, 25.2797], size: 0.03 }, // Vilnius
            { location: [52.2297, 21.0122], size: 0.03 }, // Warsaw
            { location: [50.0755, 14.4378], size: 0.03 }, // Prague
            { location: [48.1486, 17.1077], size: 0.03 }, // Bratislava
            { location: [46.0569, 14.5058], size: 0.03 }, // Ljubljana
            { location: [45.815, 15.9819], size: 0.03 }, // Zagreb
            { location: [43.8563, 18.4131], size: 0.03 }, // Sarajevo
            { location: [42.6977, 23.3219], size: 0.03 }, // Sofia
            { location: [41.3275, 19.8187], size: 0.03 }, // Tirana
            { location: [42.0027, 21.4361], size: 0.03 }, // Skopje
            { location: [44.0165, 21.0059], size: 0.03 }, // Belgrade
            { location: [45.815, 15.9819], size: 0.03 }, // Zagreb
            { location: [46.0569, 14.5058], size: 0.03 }, // Ljubljana
            { location: [48.1486, 17.1077], size: 0.03 }, // Bratislava
            { location: [50.0755, 14.4378], size: 0.03 }, // Prague
            { location: [52.2297, 21.0122], size: 0.03 }, // Warsaw
            { location: [54.6872, 25.2797], size: 0.03 }, // Vilnius
            { location: [56.9496, 24.1052], size: 0.03 }, // Riga
            { location: [53.9045, 27.5615], size: 0.03 }, // Minsk
            { location: [50.4501, 30.5234], size: 0.03 }, // Kyiv
            { location: [44.4268, 26.1025], size: 0.03 }, // Bucharest
            { location: [47.4979, 19.0402], size: 0.03 }, // Budapest
            { location: [50.0755, 14.4378], size: 0.03 }, // Prague
            { location: [52.3676, 4.9041], size: 0.03 }, // Amsterdam
            { location: [55.6761, 12.5683], size: 0.03 }, // Copenhagen
            { location: [59.9139, 10.7522], size: 0.03 }, // Oslo
            { location: [60.1699, 24.9384], size: 0.03 }, // Helsinki
            { location: [59.3293, 18.0686], size: 0.03 }, // Stockholm
            { location: [41.0082, 28.9784], size: 0.03 }, // Istanbul
            { location: [55.7558, 37.6176], size: 0.03 }, // Moscow
            { location: [12.9716, 77.5946], size: 0.03 }, // Bangalore
            { location: [23.1291, 113.2644], size: 0.03 }, // Guangzhou
            { location: [-22.9068, -43.1729], size: 0.03 }, // Rio de Janeiro
            { location: [24.7136, 46.6753], size: 0.03 }, // Riyadh
            { location: [35.6892, 51.389], size: 0.03 }, // Tehran
            { location: [31.7683, 35.2137], size: 0.03 }, // Jerusalem
            { location: [25.2048, 55.2708], size: 0.03 }, // Dubai
            { location: [-36.8485, 174.7633], size: 0.03 }, // Auckland
            { location: [-41.2865, 174.7762], size: 0.03 }, // Wellington
            { location: [-37.8136, 144.9631], size: 0.03 }, // Melbourne
            { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
            { location: [-34.6118, -58.396], size: 0.03 }, // Buenos Aires
            { location: [-15.7801, -47.9292], size: 0.03 }, // Brasília
            { location: [33.5731, -7.5898], size: 0.03 }, // Casablanca
            { location: [30.0444, 31.2357], size: 0.03 }, // Cairo
            { location: [-1.2921, 36.8219], size: 0.03 }, // Nairobi
            { location: [6.5244, 3.3792], size: 0.03 }, // Lagos
            { location: [-33.9249, 18.4241], size: 0.03 }, // Cape Town
            { location: [-26.2041, 28.0473], size: 0.03 }, // Johannesburg
            { location: [13.7563, 100.5018], size: 0.03 }, // Bangkok
            { location: [37.5665, 126.978], size: 0.03 }, // Seoul
            { location: [19.076, 72.8777], size: 0.03 }, // Mumbai
            { location: [28.6139, 77.209], size: 0.03 }, // New Delhi
            { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
            { location: [22.3193, 114.1694], size: 0.03 }, // Hong Kong
            { location: [39.9042, 116.4074], size: 0.03 }, // Beijing
            { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
            { location: [59.437, 24.7536], size: 0.03 }, // Tallinn
            { location: [59.9311, 10.7579], size: 0.03 }, // Oslo
            { location: [55.7558, 37.6176], size: 0.03 }, // Moscow
            { location: [40.4168, -3.7038], size: 0.03 }, // Madrid
            { location: [41.9028, 12.4964], size: 0.03 }, // Rome
            { location: [52.52, 13.405], size: 0.03 }, // Berlin
            { location: [48.8566, 2.3522], size: 0.03 }, // Paris
            { location: [51.5074, -0.1278], size: 0.03 }, // London
            { location: [34.0522, -118.2437], size: 0.03 }, // Los Angeles
            { location: [41.8781, -87.6298], size: 0.03 }, // Chicago
            { location: [25.7617, -80.1918], size: 0.03 }, // Miami
            { location: [19.4326, -99.1332], size: 0.03 }, // Mexico City
            { location: [43.6532, -79.3832], size: 0.03 }, // Toronto
            { location: [40.7128, -74.006], size: 0.03 }, // New York
            { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
          ],
          onRender: (state: Record<string, unknown>) => {
            state.phi = currentPhi;
            state.theta = currentTheta;
            if (!isDragging) {
              currentPhi += 0.01;
            }
          },
        });

        globeRef.current = globe;
        console.log("Globe created successfully!");
      } catch (error) {
        console.error("Error creating globe:", error);
      }
    };

    window.addEventListener("resize", onResize);

    // Initialize immediately
    setTimeout(() => {
      onResize();
    }, 100);

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
  }, []); // Remove dependencies to prevent re-creation

  // Mouse handlers for globe interaction
  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !globeRef.current) return;

      const deltaX = e.clientX - lastMousePosition.x;
      const deltaY = e.clientY - lastMousePosition.y;

      // Update the local variables that the globe uses
      setPhi((prev) => prev + deltaX * 0.01);
      setTheta((prev) => Math.max(0.1, Math.min(1.5, prev + deltaY * 0.01)));

      setLastMousePosition({ x: e.clientX, y: e.clientY });
    },
    [isDragging, lastMousePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Separate effect for mouse events to prevent globe recreation
  useEffect(() => {
    // Add event listeners
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <section
      className={`py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Globe on the left */}
          <div className="relative flex justify-center lg:justify-start py-6 sm:py-8 lg:py-0 mt-4 sm:mt-0">
            <div className="relative w-full max-w-md h-96 sm:h-[28rem] lg:h-[500px] bg-white overflow-hidden border-2 border-green-200 rounded-lg">
              <canvas
                ref={canvasRef}
                className="w-full h-full bg-white cursor-grab active:cursor-grabbing"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  background: "white",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content on the right */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Connecting the World
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Our global presence spans across continents, bringing innovative
                solutions and sustainable practices to communities worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Global Reach
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-black">
                  Operating in over 50 countries with local expertise and global
                  standards.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Sustainable Impact
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-black">
                  Committed to environmental responsibility and positive social
                  impact.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Innovation Hub
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-black">
                  Cutting-edge technology and research driving the future of
                  agriculture.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    Community Focus
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-black">
                  Empowering local communities through education and sustainable
                  practices.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Explore Our Global Impact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
