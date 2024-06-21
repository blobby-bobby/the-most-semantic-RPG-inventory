let numberOfItems = 14;
let meterElement = document.getElementById("stock");
let spanElement = document.getElementById("numberOfItems");
let buyPotionButton = document.getElementById("buyPotion");
let totalNumOfDivs = document.querySelectorAll("div").length;
let numDivSpan = document.getElementById("numberOfDivSpan");

// Function to update meter and span content
function updateMeter() {
  // Ensure numberOfItems stays within the min and max values of the meter
  numberOfItems = Math.max(0, Math.min(15, numberOfItems));

  // Update value attribute of meter element
  meterElement.setAttribute("value", numberOfItems.toString());

  // Update text content inside the meter element
  meterElement.textContent = `${numberOfItems} items (${(
    (numberOfItems / 8) *
    100
  ).toFixed(1)}%)`;

  // Update span content
  if (numberOfItems === 1) {
    spanElement.textContent = `${numberOfItems} potion left`;
  } else if (numberOfItems === 0) {
    spanElement.textContent = `Oupsie! No potions in stock!`;
    buyPotionButton.disabled = true;
  } else {
    spanElement.textContent = `${numberOfItems} potions left`;
  }
}

updateMeter();

// Function to handle buying a potion
function handleBuyPotion() {
  numberOfItems--;
  updateMeter();
}

// Add event listener to button
buyPotionButton.addEventListener("click", handleBuyPotion);

// Total number of div
numDivSpan.textContent = totalNumOfDivs;
