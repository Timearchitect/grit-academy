// datatyper

let foo;

// string
foo = "hejsan" // string , sträng/text
foo = `c` // char, karaktär/bokstav

// number
foo = -500 // Integer , heltal 
foo = 0.5  // float , decimaltal

//boolean
foo = false //boolean , boolean



console.log( 5 + 5) // nummer + nummer = nummer
console.log( 5 + "hej") // nummer + string = string
console.log( 5 + true) // nummer + boolean = nummer
console.log( true + "hej") // boolean + string = string
console.log( "hej" + "san") // string + string = string
console.log( true + true) // boolean + boolean = nummer

console.log('\n\n\nhej\n\n\n\n');  // \n rad brytning


// arrayer

let box = 888 // dekarera en variabel
box = 999 //tilldela variabeln med värdet 999

// element är en låda  
//   index    0    1    2  ...
let hylla = [888,"hej",true,5,false] //dekarera en array, komma tecken delar upp olika element
hylla[1] = "tjenare" //tilldela arrayn index 1 med "tjenare"
hylla[5] = "tjenare"

//hylla.push(777)
//hylla.pop()


//apoteks kö program
let que = ["Frida","Hannah","Alrik"]


// tekniken för att behandal ett ärende & ta bort den första i kön
que.reverse()
que.pop()
que.reverse()





// If satser

//condition
// == jämföra om det är samma
// > större än
// < mindre än
// >= större eller lika med
// <= mindre eller lika med
// != inte samma/inte likamed


if( false ){
    console.log("JA")
    console.log("JA")
}
else {
    console.log("NO")
    console.log("NO")
}


let age = 20

if(age >= 18) // komma in i en discotek
    console.log("Välkommen in till klubben :) ")
else 
    console.log("Du är för ung, tyvärr du får inte komma in!")

// exemple 2

let AlrikIsSlow = false
let AlrikIsCool = false


// Fråga är alrik slow?  
// sant -> fråga efter alrik är cool?
// falsk -> skippa allt  

if(AlrikIsSlow == true){
    console.log("YES he is slow!")

    if(AlrikIsCool == true)
    console.log("YES he is cool!")
    else 
    console.log("He is not cool.....")
}
else {
    console.log("He is not slow.....")
}


