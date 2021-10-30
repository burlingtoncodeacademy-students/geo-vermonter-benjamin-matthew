import React from "react";

function Guess(props) {
  if (!props.startGame) {
    return null;
  }
  return (
    //setting the modal class to have an on click to close the modal using props
    <div className="modal" onClick={props.closeModal}>
      {/* setting up a div that contains all the content of the modal and using an on click evt to stop the propagation of the closure from above at this level. It will not close if you click inside of here. Bubbling? */}
      <div className="insideModal" onClick={(evt) => evt.stopPropagation()}>
        <div className="modalHeader">
          <h4 id="modalTitle">Hello Modal!</h4>
        </div>
        <div className="modalBody">
          This is some body text for modal testing. Click anywhere outside to
          close!
        </div>
        <div className="modalFooter">
          {/* calling close modal on click of this button */}
          <button onClick={props.closeModal} id="closeButton">
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Guess;

// will use for guess functionality
{
  /* <StartGameModal closeModal={(evt) => setStartGame(false)} startGame={startGame} /> */
}
