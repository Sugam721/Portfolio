import { motion } from "motion/react";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition"
    >
      <h3 className="text-lg font-semibold">{skill}</h3>
    </motion.div>
  );
};

export default SkillCard;
