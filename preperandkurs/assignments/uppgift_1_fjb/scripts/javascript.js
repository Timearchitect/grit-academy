let foo = 0
let bar = 0

function division(){
    foo = document.getElementById("foo").value;
    bar = document.getElementById("bar").value;
    if ( foo && bar ) { // I och med att foo och bar är input av typ "number" så har vi sanitized input.
        console.log(foo + " / " + bar + " = " + (foo / bar));
    }
    else{
        window.alert("YOU CANT DIVIDE US")
    }
}