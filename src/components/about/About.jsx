import React from "react";
import "./About.css";
import profileImage from "../../assets/image.png"; // Make sure the image path is correct

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1 className="about-title">ABOUT ME</h1>
          <p className="about-description">
            Hello! My name is Hashir Sajid, and I am from Chunian, Pakistan. I
            am currently pursuing a bachelor's degree in Information Technology
            at the University of Okara.
          </p>
          <p className="about-description">
            Beyond coding, I enjoy exploring new interests and creative
            endeavors. My curiosity keeps me constantly learning and evolving
            both personally and professionally.
          </p>

          <h3 className="about-interests-title">Other Interests</h3>
          <ul className="interests-list">
            <li>Gaming: A way to unwind and connect with friends.</li>
            <li>Learning: Continuously expanding my knowledge and skills.</li>
            <li>Movies & Anime: Appreciating storytelling and creativity.</li>
            <li>
              Designing: Bringing ideas to life through visual expression.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;