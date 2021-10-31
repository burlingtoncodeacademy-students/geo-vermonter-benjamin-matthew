import React, { useState } from "react";

function GuessButton(props) {
  const [playerGuess, setPlayerGuess] = useState("");

  const guessSubmit = (evt) => {
    evt.preventDefault();
    console.log(playerGuess);
  };
  return (
    <div className="userGuessField">
      <form onSubmit={guessSubmit}>
        <input
          className="user-input"
          type="text"
          value={playerGuess}
          onChange={(evt) => setPlayerGuess(evt.target.value)}
        />

        <input id="submit-guess" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default GuessButton;
