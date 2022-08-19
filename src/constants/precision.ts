export const DEFAULT_USER_PRECISION = 6;

export const DEFAULT_PRECISION = 18;

export const MAX_PRECISION = 28;

export const REG_NUMBER = new RegExp(
  "^[1-9]+[0-9]*(\\.\\d{0," + DEFAULT_PRECISION + "})?$"
);

export const REG_DECIMAL_SIMPLE = /^\d*(\.\d*)?$/;

export const REG_DECIMAL = new RegExp(
  "^0(\\.\\d{0," + DEFAULT_PRECISION + "})?$"
);
