"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  IconX,
  IconEye,
  IconCheck,
  IconStar,
  IconMapPin,
  IconCalendar,
  IconTruck,
  IconShield,
} from "@tabler/icons-react";

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

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

  const handleViewDetails = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
    setShowPhoneNumber(false);
  };

  const handleRequestSample = () => {
    setShowPhoneNumber(true);
  };

  const closeModal = () => {
    setIsDetailModalOpen(false);
    setSelectedProduct(null);
    setShowPhoneNumber(false);
  };
  const products = [
    {
      id: 1,
      name: "Premium Avocados",
      emoji: "🥑",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&h=600&fit=crop&crop=center",
      description:
        "Hass and Fuerte varieties with perfect ripeness and exceptional taste",
      details:
        "Sourced from high-altitude farms in Kenya and Tanzania. Our avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
      varieties: ["Hass", "Fuerte", "Pinkerton", "Reed"],
      season: "Year-round",
      color: "from-green-400 to-green-600",
    },
    {
      id: 2,
      name: "Citrus Fruits",
      emoji: "🍊",
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&h=600&fit=crop&crop=center",
      description:
        "Fresh oranges, lemons, and grapefruits bursting with natural flavor",
      details:
        "Premium citrus varieties grown in optimal conditions. Our fruits are carefully selected for size, color, and sugar content to meet international standards.",
      varieties: [
        "Valencia Oranges",
        "Eureka Lemons",
        "Ruby Grapefruit",
        "Tangerines",
      ],
      season: "March - October",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 3,
      name: "Fresh Tomatoes",
      emoji: "🍅",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&h=600&fit=crop&crop=center",
      description:
        "Vine-ripened tomatoes perfect for fresh consumption and processing",
      details:
        "High-quality tomatoes grown in controlled environments. Available in various sizes and colors, perfect for both retail and food service industries.",
      varieties: ["Cherry", "Roma", "Beefsteak", "Plum"],
      season: "Year-round",
      color: "from-red-400 to-red-600",
    },
    {
      id: 4,
      name: "Spices & Herbs",
      emoji: "🌶️",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&crop=center",
      description:
        "Aromatic spices and fresh herbs to enhance your culinary creations",
      details:
        "Premium quality spices and herbs sourced from traditional growing regions. Dried and processed using traditional methods to preserve flavor and aroma.",
      varieties: ["Black Pepper", "Cardamom", "Cinnamon", "Turmeric"],
      season: "Year-round",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 5,
      name: "Tropical Fruits",
      emoji: "🥭",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&crop=center",
      description:
        "Exotic tropical fruits including mangoes, pineapples, and passion fruits",
      details:
        "Premium tropical fruits grown in ideal climatic conditions. Each fruit is carefully selected for optimal sweetness and texture.",
      varieties: [
        "Alphonso Mango",
        "Smooth Cayenne Pineapple",
        "Purple Passion Fruit",
        "Papaya",
      ],
      season: "Seasonal",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 6,
      name: "Leafy Greens",
      emoji: "🥬",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      description:
        "Fresh leafy vegetables including kale, spinach, and lettuce varieties",
      details:
        "Crisp, fresh leafy greens grown in controlled environments. Packed immediately after harvest to maintain maximum freshness and nutritional value.",
      varieties: ["Baby Spinach", "Kale", "Romaine Lettuce", "Arugula"],
      season: "Year-round",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Premium Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our extensive range of premium fruits and vegetables,
            carefully sourced from certified farms across Africa. Each product
            meets the highest international quality standards and is delivered
            with our commitment to freshness and excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image Section */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`Premium ${product.name} - High quality African produce for export`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width="400"
                  height="224"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Season Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                  <span className="text-gray-800 text-xs font-semibold flex items-center">
                    <IconStar size={12} className="text-yellow-500 mr-1" />
                    {product.season}
                  </span>
                </div>

                {/* Product Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-sm drop-shadow-md">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Details */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {product.details}
                </p>

                {/* Varieties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <IconCheck size={16} className="text-green-600 mr-2" />
                    Available Varieties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.varieties.map((variety, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 text-xs px-3 py-1.5 rounded-full border border-green-200 font-medium"
                      >
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  onClick={() => handleViewDetails(product)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconEye size={18} />
                  <span>View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Organic Certified</div>
              <div className="text-gray-500 text-sm">
                All our products are certified organic
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                48hrs
              </div>
              <div className="text-gray-700 font-medium">Harvest to Port</div>
              <div className="text-gray-500 text-sm">
                Fast processing and shipping
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                ISO 22000
              </div>
              <div className="text-gray-700 font-medium">
                Food Safety Certified
              </div>
              <div className="text-gray-500 text-sm">
                International quality standards
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {isDetailModalOpen && selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProduct.image}
                  alt={`Premium ${selectedProduct.name} - Detailed view of high quality African produce`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconX size={24} />
                </motion.button>

                {/* Product Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-white/90 text-lg drop-shadow-md">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Product Info */}
                  <div className="space-y-6">
                    {/* Product Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconCheck size={24} className="text-green-600 mr-3" />
                        Product Details
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProduct.details}
                      </p>
                    </div>

                    {/* Available Varieties */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconStar size={24} className="text-yellow-500 mr-3" />
                        Available Varieties
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProduct.varieties.map((variety, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center"
                          >
                            <span className="text-green-800 font-semibold">
                              {variety}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Season Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconCalendar
                          size={24}
                          className="text-blue-500 mr-3"
                        />
                        Season & Availability
                      </h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-blue-800 font-semibold text-lg">
                          {selectedProduct.season}
                        </p>
                        <p className="text-blue-600 text-sm mt-1">
                          Fresh harvest available throughout the season
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features & Benefits */}
                  <div className="space-y-6">
                    {/* Quality Standards */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconShield size={24} className="text-green-600 mr-3" />
                        Quality Standards
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <IconCheck size={20} className="text-green-600" />
                          <span className="text-gray-700">
                            ISO 22000 Food Safety Certified
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <IconCheck size={20} className="text-green-600" />
                          <span className="text-gray-700">
                            Organic Certified
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <IconCheck size={20} className="text-green-600" />
                          <span className="text-gray-700">HACCP Compliant</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <IconCheck size={20} className="text-green-600" />
                          <span className="text-gray-700">
                            EU & USDA Approved
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Shipping & Logistics */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconTruck size={24} className="text-purple-600 mr-3" />
                        Shipping & Logistics
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <IconCheck size={20} className="text-purple-600" />
                          <span className="text-gray-700">
                            Cold Chain Logistics
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <IconCheck size={20} className="text-purple-600" />
                          <span className="text-gray-700">
                            48hrs Harvest to Port
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <IconCheck size={20} className="text-purple-600" />
                          <span className="text-gray-700">
                            Real-time Tracking
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <IconCheck size={20} className="text-purple-600" />
                          <span className="text-gray-700">
                            Global Delivery Network
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Origin Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <IconMapPin
                          size={24}
                          className="text-orange-500 mr-3"
                        />
                        Origin & Sourcing
                      </h3>
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <p className="text-orange-800 font-semibold mb-2">
                          Premium African Farms
                        </p>
                        <p className="text-orange-600 text-sm">
                          Sourced from certified partner farms across Kenya,
                          Tanzania, and Uganda. Each farm follows sustainable
                          farming practices and maintains the highest quality
                          standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8">
                  {!showPhoneNumber ? (
                    <motion.button
                      onClick={handleRequestSample}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconEye size={20} />
                      <span>Request Sample</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconCheck size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Contact Us for Sample
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Call us now to request a sample of{" "}
                          {selectedProduct?.name}
                        </p>
                      </div>

                      <motion.a
                        href="tel:+254700000000"
                        className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                        </div>
                        <span className="text-lg">+254 700 000 000</span>
                      </motion.a>

                      <p className="text-sm text-gray-500 mt-3">
                        Available Monday - Friday, 8:00 AM - 6:00 PM EAT
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
