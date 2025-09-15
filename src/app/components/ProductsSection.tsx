"use client";

import { motion } from "framer-motion";

export default function ProductsSection() {
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
  const products = [
    {
      id: 1,
      name: "Premium Avocados",
      emoji: "🥑",
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative`}
              >
                <span className="text-8xl">{product.emoji}</span>
                <div className="absolute top-4 right-4 bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {product.season}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {product.details}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Available Varieties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.varieties.map((variety, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Request Quote
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
    </section>
  );
}
