
console.clear();

/* array */
//index       0       1     2     3
let array = [
    "red",
    "grey",
    4 ,
    true
];
console.log(array);
array[0] = "blue"
console.log(array[0]);

/* Object */
//key    color :   value "red"
let car = {
    color: "red",
    background_color: "grey",
    amoutOfWheels:4,
    registered:true,
    arrayen:array,
    addition: function (tal1 ,tal2){
        console.log( tal1 + tal2 )
    }

};
car["color"]="blue"
console.log(car)
console.log(car["color"]);       // js sätt
console.log(car.amoutOfWheels);          // vanligaste i programmering

car.addition()   //kallar på en metod



function addition(tal1 = 20 ,tal2 = 20){
    console.log( tal1 + tal2)
}

addition()  //kallar på en vanlig funktion



/* 
alrik("hello world")

function alrik(text){
    alert(text)
    console.log(text)
    document.write(text);
}
 */

let user1 ={
 password: "monkey123",
 username:"Timearchitect",
 email:"alrik.he@gritacademy.se",
}


alert()
console.log()  // metod är funktion i ett objekt


let AlriksConsole={

    log: function(x){  
        console.log(x)
    }
    
}

