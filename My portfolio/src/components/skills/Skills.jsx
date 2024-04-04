import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import FrameWorks from "./FrameWorks";
import OtherTech from "./OtherTech";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
<Frontend/>
<FrameWorks/>
<OtherTech/>

      </div>
    </section>
  );
};

export default Skills;
