"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const floatingVariants = {
    float: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatReverse: {
      y: [15, -15, 15],
      x: [5, -5, 5],
      rotate: [2, -2, 2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatSlow: {
      y: [-10, 10, -10],
      x: [-3, 3, -3],
      rotate: [-1, 1, -1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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
      {/* Floating Fruits Across Hero Section - Minimal */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          variants={floatingVariants}
          animate="float"
        >
          🥑
        </motion.div>

        {/* Top Right */}
        <motion.div
          className="absolute top-24 right-32 text-4xl"
          variants={floatingVariants}
          animate="floatSlow"
        >
          🥭
        </motion.div>

        {/* Center Fruits */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl"
          variants={floatingVariants}
          animate="floatReverse"
        >
          🍊
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-16 -translate-y-8 text-2xl"
          variants={floatingVariants}
          animate="float"
        >
          🍅
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform translate-x-12 -translate-y-4 text-2xl"
          variants={floatingVariants}
          animate="floatSlow"
        >
          🍋
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          className="absolute bottom-32 left-24 text-3xl"
          variants={floatingVariants}
          animate="floatReverse"
        >
          🍇
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-28 right-24 text-3xl"
          variants={floatingVariants}
          animate="float"
        >
          🫑
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Content */}
          <motion.div className="text-center lg:text-left" variants={fadeInUp}>
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
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Request Quote
              </motion.button>
              <motion.button
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View Our Products
              </motion.button>
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

          {/* Right Content - Image */}
          <motion.div className="relative" variants={fadeInUp}>
            <div className="relative">
              {/* Main Image with Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200">
                <Image
                  src="/unnamed (13).png"
                  alt="Beautiful woman with fresh African produce"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
