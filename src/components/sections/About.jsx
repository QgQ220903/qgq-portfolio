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
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">
            About
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">
            About Me
          </h2>

          {/* Bio */}
          <p className="text-gray-400 text-base font-light leading-relaxed max-w-2xl mb-10">
            <span className="text-white font-medium">Power Platform Developer</span> with 1+ year
            of experience building Canvas Apps and automated workflows that digitize internal
            business operations. Passionate about turning{" "}
            <span className="text-white font-medium">manual, paper-based processes</span> into
            intuitive digital solutions using Power Apps, Power Automate, and SharePoint.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="p-5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4">
                Power Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {platformSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4">
                Programming
              </p>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="p-5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                Education
              </p>
              <p className="text-white text-sm font-medium">Saigon University (SGU)</p>
              <p className="text-gray-400 text-xs mt-1">B.E. in Software Engineering</p>
              <p className="text-gray-500 text-xs mt-0.5">2021 – 2026</p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                Work Experience
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white text-sm font-medium">Power Platform Developer</p>
                  <p className="text-gray-400 text-xs mt-0.5">Far Eastern Polytex</p>
                  <p className="text-gray-500 text-xs mt-0.5">Nov 2025 – Present</p>
                  <span className="inline-block mt-1.5 text-[10px] font-medium tracking-wide bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">
                    Full-time
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-white text-sm font-medium">Power Platform Developer Intern</p>
                  <p className="text-gray-400 text-xs mt-0.5">Kademia</p>
                  <p className="text-gray-500 text-xs mt-0.5">Jun 2025 – Present</p>
                  <span className="inline-block mt-1.5 text-[10px] font-medium tracking-wide bg-white/5 text-gray-400 px-2 py-0.5 rounded">
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