# Vanilla JS Calculator

A dynamic expression-based calculator built using **Vanilla JavaScript**, designed to handle real-world input validation, floating-point precision issues, and predictable user interactions.

Unlike basic calculators, this application evaluates full expressions (e.g., `12 + 5 * 3`) while enforcing strict validation and safe computation.

---

## 🚀 Live Demo
👉 https://vanilla-js-calculator-jeswanth.netlify.app

---

## 📌 Overview

This calculator evolved from a basic dual-input tool into a **dynamic expression-based calculator** capable of evaluating full mathematical expressions (e.g., `12 + 5 * 3`).

The focus of this project is not just performing calculations, but handling **invalid states**, **floating-point precision issues**, and **user interaction edge cases** in a predictable and maintainable way.

It demonstrates how even a simple UI tool can be designed with **validation layers**, **modular logic**, and **clear data flow**.
---

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

The calculator follows a structured data flow:

User Input → Event Handlers → Expression Validation → Evaluation Engine → Result Formatting → UI Update → History Storage

- Validation layer prevents invalid expressions before evaluation  
- Evaluation logic ensures safe computation  
- Formatting layer handles floating-point inconsistencies  
- UI updates are separated from logic for maintainability

---

## ⚙️ Key Engineering Decisions

- Moved from dual-input model to expression-based evaluation for better usability  
- Introduced validation layer to prevent invalid operator sequences  
- Implemented formatting utilities to normalize floating-point errors  
- Separated logic into modular functions for maintainability 
- Extracted validation and formatting into reusable utility modules to improve code organization 

---

## ⚠️ Edge Case Handling

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