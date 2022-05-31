const cat = {
    alive:[true, false],
    name: "Katze !"
};

let alive = "My name is " + cat.name + "\nAnd I am alive :D";
let dead = "My name is " + cat.name + "\nAnd I am dead :(";

function Status() {

    let random = Math.floor(Math.random() * cat.alive.length);

    if (random==cat.alive[0]) {
        alert(alive);
}   else {
        alert(dead);
}


document.getElementById(button);
}