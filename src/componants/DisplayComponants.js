import React from "react";
import "./DisplayComponants.css"

function DisplayComponants(props) {
  return (
    <div className="Display">
      <img src={props.img} />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <h3>{props.price}</h3>
    </div>
  );
}

export default DisplayComponants;
