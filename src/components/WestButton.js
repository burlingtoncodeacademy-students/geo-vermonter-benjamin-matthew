import React from "react";

function WestButton(props) {
  const moveWest = () => {
    props.setLongitude((prevLongitude) => prevLongitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude, props.longitude - 0.002]);
    props.polylineUpdateWest()
  };

  return !props.startGame ? (
    <button className="directional-button west-east" disabled>
      <i className="arrow" id="west" /> West
    </button>
  ) : (
    <button className="directional-button west-east" onClick={moveWest}>
      <i className="arrow" id="west" /> West
    </button>
  );
}

export default WestButton;
