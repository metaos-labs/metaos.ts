import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgFundCommunityPool as MsgFundCommunityPool_pb, MsgSetWithdrawAddress as MsgSetWithdrawAddress_pb, MsgWithdrawDelegatorReward as MsgWithdrawDelegatorReward_pb, MsgWithdrawValidatorCommission as MsgWithdrawValidatorCommission_pb } from "../../proto/cosmos/distribution/v1beta1/tx";
export declare class MsgFundCommunityPool extends BaseMsg {
    protoMsg: MsgFundCommunityPool_pb;
    constructor(msg: MsgFundCommunityPool_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgFundCommunityPool {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgFundCommunityPool_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgFundCommunityPool_pb;
        fromJSON(object: any): MsgFundCommunityPool_pb;
        toJSON(message: MsgFundCommunityPool_pb): unknown;
        fromPartial<I extends {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            depositor?: string | undefined;
        } & {
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
            depositor?: string | undefined;
        } & Record<Exclude<keyof I, "amount" | "depositor">, never>>(object: I): MsgFundCommunityPool_pb;
    };
    interface Proto extends MsgFundCommunityPool_pb {
    }
}
export declare class MsgSetWithdrawAddress extends BaseMsg {
    protoMsg: MsgSetWithdrawAddress_pb;
    constructor(msg: MsgSetWithdrawAddress_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgSetWithdrawAddress {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgSetWithdrawAddress_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgSetWithdrawAddress_pb;
        fromJSON(object: any): MsgSetWithdrawAddress_pb;
        toJSON(message: MsgSetWithdrawAddress_pb): unknown;
        fromPartial<I extends {
            delegatorAddress?: string | undefined;
            withdrawAddress?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            withdrawAddress?: string | undefined;
        } & Record<Exclude<keyof I, "delegatorAddress" | "withdrawAddress">, never>>(object: I): MsgSetWithdrawAddress_pb;
    };
    interface Proto extends MsgSetWithdrawAddress_pb {
    }
}
export declare class MsgWithdrawDelegatorReward extends BaseMsg {
    protoMsg: MsgWithdrawDelegatorReward_pb;
    constructor(msg: MsgWithdrawDelegatorReward_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgWithdrawDelegatorReward {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgWithdrawDelegatorReward_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgWithdrawDelegatorReward_pb;
        fromJSON(object: any): MsgWithdrawDelegatorReward_pb;
        toJSON(message: MsgWithdrawDelegatorReward_pb): unknown;
        fromPartial<I extends {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
        } & Record<Exclude<keyof I, "delegatorAddress" | "validatorAddress">, never>>(object: I): MsgWithdrawDelegatorReward_pb;
    };
    interface Proto extends MsgWithdrawDelegatorReward_pb {
    }
}
export declare class MsgWithdrawValidatorCommission extends BaseMsg {
    protoMsg: MsgWithdrawValidatorCommission_pb;
    constructor(msg: MsgWithdrawValidatorCommission_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgWithdrawValidatorCommission {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgWithdrawValidatorCommission_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgWithdrawValidatorCommission_pb;
        fromJSON(object: any): MsgWithdrawValidatorCommission_pb;
        toJSON(message: MsgWithdrawValidatorCommission_pb): unknown;
        fromPartial<I extends {
            validatorAddress?: string | undefined;
        } & {
            validatorAddress?: string | undefined;
        } & Record<Exclude<keyof I, "validatorAddress">, never>>(object: I): MsgWithdrawValidatorCommission_pb;
    };
    interface Proto extends MsgWithdrawValidatorCommission_pb {
    }
}
