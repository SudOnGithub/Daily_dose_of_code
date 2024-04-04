import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title"> Languages</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">HTML5</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">CSS3</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
      <div className="skills__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">JavaScript</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">PL/SQL</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Frontend;
