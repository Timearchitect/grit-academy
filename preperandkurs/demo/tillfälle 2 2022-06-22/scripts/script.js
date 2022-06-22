"use strict";
// arrayer variablar men flera

// variabel
let foo; //dekaration
foo = 5; //tilldelning
foo = 888;

let bar; //dekaration

//index
bar = [5, "hej", 999, true]; //tilldelning

// 5 är ett element
// "hej" är ett element
// osv  (3 står för längden av element)

bar[0] = bar[2] + 1;

console.log(bar.length);

bar.push(55555); // lägger till på slutet
bar.pop();
console.log(bar.join());

let que = ["Sara", "Arzije", "Franz-Josef", "Xhulian"];

// Datatyper
let x;

// value, värde
//   1)  String
x = "Hello"; // String , Sträng
x = "$"; // char , karaktär

//   2)   Number
x = 5; // Integer  , Heltal
x = 0.1; // Float    , Decimaltal

//   3)   Boolean
x = false; // Boolean , Boolean

// Object , Undefined , Symbol ,null

// If satser
//alert("hello")


// (condition)

//     ==  jämnför
//     <    mindre än
//     >    större än
//     <=   mindre + lika med
//     >=   större än + lika med
//     !=   inte lika med

let age = 18;


//1) separata if-satser
/*
if (age >= 18 ){ 
    console.log("Vuxen");
    console.log("SANT!!!!");
}
else {  
    console.log("Omyndig");
    console.log("Falskt!!!!");
}



if (age >= 18 ){ 
    console.log("Vuxen");
    console.log("SANT!!!!");
}
else {  
    console.log("Omyndig");
    console.log("Falskt!!!!");
}


//2)  vid sant så körs nästa if-sats

if (false ){ 
    console.log("1 SANT!!!!");
    if (false ){ 
        console.log("2 SANT!!!!");
    }
    else {  
        console.log("2 Falskt!!!!");
    }
    
}
else {  
    console.log("1 Falskt!!!!");
}


//3)  vid falsk så körs nästa if-sats

if (true ){ 
    console.log("1 SANT!!!!");
}
else {  
    console.log("1 Falskt!!!!");

    if (false ){ 
        console.log("2 SANT!!!!");
    }
    else {  
        console.log("2 Falskt!!!!");
    }

}



// förkortning



if ( age < 50 ) 
    console.log("kostar 200kr per biljett");
else if ( age >= 65  )
    console.log("pensionär du går in gratis");
else   
    console.log("kostar 150kr");


*/



// 4 ) twå if satser tillsammans



// && and / och     bara om båda sidorna är sant --> sant
//|| or/  eller om en sida är sant då är allt --> sant 
if( true  &&  true  )
    console.log("SANT!!!!");
else 
    console.log("Falskt!!!!");







console.log("vidare");
