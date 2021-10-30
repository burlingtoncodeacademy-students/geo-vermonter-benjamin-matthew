import React from "react";
import CountyList from "./CountyList";
import GuessButton from "./GuessButton";

function Modal(props) {
  if (!props.modalOpen) {
    return null;
  }
  return (
    //setting the modal class to have an on click to close the modal using props
    <div className="modal" onClick={props.closeModal}>
      {/* setting up a div that contains all the content of the modal and using an on click evt to stop the propagation of the closure from above at this level. It will not close if you click inside of here. Bubbling? */}
      <div className="insideModal" onClick={(evt) => evt.stopPropagation()}>
        {/* <div className="modalHeader">
          <h4 id="modalTitle">Take a Guess</h4>
        </div> */}
        <CountyList />
        <GuessButton />
        <div className="modalBody"></div>
        <div className="modalFooter">
          {/* calling close modal on click of this button */}
          {/* <GuessButton /> */}
          <button onClick={props.closeModal} id="closeButton">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// will use for guess functionality
{
  /* <StartGameModal closeModal={(evt) => setStartGame(false)} startGame={startGame} /> */
}

{
  /* <button id="guessButton" className="gameplay-button">
              Guess
            </button> */
}

// return !props.startGame ? (
//     <button id="quitButton" className="gameplay-button" disabled>
//       Quit Game
//     </button>
//   ) : (
//     <button
//       onClick={(evt) => {
//         props.setLatitude(props.startingLatLon[0]);
//         props.setLongitude(props.startingLatLon[1]);
//         props.setCounty(newCounty);
//         props.setTown(newTown);
//         props.setEndGame(true)
//       }}
//       id="quitButton"
//       className="gameplay-button"
//     >
//       Quit Game
//     </button>
//   );
