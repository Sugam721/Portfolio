import { motion } from "motion/react";

const About = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-300 leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto mb-16"
        >
          I'm a passionate Computer Engineering student and full-stack
          developer. I build modern web apps, cross-platform mobile
          applications, machine learning models, and innovative
          hardware-software solutions. I love creating clean, intuitive
          interfaces and smooth user experiences.
        </motion.p>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Experience
            </h2>
            <ul className="text-gray-300 space-y-3 list-disc ml-5">
              <li>
                Full-stack web applications with React, Tailwind, Node.js,
                Django, MongoDB
              </li>
              <li>Cross-platform mobile apps using Flutter + Firebase</li>
              <li>
                Machine learning models for prediction and recommendation
                systems
              </li>
              <li>Hardware + mobile integration projects like Smart Helmet</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Education
            </h2>
            <ul className="text-gray-300 space-y-3 list-disc ml-5">
              <li>Currently pursuing Computer Engineering</li>
              <li>
                Focused on full-stack development, mobile app development, and
                ML projects
              </li>
              <li>
                Hands-on experience with Python, Django, Flutter, React,
                Tailwind, Node.js
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Tech Skills / Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "TailwindCSS",
              "Python",
              "Django",
              "Flutter",
              "Node.js",
              "MongoDB",
              "Firebase",
              "ML/AI",
            ].map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-600 rounded-full shadow-lg text-white font-medium cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
