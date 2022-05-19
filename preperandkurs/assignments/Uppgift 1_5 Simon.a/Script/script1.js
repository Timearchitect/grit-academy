let vip=true; 
let age=17;

function entry() {
    //-------------------funkar ej---------------------
    /*let vip = document.getElementById(checkbox);
    let age = document.getElementById(number).value;*/
//-----------------------------------------------------
    let age = document.getElementById("number").value; 
    let vip = document.getElementById("checkbox").checked;

    if (vip===true) {
        alert('Welcome in my best VIP customer :)')
    } else if (age>=18) {
        alert('Access granted')
    } else {
        alert('Access denied')
    }
}