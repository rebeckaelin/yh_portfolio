import { useState, useEffect } from "react";
import client from "../client";

const languagesQuery = `*[_type == "language"] | order(_createdAt asc) { name, level }`;

const useLanguages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data = await client.fetch(languagesQuery);
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };

    fetchLanguages();
  }, []);

  return languages;
};

export default useLanguages;
