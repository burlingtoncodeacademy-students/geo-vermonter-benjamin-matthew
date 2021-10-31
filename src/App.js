import "./App.css";
import { useState, useEffect } from "react";
import StartButton from "./components/StartButton";
import Map from "./components/Map";
import borderData from "./data/border";
import { ZoomControl } from "react-leaflet";
import NorthButton from "./components/NorthButton";
import WestButton from "./components/WestButton";
import EastButton from "./components/EastButton";
import SouthButton from "./components/SouthButton";
import { map } from "leaflet";
import QuitGame from "./components/QuitGame";
import Return from "./components/Return";
import Info from "./components/Info";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [score, setScore] = useState("100");
  const [zoom, setZoom] = useState(8);
  const [startingLatLon, setStartingLatLon] = useState([0, 0]);
  const [latitude, setLatitude] = useState(startingLatLon[0]);
  const [longitude, setLongitude] = useState(startingLatLon[1]);
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");

  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  //use state variables for the guessing modal
  const [modalOpen, setModalOpen] = useState(false);
  // const [playerGuess, setPlayerGuess] = useState("");

  let borderDataPassed = borderData;

  // let guessDisabled = true

  // if (startGame === true) {
  //   guessDisabled = false
  // }

  return (
    <div>
      <header className="gameHeader">
        <h1 id="gameTitle">Geo-Vermont</h1>
        {/* <h4 id="createdBy">By: Benjamin & Matthew</h4> */}
      </header>
      <div id="gameContainer">
        <div id="playerScore">Player Score: {score}</div>
        <Map
          center={center}
          zoom={zoom}
          setCenter={setCenter}
          setZoom={setZoom}
        />{" "}
        <div className="userInputs">
          <div className="northSouth">
            <NorthButton
              setLatitude={setLatitude}
              setScore={setScore}
              setCenter={setCenter}
              longitude={longitude}
              latitude={latitude}
              startGame={startGame}
            />
            <div className="eastWest">
              <WestButton
                setLongitude={setLongitude}
                setScore={setScore}
                setCenter={setCenter}
                longitude={longitude}
                latitude={latitude}
                startGame={startGame}
              />
              <EastButton
                setLongitude={setLongitude}
                setScore={setScore}
                setCenter={setCenter}
                longitude={longitude}
                latitude={latitude}
                startGame={startGame}
              />
            </div>
            <SouthButton
              setLatitude={setLatitude}
              setScore={setScore}
              setCenter={setCenter}
              longitude={longitude}
              latitude={latitude}
              startGame={startGame}
            />
          </div>

          <div className="interactiveButtons">
            <StartButton
              startGame={startGame}
              setStartGame={setStartGame}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              setStartingLatLon={setStartingLatLon}
              borderDataPassed={borderDataPassed}
              setZoom={setZoom}
              setCenter={setCenter}
              map={map}
            />
            {/* <button
              id="guessButton"
              className="gameplay-button"
              onClick={(evt) => setModalOpen(true)}
              disabled = {guessDisabled}
            >
              Guess
            </button> */}
            <ModalButton
              startGame={startGame}
              setModalOpen={setModalOpen}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              startingLatLon={startingLatLon}
              county={county}
              setCounty={setCounty}
              setTown={setTown}
            />
            <Modal
              closeModal={(evt) => setModalOpen(false)}
              modalOpen={modalOpen}
              startGame={startGame}
              county={county}
              town={town}
              setCounty={setCounty}
              setTown={setTown}
              startingLatLon={startingLatLon}
              setScore={setScore}
              score={score}
              setEndGame={setEndGame}
              setStartGame={setStartGame}
            />
            <Return
              setCenter={setCenter}
              startingLatLon={startingLatLon}
              startGame={startGame}
            />

            {/* <button id="quitButton" className="gameplay-button">
              Quit Game
            </button> */}
            <QuitGame
              county={county}
              setCounty={setCounty}
              setTown={setTown}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              latitude={latitude}
              longitude={longitude}
              startingLatLon={startingLatLon}
              startGame={startGame}
              setEndGame={setEndGame}
            />
          </div>
        </div>
        <Info
          county={county}
          town={town}
          latitude={latitude}
          longitude={longitude}
          endGame={endGame}
          score={score}
        />
      </div>
    </div>
  );
}

export default App;
