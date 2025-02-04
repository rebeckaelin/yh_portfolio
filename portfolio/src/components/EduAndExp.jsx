import { useState, useEffect } from "react";
import client from "../client";

// Queries för education och experience
const educationQuery = `*[_type == "education"] | order(_createdAt desc) {
  title,
  school,
  location,
  duration
}`;

const experienceQuery = `*[_type == "experience"] | order(_createdAt desc){
  position,
  company,
  location,
  duration
}`;

const EduAndExp = () => {
  // State för att hålla utbildningar och erfarenheter
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funktion för att hämta utbildningar
  const fetchEducation = async () => {
    try {
      const data = await client.fetch(educationQuery);
      setEducationData(data); // Uppdatera state med utbildningar
    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };

  // Funktion för att hämta erfarenheter
  const fetchExperience = async () => {
    try {
      const data = await client.fetch(experienceQuery);
      setExperienceData(data); // Uppdatera state med erfarenheter
    } catch (error) {
      console.error("Error fetching experience data:", error);
    }
  };

  // Hämta både utbildning och erfarenhet när komponenten laddas
  useEffect(() => {
    fetchEducation();
    fetchExperience();
    setLoading(false); // Stäng av loader efter datahämtning
  }, []); // Tom array betyder att den körs en gång vid första rendering

  return (
    <div
      id="education-section"
      className="bg-colorText h-full pb-18 pt-18 grid grid-cols-8"
    >
      {/* Education section */}
      <div className="flex col-start-3 col-span-2">
        <section className="w-full max-w-2xl flex flex-col gap-5">
          <div>
            <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
              Education
            </h2>
            <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
              WHAT I&apos;VE LEARNED
            </h3>
          </div>

          {/* Dynamiskt rendera utbildningar */}
          {loading ? (
            <p>Loading...</p>
          ) : educationData.length > 0 ? (
            educationData.map((education, index) => (
              <div key={index} className="max-w-full break-words">
                <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
                  {education.title}
                </h4>
                <p className="font-karla text-base mt-1 text-gray-600">
                  {education.school} ({education.duration})
                </p>
                {education.location && (
                  <p className="font-karla text-base mt-1 text-gray-600">
                    {education.location}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </section>
      </div>

      {/* Experience section */}
      <div className="col-start-6 col-span-2">
        <section className="w-full max-w-2xl flex flex-col gap-5">
          <div>
            <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
              Experience
            </h2>
            <h3 className="font-karla text-lg mt-2 tracking-wider text-primary">
              WHERE I&apos;VE WORKED
            </h3>
          </div>

          {/* Dynamiskt rendera erfarenhet */}
          {loading ? (
            <p>Loading...</p>
          ) : experienceData.length > 0 ? (
            experienceData.map((experience, index) => (
              <div key={index} className="max-w-full break-words">
                <h4 className="mt-5 font-alice text-xl text-colorText2 tracking-wider">
                  {experience.company}
                </h4>
                <p className="font-karla text-base mt-1 text-gray-600">
                  {experience.position} ({experience.duration})
                </p>
                {experience.location && (
                  <p className="font-karla text-base mt-1 text-gray-600">
                    {experience.location}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No experience data available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default EduAndExp;
