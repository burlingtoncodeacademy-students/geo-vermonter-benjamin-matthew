import { divIcon } from "leaflet";
import React, { useState, useEffect } from "react";

function StartButton(props) {
  console.log(props.startGame);
  // if (!props.startGame) {
  //   return <button onClick={(evt) => props.setStartGame(true)}>Start Game</button>;
  // }

  // function randomLatGenerator() {
  //   props.setLatitude(Math.random() * (45.005419 - 42.730315) + 42.730315);
  // }
  useEffect(() => {
    let newLatitude = Math.random() * (45.005419 - 42.730315) + 42.730315;

    props.setLatitude(newLatitude);

    // function randomLonGenerator() {
    //   props.setLongitude(Math.random() * (-71.510225 - -73.35218) + -73.35218);
    // }

    let newLongitude = Math.random() * (-71.510225 - -73.35218) + -73.35218;
    props.setLongitude(newLongitude);

    let newStartingLocation = [newLatitude, newLongitude];
    props.setStartingLatLon(newStartingLocation);

    // if (props.startingLatLon === [0, 0]) {
    //   randomLatGenerator();
    //   randomLonGenerator();
    //   props.setStartingLatLon([props.latitude, props.longitude]);
    //   console.log(props.latitude);
    // }

    console.log(newStartingLocation);
  }, []);

  if (!props.startGame) {
    return (
      <button onClick={(evt) => props.setStartGame(true)}>Start Game</button>
    );
  }

  // props.setStartGame(false);

  return <button disabled>Start Game</button>;
}

export default StartButton;

//generate random lat and lon

//check against border.js using leaflet pip

//assign to setStartingLocation

//update center and zoom to the starting coordinates

//update info class to be ???
