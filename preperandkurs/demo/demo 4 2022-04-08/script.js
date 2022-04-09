


//Object


// analog Bil, däck , regnummer , color
// Syntaxen för object
let bar = 6;
let foo = bar;
//funktion
let fun = function log(x){
    console.log(x);
}
//          element
let foo2 = [   "gul"    ,       4      ,     "obm521"    ];

//           key :  value
let bil = { color: "gul" ,  tires: 4 , regnumber:"obm521" };
// key value pair = attribute



let Console = { 

    log: function (x){   //metod
        console.log(x);
    }

}


function charRemove( symbol , inputText ) 
{

    for(let i =0 ; i< inputText.length; i++ )
       console.log(i+inputText.charAt(i));

    return "out text";
}

// regex
// remove();