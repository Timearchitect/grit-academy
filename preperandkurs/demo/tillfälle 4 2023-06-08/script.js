// 5) loopar
// while, for
//  syntaxen   i parentesen så är det en (condition/regel)

//if(   )
/* console.log("hello");
console.log("world");

let count = 0;
while (count < 3) {
    console.log("while loop " + count);
    count += 1;
}

//   ( startkod;   condition;   ändringskod)

for (let count = 0; count < 3; count += 1) 
    console.log("for loop " + count); */

/* 
let amountOfPics = 0;
while (amountOfPics < 100) {
    document.write("<img width='50' src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'  >  ");
    amountOfPics++;
}
 */

/* let que= [ "Vera" , "David" , "Alrik", "Carolin","Henrik","Anna" ]

for( let i = 0 ;   i< que.length;  i++ )
    document.write("<h1>"+ "Din köplats är: nr"+ (i+1) + " ,  "+  que[i]    +"</h1>");

 */

// 6) funktioner
// syntax
/*
alert()          //funktion
console.log()    //metod 
document.write() //metod 
*/
document.write("hello") //metod 


function calulateCartSum() {
    // definera en fuktion som heter addition
    let sum = 1000;
    //for loop ++ varors kostnad

    document.write("<b>" + sum + "kr" + "</b>   " + "<i   style='color: grey'  >" + 4 + "artikel" + "</i>");
}

calulateCartSum(); // anropa addition

/* console.log(input1,input2);
 */
/* function addition() {
    let tal1= parseInt(document.getElementsByTagName("input")[0].value)
    let tal2= parseInt(document.getElementsByTagName("input")[1].value)
    
    if (typeof tal1 == "number"  && typeof tal2 == "number" ) {
        console.log(tal1 + tal2);
        alert(tal1 + tal2);
    }else{
        console.warn("input a number please...")
    } 

}


function alrik() {
    console.warn("input a number please...")
    console.warn("input a number please...")

    return ["alrik",3,true]

    console.warn("input a number please...")
    console.warn("input a number please...")

}

 */