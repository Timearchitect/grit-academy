

//let age=17;
//let vip=true;

//Hämtar Knappfunktionen (får inte knappfunktionen att fungera)
function verify(){

//Kopplar funktionen till värdet i Age/VIP?
let age = document.getElementById("age").value;
let vip = document.getElementById("vip").checked;

//Is/else vip/age
if(vip)
    alert("welcome my best VIP customer :)");
else {
    if(age >=18)
        alert("Access granted")
    else
        alert("Acess denied")
    }

//If/else >18 eller vip alternativt enbart vip
    if(age >=18 && vip==false) 
    alert("Acess granted");

    if (vip==true)

    alert("welcome my best VIP customer :)");
}
console.log 


//If VIP + >=18 faller alert ut dubbelt,lösning?