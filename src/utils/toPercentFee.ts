import { Fee_Amount, FEE_AMOUNT_DETAIL } from "../constants";

export function getPercentByFeeAmount(fee: Fee_Amount | undefined) {
  if (fee) {
    return `${FEE_AMOUNT_DETAIL[fee].label}%`;
  } else {
    return "-";
  }
}
