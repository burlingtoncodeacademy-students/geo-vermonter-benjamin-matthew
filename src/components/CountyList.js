import React from "react";

function CountyList() {
  return (
    <div id="county-container">
      <h2 className="county-title">Guess Which County You're In</h2>
      <div id="list-container">
        <ul>
          <li>Grand Isle</li>
          <li>Franklin</li>
          <li>Orleans</li>
          <li>Essex</li>
          <li>Lamoille</li>
          <li>Caledonia</li>
          <li>Washington</li>
        </ul>
        <ul>
          <li>Chittenden</li>
          <li>Addison</li>
          <li>Orange</li>
          <li>Rutland</li>
          <li>Windsor</li>
          <li>Bennington</li>
          <li>Windham</li>
        </ul>
      </div>
    </div>
  );
}

export default CountyList;
