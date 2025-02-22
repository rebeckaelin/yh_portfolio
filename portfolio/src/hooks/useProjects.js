import { useState, useEffect } from "react";
import client from "../client"; // Importera din Sanity-klient
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "project"]| order(_createdAt asc){title, image, description, techUsed, moreInfo} `
        );
        setProjects(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error, urlFor };
};

export default useProjects;
