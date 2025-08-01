import { motion } from "framer-motion";
const educationData = [
  {
    degree: "B.Tech in CSE (AI & ML)",
    institution: "XYZ University",
    duration: "2021 - 2025",
    description: "Focus on machine learning, deep learning, and data science.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "ABC Junior College",
    duration: "2019 - 2021",
    description: "Mathematics, Physics, and Chemistry with strong performance.",
  },
  {
    degree: "SSC",
    institution: "DEF High School",
    duration: "2018 - 2019",
    description: "Completed school education with distinction.",
  },
];

export default function EducationTimeline() {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white" id="education">
      <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">🎓 Education</h2>
      <div className="relative border-l-2 border-green-500 ml-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 top-2"></span>
            <h3 className="text-xl font-semibold text-green-300">{edu.degree}</h3>
            <p className="text-sm text-white/70">{edu.institution} | {edu.duration}</p>
            <p className="mt-2 text-white/90">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
