import profile_pic from "../assets/profile_pic.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[80vh] flex bg-primary">
        <div className="relative w-3/4 h-full bg-[url('../../public/crew-4Hg8LH9Hoxc-unsplash.jpg')] bg-cover bg-fixed bg-bottom">
          <div className="absolute inset-0 bg-black/35"></div>
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-52 pt-74 text-colorText">
            <p className="font-karla text-3xl tracking-widest mb-1">
              HELLO, I&apos;M
            </p>
            <p className="font-yeseva text-7xl mb-1 tracking-wide">
              Rebecka Larsson
            </p>
            <p className="font-alice italic text-xl tracking-wider">
              Junior Developer in Javascript
            </p>
          </div>
        </div>

        <aside
          className="w-1/4 h-full grid grid-rows-[auto,auto,auto,auto,auto,1fr] gap-4 p-5 text-colorText tr"
          style={{ backgroundColor: "rgb(7, 54, 48)" }}
        >
          <div className="w-50 h-50 rounded-full overflow-hidden mx-auto">
            <img
              className="w-full h-full object-cover object-[0%_20%]"
              src={profile_pic}
              alt="profile_picture"
            />
          </div>
          <h1 className="font-yeseva text-4xl text-center">Rebecka Larsson</h1>

          <h2 className="font-karla text-xl tracking-wide text-center">
            Junior Developer <br /> Umeå, Sweden
          </h2>

          <div className="text-center text-base">
            <p className="font-karla ">my@mail.se</p>
            <p className="font-karla text-base">073-1234567</p>
          </div>

          <div className="text-center flex justify-center gap-4">
            <p>links to linked in</p>
          </div>

          <div className="text-center">
            <button className=" w-48 bg-colorText tracking-wide text-colorText2 font-karla text-xl py-3 px-9 hover:cursor-pointer hover:bg-secondary hover:transition-colors duration-300 ease-in-out">
              contact me
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Hero;
