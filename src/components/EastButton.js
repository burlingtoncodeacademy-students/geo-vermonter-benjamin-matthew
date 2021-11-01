import React from "react";

// updates longitude each move. deducts 1 point from score. also updates centerpoint for drawing of poly line
function EastButton(props) {
  const moveEast = () => {
    props.setLongitude((prevLongitude) => prevLongitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude, props.longitude + 0.002]);
    props.polylineUpdateEast();
  };

  // returns east directional button. returns disabled if game has not been started
  return !props.startGame ? (
    <button className="directional-button west-east" disabled>
      East
    </button>
  ) : (
    <button className="directional-button west-east" onClick={moveEast}>
      East
    </button>
  );
}

export default EastButton;
