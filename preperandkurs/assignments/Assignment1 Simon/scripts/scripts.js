console.log ("Assignment1");
alert ("welcome to Simons Assignment");
let foo 
let bar 
let foobar 

foo = 0
bar = 0
foobar = 0

console.log (foo/bar);

function divide() {

    console.log ("divide");

    foo = parseInt(document.getElementById("foo").value,10);

    bar = parseInt(document.getElementById("bar").value,10);

    foobar = foo/bar 

    if (isNaN(foobar)) {
        alert("you cant divide us!");
    }

    if (foobar === Infinity) {
        alert('Let\'s call it Infinity!');
    }   
      

}






 



