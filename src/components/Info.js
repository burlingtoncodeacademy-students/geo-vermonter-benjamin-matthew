import React from "react";
import { useState, useEffect } from "react";

//setting up a check on the game state to see if either the score has gone below 0 or the endGame boolean is true
function gameStateCheck(props) {
  if (props.endGame === true || props.score <= 0) {
    return true;
  } else {
    return false;
  }
}

//creating functional component info to either display or hide the information based on the gamestatecheck function above
function Info(props) {
  //ternary returns either the ??? if the game is not over or the correct information
  return !gameStateCheck(props) ? (
    <div className="info">
      <div id="coordinates">
        <div id="lat" className="info-text">
          Lat: ???
        </div>
        <div id="lon" className="info-text">
          Lon: ???
        </div>
      </div>
      <div id="location">
        <div id="county" className="info-text">
          County: ???
        </div>
        <div id="town" className="info-text">
          Town: ???
        </div>
      </div>
    </div>
  ) : (
    <div className="info">
      <div id="coordinates">
        <div id="lat" className="info-text">
          Lat: {+props.latitude.toFixed(3)}
        </div>
        <div id="lon" className="info-text">
          Lon: {+props.longitude.toFixed(3)}
        </div>
      </div>
      <div id="location">
        <div id="county" className="info-text">
          County: {props.county}
        </div>
        <div id="town" className="info-text">
          Town: {props.town}
        </div>
      </div>
    </div>
  );
}

export default Info;
