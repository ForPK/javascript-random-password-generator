"use strict";

(function () {
  const pw = document.getElementById("pw");
  const btn = document.getElementById("btn");

  const string = [
    "a",
    "A",
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "e",
    "E",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "i",
    "I",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
    "m",
    "M",
    "n",
    "N",
    "o",
    "O",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "u",
    "U",
    "v",
    "V",
    "w",
    "W",
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "?",
  ];

  function createPW() {
    pw.textContent = "";

    for (let i = 0; i < 9; i++) {
      const randomString = Math.floor(Math.random() * (string.length - 1));
      const randomPW = string[randomString];
      pw.textContent += randomPW;
      // console.log(randomString);
    }
  }

  btn.addEventListener("click", createPW);
})();
