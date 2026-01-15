// DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// ---------- Helpers ----------
function showError(message) {
  resultDiv.textContent = message;
  resultDiv.classList.add("error");
}

function showResult(value) {
  resultDiv.textContent = `Result: ${value}`;
  resultDiv.classList.remove("error");
}

function formatResult(value) {
  return Number.isInteger(value) ? value : value.toFixed(2);
}

function getNumbers() {
  return {
    num1: parseFloat(num1Input.value),
    num2: parseFloat(num2Input.value)
  };
}

function validateInputs(n1, n2) {
  if (num1Input.value === "" || num2Input.value === "") {
    showError("Both fields are required");
    return false;
  }
  if (isNaN(n1) || isNaN(n2)) {
    showError("Please enter valid numbers");
    return false;
  }
  return true;
}

// ---------- Operations ----------
function calculate(op) {
  const { num1, num2 } = getNumbers();

  if (!validateInputs(num1, num2)) return;

  let result;

  switch (op) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        showError("Cannot divide by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

    // ---------- Numeric edge case handling ----------
  if (Number.isNaN(result)) {
    showError("Invalid calculation");
    return;
  }

  if (!Number.isFinite(result)) {
    showError("Result exceeds safe numeric limits");
    return;
  }

  // Handle negative zero (-0)
  if (Object.is(result, -0)) {
    result = 0;
  }

  showResult(formatResult(result));
}


// ---------- Button Clicks ----------
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const operation = button.dataset.op;

    if (operation === "clear") {
      num1Input.value = "";
      num2Input.value = "";
      resultDiv.textContent = "Result: —";
      resultDiv.classList.remove("error");
      return;
    }

    calculate(operation);
  });
});

// ---------- Keyboard Support ----------
document.addEventListener("keydown", (e) => {
  const keyMap = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "Enter": "add"
  };

  if (keyMap[e.key]) {
    calculate(keyMap[e.key]);
  }

  if (e.key === "Escape") {
    num1Input.value = "";
    num2Input.value = "";
    resultDiv.textContent = "Result: —";
    resultDiv.classList.remove("error");
  }
});
