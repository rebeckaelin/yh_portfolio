import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewHeader from "./components/NewHeader.jsx";
import MainPage from "./pages/MainPage.jsx";
import NewFooter from "./components/NewFooter";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NewHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <NewFooter />
      </div>
    </Router>
  );
};

export default App;
