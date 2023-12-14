// f2 rename

// 3) ARRAYER
// variabler i en serie
// hylla och är i låder
let x = "alrik";
x = 888;
//ctrl + f2

//   index     0        1        2        3
let queue = ["Alrik", "Muna", "Klara", "Adrian"];
//queue innehåller 4 element
//queue lenght är 4
//queue[0] = 888
//queue = 888
queue.push("Emma"); //lägger till på slutet
queue.pop(); //tar bort det sista elementet
queue.unshift("Ida"); //lägger till på början
queue.shift(); //tar bort det först elementet

queue.sort();
queue.reverse();

//queue[10] = "Eric"

console.log(queue);
console.log(queue[5]);

// 4) if satser
// conditions
// == jämnför
// === jämnför + datatypen
// < mindre än
// > större än
// <= mindre än eller likamed
// >= större än eller likamed
// != inte lika med
/* !false -> true
!true -> false
!0 -> true
!1 -> false */

let age = 10;
let vip = true;

// 1) f is serie
/* if( age >= 18 ){
    console.log("Du är vuxen!!");
} else  { // alternativt
    console.log("Du är ett barn!!");
}


if( vip == true ){
    console.log("Du är kändis!!");
} else  { // alternativt
    console.log("du är pleb");
} */

// 2) om sant fråga vidare
/* 
if( age >= 18 ){
    console.log("Du är vuxen!!");

    if( vip == true ){
        console.log("Du är kändis!!");
    } else  { // alternativt
        console.log("du är pleb");
    }

} else  { // alternativt
    console.log("Du är ett barn!!");
} */

// 3) om falskt fråga vidare

/* if (age >= 18) {
    console.log("Du är vuxen!!");
} else {
    // alternativt
    console.log("Du är ett barn!!");

    if (vip == true) {
        console.log("Du är kändis!!");
    } else {
        // alternativt
        console.log("du är pleb");
    }
}

if (age >= 18) // else if sats
    console.log("Du är vuxen!!");
else if (vip == true) 
    console.log("Du är kändis!!");
else 
    console.log("du är pleb");
 */


//4)  fler frågor på en förgrening
// && och and
// || eller or

/*  
if(  age >= 18   ||   vip == true  )
    console.log("YEAS");
else
    console.log("NOOO");
  */

age = parseInt(document.getElementById('input1').value)
console.log( age );




// 5 ) Loopar
// while  for
// vid sant fortsätt loopa
// vid false avsluta loppen

let i = 1
while( i < 11 ){
    console.log("while "+i);
   // document.write('<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lqOINWCibeqdOFM8IWv_0wHaFM%26pid%3DApi&f=1&ipt=dec53418458c0dcc4f8d9c9d37e2d338af46061d93e0492ad2682849fc61cc0c&ipo=images">');
    i++
}

i = 10
while( i > 0 ){
    console.log("while "+i);
    i--
}

//  deklaration; condition; ändrar
for(let i = 10; i > 0; i--  ){
    console.log("for "+i);
}

queue.push("Eric")
queue.push("Emma")
queue.push("Emma")
queue.push("Emma")
queue.push("Emma")
queue.push("Emma")
queue.push("Emma")

for(let i = 0; i < queue.length; i++ ){
    document.write("köplats: "+queue[i]+"<br> ");
}
console.log("...vidare");



