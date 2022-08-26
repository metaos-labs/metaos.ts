import invariant from "tiny-invariant";
import Decimal from "decimal.js";
import { Fee_Amount, TICK_SPACINGS, BASE_UNIT_TICK } from "../constants";
import { Token } from "../types";
import { sortsBefore, toAmountString } from "../utils";

export class TickMath {
  public static INVALID_TICK = -99999999;

  public static MIN_TICK = -887272;

  public static MIN_TICK_VALUE = "0";

  public static MAX_TICK: number = -TickMath.MIN_TICK;

  public static MAX_TICK_VALUE = "∞";

  public static nearestUsableTick = (
    tick: number,
    tickSpacing: number
  ): number => {
    const rounded = Math.round(tick / tickSpacing) * tickSpacing;
    if (rounded < TickMath.MIN_TICK) return rounded + tickSpacing;
    else if (rounded > TickMath.MAX_TICK) return rounded - tickSpacing;
    else return rounded;
  };

  private static priceToClosestTick(price: string): number {
    const numerator = Decimal.log2(Decimal.sqrt(price));
    const denominator = Decimal.log2(Decimal.sqrt(BASE_UNIT_TICK));
    return numerator.div(denominator).toNumber();
  }

  /**
   * Compute nearest tick of price for input
   * @param feeAmount
   * @param value
   */
  public static getNearestTickByPrice(
    feeAmount: Fee_Amount,
    value: string
  ): number {
    const _value = value.trim();
    if (_value === "") {
      return this.INVALID_TICK;
    }
    if (value === this.MIN_TICK_VALUE) {
      return this.MIN_TICK;
    }
    if (value === this.MAX_TICK_VALUE) {
      return this.MAX_TICK;
    }
    const tick: number = this.priceToClosestTick(value);
    // console.log(`[priceToClosestTick]: ` + tick);
    const result = this.nearestUsableTick(tick, TICK_SPACINGS[feeAmount]);
    // console.log(`[nearestUsableTick]: ` + result);
    return result;
  }

  public static getFormattedPriceByTick(
    tick: Decimal.Value,
    fee: Fee_Amount
  ): string {
    if (tick === this.INVALID_TICK) {
      return "";
    }
    if (this.isLowestTick(tick, fee)) {
      return this.MIN_TICK_VALUE;
    }
    if (this.isHighestTick(tick, fee)) {
      return this.MAX_TICK_VALUE;
    }
    const base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  }

  public static getPriceByTick(tick: Decimal.Value): string {
    if (tick === this.INVALID_TICK) {
      return "";
    }
    // if (this.isLowestTick(tick, fee)) {
    //   return this.MIN_TICK_VALUE;
    // }
    // if (this.isHighestTick(tick, fee)) {
    //   return this.MAX_TICK_VALUE;
    // }
    const base = Decimal.pow(Decimal.sqrt(BASE_UNIT_TICK), tick);
    return Decimal.pow(base, 2).toString();
  }

  public static getNearestPriceByInput(
    feeAmount: Fee_Amount,
    price: string
  ): string {
    // console.log('INPUT price: ' + price);
    const nearestTick = this.getNearestTickByPrice(feeAmount, price);
    const result = this.getPriceByTick(nearestTick);
    // console.log('getPriceByTick: ' + result);
    // console.log('==========');
    return toAmountString(result);
  }

  public static getPriceBySqrtPrice(sqrtPrice: string): string {
    if (!sqrtPrice) {
      return "";
    }
    if (sqrtPrice === "0") {
      return "0";
    }
    return new Decimal(sqrtPrice).pow(2).toString();
  }

  public static getSqrtPriceByPrice(price: string): string {
    if (price === "0") {
      return "0";
    }
    return new Decimal(price).sqrt().toString();
  }

  public static getBaseTickRange(
    fromToken: Token,
    toToken: Token,
    fee: Fee_Amount,
    leftRange: string,
    rightRange: string
  ): { tickLower: number; tickUpper: number } {
    let tickLower: number;
    let tickUpper: number;
    if (sortsBefore(fromToken, toToken)) {
      tickLower =
        leftRange === TickMath.MIN_TICK_VALUE
          ? TickMath.getNearestLowestTick(fee)
          : TickMath.getNearestTickByPrice(fee, leftRange);
      tickUpper =
        rightRange === TickMath.MAX_TICK_VALUE
          ? TickMath.getNearestHighestTick(fee)
          : TickMath.getNearestTickByPrice(fee, rightRange);
    } else {
      if (leftRange === TickMath.MIN_TICK_VALUE) {
        tickUpper = TickMath.getNearestHighestTick(fee);
      } else {
        tickUpper = TickMath.getNearestTickByPrice(
          fee,
          new Decimal(1).div(leftRange).toString()
        );
      }
      if (rightRange === TickMath.MAX_TICK_VALUE) {
        tickLower = TickMath.getNearestLowestTick(fee);
      } else {
        tickLower = TickMath.getNearestTickByPrice(
          fee,
          new Decimal(1).div(rightRange).toString()
        );
      }
    }
    console.log("tickLower: " + tickLower);
    console.log("tickUpper: " + tickUpper);
    return {
      tickLower,
      tickUpper,
    };
  }

  public static getNearestLowestTick(fee: Fee_Amount): number {
    const tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]);
    // console.log('getNearestLowestTick: ' + tickLower);
    return tickLower;
  }

  public static getNearestHighestTick(fee: Fee_Amount): number {
    const tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]);
    // console.log('getNearestHighestTick: ' + tickUpper);
    return tickUpper;
  }

  public static getNearestPricesByFullTick(fee: Fee_Amount): {
    lowestPrice: string;
    highestPrice: string;
  } {
    const tickLower = this.nearestUsableTick(this.MIN_TICK, TICK_SPACINGS[fee]);
    const tickUpper = this.nearestUsableTick(this.MAX_TICK, TICK_SPACINGS[fee]);
    const lowestPrice = this.getPriceByTick(tickLower);
    const highestPrice = this.getPriceByTick(tickUpper);
    return {
      lowestPrice,
      highestPrice,
    };
  }

  public static isHighestTick(tick: Decimal.Value, fee: Fee_Amount): boolean {
    const highestTick = this.getNearestHighestTick(fee);
    return tick >= highestTick;
  }

  public static isLowestTick(tick: Decimal.Value, fee: Fee_Amount): boolean {
    const lowestTick = this.getNearestLowestTick(fee);
    return tick <= lowestTick;
  }
}
