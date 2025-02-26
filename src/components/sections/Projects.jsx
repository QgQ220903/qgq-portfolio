import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Feature Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">SickShoeShop - Econnmerce Website</h3>
              <p className="text-gray-400 mb-4">
                "SickShoeShop" is an e-commerce website for selling shoes and footwear. Built using PHP, MySQL, HTML, CSS, and JavaScript, with jQuery for enhanced functionality. The project includes both a storefront for shopping and an admin panel for efficient order and product management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Bootstrap", "Javascript", "JQuery", "PHP", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 1 30, 2246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Website Blog - Python</h3>
              <p className="text-gray-400 mb-4">
                "PythonDjangoBlog" is a knowledge-sharing blog website powered by Python and Django. It enables users to read and create informative articles on various subjects in a user-friendly interface.              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Bootstrap", "Javascript", "JQuery", "Python", "Django", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 1 30, 2246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Career Vibe - Job Finder</h3>
              <p className="text-gray-400 mb-4">
                Career Vibe - Job Finder is a job search website developed using the .NET framework. It allows users to explore job opportunities, submit applications, and connect with potential employers. The platform offers a seamless experience for both job seekers and recruiters, facilitating the recruitment process efficiently              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Vue", "Javascript", ".Net", "Asp.net", "SQLServer"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 1 30, 2246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">SGUCharity Website</h3>
              <p className="text-gray-400 mb-4">
                "SGUCharity" is a philanthropic website tailored for university students, built with Java Spring Boot MVC and Thymeleaf. This platform aims to connect students with volunteering opportunities and charitable causes. It provides a user-friendly interface for students to explore, engage with, and contribute to various charitable initiatives, fostering a culture of giving back within the university community.              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Bootstrap", "Javascript", "JQuery", "Java", "Spring boot MVC", "Thymeleaf", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 1 30, 2246,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>


          </div>
        </div>
      </RevealOnScroll>

    </section>
  )
}
