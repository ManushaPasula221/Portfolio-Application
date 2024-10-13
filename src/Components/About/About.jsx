import React from "react";
import "./About.css";
import About_data from "../../assets/About_data";
import Skill_data from "../../assets/Skill_data";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About</h2>
      </div>
      <div className="about-container">
        {About_data.map((about, index) => {
          return (
            <div ket={index} className="about-format">
              <p>{about.desc}</p>
            </div>
          );
        })}
        <h3>Technical skills</h3>
        <div className="skills-container">
          {Skill_data.map((skill, index) => {
            return (
              <div ket={index} className="skill-format">
                {skill.skills}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
