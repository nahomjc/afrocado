"use client";

import { useEffect, useState } from "react";

export default function EarthSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Left side - Interactive 3D Globe */}
          <div className="flex justify-center items-center py-8 lg:py-0">
            <div className="relative">
              {/* React Globe Container */}
              <div
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl relative"
                style={{
                  boxShadow:
                    "0 0 80px rgba(59, 130, 246, 0.5), 0 0 160px rgba(59, 130, 246, 0.3), 0 0 240px rgba(59, 130, 246, 0.2)",
                }}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white text-lg">Loading 3D Earth...</p>
                    </div>
                  </div>
                )}

                {!isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-full earth-3d">
                    {/* Ocean Base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-500 to-emerald-700 rounded-full"></div>

                    {/* Realistic Continents */}
                    <div className="absolute inset-0 rounded-full">
                      {/* Africa - Central and prominent */}
                      <div className="absolute top-1/2 left-1/2 w-20 h-32 bg-gradient-to-b from-lime-500 to-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-12 continent-africa"></div>

                      {/* Europe - Above Africa */}
                      <div className="absolute top-1/3 left-1/2 w-12 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-15 continent-europe"></div>

                      {/* Asia - Large continent to the right */}
                      <div className="absolute top-1/3 right-1/4 w-24 h-20 bg-gradient-to-b from-green-500 to-teal-600 rounded-full transform rotate-10 continent-asia"></div>
                      <div className="absolute top-1/2 right-1/6 w-16 h-12 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full transform rotate-25 continent-asia-extension"></div>

                      {/* North America - Top left */}
                      <div className="absolute top-1/4 left-1/4 w-20 h-16 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full transform rotate-40 continent-north-america"></div>
                      <div className="absolute top-1/3 left-1/6 w-12 h-8 bg-gradient-to-b from-lime-400 to-green-500 rounded-full transform rotate-55 continent-north-america-extension"></div>

                      {/* South America - Bottom left */}
                      <div className="absolute bottom-1/3 left-1/3 w-10 h-24 bg-gradient-to-b from-green-500 to-teal-600 rounded-full transform -rotate-15 continent-south-america"></div>

                      {/* Australia - Bottom right */}
                      <div className="absolute bottom-1/4 right-1/3 w-12 h-8 bg-gradient-to-b from-lime-500 to-green-600 rounded-full transform rotate-40 continent-australia"></div>

                      {/* Antarctica - Bottom with ice */}
                      <div className="absolute bottom-0 left-1/2 w-32 h-6 bg-gradient-to-b from-white to-blue-100 rounded-full transform -translate-x-1/2 translate-y-1 continent-antarctica"></div>

                      {/* Additional realistic landmasses */}
                      <div className="absolute top-1/6 right-1/2 w-6 h-4 bg-green-500/80 rounded-full transform rotate-30 continent-island"></div>
                      <div className="absolute bottom-1/6 left-1/2 w-7 h-4 bg-lime-500/80 rounded-full transform -rotate-30 continent-island"></div>
                      <div className="absolute top-2/3 left-1/6 w-4 h-3 bg-emerald-500/80 rounded-full transform rotate-60 continent-island"></div>
                    </div>

                    {/* Realistic Cloud Layer */}
                    <div className="absolute inset-2 rounded-full cloud-layer">
                      {/* Cloud formations with realistic patterns */}
                      <div className="absolute top-1/4 left-1/3 w-16 h-8 bg-white/25 rounded-full transform rotate-12 blur-sm cloud-formation"></div>
                      <div className="absolute top-1/2 right-1/4 w-20 h-10 bg-white/20 rounded-full transform -rotate-6 blur-sm cloud-formation"></div>
                      <div className="absolute bottom-1/3 left-1/4 w-12 h-6 bg-white/15 rounded-full transform rotate-45 blur-sm cloud-formation"></div>
                      <div className="absolute top-2/3 right-1/3 w-10 h-8 bg-white/20 rounded-full transform -rotate-12 blur-sm cloud-formation"></div>
                      <div className="absolute bottom-1/4 right-1/2 w-18 h-8 bg-white/15 rounded-full transform rotate-30 blur-sm cloud-formation"></div>

                      {/* Storm systems */}
                      <div className="absolute top-1/6 left-1/2 w-10 h-5 bg-gray-400/25 rounded-full transform rotate-60 blur-sm storm-system"></div>
                      <div className="absolute bottom-1/6 left-1/3 w-8 h-4 bg-gray-400/20 rounded-full transform -rotate-45 blur-sm storm-system"></div>
                    </div>

                    {/* Atmospheric Glow */}
                    <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-green-400/20 to-teal-500/20 blur-4xl atmospheric-glow"></div>
                    <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-green-300/15 to-emerald-400/15 blur-3xl atmospheric-glow"></div>

                    {/* Ocean Highlights and Reflections */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-300/20 via-transparent to-teal-500/20 ocean-highlights"></div>

                    {/* Polar Ice Caps */}
                    <div className="absolute top-0 left-1/2 w-32 h-8 bg-gradient-to-b from-white/60 to-blue-100/40 rounded-full transform -translate-x-1/2 -translate-y-1 polar-ice-cap"></div>

                    {/* City Markers */}
                    <div
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(12deg) translateY(-120px)",
                      }}
                    ></div>
                    <div
                      className="absolute top-1/3 left-1/2 w-2 h-2 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(15deg) translateY(-140px)",
                      }}
                    ></div>
                    <div
                      className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(-10deg) translateY(-130px)",
                      }}
                    ></div>
                    <div
                      className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(-40deg) translateY(-120px)",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(15deg) translateY(-100px)",
                      }}
                    ></div>
                    <div
                      className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 city-marker"
                      style={{
                        transform:
                          "translate(-50%, -50%) rotate(-40deg) translateY(-110px)",
                      }}
                    ></div>

                    {/* Rotation animation */}
                    <div
                      className="absolute inset-0 rounded-full animate-spin"
                      style={{ animationDuration: "30s" }}
                    >
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Particles around globe */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse floating-particle"
                  style={{
                    left: `${50 + 55 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    top: `${50 + 55 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
                  }}
                />
              ))}

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-24 bg-gradient-to-b from-cyan-400/30 to-transparent connection-line"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "0 0",
                      transform: `rotate(${i * 45}deg) translateY(-50%)`,
                      animation: `pulse 4s ease-in-out infinite ${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - We are content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                We are
              </h2>
              <div className="text-2xl lg:text-3xl font-light text-gray-300">
                <span className="block">Innovators</span>
                <span className="block">Visionaries</span>
                <span className="block">Connectors</span>
              </div>
            </div>

            <div className="space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
              <p>
                We are a global community of passionate individuals united by a
                shared vision of creating meaningful connections across the
                world.
              </p>

              <p>
                Our mission transcends borders, bringing together diverse
                perspectives, cultures, and ideas to build a more connected and
                sustainable future.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-400">
                    Countries Connected
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-sm text-gray-400">Active Members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Global Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Sustainable</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10">Join Our Mission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations for 3D Earth */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cloud-drift {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          100% {
            transform: translateX(20px) rotate(360deg);
          }
        }

        @keyframes atmospheric-glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        /* 3D Earth Styles */
        .earth-3d {
          transform-style: preserve-3d;
          box-shadow: 0 0 80px rgba(34, 197, 94, 0.6),
            0 0 160px rgba(16, 185, 129, 0.5), 0 0 240px rgba(20, 184, 166, 0.4),
            inset 0 0 80px rgba(255, 255, 255, 0.3),
            inset -20px -20px 40px rgba(0, 0, 0, 0.2);
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.3),
            transparent 60%
          );
          position: relative;
        }

        .earth-3d::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            transparent 20%,
            rgba(255, 255, 255, 0.15) 40%,
            transparent 60%
          );
          transform: rotateX(60deg) rotateY(0deg);
        }

        .earth-3d::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            rgba(6, 182, 212, 0.1),
            transparent
          );
          animation: rotate 25s linear infinite;
        }

        /* Continent Styles */
        .continent-africa {
          border-radius: 50% 30% 40% 60%;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .continent-europe {
          border-radius: 40% 60% 30% 50%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .continent-asia {
          border-radius: 30% 50% 60% 40%;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .continent-asia-extension {
          border-radius: 50% 40% 30% 60%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .continent-north-america {
          border-radius: 60% 40% 50% 30%;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .continent-north-america-extension {
          border-radius: 40% 60% 50% 30%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .continent-south-america {
          border-radius: 30% 60% 40% 50%;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .continent-australia {
          border-radius: 50% 30% 60% 40%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .continent-antarctica {
          border-radius: 50%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .continent-island {
          border-radius: 50%;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
        }

        /* Cloud Layer */
        .cloud-layer {
          animation: cloud-drift 20s ease-in-out infinite;
        }

        .cloud-formation {
          animation: cloud-drift 15s ease-in-out infinite;
          animation-delay: calc(var(--i, 0) * 2s);
        }

        .storm-system {
          animation: cloud-drift 8s ease-in-out infinite;
        }

        /* Atmospheric Effects */
        .atmospheric-glow {
          animation: atmospheric-glow 4s ease-in-out infinite;
        }

        .ocean-highlights {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(6, 182, 212, 0.1) 100%
          );
        }

        .polar-ice-cap {
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
        }

        /* City Markers */
        .city-marker {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          animation: pulse 2s ease-in-out infinite;
        }

        .floating-particle {
          animation: pulse 3s ease-in-out infinite;
        }

        .connection-line {
          animation: pulse 4s ease-in-out infinite;
        }

        /* 3D hover effects */
        .earth-3d:hover {
          box-shadow: 0 0 100px rgba(34, 197, 94, 0.7),
            0 0 200px rgba(16, 185, 129, 0.6), 0 0 300px rgba(20, 184, 166, 0.5),
            inset 0 0 100px rgba(255, 255, 255, 0.4),
            inset -25px -25px 50px rgba(0, 0, 0, 0.3);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-particle {
            display: none;
          }

          .connection-line {
            opacity: 0.5;
          }

          .earth-3d {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.5),
              0 0 80px rgba(16, 185, 129, 0.4),
              0 0 120px rgba(20, 184, 166, 0.3),
              inset 0 0 40px rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </section>
  );
}
