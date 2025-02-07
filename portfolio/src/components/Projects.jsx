import { useState, useEffect } from "react";
import client from "../client"; // Importera din Sanity-klient
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Hämta data från Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "project"]| order(_createdAt asc){title, image, description, techUsed, moreInfo} `
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Funktion för att öppna modal och sätta modalens innehåll
  const openModal = (project) => {
    setModalContent(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Funktion för att stänga modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      id="projects-section"
      className="bg-colorText grid grid-cols-12 pb-18 pt-18"
    >
      <section className="col-start-4 col-span-7">
        <div>
          <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            Projects
          </h2>
          <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
            WHAT I&apos;VE DONE
          </h3>
        </div>

        {/* Galleri med projekten, ändrat till 3 kolumner */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-12 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={urlFor(project.image)}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center font-karla pt-3">{project.title}</p>
              <p className="text-center font-karla pt-3">
                {project.description}
              </p>

              {/* Bakgrundseffekt och textoverlay */}
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-lg transition-all duration-100">
                <p className="text-xl font-karla text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.readMore}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className=" font-karla fixed inset-0 backdrop-blur-xs bg-black/40 flex justify-center items-center z-50 ">
            <div className="bg-colorText p-10 max-w-lg w-full ">
              <h3 className="text-2xl font-bold font-alice">
                {modalContent.title}
              </h3>
              <p className="mt-4 ">{modalContent.moreInfo}</p>
              <div className="mt-4">
                <p className="text-lg font-semibold">Built with:</p>
                <ul className="list-none flex flex-wrap gap-x-10 gap-y-2">
                  {modalContent.techUsed &&
                    modalContent.techUsed.map((tech, index) => (
                      <li className="pt-2" key={index}>
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="pt-10 flex justify-center ">
                <button
                  onClick={closeModal}
                  className="w-48 bg-primary border-2 border-transparent tracking-wide text-colorText font-karla text-xl py-3 px-9 hover:cursor-pointer hover:border-primary hover:font-semibold hover:bg-colorText hover:text-primary hover:transition-colors duration-200 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
