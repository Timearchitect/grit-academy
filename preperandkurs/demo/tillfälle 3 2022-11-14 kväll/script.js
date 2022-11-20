// loopar

//while
//if <- keyword/nyckelord
// ( )  i parantesen så har ni en condition/regel
// {  } när det är sant kör koden här inne i { }

if(false)
console.log("hej")
else 
console.log("nej")

let count = 0
while(count < 3){   // när det är sant då repeterar den
    
    console.log("while loop "+ count)
    count = count +1
   // if(count == 5) 
   // break; // avslutar loopar
}


//do while 
let count2 = 0
do{
    console.log("do while loop "+ count2)
    count2+=1

}
while(count2 < 3)


// for

// for ( startkod deklaration ; condition ; repeterande kod som ändrar variabeln  )

for(let count3 = 0; count3<3; count3++){
    console.log("for loop "+ count3)

}

// varje låda heter element       
let que = ["Alrik","Anneli","Claes","Zenah","Arbresha","hugo","Nicole"]

/*
document.write(" <p>Köplats "+ 0 +": "+ que[0]+ "</p>" )
document.write(" <p>Köplats "+ 1 +": "+ que[1]+ "</p>" )
document.write(" <p>Köplats "+ 2 +": "+ que[2]+ "</p>" )
document.write(" <p>Köplats "+ 3 +": "+ que[3]+ "</p>" )
document.write(" <p>Köplats "+ 4 +": "+ que[4]+ "</p>" )
*/

let i = 0 // index
while(i < que.length)
{
    document.write(" <p>Köplats "+ (i+1) +": "+ que[i]+ "</p>" )
    i++;
}

 // index
for(let i = 0;i < que.length;  i++)
    document.write(" <p>Köplats "+ (i+1) +": "+ que[i]+ "</p>" )
  


//*for each */

for( let elementValue of que )
console.log(elementValue)

for( let index in que )
document.write(" <p>Köplats "+ ( parseInt(index)+1) +": "+ que[index]+ "</p>" )

//console.log(index +":"+ que[index])



console.log("vidare...")
