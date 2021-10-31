import React from "react";
import "./Service.css";

const Service = (props) => {
  const { title, description, img } = props.service;
  return (
    <div>
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>{title}</p>
        <p>{description}</p>
        <button className="btn-regular">More</button>
      </div>
    </div>
  );
};
export default Service;
