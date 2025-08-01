import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in CSE (AI-ML)",
    institution: "XYZ University",
    duration: "2021 - 2025",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Engaged in research, Android development, and real-world projects.",
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "ABC Junior College",
    duration: "2019 - 2021",
    description:
      "Studied Mathematics, Physics, and Chemistry. Gained strong analytical skills and logical thinking.",
    icon: <FaUserGraduate className="text-yellow-400 text-xl" />,
  },
  {
    title: "SSC",
    institution: "DEF High School",
    duration: "2018 - 2019",
    description:
      "Completed 10th with distinction. Participated in Olympiads and science fairs.",
    icon: <FaSchool className="text-green-400 text-xl" />,
  },
];

const EducationTimeline = () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-transparent to-black px-4 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        🎓 Education
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-white/30 rounded-full sm:left-1/2 transform sm:-translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative sm:w-1/2 px-6 py-6 mb-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-white ${
              index % 2 === 0 ? "sm:ml-auto sm:mr-0" : "sm:mr-auto sm:ml-0"
            }`}
          >
            {/* Dot and icon */}
            <div className="absolute -left-9 sm:left-auto sm:-right-5 top-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 shadow-md">
                {edu.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold">{edu.title}</h3>
            <p className="text-sm text-purple-300 mb-1">{edu.institution}</p>
            <p className="text-xs text-white/70 italic mb-2">{edu.duration}</p>
            <p className="text-sm text-white/80">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
