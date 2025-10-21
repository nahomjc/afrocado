"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  IconBriefcase,
  IconSchool,
  IconMail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconCheck,
  IconX,
  IconMapPin,
  IconCalendar,
  IconAward,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";

// Typewriter Effect Component
function TypewriterText({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Yonathan",
      position: "Co-Founder & CEO",
      department: "Executive",
      experience: "10+ years",
      education: "Business Administration",
      expertise: "Strategic Leadership & Business Development",
      bio: "Co-founder of Afrocado Export with a shared vision to transform Ethiopia's agricultural potential into global opportunity.",
      detailedBio:
        "Yonathan is one of the visionary co-founders of Afrocado Export, established in 2023 alongside Daniel. With over 10 years of experience in business development and strategic leadership, Yonathan has been instrumental in building the company from the ground up. His deep understanding of Ethiopian agriculture and international markets has enabled Afrocado to establish strong relationships with 15 dedicated farmers and expand to 10+ countries across Europe, Asia, and the Middle East. Yonathan is passionate about creating sustainable value for Ethiopian farmers while delivering premium avocados to global markets. His leadership focuses on operational efficiency and building trust with international partners.",
      location: "Addis Ababa, Ethiopia",
      joinDate: "2023",
      achievements: [
        "Co-Founder of Afrocado Export",
        "Ethiopian Agricultural Excellence Award",
        "International Trade Leadership",
      ],
      image: "avatar-icon",
      linkedin: "https://linkedin.com/in/yonathan-afrocado",
      twitter: "https://twitter.com/yonathan_afrocado",
      facebook: "https://facebook.com/yonathan.afrocado",
      email: "yonathan@afrocado.com",
    },
    {
      id: 2,
      name: "Daniel",
      position: "Co-Founder & COO",
      department: "Operations",
      experience: "10+ years",
      education: "Operations Management",
      expertise: "Logistics & Supply Chain",
      bio: "Co-founder leading operations and logistics to ensure efficient delivery of premium Ethiopian avocados to global markets.",
      detailedBio:
        "Daniel is the co-founder and Chief Operations Officer of Afrocado Export, partnering with Yonathan to establish the company in 2023. With over 10 years of experience in operations management and supply chain logistics, Daniel has built the operational backbone that enables Afrocado to deliver fresh avocados within 72 hours. His expertise in logistics management and quality control ensures that every shipment meets international standards. Daniel works closely with the 15 partner farmers to optimize harvest timing and implement efficient processing methods. His focus on operational excellence and careful logistics management has been key to Afrocado's success in connecting Ethiopian farmers with international markets.",
      location: "Addis Ababa, Ethiopia",
      joinDate: "2023",
      achievements: [
        "Co-Founder of Afrocado Export",
        "Logistics Excellence Award",
        "Supply Chain Innovation",
      ],
      image: "/lead-img/profile-dani.png",
      linkedin: "https://linkedin.com/in/daniel-afrocado",
      twitter: "https://twitter.com/daniel_afrocado",
      facebook: "https://facebook.com/daniel.afrocado",
      email: "daniel@afrocado.com",
    },
  ];

  const departments = [
    { name: "Executive", color: "bg-blue-100 text-blue-800" },
    { name: "Operations", color: "bg-green-100 text-green-800" },
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
    animate: { opacity: 1, y: 0 },
  };

  const getDepartmentColor = (department: string) => {
    const dept = departments.find((d) => d.name === department);
    return dept ? dept.color : "bg-gray-100 text-gray-800";
  };

  const handleMemberClick = (member: (typeof teamMembers)[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);

    // Scroll to modal after a brief delay to ensure it's rendered
    setTimeout(() => {
      const modalElement = document.querySelector('[data-team-modal="true"]');
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
    setIsModalOpen(false);
    setSelectedMember(null);
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
            <span className="text-green-700 text-sm font-semibold flex items-center gap-2">
              <IconUsers size={16} className="text-green-600" /> Our Expert Team
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
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              onClick={() => handleMemberClick(member)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg ring-4 ring-green-500 ring-opacity-50">
                      {member.image === "avatar-icon" ? (
                        <div className="w-full h-full bg-green-100 flex items-center justify-center">
                          <IconUserCircle
                            size={80}
                            className="text-green-600"
                          />
                        </div>
                      ) : (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-contain"
                        />
                      )}
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
              <div className="text-5xl font-bold text-green-600 mb-3">2</div>
              <div className="text-gray-700 font-semibold">Leadership Team</div>
              <div className="text-sm text-gray-500 mt-1">Expert Leaders</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-blue-600 mb-3">50+</div>
              <div className="text-gray-700 font-semibold">Total Employees</div>
              <div className="text-sm text-gray-500 mt-1">Global Team</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-purple-600 mb-3">10+</div>
              <div className="text-gray-700 font-semibold">Avg Experience</div>
              <div className="text-sm text-gray-500 mt-1">
                Years of Expertise
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Employee Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-white/20"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                position: "relative",
                margin: "auto",
                transform: "translateY(0)",
              }}
              data-team-modal="true"
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 p-8 rounded-t-3xl">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <IconX size={20} className="text-white" />
                </button>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      {selectedMember.image === "avatar-icon" ? (
                        <div className="w-full h-full bg-white flex items-center justify-center">
                          <IconUserCircle
                            size={90}
                            className="text-green-400"
                          />
                        </div>
                      ) : (
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <IconCheck size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="text-center md:text-left text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xl mb-2 opacity-90">
                      {selectedMember.position}
                    </p>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getDepartmentColor(
                        selectedMember.department
                      )}`}
                    >
                      {selectedMember.department}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Key Information Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconBriefcase size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Experience</p>
                        <p className="font-semibold text-gray-900">
                          {selectedMember.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconSchool size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Education</p>
                        <p className="font-semibold text-gray-900">
                          {selectedMember.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <IconMapPin size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-900">
                          {selectedMember.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconCalendar size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Joined</p>
                        <p className="font-semibold text-gray-900">
                          {selectedMember.joinDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Bio with Typewriter Effect */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <IconAward size={24} className="text-green-600 mr-2" />
                    About {selectedMember.name}
                  </h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <TypewriterText
                        text={selectedMember.detailedBio}
                        speed={30}
                      />
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Achievements
                  </h3>
                  <div className="grid gap-3">
                    {selectedMember.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <IconAward size={16} className="text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconMail size={20} />
                      <span>Email</span>
                    </motion.a>

                    <motion.a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconBrandLinkedin size={20} />
                      <span>LinkedIn</span>
                    </motion.a>

                    <motion.a
                      href={selectedMember.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconBrandTwitter size={20} />
                      <span>Twitter</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
