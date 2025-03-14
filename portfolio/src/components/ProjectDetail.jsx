import { useParams, useNavigate } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { projects, loading, error, urlFor } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading project: {error.message}</div>;
  if (!projects || projects.length === 0) return <div>No projects found.</div>;

  const project = projects.find((p) => p.slug.current === slug);
  if (!project) return <div>Project not found.</div>;

  return (
    <>
      <section className=" flex flex-col xl:flex-row justify-center items-center gap-10 mx-8">
        <div className="xl:self-start max-w-3xl xl:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, delay: 0.1 }}
          >
            <button
              onClick={() => navigate("/projects")}
              className="text-xl mb-5 pr-5 self-start"
            >
              ←
            </button>
            <h1 className="font-secondary font-extralight uppercase italic tracking-widest text-2xl">
              {project.title}
            </h1>
            <ul className="list-none lowercase flex flex-wrap mb-5">
              {project.techUsed &&
                project.techUsed.map((tech, index) => (
                  <li
                    className="pt-2 text-sm text-second font-extralight tracking-wide"
                    key={index}
                  >
                    {tech}
                    {index < project.techUsed.length - 1 && (
                      <span className="mx-1">|</span>
                    )}
                  </li>
                ))}
            </ul>
          </motion.div>
          <hr />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, delay: 0.1 }}
          >
            <p className="font-second text-sm lg:text-base font-extralight mt-5 leading-relaxed whitespace-pre-line">
              {project.moreInfo}
            </p>
          </motion.div>
        </div>
        <div className="xl:mt-20 mb-10">
          {project.images?.length > 0 && (
            <ImageCarousel images={project.images} urlFor={urlFor} />
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
