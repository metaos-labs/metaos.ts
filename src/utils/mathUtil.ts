import Decimal from "decimal.js";
import { DEFAULT_PRECISION } from "../constants";

export function plus(value1: string, value2: string) {
  return new Decimal(value1).plus(value2).toString();
}

export function minus(value1: string | number, value2: string | number) {
  return new Decimal(value1).minus(value2).toString();
}

export function multipliedBy(value1: string | number, value2: string | number) {
  return new Decimal(value1).mul(value2).toString();
}

export function div(value1: string, value2: string): string {
  return new Decimal(value1).div(value2).toString();
}

export function isGreaterThan(value1: string, value2: string) {
  return new Decimal(value1).greaterThanOrEqualTo(value2);
}

export function isLessThan(value1: string, value2: string) {
  return new Decimal(value1).lessThan(value2);
}

export function isEqualTo(value1: string, value2: string) {
  return new Decimal(value1).equals(value2);
}

export function pow18(value: string): string {
  return new Decimal(value).mul(Math.pow(10, DEFAULT_PRECISION)).toFixed();
}

export function pow(
  value: string | number | Decimal,
  precision: number = DEFAULT_PRECISION,
  round: Decimal.Rounding = Decimal.ROUND_DOWN
): string {
  if (value === "") {
    return "0";
  }
  const _value = new Decimal(value).mul(Math.pow(10, precision));
  if (round === Decimal.ROUND_UP) {
    return _value.ceil().toFixed();
  }
  return _value.floor().toFixed();
}

export function powM18(value: string | number) {
  return new Decimal(value).div(Math.pow(10, DEFAULT_PRECISION)).toString();
}

export function shift(value: string, precision: number = DEFAULT_PRECISION) {
  return new Decimal(value).div(Math.pow(10, precision)).toFixed();
}

export function isPositive(value: string | number) {
  if (!value) {
    return false;
  }
  return new Decimal(value).greaterThan(0);
}
