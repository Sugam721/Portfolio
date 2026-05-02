import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "Bibha Bandan",
//     desc: "Marriage-related mobile app with Kundali matching",
//     tech: "Flutter + Firebase",
//     type: "Mobile Application",
//   },
//   {
//     title: "Student Management System",
//     desc: "Web app with authentication and authorization",
//     tech: "React + Node.js + MongoDB",
//     type: "Web Application",
//   },
//   {
//     title: "Blog Project",
//     desc: "Blog website with user authentication & authorization",
//     tech: "React + Node.js + MongoDB",
//     type: "Web Application",
//   },
//   {
//     title: "Reddit Content Fetcher",
//     desc: "Fetches comments and content from Reddit",
//     tech: "React + Reddit API",
//     type: "Web Application",
//   },
//   {
//     title: "Portfolio Website",
//     desc: "This personal portfolio website you’re viewing",
//     tech: "React + Tailwind",
//     type: "Web Application",
//   },
//   {
//     title: "Student Prediction Model",
//     desc: "ML model predicting student performance",
//     tech: "Python + scikit-learn",
//     type: "Machine Learning",
//   },
//   {
//     title: "IMDB Movie Recommender",
//     desc: "Movie recommendation system using collaborative filtering",
//     tech: "Python + Pandas + scikit-learn",
//     type: "Machine Learning",
//   },
//   {
//     title: "ToDos App",
//     desc: "Simple task management app",
//     tech: "React",
//     type: "Web Application",
//   },
//   {
//     title: "Smart Helmet",
//     desc: "Hardware+mobile app to enhance safety; Flutter mobile app with embedded sensors",
//     tech: "Flutter + Arduino/Raspberry Pi",
//     type: "Hardware + Mobile",
//   },
// ];

const projects = [
  {
    title: "Biwah Bandhan",
    desc: "Marriage-related mobile app with Kundali matching",
    tech: "Flutter + Firebase",
    type: "Mobile Application",
    github: "https://github.com/Sugam721/Biwah-Bandhan",
  },
  {
    title: "Biwah Bandhan Frontend",
    desc: "Frontend for marriage-related application",
    tech: "React",
    type: "Web Application",
    github: "https://github.com/Sugam721/Biwah-Bandhan-Frontend",
  },
  {
    title: "Reddit Content Fetcher",
    desc: "Fetches comments and content from Reddit",
    tech: "React + Reddit API",
    type: "Web Application",
    github: "https://github.com/Sugam721/Reddit-Content-Fetcher",
  },

  {
    title: "Student Performance Analysis",
    desc: "ML model predicting student performance",
    tech: "Python + scikit-learn",
    type: "Machine Learning",
    github:
      "https://github.com/Sugam721/Student-Performance-Analysis-ML-Project",
  },
  {
    title: "Blog Project",
    desc: "Blog website with authentication & authorization",
    tech: "React + Node.js + MongoDB",
    type: "Web Application",
    github: "https://github.com/Sugam721/Project_Blog",
  },
  {
    title: "E-Commerce Store",
    desc: "Online shopping web application for browsing and purchasing products",
    tech: "React",
    type: "Web Application",
    github: "https://github.com/Sugam721/E-Commerce",
  },
  {
    title: "Smart Helmet",
    desc: "Hardware + mobile app for safety with sensors",
    tech: "Flutter + Arduino/Raspberry Pi",
    type: "Hardware + Mobile",
    github: "https://github.com/Sugam721/smart_helmet",
  },
  {
    title: "ToDos App",
    desc: "Simple task management UI",
    tech: "React",
    type: "Web Application",
    github: "https://github.com/Sugam721/ToDos-UI",
  },
  {
    title: "IMDB Movie Prediction",
    desc: "Predicts box office revenue and IMDB score",
    tech: "Python + ML",
    type: "Machine Learning",
    github:
      "https://github.com/Sugam721/Box-Office-Revenue-and-IMDB-Score-Prediction",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-10 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-white text-center"
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                type={project.type}
                github={project.github}
                live={project.live}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
