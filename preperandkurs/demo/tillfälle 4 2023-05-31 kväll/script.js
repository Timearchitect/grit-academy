// 6) funktion
// syntax

/* console.log()
alert() */

document.write("TEST!!!!!")
let tal0 = "ALRIK"
tal0 += 888
console.log(tal0);

console.log( addition(5,5) );

addition(5,5) // anropar/kalla funtionen addition

// (parameter, )
function addition( tal1  , tal2){  // definera en funktion som heter addition
    if( typeof tal1 == "number" && typeof tal2 == "number"  )
        return tal1 + tal2   // retunering
    else 
        console.warn("INPUT A NUMBER , PLEASE!!!!!!")

} 
console.log( addition(5,5) );

let array = ["TEODORA","REIDAR","KEIKIET","ALRIK"]
