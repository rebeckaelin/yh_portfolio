import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import PropTypes from "prop-types";
import gitHub_icon from "/pngfind.com-github-logo-png-1766942.png";
import linkedIn from "/Linkedin-logo-white-png-icon-transparent-300x300.png";

const builder = imageUrlBuilder(client);

const Sidebar = ({ heroData }) => {
  return (
    <aside
      className="w-1/4  text-light"
      style={{ backgroundColor: "rgb(7, 54, 48)" }}
    >
      <div className="mb-20 grid grid-row-3 gap-4">
        <div className="w-35 h-35 rounded-full overflow-hidden mx-auto">
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
        <h1 className="font-yeseva lg:text-2xl xl:text-3xl md:text-xl text-center">
          {heroData.name}
        </h1>

        <h2 className="font-karla lg:text-lg md:text-base tracking-wide text-center">
          {heroData.title} <br /> {heroData.location}
        </h2>
      </div>
      <div className="flex flex-col gap-10 md:gap-5">
        <div className="text-center text-base ">
          <p className="font-karla">{heroData.email}</p>
          <p className="font-karla text-base">{heroData.phone}</p>
        </div>

        <div className="text-center flex justify-center items-center gap-6 pt-2 ">
          <a href="">
            <img className="w-8 h-8" src={gitHub_icon} alt="" />
          </a>
          <a href="">
            <img className="w-8 h-8" src={linkedIn} alt="" />
          </a>
        </div>

        <div className="text-center pt-10">
          <button className="bg-light h-10 px-3 tracking-wide border-2 text-dark font-karla text-lg hover:cursor-pointer hover:bg-primary hover:border-2 hover:text-light hover:transition-colors duration-200 ease-in-out">
            contact me
          </button>
        </div>
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
    profileImage: PropTypes.object,
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default Sidebar;
