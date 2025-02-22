import { Link } from "react-scroll";
import HeartCounter from "./HeartCounter";
import github_icon_white from "/github_icon_white.png";
import instagram_icon_white from "/instagram_logo_white.png";
import linkedIn_icon_white from "/linkedin_logo_white.png";

const NewFooter = () => {
  return (
    <footer className="flex justify-center bg-primary w-full">
      <div className=" flex flex-col justify-around md:flex-row md:justify-between items-center h-40 w-full p-6 sm:p-0 sm:w-3/4  ">
        <div>
          <Link
            to="header"
            smooth={true}
            duration={600}
            className="font-second uppercase font-extralight tracking-widest text-sm text-light hover:text-light hover:cursor-pointer"
          >
            Coding, Creating, and Exploring
          </Link>
        </div>
        <HeartCounter />
        <div className="flex gap-10 flex-row justify-center items-center ">
          <a href="https://github.com/rebeckaelin">
            <img
              className="w-8 h-8 md:w-11 md:h-11 p-2 transition-transform duration-300 hover:scale-120"
              src={github_icon_white}
              alt="github_icon"
            />
          </a>
          <a href="https://www.instagram.com/rebeckaelin">
            <img
              className="w-8 h-8 md:w-11 md:h-11 p-2 transition-transform duration-300 hover:scale-120"
              src={instagram_icon_white}
              alt="instagram_icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/rebecka-larsson-undefined-b84a45331/">
            <img
              className=" w-8 h-8 md:w-11 md:h-11 p-2 transition-transform duration-300 hover:scale-120"
              src={linkedIn_icon_white}
              alt="linkedIn_icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
