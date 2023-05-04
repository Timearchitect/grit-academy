// f12 tar upp inspektorn/devtools på webbläsaren'

// 3) Datatyper

let x;

// nummer , grön i Dark+ v2 theme
x = 5; //Integer / heltal
x = 0.5; //float,double / decimaltal

// string
x = `hej`; //String / text
x = "@"; // character / karaktär

// boolean
x = false; // boolean / boolean

//String + Number = String
//String + Boolean = String
//String + String = String

//Number + boolean = Number
//Number + Number = Number

//Boolean + Boolean = Number

// (2) Array
// variabler i en serie

let foo = 5;
//foo = 6

//index       0     1      2
let bar = [5, "red", true];
//bar[0] = 6
//bar[0] = bar[1]

console.log(bar);
//console.log(bar[0]) ;

// push lägger till på slutet av arrayen
bar.push(88);
// pop tarbort till på slutet av arrayen
bar.pop();

bar[5] = "alrik";

let que = ["Eva ", "Carl", "Alrik", "Sarah"];
/* let que = [ 1000, 23 ,33, 0]
que.sort( (a,b) => a>b ) */

console.log(que);

// (4)  if satser /villkorsatser

// syntax

/* 
if(  regel  ){
    //true
}else{    // optional att ha else
    //false
} 
*/

// conditions / regel
// retunerar true eller false

// == lika med
// === lika med och samma datatyp
// > större än
// < mindre än
// >= större än eller lika med
// <= mindre än eller lika med
// !=
//alt + shift + f   document format

let age = 20; //document.getElementById("ageInput").value;
let vip = true;
// 1) serie
if (age >= 18) 
    console.log("VUXEN");
else 
    console.log("Barn!!");


if (vip) 
    console.log("vip");
else 
    console.log("regular pleb!!");


    //2) sant -> ny ifsats
if (age >= 18) {
    console.log("VUXEN");

    if (vip) 
        console.log("vip");
    else 
        console.log("regular pleb!!");

}else 
    console.log("Barn!!");


    //3) falskt -> ny ifsats
    if (age >= 18) {
        console.log("VUXEN");
    }else {
        console.log("Barn!!");
        if (vip) 
            console.log("vip");
        else 
            console.log("regular pleb!!");
    }

    //fökortning

    if (age >= 18) 
        console.log("VUXEN");
    else if (vip) 
        console.log("vip");
    else 
        console.log("regular pleb!! ");



//4) 2 conditions i en if sats

// && och
// || eller
vip = true
age = 50
if (age >= 18 &&  vip  ) 
    console.log("sant");
else 
    console.log("falskt");


