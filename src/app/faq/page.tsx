"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconHelp,
  IconArrowLeft,
  IconSearch,
  IconTruck,
  IconAward,
  IconCurrencyDollar,
  IconApple,
  IconHandClick,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function FAQPage() {
  const router = useRouter();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Shipping & Logistics",
      icon: IconTruck,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          question: "What countries do you export to?",
          answer:
            "We export to over 25 countries worldwide, including the United States, Canada, European Union, Middle East, and Asia. Our global network ensures reliable delivery to major international markets.",
        },
        {
          question: "What is your shipping timeline?",
          answer:
            "Shipping times vary by destination: 7-14 days for European markets, 10-21 days for North America, and 14-28 days for Asian markets. We use state-of-the-art cold chain logistics to maintain freshness throughout transit.",
        },
        {
          question: "Do you handle all shipping documentation?",
          answer:
            "Yes, we handle all export documentation including phytosanitary certificates, commercial invoices, packing lists, and customs declarations. Our experienced logistics team ensures smooth customs clearance.",
        },
        {
          question: "What is your cold chain process?",
          answer:
            "We maintain strict temperature control from farm to destination using refrigerated containers, temperature monitoring systems, and certified cold storage facilities to preserve product quality and extend shelf life.",
        },
      ],
    },
    {
      category: "Quality & Certifications",
      icon: IconAward,
      color: "from-yellow-500 to-yellow-600",
      questions: [
        {
          question: "What quality standards do you maintain?",
          answer:
            "We maintain rigorous quality control processes from farm to port, ensuring all our avocados meet international standards. Our focus is on operational efficiency and careful logistics management to deliver the finest agricultural products from Ethiopia.",
        },
        {
          question: "How do you ensure product quality?",
          answer:
            "Our quality assurance process includes pre-harvest inspections, post-harvest quality checks, laboratory testing for pesticides and contaminants, and final quality control before packaging. Each batch is traceable to its source farm.",
        },
        {
          question: "Do you provide quality certificates?",
          answer:
            "Yes, we provide comprehensive quality certificates including phytosanitary certificates, quality analysis reports, and certificates of origin for all shipments. These documents are essential for international trade compliance.",
        },
        {
          question: "What happens if products don't meet quality standards?",
          answer:
            "We have a strict quality guarantee policy. If products don't meet our quality standards upon arrival, we offer full replacement or refund. Our quality control team works closely with clients to resolve any issues promptly.",
        },
      ],
    },
    {
      category: "Pricing & Orders",
      icon: IconCurrencyDollar,
      color: "from-green-500 to-green-600",
      questions: [
        {
          question: "What are your minimum order quantities?",
          answer:
            "Minimum order quantities vary by product: 1 ton for fresh fruits, 500kg for vegetables, and 200kg for specialty items. We offer flexible ordering options for both small and large-scale buyers.",
        },
        {
          question: "How are prices determined?",
          answer:
            "Prices are based on current market rates, seasonal availability, quality grade, and order volume. We provide competitive pricing with volume discounts for larger orders. Contact us for current pricing.",
        },
        {
          question: "Do you offer sample orders?",
          answer:
            "Yes, we provide sample orders for new clients to evaluate our product quality. Sample orders are typically 5-10kg per product and are charged at regular rates with shipping costs included.",
        },
        {
          question: "What payment terms do you accept?",
          answer:
            "We accept various payment methods including bank transfers, letters of credit (L/C), and for established clients, we offer flexible payment terms. Payment terms are discussed during the quotation process.",
        },
      ],
    },
    {
      category: "Products & Availability",
      icon: IconApple,
      color: "from-orange-500 to-orange-600",
      questions: [
        {
          question: "What products do you export?",
          answer:
            "We export a wide range of African fruits and vegetables including avocados, mangoes, citrus fruits, vegetables, herbs, and specialty items. Our product portfolio includes both conventional and organic options.",
        },
        {
          question: "Are your products available year-round?",
          answer:
            "Availability varies by season and product. We work with multiple farms across different regions to ensure consistent supply. We provide seasonal calendars and availability updates to help with planning.",
        },
        {
          question: "Do you offer organic products?",
          answer:
            "Yes, we offer certified organic products including organic avocados, mangoes, and vegetables. All organic products are certified by recognized international organic certification bodies.",
        },
        {
          question: "Can you provide custom packaging?",
          answer:
            "Yes, we offer custom packaging solutions including branded packaging, specific box sizes, and labeling requirements. We work with clients to meet their specific packaging needs and branding requirements.",
        },
      ],
    },
    {
      category: "Partnership & Support",
      icon: IconHandClick,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: "How do I become a partner or distributor?",
          answer:
            "We welcome new partners and distributors. Contact our business development team to discuss partnership opportunities, territory requirements, and support programs we offer to our partners.",
        },
        {
          question: "What support do you provide to buyers?",
          answer:
            "We provide comprehensive support including market information, product specifications, quality reports, logistics coordination, and after-sales support. Our team is available to assist throughout the entire process.",
        },
        {
          question: "Do you offer training on your products?",
          answer:
            "Yes, we provide product training sessions covering handling, storage, quality standards, and market positioning. We also offer regular updates on new products and market trends.",
        },
        {
          question: "How can I track my order?",
          answer:
            "We provide real-time tracking information for all shipments including container numbers, shipping schedules, and delivery updates. You'll receive regular updates throughout the shipping process.",
        },
      ],
    },
  ];

  // Filter questions based on search term
  const filteredData = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

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

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filteredData.flatMap((category) =>
      category.questions.map((qa) => ({
        "@type": "Question",
        name: qa.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: qa.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Back button and FAQ badge - Responsive layout */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 pt-8 gap-4 sm:gap-0"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Back to Home Button - Left aligned */}
            <motion.button
              onClick={() => router.back()}
              className="inline-flex items-center text-green-100 hover:text-white transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Back to Home
            </motion.button>

            {/* FAQ Badge - Right aligned on desktop, left aligned on mobile */}
            <motion.div
              className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconHelp className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="font-medium">
                <span className="hidden sm:inline">
                  Frequently Asked Questions
                </span>
                <span className="sm:hidden">FAQ</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Got Questions?
              <br />
              <span className="text-yellow-300">We Have Answers</span>
            </motion.h1>

            <motion.p
              className="text-xl text-green-100 max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Find comprehensive answers to all your questions about our
              products, shipping, quality standards, and partnership
              opportunities.
            </motion.p>

            {/* Search Bar */}
            <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
              <div className="relative">
                <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white text-black placeholder:text-gray-300 placeholder:font-medium focus:ring-4 focus:ring-white/30 focus:outline-none text-lg font-medium"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-gray-600 text-center">
                Found{" "}
                {filteredData.reduce(
                  (acc, cat) => acc + cat.questions.length,
                  0
                )}{" "}
                results for &quot;{searchTerm}&quot;
              </p>
            </motion.div>
          )}

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                variants={fadeInUp}
              >
                <div className={`bg-gradient-to-r ${category.color} px-8 py-6`}>
                  <div className="flex items-center">
                    <category.icon className="w-8 h-8 mr-4 text-white" />
                    <h2 className="text-2xl font-bold text-white">
                      {category.category}
                    </h2>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <motion.div
                        key={itemIndex}
                        className="transition-all duration-300"
                        initial={false}
                        animate={{
                          backgroundColor: isOpen ? "#f0fdf4" : "transparent",
                        }}
                      >
                        <button
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-green-700 transition-colors">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            {isOpen ? (
                              <IconChevronUp className="w-6 h-6 text-green-600" />
                            ) : (
                              <IconChevronDown className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors" />
                            )}
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredData.length === 0 && searchTerm && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6">
                Try searching with different keywords or browse our categories
                above.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            className="text-center mt-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl shadow-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
                Our expert team is here to help! Get personalized assistance
                with your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => router.push("/#contact")}
                >
                  Contact Us Now
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() =>
                    window.open("mailto:info@afrocadoexports.com", "_blank")
                  }
                >
                  Send Email
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
