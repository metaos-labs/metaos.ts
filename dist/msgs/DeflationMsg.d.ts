import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGovRepurchase as MsgGovRepurchase_pb } from "../proto/deflation/tx";
export declare class MsgGovRepurchase extends BaseMsg {
    protoMsg: MsgGovRepurchase_pb;
    constructor(msg: MsgGovRepurchase_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgGovRepurchase {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgGovRepurchase_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgGovRepurchase_pb;
        fromJSON(object: any): MsgGovRepurchase_pb;
        toJSON(message: MsgGovRepurchase_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            repurchase?: {
                denom?: string | undefined;
                sellMinAmount?: string | undefined;
                sellMaxAmount?: string | undefined;
                denoms?: string[] | undefined;
                fees?: number[] | undefined;
            } | undefined;
        } & {
            creator?: string | undefined;
            repurchase?: ({
                denom?: string | undefined;
                sellMinAmount?: string | undefined;
                sellMaxAmount?: string | undefined;
                denoms?: string[] | undefined;
                fees?: number[] | undefined;
            } & {
                denom?: string | undefined;
                sellMinAmount?: string | undefined;
                sellMaxAmount?: string | undefined;
                denoms?: (string[] & string[] & Record<Exclude<keyof I["repurchase"]["denoms"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
                fees?: (number[] & number[] & Record<Exclude<keyof I["repurchase"]["fees"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            } & Record<Exclude<keyof I["repurchase"], "denom" | "sellMinAmount" | "sellMaxAmount" | "denoms" | "fees">, never>) | undefined;
        } & Record<Exclude<keyof I, "creator" | "repurchase">, never>>(object: I): MsgGovRepurchase_pb;
    };
    interface Proto extends MsgGovRepurchase_pb {
    }
}
