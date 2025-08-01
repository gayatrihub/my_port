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
    icon: <FaUniversity className="text-emerald-400 text-xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College (Sai Soudha Campus)",
    duration: "2020 - 2022",
    description:
      "Studied Mathematics, Physics, and Chemistry with focus on IIT-level concepts. Strengthened skills in IIT Physics and advanced problem-solving. Developed logical reasoning through regular practice.",
    icon: <FaUserGraduate className="text-yellow-300 text-xl" />,
  },
  {
    title: "SSC (10th Standard)",
    institution: "Stella Maris School",
    duration: "2020",
    description:
      "Secured best grades and recognition in school. Proficient in Vedic Mathematics and IIT foundational math. Participated in science fairs, where school projects were praised for creativity and clarity.",
    icon: <FaSchool className="text-sky-300 text-xl" />,
  },
];

const EducationTimeline = () => {
  return (
    <section
      className="min-h-screen py-10 px-4 sm:px-10 flex justify-center items-start bg-transparent mt-[-40px]"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      }}
    >
      <motion.div
        className="w-full max-w-[95rem] p-10 bg-black/20 rounded-2xl border border-emerald-300/30 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title inside container */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl">🎓</span>
          <h2 className="text-4xl font-bold text-white tracking-wide">Education</h2>
        </motion.div>

        <div className="relative pl-12">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-emerald-500/50 rounded-full"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-14 py-6 mb-10 border-l-4 border-emerald-400 max-w-6xl"
            >
              {/* Dot and icon */}
              <div className="absolute left-4 top-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700/30">
                  {edu.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
              <p className="text-md text-emerald-300">{edu.institution}</p>
              <p className="text-sm text-white/70 italic">{edu.duration}</p>
              <p className="text-md text-white/80 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationTimeline;
