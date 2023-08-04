// 5) Loopar
// while, do while , for


// vid true så loopar den förevigt
//vid false så går den vidare/skippar saker i loopen

let i

// while
i = 0

while (i < 3) {
    console.log("WHILE LOOP "+i);
    i += 1 // ökar med 1
} 


// do while
i = 0

do{
    console.log("DO WHILE LOOP "+i);
    i += 1 // ökar med 1
} 
while (i < 3) 


// for
//   startkod; condition;  ändringskod  
for(  let i = 0;     i < 3;     i += 1  ){
    console.log("FOR LOOP "+i);

}



//queue etal1emple

let queue = ["Abdulla" ,"Alrik" , "Emma", "Ellie"]

for(let i= 0 ; i < 4 ; i++ ){
    document.write("<h1>köplats "   +  (i+1) +" "+ queue[i] + "</h1><br>" );
}


//Galleri etal1empel
i=0
while (i < 100) {
    document.write(" <img width='50' src='https://etal1ternal-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F275808.jpg&f=1&nofb=1&ipt=87fb58ad3cc214eba02f2c9ab2fbea5aa5bfcdc7cdab20985b57c4c9a37d5373&ipo=images'> ");
    i += 1 // ökar med 1
} 






// 5) funktioner

let foo = 5
console.log(foo); // metod
alert(foo) // funktion

addition(888) //anropa/kalla är hojstad (kan anropas före definitionen)


// parameter är i parsantessen (  )
function addition( tal1 , tal2 ){  //definera en funktionen alrik
    
    if(typeof tal1 == "string") return "du måste ha en siffor" //avbryta
    
    console.log("hejsan");
    return tal1+tal2
    console.log("hejsan!!!!!!");

}










//closure/scope

//let tal1= "hejsan" 

{

    //let tal1= "TJENARE" 

    {
        var tal1= "HELLO WORLD" 
        var tal1= "WHAT!!!" 

       
    }
    var tal1= "tal2OOOO!!!" 
    console.log(tal1)

}



