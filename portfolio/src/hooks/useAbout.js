import { useState, useEffect } from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const useAbout = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "about"][1] {description, interests, subtitle, title, gallery, ingress, image}'
        );
        setAboutData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return { aboutData, loading, error, urlFor };
};

export default useAbout;
