let age = 12;
let vip = true;

// || eller   någon av dem är true då är allt true
// && och    båda måste vara true för att resultatet blir true

if (true && false)   // || eller 
    console.log("access granted");
else 
    console.log("access denied");



//--------------- part 2a -------------------//




console.log("loopar");

// 4 Loopar

// while loop

//  if <- keyword
if (5 > 2) {
    console.log("true");
} else {
    console.log("false");
}

let count = 0;

while (count < 10) {
    // on count är mindre än 3 : loopa
    //count += 1
    //count ++
    // document.write("BILD!!!  ")
    // document.write(" <h1> Rubrik </h1> ")
    // document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg" width="100" height="80"> ')
    
    if(count == 1)
    console.log("O")
    else
    console.log("X")


    console.log("while loop " + count);

    count = count + 1;
}

// do while loop

let count2 = 0;
do {
    console.log("do while loop " + count2);

    count2 += 2;
} while (count2 < 3);

// for loop
// i parantesen så finns det 3 saker
// start kod för en dekarerad varibel , condition/regel , repeterande kod för incrementering

for (let count3 = 0; count3 < 3; count3 = count3 + 2) {
    console.log("for loop " + count3);
}
// index     0            1            2         3        4
// varje sak i arrayn kallas för element
let que = [
    "Jesper",
    "Zanticole",
    "Zoom user",
    "hugo",
    "Aiserich",
    "Cecilia",
    "Lukas",
];

// förkortning för index
for (let i = 0; i < que.length; i += 1) {
    document.write(" <p>Köplats " + (i + 1) + ": " + que[i] + "</p><br>");
}

// *for each  avanserat
for (let index in que) {
    // index / key
    console.log(index);
}
for (let element of que) {
    // element / värde
    console.log(element);
}

document.write("OXOXQXOXOX");


document.write("o  o o o    o    o   o o o o  o   o  o o o      o    o  ");


console.log(Math.random())
console.log("vidare...");

let cityNames = ["kiruna","malmö","uppsala"] 
