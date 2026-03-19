export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-400 text-3xl focus:outline-none cursor-pointer hover:text-gray-900 transition"
      >
        &times;
      </button>

      {["home", "about", "experience", "projects", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-medium text-gray-800 my-4 capitalize transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          {item}
        </a>
      ))}

      <a
        href="/QuachGiaQuy_PowerPlatformDeveloper.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`mt-4 text-sm bg-blue-600 text-white px-6 py-2.5 rounded-md transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Resume
      </a>
    </div>
  );
};