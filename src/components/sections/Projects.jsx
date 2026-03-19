import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Meeting Room Booking App",
      type: "Power Platform · Self-initiated",
      description:
        "An internal meeting room booking application built with Power Apps Code App using React and TypeScript — a pro-code approach that deploys full React applications within the Power Platform ecosystem. Employees can book rooms, view the calendar, and receive automated notifications via Outlook.",
      highlights: [
        "Room booking with calendar view",
        "Admin panel for room management",
        "Automated Outlook notifications via Power Automate",
        "SharePoint as data layer",
      ],
      tech: ["Power Apps Code App", "React", "TypeScript", "SharePoint", "Power Automate"],
      github: "https://github.com/QgQ220903",
      badge: "Personal Project",
    },
    {
      title: "Accounting Contact Request App",
      type: "Far Eastern Polytex · Production",
      description:
        "Rebuilt a cross-departmental request application from scratch using Power Apps Canvas App. Enables employees to submit accounting contact requests through a digitized approval flow, replacing manual paper-based processes entirely.",
      highlights: [
        "Fully responsive across mobile, tablet, desktop",
        "Multi-stage approval: Submitter → Manager → Accounting",
        "Resolved SharePoint delegation beyond 500-item limit",
        "Redesigned UI/UX for non-technical users",
      ],
      tech: ["Power Apps Canvas", "Power Automate", "SharePoint", "Power Fx"],
      badge: "Professional",
    },
    {
      title: "Lab Contact Request App",
      type: "Far Eastern Polytex · Production",
      description:
        "Rebuilt the Lab's internal Online Contact Form used by production departments to communicate with the laboratory team. Supports dynamic approval routing based on request type — test frequency, test criteria, or shutdown notifications.",
      highlights: [
        "2-level flow for test frequency requests",
        "3-level flow for test criteria & shutdown notifications",
        "Fully responsive across all devices",
        "Optimized for factory floor non-technical staff",
      ],
      tech: ["Power Apps Canvas", "Power Automate", "SharePoint", "Power Fx"],
      badge: "Professional",
    },
    {
      title: "Recipe Management Screen (SAF)",
      type: "Kademia · Client Project",
      description:
        "Developed a Recipe Management screen for an inventory and stock management system (SAF) built for a dairy manufacturing client. Each recipe supports multiple raw material entries with full CRUD operations and search functionality.",
      highlights: [
        "Full CRUD: create, read, update, delete recipes",
        "Search functionality across all records",
        "Each recipe manages multiple raw material entries",
        "UAT conducted directly with client stakeholders",
      ],
      tech: ["Power Apps Canvas", "SharePoint", "Power Fx"],
      badge: "Internship",
    },
  ];

  const badgeStyle = {
    "Personal Project": "bg-blue-500/10 text-blue-400",
    Professional: "bg-emerald-500/10 text-emerald-400",
    Internship: "bg-amber-500/10 text-amber-400",
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">
            Work
          </p>
          <h2 className="text-3xl font-bold mb-10 text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className={`text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded ${badgeStyle[project.badge]}`}
                      >
                        {project.badge}
                      </span>
                      <h3 className="text-base font-semibold text-white mt-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{project.type}</p>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition text-lg mt-1"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">–</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, k) => (
                    <span
                      key={k}
                      className="bg-blue-500/10 text-blue-400 py-0.5 px-2.5 rounded-full text-xs"
                    >
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