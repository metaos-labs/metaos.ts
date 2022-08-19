import Decimal from "decimal.js";

export const decimalNumber = (number = " ") => {
  const [int = "", float = ""] = number.toString().replace("$", "").split(".");

  if (int.length > 10) {
    return `${new Decimal(int).div(new Decimal(10).pow(10)).toFixed(2)}B`;
  } else if (int.length > 7) {
    return `${new Decimal(int).div(new Decimal(10).pow(7)).toFixed(2)}M`;
  } else if (int.length > 3) {
    return `${new Decimal(int).div(new Decimal(10).pow(3)).toFixed(2)}K`;
  } else {
    return `${Number(int) > 0 ? int : 0}.${
      float.length > 0 ? float.slice(0, 2) : "00"
    }`;
  }
};
