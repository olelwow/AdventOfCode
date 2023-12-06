import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

const partOne = (input) => {
  let ID = 1;
  let correctIDS = 0;
  let colors = { red: 0, blue: 0, green: 0 };
  let game = [];

  for (const element of input) {
    game[ID] = element.split(": ")[1].split("; ");
    ID++;
  }
  const toNumber = (value) => {
    return Number(value);
  };

  for (let i = 1; i < game.length; i++) {
    for (const element of game[i]) {
      colors["red"] = 0;
      colors["green"] = 0;
      colors["blue"] = 0;

      let amount = element.match(/\d+/g).map(toNumber);

      let color = element.match(/\b([a-zA-Z]+)\b/g);
      //        /b för att få ut hela ord, ([a-zA-Z]+) fångar orden i grupp.

      for (let j = 0; j < color.length; j++) {
        colors[color[j]] = amount[j];
      }
      if (colors["red"] > 12 || colors["green"] > 13 || colors["blue"] > 14) {
        break;
      }
    }
    if (colors["red"] <= 12 && colors["green"] <= 13 && colors["blue"] <= 14) {
      correctIDS += i;
    }
  }
  console.log(correctIDS);
};

const partTwo = (input) => {
  let ID = 1;
  let correctIDS = 0;
  let colors = { red: 0, blue: 0, green: 0 };
  let game = [];
  let result = 0;

  for (const element of input) {
    game[ID] = element.split(": ")[1].split("; ");
    ID++;
  }

  const toNumber = (value) => {
    return Number(value);
  };

  for (let i = 1; i < game.length; i++) {
    colors["red"] = 0;
    colors["green"] = 0;
    colors["blue"] = 0;
    let tempResult = 0;

    for (const element of game[i]) {
      let amount = element.match(/\d+/g).map(toNumber);

      let color = element.match(/\b([a-zA-Z]+)\b/g);
      //        /b för att få ut hela ord, ([a-zA-Z]+) fångar orden i grupp.

      for (let j = 0; j < color.length; j++) {
        if (colors[color[j]] <= amount[j]) {
          colors[color[j]] = amount[j];
        } else {
          console.log(i);
          console.log(colors);
        }
      }
    }
    tempResult = colors["blue"] * colors["red"] * colors["green"];
    result += tempResult;
  }
  console.log(result);
};
