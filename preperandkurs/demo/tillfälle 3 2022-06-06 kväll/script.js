// scope

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// funktioner
//alert("hej");

//metod
console.log("Hejsan");

// object
console;

// syntax
let foo = 5;

// definera/deklarerar en function som heter alrik()
function alrik() {
  let count = 0;
  console.log("TJENARE " + count);
}

// kallar på funktionen alrik()
alrik();

// parameter är som en input
function addition(tal1, tal2) {
  return tal1 + tal2;
  console.log("TJENARE ");
}


function infinity() {
  console.log("Infinity");
  beyond();
}

function beyond() {
    console.log("beyond");
    infinity();
}

// Object 

let bar = 5;
bar = 888;


// element
// index    0     1     2
let bar2= [ 12, "red", true,

 {  windows:12 , color:"green" , forSale:false  }

]; 
bar2[0] = 24;
bar2[0] = bar2[1]


// properties
// key value pairs  
let hus = { windows:12 , color: "red" , forSale: true  }
hus.windows = 24
hus.windows = hus.color



function log(x){
    console.log(x);
}

const Console = {
    windows:12,
    log : function (x){
        console.log(x);
    }
    ,color:12
    , array: [ 8,5,6,9,74,"hej",5,7] 
}



 let array= ["O","X","O","X","O","X","O","X","O","X"]
for(let i = 0; i < 10 ; i++){
document.write(array[i])
}
document.write("<br>")


for(let i = 0; i < 10 ; i++){
if(i%2==0)document.write("O")
else document.write("X")
}
document.write("<br>")

for(let i = 0; i < 10 ; i++){
    if((i/2).toString().length==1)document.write("O")
    else document.write("X")
}
    








