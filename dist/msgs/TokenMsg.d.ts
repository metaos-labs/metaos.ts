import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgIssue as MsgIssue_pb, MsgMint as MsgMint_pb, MsgBurn as MsgBurn_pb, MsgTransferOwnership as MsgTransferOwnership_pb, MsgConfirmOwnership as MsgConfirmOwnership_pb } from "../proto/token/tx";
export declare class MsgIssue extends BaseMsg {
    protoMsg: MsgIssue_pb;
    constructor(msg: MsgIssue_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgIssue {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgIssue_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgIssue_pb;
        fromJSON(object: any): MsgIssue_pb;
        toJSON(message: MsgIssue_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            initialSupply?: string | undefined;
            maxSupply?: string | undefined;
            description?: string | undefined;
        } & {
            creator?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            initialSupply?: string | undefined;
            maxSupply?: string | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I, "symbol" | "creator" | "name" | "decimals" | "initialSupply" | "maxSupply" | "description">, never>>(object: I): MsgIssue_pb;
    };
    interface Proto extends MsgIssue_pb {
    }
}
export declare class MsgMint extends BaseMsg {
    protoMsg: MsgMint_pb;
    constructor(msg: MsgMint_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgMint {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgMint_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgMint_pb;
        fromJSON(object: any): MsgMint_pb;
        toJSON(message: MsgMint_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            amount?: string | undefined;
        } & {
            creator?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "amount">, never>>(object: I): MsgMint_pb;
    };
    interface Proto extends MsgMint_pb {
    }
}
export declare class MsgBurn extends BaseMsg {
    protoMsg: MsgBurn_pb;
    constructor(msg: MsgBurn_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgBurn {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgBurn_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgBurn_pb;
        fromJSON(object: any): MsgBurn_pb;
        toJSON(message: MsgBurn_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            amount?: string | undefined;
        } & {
            creator?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "amount">, never>>(object: I): MsgBurn_pb;
    };
    interface Proto extends MsgBurn_pb {
    }
}
export declare class MsgTransferOwnership extends BaseMsg {
    protoMsg: MsgTransferOwnership_pb;
    constructor(msg: MsgTransferOwnership_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgTransferOwnership {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgTransferOwnership_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgTransferOwnership_pb;
        fromJSON(object: any): MsgTransferOwnership_pb;
        toJSON(message: MsgTransferOwnership_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            denom?: string | undefined;
            address?: string | undefined;
        } & {
            creator?: string | undefined;
            denom?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "denom" | "address">, never>>(object: I): MsgTransferOwnership_pb;
    };
    interface Proto extends MsgTransferOwnership_pb {
    }
}
export declare class MsgConfirmOwnership extends BaseMsg {
    protoMsg: MsgConfirmOwnership_pb;
    constructor(msg: MsgConfirmOwnership_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgConfirmOwnership {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgConfirmOwnership_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgConfirmOwnership_pb;
        fromJSON(object: any): MsgConfirmOwnership_pb;
        toJSON(message: MsgConfirmOwnership_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            denom?: string | undefined;
        } & {
            creator?: string | undefined;
            denom?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "denom">, never>>(object: I): MsgConfirmOwnership_pb;
    };
    interface Proto extends MsgConfirmOwnership_pb {
    }
}
