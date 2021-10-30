import React from "react";
import { useState, useEffect } from "react";

function QuitGame(props) {
  //display lat and lon in the info panel
  //fetch request using the starting lat and lon to get the county and town
  //put the county and town in the info panel
  //   props.setLatitude(startingLatLon[0]);
  //   props.setLongitude(startingLatLon[1]);

  let newCounty
  let newTown
  //create setState variables for county and town
    if (props.county === '') {
      fetch(
        `https://nominatim.openstreetmap.org/reverse.php?lat=${props.startingLatLon[0]}&lon=${props.startingLatLon[1]}&zoom=18&format=jsonv2`
      )
        .then((res) => res.json())
        .then((nominatimArray) => {
          newCounty =(nominatimArray.address.county);
          newTown = (nominatimArray.address.village);
        });
    }

  return (
    <button
      onClick={(evt) => {
        props.setLatitude(props.startingLatLon[0]);
        props.setLongitude(props.startingLatLon[1]);
        props.setCounty(newCounty);
        props.setTown(newTown);
      }}
      id="quitButton" className="gameplay-button"
    >
      Quit Game
    </button>
  );
}

export default QuitGame;

//county
//setCounty
//setTown
//setLatitude
//setLongitude