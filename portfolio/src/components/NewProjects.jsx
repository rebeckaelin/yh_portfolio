import { motion } from "framer-motion";
import useProjects from "../hooks/useProjects";
import { useNavigate } from "react-router-dom";

const NewProjects = () => {
  const { projects, loading, error, urlFor } = useProjects(true); //true = include drafts
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  const allProjects = projects;

  return (
    <section className="mx-auto w-4/5 ">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className="font-main lowercase tracking-widest text-3xl xl:text-5xl lg:text-4xl sm:mt-6 md:mt-8 mt-10"
      >
        Projects
      </motion.h1>

      <div className="mt-10 mb-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:4 gap-5">
        {allProjects.map((project) => (
          <div
            key={project.slug?.current || project._id}
            className="cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-102 relative"
            onClick={() =>
              navigate(`/projects/${project.slug?.current || project._id}`)
            }
          >
            <img
              src={urlFor(project.image)}
              alt={project.title}
              className="w-full h-auto"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
