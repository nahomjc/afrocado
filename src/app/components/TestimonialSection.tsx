"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Fresh Market Europe",
      role: "Procurement Director",
      image: "👩‍💼",
      rating: 5,
      text: "Afrocado has been our trusted partner for over 3 years. Their premium quality fruits and vegetables consistently exceed our expectations. The cold chain logistics ensure our customers receive the freshest produce possible.",
      country: "🇩🇪 Germany",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      company: "Middle East Imports",
      role: "CEO",
      image: "👨‍💼",
      rating: 5,
      text: "The quality and reliability of Afrocado's export services are unmatched. Their attention to detail in packaging and shipping has helped us build a strong reputation in the Middle Eastern market.",
      country: "🇦🇪 UAE",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Tropical Foods Inc.",
      role: "Quality Manager",
      image: "👩‍🔬",
      rating: 5,
      text: "Working with Afrocado has transformed our business. Their certified organic produce and sustainable farming practices align perfectly with our company values. Highly recommended!",
      country: "🇺🇸 USA",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-green-700 text-sm font-medium">
              💬 Customer Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Global Partners</span> Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why leading companies worldwide trust Afrocado for their
            premium fruit and vegetable export needs.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-8">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-green-200 text-6xl font-serif">
                  "
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-10 leading-relaxed italic text-lg font-medium pr-8">
                  {testimonial.text}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-sm font-bold text-green-600 mb-1">
                      {testimonial.company}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconChevronLeft size={20} className="text-green-600" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconChevronRight size={20} className="text-green-600" />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {testimonial.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-bold text-green-600">
                          {testimonial.company}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 font-medium">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Trusted by Global Leaders
            </h3>
            <p className="text-green-100 text-lg">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-white mb-3">98%</div>
              <div className="text-white font-semibold">
                Customer Satisfaction
              </div>
              <div className="text-green-100 text-sm mt-1">Rated Excellent</div>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-white mb-3">500+</div>
              <div className="text-white font-semibold">Happy Clients</div>
              <div className="text-green-100 text-sm mt-1">Worldwide</div>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-white mb-3">25+</div>
              <div className="text-white font-semibold">Countries Served</div>
              <div className="text-green-100 text-sm mt-1">Global Reach</div>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-white mb-3">15+</div>
              <div className="text-white font-semibold">Years Experience</div>
              <div className="text-green-100 text-sm mt-1">
                Industry Leaders
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
