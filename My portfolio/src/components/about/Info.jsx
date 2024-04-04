import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">2+ Years</h3>
        <span className="about__subtitle"> Experience</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">30+ Projects</h3>
        <span className="about__subtitle">Completed</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Online 24/7</h3>
        <span className="about__subtitle">Support</span>
      </div>
    </div>
  );
};

export default Info;
