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

// creating functional component App
function App() {
  // setting up useState variables
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [score, setScore] = useState(100);
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

  // useState variables for the polyline
  const [polylineList, setPolylineList] = useState([]);
  const [polylineListInitialized, setPolylineListInitialized] = useState(false);

  // setting global variable for the border data
  let borderDataPassed = borderData;

  // if check that alerts game over and reloads on score hitting 0
  if (score <= 0) {
    alert(`Game Over!`);
    window.location.reload(false);
  }

  // creating functions to update the polyline array list
  function polylineUpdateNorth() {
    // if check handles the first move from the original lat/lon and then sets a boolean to true that forces the else
    if (polylineListInitialized === false) {
      setPolylineList((polylineList) => [...polylineList, startingLatLon]);
      // new point created using the center array and adding the correct movement distance
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0] + 0.002, center[1]],
      ]);
      setPolylineListInitialized(true);
      // else only sets the polyline point from the current center point
    } else {
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0] + 0.002, center[1]],
      ]);
    }
  }
  function polylineUpdateSouth() {
    if (polylineListInitialized === false) {
      setPolylineList((polylineList) => [...polylineList, startingLatLon]);
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0] - 0.002, center[1]],
      ]);
      setPolylineListInitialized(true);
    } else {
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0] - 0.002, center[1]],
      ]);
    }
  }
  function polylineUpdateWest() {
    if (polylineListInitialized === false) {
      setPolylineList((polylineList) => [...polylineList, startingLatLon]);
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0], center[1] - 0.002],
      ]);
      setPolylineListInitialized(true);
    } else {
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0], center[1] - 0.002],
      ]);
    }
  }
  function polylineUpdateEast() {
    if (polylineListInitialized === false) {
      setPolylineList((polylineList) => [...polylineList, startingLatLon]);
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0], center[1] + 0.002],
      ]);
      setPolylineListInitialized(true);
    } else {
      setPolylineList((polylineList) => [
        ...polylineList,
        [center[0], center[1] + 0.002],
      ]);
    }
  }

  return (
    <div>
      <header className="gameHeader">
        <h1 id="gameTitle">Geo-Vermont</h1>
      </header>
      <div id="gameContainer">
        <div id="playerScore">Player Score: {score}</div>
        {/* calling the map and passing the useState variables needed */}
        <Map
          center={center}
          zoom={zoom}
          setCenter={setCenter}
          setZoom={setZoom}
          polylineList={polylineList}
        />{" "}
        <div className="userInputs">
          <div className="northSouth">
            {/* calling the north button and passing the useState variables needed */}
            <NorthButton
              setLatitude={setLatitude}
              setScore={setScore}
              setCenter={setCenter}
              longitude={longitude}
              latitude={latitude}
              startGame={startGame}
              polylineUpdateNorth={polylineUpdateNorth}
            />
            <div className="eastWest">
              {/* calling the west and east and passing the useState variables needed */}
              <WestButton
                setLongitude={setLongitude}
                setScore={setScore}
                setCenter={setCenter}
                longitude={longitude}
                latitude={latitude}
                startGame={startGame}
                polylineUpdateWest={polylineUpdateWest}
              />
              <EastButton
                setLongitude={setLongitude}
                setScore={setScore}
                setCenter={setCenter}
                longitude={longitude}
                latitude={latitude}
                startGame={startGame}
                polylineUpdateEast={polylineUpdateEast}
              />
            </div>
            {/* calling the south button and passing the useState variables needed */}
            <SouthButton
              setLatitude={setLatitude}
              setScore={setScore}
              setCenter={setCenter}
              longitude={longitude}
              latitude={latitude}
              startGame={startGame}
              polylineUpdateSouth={polylineUpdateSouth}
            />
          </div>

          <div className="interactiveButtons">
            {/* calling the start button and passing the useState variables needed */}
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
            {/* calling the modal button and passing the useState variables needed */}
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
            {/* calling the modal and passing the useState variables needed */}
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
              setCenter={setCenter}
              setZoom={setZoom}
            />
            {/* calling the return button and passing the useState variables needed */}
            <Return
              setCenter={setCenter}
              startingLatLon={startingLatLon}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              startGame={startGame}
              setPolylineList={setPolylineList}
              setPolylineListInitialized={setPolylineListInitialized}
            />
            {/* calling the quit game button and passing the useState variables needed */}
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
              setCenter={setCenter}
              setZoom={setZoom}
            />
          </div>
        </div>
        {/* calling the info and passing the useState variables needed */}
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
