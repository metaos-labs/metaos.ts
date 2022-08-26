import Decimal from "decimal.js";
export declare function toDecimalPlaces(value: string | number | Decimal, precision?: number): string;
export declare function toAmountString(value?: Decimal.Value | undefined, precision?: number, roundingMode?: Decimal.Rounding): string;
export declare function toAmountFloor(value: string | number, precision?: number): string;
export declare function toAmountCeil(value: string | number, precision?: number): string;
export declare function toAmountFee(value: string | number, precision?: number): string;
export declare function isEmptyAmount(value: Decimal.Value, precision?: number): boolean;
export declare function toExactAmount(value: string, precision?: number): string;
export declare const formatNumber: (value: Decimal.Value, seperator?: number, fixed?: number) => string;
