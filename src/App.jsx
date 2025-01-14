import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ParticlesComponent from "./components/particles/Particles";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Loader from "./components/loader/Loader"; // Import Loader

function App() {
  return (
    <div className="App">
      <Loader /> {/* Display the loader here */}

      <ParticlesComponent id="particles" />
      <Navbar />

      {/* Add id attributes here to match the navbar links */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
