import React from "react";
import { FaUniversity, FaUserGraduate, FaSchool } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in CSE (AI-ML)",
    institution: "Gayatri Vidya Parishad College of Engineering for Women",
    duration: "2022 - 2026",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Engaged in research, Android development, and real-world projects.",
    icon: <FaUniversity className="text-purple-400 text-2xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Jr College (Sai Soudha Campus)",
    duration: "2020 - 2022",
    description:
      "Excelled in Mathematics, Physics, and Chemistry. Built strong fundamentals in IIT-level Math and Physics. Developed mini-projects that were well appreciated.",
    icon: <FaUserGraduate className="text-yellow-400 text-2xl" />,
  },
  {
    title: "SSC",
    institution: "Stella Maris School",
    duration: "2020",
    description:
      "Achieved top grades with distinction. Participated in Vedic Math and school-level science fairs. Awarded for creativity in school projects.",
    icon: <FaSchool className="text-green-400 text-2xl" />,
  },
];

const EducationSection = () => {
  return (
    <div className="outerContainer mx-auto w-[90%] md:w-[80%] lg:w-[70%] py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">Education</h2>

      <div className="grid gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-start gap-5 transition-transform hover:scale-105"
          >
            <div>{edu.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{edu.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
              <p className="text-xs text-gray-500 italic mb-2">{edu.duration}</p>
              <p className="text-gray-700 text-sm">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
