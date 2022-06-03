 //alert("Hello");
    // arrayer
    //           0     1        2      3
    let foo = [888, "hello", false, 0.5];
    let bar = 888;
    let bar2 = "hello";
    let bar3 = false;
    let bar4 = 0.5;
    // tilldelar en array
    // foo[0] = false;
    let que = ["Fatima", "Alrik", "Sarah", "Martin","Anna","Hussam"];

    que.push("Jenny"); //lägg till på slutet
    que.pop(); // tarbort på slutet



      // if sats
      // i parantesen så har ni en condition ( 1+1 == 2   )
      // == jämnför vänster med höger
      // < mindre än
      // > större än
      // <= mindre än + lika med 
      // > större än +likamed 
      // != inte lika med 


let age = document.getElementById("ageInput").value; 

      if(age >= 16 ){ //true
          let age = document.getElementById("ageInput").value; 
          console.log("jag är" + age + "kan ta körkort");
      } else { // false
          console.log("nej, jag är " + age + " år som är för ung för körkort");
      }


      console.log("vidare...");


    //

// loopar repeterar koder
//  när det är sant i condition så repeterar den
// när det är falskt då går den vidare
let count = 0;

while( count < 3 ){
    console.log("WHILE  "+ count)
    document.write("<br> While "+ count);

    //count++; // öka med ett
    //document.write("<br>"+que[count] +" är position " + count);
    count += 1; // öka med två
}

count= 0; // reset


do{
 document.write("<br> Do while "+ count);
 count++;
}
while(count < 3)




// (   deklaring ;  condition ; ökar variabel   )
for( let count = 10 ; count < 30;  count+=2 ){
    document.write("<br> For "+ count);
}




