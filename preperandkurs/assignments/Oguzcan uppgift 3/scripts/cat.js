const cat = {
  alive: true,
  name: "Gustav",
};

function isCatDead() {
  /*let deadOrAlive = Math.floor(Math.random() * 2 + 1);

  if (deadOrAlive % 2 == 0)
    alert(`The cat's name is: ${cat.name} and it's alive!`);
  //alert("The cat's name is:  " + cat.name + " and it's alive!");
  else alert("The cat's name is:  " + cat.name + " and it's not alive!");
*/


  if (Math.random() > 0.5)
    alert(`The cat's name is: ${cat.name} and it's alive!`);
  else 
    alert("The cat's name is:  " + cat.name + " and it's not alive!");

}
