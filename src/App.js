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

  //useeffect to fetch the information from the Nominatim API
  //put fetch in guess component

  let borderDataPassed = borderData;

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
          <div className="movementControl">
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
            <button id="guessButton" className="gameplay-button">
              Guess
            </button>

            <Return setCenter={setCenter} startingLatLon={startingLatLon} startGame={startGame} />

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
            />
          </div>
        </div>
        <div className="info">
          <div id="coordinates">
            <div id="lat" className="info-text">
              Lat: {+latitude.toFixed(3)}
            </div>
            <div id="lon" className="info-text">
              Lon: {+longitude.toFixed(3)}
            </div>
          </div>
          <div id="location">
            <div id="county" className="info-text">
              County: {county}
            </div>
            <div id="town" className="info-text">
              Town: {town}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
