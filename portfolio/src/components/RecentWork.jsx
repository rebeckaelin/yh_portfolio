import useProjects from "../hooks/useProjects";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RecentWork = () => {
  const { projects, loading, error, urlFor } = useProjects();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  const displayedProjects = projects.slice(-4);

  // Animationsvarianter
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Startposition (50px nedanför och osynlig)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="my-5 md:mt-28">
        <p className="mb-10 text-xl md:text-2xl font-main font-light tracking-widest whitespace-pre-line text-center lowercase">
          My Recent projects
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggar när 20% av komponenten syns
      >
        <div className="flex justify-center pb-10 w-4/5 mx-auto">
          <div
            className={`flex flex-col sm:grid gap-4 mx-8 w-3/4 md:w-3/4 lg:w-3/5 ${
              displayedProjects.length === 1
                ? "grid-cols-1"
                : displayedProjects.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {displayedProjects.length > 0 && (
              <>
                {displayedProjects.map((project, index) => {
                  let delay;
                  if (displayedProjects.length === 3) {
                    delay = index === 1 ? 0 : index === 2 ? 0.5 : 1;
                  } else if (displayedProjects.length === 4) {
                    delay =
                      index === 1
                        ? 0
                        : index === 2
                        ? 1.5
                        : index === 0
                        ? 1
                        : 1.5;
                  } else {
                    delay = index * 0.5;
                  }

                  return (
                    <motion.div
                      key={index}
                      className={`relative group ${
                        displayedProjects.length === 1
                          ? "col-span-1 row-span-1"
                          : displayedProjects.length === 2
                          ? "col-span-1 row-span-1"
                          : displayedProjects.length === 3
                          ? index === 0
                            ? "col-span-2 row-span-2"
                            : "col-span-1 row-span-1"
                          : index === 0
                          ? "col-span-1 row-span-2"
                          : index === 1
                          ? "col-span-1 col-start-2 row-span-1"
                          : index === 2
                          ? "col-span-1 col-start-2 row-span-2"
                          : "col-start-3 row-start-1 row-span-2"
                      }`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: delay,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src={urlFor(project.image).url()}
                        alt={`Gallery image ${index + 1}`}
                        className={`w-full ${
                          displayedProjects.length === 1 ? "h-84" : "h-full"
                        } object-cover`}
                      />
                    </motion.div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="uppercase font-second text-sm font-extralight mb-10 block hover:cursor-pointer hover:text-dark tracking-widest"
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
