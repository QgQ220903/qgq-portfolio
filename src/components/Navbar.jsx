import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-semibold text-base text-gray-900 tracking-tight">
            qgq<span className="text-blue-600">.dev</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "experience", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors capitalize"
              >
                {item}
              </a>
            ))}
            <a
              href="/QuachGiaQuy_PowerPlatformDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};