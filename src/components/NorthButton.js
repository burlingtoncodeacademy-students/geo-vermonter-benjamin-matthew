import React from "react";
import "../App.css";

function NorthButton(props) {
  const moveNorth = () => {
    props.setLatitude((prevLatitude) => prevLatitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude + 0.002, props.longitude]);
  };

  return !props.startGame ? (
    <button className="directional-button" disabled>
      North <i className="arrow" id="north" />
    </button>
  ) : (
    <button className="directional-button" onClick={moveNorth}>
      North <i className="arrow" id="north" />
    </button>
  );
}

export default NorthButton;