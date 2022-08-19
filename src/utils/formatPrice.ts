import Decimal from "decimal.js";

export function toUsd(value: Decimal.Value): string | number {
  try {
    return "$" + new Decimal(value).toFixed(2);
  } catch (e) {
    return String(value || "-");
  }
}
