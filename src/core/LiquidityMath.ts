import { IToken } from "../types";
import { toDecimalPlaces } from "../utils";
import Decimal from "decimal.js";

export class LiquidityMath {
  private static getRightSideLiquidity(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount: string
  ): Decimal {
    const numerator = new Decimal(amount);
    const _value1 = new Decimal(1).div(Decimal.sqrt(leftRangeValue));
    const _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));
    const denominator = Decimal.sub(_value1, _value2);
    return numerator.div(denominator);
  }

  private static getLeftSideLiquidity(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount: string
  ): Decimal {
    const numerator = new Decimal(amount);
    const denominator = Decimal.sub(
      Decimal.sqrt(rightRangeValue),
      Decimal.sqrt(leftRangeValue)
    );
    return numerator.div(denominator);
  }

  public static getLiquidityFromAmount0(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount0: string
  ): Decimal {
    const pc = new Decimal(priceValue);
    if (pc.lessThan(leftRangeValue) === true) {
      return this.getRightSideLiquidity(
        leftRangeValue,
        rightRangeValue,
        priceValue,
        amount0
      );
    } else if (pc.greaterThan(rightRangeValue) === true) {
      return this.getLeftSideLiquidity(
        leftRangeValue,
        rightRangeValue,
        priceValue,
        amount0
      );
    }
    const deltaX = new Decimal(amount0);
    const _value1 = new Decimal(1).div(Decimal.sqrt(priceValue));
    const _value2 = new Decimal(1).div(Decimal.sqrt(rightRangeValue));
    const denominator = Decimal.sub(_value1, _value2);
    return deltaX.div(denominator);
  }

  private static _getDiverForDeltaX(
    lower: number | string,
    upper: number | string
  ): Decimal {
    const _value1 = new Decimal(1).div(Decimal.sqrt(lower));
    const _value2 = new Decimal(1).div(Decimal.sqrt(upper));
    return Decimal.sub(_value1, _value2);
  }

  private static _getDiverForDeltaY(
    lower: number | string,
    upper: number | string
  ) {
    return Decimal.sub(Decimal.sqrt(upper), Decimal.sqrt(lower));
  }

  public static getLiquidityFromAmount1(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount1: string
  ): Decimal {
    const pc = new Decimal(priceValue);

    if (pc.lessThan(leftRangeValue) === true) {
      return this.getRightSideLiquidity(
        leftRangeValue,
        rightRangeValue,
        priceValue,
        amount1
      );
    } else if (pc.greaterThan(rightRangeValue) === true) {
      return this.getLeftSideLiquidity(
        leftRangeValue,
        rightRangeValue,
        priceValue,
        amount1
      );
    }

    const deltaY = new Decimal(amount1);
    const denominator = Decimal.sub(
      Decimal.sqrt(priceValue),
      Decimal.sqrt(leftRangeValue)
    );
    return deltaY.div(denominator);
  }

  public static getAmount1FromAmount0(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount0: string,
    token0: IToken
  ): string {
    const liquidity = this.getLiquidityFromAmount0(
      leftRangeValue,
      rightRangeValue,
      priceValue,
      amount0
    );
    console.log("liquidity: " + liquidity);

    const _value1 = new Decimal(liquidity);
    const _value2 = this._getDiverForDeltaY(leftRangeValue, priceValue);
    return _value1.mul(_value2).toString();
  }

  public static getAmount0FromAmount1(
    leftRangeValue: number, // pa
    rightRangeValue: number, // pb
    priceValue: number,
    amount1: string,
    token1: IToken
  ): string {
    const liquidity = this.getLiquidityFromAmount1(
      leftRangeValue,
      rightRangeValue,
      priceValue,
      amount1
    );

    console.log("liquidity: " + liquidity);

    const _value1 = new Decimal(liquidity);
    const _value2 = this._getDiverForDeltaX(priceValue, rightRangeValue);
    return _value1.mul(_value2).toString();
  }

  public static getAmountByLiquidity(
    leftRangeValue: number | string,
    rightRangeValue: number | string,
    priceValue: number | string,
    liquidity: string,
    token0: IToken,
    token1: IToken
  ): { amount0: string; amount1: string } {
    const pc = new Decimal(priceValue);

    const _value1 = new Decimal(liquidity);

    if (pc.lessThan(leftRangeValue) === true) {
      const _value2 = this._getDiverForDeltaX(leftRangeValue, rightRangeValue);
      return {
        amount0: toDecimalPlaces(_value1.mul(_value2), token0.display_exponent),
        amount1: "0",
      };
    } else if (pc.greaterThan(rightRangeValue) === true) {
      const _value2 = this._getDiverForDeltaY(leftRangeValue, rightRangeValue);
      return {
        amount0: "0",
        amount1: toDecimalPlaces(_value1.mul(_value2), token1.display_exponent),
      };
    }
    const deltaXDiver = this._getDiverForDeltaX(priceValue, rightRangeValue);
    const deltaYDiver = this._getDiverForDeltaY(leftRangeValue, priceValue);
    return {
      amount0: toDecimalPlaces(_value1.mul(deltaXDiver), token0.display_exponent),
      amount1: toDecimalPlaces(_value1.mul(deltaYDiver), token1.display_exponent),
    };
  }
}
