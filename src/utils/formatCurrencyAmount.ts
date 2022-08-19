import Decimal from "decimal.js";
import { Decimal as CosmosDecimal } from "@cosmjs/math";
import {
  DEFAULT_PRECISION,
  DEFAULT_USER_PRECISION,
  MAX_PRECISION,
} from "../constants";

export function toDecimalPlaces(
  value: string | number | Decimal,
  precision: number = DEFAULT_PRECISION
) {
  try {
    return new Decimal(value)
      .toDecimalPlaces(precision, Decimal.ROUND_UP)
      .toString();
  } catch (e) {
    return String(value || "-");
  }
}

export function toAmountString(
  value: Decimal.Value | undefined = "",
  precision: number = DEFAULT_USER_PRECISION,
  roundingMode: Decimal.Rounding = Decimal.ROUND_DOWN
): string {
  try {
    return new Decimal(value)
      .toSignificantDigits(precision, roundingMode)
      .toString();
  } catch (e) {
    return String(value || "-");
  }
}

export function toAmountFloor(
  value: string | number,
  precision: number = DEFAULT_USER_PRECISION
): string {
  return toAmountString(value, precision, Decimal.ROUND_DOWN);
}

export function toAmountCeil(
  value: string | number,
  precision: number = DEFAULT_USER_PRECISION
) {
  return toAmountString(value, precision, Decimal.ROUND_UP);
}

export function toAmountFee(
  value: string | number,
  precision: number = DEFAULT_PRECISION
): string {
  try {
    return new Decimal(value)
      .toDecimalPlaces(precision, Decimal.ROUND_DOWN)
      .toString();
  } catch (e) {
    return String(value || "-");
  }
}

export function isEmptyAmount(
  value: Decimal.Value,
  precision: number = MAX_PRECISION
): boolean {
  const _value = new Decimal(value).mul(Math.pow(10, precision)).floor();
  return _value.isZero();
}

export function toExactAmount(
  value: string,
  precision = MAX_PRECISION
): string {
  try {
    return CosmosDecimal.fromUserInput(value, precision).toString();
  } catch (e) {
    return String(value || "-");
  }
}

export const formatNumber = (
  value: Decimal.Value,
  seperator: number = 3,
  fixed: number = 2
) => {
  return `${new Decimal(value)
    .div(new Decimal(10).pow(seperator))
    .toFixed(fixed)}k`;
};
