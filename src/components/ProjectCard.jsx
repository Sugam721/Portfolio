import { motion } from "motion/react";

const ProjectCard = ({ title, desc, tech, github, live }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 rounded-xl"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-400">{desc}</p>

      <p className="text-blue-400 text-sm mt-3">{tech}</p>

      <div className="flex gap-4 mt-6">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-4 py-2 rounded inline-block"
          >
            Live
          </a>
        )}

        <a
          href={github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="border px-4 py-2 rounded inline-block"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
