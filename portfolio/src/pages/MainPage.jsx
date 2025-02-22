import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewHeader from "../components/NewHeader";
import Home from "../components/Home";
import NewFooter from "../components/NewFooter";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";

const MainPage = () => {
  return (
    <Router>
      <NewHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <NewFooter />
    </Router>
  );
};

export default MainPage;
