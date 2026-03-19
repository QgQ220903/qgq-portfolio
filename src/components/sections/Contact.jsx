import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const SERVICE_ID = "service_pqqv8wd";
  const TEMPLATE_ID = "template_6znkueo";
  const PUBLIC_KEY = "Eo7VO61T4cmgYEXHn";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-2">Contact</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Get In Touch</h2>
          <p className="text-gray-500 text-sm font-normal mb-10 max-w-md">
            Have a project in mind or just want to say hello? Feel free to reach out — I'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

            {/* Left info */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <a
                href="mailto:quyquach22092003@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors text-sm font-normal"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MdEmail size={16} />
                </span>
                quyquach22092003@gmail.com
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/QgQ220903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  <FaGithubSquare size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/quy-qu%C3%A1ch-337138217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-200 text-gray-400 flex items-center justify-center hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="md:col-span-3 space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your name"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="your@email.com"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                placeholder="Your message..."
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm shadow-blue-200"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-emerald-600 text-sm text-center font-normal">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center font-normal">Something went wrong. Please try again.</p>
              )}
            </form>

          </div>

          {/* Footer */}
          <div className="mt-16 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              © 2026 Quach Gia Quy · Built with React & Tailwind CSS
            </p>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};