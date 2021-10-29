import { divIcon } from "leaflet";
import React, { useState, useEffect } from "react";
import borderData from "../data/border";
import leafletPip from "../../node_modules/leaflet-pip/index";
require("leaflet-pip/index");

function StartButton(props) {
  // console.log(props.startGame);
  // if (!props.startGame) {
  //   return <button onClick={(evt) => props.setStartGame(true)}>Start Game</button>;
  // }

  useEffect(() => {
    // if (!props.startGame) {
    //   return (
    //     <button onClick={(evt) => props.setStartGame(true)}>Start Game</button>
    //   );
    // }

    let newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;
    // props.setLatitude(newLatitude);

    let newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;
    // props.setLongitude(newLongitude);

    let newStartingLocation = [newLatitude, newLongitude];
    // props.setStartingLatLon(newStartingLocation);

    // if (props.startingLatLon === [0, 0]) {
    //   randomLatGenerator();
    //   randomLonGenerator();
    //   props.setStartingLatLon([props.latitude, props.longitude]);
    //   console.log(props.latitude);
    // }

    console.log(newStartingLocation);
    console.log(props.borderDataPassed);

    // let myResults = leafletPip.pointInLayer(
    //   newStartingLocation,
    //   props.borderDataPassed
    // );

    // console.log(myResults);

    // while (myResults === []) {
    //   newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;
    //   newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;
    //   newStartingLocation = [newLatitude, newLongitude];
    //   myResults = leafletPip.pointInLayer(
    //     newStartingLocation,
    //     props.borderDataPassed,
    //     true
    //   );
    // }

    props.setLatitude(newLatitude);
    props.setLongitude(newLongitude);
    props.setStartingLatLon(newStartingLocation);
  }, []);

  // props.setStartGame(false);

  return !props.startGame ? (
    <button
      onClick={(evt) => {
        props.setStartGame(true);
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
