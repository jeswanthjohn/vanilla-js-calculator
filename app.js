// DOM elements
const display = document.getElementById("display");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let currentExpression = "";

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

function clearAll() {
  currentExpression = "";
  display.value = "";
  resultDiv.textContent = "Result: —";
  resultDiv.classList.remove("error");
}

// ---------- Validation Utilities ----------

const operators = ["+", "-", "*", "/"];

function getLastNumberSegment(expression) {
  const parts = expression.split(/[+\-*/]/);
  return parts[parts.length - 1];
}

// ---------- Expression Handling ----------

function appendToExpression(value) {
  const lastChar = currentExpression.slice(-1);

  // Prevent starting with invalid operators (* or /)
  if (
    currentExpression === "" &&
    (value === "*" || value === "/")
  ) {
    return;
  }

  // Allow starting with minus (negative number)
  if (currentExpression === "" && value === "-") {
    currentExpression += value;
    display.value = currentExpression;
    return;
  }

  // Prevent double operators
  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  // Prevent multiple decimals in the same number
  if (value === ".") {
    const lastNumber = getLastNumberSegment(currentExpression);

    if (lastNumber.includes(".")) {
      return;
    }

    // Prevent starting a number with just "."
    if (lastNumber === "" || operators.includes(lastChar)) {
      currentExpression += "0.";
      display.value = currentExpression;
      return;
    }
  }

  currentExpression += value;
  display.value = currentExpression;
}

function evaluateExpression() {
  try {
    if (!currentExpression) {
      showError("Expression is empty");
      return;
    }

    const lastChar = currentExpression.slice(-1);

    // Prevent ending with operator or decimal
    if (operators.includes(lastChar) || lastChar === ".") {
      showError("Incomplete expression");
      return;
    }

    const result = Function(`"use strict"; return (${currentExpression})`)();

    // ---------- Numeric edge case handling ----------
    if (Number.isNaN(result)) {
      showError("Invalid calculation");
      return;
    }

    if (!Number.isFinite(result)) {
      showError("Result exceeds safe numeric limits");
      return;
    }

    if (Object.is(result, -0)) {
      showResult(0);
      currentExpression = "0";
      display.value = "0";
      return;
    }

    const formatted = formatResult(result);

    showResult(formatted);
    currentExpression = formatted.toString();
    display.value = currentExpression;

  } catch (error) {
    showError("Invalid expression");
    currentExpression = "";
    display.value = "";
  }
}

// ---------- Button Click Handling ----------

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      clearAll();
    } else if (value === "=") {
      evaluateExpression();
    } else {
      appendToExpression(value);
    }
  });
});

// ---------- Keyboard Support ----------

document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(e.key)) {
    appendToExpression(e.key);
  }

  if (e.key === "Enter") {
    evaluateExpression();
  }

  if (e.key === "Escape") {
    clearAll();
  }

  if (e.key === "Backspace") {
    currentExpression = currentExpression.slice(0, -1);
    display.value = currentExpression;
  }
});