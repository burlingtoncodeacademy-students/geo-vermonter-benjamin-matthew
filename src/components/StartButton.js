import { divIcon } from "leaflet";
import React, { useState, useEffect } from "react";
import borderData from "../data/border";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import { useMap } from "react-leaflet";

function StartButton(props) {
  // if (!props.startGame) {
  //   return <button onClick={(evt) => props.setStartGame(true)}>Start Game</button>;
  // }
  let newLatitude;
  let newLongitude;
  let newStartingLocation;

  useEffect(() => {
    newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;

    newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;

    newStartingLocation = [newLatitude, newLongitude];

    leafletPip.bassackwards = true;
    let myResults = leafletPip.pointInLayer(
      newStartingLocation,
      L.geoJSON(props.borderDataPassed),
      true
    );

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

  // props.setStartGame(false);

  return !props.startGame ? (
    <button
      onClick={(evt) => {
        props.setStartGame(true);
        props.setLatitude(newLatitude);
        props.setLongitude(newLongitude);
        props.setStartingLatLon(newStartingLocation);
        props.setCenter(newStartingLocation);
      }}
    >
      Start Game
    </button>
  ) : (
    <button disabled>Start Game</button>
  );
}

export default StartButton;

//generate random lat and lon

//check against border.js using leaflet pip

//assign to setStartingLocation

//update center and zoom to the starting coordinates

//update info class to be ???
