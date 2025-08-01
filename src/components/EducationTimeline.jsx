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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
        >
          Education Timeline
        </motion.h2>

        <div className="relative border-l-4 border-indigo-300 dark:border-indigo-500">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              <div className="absolute -left-4 top-1 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap size={16} />
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                  {edu.institution} &middot; {edu.year}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
