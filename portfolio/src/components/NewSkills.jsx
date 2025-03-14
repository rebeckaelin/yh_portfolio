import useSkills from "../hooks/useSkills";
import { motion } from "framer-motion";

//component not in use

const NewSkills = () => {
  const skillsData = useSkills();

  if (!skillsData.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" pt-10 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-main lowercase tracking-widest text-3xl lg:text-4xl">
            skills & knowledge
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-10">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <p className="font-second text-sm lg:text-base font-extralight whitespace-pre-line uppercase">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NewSkills;
