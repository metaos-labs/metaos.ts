import { Fee_Amount } from "../constants";
import { Bech32, toUtf8 } from "@cosmjs/encoding";
import { sha256 } from "@cosmjs/crypto";

export function getPoolAddress(
  denom0: string,
  denom1: string,
  fee: Fee_Amount
) {
  let key;
  if (denom0 > denom1) {
    key = `${denom1}-${denom0}-${fee}`;
  } else {
    key = `${denom0}-${denom1}-${fee}`;
  }
  return Bech32.encode("mtos", sha256(toUtf8(key)).slice(0, 20));
}
