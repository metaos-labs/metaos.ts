import Decimal from "decimal.js";

export function toPercent(value: Decimal.Value, hundred: boolean = true): string {
  try {
    if (hundred) {
      return `${new Decimal(value).mul(100).toFixed(2)}%`;
    } else {
      return `${new Decimal(value).toFixed(2)}%`;
    }
  } catch (e) {
    return value.toString();
  }
}
