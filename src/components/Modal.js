import React from "react";
import CountyList from "./CountyList";
import GuessButton from "./GuessButton";
import { useState } from "react";

function Modal(props) {
  const [newCounty, setNewCounty] = useState("");
  const [newTown, setNewTown] = useState("");

  if (!props.modalOpen) {
    return null;
  }

  console.log(props.county);
  return (
    //setting the modal class to have an on click to close the modal using props
    <div className="modal" onClick={props.closeModal}>
      {/* setting up a div that contains all the content of the modal and using an on click evt to stop the propagation of the closure from above at this level. It will not close if you click inside of here. Bubbling? */}
      <div className="insideModal" onClick={(evt) => evt.stopPropagation()}>
        {/* <div className="modalHeader">
          <h4 id="modalTitle">Take a Guess</h4>
        </div> */}
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
