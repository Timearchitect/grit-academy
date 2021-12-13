let cat = { 
    name: "Gustavo" ,
    alive:true,
    changeNameOnCat: function(x){
        cat.name = x;
    }
    
    }; 


function kitkat(){
    alert( cat.name );
}




/*
 
// finns det något funktionellt fel / logiskt fel

let age = 15;

if(age > 5)
    console.log("big");
else if(age > 10)
    console.log("bigger");
else
    console.log("small");

*/