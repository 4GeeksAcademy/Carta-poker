import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  newCard();

  // Add event listener to the button
  document.querySelector("#new-card-btn").addEventListener("click", newCard);
};

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = numbers[indexNumbers];
  document.querySelector("#end").innerHTML = suits[indexSuits];

  let colorSuit =
    suits[indexSuits] == "♦" || suits[indexSuits] == "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = `suit top ${colorSuit}`;
  document.querySelector("#number").className = `number ${colorSuit}`;
  document.querySelector("#end").className = `suit bottom ${colorSuit}`;
}
