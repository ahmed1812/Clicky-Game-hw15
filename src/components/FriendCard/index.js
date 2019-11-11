import React from "react";
import "./style.css";
// import Counter from "./components/Counter";
function FriendCard(props) {
  return (
    
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img className="card-img-top card-height" alt={props.name} src={props.image} />
      </div>
    </div>
     
  );
}

export default FriendCard;
