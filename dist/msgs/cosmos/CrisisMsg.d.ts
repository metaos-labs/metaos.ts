import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgVerifyInvariant as MsgVerifyInvariant_pb } from "../../proto/cosmos/crisis/v1beta1/tx";
export declare class MsgVerifyInvariant extends BaseMsg {
    protoMsg: MsgVerifyInvariant_pb;
    constructor(msg: MsgVerifyInvariant_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgVerifyInvariant {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgVerifyInvariant_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgVerifyInvariant_pb;
        fromJSON(object: any): MsgVerifyInvariant_pb;
        toJSON(message: MsgVerifyInvariant_pb): unknown;
        fromPartial<I extends {
            sender?: string | undefined;
            invariantModuleName?: string | undefined;
            invariantRoute?: string | undefined;
        } & {
            sender?: string | undefined;
            invariantModuleName?: string | undefined;
            invariantRoute?: string | undefined;
        } & Record<Exclude<keyof I, "sender" | "invariantModuleName" | "invariantRoute">, never>>(object: I): MsgVerifyInvariant_pb;
    };
    interface Proto extends MsgVerifyInvariant_pb {
    }
}
