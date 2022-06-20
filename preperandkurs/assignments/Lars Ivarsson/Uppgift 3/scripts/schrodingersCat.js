//Skapar ett objekt som jag döper till cat
let cat = 
{
    name: "Gustav",
    alive: function()
    {
        //let random = Math.floor(Math.random() * 2);
        //let random = Math.random() ;

        if (Math.random()  < 0.5)
            return "död";
        else
            return "vid liv.";
    }
}
//cat har två egenskaper, name och alive. Dessa två "keys" tilldelas "values"
//alive's value är en funktion som slumpar fram om katten är död eller levande