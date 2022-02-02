// NOTE: please make sure you have a strong understanding of arrow functions before doing this activity

const originalArray = [5, 933, 26, 33, 20, 10, 555, 884, 2, 10];

// 1. Use "Array.map" to Show the Original Array Again
let answer1div = document.querySelector("#answer1");
let answer1 = null; // replace null with your code
answer1div.textContent = answer1;

// 2. Use "Array.map" to Show the Original Array Multiplied by 2
let answer2div = document.querySelector("#answer2");
let answer2 = null; // replace null with your code
answer2div.textContent = answer2;

// 3. Use "Array.filter" to Show Only the Number 26
let answer3div = document.querySelector("#answer3");
let answer3 = null; // replace null with your code
answer3div.textContent = answer3;

// 4. Use "Array.filter" to Show Even Numbers
// hint: explore the concept of 'modulus', which divides and gives the answer of the remainder
// for example,
// 5 % 2 === 1 (this reads as "5 modulus 2 is equal to 1")
// 4 % 2 === 0
// 3 % 2 === 1
// 2 % 2 === 0
// 1 % 2 === 1
// ... so any number % 2 that equals 0 is even
// ... and any number % 2 that equals 1 is odd
let answer4div = document.querySelector("#answer4");
let answer4 = null; // replace null with your code
answer4div.textContent = answer4;

// 5. Use "Array.filter" to Show Odd Numbers
let answer5div = document.querySelector("#answer5");
let answer5 = null; // replace null with your code
answer5div.textContent = answer5;

// 6. You are given an array of objects data about developers.
// Your task is to return the number of developers coming from Europe.

// For example, given the following list:
let people = [
  {
    firstName: "Noah",
    country: "Switzerland",
    continent: "Europe",
  },
  {
    firstName: "Maia",
    country: "Tahiti",
    continent: "Oceania",
  },
  {
    firstName: "James",
    country: "Germany",
    continent: "Europe",
  },
  {
    firstName: "Shufen",
    country: "Taiwan",
    continent: "Asia",
  },
  {
    firstName: "Sumayah",
    country: "Tajikistan",
    continent: "Asia",
  },
];

let answer6div = document.querySelector("#answer6");
let answer6 = null; // replace null with your code
answer6div.textContent = answer6;
