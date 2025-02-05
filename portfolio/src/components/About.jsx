import { useState, useEffect } from "react";
import client from "../client";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const query = `*[_type == "about"][0]`; // Hämtar första "about" dokumentet
        const data = await client.fetch(query);
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      }
    };

    fetchAbout();
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <>
      <div
        id="about-article"
        className="h-full pb-18 pt-18 bg-secondary grid grid-cols-4"
      >
        <article className="w-3/4 col-span-4 col-start-2">
          <h2 className="font-alice text-4xl italic font-bold tracking-wide text-primary">
            {aboutData.title}
          </h2>
          <h3 className="font-karla text-2xl mt-2 tracking-wider text-primary">
            {aboutData.subtitle}
          </h3>
          <p className="font-karla mt-10 text-xl leading-loose">
            {aboutData.description}
          </p>
        </article>
      </div>
    </>
  );
};

export default About;
