export const operators = ["+", "-", "*", "/"];

export function getLastNumberSegment(expression) {
  const parts = expression.split(/[+\-*/]/);
  return parts[parts.length - 1];
}

export function canAppendOperator(expression, value) {
  const lastChar = expression.slice(-1);

  if (expression === "" && (value === "*" || value === "/")) {
    return false;
  }

  if (operators.includes(value) && operators.includes(lastChar)) {
    return false;
  }

  return true;
}

export function canAppendDecimal(expression) {
  const lastChar = expression.slice(-1);
  const lastNumber = getLastNumberSegment(expression);

  if (lastNumber.includes(".")) {
    return false;
  }

  if (lastNumber === "" || operators.includes(lastChar)) {
    return "prefix";
  }

  return true;
}