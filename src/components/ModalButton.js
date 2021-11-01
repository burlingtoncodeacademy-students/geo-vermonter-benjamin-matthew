import React from "react";
import { useState, useEffect } from "react";

//creating a modal button component
function ModalButton(props) {
  //setting up usestate variables for holding intermediate county and town data
  const [newCounty, setNewCounty] = useState("");
  const [newTown, setNewTown] = useState("");

  //useEffect hook with a fetch function to fetch the json from nominatim
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse.php?lat=${props.startingLatLon[0]}&lon=${props.startingLatLon[1]}&zoom=18&format=jsonv2`
    )
      .then((res) => res.json())
      .then((nominatimArray) => {
        //using the setstates for the county and town by pulling from the correct location in the json
        setNewCounty(nominatimArray.address.county);
        setNewTown(nominatimArray.address.village);
      });
    //utilizing the second useEffect argument, so it only fetches when the startingLatLon is changed (this stops it fetching endlessly)
  }, [props.startingLatLon]);

  //ternary to return either a disabled button (game not started) or a functioning button
  return !props.startGame ? (
    <button id="guessButton" className="gameplay-button" disabled>
      Guess
    </button>
  ) : (
    <button
      id="guessButton"
      className="gameplay-button"
      // onClick evt to open the modal, reset lat and lon, set the county, and set the town
      onClick={(evt) => {
        props.setModalOpen(true);
        props.setLatitude(props.startingLatLon[0]);
        props.setLongitude(props.startingLatLon[1]);
        props.setCounty(newCounty);
        props.setTown(newTown);
      }}
    >
      Guess
    </button>
  );
}

export default ModalButton;
