import React from "react";
import { useState, useEffect } from "react";

function Return(props) {
  return !props.startGame ? (
    <button disabled id="returnButton" className="gameplay-button">
      Return to Start
    </button>
  ) : (
    <button
      id="returnButton"
      className="gameplay-button"
      onClick={(evt) => {
        props.setCenter(props.startingLatLon);
      }}
    >
      Return to Start
    </button>
  );
}

export default Return;

//click return button
//game scrolls back to starting point

//disable buttons based on if startGame is true using ternary similar to start button
