"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconFileText,
  IconCalendar,
  IconPackage,
  IconSend,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { FORMPREE_ENDPOINTS } from "../config/forms";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quick Actions Modal States
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [quickActionForm, setQuickActionForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    productInterest: "",
    sampleQuantity: "",
    shippingAddress: "",
  });
  const [isQuickActionSubmitting, setIsQuickActionSubmitting] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickActionInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setQuickActionForm((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
    // Reset form when opening modal
    setQuickActionForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
      productInterest: "",
      sampleQuantity: "",
      shippingAddress: "",
    });

    // Scroll to modal after a brief delay to ensure it's rendered
    setTimeout(() => {
      const modalElement = document.querySelector('[data-modal="true"]');
      if (modalElement) {
        modalElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }, 100);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsQuickActionSubmitting(false);
  };

  const showNotification = (message: string) => {
    setSuccessMessage(message);
    setShowSuccessNotification(true);

    // Auto-hide notification after 4 seconds
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 4000);
  };

  const handleQuickActionSubmit = async (
    e: React.FormEvent,
    actionType: string
  ) => {
    e.preventDefault();
    setIsQuickActionSubmitting(true);

    try {
      // Using Formspree for email handling
      const endpoint =
        actionType === "catalog"
          ? FORMPREE_ENDPOINTS.CATALOG
          : actionType === "schedule"
          ? FORMPREE_ENDPOINTS.SCHEDULE
          : FORMPREE_ENDPOINTS.SAMPLES;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quickActionForm,
          _subject: `🌱 ${
            actionType.charAt(0).toUpperCase() + actionType.slice(1)
          } Request - Afrocado Export`,
          _replyto: quickActionForm.email,
          actionType: actionType,
          timestamp: new Date().toISOString(),
          _date: new Date().toLocaleDateString(),
          _time: new Date().toLocaleTimeString(),
          companyName: "Afrocado Export Company",
        }),
      });

      if (response.ok) {
        setIsQuickActionSubmitting(false);

        // Show success notification
        const successMsg =
          actionType === "catalog"
            ? "Product catalog request submitted successfully! We'll send you our catalog within 24 hours."
            : actionType === "schedule"
            ? "Call scheduling request submitted successfully! We'll contact you soon to arrange a meeting."
            : "Sample request submitted successfully! We'll prepare your samples and contact you for shipping details.";

        showNotification(successMsg);
        closeModal();
      } else {
        throw new Error("Failed to send request");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert(
        "Sorry, there was an error sending your request. Please try again or contact us directly."
      );
      setIsQuickActionSubmitting(false);
    }
  };

  const handleCatalogRequest = () => {
    // Open modal for catalog information request
    openModal("catalog");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for email handling
      const response = await fetch(FORMPREE_ENDPOINTS.CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "🌱 New Customer Inquiry - Afrocado Export",
          _replyto: formData.email,
          _date: new Date().toLocaleDateString(),
          _time: new Date().toLocaleTimeString(),
          companyName: "Afrocado Export Company",
          formType: "General Contact",
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Show success notification
        showNotification(
          "Your message has been sent successfully! We'll get back to you within 24 hours."
        );

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly."
      );
      setIsSubmitting(false);
    }
  };

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-green-200 bg-opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-emerald-200 bg-opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to source premium African produce? Contact us today for
            quotes, samples, and partnership opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <IconMail size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@afrocado.com</p>
                    <p className="text-gray-600">sales@afrocado.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <IconPhone size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+251 11 123 4567 (Ethiopia)</p>
                    <p className="text-gray-600">+1 (555) 123-4567 (USA)</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <IconMapPin size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">Afrocado Export House</p>
                    <p className="text-gray-600">Westlands Business District</p>
                    <p className="text-gray-600">Addis Ababa, Ethiopia 1000</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <IconClock size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <motion.button
                  onClick={handleCatalogRequest}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label="Request product catalog"
                >
                  <IconFileText size={20} />
                  <span>Request Product Catalog</span>
                </motion.button>
                <motion.button
                  onClick={() => openModal("schedule")}
                  className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label="Schedule a call"
                >
                  <IconCalendar size={20} />
                  <span>Schedule a Call</span>
                </motion.button>
                <motion.button
                  onClick={() => openModal("samples")}
                  className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label="Request samples"
                >
                  <IconPackage size={20} />
                  <span>Request Samples</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconCheck size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you
                    soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="your.email@company.com"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="Tell us about your requirements, expected volumes, and any specific needs..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                      y: isSubmitting ? 0 : -2,
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <IconSend size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h3>
            <p className="text-gray-600">
              Visit our headquarters in Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.017!2d38.7827847!3d9.0028617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1234567890123!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                className="rounded-xl"
                title="Afrocado Export House Location"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>

              {/* Overlay with Location Info */}
              <motion.div
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Afrocado Export House
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Westlands Business District
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Get Directions Button */}
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="https://maps.app.goo.gl/fWVq2X14pq7BRr8x8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-4 h-4">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-sm">Get Directions</span>
                </motion.a>
              </motion.div>

              {/* Map Controls Overlay */}
              <div className="absolute top-4 right-4 space-y-2">
                <motion.button
                  className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Full Screen"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/fWVq2X14pq7BRr8x8",
                      "_blank"
                    )
                  }
                >
                  <div className="text-gray-600 text-sm font-bold">⛶</div>
                </motion.button>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <motion.div
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Free Parking
                    </h5>
                    <p className="text-sm text-gray-600">
                      Secure parking available on-site
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Public Transport
                    </h5>
                    <p className="text-sm text-gray-600">
                      Bus stop 2 minutes walk away
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Airport Access
                    </h5>
                    <p className="text-sm text-gray-600">
                      15 minutes from Bole International Airport
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Modal Dialogs */}
        {activeModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                margin: "auto",
                transform: "translateY(0)",
              }}
              data-modal="true"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {activeModal === "catalog" && (
                    <IconFileText size={24} className="text-green-600" />
                  )}
                  {activeModal === "schedule" && (
                    <IconCalendar size={24} className="text-green-600" />
                  )}
                  {activeModal === "samples" && (
                    <IconPackage size={24} className="text-green-600" />
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeModal === "catalog" && "Product Catalog Information"}
                    {activeModal === "schedule" && "Schedule a Call"}
                    {activeModal === "samples" && "Request Samples"}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <IconX size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <form
                onSubmit={(e) => handleQuickActionSubmit(e, activeModal)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={quickActionForm.name}
                      onChange={handleQuickActionInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={quickActionForm.email}
                      onChange={handleQuickActionInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={quickActionForm.company}
                      onChange={handleQuickActionInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={quickActionForm.phone}
                      onChange={handleQuickActionInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Conditional fields based on modal type */}
                {activeModal === "schedule" && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={quickActionForm.preferredDate}
                        onChange={handleQuickActionInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={quickActionForm.preferredTime}
                        onChange={handleQuickActionInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeModal === "samples" && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        name="productInterest"
                        value={quickActionForm.productInterest}
                        onChange={handleQuickActionInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select products</option>
                        <option value="avocados">Avocados</option>
                        <option value="mangoes">Mangoes</option>
                        <option value="citrus">Citrus Fruits</option>
                        <option value="vegetables">Fresh Vegetables</option>
                        <option value="herbs">Herbs & Spices</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sample Quantity
                      </label>
                      <select
                        name="sampleQuantity"
                        value={quickActionForm.sampleQuantity}
                        onChange={handleQuickActionInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select quantity</option>
                        <option value="small">Small (1-2 kg)</option>
                        <option value="medium">Medium (5-10 kg)</option>
                        <option value="large">Large (20+ kg)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Shipping Address
                      </label>
                      <textarea
                        name="shippingAddress"
                        value={quickActionForm.shippingAddress}
                        onChange={handleQuickActionInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                        placeholder="Enter complete shipping address..."
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={quickActionForm.message}
                    onChange={handleQuickActionInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none bg-gray-50 focus:bg-white placeholder:text-gray-300 placeholder:font-medium text-black"
                    placeholder={
                      activeModal === "catalog"
                        ? "Tell us about your business and product interests..."
                        : activeModal === "schedule"
                        ? "What would you like to discuss in our call?"
                        : "Any specific requirements or questions about the samples?"
                    }
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isQuickActionSubmitting}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-xl transition-colors font-semibold flex items-center space-x-2"
                  >
                    {isQuickActionSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <IconSend size={16} />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Success Notification */}
        {showSuccessNotification && (
          <motion.div
            className="fixed top-4 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-green-200 p-6 max-w-md"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <IconCheck className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Success!
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {successMessage}
                </p>
              </div>
              <button
                onClick={() => setShowSuccessNotification(false)}
                className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IconX className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-green-500 rounded-b-2xl"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
