import React from "react";

function NorthButton(props) {
  const moveNorth = () => {
    props.setLatitude((prevLatitude) => prevLatitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
  };

  return (
    <button onClick={moveNorth}>
      North <i className="arrow" id="north" />
    </button>
  );
}

export default NorthButton;
