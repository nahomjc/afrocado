"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  IconX,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconHeart,
  IconShare,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";

export default function SocialPromoModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before (localStorage)
    const hasShownBefore = localStorage.getItem("socialPromoShown");

    if (!hasShownBefore) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Mark as shown so it doesn't appear again for this session
    localStorage.setItem("socialPromoShown", "true");
  }, []);

  const socialLinks = useMemo(
    () => ({
      tiktok: "https://tiktok.com/@afrocado",
      instagram: "https://instagram.com/afrocado",
      facebook: "https://facebook.com/afrocado",
      twitter: "https://twitter.com/afrocado",
      youtube: "https://youtube.com/@afrocado",
    }),
    []
  );

  const handleSocialClick = useCallback(
    (platform: string) => {
      // Track social media clicks (you can add analytics here)
      console.log(`Social click: ${platform}`);
      window.open(socialLinks[platform as keyof typeof socialLinks], "_blank");
    },
    [socialLinks]
  );

  const socialPlatforms = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:bg-white transition-colors cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{ zIndex: 1000 }}
            >
              <IconX size={16} className="text-gray-600 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Header with Image */}
            <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 overflow-hidden">
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

              {/* Optimized Floating Elements - Reduced animations */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Optimized Floating Hearts - Reduced from 5 to 2 */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/50 will-change-transform"
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${30 + i * 40}%`,
                      top: `${40 + i * 20}%`,
                    }}
                  >
                    <IconHeart size={18} />
                  </motion.div>
                ))}

                {/* Simplified Single Star Animation */}
                <motion.div
                  className="absolute text-yellow-300 will-change-transform"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    right: "20%",
                    top: "35%",
                  }}
                >
                  <IconStar size={16} />
                </motion.div>
              </div>

              {/* Header Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-3 sm:p-6">
                <motion.div
                  className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <motion.h2
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Join Our Community! 🌍
                  </motion.h2>
                  <motion.p
                    className="text-white/90 text-sm xs:text-base sm:text-lg"
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
            <div className="p-4 sm:p-6 md:p-8">
              {/* Main Message */}
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                  Stay Connected with Afrocado! 🥑
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                  Get the latest updates on our premium African produce,
                  behind-the-scenes content, farming tips, and exclusive offers.
                  Join thousands of followers who love fresh, quality produce!
                </p>
              </motion.div>

              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {socialPlatforms.map((social, index) => (
                  <motion.button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform)}
                    className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex flex-col items-center space-y-1 sm:space-y-2 shadow-lg transition-all duration-300 hover:shadow-xl group`}
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
                    {/* Removed continuous rotation for better performance */}
                    <social.icon size={18} className="sm:w-6 sm:h-6" />
                    <div className="text-center">
                      <div className="font-semibold text-xs sm:text-sm">
                        {social.name}
                      </div>
                      <div className="text-xs opacity-80">
                        {social.followers}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Special Offer Banner */}
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center relative overflow-hidden"
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
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                    <IconShare size={16} className="text-white sm:w-5 sm:h-5" />
                    <span className="font-bold text-white text-sm sm:text-base md:text-lg">
                      Special Offer!
                    </span>
                    <IconShare size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    Follow us on any platform and get <strong>10% off</strong>{" "}
                    your first order!
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                <motion.button
                  onClick={() => handleSocialClick("tiktok")}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-1 sm:space-x-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconBrandTiktok size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Follow on TikTok</span>
                </motion.button>

                <motion.button
                  onClick={handleClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 border border-gray-200"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm sm:text-base">Maybe Later</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
