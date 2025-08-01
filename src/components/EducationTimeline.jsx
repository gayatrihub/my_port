import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in CSE (AI-ML)",
    institution: "XYZ University",
    year: "2021 - 2025",
    details:
      "Specialized in Artificial Intelligence and Machine Learning. Worked on hands-on AI projects and internships.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "ABC Junior College",
    year: "2019 - 2021",
    details:
      "Focused on core subjects like Mathematics, Physics, and Chemistry with competitive exam preparation.",
  },
  {
    degree: "SSC",
    institution: "DEF High School",
    year: "2018 - 2019",
    details:
      "Completed secondary education with excellence. Actively participated in science fairs and coding events.",
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">
          Education Timeline
        </h2>

        <div className="relative border-l-2 border-indigo-300 dark:border-indigo-500">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-4"
            >
              <div className="absolute -left-[14px] top-1.5 bg-indigo-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap size={14} />
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
                  {edu.institution} &middot; {edu.year}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
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
