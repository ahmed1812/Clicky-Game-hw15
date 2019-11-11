import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="navbar">
    <div className="title">{props.children} </div>
    <div>Click an image to begin!</div>
    <div className="fon">
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highscore}
    </div>
    </div>
  );
}
export default Title;
