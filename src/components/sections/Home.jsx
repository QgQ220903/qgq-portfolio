import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 w-full pt-16">
        <RevealOnScroll>
          <div className="text-center px-6 max-w-2xl mx-auto">

            <span className="inline-block text-xs font-medium tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-6">
              Power Platform Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-5 leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="text-blue-600">Quach Gia Quy</span>
            </h1>

            <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-lg mx-auto">
              I build <span className="text-gray-800 font-medium">Canvas Apps</span> and{" "}
              <span className="text-gray-800 font-medium">automated workflows</span> that digitize
              manual business processes — turning paper-based operations into intuitive digital
              solutions on the Microsoft Power Platform.
            </p>

            <div className="flex justify-center gap-3 mb-8">
              <a
                href="/QuachGiaQuy_PowerPlatformDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2.5 px-5 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 transition-colors shadow-sm shadow-blue-200"
              >
                <FaFileDownload /> Resume
              </a>
              <a
                href="#contact"
                className="border border-gray-200 text-gray-600 py-2.5 px-5 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 flex items-center gap-2 transition-colors"
              >
                <MdEmail /> Contact Me
              </a>
            </div>

            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/QgQ220903"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl border border-gray-200 text-gray-400 p-2.5 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/quy-qu%C3%A1ch-337138217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl border border-gray-200 text-gray-400 p-2.5 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};