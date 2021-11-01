import React from "react";
import { useState, useEffect } from "react";

// setting up a return component function
function Return(props) {
  // ternary to return either a disable button (game not started) or a clickable button
  return !props.startGame ? (
    <button disabled id="returnButton" className="gameplay-button">
      Return to Start
    </button>
  ) : (
    <button
      id="returnButton"
      className="gameplay-button"
      // onclick evt handler to set the center, lat, and lon back to the starting coordinates. it also clears out the polyline array
      onClick={(evt) => {
        props.setCenter(props.startingLatLon);
        props.setLatitude(props.startingLatLon[0]);
        props.setLongitude(props.startingLatLon[1]);
        props.setPolylineList([]);
        props.setPolylineListInitialized(false);
      }}
    >
      Return to Start
    </button>
  );
}

export default Return;
