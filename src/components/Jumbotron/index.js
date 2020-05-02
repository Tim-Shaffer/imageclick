import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <p>Click on an Image.</p>
      <p>The images will shuffle.</p>
      <p>Click a different image.</p>
      <h1>But...Only Click an Image Once</h1>
      <p>Try to get all 12!</p>
      <p>Scroll down to see all the images!</p>
    </div>
  );
}

export default Jumbotron;
