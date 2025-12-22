// Get DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Add validation for non-numeric inputs
const validateInputs = (n1, n2) => {
  if (isNaN(n1) || isNaN(n2)) {
    return { valid: false, message: 'Please enter valid numbers' };
  }
  if (num1Input.value === '' || num2Input.value === '') {
    return { valid: false, message: 'Both fields required' };
  }
  return { valid: true };
};


// Utility function to get numbers safely
function getNumbers() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

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
const validation = validateInputs(numbers.num1, numbers.num2);

if (!validation.valid) {
  resultDiv.textContent = `Result: ${validation.message}`;
  return;
}


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
