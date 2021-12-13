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
Svar: 10 är större än 5 - behöver enbart kolla om age är större än 10
då big alltid kommer skrivas ut oavsett.

let age = 15;

if(age > 5)
    console.log("big");
else if(age > 10)
    console.log("bigger");
else
    console.log("small");

*/



