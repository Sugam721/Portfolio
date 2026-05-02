import { motion } from "motion/react";

const services = [
  {
    title: "Web Development",
    desc: "Building responsive and secure web applications with authentication, authorization, and modern frontend frameworks like React, TailwindCSS, and backend technologies like Node.js, Django, and MongoDB.",
  },
  {
    title: "Mobile App Development",
    desc: "Creating cross-platform mobile applications using Flutter, integrating APIs, and connecting to backend services. Example: Bibha Bandan marriage app with Kundali matching.",
  },
  {
    title: "Machine Learning & AI",
    desc: "Developing ML models and recommender systems to analyze data and provide predictions or suggestions. Example: Student performance predictor and IMDB movie recommender.",
  },
  {
    title: "UI/UX Design Implementation",
    desc: "Turning designs into interactive and user-friendly interfaces for web and mobile apps with clean layouts, smooth animations, and responsive behavior.",
  },
  {
    title: "Hardware + Software Integration",
    desc: "Building innovative hardware projects that communicate with mobile applications, enhancing safety and usability. Example: Smart Helmet project with embedded sensors and Flutter app.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          My Services
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl cursor-pointer hover:bg-gray-700 transition"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
