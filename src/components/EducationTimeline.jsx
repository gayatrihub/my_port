import React from "react";
import { FaUniversity, FaUserGraduate, FaSchool } from "react-icons/fa";

const educationData = [
  {
    title: "B.Tech in CSE (AI-ML)",
    institution: "Gayatri Vidya Parishad College of Engineering for Women",
    duration: "2022 - 2026",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Engaged in research, Android development, and real-world projects.",
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Chaitanya Jr College (Sai Soudha Campus)",
    duration: "2020 - 2022",
    description:
      "Studied MPC with strong emphasis on IIT-level Physics and Vedic Math. Developed strong analytical and problem-solving skills. School projects were appreciated by faculty.",
    icon: <FaUserGraduate className="text-yellow-400 text-xl" />,
  },
  {
    title: "SSC",
    institution: "Stella Maris School",
    duration: "2020",
    description:
      "Completed 10th with distinction. Participated in Olympiads and science fairs. Excelled in Vedic Mathematics and received praise for school-level technical projects.",
    icon: <FaSchool className="text-green-400 text-xl" />,
  },
];

const Education = () => {
  return (
    <div className="outerContainer mx-auto w-[90%] md:w-[80%] lg:w-[70%] py-10 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Education</h2>
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-300 flex items-start gap-4 hover:shadow-xl transition"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.institution} | {item.duration}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
