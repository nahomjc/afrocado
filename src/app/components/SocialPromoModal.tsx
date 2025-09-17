"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  IconX,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconHeart,
  IconShare,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";

export default function SocialPromoModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before (localStorage)
    const hasShownBefore = localStorage.getItem("socialPromoShown");

    if (!hasShownBefore) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as shown so it doesn't appear again for this session
    localStorage.setItem("socialPromoShown", "true");
  };

  const handleSocialClick = (platform: string) => {
    // Track social media clicks (you can add analytics here)
    console.log(`Social click: ${platform}`);

    // Open social media links
    const links = {
      tiktok: "https://tiktok.com/@afrocado",
      instagram: "https://instagram.com/afrocado",
      facebook: "https://facebook.com/afrocado",
      twitter: "https://twitter.com/afrocado",
      youtube: "https://youtube.com/@afrocado",
    };

    window.open(links[platform as keyof typeof links], "_blank");
  };

  const socialPlatforms = [
    {
      name: "TikTok",
      icon: IconBrandTiktok,
      color: "from-black to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-black",
      platform: "tiktok",
      followers: "50K+",
    },
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      platform: "instagram",
      followers: "25K+",
    },
    {
      name: "Facebook",
      icon: IconBrandFacebook,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      platform: "facebook",
      followers: "15K+",
    },
    {
      name: "YouTube",
      icon: IconBrandYoutube,
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800",
      platform: "youtube",
      followers: "10K+",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{ zIndex: 1000 }}
            >
              <IconX size={20} className="text-gray-600" />
            </motion.button>

            {/* Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-emerald-500/70 to-yellow-400/60 z-10"></div>

              {/* Main Image */}
              <Image
                src="/about-img/image-1.png"
                alt="Beautiful African woman with fresh produce"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Floating Hearts */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/60"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.random() * 10 - 5, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                  >
                    <IconHeart size={16 + Math.random() * 8} />
                  </motion.div>
                ))}

                {/* Floating Stars */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-yellow-300"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut",
                    }}
                    style={{
                      right: `${10 + Math.random() * 30}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                  >
                    <IconStar size={12 + Math.random() * 6} />
                  </motion.div>
                ))}
              </div>

              {/* Header Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-6">
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Join Our Community! 🌍
                  </motion.h2>
                  <motion.p
                    className="text-white/90 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Follow us for fresh content and exclusive updates
                  </motion.p>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              {/* Main Message */}
              <motion.div
                className="text-center mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Stay Connected with Afrocado! 🥑
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get the latest updates on our premium African produce,
                  behind-the-scenes content, farming tips, and exclusive offers.
                  Join thousands of followers who love fresh, quality produce!
                </p>
              </motion.div>

              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {socialPlatforms.map((social, index) => (
                  <motion.button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform)}
                    className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-xl p-4 flex flex-col items-center space-y-2 shadow-lg transition-all duration-300 hover:shadow-xl group`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <social.icon size={24} />
                    </motion.div>
                    <div className="text-center">
                      <div className="font-semibold text-sm">{social.name}</div>
                      <div className="text-xs opacity-80">
                        {social.followers}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Special Offer Banner */}
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-center relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-50"
                  animate={{
                    x: [-100, 100, -100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <IconShare size={20} className="text-white" />
                    <span className="font-bold text-white text-lg">
                      Special Offer!
                    </span>
                    <IconShare size={20} className="text-white" />
                  </div>
                  <p className="text-white text-sm">
                    Follow us on any platform and get <strong>10% off</strong>{" "}
                    your first order!
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.button
                  onClick={() => handleSocialClick("tiktok")}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconBrandTiktok size={20} />
                  <span>Follow on TikTok</span>
                </motion.button>

                <motion.button
                  onClick={handleClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-200"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Maybe Later
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
