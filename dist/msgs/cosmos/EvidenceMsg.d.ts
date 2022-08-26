import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgSubmitEvidence as MsgSubmitEvidence_pb } from "../../proto/cosmos/evidence/v1beta1/tx";
export declare class MsgSubmitEvidence extends BaseMsg {
    protoMsg: MsgSubmitEvidence_pb;
    constructor(msg: MsgSubmitEvidence_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSubmitEvidence {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSubmitEvidence_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSubmitEvidence_pb;
        fromJSON(object: any): MsgSubmitEvidence_pb;
        toJSON(message: MsgSubmitEvidence_pb): unknown;
        fromPartial<I extends {
            submitter?: string | undefined;
            evidence?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            submitter?: string | undefined;
            evidence?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["evidence"], "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I, "submitter" | "evidence">, never>>(object: I): MsgSubmitEvidence_pb;
    };
    interface Proto extends MsgSubmitEvidence_pb {
    }
}
