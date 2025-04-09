import React, { useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect/dist/core";

const Home = () => {
  useEffect(() => {
    const typewriter = new Typewriter(".home-subtitle", {
      strings: [
        "A Full Stack Web Developer",
        "A Problem Solver",
        "A Creative Mindset",
        "Transforming Ideas into Code",
        "Bringing Ideas to Life Through Code",
        "Transforming Challenges into Opportunities",
      ],
      autoStart: true,
      loop: true,
      delay: 100,
      deleteSpeed: 50,
    });

    // Cleanup the typewriter instance when the component unmounts
    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        {/* Header */}
        <h1 className="home-heading">
          Hi, I am <span className="home-name">Hashir Sajid</span>
        </h1>
        <h2 className="home-subtitle">A Full Stack Web Developer</h2>

        {/* Description */}
        <p className="home-description">
          Versatile and reliable web developer skilled in tackling challenges,
          crafting clean, production-ready code, and thriving in dynamic,
          high-pressure environments. I bring hands-on experience with React.js
          for front-end development and expertise in Node.js, Express.js, and
          MongoDB for back-end solutions.
        </p>

        {/* Social Media Icons */}
        <div className="home-icons">
          <a
            href="www.linkedin.com/in/hashirsajid"
            target="_blank"
            rel="noopener noreferrer"
            className="home-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01bf7863cd7964a1c8"
            className="home-icon"
          >
            <i className="fas fa-briefcase"></i>
          </a>
          <a
            href="https://github.com/hs96300k"
            target="_blank"
            rel="noopener noreferrer"
            className="home-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://wa.me/923704353050"
            target="_blank"
            rel="noopener noreferrer"
            className="home-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="home-buttons">
          <a
            href="https://drive.google.com/file/d/1gLytgMYN3n14BFxPn31SbGjpwJVJr47d/view?usp=drive_link"
            target="_blank"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
