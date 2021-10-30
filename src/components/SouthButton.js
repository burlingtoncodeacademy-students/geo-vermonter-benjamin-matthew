import React from "react";

function SouthButton(props) {
  const moveSouth = () => {
    props.setLatitude((prevLatitude) => prevLatitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude - 0.002, props.longitude]);
  };

  return (
    <button className="directional-button" onClick={moveSouth}>
      <i className="arrow" id="south" /> South
    </button>
  );
}

export default SouthButton;
