import React from "react";
import "./style.css";

function Box(props) {
  return <div className="box"> {props.children}<h2>Click on an image to earn points, but don't click on any more than once!</h2></div>;
}

export default Box;
