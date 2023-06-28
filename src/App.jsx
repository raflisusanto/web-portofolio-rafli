import AboutSection from "./components/AboutSection";
import BottomBar from "./components/BottomBar";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import "./index.css";

function App() {
  return (
    <div className="body">
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contacts">
        <BottomBar />
      </section>
    </div>
  );
}

export default App;
