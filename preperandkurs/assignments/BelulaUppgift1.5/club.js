
let vip= true; 
let age=17; 

function checkAge(){ 

    let age = document.getElementById("Age").value; 
    let vip = document.getElementById("VIP").checked; 

    if(vip) 
        alert("Welcome in my best VIP customer :)");
    else {
        if(age >= 18)
            alert("Access granted");
        else         
            alert("Access denied"); 
    }
}
