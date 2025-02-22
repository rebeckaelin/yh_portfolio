import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useProjects from "../hooks/useProjects";

const NewProjects = () => {
  const { projects, loading, error, urlFor } = useProjects();
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  return (
    <section className="mx-auto w-4/5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className="font-main lowercase tracking-widest text-3xl xl:text-5xl lg:text-4xl col-start-2 sm:mt-6 md:mt-8 lg:mt-10"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 mb-40 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-10 "
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand(index);
            }}
          >
            <img
              src={urlFor(project.image)}
              alt={project.title}
              className="object-cover w-full h-50 md:h-60 lg:h-70 transform transition-transform duration-300 ease-in-out hover:scale-105"
            />

            <div
              onClick={() => toggleExpand(index)}
              className="flex cursor-pointer justify-between items-center my-4"
            >
              <div>
                <h2 className="font-main lowercase tracking-widest text-xl lg:text-2xl">
                  {project.title}
                </h2>
              </div>
              <div>
                <button className="pr-2">
                  <ChevronRight
                    className={`ml-2 transform transition-transform duration-300 ${
                      expandedProjectIndex === index
                        ? "rotate-90"
                        : "rotate-270"
                    }`}
                    size={20}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>

            <p className="font-second font-extralight lowercase text-sm mt-2 w-full">
              {project.description}
            </p>

            <motion.div
              className="font-second font-extralight lowercase text-sm mt-2 w-full"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedProjectIndex === index ? "auto" : 0,
                opacity: expandedProjectIndex === index ? 1 : 0,
              }}
              transition={{
                duration: expandedProjectIndex === index ? 0.7 : 1.2,
                ease: "easeInOut",
              }}
            >
              {expandedProjectIndex === index && (
                <div className="mt-4">
                  <p className="font-second text-sm lg:text-base font-extralight whitespace-pre-line mb-3">
                    {project.moreInfo}
                  </p>
                  <p className="text-lg font-second lowercase tracking-wider font-extralight">
                    Built with:
                  </p>
                  <ul className="list-none uppercase flex flex-wrap gap-x-10 gap-y-2">
                    {project.techUsed &&
                      project.techUsed.map((tech, index) => (
                        <li
                          className="pt-2 text-second font-extralight"
                          key={index}
                        >
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
