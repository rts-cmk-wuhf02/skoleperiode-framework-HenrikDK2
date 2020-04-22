import React from "react";
export default function Pet(props) {
  let hero = "http://placecorgi.com/300/300";

  if (props.medial.length) hero = props.medial[0].small;
  return (
    <a href={`/details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={props.name} />
      </div>

      <div className="info">
        <h1>{props.name}</h1>
        <h2>{`${props.animal} - ${props.breed} - ${props.location}`}</h2>
      </div>
    </a>
  );
}
