import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className=" dark:bg-slate-800 bg-teal-700  border-b-2 border-teal-700 shadow-md" id="inicio">
      <div className="container mx-auto px-4 lg:px-12 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="./la-blanco.png" className="w-16 h-16"></img>
          {/*<div className="w-10 h-10 bg-[#69c7ad] rounded-full"></div>*/}
          <span className="text-2xl font-black pl-6 text-white">
            LEITMOTIV <span className="dark:text-teal-600 text-slate-800">AREA</span>
          </span>
        </div>
        <nav className="flex items-center space-x-8">
          <ul className="lg:flex font-semibold space-x-8 hidden">
            {["Inicio", "Proyectos", "Contacto"].map((item) => (
              <li key={item} className="relative group text-lg">
                <a href={`#${item.toLowerCase()}`} className="text-slate-100 hover:text-teal-200 dark:hover:text-teal-400 transition-colors">
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-200 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="px-2 py-2 rounded-md bg-slate-300 dark:bg-slate-600 text-teal-700 dark:text-white hover:bg-[#69c7ad] dark:hover:bg-slate-200 hover:text-white dark:hover:text-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
