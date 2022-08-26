import { MsgCreatePool as MsgCreatePool_pb, MsgCreatePosition as MsgCreatePosition_pb, MsgIncreaseLiquidity as MsgIncreaseLiquidity_pb, MsgDecreaseLiquidity as MsgDecreaseLiquidity_pb, MsgCollect as MsgCollect_pb, MsgCollectReward as MsgCollectReward_pb, MsgSwapExactIn as MsgSwapExactIn_pb, MsgSwapExactOut as MsgSwapExactOut_pb, MsgCollectFeeProtocol as MsgCollectFeeProtocol_pb, MsgGovCorePool as MsgGovCorePool_pb } from "../proto/swap/tx";
import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
export declare class MsgCollectReward extends BaseMsg {
    protoMsg: MsgCollectReward_pb;
    constructor(msg: MsgCollectReward_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCollectReward {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCollectReward_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCollectReward_pb;
        fromJSON(object: any): MsgCollectReward_pb;
        toJSON(message: MsgCollectReward_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            tokenId?: string | undefined;
            recipient?: string | undefined;
            collectOnly?: boolean | undefined;
        } & {
            creator?: string | undefined;
            tokenId?: string | undefined;
            recipient?: string | undefined;
            collectOnly?: boolean | undefined;
        } & Record<Exclude<keyof I, "creator" | "tokenId" | "recipient" | "collectOnly">, never>>(object: I): MsgCollectReward_pb;
    };
    interface Proto extends MsgCollectReward_pb {
    }
}
export declare class MsgSwapExactOut extends BaseMsg {
    protoMsg: MsgSwapExactOut_pb;
    constructor(msg: MsgSwapExactOut_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSwapExactOut {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSwapExactOut_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSwapExactOut_pb;
        fromJSON(object: any): MsgSwapExactOut_pb;
        toJSON(message: MsgSwapExactOut_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            recipient?: string | undefined;
            amountOut?: string | undefined;
            amountInMax?: string | undefined;
            denoms?: string[] | undefined;
            fees?: number[] | undefined;
            deadline?: Date | undefined;
        } & {
            creator?: string | undefined;
            recipient?: string | undefined;
            amountOut?: string | undefined;
            amountInMax?: string | undefined;
            denoms?: (string[] & string[] & Record<Exclude<keyof I["denoms"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            fees?: (number[] & number[] & Record<Exclude<keyof I["fees"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            deadline?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "recipient" | "amountOut" | "amountInMax" | "denoms" | "fees" | "deadline">, never>>(object: I): MsgSwapExactOut_pb;
    };
    interface Proto extends MsgSwapExactOut_pb {
    }
}
export declare class MsgSwapExactIn extends BaseMsg {
    protoMsg: MsgSwapExactIn_pb;
    constructor(msg: MsgSwapExactIn_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSwapExactIn {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSwapExactIn_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSwapExactIn_pb;
        fromJSON(object: any): MsgSwapExactIn_pb;
        toJSON(message: MsgSwapExactIn_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            recipient?: string | undefined;
            amountIn?: string | undefined;
            amountOutMin?: string | undefined;
            denoms?: string[] | undefined;
            fees?: number[] | undefined;
            deadline?: Date | undefined;
        } & {
            creator?: string | undefined;
            recipient?: string | undefined;
            amountIn?: string | undefined;
            amountOutMin?: string | undefined;
            denoms?: (string[] & string[] & Record<Exclude<keyof I["denoms"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            fees?: (number[] & number[] & Record<Exclude<keyof I["fees"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            deadline?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "recipient" | "denoms" | "fees" | "deadline" | "amountIn" | "amountOutMin">, never>>(object: I): MsgSwapExactIn_pb;
    };
    interface Proto extends MsgSwapExactIn_pb {
    }
}
export declare class MsgCreatePool extends BaseMsg {
    protoMsg: MsgCreatePool_pb;
    constructor(msg: MsgCreatePool_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCreatePool {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCreatePool_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreatePool_pb;
        fromJSON(object: any): MsgCreatePool_pb;
        toJSON(message: MsgCreatePool_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            denom0?: string | undefined;
            denom1?: string | undefined;
            fee?: number | undefined;
            sqrtPrice?: string | undefined;
        } & {
            creator?: string | undefined;
            denom0?: string | undefined;
            denom1?: string | undefined;
            fee?: number | undefined;
            sqrtPrice?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "denom0" | "denom1" | "fee" | "sqrtPrice">, never>>(object: I): MsgCreatePool_pb;
    };
    interface Proto extends MsgCreatePool_pb {
    }
}
export declare class MsgCollect extends BaseMsg {
    protoMsg: MsgCollect_pb;
    constructor(msg: MsgCollect_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCollect {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCollect_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCollect_pb;
        fromJSON(object: any): MsgCollect_pb;
        toJSON(message: MsgCollect_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            tokenId?: string | undefined;
            recipient?: string | undefined;
            amount0Max?: string | undefined;
            amount1Max?: string | undefined;
            collectOnly?: boolean | undefined;
        } & {
            creator?: string | undefined;
            tokenId?: string | undefined;
            recipient?: string | undefined;
            amount0Max?: string | undefined;
            amount1Max?: string | undefined;
            collectOnly?: boolean | undefined;
        } & Record<Exclude<keyof I, "creator" | "tokenId" | "recipient" | "collectOnly" | "amount0Max" | "amount1Max">, never>>(object: I): MsgCollect_pb;
    };
    interface Proto extends MsgCollect_pb {
    }
}
export declare class MsgCreatePosition extends BaseMsg {
    protoMsg: MsgCreatePosition_pb;
    constructor(msg: MsgCreatePosition_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCreatePosition {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCreatePosition_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreatePosition_pb;
        fromJSON(object: any): MsgCreatePosition_pb;
        toJSON(message: MsgCreatePosition_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            denom0?: string | undefined;
            denom1?: string | undefined;
            fee?: number | undefined;
            tickLower?: number | undefined;
            tickUpper?: number | undefined;
            amount0Desired?: string | undefined;
            amount1Desired?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            recipient?: string | undefined;
            deadline?: Date | undefined;
        } & {
            creator?: string | undefined;
            denom0?: string | undefined;
            denom1?: string | undefined;
            fee?: number | undefined;
            tickLower?: number | undefined;
            tickUpper?: number | undefined;
            amount0Desired?: string | undefined;
            amount1Desired?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            recipient?: string | undefined;
            deadline?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "recipient" | "deadline" | "denom0" | "denom1" | "fee" | "tickLower" | "tickUpper" | "amount0Desired" | "amount1Desired" | "amount0Min" | "amount1Min">, never>>(object: I): MsgCreatePosition_pb;
    };
    interface Proto extends MsgCreatePosition_pb {
    }
}
export declare class MsgDecreaseLiquidity extends BaseMsg {
    protoMsg: MsgDecreaseLiquidity_pb;
    constructor(msg: MsgDecreaseLiquidity_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgDecreaseLiquidity {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgDecreaseLiquidity_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDecreaseLiquidity_pb;
        fromJSON(object: any): MsgDecreaseLiquidity_pb;
        toJSON(message: MsgDecreaseLiquidity_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            tokenId?: string | undefined;
            liquidity?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            deadline?: Date | undefined;
        } & {
            creator?: string | undefined;
            tokenId?: string | undefined;
            liquidity?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            deadline?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "tokenId" | "deadline" | "amount0Min" | "amount1Min" | "liquidity">, never>>(object: I): MsgDecreaseLiquidity_pb;
    };
    interface Proto extends MsgDecreaseLiquidity_pb {
    }
}
export declare class MsgIncreaseLiquidity extends BaseMsg {
    protoMsg: MsgIncreaseLiquidity_pb;
    constructor(msg: MsgIncreaseLiquidity_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgIncreaseLiquidity {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgIncreaseLiquidity_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgIncreaseLiquidity_pb;
        fromJSON(object: any): MsgIncreaseLiquidity_pb;
        toJSON(message: MsgIncreaseLiquidity_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            tokenId?: string | undefined;
            amount0Desired?: string | undefined;
            amount1Desired?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            deadline?: Date | undefined;
        } & {
            creator?: string | undefined;
            tokenId?: string | undefined;
            amount0Desired?: string | undefined;
            amount1Desired?: string | undefined;
            amount0Min?: string | undefined;
            amount1Min?: string | undefined;
            deadline?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "tokenId" | "deadline" | "amount0Desired" | "amount1Desired" | "amount0Min" | "amount1Min">, never>>(object: I): MsgIncreaseLiquidity_pb;
    };
    interface Proto extends MsgIncreaseLiquidity_pb {
    }
}
export declare class MsgCollectFeeProtocol extends BaseMsg {
    protoMsg: MsgCollectFeeProtocol_pb;
    constructor(msg: MsgCollectFeeProtocol_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCollectFeeProtocol {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCollectFeeProtocol_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCollectFeeProtocol_pb;
        fromJSON(object: any): MsgCollectFeeProtocol_pb;
        toJSON(message: MsgCollectFeeProtocol_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            address?: string | undefined;
        } & {
            creator?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "address">, never>>(object: I): MsgCollectFeeProtocol_pb;
    };
    interface Proto extends MsgCollectFeeProtocol_pb {
    }
}
export declare class MsgGovCorePool extends BaseMsg {
    protoMsg: MsgGovCorePool_pb;
    constructor(msg: MsgGovCorePool_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgGovCorePool {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgGovCorePool_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgGovCorePool_pb;
        fromJSON(object: any): MsgGovCorePool_pb;
        toJSON(message: MsgGovCorePool_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            address?: string | undefined;
            action?: string | undefined;
            triggerTime?: Date | undefined;
        } & {
            creator?: string | undefined;
            address?: string | undefined;
            action?: string | undefined;
            triggerTime?: Date | undefined;
        } & Record<Exclude<keyof I, "creator" | "address" | "action" | "triggerTime">, never>>(object: I): MsgGovCorePool_pb;
    };
    interface Proto extends MsgGovCorePool_pb {
    }
}
