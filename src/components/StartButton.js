import React, { useState } from "react";
import StartGameModal from "./StartGameModal";

function StartButton(props) {
  if (!props.startGame) {
    return null;
  }
  function randomLatGenerator() {
    return Math.random() * (45.005419 - 42.730315) + 1 + 42.730315;
  }

  function randomLonGenerator() {
    return Math.random() * (-71.510225 - -73.35218) + 1 + -73.35218;
  }
}
