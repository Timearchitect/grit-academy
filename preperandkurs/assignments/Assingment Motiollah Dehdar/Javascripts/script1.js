            //kommentarer   
            //alert(123)
            //document.write(456)

// alert(123)
document.write(456)
console.log(789) //debugga lätt

//variabel är en behållare
let x       //deklarerar en variable
x = 50      //tilldelar 50 till x dvs ändrar x till 50

x = 100


let namn = "matti"

// namn = x * 2 + 50   // den utför kalkylationer

console.log (namn + 100)

let foo = 0

let bar = 0


console.log (foo)
console.log (bar)



// <button> Divide </button>


//function log() {
  //  console.log('Clicked');  };

//  <button onclick="log(Divide)">Divide</button>

function calc()
{
  let box1 = document.getElementById("ett").value;
  let box2 = document.getElementById("tvo").value;
  console.log(box1,box2);
  let rakna = box1/box2;
  //alert(rakna)

  //  if(rakna = 0 ) alert("nope")
   if(box2 == 0 ) {alert("You cant divide us!")}
   else {alert(rakna)}

  //alert(rakna);
}

