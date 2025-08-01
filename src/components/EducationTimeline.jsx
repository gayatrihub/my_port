import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in CSE (AI-ML)",
    institution: "XYZ University",
    year: "2021 - 2025",
    details:
      "Focused on AI, ML, Android development, and real-world projects. Participated in hackathons and internships.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "ABC Junior College",
    year: "2019 - 2021",
    details:
      "Excelled in Math, Physics, Chemistry. Secured top ranks and developed strong fundamentals.",
  },
  {
    degree: "SSC",
    institution: "DEF High School",
    year: "2018 - 2019",
    details:
      "Completed schooling with distinction. Actively involved in science fairs and tech events.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpCard = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
      >
        Education Timeline
      </motion.h2>

      <motion.div
        className="relative border-l-4 border-indigo-400 dark:border-indigo-500 ml-4 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeUpCard}
            className="mb-14 ml-6 relative group"
          >
            {/* Icon dot */}
            <div className="absolute -left-6 top-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <FaGraduationCap className="text-lg" />
            </div>

            {/* Glassmorphic card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-700 shadow-2xl rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                {edu.institution} &middot; {edu.year}
              </p>
              <p className="text-sm mt-3 text-gray-800 dark:text-gray-300 leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EducationTimeline;
