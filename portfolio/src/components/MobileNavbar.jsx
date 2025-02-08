import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburgare → X-knapp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden pr-10 relative w-8 h-8 flex flex-col justify-center items-center z-50"
      >
        {/* Översta linjen */}
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 4 : 0,
            opacity: isOpen ? 1 : 1, // Alltid synlig när den återgår
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="bg-light w-6 h-0.5 rounded origin-center"
        />

        {/* Mitten-linjen */}
        <motion.div
          animate={{
            opacity: isOpen ? 0 : 1, // Fadeas ut när X:et skapas, fadeas in vid återgång
          }}
          transition={{
            duration: 0.1,
            delay: isOpen ? 0 : 0.2, // Fördröjd fade-in när hamburgaren kommer tillbaka
          }}
          className="bg-light w-6 h-0.5 rounded transition-opacity my-0.5"
        />

        {/* Nedersta linjen */}
        <motion.div
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -4 : 0,
            opacity: isOpen ? 1 : 1, // Alltid synlig vid återgång
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="bg-light w-6 h-0.5 rounded origin-center"
        />
      </button>

      {/* Fullskärmsmeny (fade + slide-in från höger) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu-content"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary text-light flex flex-col items-center z-40"
          >
            {/* Navigeringslänkar */}
            <nav className="flex flex-col text-lg items-center mt-40 gap-3">
              {[
                { to: "about-article", label: "About" },
                { to: "education-section", label: "Education & Experience" },
                { to: "projects-section", label: "Projects" },
                { to: "skills-section", label: "Skills & Languages" },
                {
                  to: "interests-section",
                  label: "Future Ambitions & Interests",
                },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={1300}
                  onClick={() => setIsOpen(false)}
                  className="font-karla hover:text-secondary transition-colors duration-300 ease-in-out"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
