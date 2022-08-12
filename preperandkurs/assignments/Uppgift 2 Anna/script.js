// part 2 a of uppgift 2


for (let i = 0; i < 10; i++)  {

    if (i == 4) {
        console.log('Q');
        continue;
}
    if (i % 2 == 0 ) 
    {console.log('O');
    continue;
}
    console.log('X')
} 

    // part 2b


/* for (let i = 0; i < 20; i++)  {
    if (i > 20) {
        for (" ")
    }
    console.log('O');
    
}
    const i = ((Math.random(i)*5)+1)
    console.log( "O" + " " + i + "O");
    
}*/

for (let i = 0; i < 20; i++) {
if (i < 20)

function getRndInteger(min=1, max=5) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
document.write("O" + (" ".repeat(Math.floor(Math.random() * 5) + 1)));

}
  
   //   document.write("O"+' '.repeat(Math.floor(Math.random() * 5) + 1)+ "O");
   // }
   
    // const str = 'O'const padEnd = str + ' '.repeat((Math.random()) * 5);

    


// let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"]

// cityNames [0] blir kiruna, cityNames [1] blir uppsala osv. 

/* let city1 = "kiruna"
let city2 = "uppsala"
let city3 = "malmo"
let city4 = "gothenburg"
let city5 = "stockholm"

*/

let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm" ]
 

for (let x=0; x<cityNames.length; x++)
for (let i=0; i<cityNames[x].length; i++) 
    console.log(cityNames[x].charAt(i)); 