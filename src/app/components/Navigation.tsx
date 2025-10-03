"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  IconSearch,
  IconX,
  IconChevronDown,
  IconHome,
  IconInfoCircle,
  IconLeaf,
  IconHeart,
  IconBook,
  IconMail,
  IconPhone,
  IconMail as IconEmail,
  IconWorld,
  IconMenu2,
} from "@tabler/icons-react";
import Image from "next/image";

interface SearchResult {
  id: number;
  title: string;
  section: string;
  content: string;
}

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Set active section based on current route
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/blog")) {
      setActiveSection("blog");
    } else if (pathname.startsWith("/products-view")) {
      setActiveSection("products");
    } else if (pathname.startsWith("/faq")) {
      setActiveSection("contact");
    }
  }, [pathname]);

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
    {
      id: 21,
      title: "Our Values & Beliefs",
      section: "Values",
      content:
        "The principles that guide our mission to deliver premium African produce to the world while supporting sustainable agriculture and fair trade practices.",
    },
    {
      id: 22,
      title: "Service Excellence",
      section: "Values",
      content:
        "We believe that customer satisfaction is the cornerstone of our success in the global export market. Understanding our international partners' unique needs enables us to deliver tailored solutions that exceed expectations.",
    },
    {
      id: 23,
      title: "Integrity & Trust",
      section: "Values",
      content:
        "Our core values are built on unwavering respect for our customers, employees, and farming partners across Africa. We maintain the highest ethical standards in all our business dealings.",
    },
    {
      id: 24,
      title: "Quality Assurance",
      section: "Values",
      content:
        "Our primary mission is to ensure that our global customers receive the finest African produce available in international markets. We maintain rigorous quality control standards from farm to port.",
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
    setActiveSection(section);

    // If we're not on the homepage, navigate to homepage first
    if (window.location.pathname !== "/") {
      router.push(`/#${section}`);
      return;
    }

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

  const handleLogoClick = () => {
    // If we're on the home page, scroll to top
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else {
      // If we're on another page, navigate to home
      router.push("/");
    }
  };

  const handlePhoneCall = () => {
    window.open("tel:+251937287140", "_self");
  };

  const handleEmailContact = () => {
    window.open("mailto:info@afrocado.com", "_self");
  };

  const handleWebsiteVisit = () => {
    window.open("https://afrocadoexports.com", "_blank");
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Listen for scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "values", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Creative gradient background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 backdrop-blur-xl border-b border-green-200/30 shadow-lg shadow-green-500/10" />

      {/* Floating organic shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 left-10 w-16 h-16 bg-green-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-4 right-20 w-12 h-12 bg-emerald-400/20 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 left-1/4 w-8 h-8 bg-teal-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
        <div className="absolute top-6 right-1/3 w-10 h-10 bg-green-300/20 rounded-full blur-sm animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Creative Logo Section */}
          <div className="flex items-center">
            <motion.button
              onClick={handleLogoClick}
              className="group flex items-center space-x-4"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                {/* Organic glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-all duration-500" />

                {/* Main logo container */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-green-200/50 group-hover:border-green-300/70 transition-all duration-300">
                  <Image
                    src="/about-img/logo1-removebg-preview.png"
                    alt="AFROCADDO Logo"
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="hidden sm:block">
                <motion.h1
                  className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AFROCADO
                </motion.h1>
                <motion.p
                  className="text-sm text-green-600 font-medium flex items-center gap-1"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-xs">🌱</span>
                  Premium African Produce
                </motion.p>
              </div>
            </motion.button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Enhanced Search Button */}
            <motion.button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="group relative p-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconSearch
                size={20}
                className="text-gray-600 group-hover:text-green-600 transition-colors"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>

            {/* Floating Navigation Pills */}
            <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-lg rounded-full px-4 py-2 border border-white/30 shadow-lg">
              {[
                { id: "home", label: "Home", icon: IconHome },
                { id: "about", label: "About", icon: IconInfoCircle },
                { id: "products", label: "Products", icon: IconLeaf },
                { id: "values", label: "Values", icon: IconHeart },
                { id: "contact", label: "Contact", icon: IconMail },
                { id: "blog", label: "Blog", icon: IconBook },
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() =>
                    id === "blog" ? router.push("/blog") : handleNavClick(id)
                  }
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                      : "text-gray-700 hover:text-green-600 hover:bg-white/60"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    size={16}
                    className="transition-transform group-hover:rotate-12"
                  />
                  <span className="hidden lg:inline">{label}</span>

                  {/* Active indicator */}
                  {activeSection === id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full -z-10"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </motion.button>
              ))}
            </div>
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
              className="text-gray-700 hover:text-green-900 focus:outline-none focus:text-green-900 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              {/* Enhanced Backdrop */}
              <motion.div
                className="fixed inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Enhanced Search Modal */}
              <motion.div
                className="search-modal absolute top-full left-1/2 transform -translate-x-1/2 w-[32rem] max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl z-50 mt-4 overflow-hidden"
                initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-1">
                  <div className="bg-white/90 backdrop-blur-sm rounded-t-3xl">
                    <div className="p-6">
                      {/* Enhanced Search Input */}
                      <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <motion.div
                            animate={{ rotate: searchQuery ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconSearch className="h-5 w-5 text-gray-400" />
                          </motion.div>
                        </div>
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          placeholder="Search our premium African produce..."
                          className="block w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 text-base bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-lg focus:shadow-xl"
                        />
                        <motion.button
                          onClick={clearSearch}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-2xl transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        </motion.button>
                      </div>

                      {/* Enhanced Search Results */}
                      {searchQuery && (
                        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent">
                          {isSearching ? (
                            <motion.div
                              className="flex items-center justify-center py-8"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="animate-spin rounded-full h-8 w-8 border-4 border-green-200 border-t-green-600"></div>
                                <span className="text-gray-600 font-medium">
                                  Searching our premium produce...
                                </span>
                              </div>
                            </motion.div>
                          ) : searchResults.length > 0 ? (
                            <div className="space-y-2">
                              {searchResults
                                .slice(0, 5)
                                .map((result, index) => (
                                  <motion.div
                                    key={result.id}
                                    className="group p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 cursor-pointer transition-all duration-300 border border-transparent hover:border-green-200 hover:shadow-lg"
                                    onClick={() =>
                                      scrollToSection(result.section)
                                    }
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: index * 0.05,
                                    }}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 text-base mb-2 line-clamp-1">
                                          {result.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                          {result.content.length > 100
                                            ? `${result.content.substring(
                                                0,
                                                100
                                              )}...`
                                            : result.content}
                                        </p>
                                        <div className="flex items-center space-x-2">
                                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs rounded-full font-semibold">
                                            {result.section}
                                          </span>
                                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                      </div>
                                      <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ x: 5 }}
                                      >
                                        <IconChevronDown className="h-5 w-5 text-green-500" />
                                      </motion.div>
                                    </div>
                                  </motion.div>
                                ))}
                              {searchResults.length > 5 && (
                                <motion.div
                                  className="text-center py-4"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <span className="text-sm text-gray-500 font-medium">
                                    +{searchResults.length - 5} more results
                                    available
                                  </span>
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <motion.div
                              className="text-center py-8"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="text-6xl mb-4">🔍</div>
                              <p className="text-gray-600 font-medium text-lg mb-2">
                                No results for &ldquo;{searchQuery}&rdquo;
                              </p>
                              <p className="text-sm text-gray-400">
                                Try searching for &quot;avocados&quot;,
                                &quot;mangoes&quot;, or &quot;export
                                services&quot;
                              </p>
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* Enhanced Popular Searches */}
                      {!searchQuery && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <h4 className="text-sm font-bold text-gray-700 mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Popular Searches
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              {
                                term: "Avocados",
                                icon: "🥑",
                                color: "from-green-400 to-emerald-500",
                              },
                              {
                                term: "Mangoes",
                                icon: "🥭",
                                color: "from-yellow-400 to-orange-500",
                              },
                              {
                                term: "Export Services",
                                icon: "🚢",
                                color: "from-blue-400 to-cyan-500",
                              },
                              {
                                term: "Quality Control",
                                icon: "✅",
                                color: "from-purple-400 to-pink-500",
                              },
                              {
                                term: "Our Team",
                                icon: "👥",
                                color: "from-indigo-400 to-purple-500",
                              },
                              {
                                term: "Contact",
                                icon: "📞",
                                color: "from-teal-400 to-green-500",
                              },
                            ].map(({ term, icon, color }) => (
                              <motion.button
                                key={term}
                                onClick={() => {
                                  setSearchQuery(term);
                                  handleSearch(term);
                                }}
                                className="group flex items-center space-x-3 p-3 bg-white/60 hover:bg-white border border-gray-200 hover:border-green-300 rounded-xl transition-all duration-300 hover:shadow-lg"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div
                                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white text-sm font-bold`}
                                >
                                  {icon}
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">
                                  {term}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Enhanced Backdrop */}
              <motion.div
                className="fixed inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Enhanced Mobile Menu */}
              <motion.div
                className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/30 z-50"
                initial={{ opacity: 0, x: 300, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 300, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Mobile Menu Header */}
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Image
                          src="/about-img/logo1-removebg-preview.png"
                          alt="AFROCADDO Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">
                          AFROCADO
                        </h2>
                        <p className="text-white/80 text-xs">
                          Premium African Produce
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconX size={20} className="text-white" />
                    </motion.button>
                  </div>
                </div>
                {/* Enhanced Mobile Navigation */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-2">
                    {[
                      {
                        id: "home",
                        label: "Home",
                        icon: IconHome,
                        description: "Welcome to Afrocado",
                      },
                      {
                        id: "about",
                        label: "About",
                        icon: IconInfoCircle,
                        description: "Our story & mission",
                      },
                      {
                        id: "products",
                        label: "Products",
                        icon: IconLeaf,
                        description: "Premium African produce",
                      },
                      {
                        id: "values",
                        label: "Values",
                        icon: IconHeart,
                        description: "Our principles",
                      },
                      {
                        id: "blog",
                        label: "Blog",
                        icon: IconBook,
                        description: "Latest news & insights",
                      },
                      {
                        id: "contact",
                        label: "Contact",
                        icon: IconMail,
                        description: "Get in touch",
                      },
                    ].map(({ id, label, icon: Icon, description }, index) => (
                      <motion.button
                        key={id}
                        onClick={() => {
                          if (id === "blog") {
                            router.push("/blog");
                          } else {
                            handleNavClick(id);
                          }
                          setIsMobileMenuOpen(false);
                        }}
                        className={`group w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                          activeSection === id
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                            : "bg-white/60 hover:bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg"
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeSection === id
                              ? "bg-white/20"
                              : "bg-gradient-to-r from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200"
                          }`}
                        >
                          <Icon
                            size={24}
                            className={
                              activeSection === id
                                ? "text-white"
                                : "text-green-600"
                            }
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <h3
                            className={`font-semibold text-lg ${
                              activeSection === id
                                ? "text-white"
                                : "text-gray-800"
                            }`}
                          >
                            {label}
                          </h3>
                          <p
                            className={`text-sm ${
                              activeSection === id
                                ? "text-white/80"
                                : "text-gray-500"
                            }`}
                          >
                            {description}
                          </p>
                        </div>
                        <motion.div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === id ? "bg-white" : "bg-green-400"
                          }`}
                          animate={{ scale: activeSection === id ? 1.5 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-3">
                        Premium African Produce Export
                      </p>
                      <div className="flex justify-center space-x-4">
                        <motion.button
                          onClick={handlePhoneCall}
                          className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          title="Call us"
                        >
                          <IconPhone size={18} />
                        </motion.button>
                        <motion.button
                          onClick={handleEmailContact}
                          className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-emerald-600 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          title="Email us"
                        >
                          <IconEmail size={18} />
                        </motion.button>
                        <motion.button
                          onClick={handleWebsiteVisit}
                          className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-teal-600 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          title="Visit our website"
                        >
                          <IconWorld size={18} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
