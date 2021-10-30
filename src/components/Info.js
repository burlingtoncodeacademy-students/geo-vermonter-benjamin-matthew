import React from "react";
import { useState, useEffect } from "react";

function gameStateCheck(props) {
    if(props.endGame === true || props.score === 0) {
        return true
    } else {
        return false
    }
}

function Info(props) {
  return !gameStateCheck(props) ? (
    <div className="info">
      <div id="coordinates">
        <div id="lat" className="info-text">
          Lat: ???
        </div>
        <div id="lon" className="info-text">
          Lon: ???
        </div>
      </div>
      <div id="location">
        <div id="county" className="info-text">
          County: ???
        </div>
        <div id="town" className="info-text">
          Town: ???
        </div>
      </div>
    </div>
  ) : (
    <div className="info">
      <div id="coordinates">
        <div id="lat" className="info-text">
          Lat: {+props.latitude.toFixed(3)}
        </div>
        <div id="lon" className="info-text">
          Lon: {+props.longitude.toFixed(3)}
        </div>
      </div>
      <div id="location">
        <div id="county" className="info-text">
          County: {props.county}
        </div>
        <div id="town" className="info-text">
          Town: {props.town}
        </div>
      </div>
    </div>
  );
}

export default Info;

{
  /* <div className="info">
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
</div>; */
}

// function Return(props) {
//   return !props.startGame ? (
//     <button disabled id="returnButton" className="gameplay-button">
//       Return to Start
//     </button>
//   ) : (
//     <button
//       id="returnButton"
//       className="gameplay-button"
//       onClick={(evt) => {
//         props.setCenter(props.startingLatLon);
//       }}
//     >
//       Return to Start
//     </button>
//   );
// }

// export default Return;

// //click return button
// //game scrolls back to starting point

// //disable buttons based on if startGame is true using ternary similar to start button
