import { useNavigate } from "react-router-dom";

const NewHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-center ">
      <div
        id="header"
        className="flex justify-between items-center h-20 w-full p-6 sm:p-0 sm:w-3/4  "
      >
        <div>
          <button
            onClick={() => navigate("/")}
            className="font-main font-semibold tracking-wider md:text-5xl text-3xl hover:cursor-pointer hover:text-dark"
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
