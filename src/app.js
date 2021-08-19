/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //write your code here
  let card = document.querySelector(".card");
  card.classList.add(generateRandomSuit());
  card.innerHTML = generateRandomNumber();
};
let generateRandomNumber = () => {
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
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suits = ["diamond", "heart", "club", "spade"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
