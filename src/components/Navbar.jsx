// import { cn } from "@/lib/utils";
// import {
//   Menu,
//   X,
//   Home,
//   User,
//   Wrench,
//   BookOpen,
//   Briefcase,
//   Folder,
//   Award,
//   Mail,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero", icon: Home },
//   { name: "About", href: "#about", icon: User },

//   { name: "Education", href: "#education", icon: BookOpen },
//   { name: "Skills", href: "#skills", icon: Wrench },
//   { name: "Projects", href: "#projects", icon: Folder },
//   { name: "Experience", href: "#experience", icon: Briefcase },

//   { name: "Achievements", href: "#achievements", icon: Award },
//   { name: "Contact", href: "#contact", icon: Mail },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     setDarkMode((prev) => !prev);
//     document.documentElement.classList.toggle("dark", !darkMode);
//   };

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero"
//         >
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> Prapti | </span>{" "}
//             <span className="font-mono text-glow text-primary">
//               AI • ML • Dev
//             </span>
//           </span>
//         </a>

//         {/* desktop nav */}
//         {/* desktop nav */}
//         <div className="hidden md:flex items-center space-x-6 mr-6">
//           {navItems.map((item, key) => {
//             const Icon = item.icon;
//             return (
//               // PARENT: Must have 'relative' and 'group'
//               <div key={key} className="relative group">
//                 <a
//                   href={item.href}
//                   className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors duration-300"
//                 >
//                   <Icon size={24} />
//                 </a>

//                 {/* TOOLTIP: Copy this exact className string */}
//                 <span
//                   className="absolute top-full mt-2 left-1/2 -translate-x-1/2 translate-y-1 opacity-0
//                group-hover:opacity-100 group-hover:translate-y-1
//                bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg
//                transition-all duration-200"
//                 >
//                   {item.name}
//                 </span>
//               </div>
//             );
//           })}

//           {/* Dark/Light Mode Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//             aria-label="Toggle Theme"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </div>

//         {/* mobile nav */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-5 text-xl">
//             {navItems.map((item, key) => {
//               const Icon = item.icon;
//               return (
//                 <a
//                   key={key}
//                   href={item.href}
//                   className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <Icon size={22} />
//                   {item.name}
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  User,
  Wrench,
  BookOpen,
  Briefcase,
  Folder,
  Award,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: BookOpen },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Achievements", href: "#achievements", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Prapti | </span>{" "}
            <span className="font-mono text-glow text-primary">
              AI • ML • Dev
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 mr-6">
          {navItems.map((item, key) => {
            const Icon = item.icon;
            return (
              <div key={key} className="relative group">
                <a
                  href={item.href}
                  className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
                <span
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 
                 group-hover:opacity-100 group-hover:translate-y-1 
                 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg 
                 transition-all duration-200"
                >
                  {item.name}
                </span>
              </div>
            );
          })}

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-5 text-xl">
            {navItems.map((item, key) => {
              const Icon = item.icon;
              return (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={22} />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
