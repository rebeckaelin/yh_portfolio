import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import PropTypes from "prop-types";

const builder = imageUrlBuilder(client);

const Sidebar = ({ heroData }) => {
  return (
    <aside
      className="w-1/4 h-full grid grid-rows-[auto,auto,auto,auto,auto,1fr] gap-4 p-5 text-colorText"
      style={{ backgroundColor: "rgb(7, 54, 48)" }}
    >
      <div className="w-50 h-50 rounded-full overflow-hidden mx-auto">
        <img
          className="w-full h-full object-cover object-[0%_20%]"
          src={
            heroData.profileImage
              ? builder.image(heroData.profileImage).url()
              : "/default-profile.png"
          }
          alt="profile_picture"
        />
      </div>

      <h1 className="font-yeseva text-4xl text-center">{heroData.name}</h1>

      <h2 className="font-karla text-xl tracking-wide text-center">
        {heroData.title} <br /> {heroData.location}
      </h2>

      <div className="text-center text-base">
        <p className="font-karla">{heroData.email}</p>
        <p className="font-karla text-base">{heroData.phone}</p>
      </div>

      <div className="text-center flex justify-center gap-4">
        {heroData.github && (
          <a href={heroData.github} target="_blank" rel="noopener noreferrer">
            <img
              className="w-10 h-10"
              src="/pngimg.com - github_PNG40.png"
              alt="GitHub"
            />
          </a>
        )}
        {heroData.linkedin && (
          <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer">
            <img
              className="w-10 h-10 bg-transparent"
              src="/pngimg.com - linkedIn_PNG4.png"
              alt="LinkedIn"
            />
          </a>
        )}
      </div>

      <div className="text-center">
        <button className="w-48 bg-colorText tracking-wide text-colorText2 font-karla text-xl py-3 px-9 hover:cursor-pointer hover:bg-secondary hover:transition-colors duration-200 ease-in-out">
          Contact me
        </button>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  heroData: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    profileImage: PropTypes.object, // Sanity-bild är ett objekt
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default Sidebar;
