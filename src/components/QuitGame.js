import React from "react";
import { useState, useEffect } from "react";

// setting up a quit game functional component
function QuitGame(props) {
  //setting up useState variables
  const [newCounty, setNewCounty] = useState("");
  const [newTown, setNewTown] = useState("");

  // useEffect hook to fetch json from nominatim using the props from the starting coordinates
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse.php?lat=${props.startingLatLon[0]}&lon=${props.startingLatLon[1]}&zoom=18&format=jsonv2`
    )
      .then((res) => res.json())
      .then((nominatimArray) => {
        // setting the state of the intermediate variables for county and town using the correct reference to the json file
        setNewCounty(nominatimArray.address.county);
        setNewTown(nominatimArray.address.village);
      });
    // utilizing the second argument so the fetch only runs once
  }, [props.startingLatLon]);

  // ternary to return a disabled button (game not started) or a clickable button
  return !props.startGame ? (
    <button id="quitButton" className="gameplay-button" disabled>
      Quit Game
    </button>
  ) : (
    <button
      // onclick evt handler to set the lat/lon, county, town, and end game state(this un-hides the info section)
      onClick={(evt) => {
        props.setLatitude(props.startingLatLon[0]);
        props.setLongitude(props.startingLatLon[1]);
        props.setCounty(newCounty);
        props.setTown(newTown);
        props.setEndGame(true);
      }}
      id="quitButton"
      className="gameplay-button"
    >
      Quit Game
    </button>
  );
}

export default QuitGame;
