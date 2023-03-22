let foo="0"
let bar="0"//Här är de 2 variablerna som heter foo och bar och jag har tilldelat dem båda med värdet 0. 
console.log(foo/bar) //Här har jag lagt in variablerna i en division, i konsolen visar dem NaN eftersom resultatet är inget giltligt värde. 

function delaTal() //Här skapar jag en funktion där den dividerar 2 tal och skriver ut ett resultat. 
    {
        num1 = document.getElementById(
        "första").value; //Här skrivs första talet in. Det kopplas via ett id i input-taggen.
        num2 = document.getElementById(
        "andra").value; //Här skrivs andra talet in. Det kopplas via ett id i input-taggen.

        document.getElementById(
        "resultat").innerHTML = num1 / num2; //Här beräknas de 2 talen och kvoten skriver över värdet i span-taggen. 

        console.log('Divide'); //Jag har även lagt in att divide skall skrivas ut i konsolen när knappen trycks på.

        console.log(document.getElementById("resultat").innerHTML = num1 / num2); //Här skriver funktionen ut resultatet i konsolen. Den är kopplad via en id som jag lagt i en span-tagg.

        if(num2 == 0)
        { document.getElementById(
            "resultat").innerHTML = "You can't divide us!";} //Här är en if-sats som skriver ut på html-sidan att talet ej har ett giltligt värde om nämnaren är 0.
    }



