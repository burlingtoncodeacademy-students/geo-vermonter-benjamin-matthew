import React from "react";
import { useState, useEffect } from "react";

function Return(props) {
  //create a returnButton
  //pass in setCenter and startingLatLon

  return (
    <button
      onClick={(evt) => {
        props.setCenter(props.startingLatLon);
      }}
    >
      Return to Starting Location
    </button>
  );
}

export default Return

//click return button
//game scrolls back to starting point

//disable buttons based on if startGame is true using ternary similar to start button