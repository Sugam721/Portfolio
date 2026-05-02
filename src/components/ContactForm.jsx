import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-4 bg-gray-900 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="p-4 bg-gray-900 rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        value={form.message}
        onChange={handleChange}
        className="p-4 bg-gray-900 rounded"
      />

      <button type="submit" className="bg-blue-500 py-3 rounded-lg">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
