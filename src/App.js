import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaAndroid,
  FaDatabase,
  FaGitAlt,
  FaBrain,
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const projects = [
  {
    title: "AI Image Classifier",
    description: "Built using TensorFlow and Keras to classify images into multiple categories.",
    image: "https://via.placeholder.com/300x180.png?text=AI+Classifier",
  },
  {
    title: "Chatbot with Transformers",
    description: "Conversational chatbot using HuggingFace transformers and PyTorch.",
    image: "https://via.placeholder.com/300x180.png?text=Chatbot",
  },
  {
    title: "Drawing App",
    description: "Android app that lets users draw and save to gallery with description.",
    image: "https://via.placeholder.com/300x180.png?text=Drawing+App",
  },
];

const technicalSkills = [
  { name: "Python", confidence: 90, icon: <FaPython />, domain: "AI/ML" },
  { name: "TensorFlow", confidence: 80, icon: <FaBrain />, domain: "AI/ML" },
  { name: "Machine Learning", confidence: 75, icon: <FaBrain />, domain: "AI/ML" },
  { name: "React", confidence: 85, icon: <FaReact />, domain: "Web" },
  { name: "Tailwind CSS", confidence: 85, icon: <FaReact />, domain: "Web" },
  { name: "Git", confidence: 80, icon: <FaGitAlt />, domain: "Tools" },
  { name: "Data Analysis", confidence: 70, icon: <FaDatabase />, domain: "Data" },
  { name: "Android Development", confidence: 88, icon: <FaAndroid />, domain: "Mobile" },
];

const softSkills = [
  { name: "Leadership", icon: <FaUsers /> },
  { name: "Creativity", icon: <FaLightbulb /> },
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Problem Solving", icon: <FaLightbulb /> },
];

const achievements = [
  "Class Representative since 2022 (continuing)",
  "Student Innovator at AIMERS Club (CSM Club inaugural year)",
  "Team selected for Smart India Hackathon Finale",
  "Android Developer at GDG On Campus",
  "Finalist at Smart India Hackathon 2023",
  "Top 5 in Tribal Welfare Hackathon, Andhra University",
  "Certified TensorFlow Developer",
  "Led Android session at GDG campus (March 2025)",
  "Completed Full Stack Internship at ExcelR",
];

function ProfileSection() {
  return (
    <section className="p-8 bg-black bg-opacity-30 rounded-3xl shadow-lg text-white mb-16 min-h-[28rem]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
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
          src="profile.jpg"
          alt="Gayatri"
          className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-3xl border-4 border-yellow-400 shadow-lg flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
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
      <ProfileSection />

      <section className="space-y-12 bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <div>
          <h2 className="text-3xl font-bold text-teal-300 mb-6">🛠 Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gradient-to-r from-cyan-700 to-blue-900 bg-opacity-50 rounded-lg p-4 shadow-md"
              >
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <div className="text-2xl">{skill.icon}</div>
                  {skill.name}
                </div>
                <div className="relative">
                  <svg className="w-12 h-12" viewBox="0 0 36 36">
                    <path
                      className="text-gray-600"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    /*<path
                      className="text-green-400"
                      strokeWidth="4"
                      strokeDasharray={`${skill.confidence}, 100`}
                     strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />*/
                    <text
                      x="18"
                      y="20.35"
                      className="text-sm fill-white text-center"
                      textAnchor="middle"
                    >
                      {skill.confidence}%
                    </text>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-pink-400 mb-6">🤝 Soft Skills</h2>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-pink-800 bg-opacity-30 rounded-lg p-4 w-32 text-center shadow-inner hover:bg-pink-700 transition"
              >
                <div className="text-4xl text-pink-400">{skill.icon}</div>
                <div className="font-semibold text-white text-lg">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">🏆 Achievements</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-yellow-900 bg-opacity-30 text-yellow-100 rounded-xl hover:bg-yellow-800 hover:bg-opacity-50 transition shadow-sm"
            >
              <FaTrophy className="text-yellow-300 mt-1" />
              <span className="text-lg">{ach}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md mb-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">🚀 Projects</h2>
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
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-black bg-opacity-30 rounded-3xl p-6 shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">📬 Contact Me</h2>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-6 mb-8 text-white">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-cyan-400" /> gayatri@example.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-cyan-400" /> +91 98765 43210
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-cyan-400" />
            <a
              href="https://linkedin.com/in/gayatri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/gayatri
            </a>
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactForm.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={contactForm.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 resize-none focus:outline-none focus:border-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-400 font-semibold text-center">
            Thank you for reaching out! I will get back to you soon.
          </p>
        )}
      </section>
    </div>
  );
}

export default App;