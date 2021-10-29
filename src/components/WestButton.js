import React from "react";

function WestButton(props) {
  const moveWest = () => {
    props.setLongitude((prevLongitude) => prevLongitude - 0.002);
    props.setScore((prevScore) => prevScore - 1);
  };

  return (
    <button onClick={moveWest}>
      <i className="arrow" id="west" /> West
    </button>
  );
}

export default WestButton;
