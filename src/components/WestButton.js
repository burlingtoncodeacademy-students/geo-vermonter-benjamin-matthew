import React from "react";

// updates longitude each move. deducts 1 point from score. also updates centerpoint for drawing of poly line
function WestButton(props) {
  const moveWest = () => {
    props.setLongitude((prevLongitude) => prevLongitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude, props.longitude - 0.002]);
    props.polylineUpdateWest();
  };

  // returns west directional button. returns disabled if game has not been started
  return !props.startGame ? (
    <button className="directional-button west-east" disabled>
      West
    </button>
  ) : (
    <button className="directional-button west-east" onClick={moveWest}>
      West
    </button>
  );
}

export default WestButton;
