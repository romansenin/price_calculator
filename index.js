/*
  - goal: let users select options, then show price
  - handling the price:
    - we can store it in a variable
    - the price should change when an option is clicked
  - handling the options:
    - use checkboxes for options that can all be added 
    - use radio buttons where user can only select one
    - data can be stored in an object
  - handling the display:
    - we want to show a list of selections, not just price
*/

// start the price at 20,000 and show it
let price = 20000;
const priceSpan = document.getElementById("price");
priceSpan.innerHTML = price;

// when the user clicks sunroof, handle it properly
document.getElementById("sunroof").onclick = handleOption;

// when user clicks sunroof, handle it properly
function handleOption() {
  // convert value from starting to number
  const itemPrice = parseInt(this.value);

  if (this.checked) price += itemPrice;
  else price -= itemPrice;

  priceSpan.innerHTML = price;
}
