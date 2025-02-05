import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import EduAndExp from "../components/EduAndExp";
import { Projects } from "../components/Projects";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Footer from "../components/Footer";
import Future from "../components/Future";

const MainPage = () => {
  return (
    <>
      <div className="">
        <div className="bg-primary">
          <Navbar />
        </div>

        <Hero />

        <About />

        <EduAndExp />

        <Projects />

        <Skills />

        <Interests />

        <Footer />
      </div>
    </>
  );
};

export default MainPage;
