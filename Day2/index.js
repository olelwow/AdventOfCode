import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

let ID = 0;
let correctIDS = 0;
let colors = { red: 0, blue: 0, green: 0 };
let game = [[],[]];


for (const element of input) {
  ID++;
  game[ID] = element.split(": ")[1].split("; ");
  
}

const toNumber = (value) => {
  return Number(value);
};

for (let i = 0; i < game.length; i++) {
  colors['red'] = 0;
  colors['green'] = 0;
  colors['blue'] = 0;
  for (const element of game[i]) {
    let amount = element.match(/\d/g).map(toNumber);
    
   
    
    let color = element.match(/\b([a-zA-Z]+)\b/g);
    //        /b för att få ut hela ord, ([a-zA-Z]+) fångar orden i grupp.
  

    for (let j = 0; j < color.length; j++) {
      colors[color[j].trim()] += amount[j];
      
    }
    
  }
  if (colors["red"] >= 13 || colors["green"] >= 14 || colors["blue"] >= 15) {
    
    }
    else {
      correctIDS += i;
    }
}



console.log(correctIDS);
