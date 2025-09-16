"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconArrowLeft,
  IconCalendar,
  IconUser,
  IconTag,
  IconSearch,
  IconClock,
  IconEye,
  IconChevronRight,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of African Agriculture: Sustainable Export Practices",
      excerpt:
        "Exploring how sustainable farming practices are revolutionizing African agriculture and creating new opportunities for international export markets.",
      content: "Full article content would go here...",
      author: "Kwame Asante",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Agriculture",
      tags: ["Sustainability", "Export", "Farming"],
      image: "/about-img/image-1.png",
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Cold Chain Logistics: Ensuring Freshness from Farm to Table",
      excerpt:
        "A deep dive into our state-of-the-art cold chain logistics system that maintains product quality throughout the entire export journey.",
      content: "Full article content would go here...",
      author: "Aisha Okafor",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Logistics",
      tags: ["Cold Chain", "Quality", "Technology"],
      image: "/about-img/image-2 (2).png",
      views: 980,
      featured: false,
    },
    {
      id: 3,
      title: "Organic Certification: Meeting International Standards",
      excerpt:
        "Understanding the rigorous process of organic certification and how it opens doors to premium international markets.",
      content: "Full article content would go here...",
      author: "David Kimani",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Certification",
      tags: ["Organic", "Standards", "Certification"],
      image: "/about-img/unnamed (17).png",
      views: 750,
      featured: false,
    },
    {
      id: 4,
      title: "Market Trends: African Produce in Global Demand",
      excerpt:
        "Analyzing current market trends and the growing global demand for premium African fruits and vegetables.",
      content: "Full article content would go here...",
      author: "Kwame Asante",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Market Analysis",
      tags: ["Trends", "Global Market", "Demand"],
      image: "/about-img/unnamed (18).png",
      views: 1100,
      featured: false,
    },
    {
      id: 5,
      title: "Partner Farm Spotlight: Success Stories from the Field",
      excerpt:
        "Celebrating our partner farms and sharing inspiring success stories from farmers across Africa.",
      content: "Full article content would go here...",
      author: "Aisha Okafor",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "Partnerships",
      tags: ["Partners", "Success Stories", "Farming"],
      image: "/about-img/unnamed (20).png",
      views: 650,
      featured: false,
    },
    {
      id: 6,
      title: "Quality Control: Our Multi-Stage Inspection Process",
      excerpt:
        "A behind-the-scenes look at our comprehensive quality control process that ensures only the best products reach our customers.",
      content: "Full article content would go here...",
      author: "David Kimani",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Quality",
      tags: ["Quality Control", "Inspection", "Standards"],
      image: "/about-img/unnamed (13).png",
      views: 820,
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Agriculture",
    "Logistics",
    "Certification",
    "Market Analysis",
    "Partnerships",
    "Quality",
  ];

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.button
              onClick={() => router.back()}
              className="inline-flex items-center text-green-100 hover:text-white mb-8 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </motion.button>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Industry Insights
              <br />
              <span className="text-yellow-300">& Knowledge Hub</span>
            </motion.h1>

            <motion.p
              className="text-xl text-green-100 max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Stay updated with the latest trends, insights, and stories from
              the world of African agriculture and international export.
            </motion.p>

            {/* Search Bar */}
            <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
              <div className="relative">
                <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white text-gray-900 placeholder-white focus:ring-4 focus:ring-white/30 focus:outline-none text-lg font-medium"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featuredPost && !searchTerm && selectedCategory === "All" && (
            <motion.div
              className="mb-16"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <IconUser className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <IconCalendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <IconClock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                      <IconChevronRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <IconEye className="w-4 h-4 mr-1" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <IconUser className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <IconCalendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <IconClock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <IconChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            className="text-center mt-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest industry insights,
                market trends, and company updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <motion.button
                  className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
