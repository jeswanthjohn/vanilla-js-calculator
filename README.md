# Vanilla JS Calculator

A dynamic expression-based calculator built using **Vanilla JavaScript**, designed to handle real-world input validation, floating-point precision issues, and predictable user interactions.

Unlike basic calculators, this application evaluates full expressions (e.g., `12 + 5 * 3`) while enforcing strict validation and safe computation.

---

## 🚀 Live Demo

👉 https://vanilla-js-calculator-jeswanth.netlify.app

---

## 🎯 Problem & Motivation

Most basic calculator implementations rely on evaluating two inputs at a time, which does not reflect real user behavior.

Users expect to:

- Enter continuous expressions (e.g., `12 + 5 * 3`)
- See predictable results with correct operator precedence
- Avoid crashes from invalid inputs

This project was designed to simulate real-world calculator behavior by:

- Supporting full expression evaluation
- Preventing invalid states before computation
- Ensuring consistent and safe output handling

## 📌 Overview

This calculator evolved from a basic dual-input tool into a **dynamic expression-based calculator** capable of evaluating full mathematical expressions (e.g., `12 + 5 * 3`).

The focus of this project is not just performing calculations, but handling **invalid states**, **floating-point precision issues**, and **user interaction edge cases** in a predictable and maintainable way.

It demonstrates how even a simple UI tool can be designed with **validation layers**, **modular logic**, and **clear data flow**.

## ✨ Features

- Expression-based input (supports full calculations like `12 + 5 * 3`)
- Strong operator validation to prevent invalid sequences (e.g., `++`, `--`)
- Safe handling of JavaScript numeric edge cases (`NaN`, `Infinity`)
- Floating-point precision normalization (e.g., fixes `0.1 + 0.2`)
- Keyboard input support:
  - `+  -  *  /` for operations
  - `Enter` to evaluate
  - `Esc` to clear
- Clear / reset functionality
- Calculation history with timestamped entries
- Accessible UI with ARIA attributes
- Responsive layout for desktop and mobile

---

## 🧠 Application Flow & Architecture

The application follows a controlled data flow pipeline:

User Input  
→ Event Handlers (button clicks / keyboard input)  
→ Expression Builder (constructs input string)  
→ Validation Layer (prevents invalid sequences)  
→ Evaluation Engine (`eval` with safeguards)  
→ Result Formatter (handles floating-point precision)  
→ UI Renderer (updates display)  
→ History Manager (stores past calculations)

### Key Principle:

Each stage is isolated to ensure:

- Invalid data is blocked early
- Logic remains testable and maintainable
- UI is decoupled from computation

---

## ⚙️ Key Engineering Decisions

- **Expression-Based Evaluation over Dual Input**
  - Allows flexible and natural user interaction
  - Supports operator precedence automatically

- **Validation Before Evaluation**
  - Prevents runtime errors instead of reacting to them
  - Ensures predictable system behavior

- **Separation of Concerns**
  - Input handling, validation, evaluation, and UI updates are modularized
  - Improves maintainability and debugging

- **Controlled Use of `eval`**
  - Used only after strict validation to balance simplicity and safety

---

## ⚙️ Technical Challenges & Solutions

### 1. Handling Invalid Operator Sequences

**Problem:** Users can input invalid expressions like `12 ++ 5`  
**Solution:** Implemented validation rules to restrict consecutive operators

---

### 2. Floating-Point Precision Errors

**Problem:** JavaScript produces inaccurate results (e.g., `0.1 + 0.2 = 0.30000000000000004`)  
**Solution:** Added normalization logic to format results to a fixed precision

---

### 3. Safe Expression Evaluation

**Problem:** Direct use of `eval` can lead to unsafe execution  
**Solution:** Restricted input via validation layer to ensure only safe expressions are evaluated

---

### 4. Edge Case Handling

**Problem:** Empty input, division by zero, incomplete expressions  
**Solution:** Introduced pre-validation checks before evaluation

---

## 📌 Engineering Highlights

- Designed a validation-first approach to prevent invalid computation states
- Handled JavaScript floating-point precision issues with controlled normalization
- Structured logic into modular layers for maintainability and clarity
- Ensured safe evaluation by sanitizing expressions before execution

---
## ⚠️ Handling Invalid and Incomplete Inputs

- Prevents multiple consecutive operators (`++`, `--`)
- Handles division by zero safely
- Normalizes floating-point precision issues
- Handles empty or incomplete expressions
- Prevents unsafe evaluations (`NaN`, `Infinity`)

---

## 🛠 Tech Stack

- **HTML5** – semantic structure and inputs
- **CSS3** – layout, responsive design, and interaction feedback
- **Vanilla JavaScript (ES6+)** – logic, DOM manipulation, validation, and event handling

---

## 📁 Project Structure

```text
vanilla-js-calculator/
│
├── index.html   # Application structure
├── styles.css   # Styling, layout, and UI feedback
├── app.js       # Calculator logic and event handling
└── README.md    # Project documentation
```

## 🎯 Learning Outcomes

- Through this project, I practiced and reinforced:
- Separation of concerns between HTML, CSS, and JavaScript
- DOM selection and event handling
- Defensive programming (validation and edge cases)
- Keyboard accessibility
- User-friendly error handling
- Incremental feature enhancement
- Deploying and maintaining a live frontend project

## 📌 Possible Enhancements

- Support for parentheses and complex expressions
- Scientific operations (sqrt, power, trigonometry)
- Persistent history using localStorage
- Theme toggle (dark / light mode)

## 👤 Author

**B. Jeswanth Reddy**  
Frontend Developer (JavaScript | MERN | Problem Solving)
