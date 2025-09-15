"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-green-800 flex items-center">
                <span className="text-4xl mr-2">🥑</span>
                Afrocado
              </h1>
              <p className="text-sm text-gray-600 -mt-1">
                Premium Export Company
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.a
                href="#home"
                className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About
              </motion.a>
              <motion.a
                href="#products"
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Products
              </motion.a>
              <motion.a
                href="#contact"
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact
              </motion.a>
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get Quote
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-900 focus:outline-none focus:text-green-900">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
