import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiPrisma,
  SiVercel,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiTypescript,
  SiDocker,
  SiLinux,
  SiCanva,
  SiFigma,
} from "react-icons/si";
import "./Skills.css";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <TbBrandJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "FIGMA", icon: <SiFigma /> },
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Linux", icon: <SiLinux /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="section-title">SKILLS</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h5 className="skill-name">{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
