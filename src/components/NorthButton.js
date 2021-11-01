import React from "react";
import "../App.css";

// updates latitude each move. deducts 1 point from score. also updates centerpoint for drawing of poly line
function NorthButton(props) {
  const moveNorth = () => {
    props.setLatitude((prevLatitude) => prevLatitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude + 0.002, props.longitude]);
    props.polylineUpdateNorth();
  };

  // returns north directional button. returns disabled if game has not been started
  return !props.startGame ? (
    <button className="directional-button" disabled>
      North
    </button>
  ) : (
    <button className="directional-button" onClick={moveNorth}>
      North
    </button>
  );
}

export default NorthButton;
