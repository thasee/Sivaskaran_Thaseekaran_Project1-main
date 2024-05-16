// Get the button element
const colorButton = document.getElementById("colorButton");

// Get the main text element
const mainText = document.getElementById("mainText");

// Function to change text color
function changeColor() {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the random color to the text
  mainText.style.color = randomColor;
}

// Event listener for the button click
colorButton.addEventListener("click", changeColor);
