/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pinta = ["♦", "♥", "♠", "♣"];
let letra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function randomValor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let htmlColorPinta = "";
let htmlColorNum = "";

window.onload = function() {
  let numSelect = letra[randomValor(0, 12)];
  let pintaSelec = pinta[randomValor(0, 3)];

  if (pintaSelec == "♥" || pintaSelec == "♦") {
    document.querySelector(".pintasup").id = "rojo";
    document.querySelector(".pintainf").id = "rojo";
    document.querySelector(".nro").id = "rojo";
  }

  document.querySelector(".pintasup").innerHTML = pintaSelec;
  document.querySelector(".pintainf").innerHTML = pintaSelec;
  document.querySelector(".nro").innerHTML = numSelect;
};
