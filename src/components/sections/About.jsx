import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const platformSkills = [
    "Power Apps Canvas",
    "Power Apps Code App",
    "Power Automate",
    "SharePoint Online",
    "Dataverse",
    "Power Fx",
  ];

  const devSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Java",
    "C#",
    "SQL",
    "REST APIs",
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-gray-100">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-2">About</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">About Me</h2>

          {/* Bio - font-normal to prevent bold bleed from Inter */}
          <p className="text-gray-500 text-base font-normal leading-relaxed max-w-2xl mb-10">
            <span className="text-gray-900 font-semibold">Power Platform Developer</span> with 1+ year
            of experience building Canvas Apps and automated workflows that digitize internal
            business operations. Passionate about turning{" "}
            <span className="text-gray-900 font-semibold">manual, paper-based processes</span> into
            intuitive digital solutions using Power Apps, Power Automate, and SharePoint.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Power Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {platformSkills.map((skill, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 border border-blue-100 py-1 px-3 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Programming
              </p>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill, i) => (
                  <span key={i} className="bg-gray-50 text-gray-600 border border-gray-200 py-1 px-3 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                Education
              </p>
              <p className="text-gray-900 text-sm font-semibold">Saigon University (SGU)</p>
              <p className="text-gray-500 text-xs mt-1">B.E. in Software Engineering</p>
              <p className="text-gray-400 text-xs mt-0.5">2021 – 2026</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                Work Experience
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-900 text-sm font-semibold">Power Platform Developer</p>
                  <p className="text-blue-600 text-xs font-medium mt-0.5">Far Eastern Polytex</p>
                  <p className="text-gray-400 text-xs mt-0.5">Nov 2025 – Present</p>
                  <span className="inline-block mt-1.5 text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">
                    Full-time
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-gray-900 text-sm font-semibold">Power Platform Developer Intern</p>
                  <p className="text-gray-500 text-xs font-medium mt-0.5">Kademia</p>
                  <p className="text-gray-400 text-xs mt-0.5">Jun 2025 – Present</p>
                  <span className="inline-block mt-1.5 text-[10px] font-semibold bg-gray-100 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                    Project-based
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};