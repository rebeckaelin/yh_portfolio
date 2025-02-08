import { Link } from "react-scroll";
{
  /* <nav className="hidden md:block bg-primary text-colorText h-25 col-start-3 col-span-8 w-full"> */
}

const DesktopNavbar = () => {
  return (
    <nav className={" hidden md:block bg-primary text-colorText w-full "}>
      <div className="grid grid-cols-8">
        <div
          id="navbar"
          className="col-start-3 col-span-8 w-full flex gap-12 text-base italic"
        >
          <Link
            to="about-article" // ID på sektionen du vill scrolla till
            smooth={true}
            duration={1300} // Hur lång tid scrollen tar (i ms)
            className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out "
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
            Future Ambitions & Interests
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

// return (
//     <nav className={"bg-primary text-colorText h-25 grid grid-cols-8"}>
//       <div
//         id="navbar"
//         className="col-start-3 col-span-8 flex gap-16 items-center h-full tracking-wide text-lg italic"
//       >
//         <Link
//           to="about-article" // ID på sektionen du vill scrolla till
//           smooth={true}
//           duration={1300} // Hur lång tid scrollen tar (i ms)
//           className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
//         >
//           About
//         </Link>
//         <Link
//           to="education-section"
//           smooth={true}
//           duration={1300}
//           className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
//         >
//           Education & Experience
//         </Link>
//         <Link
//           to="projects-section"
//           smooth={true}
//           duration={1300}
//           className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
//         >
//           Projects
//         </Link>
//         <Link
//           to="skills-section"
//           smooth={true}
//           duration={1300}
//           className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
//         >
//           Skills & Languages
//         </Link>
//         <Link
//           to="interests-section"
//           smooth={true}
//           duration={1300}
//           className="font-alice hover:cursor-pointer hover:text-secondary transition-colors duration-100 ease-in-out"
//         >
//           Future Ambitions & Interests
//         </Link>
//       </div>
//     </nav>
//   );
// };
