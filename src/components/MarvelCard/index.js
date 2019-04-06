import React from "react";

function MarvelCard(props) {
  return (
    <div className="img-container" onClick={() => props.clickCount(props.id)}>
      <img className="img-thumbnail" alt={props.name} src={props.image} />
    </div>
  );
}

export default MarvelCard;
