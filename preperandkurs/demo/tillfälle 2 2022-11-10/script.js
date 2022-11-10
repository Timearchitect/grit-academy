/*
// Data typer finns 7 olika datatyper i JavaScript
let foo



// String
    foo = 'c' // char , karaktär 
    foo = "text" // string, Sträng, str

// Numreriska
    foo = -105  // integer , heltal , int
    foo = 5.0  // float , decimaltal , 5.0f
// boolean
    foo = true // boolean, boolean , bool

    // string + string = string
    // number + string = string
    // string + boolean = string
    // number + number = number
    // boolean + boolean = number
    // number + boolean = number

// drar information från html
let checkbox = document.getElementById("box")
let checkbox2 = document.getElementById("box2")
let checkbox3 = document.getElementById("box3")
let checkbox4 = document.getElementById("box4")



console.log("Amount of filters active:"+ (checkbox.checked+checkbox2.checked+checkbox3.checked+checkbox4.checked))


//3 Arrayer
//variabel med flera utrymmen


let bar 
bar = 5
bar = 666

let bar2
// index  0 ,   1  ,  2
bar2 = [ 5 , 888, true]  // [ innehåll komma tecken för att separera värden ]
// välj index/ låda
bar2[5] = 666

bar2.push(777) //läggtill på slutet

bar2.pop() // tar bort från slutet

let que = ["Anneli","Mattias","Aiserich","Hugo"]

console.log(que.length) //få ut siffran på hur många lådor det finns
console.log(que[que.length-1]) //få ut sista lådan
console.log(5+5);

// if satser består av 2 koder
// if() else {} samt condition i parantesen
*/

// conditions ger alltid en boolean
// ==   jämnför
// <  mindre än 
// >  mindre än 
// <=  mindre än eller samma
// >=  mindre än eller samma

let age = 15

if (age >= 18) {
    
    console.log("du är myndig");
}
else {
    console.log("du är mindreårig"); //optional
}

console.log("vidare...")