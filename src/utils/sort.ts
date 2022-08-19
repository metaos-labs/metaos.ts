import { IToken } from "../types";

export function sortsBefore(baseToken: IToken, quoteToken: IToken) {
  return baseToken.base.toLowerCase() < quoteToken.base.toLowerCase();
}
