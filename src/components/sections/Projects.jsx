import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Meeting Room Booking App",
      type: "Power Platform · Self-initiated",
      description:
        "An internal meeting room booking application built with Power Apps Code App using React and TypeScript — a pro-code approach that deploys full React applications within the Power Platform ecosystem.",
      highlights: [
        "Room booking with calendar view",
        "Admin panel for room management",
        "Automated Outlook notifications via Power Automate",
        "SharePoint as data layer",
      ],
      tech: ["Power Apps Code App", "React", "TypeScript", "SharePoint", "Power Automate"],
      github: "https://github.com/QgQ220903",
      badge: "Personal",
      badgeStyle: "bg-blue-50 text-blue-700 border border-blue-100",
    },
    {
      title: "Accounting Contact Request App",
      type: "Far Eastern Polytex · Production",
      description:
        "Rebuilt a cross-departmental request application from scratch using Power Apps Canvas App. Enables employees to submit accounting contact requests through a digitized approval flow.",
      highlights: [
        "Fully responsive across mobile, tablet, desktop",
        "Multi-stage approval: Submitter → Manager → Accounting",
        "Resolved SharePoint delegation beyond 500-item limit",
        "Redesigned UI/UX for non-technical users",
      ],
      tech: ["Power Apps Canvas", "Power Automate", "SharePoint", "Power Fx"],
      badge: "Professional",
      badgeStyle: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    },
    {
      title: "Lab Contact Request App",
      type: "Far Eastern Polytex · Production",
      description:
        "Rebuilt the Lab's internal Online Contact Form for production departments to communicate with the laboratory team. Supports dynamic approval routing based on request type.",
      highlights: [
        "2-level flow for test frequency requests",
        "3-level flow for test criteria & shutdown notifications",
        "Fully responsive across all devices",
        "Optimized for factory floor non-technical staff",
      ],
      tech: ["Power Apps Canvas", "Power Automate", "SharePoint", "Power Fx"],
      badge: "Professional",
      badgeStyle: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    },
    {
      title: "Recipe Management Screen (SAF)",
      type: "Kademia · Client Project",
      description:
        "Developed a Recipe Management screen for an inventory and stock management system built for a dairy manufacturing client. Each recipe supports multiple raw material entries.",
      highlights: [
        "Full CRUD: create, read, update, delete recipes",
        "Search functionality across all records",
        "Each recipe manages multiple raw material entries",
        "UAT conducted directly with client stakeholders",
      ],
      tech: ["Power Apps Canvas", "SharePoint", "Power Fx"],
      badge: "Internship",
      badgeStyle: "bg-amber-50 text-amber-700 border border-amber-100",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-gray-100">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-2">Work</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-10 tracking-tight">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className={`text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full ${project.badgeStyle}`}>
                        {project.badge}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-900 mt-2">{project.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{project.type}</p>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-600 transition-colors text-lg mt-1 flex-shrink-0"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-500 text-xs font-normal leading-relaxed mb-4">{project.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-gray-500 font-normal flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">–</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {project.tech.map((t, k) => (
                    <span key={k} className="bg-gray-50 text-gray-500 border border-gray-200 py-0.5 px-2.5 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};