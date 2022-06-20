const cat = {alive:true, name:"Gustav"}

function petTheCat() {
    let thisCat = cat
    thisCat.alive = Math.random() < 0.5
    window.alert("The cat's name is " + thisCat.name + " and it is " + (thisCat.alive == true? "alive.": "dead."))
}