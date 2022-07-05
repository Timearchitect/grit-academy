

                // Här har jag kvar lite av vad jag testat som jag kommenterat bort
// Assignment 2c

 /*
 let citynames = ["kiruna", "uppsala" , "malmo", "goteborg", "stockholm"]; 
  for ( let element of citynames){

    console.log(element)
 }
 */


 /*
 let str = "kiruna"; {

    console.log(str [0]);
 }
 */


 let citynames = ["kiruna", "uppsala" , "malmo", "goteborg", "stockholm"];

    for ( let cityName of citynames)
      for ( let letter of cityName)
          console.log(letter);
  /*  console.log("kiruna" [1]);
    console.log("kiruna" [2]);
    console.log("kiruna" [3]);
    console.log("kiruna" [4]);
    console.log("kiruna" [6]);
    */
 


let enStad = citynames.join(""); //"kirunauppsalamalmogoteborgstockholm";

   for (let i=0; i< enStad.length; i++)
      console.log(enStad[i]);   
   