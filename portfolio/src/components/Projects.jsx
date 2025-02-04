import { useState } from "react";
import { useEffect } from "react";

export const Projects = () => {
  // Håller koll på om modalen är öppen eller stängd
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Data för projekten (detta skulle normalt komma från en API eller en fil)
  const projects = [
    {
      title: "Project One",
      imageUrl: "../../public/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      description: "A brief description of Project One",
      techUsed: ["JavaScript", "React", "Node.js"],
      moreInfo: "Detailed description about Project One...",
      readMore: "Read More..",
    },
    {
      title: "Project Two",
      imageUrl: "../../public/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      description: "A brief description of Project Two",
      techUsed: ["HTML", "CSS", "Vue.js"],
      moreInfo: "Detailed description about Project Two...",
      readMore: "Read More..",
    },
    {
      title: "Project Three",
      imageUrl: "../../public/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      description: "A brief description of Project Two",
      techUsed: ["HTML", "CSS", "Vue.js"],
      moreInfo: "Detailed description about Project Two...",
      readMore: "Read More..",
    },
    {
      title: "Project Four",
      imageUrl: "../../public/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      description: "A brief description of Project Two",
      techUsed: ["HTML", "CSS", "Vue.js"],
      moreInfo: "Detailed description about Project Two...",
      readMore: "Read More..",
    },
    {
      title: "Project Five",
      imageUrl: "../../public/florian-olivo-4hbJ-eymZ1o-unsplash.jpg",
      description: "A brief description of Project Two",
      techUsed: ["HTML", "CSS", "Vue.js"],
      moreInfo: "Detailed description about Project Two...",
      readMore: "Read More..",
    },
  ];

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
      className="bg-colorText grid grid-cols-8  pb-18 pt-18"
    >
      <section className="col-start-3 col-span-6">
        <div>
          <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            Projects
          </h2>
          <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
            WHAT I&apos;VE DONE
          </h3>
        </div>

        {/* Galleri med projekten */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-22 mt-8 w-3/4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-center font-karla pt-5">{project.title}</p>
              {/* Bakgrundseffekt och textoverlay */}
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-lg  transition-all duration-100">
                <p className="text-xl font-karla text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.readMore}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 backdrop-blur-xs bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full border">
              <h3 className="text-2xl font-bold">{modalContent.title}</h3>
              <p className="mt-4">{modalContent.moreInfo}</p>
              <div className="mt-4">
                <p className="font-semibold">Technologies used:</p>
                <ul className="list-disc pl-6">
                  {modalContent.techUsed.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-6 bg-primary text-white px-4 py-2 rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
