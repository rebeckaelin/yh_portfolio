import { useState, useEffect } from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Sidebar from "./Sidebar.jsx"; // Importera Sidebar

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
    <div className="relative w-full h-[80vh] flex bg-primary">
      {/* Bakgrundsbild */}
      <div
        className="relative w-full md:w-3/4 h-full bg-cover bg-fixed bg-bottom"
        style={{
          backgroundImage: `url(${
            heroData.backgroundImage
              ? builder.image(heroData.backgroundImage).url()
              : "/default-bg.jpg"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/35">
          <div
            className="relative z-10 flex flex-col items-start justify-end gap-2 w-full md:w-1/2 text-colorText"
            style={{
              left: "220px", // Flyttar texten 20px från vänster
              top: "420px", // Flyttar texten 20px från botten
            }}
          >
            <p className="font-karla text-3xl md:text-4xl tracking-widest mb-1">
              HELLO, I&apos;M
            </p>
            <p className="font-yeseva text-6xl md:text-8xl tracking-wide mb-1 whitespace-nowrap">
              {heroData.name}
            </p>
            <p className="font-alice italic text-xl md:text-2xl tracking-wider whitespace-nowrap">
              {heroData.title}
            </p>
          </div>
        </div>
      </div>

      {/* Sidopanel */}
      <Sidebar heroData={heroData} />
    </div>
  );
};

export default Hero;
