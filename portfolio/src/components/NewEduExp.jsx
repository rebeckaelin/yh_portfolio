import useEducation from "../hooks/useEducation";
import useExperience from "../hooks/useExperience";

const NewEduExp = () => {
  const educationData = useEducation();
  const experienceData = useExperience();

  if (!educationData.length || !experienceData.length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="my-15 flex flex-col md:flex-row justify-around max-w-7xl mx-auto">
        <div className=" flex flex-col gap-5 text-center md:text-left">
          <h2 className=" text-xl xl:text-2xl md:text-2xl font-main font-light tracking-widest whitespace-pre-line  lowercase">
            experience
          </h2>
          {experienceData.map((experience, index) => (
            <div key={index}>
              <h4 className="font-main lowercase whitespace-nowrap text-base sm:text-lg  tracking-wider">
                {experience.position}
              </h4>
              <p className="font-second uppercase text-xs sm:text-sm font-extralight whitespace-nowrap">
                {experience.company}
              </p>
              <p className="font-second lowercase text-xs sm:text-sm font-extralight whitespace-nowrap">
                {experience.location} ({experience.duration})
              </p>
            </div>
          ))}
        </div>
        <hr className="my-5 md:hidden" />
        <div className=" flex flex-col gap-5 text-center md:text-left">
          <h2 className=" text-xl xl:text-2xl md:text-2xl font-main font-light tracking-widest whitespace-pre-line lowercase">
            experience
          </h2>
          {educationData.map((education, index) => (
            <div key={index}>
              <h4 className="font-main lowercase whitespace-nowrap text-base sm:text-lg  tracking-wider">
                {education.title}
              </h4>
              <p className="font-second uppercase text-xs sm:text-sm font-extralight whitespace-nowrap">
                {education.school}
              </p>
              <p className="font-second lowercase text-xs sm:text-sm font-extralight whitespace-nowrap">
                {education.location} ({education.duration})
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewEduExp;
