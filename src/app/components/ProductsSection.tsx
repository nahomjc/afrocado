"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  IconEye,
  IconStar,
  IconArrowRight,
  IconCheck,
} from "@tabler/icons-react";

export default function ProductsSection() {
  const router = useRouter();
  // Removed modal-related state since we're using a detail page now

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

  const handleViewDetails = useCallback(
    (product: (typeof products)[0]) => {
      router.push(`/products/${product.id}`);
    },
    [router]
  );

  const handleViewAllProducts = useCallback(() => {
    router.push("/products-view");
  }, [router]);
  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Premium Avocados",
        emoji: "🥑",
        image:
          "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&h=600&fit=crop&crop=center",
        description:
          "Hass and Fuerte varieties with perfect ripeness and exceptional taste",
        details:
          "Sourced from high-altitude farms in Ethiopia and Tanzania. Our avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
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
    ],
    []
  );

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
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Image Section */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={`Premium ${product.name} - High quality African produce for export`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  width={400}
                  height={224}
                  priority={false}
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
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <IconEye size={18} />
                  <span>View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.button
            onClick={handleViewAllProducts}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-lg">View All Products</span>
            <IconArrowRight size={20} />
          </motion.button>
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Organic Certified</div>
              <div className="text-gray-500 text-sm">
                All our products are certified organic
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
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
