let cat = { 
    alive: true,
    name: "Gustav"
}

function showNameStatus() {
    if (Math.random() < 0.5) alert(cat.name + " is alive!")
    else alert(cat.name + " is dead...")
}
