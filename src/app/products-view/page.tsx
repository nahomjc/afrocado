"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import {
  IconArrowLeft,
  IconFilter,
  IconSearch,
  IconX,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  emoji: string;
  availability: string;
  origin: string;
  certifications: string[];
}

const products: Product[] = [
  // Avocados
  {
    id: "1",
    name: "Hass Avocados",
    category: "avocados",
    description:
      "Premium Hass avocados from our certified organic farms. Available year-round with consistent quality and size specifications.",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop&crop=center",
    emoji: "🥑",
    availability: "Year-round",
    origin: "Ethiopia, South Africa",
    certifications: ["Organic", "Fair Trade", "GlobalGAP"],
  },
  {
    id: "2",
    name: "Fuerte Avocados",
    category: "avocados",
    description:
      "Smooth-skinned Fuerte avocados with rich, buttery flavor. Perfect for international markets seeking premium quality.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop&crop=center",
    emoji: "🥑",
    availability: "Seasonal",
    origin: "Ethiopia, Tanzania",
    certifications: ["Organic", "GlobalGAP"],
  },

  // Mangoes
  {
    id: "3",
    name: "Kent Mangoes",
    category: "mangoes",
    description:
      "Sweet, juicy Kent mangoes with vibrant orange flesh. Harvested at peak ripeness for optimal flavor and nutrition.",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    emoji: "🥭",
    availability: "Seasonal",
    origin: "Ethiopia, Ghana",
    certifications: ["Organic", "Fair Trade"],
  },
  {
    id: "4",
    name: "Keitt Mangoes",
    category: "mangoes",
    description:
      "Large, sweet Keitt mangoes with excellent shelf life. Ideal for long-distance export to international markets.",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    emoji: "🥭",
    availability: "Seasonal",
    origin: "Ethiopia, South Africa",
    certifications: ["Organic", "GlobalGAP"],
  },
  {
    id: "5",
    name: "Tommy Atkins Mangoes",
    category: "mangoes",
    description:
      "Classic Tommy Atkins mangoes with firm texture and sweet taste. Popular choice for global distribution.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop&crop=center",
    emoji: "🥭",
    availability: "Seasonal",
    origin: "Ethiopia, Ghana",
    certifications: ["GlobalGAP"],
  },

  // Citrus Fruits
  {
    id: "6",
    name: "Valencia Oranges",
    category: "citrus",
    description:
      "Juicy Valencia oranges rich in vitamin C. Perfect for fresh consumption and juice production.",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&h=400&fit=crop&crop=center",
    emoji: "🍊",
    availability: "Year-round",
    origin: "South Africa, Morocco",
    certifications: ["Organic", "GlobalGAP"],
  },
  {
    id: "7",
    name: "Eureka Lemons",
    category: "citrus",
    description:
      "Premium Eureka lemons with high juice content and excellent acidity. Perfect for culinary and beverage applications.",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&h=400&fit=crop&crop=center",
    emoji: "🍋",
    availability: "Year-round",
    origin: "South Africa, Egypt",
    certifications: ["Organic", "GlobalGAP"],
  },
  {
    id: "8",
    name: "Persian Limes",
    category: "citrus",
    description:
      "Seedless Persian limes with bright green color and tangy flavor. Ideal for international export.",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&h=400&fit=crop&crop=center",
    emoji: "🍋",
    availability: "Year-round",
    origin: "Egypt, Morocco",
    certifications: ["GlobalGAP"],
  },

  // Vegetables
  {
    id: "9",
    name: "Cherry Tomatoes",
    category: "vegetables",
    description:
      "Sweet cherry tomatoes with vibrant red color and firm texture. Grown using sustainable farming practices.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=400&fit=crop&crop=center",
    emoji: "🍅",
    availability: "Year-round",
    origin: "Ethiopia, Morocco",
    certifications: ["Organic", "GlobalGAP"],
  },
  {
    id: "10",
    name: "Bell Peppers",
    category: "vegetables",
    description:
      "Colorful bell peppers in red, yellow, and green varieties. Rich in vitamins and perfect for fresh markets.",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&h=400&fit=crop&crop=center",
    emoji: "🫑",
    availability: "Year-round",
    origin: "Ethiopia, South Africa",
    certifications: ["Organic", "GlobalGAP"],
  },
  {
    id: "11",
    name: "Red Onions",
    category: "vegetables",
    description:
      "Premium red onions with mild flavor and excellent storage properties. Ideal for international distribution.",
    image:
      "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&h=400&fit=crop&crop=center",
    emoji: "🧅",
    availability: "Year-round",
    origin: "Egypt, Morocco",
    certifications: ["GlobalGAP"],
  },

  // Exotic Fruits
  {
    id: "12",
    name: "Passion Fruit",
    category: "exotic",
    description:
      "Tropical passion fruit with intense flavor and aromatic pulp. Exotic taste that captivates international markets.",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    emoji: "🥝",
    availability: "Seasonal",
    origin: "Ethiopia, Uganda",
    certifications: ["Organic", "Fair Trade"],
  },
  {
    id: "13",
    name: "Dragon Fruit",
    category: "exotic",
    description:
      "Unique dragon fruit with vibrant pink skin and sweet white flesh. Exotic appeal for premium markets.",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    emoji: "🐉",
    availability: "Seasonal",
    origin: "Ethiopia, South Africa",
    certifications: ["Organic"],
  },
  {
    id: "14",
    name: "Papaya",
    category: "exotic",
    description:
      "Sweet papaya with orange flesh and tropical flavor. Rich in vitamins and perfect for health-conscious consumers.",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    emoji: "🥭",
    availability: "Year-round",
    origin: "Ethiopia, Ghana",
    certifications: ["Organic", "GlobalGAP"],
  },
];

const categories = [
  { id: "all", name: "All Products", emoji: "🌍" },
  { id: "avocados", name: "Avocados", emoji: "🥑" },
  { id: "mangoes", name: "Mangoes", emoji: "🥭" },
  { id: "citrus", name: "Citrus Fruits", emoji: "🍊" },
  { id: "vegetables", name: "Vegetables", emoji: "🍅" },
  { id: "exotic", name: "Exotic Fruits", emoji: "🥝" },
];

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuoteRequest = (product: Product) => {
    setSelectedProduct(product);
    setShowQuoteModal(true);
  };

  const handleCloseModal = () => {
    setShowQuoteModal(false);
    setSelectedProduct(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-green-100 hover:text-white transition-colors mb-6"
            >
              <IconArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Exported Products
            </h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Discover our premium selection of African fruits and vegetables,
              carefully sourced and exported to international markets worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <IconFilter size={20} className="mr-2" />
              Filter by Category
            </button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                        selectedCategory === category.id
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span className="mr-2">{category.emoji}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0  bg-opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.availability}
                  </div>
                  <div className="absolute bottom-4 left-4 text-4xl opacity-80">
                    {product.emoji}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Origin:</span>
                      {product.origin}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleQuoteRequest(product)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <ChatBot />

      {/* Quote Request Modal */}
      <AnimatePresence>
        {showQuoteModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selectedProduct.emoji}</div>
                    <div>
                      <h2 className="text-2xl font-bold">Request Quote</h2>
                      <p className="text-green-100">
                        for {selectedProduct.name}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <IconX size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="max-w-2xl mx-auto">
                  {/* Product Details */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-4xl">{selectedProduct.emoji}</span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedProduct.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {selectedProduct.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedProduct.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      Get Your Quote
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0">
                          <IconMail className="text-green-600" size={24} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email Us</p>
                          <p className="text-gray-600">info@afrocado.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0">
                          <IconPhone className="text-green-600" size={24} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Call Us</p>
                          <p className="text-gray-600">+254 20 123 4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-shrink-0">
                          <IconMapPin className="text-green-600" size={24} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Visit Us</p>
                          <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-gray-600 text-sm mb-4">
                        Contact us for pricing, availability, and shipping
                        information for {selectedProduct.name}
                      </p>
                      <button
                        onClick={handleCloseModal}
                        className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
