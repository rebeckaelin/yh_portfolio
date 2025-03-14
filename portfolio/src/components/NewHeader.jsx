import { useNavigate } from "react-router-dom";

const NewHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div
        id="header"
        className="flex justify-between items-center h-20 px-8 w-full "
      >
        <div>
          <button
            onClick={() => navigate("/")}
            className="font-main font-semibold tracking-wider text-5xl  hover:cursor-pointer hover:text-dark"
          >
            rl.
          </button>
        </div>

        <nav>
          <div className="font-second text-xs flex gap-2 sm:gap-5 md:gap-10 tracking-wider sm:text-sm">
            <button
              onClick={() => navigate("/")}
              className="font-extralight uppercase hover:cursor-pointer hover:text-dark hover:underline underline-offset-2"
            >
              home
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="font-extralight uppercase hover:cursor-pointer hover:text-dark hover:underline underline-offset-2"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/about")}
              className="font-extralight uppercase hover:cursor-pointer hover:text-dark hover:underline underline-offset-2"
            >
              About
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="font-extralight uppercase hover:cursor-pointer hover:text-dark hover:underline underline-offset-2"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewHeader;
