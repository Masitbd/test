import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, img, info } = props.course;

  return (
    <div>
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>Name: {name}</p>
        <p>{info}</p>
        <button className="btn-regular">More</button>
      </div>
    </div>
  );
};

export default Course;
