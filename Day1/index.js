import fs from "fs";

const inputLines = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

console.log(inputLines);

let numbers = [[], []];
let tempResult = [];
let result = 0;

for (let i = 0; i < inputLines.length; i++) {
  for (const element of inputLines[i]) {
    numbers[i] = inputLines[i].match(/\d/g);
    // \d/g tar ut en siffra i taget.
  }
  // Går igenom alla siffror på rad [i] i inputLines och lägger dem på rad [i] i numbers.
}

for (let i = 0; i < numbers.length; i++) {
  for (const element of numbers[i]) {
    numbers[i].length < 2
      ? (tempResult[i] = numbers[i][0] + numbers[i][0])
      : (tempResult[i] = numbers[i][0] + numbers[i][numbers[i].length - 1]);
  }
}

const toNumber = (value) => {
  return Number(value);
};
tempResult = tempResult.map(toNumber);
// Gör om strängarna till siffror för att kunna utföra addition senare.

tempResult.forEach((element) => {
  result += element;
});

console.log(numbers);
console.log(tempResult);
console.log(result);
