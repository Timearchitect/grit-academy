// part 2a of the assignment
for (let i = 2; i <= 11; i++) {
  if (i % 2 == 0) {
    console.log("O");
  } else {
    console.log("X");
  }
}

// part 2b of the assignment
let text = "O";
let result = "";

let min = 1;
let max = 5;

for (let i = 0; i < 20; i++) {
  let amountOfSpaces = Math.floor(Math.random() * max + min);

  for (let j = 0; j < amountOfSpaces; j++) {
    result += " ";
  }

  result += "O";
}
console.log(result);

// part 2c of the assignment
let citynames = ["kiruna", "uppsala", "malmö", "gothenburg", "stockholm"];

for (let i = 0; i < citynames.length; i++) {
  console.log([i]);
  for (let x = 0; x < citynames[i].length; x++) {
    console.log(citynames[i][x]);
  }
}
