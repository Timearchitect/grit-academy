// loopar
if (false) {
    console.log("vuxen");
} else {
    console.log("barn");
}

// när det är sant repetera
// vid falskt gå vidare
let count = 0;

while (count < 5) {
    // kollar condition först
    console.log("while loop: " + count);
    count++;
}

let count2 = 0;

do {
    // kör kod först sedan kollar condition
    console.log("do-while loop: " + count2);
    count2++;
} while (count2 < 5);

// (deklarations kod ; condition ; repeterande kod som ändrar variabeln )
for (let count3 = 0; count3 < 5; count3++) {
    console.log("for loop: " + count3);
}

/*
let que = ["Nermin","Allan","Alrik","Nellie","Sara","Kalle"];

for (let i = 0; i < que.length ; i++) {
    document.write("köplats: "+i +" är "+ que[i]+ "<br>" )
}




for (let i = 0; i < 100 ; i++) {
    document.write( "<button>click here</button><img src='https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip' width='40px'  height='30px'> " )
}*/
let count4 = 0;

// Definerar en funktion som heter alrikTeknik()
function alrikTeknik() {
    let foo = 1;
    let bar = 1;
    console.log(foo + bar);
}

// kalla/anropar på alrikTeknik()
alrikTeknik();

function addition(tal1, tal2) {
    //lägga värden i parametern
    console.log(tal1 + tal2 + "!!!");
}

function percent(antal, utavTotal) {
    return (antal / utavTotal) * 100 + "%"; //retuneras
    console.log((antal / utavTotal) * 100 + "%");
}


let count5 = 0;

function infinity(round) { // recursive
    console.log("infinity on round:"+round);
    document.write( "<button>click here</button><img src='https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip' width='40px'  height='30px'> " )
    count5++;
    if (count5 < 10){ infinity();  infinity();}
}

function beyond() {
    console.log("beyond");
    infinity();
}

