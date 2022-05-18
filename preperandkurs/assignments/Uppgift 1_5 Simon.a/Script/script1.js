let vip=true; 
let age=17;

function entry() {
    let vip = document.getElementById(checkbox).checked;
    let age = document.getElementById(number).value;

    if (vip===true) {
        alert('Welcome in my best VIP customer :)')
    } else if (age>=18) {
        alert('Access granted')
    } else {
        alert('Access denied')
    }
}





