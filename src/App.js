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
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
 FaCss3Alt, FaJsSquare
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaUsers, FaLightbulb } from "react-icons/fa6";

const androidProjects = [
  {
    title: "KalMandal",
    description: "Android app that lets users draw and save to gallery with description.",
    image: kalmandalImg,
    link: "https://drive.google.com/file/d/1BhXnysi7Skk9Bowd1o99t_98owC_inVr/view?usp=sharing",
    techStack: ["Jetpack Compose", "Android SDK", "Kotlin"]
  },
  {
    title: "Profile Card App",
    description: "Displays photo, name, role & contact info. Built using Jetpack Compose.",
    image: appImg,
    link: "https://drive.google.com/file/d/1Xl_5E3abL-aCGYMKWLI5WFfa5hDy7FcW/view?usp=sharing",
    techStack: ["Jetpack Compose", "Material Design"]
  },
];

const mlProjects = [
  {
    title: "Object Detection on Railway Tracks",
    description:
      "YOLOv5x-based system with Gradio UI to detect obstacles on railway tracks. Includes bounding boxes, audio alerts & styled frontend.",
    image: odImg,
    link: "https://drive.google.com/file/d/19vF7PXVtDYfXBQa8ei3oKVotDplhPgdV/view?usp=sharing",
    techStack: ["YOLOv5", "Gradio", "Python"]
  },
];

const webProjects = [
  {
    title: "Online Crime Reporting System",
    description:
      "The Online Crime Reporting System allows users to submit complaints directly through a web interface built with HTML, CSS, and JavaScript...",
    image: onlinereportImg,
    link: "https://drive.google.com/file/d/1Xo3XrpmN6q95TWYKFYlpAjHuwqRfS6Oo/view?usp=sharing",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "College Website",
    description:
      "The college website gives a clear and simple view of what the college stands for...",
    image: websiteImg,
    link: "https://drive.google.com/file/d/1MxNQ7xJeDx8Cf0Idt0JrIqexDdSFM7Ie/view?usp=sharing",
    techStack: ["HTML", "CSS", "JavaScript"]
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
  {
    title: "Class Representative since 2022",
    image: process.env.PUBLIC_URL + "/images/leader.png"
  },
  {
    title: "Student Innovator at AIMERS Club",
    image: process.env.PUBLIC_URL + "/images/innovation.png"
  },
  {
    title: "Team selected for Smart India Hackathon Finale",
    image: process.env.PUBLIC_URL + "/images/sih.png"
  },
  { title: "Top 5 in Tribal Welfare Hackathon", 
   image: process.env.PUBLIC_URL + "/images/hack.png"
  },
  {
    title: "Android Developer at GDG On Campus",
    image: process.env.PUBLIC_URL + "/images/android.png"
  },
  {
    title: "Led Android session at GDG campus",
    image: process.env.PUBLIC_URL + "/images/gdg.png"
  },
  {
    title: "Completed Full Stack Internship at ExcelR",
    image: process.env.PUBLIC_URL + "/images/internship.png"
  }
];


const SkillCircle = ({
  value,
  label,
  icon,
  gradientId = "gradient",
  colorFrom = "#38bdf8",
  colorTo = "#0ea5e9",
  glowColor = "sky"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const glow = {
    pink: "shadow-[0_0_30px_10px_rgba(255,105,180,0.8)]",
    sky: "shadow-[0_0_30px_10px_rgba(56,189,248,0.9)]",
  };

  return (
    <div
      className="flex flex-col items-center w-32 group transition-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-28 h-28 rounded-full relative transition-all duration-700 ease-in-out
        ${isHovered ? `animate-spin-slow ${glow[glowColor]}` : "shadow-md"}`}
      >
        {/* Border shimmer ring */}
        <div className={`absolute top-0 left-0 w-full h-full rounded-full border-2 border-white/10 blur-sm ${isHovered ? 'animate-pulse border-white/30' : ''}`} />

        {/* Progressbar */}
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            pathColor: `url(#${gradientId})`,
            trailColor: 'rgba(255,255,255,0.1)',
            strokeLinecap: 'round',
          })}
        >
          {/* Gradient */}
          <svg style={{ height: 0 }}>
            <defs>
              <linearGradient id={gradientId} gradientTransform="rotate(90)">
                <stop offset="0%" stopColor={colorFrom} />
                <stop offset="100%" stopColor={colorTo} />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon bounce */}
          <div
            className={`text-white text-2xl transition-transform duration-500 ${
              isHovered ? "scale-125 brightness-125 drop-shadow-md" : ""
            }`}
          >
            {icon}
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="mt-3 text-white text-sm font-medium tracking-wide">{label}</div>
    </div>
  );
};


const ProjectSection = ({ title, projects, onSelect }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl text-white font-semibold mb-6">{title}</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-green-500/30 transition-all duration-300 group cursor-pointer"
            onClick={() => onSelect(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="p-4">
              <h4 className="text-green-300 text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-white text-sm opacity-80">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const getIconForTech = (tech) => {
    switch (tech.toLowerCase()) {
      case "android sdk":
      case "jetpack compose":
      case "material design":
      case "kotlin":
        return <FaAndroid className="inline mr-2 text-green-400" />;
      case "python":
      case "gradio":
      case "yolov5":
        return <FaPython className="inline mr-2 text-yellow-400" />;
      case "html":
        return <FaHtml5 className="inline mr-2 text-orange-500" />;
      case "css":
      case "css3":
        return <FaCss3Alt className="inline mr-2 text-blue-400" />;
      case "javascript":
        return <FaJsSquare className="inline mr-2 text-yellow-300" />;
      default:
        return null;
    }
  };


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
<div className="relative group mx-auto mt-10 w-60 h-60 sm:w-64 sm:h-64">
  {/* 🔥 Animated glowing gradient border */}
  <div className="absolute inset-0 rounded-full p-[5px] bg-[conic-gradient(at_top_left,_#ec4899,_#facc15,_#22d3ee,_#8b5cf6,_#ec4899)] 
                  animate-spin-slow group-hover:shadow-[0_0_30px_10px_rgba(255,105,180,0.6)] transition-all duration-700">
    <div className="w-full h-full rounded-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
  </div>

  {/* 🌈 Inner circular image with slight scale on hover */}
  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-transparent group-hover:scale-105 transition-transform duration-500">
    <img
      src="circle_profile.png"
      alt="Gayatri"
      className="w-full h-full object-cover rounded-full shadow-[0_0_80px_rgba(255,192,203,0.2)]"
    />
  </div>

  {/* ✨ Caption below image */}
  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-lg font-bold tracking-wide animate-fade-in-up">
    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
      
    </span>
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
{/* 🔢 Stats Section Inside Hero Container */}
{/* 🔢 Personalized Stats Section */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
  {/* Class Representative */}
  <div className="border-r border-gray-600 px-4">
    <h3 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent animate-pulse">
      3
    </h3>
    <p className="mt-2 text-lg font-semibold uppercase tracking-wide">
      Years as Class Representative
    </p>
  </div>

  {/* Hackathons */}
  <div className="border-r border-gray-600 px-4">
    <h3 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
      7+
    </h3>
    <p className="mt-2 text-lg font-semibold uppercase tracking-wide">
      Hackathons Participated
    </p>
  </div>

  {/* Internships */}
  <div className="border-r border-gray-600 px-4">
    <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
      6+
    </h3>
    <p className="mt-2 text-lg font-semibold uppercase tracking-wide">
      Internships Completed
    </p>
  </div>

  {/* Projects */}
  <div className="px-4">
    <h3 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
      9+
    </h3>
    <p className="mt-2 text-lg font-semibold uppercase tracking-wide">
      Projects Built
    </p>
  </div>
</div>

</section>


<section className="relative bg-black bg-opacity-30 p-10 rounded-3xl shadow-2xl mb-16 text-white border border-white/10 overflow-hidden">
  {/* ✨ Background animated blobs */}
  <div className="absolute w-48 h-48 bg-pink-500 opacity-20 rounded-full blur-3xl top-[-3rem] left-[-3rem] animate-ping" />
  <div className="absolute w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-2xl bottom-[-2rem] right-[4rem] animate-pulse" />
  <div className="absolute w-40 h-40 bg-purple-400 opacity-10 rounded-full blur-2xl top-[50%] left-[45%] animate-pulse" />

  <motion.div
    className="flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
    }}
  >
    {/* 💬 Text Section */}
    <div className="flex-1 text-lg tracking-wide">
      <motion.h2
        className="text-4xl font-bold mb-6 tracking-wide text-purple-300"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        💫 About Me
      </motion.h2>

      {[
        "Hey there! I'm <pink>Gayatri</pink> 👋 — a <blue>Computer Science (AIML)</blue> student passionate about innovation and design.",
        "I'm a proud <teal>Android Developer</teal> @ <purple>GDG Campus</purple> and a <yellow>SIH 2023 Finalist</yellow> 🚀.",
        "With projects in <green>AI/ML</green>, <orange>Full Stack</orange>, and <sky>Networking</sky>, I thrive at the intersection of <pink>code</pink> and <purple>creativity</purple>.",
        "I’m also a <pink>mandala artist</pink> who turns imagination into visuals and algorithms.",
        "Learning, building, leading — that’s my mantra 💡",
      ].map((line, index) => (
        <motion.p
          key={index}
          className="mb-4 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.3 }}
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/<pink>(.*?)<\/pink>/g, '<span class="text-pink-400 font-bold animate-pulse">$1</span>')
              .replace(/<blue>(.*?)<\/blue>/g, '<span class="text-blue-400 font-bold animate-glow">$1</span>')
              .replace(/<teal>(.*?)<\/teal>/g, '<span class="text-teal-300 font-bold animate-glow">$1</span>')
              .replace(/<yellow>(.*?)<\/yellow>/g, '<span class="text-yellow-300 font-bold animate-pulse">$1</span>')
              .replace(/<purple>(.*?)<\/purple>/g, '<span class="text-purple-300 font-bold animate-glow">$1</span>')
              .replace(/<green>(.*?)<\/green>/g, '<span class="text-green-300 font-bold animate-pulse">$1</span>')
              .replace(/<orange>(.*?)<\/orange>/g, '<span class="text-orange-300 font-bold animate-glow">$1</span>')
              .replace(/<sky>(.*?)<\/sky>/g, '<span class="text-sky-300 font-bold animate-pulse">$1</span>'),
          }}
        />
      ))}
    </div>

    {/* 🖼️ Animated Image Section */}
    <motion.div
      className="md:w-[18rem] md:h-[24rem] w-52 h-64 rounded-3xl overflow-hidden border-4 border-white/10 shadow-xl"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      <motion.img
        src="profile2.jpg"
        alt="Gayatri"
        className="w-full h-full object-cover rounded-3xl"
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 0 0px rgba(255, 255, 255, 0.2)",
            "0 0 25px rgba(255, 105, 180, 0.4)",
            "0 0 0px rgba(255, 255, 255, 0.2)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
</section>




 <section id="skills" className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
  <h2 className="text-3xl font-bold text-teal-300 mb-6">💼 Skills</h2>

  {/* Technical Skills */}
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-white mb-4">🛠 Technical Skills</h3>
    <div className="flex flex-wrap gap-10 justify-start">
      {technicalSkills.map((skill, index) => (
  <SkillCircle
    key={`tech-${index}`}
    value={skill.confidence}
    label={skill.name}
    icon={skill.icon} // <- add this
    gradientId={`tech-gradient-${index}`}
     glowColor="sky" 
  />
))}
    </div>
  </div>

  {/* Soft Skills */}
  <div>
    <h3 className="text-2xl font-semibold text-pink-400 mb-4">🤝 Soft Skills</h3>
    <div className="flex flex-wrap gap-10 justify-start">
      {softSkills.map((skill, index) => (
  <SkillCircle
    key={`soft-${index}`}
    value={100}
    label={skill.name}
    icon={skill.icon} // <- add this
    gradientId={`soft-gradient-${index}`}
    colorFrom="#ff69b4"
    colorTo="#ffb6c1"
    glowColor="pink" 
  />
))}
    </div>
  </div>
</section>

      {/* Achievements */}
<section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
  <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
    🏆 My Achievements
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
    {achievements.map((ach, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15, type: "spring", stiffness: 60 }}
        viewport={{ once: true }}
        className="group relative flex flex-col items-center"
      >
        {/* 🌟 Animated Hexagon */}
        <div className="relative w-32 h-36 hexagon-shape bg-gradient-to-br from-yellow-500/40 to-yellow-300/20 shadow-2xl transition-transform duration-500 group-hover:scale-105 overflow-hidden">
          {/* ✨ Hover Shine Animation */}
          <div className="absolute inset-0 shimmer pointer-events-none"></div>

          {/* 🔘 Circular Image Inside */}
          <div className="flex items-center justify-center w-full h-full relative z-10">
            <img
              src={ach.image}
              alt={ach.title}
              className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* 🏷️ Achievement Title */}
        <motion.div
          className="mt-3 text-yellow-100 font-semibold text-center text-base leading-tight group-hover:text-white transition duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 + 0.3, duration: 0.5 }}
        >
          {ach.title}
        </motion.div>

        {/* 💫 Subtle Background Glow */}
        <div className="absolute w-28 h-28 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-ping -top-4 -right-4 z-0" />
        <div className="absolute w-24 h-24 bg-yellow-600 opacity-10 rounded-full blur-2xl animate-pulse bottom-0 left-0 z-0" />
      </motion.div>
    ))}
  </div>
</section>

      {/* Projects */}
    
      {/* Projects Section */}
     <section className="bg-black bg-opacity-40 rounded-3xl p-6 shadow-inner mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">🚀 Projects</h2>
        <ProjectSection
          title="📱 Android Development Projects"
          projects={androidProjects}
          onSelect={setSelectedProject}
        />
        <ProjectSection
          title="🧠 Machine Learning Projects"
          projects={mlProjects}
          onSelect={setSelectedProject}
        />
        <ProjectSection
          title="🌐 Web Developing Projects"
          projects={webProjects}
          onSelect={setSelectedProject}
        />
      </section>

      {/* Selected Project Details Container */}
      {selectedProject && (
       <section className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl mb-12 border border-white/10">
  <div className="flex flex-col md:flex-row gap-8">
    {/* 🎬 Project Preview */}
    <div className="flex-1">
      <div className="overflow-hidden rounded-2xl border-2 border-green-500 shadow-lg">
        <iframe
          src={selectedProject.link}
          title="Project Video"
          className="w-full h-64 md:h-96"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* 📋 Project Details */}
    <div className="flex-1 flex flex-col gap-5 text-white">
      <h3 className="text-3xl font-extrabold text-green-300">{selectedProject.title}</h3>

      <p className="text-white/90 text-md leading-relaxed">
        {selectedProject.description}
      </p>

      {/* 🧰 Tech Stack */}
      <div>
        <h4 className="text-lg font-semibold text-green-200 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-3">
          {selectedProject.techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-green-800/30 text-green-100 rounded-full border border-green-500 shadow hover:scale-105 transition"
            >
              {getIconForTech(tech)}
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ❌ Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="self-start mt-4 px-5 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
      >
        Close
      </button>
    </div>
  </div>
</section>

      )}
    
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
