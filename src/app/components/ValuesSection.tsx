"use client";

import { motion } from "framer-motion";
import { IconHeart, IconShield, IconStar } from "@tabler/icons-react";

export default function ValuesSection() {
  const values = [
    {
      icon: IconHeart,
      title: "Service Excellence",
      description:
        "We believe that customer satisfaction is the cornerstone of our success in the global export market. Understanding our international partners' unique needs and market requirements enables us to deliver tailored solutions that exceed expectations. Our commitment to exceptional customer service ensures that every client feels valued and confident in our ability to deliver premium African produce to their doorstep.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: IconShield,
      title: "Integrity & Trust",
      description:
        "Our core values are built on unwavering respect for our customers, employees, and farming partners across Africa. We maintain the highest ethical standards in all our business dealings, from fair trade practices with local farmers to transparent communication with international buyers. We believe that respecting the environment and supporting sustainable agricultural practices is essential for the long-term prosperity of our communities and the planet.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: IconStar,
      title: "Quality Assurance",
      description:
        "Our primary mission is to ensure that our global customers receive the finest African produce available in international markets. We maintain rigorous quality control standards from farm to port, implementing state-of-the-art cold chain logistics and comprehensive testing protocols. This commitment to excellence creates lasting trust between Afrocado and our valued international partners, establishing us as the premier choice for premium African agricultural exports.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Values & Beliefs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The principles that guide our mission to deliver premium African
            produce to the world while supporting sustainable agriculture and
            fair trade practices.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`${value.bgColor} rounded-3xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50`}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`w-12 h-1 bg-gradient-to-r ${value.color} rounded-full mt-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience the Afrocado Difference
            </h3>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Partner with us to access premium African produce backed by our
              unwavering commitment to service excellence, integrity, and
              quality assurance.
            </p>
            <motion.button
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Your Partnership
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
