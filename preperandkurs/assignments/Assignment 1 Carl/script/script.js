// function displayDivideConsole() {
//     console.log("Divide");
// }

// function inputDivide() {
//     let foo = 0;
//     let bar = 0;

//     if (bar % foo !== 0) {
//         return alert("You cant divide us!");
//     } else {
//         console.log(foo / bar);
//     }
// }

function divideAndDisplayToCon() {
    console.log("Divide");

    let foo = document.getElementsByTagName("input")[0].value
    let bar = document.getElementsByTagName("input")[1].value

    if ( isNaN(bar/foo)   ) {
        return alert("You cant divide us!");
    } else {
        console.log(foo / bar);
    }
}