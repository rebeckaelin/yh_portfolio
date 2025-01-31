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
      <Navbar />
      <Hero />
      <About />
      <EduAndExp />
      <Projects />
      <Skills />
      <Interests />
      <Footer />
    </>
  );
};

export default MainPage;
