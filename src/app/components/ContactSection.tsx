"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-green-200 bg-opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-emerald-200 bg-opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to source premium African produce? Contact us today for
            quotes, samples, and partnership opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <span className="text-green-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@afrocado.com</p>
                    <p className="text-gray-600">sales@afrocado.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <span className="text-green-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+254 20 123 4567 (Kenya)</p>
                    <p className="text-gray-600">+1 (555) 123-4567 (USA)</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <span className="text-green-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">Afrocado Export House</p>
                    <p className="text-gray-600">Westlands Business District</p>
                    <p className="text-gray-600">Nairobi, Kenya 00100</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <span className="text-green-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <motion.button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📋 Request Product Catalog
                </motion.button>
                <motion.button
                  className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📞 Schedule a Call
                </motion.button>
                <motion.button
                  className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📦 Request Samples
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements, expected volumes, and any specific needs..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h3>
            <p className="text-gray-600">
              Visit our headquarters in Nairobi, Kenya
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.017!2d36.7827847!3d-1.3028617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Afrocado Export House Location"
              ></iframe>

              {/* Overlay with Location Info */}
              <motion.div
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Afrocado Export House
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Westlands Business District
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Nairobi, Kenya</p>
                  </div>
                </div>
              </motion.div>

              {/* Get Directions Button */}
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="https://maps.app.goo.gl/fWVq2X14pq7BRr8x8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-sm">Get Directions</span>
                </motion.a>
              </motion.div>

              {/* Map Controls Overlay */}
              <div className="absolute top-4 right-4 space-y-2">
                <motion.button
                  className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Full Screen"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/fWVq2X14pq7BRr8x8",
                      "_blank"
                    )
                  }
                >
                  <div className="text-gray-600 text-sm font-bold">⛶</div>
                </motion.button>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <motion.div
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Free Parking
                    </h5>
                    <p className="text-sm text-gray-600">
                      Secure parking available on-site
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Public Transport
                    </h5>
                    <p className="text-sm text-gray-600">
                      Bus stop 2 minutes walk away
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Airport Access
                    </h5>
                    <p className="text-sm text-gray-600">
                      15 minutes from Jomo Kenyatta
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
