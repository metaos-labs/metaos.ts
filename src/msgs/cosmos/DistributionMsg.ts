import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgFundCommunityPool as MsgFundCommunityPool_pb,
  MsgSetWithdrawAddress as MsgSetWithdrawAddress_pb,
  MsgWithdrawDelegatorReward as MsgWithdrawDelegatorReward_pb,
  MsgWithdrawValidatorCommission as MsgWithdrawValidatorCommission_pb
} from "../../proto/cosmos/distribution/v1beta1/tx";

export class MsgFundCommunityPool extends BaseMsg {
  public protoMsg: MsgFundCommunityPool_pb;
  constructor(msg: MsgFundCommunityPool_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgFundCommunityPool.typeUrl,
      value: MsgFundCommunityPool_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgFundCommunityPool {
  export const typeUrl: string = `/${protobufPackage}.MsgFundCommunityPool`;
  export const Proto = MsgFundCommunityPool_pb;
  export interface Proto extends MsgFundCommunityPool_pb {}
}

export class MsgSetWithdrawAddress extends BaseMsg {
  public protoMsg: MsgSetWithdrawAddress_pb;
  constructor(msg: MsgSetWithdrawAddress_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSetWithdrawAddress.typeUrl,
      value: MsgSetWithdrawAddress_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSetWithdrawAddress {
  export const typeUrl: string = `/${protobufPackage}.MsgSetWithdrawAddress`;
  export const Proto = MsgSetWithdrawAddress_pb;
  export interface Proto extends MsgSetWithdrawAddress_pb {}
}

export class MsgWithdrawDelegatorReward extends BaseMsg {
  public protoMsg: MsgWithdrawDelegatorReward_pb;
  constructor(msg: MsgWithdrawDelegatorReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: MsgWithdrawDelegatorReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgWithdrawDelegatorReward {
  export const typeUrl: string = `/${protobufPackage}.MsgWithdrawDelegatorReward`;
  export const Proto = MsgWithdrawDelegatorReward_pb;
  export interface Proto extends MsgWithdrawDelegatorReward_pb {}
}

export class MsgWithdrawValidatorCommission extends BaseMsg {
  public protoMsg: MsgWithdrawValidatorCommission_pb;
  constructor(msg: MsgWithdrawValidatorCommission_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgWithdrawValidatorCommission.typeUrl,
      value: MsgWithdrawValidatorCommission_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgWithdrawValidatorCommission {
  export const typeUrl: string = `/${protobufPackage}.MsgWithdrawValidatorCommission`;
  export const Proto = MsgWithdrawValidatorCommission_pb;
  export interface Proto extends MsgWithdrawValidatorCommission_pb {}
}


