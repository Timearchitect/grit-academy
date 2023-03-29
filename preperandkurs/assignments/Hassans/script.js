// Get a reference to the output element
const outputEl = document.getElementById("output");

// Declare a variable to hold the loop counter
let i;

// Loop 10 times
for (i = 0; i < 10; i++) {
  // Generate a random number between 0 and 1
  const randomNum = Math.floor(Math.random() * 2);

  // If the random number is 0, write an "X". Otherwise, write an "O".
  if (randomNum === 0) {
    outputEl.textContent += "X ";
  } else {
    outputEl.textContent += "O ";
  }
}

// Function to change the text color
function changeColor() {
  document.body.style.color = 'red';
}
