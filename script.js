const colorButton = document.getElementById("colorButton");

const mainText = document.getElementById("mainText");

function changeColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  mainText.style.color = randomColor;
}

colorButton.addEventListener("click", changeColor);
