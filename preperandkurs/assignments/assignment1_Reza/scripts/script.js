// script.js
let foo = 0;
let bar = 0;

console.log(foo/bar);

function divideNumbers() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    if (input2 === 0) {
        alert("You can't divide us!");
    } else {
        let result = input1 / input2;
        console.log(result);
    }
}
