"use client";

import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconMapPin,
  IconShield,
  IconAward,
  IconCertificate,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-28 h-28 mr-3">
                <Image
                  src="/about-img/logo1-removebg-preview.png"
                  alt="AFROCADDO Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Afrocado
                </h3>
                <p className="text-xs text-gray-400">Premium Export Company</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Leading the global market in premium African produce. Connecting
              the world&apos;s finest fruits and vegetables from Africa to
              international markets with uncompromising quality.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                  <IconMail size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-white font-medium text-sm">
                    info@afrocado.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                  <IconPhone size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-white font-medium text-sm">
                    +254 20 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                  <IconMapPin size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white font-medium text-sm">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandFacebook size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandLinkedin size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandTwitter size={16} className="text-white" />
              </motion.a>
            </motion.div>
          </div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-xs">🥑</span>
              </div>
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                "Premium Avocados",
                "Citrus Fruits",
                "Fresh Tomatoes",
                "Spices & Herbs",
                "Tropical Fruits",
                "Leafy Greens",
              ].map((product, index) => (
                <motion.li
                  key={product}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group"
                  >
                    <IconArrowRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {product}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <IconShield size={14} className="text-white" />
              </div>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Export Services",
                "Quality Control",
                "Cold Chain Logistics",
                "Custom Packaging",
                "Supply Chain Management",
                "Market Research",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <IconArrowRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center mr-2">
                <IconAward size={14} className="text-white" />
              </div>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "About Us",
                "Privacy Policy",
                "Terms of Service",
                "Certifications",
                "Careers",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >
                    <IconArrowRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">
              Our Certifications
            </h3>
            <p className="text-gray-300 text-sm">
              Trusted by international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <motion.div
              className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <IconCertificate size={20} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">ISO 22000</p>
                <p className="text-xs text-gray-300">Food Safety</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <IconCheck size={20} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">Organic</p>
                <p className="text-xs text-gray-300">Certified</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <IconShield size={20} className="text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">HACCP</p>
                <p className="text-xs text-gray-300">Compliant</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-400 text-sm">
                &copy; 2025 Afrocado Fruit and Vegetable Export Company. All
                rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Connecting Africa&apos;s finest produce to the world
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs justify-end">
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                  <IconCheck size={8} className="text-white" />
                </div>
                <span className="text-gray-300">ISO 22000</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center">
                  <IconCheck size={8} className="text-white" />
                </div>
                <span className="text-gray-300">Organic</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <IconCheck size={8} className="text-white" />
                </div>
                <span className="text-gray-300">HACCP</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
