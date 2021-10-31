import React from "react";

function EastButton(props) {
  const moveEast = () => {
    props.setLongitude((prevLongitude) => prevLongitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude, props.longitude + 0.002]);
    props.polylineUpdateEast()
  };

  return !props.startGame ? (
    <button className="directional-button west-east" disabled>
      East <i className="arrow" id="east" />
    </button>
  ) : (
    <button className="directional-button west-east" onClick={moveEast}>
      East <i className="arrow" id="east" />
    </button>
  );
}

export default EastButton;