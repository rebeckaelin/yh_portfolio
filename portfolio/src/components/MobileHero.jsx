import PropTypes from "prop-types";
import gitHub_icon from "/pngfind.com-github-logo-png-1766942.png";
import linkedIn from "/Linkedin-logo-white-png-icon-transparent-300x300.png";

const HeroMobile = ({ heroData, builder }) => {
  return (
    <div className="relative w-full h-[80vh] flex flex-col bg-primary">
      {/* Bakgrundsbild */}
      <div
        className="relative w-full h-1/3 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            heroData.backgroundImage
              ? builder.image(heroData.backgroundImage).url()
              : "/default-bg.jpg"
          })`,
          backgroundPosition: "center 90%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
          <div className="text-center text-light">
            <p className="font-karla text-lg tracking-widest mb-1">
              HELLO, I&apos;M
            </p>
            <p className="font-yeseva text-4xl tracking-wide mb-1">
              {heroData.name}
            </p>
            <p className="font-alice italic text-lg tracking-wider">
              {heroData.title}
            </p>
          </div>
        </div>
      </div>
      {/* Info-sektion för små skärmar */}
      <div className="w-full mt-5 flex flex-col items-center text-center bg-primary text-light font-karla">
        <div className="w-30 h-30 rounded-full overflow-hidden mx-auto">
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
        <div className="">
          <p className="text-lg ">{heroData.title}</p>
          <p className="text-lg ">{heroData.location}</p>
          <p className="text-base pt-8">{heroData.email}</p>
          <p className="text-base">{heroData.phone}</p>

          <div className="text-center flex justify-center items-center gap-6 p-4 ">
            <a href="">
              <img className="w-6 h-6" src={gitHub_icon} alt="" />
            </a>
            <a href="">
              <img className="w-6 h-6" src={linkedIn} alt="" />
            </a>
          </div>
          <div className="text-center pt-2">
            <button className="bg-light h-10 px-3 tracking-wide border-2 text-dark font-karla text-lg hover:cursor-pointer hover:bg-primary hover:border-2 hover:text-light hover:transition-colors duration-200 ease-in-out ">
              contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroMobile.propTypes = {
  heroData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    profileImage: PropTypes.object,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    backgroundImage: PropTypes.object,
  }).isRequired,
  builder: PropTypes.object.isRequired,
};

export default HeroMobile;
