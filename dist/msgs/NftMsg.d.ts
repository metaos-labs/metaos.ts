import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgSend as MsgSend_pb } from "../proto/nft/tx";
export declare class MsgSendNft extends BaseMsg {
    protoMsg: MsgSend_pb;
    constructor(msg: MsgSend_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSendNft {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSend_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSend_pb;
        fromJSON(object: any): MsgSend_pb;
        toJSON(message: MsgSend_pb): unknown;
        fromPartial<I extends {
            classId?: string | undefined;
            id?: string | undefined;
            sender?: string | undefined;
            receiver?: string | undefined;
        } & {
            classId?: string | undefined;
            id?: string | undefined;
            sender?: string | undefined;
            receiver?: string | undefined;
        } & Record<Exclude<keyof I, "classId" | "id" | "sender" | "receiver">, never>>(object: I): MsgSend_pb;
    };
    interface Proto extends MsgSend_pb {
    }
}
