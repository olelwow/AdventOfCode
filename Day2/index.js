import fs from "fs";

const input = fs.readFileSync("./example.txt", "utf-8").trim().split("\r\n");
const red = 12;
const green = 13;
const blue = 14;
let Game = {};
let ID = 0;

// for (let i = 0; i < input.length; i++) {
//   ID[i] = Number(input[i].substring(5, 6));
// }
// Hämtar game-ID.

for (const element of input) {
  ID++;
  let first = element
    .substring(element.indexOf(":") + 1, element.indexOf(";"))
    .trim()
    .split(",");

  let second = element
    .substring(element.indexOf(";") + 1, element.lastIndexOf(";"))
    .trim()
    .split(",");

  let third = element
    .substring(element.lastIndexOf(";") + 1)
    .trim()
    .split(",");

  Game[ID] = [...first, ...second, ...third];
}

console.log(Game);
