import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import EduAndExp from "../components/EduAndExp";
import { Projects } from "../components/Projects";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-start-1 col-end-9 bg-primary">
          <Navbar />
        </div>
        <div className="col-start-1 col-end-9">
          <Hero />
        </div>
        <div className="col-start-1 col-end-9">
          <About />
        </div>
        <div className="col-start-1 col-end-9">
          <EduAndExp />
        </div>
        <div className="col-start-1 col-end-9">
          <Projects />
        </div>
        <div className="col-start-1 col-end-9">
          <Skills />
        </div>
        <div className="col-start-1 col-end-9">
          <Interests />
        </div>
        <div className="col-start-1 col-end-9">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
