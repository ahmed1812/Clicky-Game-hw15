import React from "react";
import "./style.css";

function Footer(props) {
  return <div className="footer">{props.children} Click game <img  src="https://clicky-game.netlify.com/assets/images/react.svg" ></img></div>;
}

export default Footer;
