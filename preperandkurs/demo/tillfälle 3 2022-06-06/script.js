//tillfälle 3

// scope 

let local = 4 // kan ej gå ut ur block
const CONSTANT = 3.14157 // kan ej gå ut block
var public = "global"  // kan gå ut

{    // minimerbar
    let local = 4






}
//console.log(local);

for(var i = 0; i < 3;  i+=1   ){
  //  console.log(i);
}
//console.log(i);



// funktioner
//alert("hello");

// metod
// console är ett object
//console.log(8);

let     foo   = 8;

// Definition / deklaration av funktionen alrik()
function alrik( para ) {
    let bar = 8;
    para = para+ 888;
   console.log("ALRIK"+bar );
   console.log("ALRIK"+foo);
   console.log("jag är en pokemon"+ para);
}

// Kalla på funktionen alrik()
alrik();


function addition( tal1 , tal2 ){
 //console.log(tal1+tal2);
 return tal1+tal2;  // tal1+tal2  retuneras
}
function subtracktion( tal1 , tal2 ){
    //console.log(tal1+tal2);
    return tal1-tal2;  // tal1+tal2  retuneras
   }

let bar2 = addition;



// Object
// syntax

let henrik= 0

// element
// index       0    1      2
let array = [ 12 , "red" , true]
array[0] = array[1];

// egenskaper/ key value pair


function renovera( pris ){
 if(pris > 10000)
    console.log("Stor renovering");
 else    
    console.log("liten renovering");
}

let hus = { 
    windows:12 ,
    color: "red" ,
    sold:true  ,
    renovera: function  ( pris ){
        if(pris > 10000)
           console.log("Stor renovering");
        else    
           console.log("liten renovering");
       }
}

hus.windows = hus.color




function log(x){
    console.log(x);
}

let Console={ 
    log: function (x){
        console.log(x);
    }
}




function infinity(){
    console.log("infinity")
    beyond()
}


function beyond(){
    console.log("beyond")
    infinity()
}
