// Get DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Utility function to get numbers safely
function getNumbers() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Result: Please enter valid numbers";
    return null;
  }

  return { num1, num2 };
}

// Math operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Event listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const operation = button.dataset.op;

    if (operation === "clear") {
      num1Input.value = "";
      num2Input.value = "";
      resultDiv.textContent = "Result: —";
      return;
    }

    const numbers = getNumbers();
    if (!numbers) return;

    const { num1, num2 } = numbers;
    let result;

    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
    }

    resultDiv.textContent = `Result: ${result}`;
  });
});
