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

// ---------- Expression Handling ----------

function appendToExpression(value) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = currentExpression.slice(-1);

  // Prevent double operators
  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  currentExpression += value;
  display.value = currentExpression;
}

function evaluateExpression() {
  try {
    if (!currentExpression) return;

    const operators = ["+", "-", "*", "/"];
    const lastChar = currentExpression.slice(-1);

    // Prevent ending with operator
    if (operators.includes(lastChar)) {
      showError("Expression cannot end with operator");
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