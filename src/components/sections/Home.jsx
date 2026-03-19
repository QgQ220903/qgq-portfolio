import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">

          <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4">
            Power Platform Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Hi, I'm Quach Gia Quy
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I build <span className="text-white font-medium">Canvas Apps</span> and{" "}
            <span className="text-white font-medium">automated workflows</span> that digitize
            manual business processes — turning paper-based operations into intuitive digital
            solutions on the Microsoft Power Platform.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex justify-center items-center gap-2 transition"
            >
              <FaFileDownload /> Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex items-center justify-center gap-2 transition"
            >
              <MdEmail /> Contact Me
            </a>
          </div>

          <div className="flex justify-center space-x-4 py-8">
            <a
              href="https://github.com/QgQ220903"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl border border-blue-500/50 text-blue-500 py-2 px-3 rounded font-medium 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/quy-qu%C3%A1ch-337138217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl border border-blue-500/50 text-blue-500 py-2 px-3 rounded font-medium 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transition"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};