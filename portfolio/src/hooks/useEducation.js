import { useState, useEffect } from "react";
import client from "../client";

const educationQuery = `*[_type == "education"] | order(_createdAt desc) {
  title,
  school,
  location,
  duration
}`;

const useEducation = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const data = await client.fetch(educationQuery);
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducation();
  }, []);

  return educationData;
};

export default useEducation;
