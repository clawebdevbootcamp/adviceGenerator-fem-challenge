// 1 - select the dice button (let dice = ...)
let dice = document.querySelector("button");

// 2 - Create a function that generates and updates the DOM
// API endpoint: https://api.adviceslip.com/advice
const generateAdvice = async () => {
  // Use fetch to get the data
    try {
      let res = await fetch("https://api.adviceslip.com/advice")
      let info = await res.json();
      //console.log(info)
      let slip = info.slip;
      //console.log(slip)

      // Update the DOM using the generated data:
      // Select adviceID text (span)
      let adviceID = document.querySelector("span");
      // Change adviceID's innerText to show slip.id
      adviceID.innerHTML = `ADVICE # ${slip.id}`;
      // Select adviceText (p)
      let adviceText = document.querySelector("p")
      // Change adviceText innerText to show slip.advice
      adviceText.innerHTML = `"${slip.advice}"`;
      
    } catch (error) {
      console.log(error);
    }
   
};

// 3 - DOM must be updated with a generated advice on DOMContentLoaded
window.addEventListener("DOMContentLoaded", generateAdvice);

// 4 - Adding an event listener to the dice button to call the generateAdvice function when clicked
dice.addEventListener("click", generateAdvice);
