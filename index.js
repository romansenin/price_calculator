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

// grab all the input tags within the car form
const options = document.getElementById("carform").querySelectorAll("input");
// loop through the options and assign each one the handleOption function on the onclick event
options.forEach((option) => {
  option.onclick = handleOption;
});

// when user clicks sunroof, handle it properly
function handleOption() {
  // convert value from starting to number
  const itemPrice = parseInt(this.value);

  if (this.checked) price += itemPrice;
  else price -= itemPrice;

  showSelections();

  priceSpan.innerHTML = price;
}

function showSelections(){
	
	// start with an empty list
	const list = [];
	
	// find each checked option in our form
	const checkedOnes = document.getElementById('carform').querySelectorAll('input:checked');
	
	// for each checked option, get the item name and put it on the list  
  checkedOnes.forEach(checkbox => {
    const itemname = checkbox.getAttribute("data-itemname");
    list.push(itemname);
  });

	// show the completed list
	document.getElementById('selections').innerHTML = list.join('<br>');
}
