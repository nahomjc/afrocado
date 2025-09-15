"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const aboutImages = [
    {
      id: 1,
      src: "/about-img/image-1.png",
      alt: "Afrocado team with cargo plane and fresh produce",
      title: "Global Export Excellence",
      description:
        "Our dedicated team showcasing premium African produce ready for international markets",
    },
    {
      id: 2,
      src: "/about-img/image-2 (2).png",
      alt: "Afrocado team members with fresh fruits and vegetables",
      title: "Quality Team, Quality Produce",
      description:
        "Meet our passionate team members who ensure the highest standards in every shipment",
    },
    {
      id: 3,
      src: "/about-img/unnamed (17).png",
      alt: "Afrocado team with diverse fresh produce",
      title: "Diverse & Fresh Selection",
      description:
        "From traditional Ethiopian attire to modern export standards - celebrating our heritage",
    },
    {
      id: 4,
      src: "/about-img/unnamed (18).png",
      alt: "Afrocado team showcasing fresh produce baskets",
      title: "Heritage Meets Innovation",
      description:
        "Bridging traditional farming practices with modern export excellence",
    },
    {
      id: 5,
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Afrocado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2008, Afrocado has grown to become one of
            Africa&apos;s leading fruit and vegetable export companies. We
            specialize in sourcing, processing, and distributing premium
            agricultural products from across the continent to global markets.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To bridge the gap between Africa&apos;s rich agricultural heritage
              and the world&apos;s growing demand for premium, fresh produce. We
              are committed to sustainable farming practices, fair trade, and
              delivering exceptional quality that exceeds international
              standards.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in African agricultural exports,
              recognized for our innovation, reliability, and contribution to
              sustainable food systems worldwide.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Afrocado?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Direct partnerships with 500+ certified organic farms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  ISO 22000 certified food safety management system
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  End-to-end cold chain logistics with real-time tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Custom packaging solutions for different market requirements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  24/7 customer support and quality assurance
                </span>
              </li>
            </ul>
          </div>
        </div>

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
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                className="flex"
                animate={{ x: -currentImageIndex * 100 + "%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {aboutImages.map((image, index) => (
                  <div key={image.id} className="flex-shrink-0 w-full relative">
                    <div className="relative h-[500px] md:h-[600px]">
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Reach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Exporting to over 25 countries across Europe, North America, Asia,
              and the Middle East. Our established distribution networks ensure
              timely delivery and optimal product freshness.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rigorous quality control processes from farm to port. Our
              certified laboratories conduct comprehensive testing for
              pesticides, contaminants, and nutritional content.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Logistics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              State-of-the-art cold chain management with temperature-controlled
              storage and transportation. Real-time monitoring ensures optimal
              conditions throughout the supply chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
