"use client";

import { motion } from "framer-motion";
import {
  IconHome,
  IconArrowLeft,
  IconSearch,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.h1
              className="text-9xl md:text-[12rem] font-bold text-green-600 mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute -top-4 -right-4 text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🥑
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you&apos;re looking for seems to have vanished like a ripe
            avocado!
          </p>
          <p className="text-gray-500">
            Don&apos;t worry, our premium produce is still fresh and available.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <IconHome size={20} />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <IconArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors"
            >
              <Link href="/#products" className="block">
                <div className="text-2xl mb-2">🥑</div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Our Products
                </h4>
                <p className="text-sm text-gray-600">Premium African produce</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
            >
              <Link href="/#about" className="block">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900 mb-1">About Us</h4>
                <p className="text-sm text-gray-600">Our story and mission</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors"
            >
              <Link href="/#contact" className="block">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                <p className="text-sm text-gray-600">Get in touch with us</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <IconSearch size={20} className="text-yellow-600" />
              <h4 className="font-semibold text-gray-900">
                Looking for something specific?
              </h4>
            </div>
            <p className="text-gray-600 mb-4">
              Try searching for our products, services, or contact information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#products"
                className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <span>Browse Products</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <IconMail size={16} />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please{" "}
            <Link
              href="/#contact"
              className="text-green-600 hover:text-green-700 font-medium underline"
            >
              contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
