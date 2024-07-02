let numberOfPotions = 14;
let meterElement = document.getElementById("stock");
let numberOfPotionsSpanElement = document.getElementById("numberOfPotions");
let buyPotionButton = document.getElementById("buyPotion");

/**
 * Update the state of the potion stock and the <meter>.
 * Is called on click on the "buy Potion" button.
 */
function updatePotionStock() {
  // Ensure numberOfPotions stays within the min and max values of the meter
  numberOfPotions = Math.max(0, Math.min(15, numberOfPotions));

  // Update value attribute of meter element
  meterElement.setAttribute("value", numberOfPotions.toString());

  // Update text content inside the meter element
  if (numberOfPotions === 1) {
    numberOfPotionsSpanElement.textContent = `${numberOfPotions} potion left`;
  } else if (numberOfPotions === 0) {
    numberOfPotionsSpanElement.textContent = `Oupsie! No potions in stock!`;
    buyPotionButton.disabled = true;
  } else {
    numberOfPotionsSpanElement.textContent = `${numberOfPotions} potions left`;
  }
}

// Call the function to set the initial state
updatePotionStock();

// Function to handle buying a potion
function handleBuyPotion() {
  numberOfPotions--;
  updatePotionStock();
}

// Add event listener to button
buyPotionButton.addEventListener("click", handleBuyPotion);

/**
 * The number of divs in the page
 */
let totalNumOfDivs = document.querySelectorAll("div").length;
let numDivSpan = document.getElementById("numberOfDivSpan");
numDivSpan.textContent = totalNumOfDivs;
