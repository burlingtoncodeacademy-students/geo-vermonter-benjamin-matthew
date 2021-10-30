import React from "react";

function GuessButton() {
  return (
    <div className="userGuessField">
      <input
        className="user-input"
        type="text"
        placeholder="Guess a County"
      ></input>
      <button id="submit-guess">Submit Guess</button>
    </div>
  );
}
export default GuessButton;
