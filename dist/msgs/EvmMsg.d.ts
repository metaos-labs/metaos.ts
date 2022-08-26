import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgEthereumTx as MsgEthereumTx_pb } from "../proto/ethermint/evm/v1/tx";
export declare class MsgEthereumTx extends BaseMsg {
    protoMsg: MsgEthereumTx_pb;
    constructor(msg: MsgEthereumTx_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgEthereumTx {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgEthereumTx_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgEthereumTx_pb;
        fromJSON(object: any): MsgEthereumTx_pb;
        toJSON(message: MsgEthereumTx_pb): unknown;
        fromPartial<I extends {
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } & {
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["data"], "typeUrl" | "value">, never>) | undefined;
            size?: number | undefined;
            hash?: string | undefined;
            from?: string | undefined;
        } & Record<Exclude<keyof I, "data" | "size" | "hash" | "from">, never>>(object: I): MsgEthereumTx_pb;
    };
    interface Proto extends MsgEthereumTx_pb {
    }
}
