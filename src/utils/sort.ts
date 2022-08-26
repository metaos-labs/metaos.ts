import { Token } from "../types";

export function sortsBefore(baseToken: Token, quoteToken: Token) {
  return baseToken.base.toLowerCase() < quoteToken.base.toLowerCase();
}
