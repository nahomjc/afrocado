"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconWorld,
  IconAward,
  IconTruck,
  IconCheck,
  IconTarget,
  IconEye,
  IconLeaf,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
} from "@tabler/icons-react";

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aboutImages = [
    {
      id: 1,
      src: "/about-img/unnamed23.png",
      alt: "Afrocado team with cargo plane and fresh produce",
      title: "Global Export Excellence",
      description:
        "Our dedicated team showcasing premium African produce ready for international markets",
    },
    {
      id: 2,
      src: "/about-img/unnamed.png",
      alt: "Afrocado team members with fresh fruits and vegetables",
      title: "Quality Team, Quality Produce",
      description:
        "Meet our passionate team members who ensure the highest standards in every shipment",
    },
    {
      id: 3,
      src: "/about-img/image-2 (2).png",
      alt: "Afrocado team members with fresh fruits and vegetables",
      title: "Quality Team, Quality Produce",
      description:
        "Meet our passionate team members who ensure the highest standards in every shipment",
    },
    {
      id: 4,
      src: "/about-img/unnamed (17).png",
      alt: "Afrocado team with diverse fresh produce",
      title: "Diverse & Fresh Selection",
      description:
        "From traditional Ethiopian attire to modern export standards - celebrating our heritage",
    },
    {
      id: 5,
      src: "/about-img/unnamed (18).png",
      alt: "Afrocado team showcasing fresh produce baskets",
      title: "Heritage Meets Innovation",
      description:
        "Bridging traditional farming practices with modern export excellence",
    },
    {
      id: 6,
      src: "/about-img/unnamed (20).png",
      alt: "Afrocado team with fresh produce",
      title: "Premium Quality Produce",
      description: "Hand-selected fruits and vegetables from our partner farms",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + aboutImages.length) % aboutImages.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <IconLeaf className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            About{" "}
            <span className="text-green-600 relative">
              Afrocado
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Established in 2023, Afrocado Export was founded by two friends,
            Yonathan and Daniel, with a shared vision: to transform
            Ethiopia&apos;s agricultural potential into global opportunity. We
            are more than just an export company; we are a bridge connecting the
            fertile highlands of Ethiopia to the world&apos;s most demanding
            markets.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Mission & Vision Cards */}
          <div className="space-y-8">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <IconTarget className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is built on two pillars: adding sustainable value
                for our farming partners and driving the modernization of
                Ethiopian agriculture. We saw the dedication of local farmers
                and the unparalleled quality of their produce, but also the gap
                between their hard work and the international market.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <IconEye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Afrocado Export, you are our top priority. We leverage strong
                relationships with our farming networks and modern technology to
                ensure you receive farm-fresh, high-quality produce within the
                shortest possible time. We are committed to being the reliable,
                professional, and innovative partner you can count on for the
                finest agricultural products from the heart of Ethiopia.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Afrocado */}
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-green-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <IconAward className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Why Choose Afrocado?
              </h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-200 transition-colors">
                  <IconCheck className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Direct partnerships with 50+ dedicated farmers
                </span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-200 transition-colors">
                  <IconShieldCheck className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Focus on operational efficiency and careful logistics
                  management
                </span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-200 transition-colors">
                  <IconTruck className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Delivery within 72 hours with efficient logistics
                </span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-200 transition-colors">
                  <IconUsers className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Custom packaging solutions for different market requirements
                </span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-green-200 transition-colors">
                  <IconTrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  24/7 customer support and quality assurance
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Farm Photos Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Farm Partners</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the beautiful farms where our premium avocados are grown by
              our dedicated partner farmers across Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/afrcado-farm/photo_2025-10-20_09-32-41.jpg"
                alt="Afrocado Farm Partner 1"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-semibold text-lg">Premium Avocado Farm</h4>
                <p className="text-sm text-gray-200">Ethiopian Highlands</p>
              </div>
            </motion.div>

            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/afrcado-farm/photo_2025-10-20_09-32-44.jpg"
                alt="Afrocado Farm Partner 2"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-semibold text-lg">Sustainable Farming</h4>
                <p className="text-sm text-gray-200">Partner Farm</p>
              </div>
            </motion.div>

            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/afrcado-farm/photo_2025-10-20_09-32-45.jpg"
                alt="Afrocado Farm Partner 3"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-semibold text-lg">Quality Production</h4>
                <p className="text-sm text-gray-200">Ethiopian Excellence</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Carousel Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Global Team</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our cargo operations to quality control, discover the
              dedicated people and premium produce that make Afrocado a trusted
              global leader in agricultural exports.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconChevronLeft size={24} className="text-green-600" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconChevronRight size={24} className="text-green-600" />
            </motion.button>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: -currentImageIndex * 100 + "%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {aboutImages.map((image, index) => (
                  <div key={image.id} className="flex-shrink-0 w-full relative">
                    <div className="relative h-[500px] md:h-[700px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <h4 className="text-3xl md:text-4xl font-bold mb-4">
                            {image.title}
                          </h4>
                          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                            {image.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-green-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <IconWorld className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Reach
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Exporting to over 10+ countries across Europe including Russia,
              Asia, and the Middle East. Our established distribution networks
              ensure timely delivery and optimal product freshness.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <IconAward className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Rigorous quality control processes from farm to port. Our quality
              control team conducts comprehensive testing for pesticides,
              contaminants, and nutritional content.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <IconTruck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Logistics
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              State-of-the-art cold chain management with temperature-controlled
              storage and transportation. Real-time monitoring ensures optimal
              conditions throughout the supply chain.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
