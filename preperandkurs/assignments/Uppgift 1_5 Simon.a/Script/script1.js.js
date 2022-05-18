let vip = true;
let age = 17;

function entry() {
    let age = document.getElementById(Number).value;
    let vip = document.getElementById(checkbox).checked;

    if (age>=18) {
        alert('Access granted')
    } else if (vip===true) {
        alert('Welcome in my best VIP customer :)')
    } else {
        alert('Access denied')
    }
}

