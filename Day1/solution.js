import fs from "fs";

const inputLines = fs
  .readFileSync("./example.txt", "utf-8")
  .trim()
  .split("\r\n");

console.log(inputLines);

let numbers = [[], []];
let wordsToNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
let numbersInWords = [[], []];
let tempResult = [];
let result = 0;

for (let i = 0; i < inputLines.length; i++) {
  for (const element of inputLines[i]) {
    const line = element.search(
      /\b:one|two|three|four|five|six|seven|eight|nine|\b/g
    );
    console.log(line);
    // numbers[i] = inputLines[i].match(
    //   /\b:one|two|three|four|five|six|seven|eight|nine|\b/g
    // );

    // numbers[i + 1] = inputLines[i].match(/\d/g);
    // \d/g tar ut en siffra i taget.
  }
  // Går igenom alla siffror på rad [i] i inputLines och lägger dem på rad [i] i numbers.
}
console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   for (const element of numbers) {
//     numbers.length < 2
//       ? (tempResult[i] = numbers[0] + numbers[0])
//       : (tempResult[i] = numbers[0] + numbers[numbers.length - 1]);
//   }
// }

// const toNumber = (value) => {
//   return Number(value);
// };
// tempResult = tempResult.map(toNumber);
// // Gör om strängarna till siffror för att kunna utföra addition senare.

// tempResult.forEach((element) => {
//   result += element;
// });
