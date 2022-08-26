import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGrant as MsgGrant_pb, MsgExec as MsgExec_pb, MsgRevoke as MsgRevoke_pb } from "../../proto/cosmos/authz/v1beta1/tx";
export declare class MsgGrant extends BaseMsg {
    protoMsg: MsgGrant_pb;
    constructor(msg: MsgGrant_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgGrant {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgGrant_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgGrant_pb;
        fromJSON(object: any): MsgGrant_pb;
        toJSON(message: MsgGrant_pb): unknown;
        fromPartial<I extends {
            granter?: string | undefined;
            grantee?: string | undefined;
            grant?: {
                authorization?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: Date | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            grant?: ({
                authorization?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: Date | undefined;
            } & {
                authorization?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["grant"]["authorization"], "typeUrl" | "value">, never>) | undefined;
                expiration?: Date | undefined;
            } & Record<Exclude<keyof I["grant"], "authorization" | "expiration">, never>) | undefined;
        } & Record<Exclude<keyof I, "granter" | "grantee" | "grant">, never>>(object: I): MsgGrant_pb;
    };
    interface Proto extends MsgGrant_pb {
    }
}
export declare class MsgExec extends BaseMsg {
    protoMsg: MsgExec_pb;
    constructor(msg: MsgExec_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgExec {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgExec_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgExec_pb;
        fromJSON(object: any): MsgExec_pb;
        toJSON(message: MsgExec_pb): unknown;
        fromPartial<I extends {
            grantee?: string | undefined;
            msgs?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            grantee?: string | undefined;
            msgs?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["msgs"][number], "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["msgs"], number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
        } & Record<Exclude<keyof I, "grantee" | "msgs">, never>>(object: I): MsgExec_pb;
    };
    interface Proto extends MsgExec_pb {
    }
}
export declare class MsgRevoke extends BaseMsg {
    protoMsg: MsgRevoke_pb;
    constructor(msg: MsgRevoke_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgRevoke {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgRevoke_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRevoke_pb;
        fromJSON(object: any): MsgRevoke_pb;
        toJSON(message: MsgRevoke_pb): unknown;
        fromPartial<I extends {
            granter?: string | undefined;
            grantee?: string | undefined;
            msgTypeUrl?: string | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            msgTypeUrl?: string | undefined;
        } & Record<Exclude<keyof I, "granter" | "grantee" | "msgTypeUrl">, never>>(object: I): MsgRevoke_pb;
    };
    interface Proto extends MsgRevoke_pb {
    }
}
