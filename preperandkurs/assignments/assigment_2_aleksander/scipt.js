//part 2a
for (let i = 2; i <= 11; i++)  {
    if(i % 2 == 0){
    //document.writeln("O")
    console.log("O")
    } else {
     //document.writeln("X")
     console.log("X")   

    }
    
} 
//part 2b
let text = "O"
let result = text.repeat(1)

let min = 1
let max = 5
let x = Math.floor(Math.random() * (max - min + 1) + min);


    
console.log(x += result += x += result)


//jag lyckas tyvärr inte göra denna uppgiften. jag förstår att jag måste loopa men 
//jag har även problem med att få x till ett mellanrumstecken.
 








//part 2c
let citynames = ["malmo", "kiruna", "lund", "dalby"];


/*for (city of citynames) {
    console.log(city);
} */


for(let i = 0; i < citynames.length; i++){
    console.log([i]);
    for(let x = 0; x < citynames[i].length; x++){
        console.log(citynames [i][x])
    }
}





//console.log(Array.prototype.map.call('malmo kiruna lund dalby', eachLetter => eachLetter))