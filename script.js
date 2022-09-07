// 1 - select the dice button (let dice = ...)
let dice = document.querySelector("button");

// 2 - Create a function that generates and updates the DOM
// API endpoint: https://api.adviceslip.com/advice
const generateAdvice = () => {
  // Use fetch to get the data
  // ...
  
  // Update the DOM using the generated data:
  // Select adviceID text (span)
  // ...
  // Change adviceID's innerText to show slip.id
  // ...
  // Select adviceText (p)
  // ...
  // Change adviceText innerText to show slip.advice
  // ...
};

// 3 - DOM must be updated with a generated advice on DOMContentLoaded
window.addEventListener("DOMContentLoaded", generateAdvice);

// 4 - Adding an event listener to the dice button to call the generateAdvice function when clicked
dice.addEventListener("click", generateAdvice);
