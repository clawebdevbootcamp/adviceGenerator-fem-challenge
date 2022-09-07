// 1 - select the dice button (let dice = ...)
let dice = document.querySelector("button");
let number = document.querySelector("span")
let adviceText = document.querySelector(".advice")


// 2 - Create a function that generates and updates the DOM
// API endpoint: https://api.adviceslip.com/advice
const generateAdvice = () => {

  // Use fetch to get the data
  // ...
  fetch("https://api.adviceslip.com/advice")
    
  // Update the DOM using the generated data:
  // Select adviceID text (span)
  // ...

  // Change adviceID's innerText to show slip.id
  // ...
  .then(response => response.json())
  .then(info => {number.innerHTML = `Advice # ${info.slip.id}`
  adviceText.innerHTML = `"${info.slip.advice}"`})
  
  // Select adviceText (p)
  // ...
  // Change adviceText innerText to show slip.advice
  // ...
};

const generateAdvice2 = async () => {

  try{
const response = await fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'});
const info = await response.json()
const id = info.slip.id
const advice = info.slip.advice


number.innerHTML = `Advice # ${id}`
adviceText.innerHTML = `"${advice}"`
}
catch (error){
console.log(error)
}
};

// 3 - DOM must be updated with a generated advice on DOMContentLoaded
window.addEventListener("DOMContentLoaded", generateAdvice);

// 4 - Adding an event listener to the dice button to call the generateAdvice function when clicked
dice.addEventListener("click", generateAdvice);