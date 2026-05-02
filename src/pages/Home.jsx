import { motion, useMotionValue, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Biwah Bandhan",
    desc: "Marriage-related mobile app with Kundali matching",
    tech: "Python + Django + Flutter",
    type: "Mobile App",
  },
  {
    title: "Student Management System",
    desc: "Web app with authentication and authorization",
    tech: "React + Node.js + MongoDB",
    type: "Web App",
  },
  {
    title: "IMDB Movie Recommender",
    desc: "Movie recommendation system using collaborative filtering",
    tech: "Python + scikit-learn",
    type: "ML Project",
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Python", level: 80 },
  { name: "Django", level: 75 },
  { name: "Flutter", level: 70 },
  { name: "Node.js", level: 65 },
];

const terminalLines = [
  { text: "const sugam = {", color: "text-gray-300" },
  { text: '  name: "Sugam Sharma",', color: "text-green-400" },
  { text: '  role: "Full Stack Dev",', color: "text-green-400" },
  { text: '  location: "Nepal 🇳🇵",', color: "text-green-400" },
  { text: "  skills: [", color: "text-gray-300" },
  { text: '    "React", "Flutter",', color: "text-yellow-300" },
  { text: '    "Python", "Django",', color: "text-yellow-300" },
  { text: '    "Node.js", "ML"', color: "text-yellow-300" },
  { text: "  ],", color: "text-gray-300" },
  { text: '  status: "open to work ✅"', color: "text-cyan-400" },
  { text: "}", color: "text-gray-300" },
];

const ParticleField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.4 + 0.15,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.07 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const GlitchText = ({ text }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{text}</span>
    <motion.span
      className="absolute inset-0 text-cyan-400 z-20 select-none"
      style={{ clipPath: "inset(0 0 65% 0)" }}
      animate={{ x: [0, -4, 3, 0], opacity: [0, 1, 0.8, 0] }}
      transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 4 }}
    >
      {text}
    </motion.span>
    <motion.span
      className="absolute inset-0 text-pink-500 z-20 select-none"
      style={{ clipPath: "inset(55% 0 0 0)" }}
      animate={{ x: [0, 4, -3, 0], opacity: [0, 1, 0.8, 0] }}
      transition={{
        duration: 0.18,
        repeat: Infinity,
        repeatDelay: 4,
        delay: 0.06,
      }}
    >
      {text}
    </motion.span>
  </span>
);

/* ─────────────────────────────────────────
   TYPING TEXT
───────────────────────────────────────── */
const TypingText = ({ phrases }) => {
  const [pi, setPi] = useState(0);
  const [shown, setShown] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const phrase = phrases[pi];
    let t;
    if (!del && shown.length < phrase.length)
      t = setTimeout(() => setShown(phrase.slice(0, shown.length + 1)), 65);
    else if (!del && shown.length === phrase.length)
      t = setTimeout(() => setDel(true), 1800);
    else if (del && shown.length > 0)
      t = setTimeout(() => setShown(shown.slice(0, -1)), 32);
    else {
      setDel(false);
      setPi((p) => (p + 1) % phrases.length);
    }
    return () => clearTimeout(t);
  }, [shown, del, pi, phrases]);
  return (
    <span>
      {shown}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block ml-0.5 w-0.5 h-5 bg-cyan-400 align-middle"
      />
    </span>
  );
};

/* ─────────────────────────────────────────
   LIVE TERMINAL WIDGET
───────────────────────────────────────── */
const TerminalWidget = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 130);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="relative w-full max-w-md"
    >
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.12, 0.3, 0.12] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -inset-4 bg-cyan-500 blur-3xl rounded-3xl pointer-events-none"
      />

      {/* Terminal window */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-700/60 shadow-2xl bg-[#0d1117]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700/60">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-gray-500 font-mono tracking-wider">
            sugam.js
          </span>
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="ml-auto text-[10px] text-green-400 font-mono"
          >
            ● LIVE
          </motion.span>
        </div>

        {/* Code lines */}
        <div className="p-5 font-mono text-sm leading-7 min-h-70">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={line.color}
            >
              <span className="text-gray-600 select-none mr-4 text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              {line.text}
            </motion.div>
          ))}
          {visibleLines < terminalLines.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 ml-8 align-middle"
            />
          )}
        </div>

        {/* Bottom prompt */}
        <div className="px-5 py-3 border-t border-gray-700/40 bg-[#0d1117] flex items-center gap-2">
          <span className="text-green-400 font-mono text-xs">▶</span>
          <span className="text-gray-500 font-mono text-xs">
            Ready to collaborate...
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3.5 bg-gray-500 ml-1 align-middle"
          />
        </div>
      </div>

      {/* Floating role badges */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider"
      >
        FULL STACK
      </motion.div>
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 bg-violet-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider"
      >
        ML ENGINEER
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   3D TILT CARD
───────────────────────────────────────── */
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────── */
const StatCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let n = 0;
    const step = Math.max(1, Math.ceil(value / 50));
    const t = setInterval(() => {
      n = Math.min(n + step, value);
      setCount(n);
      if (n >= value) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [value]);
  return (
    <div className="text-center">
      <p className="text-3xl font-black text-cyan-400">{count}+</p>
      <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
        {label}
      </p>
    </div>
  );
};

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
const Home = () => {
  return (
    <div className="w-full overflow-x-hidden font-sans bg-gray-900 text-white">
      {/* ══ HERO ══ */}
      <section className="min-h-screen flex items-center px-6 md:px-16 bg-linear-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
        <ParticleField />

        {/* Dot grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-cyan-500 blur-[120px] pointer-events-none z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-violet-500 blur-[100px] pointer-events-none z-0"
        />

        <div className="max-w-6xl mx-auto relative z-10 pt-24 pb-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs text-cyan-400 tracking-widest mb-7 bg-cyan-950/20"
              >
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
                />
                AVAILABLE FOR WORK
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-blue-500">
                  <GlitchText text="Sugam" />
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
                <TypingText
                  phrases={[
                    "Full Stack Developer",
                    "Computer Engineering Student",
                    "Mobile App Builder",
                    "ML Enthusiast",
                  ]}
                />
              </h2>

              <p className="text-gray-400 mb-8 max-w-lg">
                I build web and mobile applications, work on machine learning
                projects, and develop hardware-software solutions. I focus on
                clean design, smooth experiences, and innovative solutions.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/projects">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px #3b82f660",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all font-semibold"
                  >
                    View Projects
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#38bdf8",
                      color: "#38bdf8",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-12 flex gap-10 border-t border-gray-700 pt-10"
              >
                <StatCounter value={9} label="Projects" />
                <StatCounter value={6} label="Technologies" />
                <StatCounter value={2} label="Years Exp" />
              </motion.div>
            </motion.div>

            {/* RIGHT — Terminal */}
            <div className="flex justify-center md:justify-end">
              <TerminalWidget />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-[4px] text-gray-600">
            SCROLL
          </span>
          <div className="w-px h-8 bg-linear-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="py-24 px-6 md:px-16 bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.09 }}
            >
              <TiltCard className="bg-gray-700 hover:bg-gray-700/80 border border-gray-600/30 hover:border-cyan-500/30 p-5 rounded-xl shadow-lg transition-colors duration-300 cursor-default">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-cyan-400 text-xs font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.3,
                      delay: idx * 0.09 + 0.2,
                      ease: "easeOut",
                    }}
                    className="h-2 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #06b6d4, #8b5cf6)",
                    }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED PROJECTS ══ */}
      <section className="py-24 px-6 md:px-16 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.13 }}
            >
              <TiltCard className="group bg-gray-800 hover:bg-gray-700 border border-gray-700/50 hover:border-cyan-500/30 p-6 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer h-full">
                <span className="text-sm bg-blue-600 px-2 py-1 rounded-full text-white mb-3 inline-block">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold mb-2 mt-1 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.desc}</p>
                <p className="text-gray-400 mt-2 text-sm italic">
                  {project.tech}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.13 + 0.4, duration: 0.7 }}
                  className="mt-5 h-px bg-linear-to-r from-cyan-500 to-transparent"
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #3b82f650" }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-500 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all font-semibold"
            >
              See All Projects
            </motion.button>
          </Link>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 px-6 md:px-16 bg-linear-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-white blur-[120px] pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-200 mb-8">
            If you have a project idea or need a website, feel free to contact
            me.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.97 }}
              className="bg-black px-8 py-3 rounded-lg hover:bg-gray-900 shadow-lg transition font-semibold"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
