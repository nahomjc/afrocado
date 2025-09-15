"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IconSearch, IconX, IconChevronDown } from "@tabler/icons-react";

interface SearchResult {
  id: number;
  title: string;
  section: string;
  content: string;
}

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Website content for search
  const websiteContent = [
    {
      id: 1,
      title: "Premium African Fruit & Vegetable Export",
      section: "Hero",
      content:
        "Leading the global market in premium African produce. From farm to table, we ensure the highest quality standards with our state-of-the-art cold chain logistics and rigorous quality control processes.",
    },
    {
      id: 2,
      title: "About Afrocado",
      section: "About",
      content:
        "Established in 2008, Afrocado has grown to become one of Africa's leading fruit and vegetable export companies. We specialize in sourcing, processing, and distributing premium agricultural products from across the continent to global markets.",
    },
    {
      id: 3,
      title: "Our Mission",
      section: "About",
      content:
        "To bridge the gap between Africa's rich agricultural heritage and the world's growing demand for premium, fresh produce. We are committed to sustainable farming practices, fair trade, and delivering exceptional quality that exceeds international standards.",
    },
    {
      id: 4,
      title: "Our Vision",
      section: "About",
      content:
        "To be the global leader in African agricultural exports, recognized for our innovation, reliability, and contribution to sustainable food systems worldwide.",
    },
    {
      id: 5,
      title: "Global Reach",
      section: "About",
      content:
        "Exporting to over 25 countries across Europe, North America, Asia, and the Middle East. Our established distribution networks ensure timely delivery and optimal product freshness.",
    },
    {
      id: 6,
      title: "Quality Assurance",
      section: "About",
      content:
        "Rigorous quality control processes from farm to port. Our certified laboratories conduct comprehensive testing for pesticides, contaminants, and nutritional content.",
    },
    {
      id: 7,
      title: "Advanced Logistics",
      section: "About",
      content:
        "State-of-the-art cold chain management with temperature-controlled storage and transportation. Real-time monitoring ensures optimal conditions throughout the supply chain.",
    },
    {
      id: 8,
      title: "Premium Products",
      section: "Products",
      content:
        "We export a wide range of premium African produce including avocados, mangoes, citrus fruits, vegetables, and exotic fruits. All our products meet international quality standards and are sourced from certified partner farms.",
    },
    {
      id: 9,
      title: "Avocados",
      section: "Products",
      content:
        "Premium Hass avocados from our certified organic farms. Available year-round with consistent quality and size specifications.",
    },
    {
      id: 10,
      title: "Mangoes",
      section: "Products",
      content:
        "Sweet, juicy mangoes including Kent, Keitt, and Tommy Atkins varieties. Harvested at peak ripeness for optimal flavor.",
    },
    {
      id: 11,
      title: "Citrus Fruits",
      section: "Products",
      content:
        "Fresh oranges, lemons, limes, and grapefruits. Rich in vitamin C and perfect for international markets.",
    },
    {
      id: 12,
      title: "Vegetables",
      section: "Products",
      content:
        "Fresh vegetables including tomatoes, bell peppers, onions, and leafy greens. Grown using sustainable farming practices.",
    },
    {
      id: 13,
      title: "Exotic Fruits",
      section: "Products",
      content:
        "Unique African fruits including passion fruit, dragon fruit, and papaya. Exotic flavors that captivate international markets.",
    },
    {
      id: 14,
      title: "Contact Us",
      section: "Contact",
      content:
        "Get in touch with our team for quotes, partnerships, or any inquiries about our premium African produce exports.",
    },
    {
      id: 15,
      title: "Our Team",
      section: "Team",
      content:
        "Meet our diverse team of experts with decades of experience in agriculture, international trade, and sustainable business practices.",
    },
    {
      id: 16,
      title: "Kwame Asante - CEO",
      section: "Team",
      content:
        "Leading Afrocado's vision to become the world's premier African produce exporter with over two decades of experience in international trade.",
    },
    {
      id: 17,
      title: "Aisha Okafor - COO",
      section: "Team",
      content:
        "Ensuring seamless operations across our global network with expertise in cold chain logistics and quality assurance systems.",
    },
    {
      id: 18,
      title: "David Kimani - Head of Agriculture",
      section: "Team",
      content:
        "Overseeing our network of 500+ partner farms, ensuring sustainable practices and premium quality standards across all produce.",
    },
    {
      id: 19,
      title: "Customer Testimonials",
      section: "Testimonials",
      content:
        "What our global partners say about Afrocado's premium fruit and vegetable export services.",
    },
    {
      id: 20,
      title: "Export Services",
      section: "Services",
      content:
        "Comprehensive export services including cold chain logistics, quality control, packaging, and international shipping to 25+ countries.",
    },
  ];

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate search delay for better UX
    setTimeout(() => {
      const results = websiteContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase()) ||
          item.section.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchOpen(false); // Close search when opening mobile menu
  };

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`#${section.toLowerCase()}`);
    if (element) {
      // Dispatch highlight event
      const event = new CustomEvent("section-highlight", {
        detail: { section: section.toLowerCase() },
      });
      window.dispatchEvent(event);

      // Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });

      // Close search
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleNavClick = (section: string) => {
    const element = document.querySelector(`#${section}`);
    if (element) {
      // Dispatch highlight event
      const event = new CustomEvent("section-highlight", {
        detail: { section: section },
      });
      window.dispatchEvent(event);

      // Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (isSearchOpen && !target.closest(".search-modal")) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }

      if (isMobileMenuOpen && !target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isSearchOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isSearchOpen, isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-green-800 flex items-center">
                <span className="text-4xl mr-2">🥑</span>
                Afrocado
              </h1>
              <p className="text-sm text-gray-600 -mt-1">
                Premium Export Company
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {/* Search Button */}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconSearch size={20} />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex items-baseline space-x-6">
              <motion.button
                onClick={() => handleNavClick("home")}
                className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Home
              </motion.button>
              <motion.button
                onClick={() => handleNavClick("about")}
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => handleNavClick("products")}
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Products
              </motion.button>
              <motion.button
                onClick={() => handleNavClick("contact")}
                className="text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:border-b-2 hover:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact
              </motion.button>
            </div>

            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-green-900 focus:outline-none focus:text-green-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconSearch size={20} />
            </motion.button>
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-900 focus:outline-none focus:text-green-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0  bg-opacity-20 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Search Modal */}
              <motion.div
                className="search-modal absolute top-full left-1/2 transform -translate-x-1/2 w-[28rem] max-w-[calc(100vw-2rem)] bg-white shadow-2xl border border-gray-200 rounded-2xl z-50 mt-2"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="p-4">
                  {/* Search Input */}
                  <div className="relative mb-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IconSearch className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Search everything..."
                      className="block w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
                    />
                    <button
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-xl transition-colors"
                    >
                      <IconX className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>

                  {/* Search Results */}
                  {searchQuery && (
                    <div className="max-h-80 overflow-y-auto">
                      {isSearching ? (
                        <div className="flex items-center justify-center py-6">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
                          <span className="ml-2 text-gray-600 text-sm">
                            Searching...
                          </span>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="space-y-1">
                          {searchResults.slice(0, 5).map((result) => (
                            <motion.div
                              key={result.id}
                              className="p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors group"
                              onClick={() => scrollToSection(result.section)}
                              whileHover={{ scale: 1.01 }}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                                    {result.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                    {result.content.length > 80
                                      ? `${result.content.substring(0, 80)}...`
                                      : result.content}
                                  </p>
                                  <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                    {result.section}
                                  </span>
                                </div>
                                <IconChevronDown className="h-4 w-4 text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </motion.div>
                          ))}
                          {searchResults.length > 5 && (
                            <div className="text-center py-2">
                              <span className="text-xs text-gray-500">
                                +{searchResults.length - 5} more results
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <div className="text-gray-400 mb-2">🔍</div>
                          <p className="text-gray-500 text-sm">
                            No results for &ldquo;{searchQuery}&rdquo;
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Try different keywords
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Popular Searches */}
                  {!searchQuery && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        Popular Searches
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Avocados",
                          "Mangoes",
                          "Export Services",
                          "Quality Control",
                          "Our Team",
                          "Contact",
                        ].map((term) => (
                          <button
                            key={term}
                            onClick={() => {
                              setSearchQuery(term);
                              handleSearch(term);
                            }}
                            className="px-2.5 py-1 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-lg text-xs transition-colors font-medium"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0  bg-opacity-20 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Mobile Menu */}
              <motion.div
                className="mobile-menu absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Navigation Links */}
                  <motion.button
                    onClick={() => {
                      handleNavClick("home");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Home
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      handleNavClick("about");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    About
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      handleNavClick("products");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Products
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      handleNavClick("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-green-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Contact
                  </motion.button>

                  {/* Get Quote Button */}
                  <motion.button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
