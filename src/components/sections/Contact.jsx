import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const SERVICE_ID = "service_pqqv8wd";
  const TEMPLATE_ID = "template_6znkueo";
  const PUBLIC_KEY = "Eo7VO61T4cmgYEXHn";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 w-full">

          <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400 text-sm mb-10 max-w-md">
            Have a project in mind or just want to say hello? Feel free to reach out — I'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

            {/* Left: Info */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <a
                href="mailto:quyquach22092003@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition text-sm"
              >
                <span className="text-blue-500 text-lg"><MdEmail /></span>
                quyquach22092003@gmail.com
              </a>

              <div className="flex gap-3 mt-2">
                <a
                  href="https://github.com/QgQ220903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl border border-white/10 text-gray-400 p-2 rounded hover:border-blue-500/30 hover:text-blue-400 transition"
                >
                  <FaGithubSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/quy-qu%C3%A1ch-337138217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl border border-white/10 text-gray-400 p-2 rounded hover:border-blue-500/30 hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <form className="md:col-span-3 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-emerald-400 text-sm text-center">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};