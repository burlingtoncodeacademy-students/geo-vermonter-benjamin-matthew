import React, { useState } from "react";

function GuessButton(props) {
  const [playerGuess, setPlayerGuess] = useState("");

  let playerGuessFinal
  const guessSubmit = (evt) => {
    evt.preventDefault();
    console.log(playerGuess);
    console.log(props.county)
    guessCheck()
  };

  //a function to handle player guess on click of the form
  //pull in the county and town from the fetch API and compare
  //pull in setScore to update
  //display correct lat lon county town

  function guessCheck() {
    if (playerGuess.toLowerCase() + ' county' !== props.county.toLowerCase()) {
      props.setScore(props.score - 10)
      setPlayerGuess('')
      alert(`Incorrect Guess -10 Points.`)
    } else {
      props.setEndGame(true)
      props.closeModal()
      alert (`Congrats! You answered correctly with ${props.county}.\nYou really know your trees!\nFinal score of ${props.score}.`)
    }
  }

  return (
    <div className="userGuessField">
      <form onSubmit={guessSubmit}>
        <input
          className="user-input"
          type="text"
          value={playerGuess}
          onChange={(evt) => {setPlayerGuess(evt.target.value)}}
        />

        <input id="submit-guess" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default GuessButton;
