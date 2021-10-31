import React, { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="developer-container">
      <div className="information-container">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
