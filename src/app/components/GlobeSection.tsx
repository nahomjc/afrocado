"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface GlobeSectionProps {
  className?: string;
}

export default function GlobeSection({ className = "" }: GlobeSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 2.5,
      baseColor: [0.2, 0.7, 0.4],
      markerColor: [0.6, 1.0, 0.7],
      glowColor: [0.3, 0.8, 0.5],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.03 },
        { location: [51.5074, -0.1278], size: 0.03 },
        { location: [35.6762, 139.6503], size: 0.03 },
        { location: [-33.8688, 151.2093], size: 0.03 },
        { location: [48.8566, 2.3522], size: 0.03 },
        { location: [55.7558, 37.6176], size: 0.03 },
        { location: [39.9042, 116.4074], size: 0.03 },
        { location: [-22.9068, -43.1729], size: 0.03 },
        { location: [19.4326, -99.1332], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    // Set canvas background to white
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className={`py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Globe on the left */}
          <div className="relative flex justify-center lg:justify-start py-6 sm:py-8 lg:py-0 mt-4 sm:mt-0">
            <div className="relative w-full max-w-md h-96 sm:h-[28rem] lg:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-2xl bg-white"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  background: "white",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none rounded-2xl" />
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
