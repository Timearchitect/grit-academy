function divide() {
    var foo = document.getElementById('firstValue').value;
    var bar = document.getElementById('secondValue').value;
    if(foo !== '0' && bar !== '0') {
        var result = parseInt(foo) / parseInt(bar);
        console.log(result)
    } else {
        console.log('You cant divide us!');
    }
}