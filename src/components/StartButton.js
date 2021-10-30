import { divIcon, map } from "leaflet";
import React, { useState, useEffect } from "react";

//importing leafletPip and L from leaflet
import leafletPip from "leaflet-pip";
import L from "leaflet";

function StartButton(props) {
  //declaring the variables outside of the use effect to allow reassignment and passing to the return
  let newLatitude;
  let newLongitude;
  let newStartingLocation;

  //setting up a useEffect hook
  useEffect(() => {
    //setting the newLatitude using the max and min latitudes of VT
    newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;
    //setting the newLongitude using the max and min longitudes of VT
    newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;
    //setting the new combinted lat and lon
    newStartingLocation = [newLatitude, newLongitude];

    //using bassackwards in leafletpip to allow lat then lon pass in
    leafletPip.bassackwards = true;
    //creating a new array with the results from leafletpip
    let myResults = leafletPip.pointInLayer(
      newStartingLocation,
      L.geoJSON(props.borderDataPassed),
      true
    );

    //while loop checks the results of leafletpip, an empty array means that it is outside of VT's boundaries and causes new coordinates to be generated
    while (myResults.length !== 1) {
      newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;
      newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;
      newStartingLocation = [newLatitude, newLongitude];
      myResults = leafletPip.pointInLayer(
        newStartingLocation,
        L.geoJSON(props.borderDataPassed),
        true
      );
    }
  }, []);

  //return ternary that either gives a clickable button or a disabled button based on the boolean startGame being true or false
  //the onClick changes the start game to true, and updates the latitude, longitude, starting location, center, and zoom using the set states
  return !props.startGame ? (
    <button
      onClick={(evt) => {
        props.setStartGame(true);
        props.setLatitude(newLatitude);
        props.setLongitude(newLongitude);
        props.setStartingLatLon(newStartingLocation);
        props.setCenter(newStartingLocation);
        props.setZoom(16);
      }} id='startButton' className='gameplay-button'
    >
      Start Game
    </button>
  ) : (
    <button id='startButton' className='gameplay-button' disabled>Start Game</button>
  );
}

export default StartButton;

//update info class to be ???

//set all equal to ???
//set county
//set town
//set latitude
//set longitude