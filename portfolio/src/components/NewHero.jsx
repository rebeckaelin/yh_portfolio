import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useHeroData from "../hooks/useHeroData";

const NewHero = () => {
  const { heroData, loading, error, urlFor } = useHeroData();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading hero data.</div>;
  if (!heroData) return null;

  return (
    <>
      <section className="relative mt-10">
        <div className="flex-none flex-shrink-0 w-full relative">
          {heroData.image && (
            <img
              src={urlFor(heroData.image)?.url() || "/placeholder.jpg"}
              alt="Hero"
              className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] object-cover object-[50%_45%]"
            />
          )}
          <div className="absolute inset-x-10 top-40 md:top-50 lg:top-75 flex items-center justify-center py-4 sm:py-6 md:py-8 bg-white/65 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <motion.h1
                className="text-black font-main tracking-widest text-[22px] text-3xl md:text-4xl lg:text-6xl lowercase"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {heroData.name}
              </motion.h1>
              <motion.h2
                className="text-black uppercase font-second tracking-widest pt-2 text-sm md:text-base lg:text-lg font-extralight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                {heroData.title}
              </motion.h2>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col p-10 md:pt-25 no-wrap">
        <p className="sm:text-xl md:text-2xl font-main font-light tracking-wider whitespace-pre-line text-center">
          {heroData.tagline}
        </p>
        <button
          className="uppercase font-second text-sm font-extralight mt-5 block hover:cursor-pointer hover:text-dark tracking-widest"
          onClick={() => navigate("/about")}
        >
          {heroData.snippet}
        </button>
      </div>
    </>
  );
};

export default NewHero;

// ALTERNATIVE STYLING FOR HERO IMG

//  <section className="relative flex w-full flex-col md:flex-row items-center ">
//    {/* Bild-container */}
//    <div className="w-full md:w-2/4 flex-none flex-shrink-0">
//      <img
//        src={urlFor(heroData.image).url()}
//        alt="Hero"
//        className="w-full h-auto object-contain"
//      />
//    </div>

//    {/* Text-container */}
//    <div
//      className="bg-white/60 p-3 md:p-10 shadow-lg
//               w-3/5 sm:w-3/5 md:w-2/4 lg:w-2/4 xl:w-5/12
//               flex flex-col
//               absolute md:static top-3/4 left-2/5 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:-ml-24 lg:-ml-22"
//    >
//      <motion.h1
//        className="text-black font-main tracking-widest text-[22px] sm:text-3xl md:text-4xl lg:text-6xl lowercase"
//        initial={{ opacity: 0, y: -50 }}
//        animate={{ opacity: 1, y: 0 }}
//        transition={{ duration: 1 }}
//      >
//        {heroData.name}
//      </motion.h1>

//      <motion.h2
//        className=" text-black uppercase font-second tracking-widest pt-2 text-sm md:text-base font-extralight"
//        initial={{ opacity: 0, y: 50 }}
//        animate={{ opacity: 1, y: 0 }}
//        transition={{ duration: 1, delay: 0.5 }}
//      >
//        {heroData.title}
//      </motion.h2>
//    </div>
//  </section>;
