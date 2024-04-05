import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        {" "}
        <a href={item.link} target="no_blank" className="work__button__dark">
          Live Preview
        </a>
        <a href={item.source} target="no_blank" className="work__button">
          Source Code <i className="bx bx-right-arrow-alt work__button"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
