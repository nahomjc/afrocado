"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconPlayerPlay,
  IconClock,
  IconUsers,
  IconTrophy,
  IconLeaf,
} from "@tabler/icons-react";

export default function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // YouTube video ID - replace with your actual video ID
  const youtubeVideoId = "J1ZDRabV8EI"; // Replace with your video ID

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 py-24 lg:py-32 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        {/* Organic shapes inspired by fruits */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-green-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-green-300/40 rounded-full blur-lg"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-green-200 shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-green-700 text-sm font-medium flex items-center gap-2">
              <IconPlayerPlay size={16} />
              Our Story in Motion
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            From Farm to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Global Table
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Watch our journey of bringing premium African produce to the world.
            Experience our commitment to quality, sustainability, and excellence
            through our comprehensive company presentation.
          </motion.p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Side - Video Player */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-2"
            variants={slideInLeft}
          >
            <div className="relative group">
              {/* Video Container with Organic Design */}
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-50"></div>
                <div className="absolute -bottom-2 -left-6 w-7 h-7 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-60"></div>

                {/* Main Video Frame */}
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-green-100">
                  {/* Video Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-inner">
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
                        title="Afrocado - Premium African Produce Export Presentation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsVideoLoaded(true)}
                      />
                    </div>

                    {/* Loading Overlay */}
                    {!isVideoLoaded && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-gray-900/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="bg-white/10 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-white/20"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <IconPlayerPlay
                            size={48}
                            className="text-green-400"
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Video Badges */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg px-3 py-2 shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <span className="text-white text-sm font-bold">HD</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-1 space-y-8"
            variants={slideInRight}
          >
            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Watch Our Story?
              </h3>

              {[
                {
                  icon: <IconTrophy className="text-green-500" size={24} />,
                  title: "Quality Excellence",
                  description:
                    "See our rigorous quality control processes and international certifications in action.",
                },
                {
                  icon: <IconLeaf className="text-emerald-500" size={24} />,
                  title: "Sustainable Practices",
                  description:
                    "Discover our commitment to eco-friendly farming and sustainable supply chains.",
                },
                {
                  icon: <IconUsers className="text-green-600" size={24} />,
                  title: "Global Impact",
                  description:
                    "Learn how we're connecting African farmers with international markets.",
                },
                {
                  icon: <IconClock className="text-emerald-600" size={24} />,
                  title: "Innovation Timeline",
                  description:
                    "Follow our journey of continuous improvement and technological advancement.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-green-100 hover:bg-white/80 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold mb-2">Ready to Learn More?</h4>
              <p className="text-green-100 mb-4">
                Watch our comprehensive presentation to understand our mission,
                values, and the impact we&apos;re making in the global produce
                market.
              </p>
              <motion.button
                className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconPlayerPlay size={20} />
                Start Watching
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
