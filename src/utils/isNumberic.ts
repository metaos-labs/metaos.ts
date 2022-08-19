import { REG_DECIMAL, REG_NUMBER, ZERO } from "../constants";
import Decimal from "decimal.js";

export function isNumeric(value: string) {
  return !isNaN(parseFloat(value));
  // return new Decimal(value).lessThan(ZERO);
}

export function checkInputNumber(value: string) {
  if (REG_NUMBER.test(value) || REG_DECIMAL.test(value) === true) {
    return true;
  }
  return false;
}
