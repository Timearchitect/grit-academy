// Loopar repeterar koder
// while loop


// när conditionen är sant då repeterar den
// när conditionen är falskt då skippar den
let count = 0;

while( count < 3 ){
    console.log("while loop: "+count)  
    count += 1;
}


// reset count to zero, by assigning 0 to variable
count = 0;

do{
    console.log("do while loop: "+count)  
    count += 1;
}
while( count < 3 )



//   (  dekaration ; condition;  öka )
for( let count = 0; count < 3; count += 1 ){
    console.log("for loop: "+count)  
}



let que = ["Elias","Alrik","Anna","Viktor"]
/*
document.write( "Position: "+ 0 + " är " + que[0]+ "<br>") 
document.write( "Position: "+ 1 + " är " + que[1]+ "<br>") 
document.write( "Position: "+ 2 + " är " + que[2]+ "<br>") 
*/


for ( let count = 0 ; count < que.length ; count ++ )
    document.write( "Position: "+ (count+1) + " är " + que[count]+ "<br>") 


for ( let count = 0; count < 1000 ; count ++ ) // for loop version
    document.write( '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" width="50" height="80" >' ) 

count = 0;   // while loop version
while ( count < 1000  ){ 
    count ++
    document.write( '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" width="50" height="80" >' ) 
}


console.log("vidare...");    
