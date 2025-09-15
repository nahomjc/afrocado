"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing...",
    "Loading Premium Products...",
    "Connecting to Global Markets...",
    "Preparing Export Solutions...",
    "Almost Ready...",
  ];

  useEffect(() => {
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
        className="absolute top-20 left-20 w-20 h-20 bg-green-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-yellow-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full blur-xl"
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <div className="text-8xl mb-4">🥑</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Afrocado
          </h1>
          <p className="text-green-300 text-lg font-medium">
            Premium Export Company
          </p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mb-8"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p
            key={currentText}
            className="text-xl text-green-100 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentText}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-80 mx-auto"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white bg-opacity-20 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-green-400 to-emerald-400 h-full rounded-full"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <p className="text-green-200 text-sm">{progress}% Complete</p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Fruits */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🥑
        </motion.div>
        <motion.div
          className="absolute top-24 right-32 text-4xl"
          animate={{
            y: [15, -15, 15],
            x: [5, -5, 5],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🥭
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-24 text-3xl"
          animate={{
            y: [-10, 10, -10],
            x: [-3, 3, -3],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🍇
        </motion.div>
        <motion.div
          className="absolute bottom-28 right-24 text-3xl"
          animate={{
            y: [10, -10, 10],
            x: [3, -3, 3],
            rotate: [1, -1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🫑
        </motion.div>
      </div>
    </motion.div>
  );
}
