"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Afrocado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2008, Afrocado has grown to become one of
            Africa&apos;s leading fruit and vegetable export companies. We
            specialize in sourcing, processing, and distributing premium
            agricultural products from across the continent to global markets.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To bridge the gap between Africa&apos;s rich agricultural heritage
              and the world&apos;s growing demand for premium, fresh produce. We
              are committed to sustainable farming practices, fair trade, and
              delivering exceptional quality that exceeds international
              standards.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in African agricultural exports,
              recognized for our innovation, reliability, and contribution to
              sustainable food systems worldwide.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Afrocado?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Direct partnerships with 500+ certified organic farms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  ISO 22000 certified food safety management system
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  End-to-end cold chain logistics with real-time tracking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  Custom packaging solutions for different market requirements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">
                  24/7 customer support and quality assurance
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Reach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Exporting to over 25 countries across Europe, North America, Asia,
              and the Middle East. Our established distribution networks ensure
              timely delivery and optimal product freshness.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rigorous quality control processes from farm to port. Our
              certified laboratories conduct comprehensive testing for
              pesticides, contaminants, and nutritional content.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Logistics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              State-of-the-art cold chain management with temperature-controlled
              storage and transportation. Real-time monitoring ensures optimal
              conditions throughout the supply chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
