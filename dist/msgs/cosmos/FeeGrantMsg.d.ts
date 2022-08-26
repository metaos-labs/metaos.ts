import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGrantAllowance as MsgGrantAllowance_pb, MsgRevokeAllowance as MsgRevokeAllowance_pb } from "../../proto/cosmos/feegrant/v1beta1/tx";
export declare class MsgGrantAllowance extends BaseMsg {
    protoMsg: MsgGrantAllowance_pb;
    constructor(msg: MsgGrantAllowance_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgGrantAllowance {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgGrantAllowance_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgGrantAllowance_pb;
        fromJSON(object: any): MsgGrantAllowance_pb;
        toJSON(message: MsgGrantAllowance_pb): unknown;
        fromPartial<I extends {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["allowance"], "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I, "granter" | "grantee" | "allowance">, never>>(object: I): MsgGrantAllowance_pb;
    };
    interface Proto extends MsgGrantAllowance_pb {
    }
}
export declare class MsgRevokeAllowance extends BaseMsg {
    protoMsg: MsgRevokeAllowance_pb;
    constructor(msg: MsgRevokeAllowance_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgRevokeAllowance {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgRevokeAllowance_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRevokeAllowance_pb;
        fromJSON(object: any): MsgRevokeAllowance_pb;
        toJSON(message: MsgRevokeAllowance_pb): unknown;
        fromPartial<I extends {
            granter?: string | undefined;
            grantee?: string | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
        } & Record<Exclude<keyof I, "granter" | "grantee">, never>>(object: I): MsgRevokeAllowance_pb;
    };
    interface Proto extends MsgRevokeAllowance_pb {
    }
}
