import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgStoreCode as MsgStoreCode_pb } from "../proto/cosmwasm/wasm/v1/tx";
export declare class MsgStoreCode extends BaseMsg {
    protoMsg: MsgStoreCode_pb;
    constructor(msg: MsgStoreCode_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgStoreCode {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgStoreCode_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgStoreCode_pb;
        fromJSON(object: any): MsgStoreCode_pb;
        toJSON(message: MsgStoreCode_pb): unknown;
        fromPartial<I extends {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: {
                permission?: import("../proto/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: ({
                permission?: import("../proto/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                permission?: import("../proto/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["instantiatePermission"], "permission" | "address">, never>) | undefined;
        } & Record<Exclude<keyof I, "sender" | "wasmByteCode" | "instantiatePermission">, never>>(object: I): MsgStoreCode_pb;
    };
    interface Proto extends MsgStoreCode_pb {
    }
}
