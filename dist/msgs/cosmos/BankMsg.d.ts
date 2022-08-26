import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgSend as MsgSend_pb, MsgMultiSend as MsgMultiSend_pb } from "../../proto/cosmos/bank/v1beta1/tx";
export declare class MsgSend extends BaseMsg {
    protoMsg: MsgSend_pb;
    constructor(msg: MsgSend_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSend {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSend_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSend_pb;
        fromJSON(object: any): MsgSend_pb;
        toJSON(message: MsgSend_pb): unknown;
        fromPartial<I extends {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["amount"][number], "amount" | "denom">, never>)[] & Record<Exclude<keyof I["amount"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
        } & Record<Exclude<keyof I, "fromAddress" | "toAddress" | "amount">, never>>(object: I): MsgSend_pb;
    };
    interface Proto extends MsgSend_pb {
    }
}
export declare class MsgMultiSend extends BaseMsg {
    protoMsg: MsgMultiSend_pb;
    constructor(msg: MsgMultiSend_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgMultiSend {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgMultiSend_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgMultiSend_pb;
        fromJSON(object: any): MsgMultiSend_pb;
        toJSON(message: MsgMultiSend_pb): unknown;
        fromPartial<I extends {
            inputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            outputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            inputs?: ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["inputs"][number]["coins"][number], "amount" | "denom">, never>)[] & Record<Exclude<keyof I["inputs"][number]["coins"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            } & Record<Exclude<keyof I["inputs"][number], "address" | "coins">, never>)[] & Record<Exclude<keyof I["inputs"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            outputs?: ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                coins?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["outputs"][number]["coins"][number], "amount" | "denom">, never>)[] & Record<Exclude<keyof I["outputs"][number]["coins"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            } & Record<Exclude<keyof I["outputs"][number], "address" | "coins">, never>)[] & Record<Exclude<keyof I["outputs"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
        } & Record<Exclude<keyof I, "inputs" | "outputs">, never>>(object: I): MsgMultiSend_pb;
    };
    interface Proto extends MsgMultiSend_pb {
    }
}
