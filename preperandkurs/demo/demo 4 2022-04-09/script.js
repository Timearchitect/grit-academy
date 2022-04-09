// Object
// datastruktur , termer

let foo = 0;

// index väljer element    
let foo2 = [ 4 , "hello" , "blå" , true];
console.log( foo2[0] );
let bar= 888;
foo = bar;
// key väljer värdet
//            key :value = attribute, keyvalue pair ,(hashmap) 
let bil = { 
            antalHjul:4,
            regnummer:"obm521",
            color:"blå",
            körförbud:true,
            array: [1,"hello",true,4,5,6]
        };
console.log( bil.antalHjul );


// definerar/deklarera en function
function alrik( input_for_alert){
    console.log(input_for_alert);
}

//  definerar/deklarera metod syntax
function log (x){
    console.log(x);    
} 

let Console ={    
    antalHjul:4 
    , log: function (input){
        console.log(input);    
    }
    , alrik: "är cool"

}

console.log("hello"); // kallar på  metod
let bankomat={

    id:546,
    typerAaCash:["SEK","EURO","DK","NO"]

}



function charRemove(inputSymbol, inputText){

    let result= ""
    for( let i =0 ; i <inputText.length ; i++  ){
        console.log(inputText.charAt(i) );
    }
return result;
}

//regex
//remove