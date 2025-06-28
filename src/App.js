import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import kalmandalImg from "./assets/images/kalmandal.jpg";
import appImg from "./assets/images/app.jpg";
import odImg from "./assets/images/Object_detection.jpg";
import onlinereportImg from "./assets/images/online_report.jpg";
import websiteImg from "./assets/images/website.jpg";

import {
  FaPython,
  FaJava,
  FaBrain,
  FaGitAlt,
  FaAndroid,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaCuttlefish,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa6";

// --- Projects Data ---
const androidProjects = [
  {
    title: "KalMandal",
    description: "Android app that lets users draw and save to gallery with description.",
    image: kalmandalImg,
    link: "https://drive.google.com/file/d/1BhXnysi7Skk9Bowd1o99t_98owC_inVr/view?usp=sharing",
  },
  {
    title: "Profile Card App",
    description: "Displays photo, name, role & contact info. Built using Jetpack Compose.",
    image: appImg,
    link: "https://drive.google.com/file/d/1Xl_5E3abL-aCGYMKWLI5WFfa5hDy7FcW/view?usp=sharing",
  },
];

const mlProjects = [
  {
    title: "Object Detection on Railway Tracks",
    description:
      "YOLOv5x-based system with Gradio UI to detect obstacles on railway tracks. Includes bounding boxes, audio alerts & styled frontend.",
    image: odImg,
    link: "https://drive.google.com/file/d/19vF7PXVtDYfXBQa8ei3oKVotDplhPgdV/view?usp=sharing",
  },
];

const webProjects = [
  {
    title: "Online Crime Reporting System",
    description:
      "The Online Crime Reporting System allows users to submit complaints directly through a web interface built with HTML, CSS, and JavaScript...",
    image: onlinereportImg,
    link: "https://drive.google.com/file/d/1Xo3XrpmN6q95TWYKFYlpAjHuwqRfS6Oo/view?usp=sharing",
  },
  {
    title: "College Website",
    description:
      "The college website gives a clear and simple view of what the college stands for...",
    image: websiteImg,
    link: "https://drive.google.com/file/d/1MxNQ7xJeDx8Cf0Idt0JrIqexDdSFM7Ie/view?usp=sharing",
  },
];

// --- Skills & Achievements ---
const technicalSkills = [
  { name: "Python", confidence: 90, icon: <FaPython /> },
  { name: "Java", confidence: 80, icon: <FaJava /> },
  { name: "Machine Learning", confidence: 75, icon: <FaBrain /> },
  { name: "C", confidence: 90, icon: <FaCuttlefish /> },
  { name: "C++", confidence: 75, icon: <SiCplusplus /> },
  { name: "Git", confidence: 70, icon: <FaGitAlt /> },
  { name: "Front End Development", confidence: 90, icon: <FaHtml5 /> },
  { name: "Android Development", confidence: 88, icon: <FaAndroid /> },
  { name: "JavaScript", confidence: 85, icon: <FaJs /> },
  { name: "SQL", confidence: 85, icon: <FaDatabase /> },
  { name: "DSA", confidence: 85, icon: <FaCode /> },
];

const softSkills = [
  { name: "Leadership", icon: <FaUsers /> },
  { name: "Creativity", icon: <FaLightbulb /> },
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Problem Solving", icon: <FaLightbulb /> },
];

const achievements = [
  "Class Representative since 2022 (continuing)",
  "Student Innovator at AIMERS Club",
  "Team selected for Smart India Hackathon Finale",
  "Android Developer at GDG On Campus",
  "Finalist at Smart India Hackathon 2023",
  "Top 5 in Tribal Welfare Hackathon",
  "Led Android session at GDG campus",
  "Completed Full Stack Internship at ExcelR",
];

// --- ProjectSection Component ---
function ProjectSection({ title, projects }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 bg-opacity-60 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-blue-400 hover:underline mb-2 block"
                >
                  {project.title}
                </a>
              ) : (
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              )}
              <p className="text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- Main App Component ---
function App() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* --- Top Navigation Bar --- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">
            <span className="text-pink-500">Gaya</span>tri
          </h1>

          <nav className="hidden md:flex gap-8 text-white font-medium">
            <a href="#home" className="hover:text-pink-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-pink-400 transition duration-300">About Me</a>
            <a href="#skills" className="hover:text-pink-400 transition duration-300">Skills</a>
            <a href="#achievements" className="hover:text-pink-400 transition duration-300">Achievements</a>
            <a href="#projects" className="hover:text-pink-400 transition duration-300">Projects</a>
          </nav>

          <a
            href="#contact"
            className="ml-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Connect With Me
          </a>
        </div>
      </header>

      {/* --- Page Content --- */}
      <div
        className="pt-24 min-h-screen bg-cover bg-center bg-fixed p-6 font-sans"
        style={{ backgroundImage: "url('bg2.jpg')" }}
      >
        {/* Include your sections here (Header, Skills, Projects, etc.) */}
        {/* Keep the same layout you already had in your working code */}

        {/* You can now safely paste the rest of your previous layout here */}

        {/* ...Header Section, Skills, Soft Skills, Achievements, Projects, Contact Form, Footer... */}
      </div>
    </>
  );
}

export default App;
