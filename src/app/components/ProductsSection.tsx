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
        name: "Hass Avocados",
        emoji: "🥑",
        image: "/avocadoes/hass.jpeg",
        description:
          "Premium Hass avocados with creamy texture and rich, nutty flavor",
        details:
          "Sourced from high-altitude farms in Ethiopia. Our Hass avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
        varieties: ["Hass"],
        season: "Year-round",
        color: "from-green-400 to-green-600",
      },
      {
        id: 2,
        name: "Fuerte Avocados",
        emoji: "🥑",
        image: "/avocadoes/fuerte.jpeg",
        description:
          "Smooth-skinned Fuerte avocados with buttery texture and mild flavor",
        details:
          "Sourced from high-altitude farms in Ethiopia. Our Fuerte avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
        varieties: ["Fuerte"],
        season: "Year-round",
        color: "from-green-400 to-green-600",
      },
      {
        id: 3,
        name: "Pinkerton Avocados",
        emoji: "🥑",
        image: "/avocadoes/pinkerton.jpg",
        description:
          "Elongated Pinkerton avocados with excellent shelf life and creamy flesh",
        details:
          "Sourced from high-altitude farms in Ethiopia. Our Pinkerton avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
        varieties: ["Pinkerton"],
        season: "Year-round",
        color: "from-green-400 to-green-600",
      },
      {
        id: 4,
        name: "Ettinger Avocados",
        emoji: "🥑",
        image: "/avocadoes/ettinger.jpg",
        description:
          "Smooth green Ettinger avocados with delicate flavor and firm texture",
        details:
          "Sourced from high-altitude farms in Ethiopia. Our Ettinger avocados are hand-picked at optimal ripeness and packed in protective packaging to maintain quality during transit.",
        varieties: ["Ettinger"],
        season: "Year-round",
        color: "from-green-400 to-green-600",
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
            Discover our premium avocados, carefully sourced from dedicated
            farmers in Ethiopia. Each avocado meets the highest international
            quality standards and is delivered with our commitment to freshness
            and excellence.
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
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                72hrs
              </div>
              <div className="text-gray-700 font-medium">Delivery Time</div>
              <div className="text-gray-500 text-sm">
                Fast processing and shipping
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-700 font-medium">Partner Farmers</div>
              <div className="text-gray-500 text-sm">
                Direct relationships with Ethiopian farmers
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
