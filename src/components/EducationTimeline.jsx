import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in Computer Science Engineering (AI & ML)",
    institution: "Gayatri Vidya Parishad College of Engineering for Women",
    duration: "2022 - 2026",
    description:
      "Pursuing B.Tech with specialization in Artificial Intelligence and Machine Learning. Actively engaged in real-world projects, Android app development, research activities, and national hackathons like Smart India Hackathon.",
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College (Sai Soudha Campus)",
    duration: "2020 - 2022",
    description:
      "Studied Mathematics, Physics, and Chemistry with focus on IIT-level concepts. Strengthened skills in IIT Physics and advanced problem-solving. Developed logical reasoning through regular practice.",
    icon: <FaUserGraduate className="text-yellow-400 text-xl" />,
  },
  {
    title: "SSC (10th Standard)",
    institution: "Stella Maris School",
    duration: "2020",
    description:
      "Secured best grades and recognition in school. Proficient in Vedic Mathematics and IIT foundational math. Participated in science fairs, where school projects were praised for creativity and clarity.",
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

      <div className="relative max-w-3xl mx-auto pl-10">
        {/* Vertical line on left */}
        <div className="absolute top-0 bottom-0 left-6 w-1 bg-white/30 rounded-full"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-14 py-6 mb-10 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg"
          >
            {/* Dot and icon */}
            <div className="absolute left-4 top-8">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 shadow-md">
                {edu.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
            <p className="text-sm text-purple-300">{edu.institution}</p>
            <p className="text-xs text-white/70 italic">{edu.duration}</p>
            <p className="text-sm text-white/80 mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
