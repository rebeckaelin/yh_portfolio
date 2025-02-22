import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Separator = () => {
  const navigate = useNavigate();

  // Animation för linjerna när de blir synliga
  const lineVariants = {
    hidden: { width: "2.5rem" }, // Startbredd
    visible: { width: "4rem", transition: { duration: 1.2, delay: 0.7 } }, // Bredd när synlig
  };

  return (
    <motion.div
      className=" mt-5 mb-15 py-10 md:mt-15 md:py-20 flex flex-col items-center justify-center"
      initial="hidden" // Startvärde för animationen
      whileInView="visible" // Trigga när komponenten är i vyn
      viewport={{ once: true, amount: 0.5 }} // Animationen triggas när 50% av komponenten är synlig
    >
      <p className="sm:text-xl md:text-2xl font-main font-light tracking-wider lowercase whitespace-pre-line text-center">
        Let&apos;s merge our efforts!
      </p>
      <motion.button
        className="relative inline-flex items-center justify-center px-6 py-2 w-30 h-2 mt-4 font-second text-sm font-extralight uppercase tracking-widest transition-all duration-300 group"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/contact");
        }}
      >
        {/* Vänster linje */}
        <motion.span
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible" // Här använder vi lineVariants för att animera
        ></motion.span>

        {/* Pil */}
        <motion.span
          initial="hidden"
          whileInView="visible"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-2xl text-black hover:cursor-pointer hover:text-dark"
        >
          →
        </motion.span>

        {/* Höger linje */}
        <motion.span
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
        ></motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Separator;
