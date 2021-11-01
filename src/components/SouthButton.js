import React from "react";

// updates latitude each move. deducts 1 point from score. also updates centerpoint for drawing of poly line
function SouthButton(props) {
  const moveSouth = () => {
    props.setLatitude((prevLatitude) => prevLatitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude - 0.002, props.longitude]);
    props.polylineUpdateSouth();
  };

  // returns south directional button. returns disabled if game has not been started
  return !props.startGame ? (
    <button className="directional-button" disabled>
      South
    </button>
  ) : (
    <button className="directional-button" onClick={moveSouth}>
      South
    </button>
  );
}

export default SouthButton;
