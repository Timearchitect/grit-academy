// if satser

// syntax

// == jämnför condition
// condition retunerar bara true eller false
// 1<2
// <= mindre o likamed
// >= större o likamed inte =>
// if satsen i parantesen måste ha boolean( true/false)

// =   tilldelning  foo = 888
// +=  tilldelning med att den ökar
// -=  minus + tilldelning
// *=  multiplikation + tilldelning
// /=  divition + tilldelning
/*
let foo = 5;

if ( -1 >= 2) 
    console.log("sant");
else 
    console.log("falskt");
*/

let password = "123456",
  username = "alrikhe";

/* // 1)

if(username=="alrikhello"){
    console.log("sant 1");
}else{
    console.log("falskt 1");
}



if(password=="1234567"){
    console.log("sant 2");
}else{
    console.log("falskt 2");
}
*/

//2)
/*
if (username == "alrikhe") {

  console.log("sant 1");

  if (password == "1234567") 
    console.log("sant 2");
   else 
    console.log("falskt 2");

} else 
  console.log("falskt 1");


*/


//3)
/*
if (username == "alrikhello") 
  console.log("sant 1");
 else if (password == "1234567") 
  console.log("sant 2");
 else 
  console.log("falskt 2");
}

*/


// 4)
/*
if ( username == "alrikhe" || username == "ALRIKHE"  && password == "12345678") 
    console.log("loggin");
else
    console.log("access denied");


    if ( true || false  && false) 
    console.log("loggin");
else
    console.log("access denied");

    if ( true ) 
    console.log("loggin");
else
    console.log("access denied");

// med parantes  mellan eller 

 4) optimizerad

if ( (username == "alrikhe" || username == "ALRIKHE")  && password == "12345678") 
    console.log("loggin");
else
    console.log("access denied");

    if ( (true || false)  && false) 
    console.log("loggin");
else
    console.log("access denied");

 if ( false) 
    console.log("loggin");
else
    console.log("access denied");*/
let array = document.getElementById("unique");
array.style.fontWeight="bold";
array.style.fontStyle="italic";
array.style.fontSize="100px";
console.log(array.style.color = "purple");
