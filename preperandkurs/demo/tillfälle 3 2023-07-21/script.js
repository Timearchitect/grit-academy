/* console.log("HEJ");
console.warn("HEJ");
console.error("HEJ"); */

// 5) Loopar
//syntax
if (true) {
}

// vid sant så loopar den
//

let i = 0;
//olika tekniker för att öka en variabel med 1

i = i + 1; // ökar med 1
console.log(i);
i += 1; // ökar med 1
console.log(i);
i++; // ökar med 1
console.log(i);

i = i - 1; // minska med 1
console.log(i);
i -= 1; // minska med 1
console.log(i);
i--; // minska med 1
console.log(i);

i = 0; // resetar variabeln

while (i < 3) {
    console.log("while loop " + i);
    i++; // ökar med 1
}

i = 0; // resetar variabeln

do {
    console.log("do while loop " + i);
    i += 1; // ökar med 1
} while (i < 3);

//     startkod  ;  regel  ; ändring
for (let i = 0; i < 3; i++) {
    console.log("först for loop " + i);
    if (i == 1) break;

    console.log("for loop " + i);
}

let queue = ["Caroline", "Andreas", "Sami", "Alrik"];
for (let i = 0; i < 4; i++) document.write("<h1>köplats " + (i + 1) + "</h1> <h2>:" + queue[i] + "</h2>");

for (let i = 0; i < 100; i++) document.write("<img width='50' src='https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000' >   ");

// 6)  funktion
// är hojstade

let x = 5;
console.log(x);

addition( 2 ); // anropar / kalla  funktionen addition

function addition(tal1 ,tal2 ) {
    // definera en funktion som heter addition
    // tal är en parameter och behöver inte let eller var
    console.log(tal1 + tal2);
    //displayOnHtml();
    return tal1 + tal2
}

function displayOnHtml() {
    // definera en fuktion som heter addition
    document.write("ADDITION");
}


console.log(5/2); // divition för varannan
console.log(5%2); //rest divition
console.log( Math.random())  // slumpar från 0 till 1 men inte 1
console.log( Math.round())  // avrundar som vi gör med pengar 0.5 -> 1



