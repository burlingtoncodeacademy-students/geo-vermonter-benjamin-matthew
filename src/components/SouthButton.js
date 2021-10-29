import React from "react";

function SouthButton(props) {
  const moveSouth = () => {
    props.setLatitude((prevLatitude) => prevLatitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
  };

  return (
    <button onClick={moveSouth}>
      <i className="arrow" id="south" /> South
    </button>
  );
}

export default SouthButton;
