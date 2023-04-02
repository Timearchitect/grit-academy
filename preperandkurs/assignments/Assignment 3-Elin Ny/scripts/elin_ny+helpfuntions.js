charRemove(); //Här kallar jag på min funktion
function charRemove(char = "l", text = "Hello beautiful world") {
    //Här initierar jag min funktion.
    let taBort = text.replace(
        /l/g,
        ""
    ); /*Här säger jag åt funktionen att ta bort bokstaven l med funktionen replace.
Jag lämnar replace värdet tomt, så det ska inte ersättas med något. */
    console.log(taBort); // Här skriver jag ut texten med det borttagna värdet i konsolen.
}
