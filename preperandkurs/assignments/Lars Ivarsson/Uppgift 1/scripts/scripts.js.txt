// alert("VARNING!");       Skickar upp en varningsruta
// console.log("Hej");      Skriver Hej i konsollen
// document.write("Hej");   Skriver ut Hej på hemsidan via html

let bar;                    //deklarerar variabeln bar
bar = 0;                    //tilldelar variabeln värde
let foo = 0;                //gör både och samtidigt
console.log(bar/foo);       //försöker dividera i konsollen
if (bar/foo != Number)      //if-sats med villkor
{
    alert("You can´t divide us!");  //varning om kvot ej är tal
}
function print() //vid klick på button körs koden
{
    console.log("Divide");
}