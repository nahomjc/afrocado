"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Fresh Market Europe",
      role: "Procurement Director",
      image: "👩‍💼",
      rating: 5,
      text: "Afrocado has been our trusted partner for over 3 years. Their premium quality fruits and vegetables consistently exceed our expectations. The cold chain logistics ensure our customers receive the freshest produce possible.",
      country: "🇩🇪 Germany"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      company: "Middle East Imports",
      role: "CEO",
      image: "👨‍💼",
      rating: 5,
      text: "The quality and reliability of Afrocado's export services are unmatched. Their attention to detail in packaging and shipping has helped us build a strong reputation in the Middle Eastern market.",
      country: "🇦🇪 UAE"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Tropical Foods Inc.",
      role: "Quality Manager",
      image: "👩‍🔬",
      rating: 5,
      text: "Working with Afrocado has transformed our business. Their certified organic produce and sustainable farming practices align perfectly with our company values. Highly recommended!",
      country: "🇺🇸 USA"
    },
    {
      id: 4,
      name: "James Thompson",
      company: "Global Fresh Ltd.",
      role: "Operations Director",
      image: "👨‍💻",
      rating: 5,
      text: "Afrocado's export network is impressive. They've helped us expand into new markets with their comprehensive logistics support and consistent product quality. A true industry leader.",
      country: "🇬🇧 UK"
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      company: "Asian Premium Foods",
      role: "Import Manager",
      image: "👩‍💼",
      rating: 5,
      text: "The exotic fruits from Afrocado are a hit in our Japanese market. Their understanding of international quality standards and timely delivery makes them our preferred supplier.",
      country: "🇯🇵 Japan"
    },
    {
      id: 6,
      name: "Pierre Dubois",
      company: "French Gourmet",
      role: "Head Chef",
      image: "👨‍🍳",
      rating: 5,
      text: "As a chef, I demand the finest ingredients. Afrocado delivers exceptional quality that enhances our culinary creations. Their premium produce is worth every penny.",
      country: "🇫🇷 France"
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            Discover why leading companies worldwide trust Afrocado for their premium fruit and vegetable export needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    {testimonial.company}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Customer Satisfaction</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
