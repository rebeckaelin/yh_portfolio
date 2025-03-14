import { useState, useEffect } from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return source ? builder.image(source) : null;
}

const heroQuery = `*[_type == "newHero"][0]{
  name,
  title,
  image,
  tagline,
  snippet
}`;

const useHeroData = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await client.fetch(heroQuery);
        setHeroData(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { heroData, loading, error, urlFor };
};

export default useHeroData;
