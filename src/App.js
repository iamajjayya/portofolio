import React, { useEffect, useState } from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactLinks = [
  { icon: <FiMail />, href: "mailto:ajjayya2002@gmail.com", label: "Email" },
  { icon: <FiGithub />, href: "https://github.com/iamajjayya", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://linkedin.com/in/ajjayya-gv", label: "LinkedIn" },
];

const skills = {
  Testing: [
    "📝 Manual Testing",
    "✔️ Functional Testing",
    "🔄 Regression Testing",
    "🔥 Sanity & Smoke Testing",
    "🌐 Cross-Browser Testing",
    "🐞 Bug Reporting",
    "📊 SDLC",
    "🛠️ STLC",
    "🗒️ Test Case Design & Execution",
    "🔍 Defect Tracking & Reporting",
    "🧪 Exploratory Testing",
    "🚀 Agile Methodology",
  ],
  Automation: [
    "🐍 Python",
    "🕷️ Selenium WebDriver",
    "🧪 Pytest",
    "📄 Page Object Model (POM)",
    "🌐 API Testing (Requests)",
    "⚙️ Jenkins CI/CD",
    "🔧 Git & GitHub",
    "🌊 Docker"
  ],
  Tools: [
    "🗄️ SQL",
    "💻 HTML, CSS, JavaScript",
    "⚛️ React.js",
    "📨 Postman",
    "📋 Jira",
  ],
};

const projects = [
  {
    title: "Selenium Hybrid Automation Framework",
    date: "May 2025 - Jun 2025",
    description:
      "Hybrid automation framework using Page Object Model & Data-Driven approach with HTML reports and Jenkins CI/CD integration.",
    tech: ["🐍 Python", "🕷️ Selenium", "🧪 Pytest", "📄 HTML Reports", "🛠️ Jenkins"],
    repo: "https://github.com/iamajjayya/Automation_framework.git",
  },
  {
    title: "API Automation Framework",
    date: "Aug 2025",
    description:
      "Automated REST API testing with validation of endpoints, status codes, and response content.",
    tech: ["🐍 Python", "🧪 Pytest", "🌐 Requests", "🛠️ Jenkins"],
    repo: "https://github.com/iamajjayya/api_automation_framework.git",
  },
  {
    title: "🛒 E-commerce Website",
    date: "Live",
    description:
      "React.js e-commerce platform with user authentication, product listings, shopping cart, and checkout flow.",
    tech: ["⚛️ React.js", "🔐 Authentication", "🌐 REST API"],
    live: "https://ecommerceajjayya.netlify.app/",
  },
  {
    title: "💪 Gym Application",
    date: "Live",
    description:
      "Workout guide app using ExerciseDB and YouTube APIs for exercise videos and routines.",
    tech: ["⚛️ React.js", "🌐 REST API", "▶️ YouTube API"],
    live: "https://gymajjayya.netlify.app/",
  },
];

const experience = [
  {
    role: "QA/QC Engineer",
    company: "RTBDemand.com",
    duration: "Sep 2024 – Present (Remote)",
    points: [
      "Performed manual testing for ad-tech systems on desktop and mobile.",
      "Verified ad script integration, refresh functionality, and placement.",
      "Executed sanity, smoke, and regression testing across multiple environments.",
      "Logged defects, created test documentation, collaborated with developers.",
      "Conducted basic API validations for ad delivery checks.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Internplus+",
    duration: "Jul 2024 – Sep 2024 (Remote)",
    points: [
      "Built responsive UI components using React.js.",
      "Integrated and tested APIs in an Agile environment.",
    ],
  },
];

const bugQuotes = [
  "Keep calm and test on! 🐞",
  "Bug found? Celebrate! 🎉",
  "Automate all the things! 🤖",
  "A bug a day keeps the user away. 😜",
  "Good testers find bugs, great testers break code! 💥",
  "Test early, test often! 🧪",
  "If it ain't tested, it ain't right! ✔️",
  "Keep your bugs close and your tests closer. 🔍",
  "Debugging: where the fun begins! 🛠️",
  "Code hard, test harder! 💪",
  "Eat, sleep, test, repeat. 🔄",
  "Happy testing, happy coding! 😊",
  "Finding bugs faster than you can say 'QA'! 🐞",
  "Don't fear the bug, own it! 👊",
  "Every bug is a new adventure! 🚀",
  "Test it like you own it! 🏆",
  "Quality is not an act, it's a habit. 🧘",
  "Make bugs afraid of you! 😈",
  "Break it till you make it! 🛠️",
  "Bug-free is the way to be! ✨",
  "Trust but verify! 🔎",
  "Better a bug in the test than in production! 🔥",
  "Testers: The unsung heroes. 🦸",
  "Turn bugs into features! 😉",
  "May your tests be swift and your bugs be tiny! ⚡",
];

function useRandomQuote(quotes) {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    let timeoutId;

    function scheduleNext() {
      const nextIn = Math.random() * 5000 + 15000;
      timeoutId = setTimeout(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        scheduleNext();
      }, nextIn);
    }

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [quotes]);

  return quote;
}

function Bug({ size = 60, variant = 1 }) {
  const quote = useRandomQuote(bugQuotes);

  const [pos, setPos] = useState({
    x: Math.random() * (window.innerWidth - size),
    y: Math.random() * (window.innerHeight - size),
  });

  useEffect(() => {
    let animationFrameId;
    let direction = { x: 1, y: 1 };
    let speed = 0.2 + Math.random() * 0.2;

    function move() {
      setPos((prev) => {
        let nextX = prev.x + direction.x * speed;
        let nextY = prev.y + direction.y * speed;

        if (nextX < 0 || nextX > window.innerWidth - size) direction.x *= -1;
        if (nextY < 0 || nextY > window.innerHeight - size) direction.y *= -1;

        return {
          x: Math.min(Math.max(nextX, 0), window.innerWidth - size),
          y: Math.min(Math.max(nextY, 0), window.innerHeight - size),
        };
      });

      animationFrameId = requestAnimationFrame(move);
    }

    animationFrameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrameId);
  }, [size]);

  const styleBase = {
    position: "fixed",
    top: pos.y,
    left: pos.x,
    width: size,
    height: size,
    fontSize: size * 0.8,
    cursor: "default",
    userSelect: "none",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "auto",
    color: variant === 1 ? "#7c3aed" : "#facc15",
    filter:
      variant === 1
        ? "drop-shadow(0 0 4px #7c3aedaa)"
        : "drop-shadow(0 0 6px #facc1588)",
    transformOrigin: "center",
    animation: variant === 1 ? "bugRotate1 6s linear infinite" : "bugRotate2 8s linear infinite reverse",
  };

  return (
    <>
      <style>{`
        @keyframes bugRotate1 {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes bugRotate2 {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
      <div style={styleBase} title={quote} aria-label={quote} role="img" aria-live="polite">
        🐞
        <div
          style={{
            position: "absolute",
            bottom: `calc(100% + 8px)`,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(124, 58, 237, 0.85)",
            color: "white",
            padding: "6px 10px",
            borderRadius: "12px",
            fontSize: 12,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            opacity: 0.9,
            fontWeight: "600",
            zIndex: 10000,
          }}
        >
          {quote}
        </div>
      </div>
    </>
  );
}

function AnimatedSection({ children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-20"
    >
      {children}
    </motion.section>
  );
}

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-indigo-50/90 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 md:gap-0">
          <div className="flex items-center gap-3 select-none cursor-default">
            <motion.h1
              className="text-indigo-700 text-3xl font-extrabold tracking-wide"
              whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1 }}
            >
              Ajjayya G V
            </motion.h1>
            <motion.span
              className="text-3xl"
              role="img"
              aria-label="waving robot"
              title="Hello! 👋"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              🤖
            </motion.span>
          </div>
          <p className="text-indigo-700 font-medium tracking-wide md:ml-6 text-center md:text-left">
            QA Automation Tester | Python | Manual & Automation
          </p>
          <div className="flex items-center gap-6 text-indigo-700 text-2xl justify-center md:justify-start">
            {contactLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.3, color: "#7c3aed", rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transition-colors"
              >
                {icon}
              </motion.a>
            ))}
           
          </div>
        </div>
      </header>

      <main className="pt-28 pb-16 max-w-6xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <motion.h2
            className="text-indigo-700 text-3xl font-bold mb-6 flex items-center gap-3 select-none cursor-default"
            whileHover={{ scale: 1.1, rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.8 }}
          >
            👤 Profile Summary
          </motion.h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Detail-oriented QA Tester with professional experience in manual testing of web and ad-tech platforms.
            Skilled in functional, regression, sanity, and smoke testing, validating ad integrations, and collaborating
            with developers for issue resolution. Strong theoretical and hands-on knowledge of Selenium automation and
            API testing through personal projects, committed to transitioning into automation roles.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h2
            className="text-indigo-700 text-3xl font-bold mb-10 flex items-center gap-3 select-none cursor-default"
            whileHover={{ scale: 1.1, rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.8 }}
          >
            🛠️ Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-indigo-600 text-xl font-semibold mb-5">{category}</h3>
                <ul className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{
                        scale: 1.3,
                        rotate: [0, 10, -10, 0],
                        color: "#7c3aed",
                        textShadow: "0 0 8px #7c3aed",
                      }}
                      whileTap={{ scale: 0.9, rotate: 0 }}
                      className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer select-none shadow-md transition-colors duration-300"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h2
            className="text-indigo-700 text-3xl font-bold mb-10 flex items-center gap-3 select-none cursor-default"
            whileHover={{ scale: 1.1, rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.8 }}
          >
            💼 Professional Experience
          </motion.h2>
          <div className="space-y-10">
            {experience.map(({ role, company, duration, points }) => (
              <motion.article
                key={role}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(124, 58, 237, 0.4)",
                }}
                className="bg-white p-8 rounded-3xl shadow-md transition-shadow duration-300"
              >
                <h3 className="text-indigo-700 text-2xl font-semibold mb-1">{role}</h3>
                <p className="italic text-indigo-500 mb-4">
                  {company} • {duration}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h2
            className="text-indigo-700 text-3xl font-bold mb-12 flex items-center gap-3 select-none cursor-default"
            whileHover={{ scale: 1.1, rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.8 }}
          >
            🚀 Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map(({ title, date, description, tech, repo, live }) => (
              <motion.article
                key={title}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 15px 30px rgba(124, 58, 237, 0.5)",
                }}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-indigo-800 text-2xl font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-indigo-500 italic mb-4">{date}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-5">
                  {tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.4, rotate: [0, 10, -10, 0] }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-semibold cursor-pointer select-none shadow-sm"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-8">
                  {repo && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 font-semibold hover:underline flex items-center gap-2"
                    >
                      <FiGithub /> Repo
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 font-semibold hover:underline flex items-center gap-2"
                    >
                      🔗 Live
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: [0, 15, -15, 0] }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 bg-indigo-700 hover:bg-indigo-800 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <Bug size={60} variant={1} />
      <Bug size={50} variant={2} />

      <footer className="mt-16 py-8 bg-indigo-50 text-indigo-700 text-center font-semibold tracking-wide select-none">
        Made with ❤️ and a little bit of 🐞 magic by Ajjayya G V — Keep calm and test on!
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@400;600;700&display=swap');
        body {
          font-family: 'Poppins', 'Merriweather', serif;
          background-color: #fafafa;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}
