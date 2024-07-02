document.addEventListener("DOMContentLoaded", (event) => {
  const inputBox = document.getElementById("input-box");
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  const buttons = {
    resetbutton: () => {
      currentInput = "";
      previousInput = "";
      operator = "";
      inputBox.textContent = "0";
    },
    modulebutton: () => handleOperator("%"),
    dividebutton: () => handleOperator("/"),
    multiplybutton: () => handleOperator("*"),
    minusbutton: () => handleOperator("-"),
    plusbutton: () => handleOperator("+"),
    equalsbutton: () => calculateResult(),
    decimalbutton: () => handleNumber("."),
    "0button": () => handleNumber("0"),
    "1button": () => handleNumber("1"),
    "2button": () => handleNumber("2"),
    "3button": () => handleNumber("3"),
    "4button": () => handleNumber("4"),
    "5button": () => handleNumber("5"),
    "6button": () => handleNumber("6"),
    "7button": () => handleNumber("7"),
    "8button": () => handleNumber("8"),
    "9button": () => handleNumber("9"),
  };

  Object.keys(buttons).forEach((id) => {
    document.getElementById(id).addEventListener("click", buttons[id]);
  });

  function handleNumber(number) {
    if (number === "." && currentInput.includes(".")) return;
    currentInput += number;
    inputBox.textContent = currentInput;
  }

  function handleOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
  }

  function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        if (curr === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = prev / curr;
        break;
      case "%":
        result = prev % curr;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    inputBox.textContent = currentInput;
  }
});
