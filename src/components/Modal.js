import React from "react";
import CountyList from "./CountyList";
import GuessButton from "./GuessButton";
import { useState } from "react";

//creating the modal functional component
function Modal(props) {
  //if guard clause to return nothing if the modalopen boolean is not true
  if (!props.modalOpen) {
    return null;
  }

  //console log to help with testing and grading of the project (easier to guess the county)
  console.log(props.county);

  return (
    //setting the modal class to have an on click to close the modal using props
    <div className="modal" onClick={props.closeModal}>
      {/* setting up a div that contains all the content of the modal and using an on click evt to stop the propagation of the closure from above at this level. It will not close if you click inside of here. Bubbling? */}
      <div className="insideModal" onClick={(evt) => evt.stopPropagation()}>
        {/* calling the county list and guess button components and passing the appropriate information for the guess button */}
        <CountyList />
        <GuessButton
          county={props.county}
          setScore={props.setScore}
          score={props.score}
          setEndGame={props.setEndGame}
          closeModal={props.closeModal}
          setStartGame={props.setStartGame}
        />
        <div className="modalBody"></div>
        <div className="modalFooter">
          {/* calling close modal on click of this button */}
          <button onClick={props.closeModal} id="closeButton">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
