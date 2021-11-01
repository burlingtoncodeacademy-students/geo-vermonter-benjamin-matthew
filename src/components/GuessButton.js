import React, { useState } from "react";

function GuessButton(props) {
  const [playerGuess, setPlayerGuess] = useState("");

  //function to prevent default function of submit button. calls guessCheck()
  const guessSubmit = (evt) => {
    evt.preventDefault();
    guessCheck();
  };

  // checks if player guess correctly matches the county where the game started.
  function guessCheck() {
    // subtracts 10 points if player guess is incorrect
    if (playerGuess.toLowerCase() + " county" !== props.county.toLowerCase()) {
      props.setScore(props.score - 10);
      setPlayerGuess("");
      alert(`Incorrect Guess -10 Points.`);

      // ends game, closes modal, alerts player of the correct answer and their final score
    } else {
      props.setEndGame(true);
      props.closeModal();
      alert(
        `Congrats! You answered correctly with ${props.county}.\nYou really know your trees!\nFinal score of ${props.score}.`
      );
    }
  }

  // returns form including text input for player guess and submit button that targets input. sets player guess state
  return (
    <div className="userGuessField">
      <form onSubmit={guessSubmit}>
        <input
          className="user-input"
          type="text"
          value={playerGuess}
          onChange={(evt) => {
            setPlayerGuess(evt.target.value);
          }}
        />

        <input id="submit-guess" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default GuessButton;
