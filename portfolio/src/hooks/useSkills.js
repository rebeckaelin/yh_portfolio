import { useState, useEffect } from "react";
import client from "../client";

const skillsQuery = `*[_type == "skills"] | order(_createdAt asc) { name }`;

const useSkills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await client.fetch(skillsQuery);
        setSkillsData(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills();
  }, []);

  return skillsData;
};

export default useSkills;
