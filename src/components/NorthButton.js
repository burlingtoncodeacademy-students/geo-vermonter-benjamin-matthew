import React from "react";

function NorthButton(props) {
  const moveNorth = () => {
    props.setLatitude((prevLatitude) => prevLatitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
    props.setCenter([props.latitude, props.longitude])
  };

  return (
    <button onClick={moveNorth}>
      North <i className="arrow" id="north" />
    </button>
  );
}

export default NorthButton;
