import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import client from "../client";
import { useEffect, useState } from "react";

// const skills = [
//   { name: "JavaScript", level: 90 },
//   { name: "TypeScript", level: 85 },
//   { name: "React", level: 80 },
//   { name: "Vue", level: 75 },
//   { name: "Node.js", level: 70 },
//   { name: "GraphQL", level: 65 },
// ];

// const languages = [
//   { name: "English", level: 95 },
//   { name: "Swedish", level: 100 },
//   { name: "Norwegian", level: 50 },
// ];
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [skillsData, setSkillsData] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Hämta alla skills
      const skillsQuery = `*[_type == "skills"]{name, level}`;
      const skillsData = await client.fetch(skillsQuery);

      // Hämta alla languages
      const languagesQuery = `*[_type == "language"]{name, level}`;
      const languagesData = await client.fetch(languagesQuery);

      // Uppdatera state med hämtad data
      if (skillsData) setSkillsData(skillsData);
      if (languagesData) setLanguages(languagesData);
    };

    fetchData();
  }, []);

  return (
    <div
      id="skills-section"
      className="bg-colorText grid grid-cols-8 pb-18 pt-18 min-h-[200px]"
    >
      <section className="col-start-3 col-span-6">
        <div>
          <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            Skills & Languages
          </h2>
          <h3 className="font-karla mb-10 text-lg mt-2 tracking-wider text-primary">
            WHAT I BRING TO THE TABLE
          </h3>
        </div>

        {/* Sektionen som justeras efter den befintliga griden */}
        <div ref={ref}>
          <div className="col-start-4 col-span-4 space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index} className="grid grid-cols-4 items-center">
                <span className="text-lg font-karla text-primary">
                  {skill.name}
                </span>
                <div className="col-span-2 w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 mb-5">________________</p>

        <div ref={ref}>
          <div className="mt-10 col-start-4 col-span-4 space-y-4">
            {languages.map((language, index) => (
              <div key={index} className="grid grid-cols-4 items-center">
                {/* Text på vänster sida */}
                <span className="text-lg font-karla text-primary">
                  {language.name}
                </span>

                {/* Progress-bar till höger */}
                <div className="col-span-2 w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${language.level}%` : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
