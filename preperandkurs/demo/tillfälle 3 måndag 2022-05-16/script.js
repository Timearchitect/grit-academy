// Loopar
// repetera koder 
// while ()

// do _ while()

// for ()
const PI = 3.14159;


//syntax för loopar är som if satser
let i= "hello";
console.log(i);
// 1!=1
if(true){
    console.log(i);
}
else
    console.log("falskt");








let foo = 0;

foo = foo + 1;
//foo += 1;
//foo ++;

console.log("foo", foo);



// while loop


let count = 2;
while(count <= 3){  // om den är för över 3  
    console.log("while "+ count);
    count+=2;    // ökar
}


// do while
/*let i = 2;
do{  
    console.log("do while "+ i);
    i+=2;    // ökar
}
while( i <= 3)
*/

// for
// init kod ; regel ; repeterande kod
// deklaration; condtion ; öka variabel


let que = ["Belula", "Rebeca","GE","Oguzcan","Alrik","Simon","Gustav","Sebastian","Malin","Sanna","Henrik"];
que.push(888);
que.push(true);
que.push("Hello");
que.pop();
que.pop();
que.pop();

for(let i = 0 ; i < que.length ; i++ ){
    console.log(i);
    document.write("köplats: "+ (i+1) +" är "+ que[i]+ "<br>" );
    //document.write("<img src='logotyp-13.png'  width='50' height='20'  >");
}


var bar= 888;





// function är att den kan klumpa ihop koder tillsammans
// återanvända funktionen
// fabrik typ

//  input & output

// syntaxen 

// Definera/Deklarera en funktion
// parameter/argument
function alrik( para1 , para2){
 let i= "hej ";
 console.log(para2);
 return i + "ALRIK ALRIK"+ para1;
}


let input1 =document.getElementById("tal1").value;
let input2 =document.getElementById("tal2").value;

function addition( ){
    input1 = document.getElementById("tal1").value;
    input2 = document.getElementById("tal2").value;
    input1 =parseInt(input1);
    input2 =parseInt(input2);

    document.write( input1+input2)
}



function infinity(){
    console.log("infinity");
    beyond();

}

function beyond(){
    console.log("beyond");
    infinity();
}




















