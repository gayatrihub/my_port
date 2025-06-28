import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
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

import kalmandalImg from "./assets/images/kalmandal.jpg";
import appImg from "./assets/images/app.jpg";
import odImg from "./assets/images/Object_detection.jpg";
onlinereportImg from "./assets/images/online_report.jpg";
import websiteImg from "./assets/images/website.jpg";

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
    description: "YOLOv5x-based system with Gradio UI to detect obstacles on railway tracks. Includes bounding boxes, audio alerts & styled frontend.",
    image: odImg,
    link: "https://drive.google.com/file/d/19vF7PXVtDYfXBQa8ei3oKVotDplhPgdV/view?usp=sharing",
  },
];

const webProjects = [
  {
    title: "Online Crime Reporting System",
    description: "Allows users to report crimes online and track status. Includes wanted persons and emergency contacts.",
    image: onlinereportImg,
    link: "https://drive.google.com/file/d/1Xo3XrpmN6q95TWYKFYlpAjHuwqRfS6Oo/view?usp=sharing",
  },
  {
    title: "College Website",
    description: "A simple, clean and informative college website showing vision, mission, and achievements.",
    image: websiteImg,
    link: "https://drive.google.com/file/d/1MxNQ7xJeDx8Cf0Idt0JrIqexDdSFM7Ie/view?usp=sharing",
  },
];

const technicalSkills = [
  { name: "Python", confidence: 90, icon: <FaPython /> },
  { name: "Java", confidence: 80, icon: <FaJava /> },
  { name: "Machine Learning", confidence: 75, icon: <FaBrain /> },
  { name: "C", confidence: 90, icon: <FaCuttlefish /> },
  { name: "C++", confidence: 75, icon: <SiCplusplus /> },
  { name: "Git", confidence: 70, icon: <FaGitAlt /> },
  { name: "Front End", confidence: 90, icon: <FaHtml5 /> },
  { name: "Android", confidence: 88, icon: <FaAndroid /> },
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
  "Class Representative since 2022",
  "Student Innovator at AIMERS Club",
  "Smart India Hackathon Finalist",
  "Android Developer @ GDG On Campus",
  "Top 5 in Tribal Welfare Hackathon",
  "Led Android session at GDG campus",
  "Completed Full Stack Internship at ExcelR",
];

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
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-pink-400 hover:underline mb-2 block"
              >
                {project.title}
              </a>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans text-white"
      style={{ backgroundImage: "url('bg2.jpg')" }}
    >
      {/* Floating Top Right Button */}
      <a
        href="#contact"
        className="fixed top-6 right-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 z-50"
      >
        Connect With Me
      </a>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-16">
        <img
          src="profile.jpg"
          alt="Gayatri"
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-xl mb-4"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
          I'm Gayatri, CSE-AIML Student
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mt-4">
          Android Developer @ GDG | Finalist @ Smart India Hackathon | Passionate about ML, Design & Innovation.
        </p>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 bg-black bg-opacity-40 rounded-3xl mx-4 mb-12">
        <h2 className="text-3xl font-bold text-pink-400 mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {technicalSkills.map((skill, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
              <div className="flex items-center gap-3 text-lg">
                <div className="text-2xl">{skill.icon}</div>
                {skill.name}
              </div>
              <div>{skill.confidence}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-12 bg-black bg-opacity-30 rounded-3xl mx-4 mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Projects</h2>
        <ProjectSection title="Android" projects={androidProjects} />
        <ProjectSection title="Machine Learning" projects={mlProjects} />
        <ProjectSection title="Web" projects={webProjects} />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-black bg-opacity-40 rounded-3xl p-8 shadow-lg mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold text-blue-400 mb-8 text-center">📬 Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactForm.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={contactForm.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 h-36 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-400 mt-4 text-center font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>
      </section>

      <footer className="text-center text-white text-sm py-6 opacity-70">
        © {new Date().getFullYear()} Gayatri. Built using React + Tailwind + Framer Motion.
      </footer>
    </div>
  );
}

export default App;
