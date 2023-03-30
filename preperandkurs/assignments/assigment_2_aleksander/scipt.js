// //part 2a
// for (let i = 2; i <= 11; i++)  {
//     if(i % 2 == 0){
//     //document.writeln("O")
//     console.log("O")
//     } else {
//      //document.writeln("X")
//      console.log("X")

//     }

// }

// ctrl + '   toogle kommentar
console.clear(); //rensar conssolen
//part 2b
let text = "O";
let result = ""; //= text.repeat(1)

let min = 1;
let max = 5;

for (let i = 0; i < 20; i++) {
    let amountOfSpaces = Math.floor(Math.random() * max + min);

    for (let j = 0; j < amountOfSpaces; j++) {
        result += " "  //lägger till en space
    }

    result += "O"                  //+ " ".repeat(amountOfSpaces);
}
console.log(result);




//console.log(x += result += x += result += x += result += x += result)

//jag lyckas tyvärr inte göra denna uppgiften. jag förstår att jag måste loopa men
//jag har även problem med att få x till ett mellanrumstecken.

//part 2c
let citynames = ["malmo", "kiruna", "lund", "dalby"];



for (let city of citynames) {
    console.log(city);

    for(let x = 0; x < city.length; x++){
        console.log(city[x])
    }
} 

for(let i = 0; i < citynames.length; i++){
   // console.log([i]);
    let city = citynames[i] // mellanhand
    console.log(city);


    for(let x = 0; x < city.length; x++){
        console.log(city[x])
    }
}

//console.log(Array.prototype.map.call('malmo kiruna lund dalby', eachLetter => eachLetter).join('\n'))
