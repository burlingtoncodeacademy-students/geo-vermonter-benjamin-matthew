import React from "react";
import { useState, useEffect } from "react";

function ModalButton(props) {
  const [newCounty, setNewCounty] = useState("");
  const [newTown, setNewTown] = useState("");

  fetch(
    `https://nominatim.openstreetmap.org/reverse.php?lat=${props.startingLatLon[0]}&lon=${props.startingLatLon[1]}&zoom=18&format=jsonv2`
  )
    .then((res) => res.json())
    .then((nominatimArray) => {
      setNewCounty(nominatimArray.address.county);
      setNewTown(nominatimArray.address.village);
    });

  return !props.startGame ? (
    <button id="guessButton" className="gameplay-button" disabled>
      Guess
    </button>
  ) : (
    <button
      id="guessButton"
      className="gameplay-button"
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

// const [newCounty, setNewCounty] = useState("");
// const [newTown, setNewTown] = useState("");

// // let newCounty;
// // let newTown;
// //create setState variables for county and town

// fetch(
//   `https://nominatim.openstreetmap.org/reverse.php?lat=${props.startingLatLon[0]}&lon=${props.startingLatLon[1]}&zoom=18&format=jsonv2`
// )
//   .then((res) => res.json())
//   .then((nominatimArray) => {
//     setNewCounty(nominatimArray.address.county);
//     setNewTown(nominatimArray.address.village);
//   });

// return !props.startGame ? (
//   <button id="quitButton" className="gameplay-button" disabled>
//     Quit Game
//   </button>
// ) : (
//   <button
//     onClick={(evt) => {
//       props.setLatitude(props.startingLatLon[0]);
//       props.setLongitude(props.startingLatLon[1]);
//       props.setCounty(newCounty);
//       props.setTown(newTown);
//       props.setEndGame(true)
//     }}
//     id="quitButton"
//     className="gameplay-button"
//   >
//     Quit Game
//   </button>
// );
