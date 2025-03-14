import useProjects from "../hooks/useProjects";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RecentWork = () => {
  const { projects, loading, error, urlFor } = useProjects(true);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  const allProjects = projects;

  const displayedProjects = allProjects.slice(-2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.6 },
    }),
  };

  return (
    <>
      <div className="my-5 md:mt-28">
        <p className="mb-10 text-xl md:text-2xl font-main font-light tracking-widest whitespace-pre-line text-center lowercase">
          My Recent Projects
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto px-10 gap-5 flex flex-col sm:flex-row max-w-4xl">
          {displayedProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} custom={index}>
              <img
                src={urlFor(project.image).url()}
                alt={`Gallery image ${index + 1}`}
                className="h-auto w-full object-contain mx-auto"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="uppercase font-second mt-10 text-sm font-extralight mb-10 block hover:cursor-pointer hover:text-dark tracking-widest"
            onClick={() => navigate("/projects")}
          >
            view all projects →
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default RecentWork;

{
  /* Gallery-layout under progress */
}

{
  /* <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 px-4 max-w-6xl mx-auto space-y-4">
          {displayedProjects.map((project, index) => {
            let heightClass =
              index % 4 === 0
                ? "h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
                : index % 4 === 1
                ? "h-[40vh] sm:h-[40vh] md:h-[45vh]"
                : index % 4 === 2
                ? "h-[40vh] sm:h-[50vh] md:h-[40vh]"
                : "h-[40vh] sm:h-[45vh] md:h-[80vh]";

            return (
              <motion.div
                key={index}
                className={`relative group overflow-hidden break-inside-avoid ${heightClass}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <img
                  src={urlFor(project.image).url()}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div> */
}
