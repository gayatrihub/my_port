import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in CSE (AI-ML)",
    institution: "XYZ University",
    year: "2021 - 2025",
    description: "Focused on AI, ML, Android development, and real-world projects. Participated in hackathons and internships.",
  },
  {
    title: "Intermediate (MPC)",
    institution: "ABC Junior College",
    year: "2019 - 2021",
    description: "Excelled in Math, Physics, Chemistry. Secured top ranks and developed strong fundamentals.",
  },
  {
    title: "SSC",
    institution: "DEF High School",
    year: "2018 - 2019",
    description: "Completed schooling with distinction. Actively involved in science fairs and tech events.",
  },
];

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="py-16 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-black/50 to-black/90"
    >
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        🎓 Education
      </h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-2xl transition-all hover:scale-[1.02] border border-white/10"
          >
            {/* Icon/Year badge */}
            <div className="absolute -left-5 top-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-3 rounded-full shadow-lg">
              <FaGraduationCap className="text-xl" />
            </div>

            <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-400 transition">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-300 mb-1">
              <span className="font-medium">{edu.institution}</span> —{" "}
              <span className="text-purple-300">{edu.year}</span>
            </p>
            <p className="text-gray-400">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
