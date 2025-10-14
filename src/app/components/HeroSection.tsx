"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Variants } from "framer-motion";
import { useCallback, useMemo } from "react";
import { IconTractor, IconWorld, IconStar } from "@tabler/icons-react";

export default function HeroSection() {
  const router = useRouter();

  // Enhanced floating variants with creative animations
  const floatingVariants = useMemo(
    () => ({
      float: {
        y: [-15, 15, -15],
        x: [-5, 5, -5],
        opacity: [0.7, 1, 0.7],
        scale: [0.9, 1.1, 0.9],
        rotate: [-5, 5, -5],
        transition: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      floatSlow: {
        y: [-10, 10, -10],
        x: [-3, 3, -3],
        opacity: [0.6, 0.95, 0.6],
        scale: [0.95, 1.05, 0.95],
        rotate: [-3, 3, -3],
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      floatGentle: {
        y: [-8, 8, -8],
        x: [-2, 2, -2],
        opacity: [0.5, 0.9, 0.5],
        scale: [0.98, 1.02, 0.98],
        rotate: [-2, 2, -2],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
      floatBounce: {
        y: [-20, 20, -20],
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.2, 0.8],
        rotate: [-10, 10, -10],
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
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/25 to-cyan-200/25 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced Floating Fruits with Interactive Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced Primary fruits with interactive effects */}
        <motion.div
          className="absolute top-24 left-1/4 text-4xl will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="float"
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))`,
          }}
        >
          🥑
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatSlow"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 15px rgba(251, 191, 36, 0.4))`,
          }}
        >
          🥭
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-3xl will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatGentle"
          whileHover={{ scale: 1.2, rotate: 12 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 15px rgba(249, 115, 22, 0.4))`,
          }}
        >
          🍊
        </motion.div>

        {/* Enhanced Secondary fruits with creative animations */}
        <motion.div
          className="absolute top-1/2 right-1/5 text-2xl hidden md:block will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatBounce"
          whileHover={{ scale: 1.4, rotate: 20 }}
          whileTap={{ scale: 0.7 }}
          style={{
            filter: `drop-shadow(0 0 12px rgba(239, 68, 68, 0.3))`,
          }}
        >
          🍅
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/3 text-3xl hidden lg:block will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatSlow"
          whileHover={{ scale: 1.3, rotate: -15 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 18px rgba(168, 85, 247, 0.4))`,
          }}
        >
          🍇
        </motion.div>

        <motion.div
          className="absolute top-1/6 left-1/6 text-2xl hidden sm:block will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatGentle"
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 12px rgba(34, 197, 94, 0.3))`,
          }}
        >
          🍎
        </motion.div>

        {/* New Creative Elements */}
        <motion.div
          className="absolute top-1/4 left-1/2 text-2xl hidden lg:block will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="floatBounce"
          whileHover={{ scale: 1.5, rotate: 25 }}
          whileTap={{ scale: 0.7 }}
          style={{
            filter: `drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))`,
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute bottom-1/2 right-1/6 text-2xl hidden xl:block will-change-transform cursor-pointer"
          variants={floatingVariants as Variants}
          animate="float"
          whileHover={{ scale: 1.3, rotate: -20 }}
          whileTap={{ scale: 0.8 }}
          style={{
            filter: `drop-shadow(0 0 12px rgba(16, 185, 129, 0.3))`,
          }}
        >
          🌱
        </motion.div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Enhanced Right Content - Image with Creative Effects */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              {/* Enhanced Professional Border Container */}
              <motion.div
                className="relative group"
                animate={{
                  rotateY: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Enhanced Green Border Background with Animation */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #4ade80, #10b981, #4ade80)",
                      "linear-gradient(45deg, #10b981, #059669, #10b981)",
                      "linear-gradient(45deg, #4ade80, #10b981, #4ade80)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Additional Glow Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-300 to-emerald-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

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

                      {/* Enhanced Professional Badge with Animation */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="relative"
                          initial={{ scale: 0, opacity: 0, rotate: -180 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {/* Enhanced Badge Background with Glow */}
                          <motion.div
                            className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg px-3 py-2 shadow-lg border-2 border-yellow-300"
                            animate={{
                              boxShadow: [
                                "0 4px 15px rgba(251, 191, 36, 0.3)",
                                "0 8px 25px rgba(251, 191, 36, 0.5)",
                                "0 4px 15px rgba(251, 191, 36, 0.3)",
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="flex items-center space-x-2">
                              <motion.span
                                className="text-lg"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                🏆
                              </motion.span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-gray-800 leading-tight">
                                  PREMIUM
                                </span>
                                <span className="text-xs font-semibold text-yellow-800 leading-tight">
                                  QUALITY
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Enhanced Quality Certification Badge */}
                      <div className="absolute bottom-4 left-4">
                        <motion.div
                          className="relative"
                          initial={{ scale: 0, opacity: 0, x: -50 }}
                          animate={{ scale: 1, opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.7,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-3 py-2 shadow-lg border-2 border-green-400"
                            animate={{
                              boxShadow: [
                                "0 4px 15px rgba(34, 197, 94, 0.3)",
                                "0 8px 25px rgba(34, 197, 94, 0.5)",
                                "0 4px 15px rgba(34, 197, 94, 0.3)",
                              ],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="flex items-center space-x-2">
                              <motion.span
                                className="text-white text-sm"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                ✓
                              </motion.span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white leading-tight">
                                  CERTIFIED
                                </span>
                                <span className="text-xs text-green-100 leading-tight">
                                  ORGANIC
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* New Creative Floating Elements */}
                      <motion.div
                        className="absolute top-1/2 left-2 text-2xl"
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 360, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.3, rotate: 180 }}
                      >
                        ✨
                      </motion.div>

                      <motion.div
                        className="absolute top-1/3 right-2 text-xl"
                        animate={{
                          y: [10, -10, 10],
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.4 }}
                      >
                        🌟
                      </motion.div>

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
              className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2 mb-6 shadow-lg border border-green-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 15px rgba(34, 197, 94, 0.2)",
                  "0 8px 25px rgba(34, 197, 94, 0.3)",
                  "0 4px 15px rgba(34, 197, 94, 0.2)",
                ],
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                className="text-green-700 text-sm font-medium flex items-center space-x-2"
                animate={{ x: [0, 2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  🌍
                </motion.span>
                <span>Exporting to 10+ Countries</span>
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              <motion.span
                className="text-green-600"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.5)",
                    "0 0 0px rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Ethiopia&apos;s Premier
              </motion.span>
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "linear-gradient(45deg, #1f2937, #374151, #1f2937)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Avocado Source
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Your trusted partner for quality you can count on. We combine
              farmer-direct sourcing with smart logistics to guarantee
              freshness, reduce costs, and get you the best of Ethiopia—faster.
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
                <motion.button
                  className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                  onClick={useCallback(
                    (e: React.MouseEvent) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push("/products-view");
                    },
                    [router]
                  )}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(34, 197, 94, 0.3)",
                      "0 8px 25px rgba(34, 197, 94, 0.5)",
                      "0 4px 15px rgba(34, 197, 94, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    boxShadow: "0 12px 35px rgba(34, 197, 94, 0.6)",
                  }}
                  aria-label="Contact us for more information"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10 flex items-center space-x-2">
                    <motion.span
                      animate={{ rotate: [0, 360, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      📞
                    </motion.span>
                    <span>Contact Us Now</span>
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button
                  className="relative bg-white hover:bg-green-50 text-green-600 hover:text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden border-2 border-green-600 hover:border-green-700"
                  onClick={useCallback(
                    (e: React.MouseEvent) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push("/products-view");
                    },
                    [router]
                  )}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(34, 197, 94, 0.2)",
                      "0 8px 25px rgba(34, 197, 94, 0.3)",
                      "0 4px 15px rgba(34, 197, 94, 0.2)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    boxShadow: "0 12px 35px rgba(34, 197, 94, 0.4)",
                  }}
                  aria-label="View our premium avocado products"
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10 flex items-center space-x-2">
                    <motion.span
                      animate={{ rotate: [0, 360, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      🥑
                    </motion.span>
                    <span>View Products</span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced Animated Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 text-center lg:text-left"
              variants={fadeInUp}
            >
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-green-600"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34, 197, 94, 0)",
                      "0 0 15px rgba(34, 197, 94, 0.4)",
                      "0 0 0px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  15
                </motion.div>
                <div className="text-gray-600 text-sm flex items-center justify-center lg:justify-start space-x-1">
                  <motion.div
                    animate={{ rotate: [0, 360, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <IconTractor size={16} className="text-green-600" />
                  </motion.div>
                  <span>Partner Farmers</span>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-green-600"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34, 197, 94, 0)",
                      "0 0 15px rgba(34, 197, 94, 0.4)",
                      "0 0 0px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  10+
                </motion.div>
                <div className="text-gray-600 text-sm flex items-center justify-center lg:justify-start space-x-1">
                  <motion.div
                    animate={{ rotate: [0, -360, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <IconWorld size={16} className="text-green-600" />
                  </motion.div>
                  <span>Countries</span>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-emerald-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-green-600"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34, 197, 94, 0)",
                      "0 0 15px rgba(34, 197, 94, 0.4)",
                      "0 0 0px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  2+
                </motion.div>
                <div className="text-gray-600 text-sm flex items-center justify-center lg:justify-start space-x-1">
                  <motion.div
                    animate={{ rotate: [0, 360, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <IconStar size={16} className="text-green-600" />
                  </motion.div>
                  <span>Years Experience</span>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-teal-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
