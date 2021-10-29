import React from "react";
import { useState, useEffect } from "react";

function QuitGame(props) {
  //display lat and lon in the info panel
  //fetch request using the starting lat and lon to get the county and town
  //put the county and town in the info panel
  //   props.setLatitude(startingLatLon[0]);
  //   props.setLongitude(startingLatLon[1]);

  //create setState variables for county and town
  useEffect(() => {
    if (!county.length) {
      fetch(
        `https://nominatim.openstreetmap.org/ui/reverse.html?lat=${props.latitude}&lon=${props.longitude}`
      )
        .then((res) => res.json())
        .then((nominatimArray) => {
          setCounty(nominatimArray.county);
          setTown(nominatimArray.village);
        });
    }
  });

  return (
    <button
      onClick={(evt) => {
        props.setLatitude(startingLatLon[0]);
        props.setLongitude(startingLatLon[1]);
        setCounty(nominatimArray.county);
        setTown(nominatimArray.village);
      }}
      id="quitButton"
    >
      Quit Game
    </button>
  );
}

export default QuitGame;
