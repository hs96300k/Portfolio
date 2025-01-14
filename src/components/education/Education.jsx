import React from "react";
import "./Education.css";
import Cap from "../../assets/cap.png";

const educationData = [
  {
    sector: "College",
    institution: "Aspire College Chunian",
    year: "2020 - 2022",
    details:
      "I completed my intermediate education in Computer Science at Aspire College Chunian campus. This program gave me a solid foundation in key computer science concepts and equipped me with the skills and knowledge needed to pursue further studies in the field.",
  },
  {
    sector: "University",
    institution: "University of Okara",
    year: "2022 - 2026",
    details:
      "I am currently pursuing my Bachelor's degree in Information Technology at the University of Okara. This program is deepening my understanding of various IT concepts and providing me with the skills needed to excel in the ever-evolving technology landscape.",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      {/* Section Heading */}
      <h1 className="education-heading">EDUCATION</h1>

      <div className="education-container">
        {/* Left Side - Image */}
        <div className="education-image">
          <img src={Cap} alt="Graduation Cap" className="vector-art" />
        </div>

        {/* Right Side - Cards */}
        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-card ${
                index === 0 ? "top-card" : "bottom-card"
              }`}
            >
              <h3 className="education-sector">{edu.sector}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-year">{edu.year}</p>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
