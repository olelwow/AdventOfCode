import fs from "fs";

const input = fs.readFileSync("./example.txt", "utf-8").trim().split("\r\n");

let ID = 0;
let colors = { red: 0, blue: 0, green: 0 };
let game = {};

for (const element of input) {
  game = element.split(": ")[1].split("; ");
}

const toNumber = (value) => {
  return Number(value);
};

for (const element of game) {
  let amount = element.match(/\d/g).map(toNumber);
  let color = element.match(/\b([a-zA-Z]+)\b/g);
  //        /b för att få ut hela ord, ([a-zA-Z]+) fångar orden i grupp.

  for (let i = 0; i < color.length; i++) {
    colors[color[i].trim()] += amount[i];
  }

  if (colors["red"] > 12 || colors["green"] > 13 || colors["blue"] > 14) {
    ID++;
  }
}

console.log(game);
