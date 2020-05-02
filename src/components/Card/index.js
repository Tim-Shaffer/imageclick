import React from "react";
import "./style.css";

function Card(props) {
  return (

    <div className="click-image">
      <div className="card" onClick={() => props.clicked(props.id)} >
			  <img alt={props.id} src={props.image} key={props.id} />
		  </div>
    </div>
  
  )
}

export default Card;