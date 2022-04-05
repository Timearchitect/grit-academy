
let age=17;    // Variabel ålder som tilldelas 17

let vip= true; // Boolean variabel

function getAge(){ // Kör funktion med if statements

    let age = document.getElementById("Age").value; // Tilldelar variabeln age från inputboxs value
    let vip = document.getElementById("VIP").checked; //  Tilldelar variabeln vip från checkboxs value


    if(vip) 
        alert("Welcome my best VIP customer :)");
    else {
        if(age >= 18)
            alert("Access granted");
        else         
            alert("Access denied"); 
    }
}
/*
if(age <18 && vip==false) //  Om under 18 år och inte VIP = sant --> Access denied
    {
        alert("Access denied");
    }

    if (age>=18 && vip==false) // om 18 år eller över 18 år och inte VIP = sant --> Access granted
    {
    
        alert("Access granted"); 
    } 
    
    if (vip==true) // Om VIP = sant --> "Welcome my best VIP customer! :)"
    {
        alert("Welcome my best VIP customer :)"); // 

    }
 }
*/

