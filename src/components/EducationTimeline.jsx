import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in Computer Science Engineering (AI & ML)",
    institution: "Gayatri Vidya Parishad College of Engineering for Women",
    duration: "2022 - 2026",
    description:
      "Pursuing B.Tech with specialization in Artificial Intelligence and Machine Learning. Actively involved in Android development, research-based projects, Smart India Hackathon, and productivity app development like MindMate.",
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College (Sai Soudha Campus)",
    duration: "2020 - 2022",
    description:
      "Focused on Mathematics, Physics, and Chemistry. Built a strong foundation in problem-solving and logical reasoning.",
    icon: <FaUserGraduate className="text-yellow-400 text-xl" />,
  },
  {
    title: "SSC (10th Standard)",
    institution: "Stella Maris School",
    duration: "2020",
    description:
      "Completed 10th with distinction. Participated in Olympiads and science exhibitions, showing early interest in science and innovation.",
    icon: <FaSchool className="text-green-400 text-xl" />,
  },
];


const EducationTimeline = () => {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        🎓 Education
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white/30 rounded-full"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-full px-6 py-6 mb-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-white"
          >
            {/* Dot and icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 shadow-md">
                {edu.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-center">{edu.title}</h3>
            <p className="text-sm text-purple-300 text-center">{edu.institution}</p>
            <p className="text-xs text-white/70 italic text-center">{edu.duration}</p>
            <p className="text-sm text-white/80 mt-2 text-center">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
