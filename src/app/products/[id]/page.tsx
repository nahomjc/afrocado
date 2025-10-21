"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  IconArrowLeft,
  IconCheck,
  IconStar,
  IconMapPin,
  IconCalendar,
  IconTruck,
  IconShield,
  IconEye,
} from "@tabler/icons-react";

// Product data - in a real app, this would come from an API
const products = [
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
];

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const [product, setProduct] = useState<(typeof products)[0] | null>(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    const productId = parseInt(params.id);
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct || null);
  }, [params.id]);

  const handleRequestSample = () => {
    setShowPhoneNumber(true);
  };

  const handleBack = () => {
    router.back();
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <button
            onClick={handleBack}
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
          >
            <IconArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.button
            onClick={handleBack}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors group"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconArrowLeft
              size={20}
              className="group-hover:text-green-600 transition-colors"
            />
            <span className="font-medium">Back to Products</span>
          </motion.button>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
              {/* Left Column - Product Image and Details */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Product Image Card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`Premium ${product.name} - Detailed view of high quality African produce`}
                      className="w-full h-full object-cover"
                      width={600}
                      height={320}
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <span className="text-gray-800 text-sm font-medium flex items-center">
                        <IconStar size={14} className="text-yellow-500 mr-1" />
                        {product.season}
                      </span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <div className="mt-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <IconCheck size={20} className="text-green-600 mr-3" />
                    Product Details
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.details}
                  </p>
                </div>

                {/* Available Varieties */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <IconStar size={20} className="text-yellow-500 mr-3" />
                    Available Varieties
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.varieties.map((variety, index) => (
                      <motion.div
                        key={index}
                        className="bg-white border border-yellow-200 rounded-lg p-3 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-yellow-800 font-medium text-sm">
                          {variety}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Season Information */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <IconCalendar size={20} className="text-blue-500 mr-3" />
                    Season & Availability
                  </h3>
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-semibold text-lg">
                      {product.season}
                    </p>
                    <p className="text-blue-600 text-sm mt-1">
                      Fresh harvest available throughout the season
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Quality Standards and Features */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* Quality Standards */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <IconShield size={20} className="text-green-600 mr-3" />
                    Quality Standards
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Quality Assurance Standards",
                      "Ethiopian Agricultural Excellence",
                      "International Quality Standards",
                      "Premium Grade Certification",
                    ].map((standard, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <IconCheck size={18} className="text-green-600" />
                        <span className="text-gray-700 font-medium">
                          {standard}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Shipping & Logistics */}
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <IconTruck size={20} className="text-purple-600 mr-3" />
                    Shipping & Logistics
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Efficient Logistics Management",
                      "72hrs Delivery Time",
                      "Real-time Tracking",
                      "Global Delivery Network",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <IconCheck size={18} className="text-purple-600" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Origin Information */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <IconMapPin size={20} className="text-orange-500 mr-3" />
                    Origin & Sourcing
                  </h3>
                  <div className="bg-white border border-orange-200 rounded-lg p-4">
                    <p className="text-orange-800 font-semibold text-lg mb-2">
                      Premium Ethiopian Farms
                    </p>
                    <p className="text-orange-600 text-sm leading-relaxed">
                      Sourced from 50+ dedicated partner farms in Ethiopia. Each
                      farm follows sustainable farming practices and maintains
                      the highest quality standards for premium avocado
                      production.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="px-8 lg:px-12 pb-8 lg:pb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              {!showPhoneNumber ? (
                <motion.button
                  onClick={handleRequestSample}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <IconEye size={20} />
                  <span>Request Sample</span>
                </motion.button>
              ) : (
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconCheck size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Contact Us for Sample
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Call us now to request a sample of {product.name}
                    </p>
                  </div>

                  <motion.a
                    href="tel:+254700000000"
                    className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-6 h-6">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <span>+254 700 000 000</span>
                  </motion.a>

                  <p className="text-sm text-gray-500 mt-4">
                    Available Monday - Friday, 8:00 AM - 6:00 PM EAT
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
