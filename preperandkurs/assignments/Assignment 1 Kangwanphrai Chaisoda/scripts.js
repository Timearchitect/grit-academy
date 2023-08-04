//"Assigment 1 part 3 - foo and bar assignment"

function myFunction() {
    let foo = 0;
    let bar = 0;
    var YouCanDivideUs = foo / bar;
    //  if (NaN);
    //  else console.log("You can't divide us!");

    if (isNaN(YouCanDivideUs)) console.log("You can't divide us!");
}

document.getElementById("QuokkaButton").addEventListener("click", myFunction);

