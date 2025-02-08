import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const DesktopHero = ({ heroData, builder }) => {
  return (
    <div className="relative w-full h-[75vh] flex bg-primary">
      {/* Bakgrundsbild */}
      <div
        className="relative w-full md:w-3/4 bg-cover bg-fixed bg-bottom  bg-black/40"
        style={{
          backgroundImage: `url(${
            heroData.backgroundImage
              ? builder.image(heroData.backgroundImage).url()
              : "/default-bg.jpg"
          })`,
          backgroundPosition: "center 105%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 text-light">
          <div className="flex flex-col justify-end  gap-2 h-3/4 w-3/4">
            <p className="font-karla md:pl-30 lg:pl-57  md:text-2xl lg:text-3xl  tracking-widest">
              HELLO, I&apos;M
            </p>
            <p className="font-yeseva md:pl-30 lg:pl-57  md:text-5xl lg:text-6xl  tracking-wide mb-1 whitespace-nowrap">
              {heroData.name}
            </p>
            <p className="font-alice md:pl-30 lg:pl-57 italic md:text-xl lg:text-xl tracking-wider whitespace-nowrap">
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

DesktopHero.propTypes = {
  heroData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.object, // Kan vara null om ingen bild finns
  }).isRequired,
  builder: PropTypes.object.isRequired,
};

export default DesktopHero;
