import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

const builder = imageUrlBuilder(client);

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "hero"][0]{
            name,
            title,
            location,
            email,
            phone,
            profileImage,
            backgroundImage,
            linkedin,
            github
          }`
        );
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) return <div>Loading...</div>;

  return (
    <div>
      {/* Visa MobileHero endast på mobil (sm) */}
      <div className="block md:hidden w-full">
        <MobileHero heroData={heroData} builder={builder} />
      </div>

      {/* Visa DesktopHero endast på desktop (md och uppåt) */}
      <div className="hidden md:block">
        <DesktopHero heroData={heroData} builder={builder} />
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroData: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    backgroundImage: PropTypes.object,
  }),
};

export default Hero;
