import { useState, useEffect } from "react";
import client from "../client";

const experienceQuery = `*[_type == "experience"] | order(_createdAt desc){
  position,
  company,
  location,
  duration
}`;

const useExperience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await client.fetch(experienceQuery);
        setExperienceData(data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchExperience();
  }, []);

  return experienceData;
};

export default useExperience;
