"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconLeaf,
  IconWorld,
  IconTruck,
  IconAward,
  IconApple,
  IconCherry,
  IconCircle,
  IconCarrot,
} from "@tabler/icons-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  useEffect(() => {
    const loadingTexts = [
      "Initializing Systems...",
      "Loading Premium Products...",
      "Connecting to Global Markets...",
      "Preparing Export Solutions...",
      "Finalizing Setup...",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-20 md:left-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [-15, 15, -15],
          x: [-8, 8, -8],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-16 right-8 sm:top-20 sm:right-10 md:top-40 md:right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [15, -15, 15],
          x: [8, -8, 8],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-8 left-1/4 sm:bottom-10 md:bottom-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [-10, 10, -10],
          x: [-3, 3, -3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-4 sm:gap-8 lg:gap-16 py-4 sm:py-8">
          {/* Left Side - Logo and Brand */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto"
            variants={logoVariants as Variants}
            initial="initial"
            animate="animate"
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
              <Image
                src="/about-img/logo1-removebg-preview.png"
                alt="AFROCADDO Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Brand Text */}
            <div className="text-center mt-3 sm:mt-6">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Afrocado
              </motion.h1>
              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-green-200 font-light tracking-wide px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Premium Export Company
              </motion.p>
              <motion.div
                className="w-16 xs:w-20 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-3 sm:mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Loading Content */}
          <motion.div
            className="flex-1 max-w-xs xs:max-w-sm sm:max-w-md w-full"
            variants={textVariants as Variants}
            initial="initial"
            animate="animate"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-white/20 shadow-2xl">
              {/* Loading Status */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-500/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 lg:mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <IconLeaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-300" />
                </motion.div>

                <motion.p
                  key={currentText}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-2 px-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentText}
                </motion.p>

                <p className="text-green-200/80 text-xs sm:text-sm md:text-base lg:text-lg px-2">
                  Please wait while we prepare your experience
                </p>
              </div>

              {/* Progress Section */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200 text-xs sm:text-sm font-medium">
                      Loading Progress
                    </span>
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      {progress}%
                    </span>
                  </div>

                  <div className="bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 h-full rounded-full shadow-lg"
                      variants={progressVariants}
                      initial="initial"
                      animate="animate"
                    />
                  </div>
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-3 lg:pt-4">
                  <motion.div
                    className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 p-2 sm:p-2 lg:p-3 bg-white/5 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <IconWorld className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-200 text-xs sm:text-sm lg:text-sm truncate">
                      Global Reach
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 p-2 sm:p-2 lg:p-3 bg-white/5 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 }}
                  >
                    <IconAward className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-200 text-xs sm:text-sm lg:text-sm truncate">
                      Premium Quality
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 p-2 sm:p-2 lg:p-3 bg-white/5 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9 }}
                  >
                    <IconTruck className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-200 text-xs sm:text-sm lg:text-sm truncate">
                      Fast Delivery
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 p-2 sm:p-2 lg:p-3 bg-white/5 rounded-lg sm:rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1 }}
                  >
                    <IconLeaf className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-green-200 text-xs sm:text-sm lg:text-sm truncate">
                      Fresh Products
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Loading Indicator */}
              <motion.div
                className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-6 lg:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Product Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-20 md:left-20 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-green-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center"
          animate={{
            y: [-10, 10, -10],
            x: [-3, 3, -3],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconApple className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-300" />
        </motion.div>
        <motion.div
          className="absolute top-12 right-12 sm:top-16 sm:right-16 md:top-24 md:right-32 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-yellow-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center"
          animate={{
            y: [10, -10, 10],
            x: [3, -3, 3],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconCherry className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-yellow-300" />
        </motion.div>
        <motion.div
          className="absolute bottom-16 left-12 sm:bottom-20 sm:left-16 md:bottom-32 md:left-24 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-purple-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center"
          animate={{
            y: [-8, 8, -8],
            x: [-2, 2, -2],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-purple-300" />
        </motion.div>
        <motion.div
          className="absolute bottom-12 right-12 sm:bottom-16 sm:right-16 md:bottom-28 md:right-24 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-orange-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center"
          animate={{
            y: [8, -8, 8],
            x: [2, -2, 2],
            rotate: [1, -1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconCarrot className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-orange-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}
