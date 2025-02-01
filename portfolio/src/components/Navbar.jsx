import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={"bg-primary text-colorText h-25 grid grid-cols-8"}>
      <div
        id="navbar"
        className="col-start-2 col-span-8 flex justify-between items-center h-full gap-12 tracking-wide text-xl italic w-3/4"
      >
        <Link
          to="about-article" // ID på sektionen du vill scrolla till
          smooth={true}
          duration={1300} // Hur lång tid scrollen tar (i ms)
          className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
        >
          About
        </Link>
        <Link
          to="education-section"
          smooth={true}
          duration={1300}
          className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
        >
          Education & Experience
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={1300}
          className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
        >
          Projects
        </Link>
        <Link
          to="skills-section"
          smooth={true}
          duration={1300}
          className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
        >
          Skills & Languages
        </Link>
        <Link
          to="interests-section"
          smooth={true}
          duration={1300}
          className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
        >
          Interests
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
