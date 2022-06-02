/*let que = [
  "Malin",
  "Alrik",
  "Janna",
  "Lars",
  "Ali",
  "Berna",
  "Kyung",
  "Zipeng",
  "Lullia",
  "Joakim",
];

console.log(que);

// If satser

// Conditions ger en boolean sant eller falskt

//utryck
1 + 2 * 3;
//vs  detta är en jämnförelse
1 == 1;

// jämnför 2 med ett utryck 1+1
2 == 1 + 1;

// < mindre än
1 < 2;

// > större än
5 > 9;

// <= mindre och lika med
0 <= 1;

// >= större än och lika med
8 >= 8;

// !=  inte lika med   , ! inte
1 != 1;

//syntax för if satser

if (5 == 8) {
  console.log("HEJSAN"); // sant koderconsole.log("HELLO"); // sant koder
} else {
  document.write("&#9824;");
  console.log("&#9824;"); // sant koder
  console.log("HAHA!!"); // falskt koder
}

// 1) if sats + annan if sats efter

if (true) {
  console.log("sant 1"); // sant koderconsole.log("HELLO"); // sant koder
} else {
  console.log("falskt 1"); // falskt koder
}


if (true) {
    console.log("sant 2"); // sant koderconsole.log("HELLO"); // sant koder
  } else {
    console.log("falskt 2"); // falskt koder
}


// 2) if sats efter sant 

if (false) {
  console.log("sant 1"); // sant koder

  if (true) {
    console.log("sant 2"); // sant koder
  } else {
    console.log("falskt 2"); // falskt koder
  }


} else {
  console.log("falskt 1"); // falskt koder
}



// 3) if sats efter falskt
if (false) {
  console.log("sant 1"); // sant koder
} else {
  console.log("falskt 1"); // falskt koder

  if (true) {
    console.log("sant 2"); // sant koder
  } else {
    console.log("falskt 2"); // falskt koder
  }
}

// else if sats : förenkling

if (false) 
    console.log("sant 1"); // sant koder
else if (true) 
    console.log("sant 2"); // sant koder
else 
    console.log("falskt 2"); // falskt koder




// 4) if sats efter falskt
// && and och
// || or eller


if (true  &&  true) {
    console.log("sant"); // sant koder
} else {
    console.log("falskt"); // falskt koder
}


*/
let inputDOM = document.getElementById("test");




// loopar repeterar koder , när det är sant så repeterar 
//vid falskt då skiparden och går vidare
let count = 0; 
while( count < 3){
 console.log("WHILE ..." + count);
 count = count + 1 ;
}




count=0;
do{
    console.log("DO While ..." + count);
    count = count + 1 ;
}
while(count < 3)




//  engångskod ; condition ; repeterandekod
// dekarering ;   condition ; ökning av variabel
for(  let count = 0 ; count <3   ; count +=1   ){
    console.log("FOR ..." + count);
}

console.log("vidare...");

