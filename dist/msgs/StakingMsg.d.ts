import { BaseMsg } from './BaseMsg';
import { MsgCreateValidator as MsgCreateValidator_pb, MsgEditValidator as MsgEditValidator_pb, MsgDelegate as MsgDelegate_pb, MsgBeginRedelegate as MsgBeginRedelegate_pb, MsgUndelegate as MsgUndelegate_pb } from "../proto/cosmos/staking/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
export declare class MsgCreateValidator extends BaseMsg {
    protoMsg: MsgCreateValidator_pb;
    constructor(msg: MsgCreateValidator_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCreateValidator {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCreateValidator_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreateValidator_pb;
        fromJSON(object: any): MsgCreateValidator_pb;
        toJSON(message: MsgCreateValidator_pb): unknown;
        fromPartial<I extends {
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            commission?: {
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            pubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            value?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["description"], "moniker" | "identity" | "website" | "securityContact" | "details">, never>) | undefined;
            commission?: ({
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } & {
                rate?: string | undefined;
                maxRate?: string | undefined;
                maxChangeRate?: string | undefined;
            } & Record<Exclude<keyof I["commission"], "rate" | "maxRate" | "maxChangeRate">, never>) | undefined;
            minSelfDelegation?: string | undefined;
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            pubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["pubkey"], "value" | "typeUrl">, never>) | undefined;
            value?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["value"], "denom" | "amount">, never>) | undefined;
        } & Record<Exclude<keyof I, "description" | "commission" | "minSelfDelegation" | "delegatorAddress" | "validatorAddress" | "pubkey" | "value">, never>>(object: I): MsgCreateValidator_pb;
    };
    interface Proto extends MsgCreateValidator_pb {
    }
}
export declare class MsgEditValidator extends BaseMsg {
    protoMsg: MsgEditValidator_pb;
    constructor(msg: MsgEditValidator_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgEditValidator {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgEditValidator_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgEditValidator_pb;
        fromJSON(object: any): MsgEditValidator_pb;
        toJSON(message: MsgEditValidator_pb): unknown;
        fromPartial<I extends {
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            validatorAddress?: string | undefined;
            commissionRate?: string | undefined;
            minSelfDelegation?: string | undefined;
        } & {
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["description"], "moniker" | "identity" | "website" | "securityContact" | "details">, never>) | undefined;
            validatorAddress?: string | undefined;
            commissionRate?: string | undefined;
            minSelfDelegation?: string | undefined;
        } & Record<Exclude<keyof I, "description" | "minSelfDelegation" | "validatorAddress" | "commissionRate">, never>>(object: I): MsgEditValidator_pb;
    };
    interface Proto extends MsgEditValidator_pb {
    }
}
export declare class MsgDelegate extends BaseMsg {
    protoMsg: MsgDelegate_pb;
    constructor(msg: MsgDelegate_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgDelegate {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgDelegate_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDelegate_pb;
        fromJSON(object: any): MsgDelegate_pb;
        toJSON(message: MsgDelegate_pb): unknown;
        fromPartial<I extends {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["amount"], "denom" | "amount">, never>) | undefined;
        } & Record<Exclude<keyof I, "delegatorAddress" | "validatorAddress" | "amount">, never>>(object: I): MsgDelegate_pb;
    };
    interface Proto extends MsgDelegate_pb {
    }
}
export declare class MsgBeginRedelegate extends BaseMsg {
    protoMsg: MsgBeginRedelegate_pb;
    constructor(msg: MsgBeginRedelegate_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgBeginRedelegate {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgBeginRedelegate_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgBeginRedelegate_pb;
        fromJSON(object: any): MsgBeginRedelegate_pb;
        toJSON(message: MsgBeginRedelegate_pb): unknown;
        fromPartial<I extends {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["amount"], "denom" | "amount">, never>) | undefined;
        } & Record<Exclude<keyof I, "delegatorAddress" | "amount" | "validatorSrcAddress" | "validatorDstAddress">, never>>(object: I): MsgBeginRedelegate_pb;
    };
    interface Proto extends MsgBeginRedelegate_pb {
    }
}
export declare class MsgUndelegate extends BaseMsg {
    protoMsg: MsgUndelegate_pb;
    constructor(msg: MsgUndelegate_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgUndelegate {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgUndelegate_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgUndelegate_pb;
        fromJSON(object: any): MsgUndelegate_pb;
        toJSON(message: MsgUndelegate_pb): unknown;
        fromPartial<I extends {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["amount"], "denom" | "amount">, never>) | undefined;
        } & Record<Exclude<keyof I, "delegatorAddress" | "validatorAddress" | "amount">, never>>(object: I): MsgUndelegate_pb;
    };
    interface Proto extends MsgUndelegate_pb {
    }
}
