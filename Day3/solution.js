import fs from "fs";

const input = fs.readFileSync("./example.txt", "utf-8").trim().split("\r\n");

const partOne = (input) => {
  let sum = 0;
  let temp = 0;

  const toNumber = (value) => {
    return Number(value);
  };

  for (const element of input) {
    temp = 0;
    let nums = element.split(".");
    console.log(nums);

    for (const element of nums) {
      !isNaN(element) ? (temp += toNumber(element)) : console.log("NaN");
    }
    sum += temp;
    console.log(sum);
  }
};

partOne(input);
