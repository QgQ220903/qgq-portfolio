import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      company: "Far Eastern Polytex",
      role: "Power Platform Developer",
      period: "Nov 2025 – Present",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time",
      typeStyle: "bg-blue-50 text-blue-700 border border-blue-100",
      companyStyle: "text-blue-600",
      description:
        "Digitizing internal paper-based business processes into Power Apps Canvas Apps with automated approval workflows.",
      projects: [
        {
          name: "Accounting Contact Request App",
          bullets: [
            "Rebuilt the application from scratch, delivering a fully responsive layout across mobile, tablet, and desktop",
            "Implemented a multi-stage approval workflow (Submitter → Manager → Accounting) using Power Automate",
            "Resolved SharePoint delegation limitations by restructuring data queries for scalable server-side processing beyond 500 items",
            "Redesigned UI/UX to improve usability for non-technical users across multiple departments",
          ],
        },
        {
          name: "Lab Contact Request App (Online Contact Form)",
          bullets: [
            "Rebuilt the application from scratch with full responsive layout for production departments and the laboratory team",
            "Implemented dynamic approval routing: 2-level flow for test frequency requests, 3-level flow for test criteria and shutdown notifications",
            "Optimized application code and UI/UX for non-technical production staff in a factory environment",
          ],
        },
      ],
    },
    {
      company: "Kademia Digital Transformation",
      role: "Power Platform Developer Intern",
      period: "Jun 2025 – Present",
      location: "Ho Chi Minh City, Vietnam",
      type: "Project-based",
      typeStyle: "bg-gray-100 text-gray-500 border border-gray-200",
      companyStyle: "text-gray-500",
      description:
        "Contributed to the SAF project — an inventory and stock management system for a dairy manufacturing client.",
      projects: [
        {
          name: "SAF – Inventory & Stock Management (Dairy Client)",
          bullets: [
            "Developed a Recipe Management screen using Power Apps Canvas App with full CRUD operations and search functionality; each recipe manages multiple raw material entries",
            "Designed and executed test cases for application screens, performing functional testing against business requirements",
            "Conducted User Acceptance Testing (UAT) sessions directly with client stakeholders",
            "Created end-user documentation and step-by-step usage guides for non-technical users",
            "Studied and analyzed business operations of the inventory and stock management domain",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white border-t border-gray-100">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-2">Experience</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 tracking-tight">Work Experience</h2>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="md:pl-10 relative">
                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white hidden md:block shadow-sm" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{exp.role}</h3>
                      <p className={`text-sm font-medium mt-0.5 ${exp.companyStyle}`}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0 flex-shrink-0">
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${exp.typeStyle}`}>
                        {exp.type}
                      </span>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-3">{exp.location}</p>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed mb-5">{exp.description}</p>

                  <div className="space-y-4">
                    {exp.projects.map((proj, j) => (
                      <div
                        key={j}
                        className="bg-slate-50 border border-gray-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                      >
                        <p className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block flex-shrink-0" />
                          {proj.name}
                        </p>
                        <ul className="space-y-2">
                          {proj.bullets.map((b, k) => (
                            <li key={k} className="text-xs text-gray-500 font-normal flex items-start gap-2 leading-relaxed">
                              <span className="text-blue-400 mt-0.5 flex-shrink-0">–</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};