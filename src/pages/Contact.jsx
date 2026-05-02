import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 mb-12 text-lg"
        >
          Have a project idea or want to collaborate? Send me a message and I’ll
          get back to you as soon as possible.
        </motion.p>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl relative"
        >
          <div className="absolute -inset-6 bg-blue-500 blur-3xl opacity-20 rounded-2xl"></div>
          <div className="relative">
            <ContactForm />
          </div>
        </motion.div>

        {/* Optional Social Links / Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex flex-col md:flex-row justify-center gap-8 text-gray-300"
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Email:</span>
            <a
              href="mailto:sugamsharma27@gmail.com"
              className="hover:text-blue-400 transition"
            >
              sugamsharma27@gmail..com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Phone:</span>
            <span>+977-9864835573</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">GitHub:</span>
            <a
              href="https://github.com/Sugam721"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              github.com/Sugam721
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
