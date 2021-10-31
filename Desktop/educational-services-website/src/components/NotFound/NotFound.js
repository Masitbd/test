import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 className="error-page">404</h1>
      <p className="error-text">Oops! Something is wrong.</p>
      <a className="button" href="./home">
        <i class="icon-home"></i> Go back in initial page, is better.
      </a>
    </div>
  );
};

export default NotFound;
