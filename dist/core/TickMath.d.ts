import Decimal from "decimal.js";
import { Fee_Amount } from "../constants";
import { Token } from "../types";
export declare class TickMath {
    static INVALID_TICK: number;
    static MIN_TICK: number;
    static MIN_TICK_VALUE: string;
    static MAX_TICK: number;
    static MAX_TICK_VALUE: string;
    static nearestUsableTick: (tick: number, tickSpacing: number) => number;
    private static priceToClosestTick;
    /**
     * Compute nearest tick of price for input
     * @param feeAmount
     * @param value
     */
    static getNearestTickByPrice(feeAmount: Fee_Amount, value: string): number;
    static getFormattedPriceByTick(tick: Decimal.Value, fee: Fee_Amount): string;
    static getPriceByTick(tick: Decimal.Value): string;
    static getNearestPriceByInput(feeAmount: Fee_Amount, price: string): string;
    static getPriceBySqrtPrice(sqrtPrice: string): string;
    static getSqrtPriceByPrice(price: string): string;
    static getBaseTickRange(fromToken: Token, toToken: Token, fee: Fee_Amount, leftRange: string, rightRange: string): {
        tickLower: number;
        tickUpper: number;
    };
    static getNearestLowestTick(fee: Fee_Amount): number;
    static getNearestHighestTick(fee: Fee_Amount): number;
    static getNearestPricesByFullTick(fee: Fee_Amount): {
        lowestPrice: string;
        highestPrice: string;
    };
    static isHighestTick(tick: Decimal.Value, fee: Fee_Amount): boolean;
    static isLowestTick(tick: Decimal.Value, fee: Fee_Amount): boolean;
}
