import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import kalmandalImg from "./assets/images/kalmandal.jpg";
import appImg from "./assets/images/app.jpg";
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
import { FaUsers, FaLightbulb } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";

const androidProjects = [
  {
    title: "KalMandal",
    description:
      "Android app that lets users draw and save to gallery with description.",
    image: kalmandalImg,
    link: "https://drive.google.com/file/d/1BhXnysi7Skk9Bowd1o99t_98owC_inVr/view?usp=sharing",
  },
  {
    title: "Profile Card App",
    description:
      "It displays a user’s photo, name, role, and contact info in a clean UI.Created as a demo during Android sessions to teach juniors the basics of Compose",
    image: appImg,
  },
];

const mlProjects = [
  {
    title: "Object Detection on Railway Tracks",
    description:
      "This project uses the pretrained YOLOv5x model from Ultralytics for object detection.\nWe added a custom frontend using Gradio to allow users to upload multiple railway track images easily.\nA visual bounding box system was integrated using PIL to draw labels on detected objects.\nWe implemented an audio alert system that automatically plays a sound if any objects are detected.\nAdditionally, we applied custom CSS styling to create a clean, modern, and responsive user interface.\n",
    image: "https://via.placeholder.com/300x180.png?text=AI+Classifier",
    link: "https://drive.google.com/file/d/19vF7PXVtDYfXBQa8ei3oKVotDplhPgdV/view?usp=sharing",
  },
  {
    title: "Another ML Project",
    description: "Description for your other ML project.",
    image: "https://via.placeholder.com/300x180.png?text=ML+Project+2",
    link: "https://drive.google.com/file/d/YOUR_OTHER_DRIVE_LINK/view?usp=sharing",
  },
];

// Skills, soft skills, achievements as you had before

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

// ProjectSection now handles optional links properly

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
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              )}
              <p className="text-gray-300 whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      className="min-h-screen bg-cover bg-center bg-fixed p-6 font-sans"
      style={{ backgroundImage: "url('bg2.jpg')" }}
    >
      {/* Header Section */}
      <section className="p-8 bg-black bg-opacity-30 rounded-3xl shadow-lg text-white mb-16 min-h-[28rem]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-pink-400 mb-2">
              Hi, I’m Gayatri 👩‍💻
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Computer Science (AIML) Student | Android Developer @ GDG | ML
              Enthusiast | Hackathon Finalist
            </p>
            <div className="text-gray-300 leading-relaxed text-lg">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">
                💫 About Me
              </h2>
              <p className="mb-4">
                Hi, I’m Gayatri, a dedicated Computer Science (AIML) student with
                a passion for technology and creativity. As a developer and
                visual thinker, I love building intuitive Android applications,
                exploring machine learning models, and bringing digital
                experiences to life.
              </p>
              <p className="mb-4">
                I'm an Android Developer and core member of the Google Developer
                Group (GDG) on campus, where I’ve led workshops and mentoring
                sessions to support peer learning. I was honored to be a finalist
                in the Smart India Hackathon 2023, and I’ve actively participated
                in university hackathons, creating solutions for real-world
                challenges.
              </p>
              <p className="mb-4">
                Beyond tech, I’m also a mandala art enthusiast and skilled
                drawing artist, with a strong eye for detail and aesthetics. I
                bring my creativity not just to code, but also to visual
                storytelling through art — blending logic and design in
                everything I create.
              </p>
              <p>
                I’ve completed hands-on internships across AI/ML, full-stack
                development, networking, and Python, and continue to upskill
                through projects and certifications. I believe in lifelong
                learning and thrive at the intersection of innovation and design.
              </p>
            </div>
          </div>

          <motion.img
            src="profile.jpg"
            alt="Gayatri"
            className="w-56 h-72 md:w-72 md:h-96 rounded-3xl object-cover shadow-lg border-4 border-purple-500"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 p-6 bg-black bg-opacity-30 rounded-3xl shadow-lg text-white max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-300 text-center">
          Technical & Soft Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">
              Technical Skills
            </h3>
            <ul className="space-y-3">
              {technicalSkills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-gray-900 bg-opacity-50 p-3 rounded-lg"
                >
                  <span className="text-2xl text-pink-400">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.confidence}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-pink-400 h-2 rounded-full"
                        style={{ width: `${skill.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">
              Soft Skills
            </h3>
            <ul className="flex flex-wrap gap-6">
              {softSkills.map((skill, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center bg-gray-900 bg-opacity-50 p-4 rounded-xl w-28"
                >
                  <span className="text-5xl text-purple-400 mb-2">
                    {skill.icon}
                  </span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto">
        <ProjectSection title="Android Projects" projects={androidProjects} />
        <ProjectSection title="Machine Learning Projects" projects={mlProjects} />
      </section>

      {/* Achievements Section */}
      <section className="max-w-4xl mx-auto mt-16 bg-black bg-opacity-30 p-6 rounded-3xl shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6 text-purple-300 text-center">
          Achievements
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          {achievements.map((ach, i) => (
            <li key={i}>{ach}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section
        className="max-w-xl mx-auto mt-16 bg-black bg-opacity-30 p-6 rounded-3xl shadow-lg text-white"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-300 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              className="w-full rounded-md p-2 text-black"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              className="w-full rounded-md p-2 text-black"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              value={contactForm.message}
              onChange={handleChange}
              className="w-full rounded-md p-2 text-black resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition-colors duration-300 py-3 rounded-lg font-bold text-white"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-400 text-center mt-3 font-semibold">
              Thank you for reaching out! I will get back to you soon.
            </p>
          )}
        </form>
        <div className="mt-8 flex justify-center gap-8 text-pink-400 text-xl">
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="tel:+1234567890" aria-label="Phone">
            <FaPhone />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
