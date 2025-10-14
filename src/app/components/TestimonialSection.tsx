"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconRepeat,
  IconMessageCircle,
  IconShare,
  IconDots,
  IconCheck,
  IconSocial,
} from "@tabler/icons-react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      handle: "@sarahjohnson_fme",
      company: "Fresh Market Europe",
      role: "Procurement Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Afrocado has been our trusted partner for over 3 years. Their premium quality fruits and vegetables consistently exceed our expectations. The cold chain logistics ensure our customers receive the freshest produce possible. #FreshProduce #ExportQuality",
      country: "🇩🇪 Germany",
      timestamp: "2h",
      likes: 47,
      retweets: 12,
      replies: 8,
      verified: true,
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      handle: "@ahmedhassan_mei",
      company: "Middle East Imports",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality and reliability of Afrocado's export services are unmatched. Their attention to detail in packaging and shipping has helped us build a strong reputation in the Middle Eastern market. #ExportExcellence #QualityFirst",
      country: "🇦🇪 UAE",
      timestamp: "4h",
      likes: 89,
      retweets: 23,
      replies: 15,
      verified: true,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      handle: "@mariarodriguez_tfi",
      company: "Tropical Foods Inc.",
      role: "Quality Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Afrocado has transformed our business. Their certified organic produce and sustainable farming practices align perfectly with our company values. Highly recommended! #OrganicProduce #SustainableFarming",
      country: "🇺🇸 USA",
      timestamp: "6h",
      likes: 156,
      retweets: 34,
      replies: 22,
      verified: true,
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
    animate: { opacity: 1, y: 0 },
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
            className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-green-700 text-sm font-medium flex items-center space-x-2">
              <IconSocial size={16} /> Social Proof
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-600">Partners</span> Are Saying
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what industry leaders are sharing about their experience with
            Afrocado&apos;s premium export services.
          </p>
        </motion.div>

        {/* Desktop Grid View - Tweet Cards */}
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="p-6">
                {/* Tweet Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        {testimonial.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <IconCheck size={10} className="text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">
                        {testimonial.handle}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.timestamp}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <IconDots size={16} />
                  </button>
                </div>

                {/* Tweet Content */}
                <div className="mb-4">
                  <p className="text-gray-900 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>

                {/* Company Info */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.country}</p>
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <IconMessageCircle size={16} />
                      <span>{testimonial.replies}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                      <IconRepeat size={16} />
                      <span>{testimonial.retweets}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                      <IconHeart size={16} />
                      <span>{testimonial.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <IconShare size={16} />
                    </button>
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
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 min-h-[280px] flex flex-col">
                    {/* Tweet Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1">
                            <h4 className="font-bold text-gray-900 text-xs">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                <IconCheck size={8} className="text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-500 text-xs">
                            {testimonial.handle}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {testimonial.timestamp}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <IconDots size={14} />
                      </button>
                    </div>

                    {/* Tweet Content */}
                    <div className="mb-3 flex-1">
                      <p className="text-gray-900 text-xs leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Company Info */}
                    <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 font-medium">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.country}
                      </p>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="flex items-center justify-between text-gray-500 text-xs">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                          <IconMessageCircle size={14} />
                          <span>{testimonial.replies}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                          <IconRepeat size={14} />
                          <span>{testimonial.retweets}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                          <IconHeart size={14} />
                          <span>{testimonial.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                          <IconShare size={14} />
                        </button>
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
      </div>
    </section>
  );
}
