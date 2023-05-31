// 4)  arrayer
document.write("TIDIGT")
let gameTheme //camelcase
gameTheme = 5

const SNAKE_CASE = 456 // för const snakecase upper   

// index     0   1    2    
let alrik = [5,"hej",true]
alrik[8] = 555
alrik.push("ALRIK")
alrik.push("ALRIK")
alrik.push("ALRIK")
alrik.push("Kean");
alrik.push("Carolin")
alrik.push("Johan")
//alrik.shift() // tarbort på början av arrayen
//console.log("spliced",alrik.splice(0,3))

console.log(gameTheme)
console.log(alrik)

for (let i = 0; i < alrik.length; i++) {
    console.log(alrik[i])
}



//6) funktioner
//syntax

addition(1 ,  2) // anropa/kalla funktionen addition

// i parentesser är det (parameter)
function addition(tal1,tal2) {  //definera en funktion som heter addition  
   if( typeof tal1 == "number" && typeof tal2 == "number")
     return tal1 + tal2
   else 
     return alert("NOT AN NUMBER, please input a number!!!")
}   











