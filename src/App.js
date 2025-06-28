import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import kalmandalImg from "./assets/images/kalmandal.jpg";
import appImg from "./assets/images/app.jpg";
import odImg from "./assets/images/Object_detection.jpg";
import onlinereportImg from "./assets/images/online_report.jpg";
import websiteImg from "./assets/images/website.jpg";
import { TypeAnimation } from 'react-type-animation';

import {
  FaPython,
  FaJava,
  FaBrain,
  FaGitAlt,
  FaAndroid,
  FaJs,
  FaHtml5,
  FaDatabase,
  FaCode,
  FaCuttlefish,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa6";

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

const technicalSkills = [
  { name: "Pyhon", confidence: 90, icon: <FaPython /> },
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
      className="min-h-screen bg-cover bg-center bg-fixed p-6 font-sans"
      style={{ backgroundImage: "url('bg2.jpg')" }}
  >

<section className="bg-black bg-opacity-40 rounded-3xl shadow-lg p-8 mb-16 w-full">
  {/* Topbar */}
  <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-black bg-opacity-50 rounded-2xl shadow-lg mb-8">
    <div className="text-3xl font-bold text-white">
      <span className="text-pink-500">Gay</span><span className="text-purple-400">atri</span>
    </div>
    <ul className="flex flex-wrap gap-6 text-white font-medium text-lg">
      <li><a href="#hero" className="hover:text-pink-400">Home</a></li>
      <li><a href="#about" className="hover:text-pink-400">About Me</a></li>
      <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
      <li><a href="#achievements" className="hover:text-pink-400">Achievements</a></li>
      <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
    </ul>
    <a href="#contact" className="mt-4 sm:mt-0 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow hover:opacity-90 transition">
      Connect With Me
    </a>
  </nav>

  {/* Hero Section */}
<<div className="relative w-64 h-64 mx-auto mt-10">
  {/* Rotating gradient border only */}
  <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
    <div className="w-full h-full rounded-full p-[5px] bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-pink-600">
      <div className="w-full h-full bg-black rounded-full"></div>
    </div>
  </div>

  {/* Static profile image on top */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="circle_profile.png"
      alt="Gayatri"
      className="w-60 h-60 object-cover rounded-full border-[5px] border-black"
    />
  </div>
</div>
  {/* Name with Color in First Line */}
<h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-snug text-center text-white">
  <span
    id="animated-text"
    className="inline-block"
  ></span>

  <TypeAnimation
    sequence={[
      () => {
        document.getElementById("animated-text").innerHTML =
          'Hi, I’m <span class="text-pink-500">Gay</span><span class="text-purple-400">atri</span> 👩‍💻';
      },
      2000,
      () => {
        document.getElementById("animated-text").innerHTML = "";
      },
      200,
      () => {
        document.getElementById("animated-text").innerHTML =
          'Android Developer @ GDG 🚀';
      },
      2000,
      () => {
        document.getElementById("animated-text").innerHTML = "";
      },
      200,
      () => {
        document.getElementById("animated-text").innerHTML =
          'AIML Student | SIH Finalist 🎯';
      },
      2000,
      () => {
        document.getElementById("animated-text").innerHTML = "";
      },
      200,
    ]}
    speed={60}
    repeat={Infinity}
    cursor={false}
  />
</h1>



<p className="text-gray-300 mt-4 text-lg sm:text-xl text-center">
  Computer Science (AIML) Student passionate about Android & AI.
</p>

  {/* Resume Button */}
 <div className="text-center">
  <a
    href="/Gayatri_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-8 px-8 py-3 text-white border border-white rounded-full text-base font-medium hover:bg-white hover:text-black transition duration-300"
  >
    My resume
  </a>
</div>
</section>

 <section className="p-8 bg-black bg-opacity-30 rounded-3xl shadow-lg text-white mb-16 min-h-[28rem]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-pink-400 mb-2">Hi, I’m Gayatri 👩‍💻</h1>
            <p className="text-lg text-gray-300 mb-6">
              Computer Science (AIML) Student | Android Developer @ GDG | ML Enthusiast | Hackathon Finalist
            </p>
            <div className="text-gray-300 leading-relaxed text-lg">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">💫 About Me</h2>
               <p className="mb-4">
              Hi, I’m Gayatri, a dedicated Computer Science (AIML) student with a passion for technology and creativity.
              As a developer and visual thinker, I love building intuitive Android applications, exploring machine
              learning models, and bringing digital experiences to life.
            </p>
            <p className="mb-4">
              I'm an Android Developer and core member of the Google Developer Group (GDG) on campus, where I’ve led
              workshops and mentoring sessions to support peer learning. I was honored to be a finalist in the Smart
              India Hackathon 2023, and I’ve actively participated in university hackathons, creating solutions for
              real-world challenges.
            </p>
            <p className="mb-4">
              Beyond tech, I’m also a mandala art enthusiast and skilled drawing artist, with a strong eye for detail
              and aesthetics. I bring my creativity not just to code, but also to visual storytelling through art —
              blending logic and design in everything I create.
            </p>
            <p>
              I’ve completed hands-on internships across AI/ML, full-stack development, networking, and Python, and
              continue to upskill through projects and certifications. I believe in lifelong learning and thrive at the
              intersection of innovation and design.
            </p>
            </div>
          </div>
          <motion.img
            src="profile2.jpg"
            alt="Gayatri"
            className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-3xl border-4 border-yellow-400 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-12 bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">🛠 Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {technicalSkills.map((skill, i) => (
            <div key={i} className="flex items-center justify-between bg-gradient-to-r from-cyan-700 to-blue-900 bg-opacity-50 rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                <div className="text-2xl">{skill.icon}</div>{skill.name}
              </div>
              <div className="text-white">{skill.confidence}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-pink-400 mb-6">🤝 Soft Skills</h2>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {softSkills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-pink-800 bg-opacity-30 rounded-lg p-4 w-32 text-center shadow-inner hover:bg-pink-700 transition">
              <div className="text-4xl text-pink-400">{skill.icon}</div>
              <div className="font-semibold text-white text-lg">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">🏆 Achievements</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-yellow-900 bg-opacity-30 text-yellow-100 rounded-xl hover:bg-yellow-800 hover:bg-opacity-50 transition shadow-sm">
              <FaTrophy className="text-yellow-300 mt-1" /><span className="text-lg">{ach}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">🚀 Projects</h2>
        <ProjectSection title="📱 Android Development Projects" projects={androidProjects} />
        <ProjectSection title="🧠 Machine Learning Projects" projects={mlProjects} />
        <ProjectSection title="🌐 Web Developing Projects" projects={webProjects} />
      </section>

      {/* Contact */}
      <section className="bg-black bg-opacity-40 rounded-3xl p-8 shadow-lg mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-400 mb-8 text-center">📬 Contact Me</h2>
        <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center gap-2 mb-12 text-white text-lg">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-3xl text-red-400" />
            <span className="font-semibold">Email:</span>
            <a href="mailto:gayatritext@gmail.com" className="text-blue-300 hover:underline">
              gayatritext@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-3xl text-green-400" />
            <span className="font-semibold">Phone:</span>
            <span className="text-gray-300">+91 7396155453</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-3xl text-blue-400" />
            <span className="font-semibold">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/reddy-gayatri-b57876254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              Gayatri-linkedin-id
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-white">
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg"
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
