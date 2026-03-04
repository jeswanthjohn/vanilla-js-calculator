export const MAX_DECIMALS = 10;

export function formatResult(value) {
  const normalized = Number.parseFloat(
    Number(value).toFixed(MAX_DECIMALS)
  );

  return Number.isInteger(normalized)
    ? normalized
    : normalized.toString();
}