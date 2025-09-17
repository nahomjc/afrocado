"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Variants } from "framer-motion";
import { useCallback, useMemo } from "react";

export default function HeroSection() {
  const router = useRouter();

  // Optimized floating variants - simplified animations, longer durations
  const floatingVariants = useMemo(
    () => ({
      float: {
        y: [-12, 12, -12],
        opacity: [0.6, 1, 0.6],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      floatSlow: {
        y: [-8, 8, -8],
        opacity: [0.5, 0.9, 0.5],
        transition: {
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      floatGentle: {
        y: [-6, 6, -6],
        opacity: [0.4, 0.8, 0.4],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative bg-white text-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Optimized Floating Fruits - Reduced from 14 to 6 elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary fruits - always visible */}
        <motion.div
          className="absolute top-24 left-1/4 text-4xl will-change-transform"
          variants={floatingVariants as Variants}
          animate="float"
        >
          🥑
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl will-change-transform"
          variants={floatingVariants as Variants}
          animate="floatSlow"
        >
          🥭
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-3xl will-change-transform"
          variants={floatingVariants as Variants}
          animate="floatGentle"
        >
          🍊
        </motion.div>

        {/* Secondary fruits - hidden on mobile for better performance */}
        <motion.div
          className="absolute top-1/2 right-1/5 text-2xl hidden md:block will-change-transform"
          variants={floatingVariants as Variants}
          animate="float"
        >
          🍅
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/3 text-3xl hidden lg:block will-change-transform"
          variants={floatingVariants as Variants}
          animate="floatSlow"
        >
          🍇
        </motion.div>

        <motion.div
          className="absolute top-1/6 left-1/6 text-2xl hidden sm:block will-change-transform"
          variants={floatingVariants as Variants}
          animate="floatGentle"
        >
          🍎
        </motion.div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Right Content - Image (shows first on mobile) */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={fadeInUp}
          >
            <div className="relative">
              {/* Professional Border Container */}
              <motion.div className="relative group">
                {/* Green Border Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                {/* Main Image Container */}
                <div className="relative">
                  {/* Inner Border with Shadow */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2">
                    {/* Image with Professional Frame */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/unnamed (13).png"
                        alt="Beautiful woman with fresh African produce"
                        width={600}
                        height={700}
                        className="object-cover w-full h-auto"
                        priority
                      />

                      {/* Professional Badge */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          {/* Badge Background */}
                          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg px-3 py-2 shadow-lg border-2 border-yellow-300">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">🏆</span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-800 leading-tight">
                                  PREMIUM
                                </span>
                                <span className="text-xs font-semibold text-yellow-800 leading-tight">
                                  QUALITY
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Quality Certification Badge */}
                      <div className="absolute bottom-4 left-4">
                        <motion.div
                          className="relative"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.7,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-3 py-2 shadow-lg border-2 border-green-400">
                            <div className="flex items-center space-x-2">
                              <span className="text-white text-sm">✓</span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white leading-tight">
                                  CERTIFIED
                                </span>
                                <span className="text-xs text-green-100 leading-tight">
                                  ORGANIC
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Subtle Overlay for Premium Look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Professional Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-green-500 rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-green-500 rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-green-500 rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-green-500 rounded-br-lg"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-green-700 text-sm font-medium">
                🌍 Exporting to 25+ Countries
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Premium <span className="text-green-600">African</span>
              <br />
              <span className="text-yellow-600">Fruit & Vegetable</span>
              <br />
              Export Excellence
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Leading the global market in premium African produce. From farm to
              table, we ensure the highest quality standards with our
              state-of-the-art cold chain logistics and rigorous quality control
              processes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={useCallback(
                    (e: React.MouseEvent) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push("/products-view");
                    },
                    [router]
                  )}
                >
                  View Exported Products
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 text-center lg:text-left"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600 text-sm">Partner Farms</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-green-600">25+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
