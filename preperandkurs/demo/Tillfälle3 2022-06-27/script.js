   // id 
   var pDOM  = document.getElementById("paragraf");
   pDOM.style.color= "purple";
   document.write("<p>hello world</p>")




   //loopar
   // while , do while , for
   let i=10;

   while(i>0) // vid sant då repeterar den, vid falskt så slutar den
   {
       console.log(i +" while loop");
       i=i-2;
       //document.write("<img width='20' height='15'>");
   }   


   i = 0;

   do{
       console.log(i +" do while loop");
       i=i+1;
       //document.write("<img width='20' height='15'>");
   }   
   while(i<5) // vid sant då repeterar den
  

   // (deklareringskod,condition,repeterandekod)
   for(let j = 0; j<5; j=j+1){
           console.log(j +" for loop");
   }



   const que=["Arzije","Xhulian","Sara","Alrik","Hussam","Erika","Eric"];

   for(let i=0; i<que.length; i+=1){
       console.log(" queposition: "+(i+1) + " is " +  que[i]);
   
   }

   //  scope

   let foo = 5;       // variabel som är lokal
   var bar = 8;       // variabel som kan ut/ allmän
   const PI = 3.1413; // Konstant som är lokal


   if(2==1+1){
       const PI = 4; // Konstant
    // variabel som är lokal
   }
   console.log(document.getElementsByTagName("input"))

   que[0]= 888;

   let btnDOM= document.getElementById("submitBTN")

   btnDOM.addEventListener("mousedown", function(){
       alert("HELLO WORLD")
   }
   )
