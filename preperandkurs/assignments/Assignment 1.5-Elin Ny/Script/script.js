var age = 17; //Här deklarerar jag en variabel och tilldelar den med värdet 17.
var vip = true; //Här deklarerar jag min andra variabel som är en boolean och tilldelar den värdet true.

function AllowedEntry() {
    //Här börjar min funktion som jag kallar på i min knapp på min html sida.
    age = document.getElementById("ageId").value; //Här hämtas värdet av det användaren matar in via den första input-rutan. Den har id ageId.
    vip = document.getElementById("vipId").checked; //Här hämtas värdet på min checkbox och huruvida den är true eller false(dvs om den är i kryssad eller inte.)

    if (vip == true) {
        /*Här börjar min if-sats. Den börjar med att se om min checkbox är i kryssad.
        Är den true så skriver den ut en alertbox och ger tillgång oavsett ålder.*/
        alert("Welcome in my best VIP customer!");
    } else {
        //Ifall VIP inte är i kryssad (dvs false) så körs denna koden.

        if (age >= 18) {
            alert("Access Granted!");
            //Den säger att om användaren är 18 eller äldre så skriver den ut en alertbox som ger tillgång till klubben.
        } else {
            /* Denna körs ifall båda mina IF-satser är falska. (dvs om vip är lika med falskt och age är mindre än 18.)
            Då skriver den ut en alertbox som nekar tillgång till klubben*/
            alert("Access Denied.");
        }
    }
} //Här avslutas min funktion!
