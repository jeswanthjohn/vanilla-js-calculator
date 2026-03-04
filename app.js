import { formatResult } from "./js/formatter.js";
import { operators, getLastNumberSegment, canAppendOperator, canAppendDecimal } from "./js/validator.js";

// DOM elements
const display = document.getElementById("display");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

let currentExpression = "";
let history = [];

// ---------- Helpers ----------

function showError(message) {
  resultDiv.textContent = message;
  resultDiv.classList.add("error");
}

function showResult(value) {
  resultDiv.textContent = `Result: ${value}`;
  resultDiv.classList.remove("error");
}

function clearAll() {
  currentExpression = "";
  display.value = "";
  resultDiv.textContent = "Result: —";
  resultDiv.classList.remove("error");
}

function addToHistory(expression, result) {
  const timestamp = new Date().toLocaleTimeString();

  history.unshift({ expression, result, timestamp });

  if (history.length > 10) {
    history.pop();
  }

  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";

  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.expression} = ${entry.result} (${entry.timestamp})`;
    historyList.appendChild(li);
  });
}

// ---------- Expression Handling ----------

function appendToExpression(value) {

  if (!canAppendOperator(currentExpression, value)) return;

  if (value === ".") {
    const decimalCheck = canAppendDecimal(currentExpression);

    if (!decimalCheck) return;

    if (decimalCheck === "prefix") {
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

    if (operators.includes(lastChar) || lastChar === ".") {
      showError("Incomplete expression");
      return;
    }

    const result = Function(`"use strict"; return (${currentExpression})`)();

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
      addToHistory(currentExpression, 0);
      currentExpression = "0";
      display.value = "0";
      return;
    }

    const formatted = formatResult(result);

    showResult(formatted);
    addToHistory(currentExpression, formatted);

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

// ---------- Clear History ----------

clearHistoryBtn.addEventListener("click", () => {
  history = [];
  renderHistory();
});