"use client";

import { motion } from "framer-motion";
import {
  IconUser,
  IconBriefcase,
  IconSchool,
  IconMail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconCheck,
} from "@tabler/icons-react";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Kwame Asante",
      position: "Chief Executive Officer",
      department: "Executive",
      experience: "20+ years",
      education: "MBA in International Business",
      expertise: "Global Trade & Strategy",
      bio: "Leading Afrocado's vision to become the world's premier African produce exporter with over two decades of experience in international trade.",
      linkedin: "https://linkedin.com/in/kwame-asante",
      twitter: "https://twitter.com/kwame_asante",
      facebook: "https://facebook.com/kwame.asante",
      email: "kwame@afrocado.com",
    },
    {
      id: 2,
      name: "Aisha Okafor",
      position: "Chief Operations Officer",
      department: "Operations",
      experience: "15+ years",
      education: "MSc in Supply Chain Management",
      expertise: "Logistics & Quality Control",
      bio: "Ensuring seamless operations across our global network with expertise in cold chain logistics and quality assurance systems.",
      linkedin: "https://linkedin.com/in/aisha-okafor",
      twitter: "https://twitter.com/aisha_okafor",
      facebook: "https://facebook.com/aisha.okafor",
      email: "aisha@afrocado.com",
    },
    {
      id: 3,
      name: "David Kimani",
      position: "Head of Agriculture",
      department: "Agriculture",
      experience: "18+ years",
      education: "PhD in Agricultural Sciences",
      expertise: "Sustainable Farming & Certification",
      bio: "Overseeing our network of 500+ partner farms, ensuring sustainable practices and premium quality standards across all produce.",
      linkedin: "https://linkedin.com/in/david-kimani",
      twitter: "https://twitter.com/david_kimani",
      facebook: "https://facebook.com/david.kimani",
      email: "david@afrocado.com",
    },
  ];

  const departments = [
    { name: "Executive", color: "bg-blue-100 text-blue-800" },
    { name: "Operations", color: "bg-green-100 text-green-800" },
    { name: "Agriculture", color: "bg-yellow-100 text-yellow-800" },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getDepartmentColor = (department: string) => {
    const dept = departments.find((d) => d.name === department);
    return dept ? dept.color : "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-green-700 text-sm font-semibold">
              👥 Our Expert Team
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Meet Our <span className="text-green-600">Leadership Team</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in
            agriculture, international trade, and sustainable business
            practices.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <IconUser size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <IconCheck size={12} className="text-white" />
                    </div>
                  </div>

                  {/* Department Badge */}
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${getDepartmentColor(
                      member.department
                    )} shadow-sm`}
                  >
                    {member.department}
                  </span>
                </div>

                {/* Name & Position */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-green-600 font-semibold">
                    {member.position}
                  </p>
                </div>

                {/* Key Info Cards */}
                <div className="space-y-3 mb-6">
                  <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-green-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconBriefcase size={16} className="text-gray-600" />
                        <span className="text-xs font-semibold text-gray-600">
                          Experience
                        </span>
                      </div>
                      <span className="text-xs font-bold text-green-600">
                        {member.experience}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-green-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconSchool size={16} className="text-gray-600" />
                        <span className="text-xs font-semibold text-gray-600">
                          Education
                        </span>
                      </div>
                      <span className="text-xs font-bold text-green-600">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconBrandLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-500 text-white rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconBrandTwitter size={20} />
                  </motion.a>
                  <motion.a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconBrandFacebook size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconMail size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="mt-24 bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team by Numbers
            </h3>
            <p className="text-gray-600">
              Building excellence through diversity and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-green-600 mb-3">3</div>
              <div className="text-gray-700 font-semibold">Leadership Team</div>
              <div className="text-sm text-gray-500 mt-1">Expert Leaders</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">150+</div>
              <div className="text-gray-700 font-semibold">Total Employees</div>
              <div className="text-sm text-gray-500 mt-1">Global Team</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-purple-600 mb-3">17+</div>
              <div className="text-gray-700 font-semibold">Avg Experience</div>
              <div className="text-sm text-gray-500 mt-1">
                Years of Expertise
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
