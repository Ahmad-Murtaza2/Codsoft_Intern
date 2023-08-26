const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let clickedButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (!isNaN(buttonText) || buttonText === ".") {
      currentInput += buttonText;
      display.value = currentInput;
    } else if (buttonText === "C") {
      clear();
    } else if (buttonText === "=") {
      calculate();
    } else if (buttonText === "←") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (buttonText === "%") {
      operator = "%";
      currentInput += ` ${operator} `;
      display.value = currentInput;
    } else {
      operator = buttonText;
      currentInput += ` ${operator} `;
      display.value = currentInput;
    }

    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 100);
  });
});
function clear() {
  currentInput = "";
  operator = "";
  display.value = "";
}
function calculate() {
  const expression = currentInput.replace(/ /g, "");
  try {
    let result = eval(expression);
    result = Number(result.toFixed(6));
    display.value = result;
    currentInput = result.toString();
    operator = "=";
  } catch (error) {
    display.value = "Error";
  }
}
