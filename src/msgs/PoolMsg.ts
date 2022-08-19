import {
  MsgCreateRandSwapRewardConfig as MsgCreateRandSwapRewardConfig_pb,
  MsgCloseRandSwapReward as MsgCloseRandSwapReward_pb,
  MsgUpdateRandSwapRewardConfig as MsgUpdateRandSwapRewardConfig_pb,
  MsgCollectRandSwapReward as MsgCollectRandSwapReward_pb,
  MsgUpdateLiquidityRewardConfig as MsgUpdateLiquidityRewardConfig_pb,
  MsgCloseLiquidityReward as MsgCloseLiquidityReward_pb,
  protobufPackage,
} from "../proto/pool-incentives/tx";
import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";

export class MsgCreateRandSwapRewardConfig extends BaseMsg {
  public protoMsg: MsgCreateRandSwapRewardConfig_pb;
  constructor(msg: MsgCreateRandSwapRewardConfig_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreateRandSwapRewardConfig.typeUrl,
      value: MsgCreateRandSwapRewardConfig_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreateRandSwapRewardConfig {
  export const typeUrl: string = `/${protobufPackage}.MsgCreateRandSwapRewardConfig`;
  export const Proto = MsgCreateRandSwapRewardConfig_pb;
  export interface Proto extends MsgCreateRandSwapRewardConfig_pb {}
}

export class MsgCollectRandSwapReward extends BaseMsg {
  public protoMsg: MsgCollectRandSwapReward_pb;
  constructor(msg: MsgCollectRandSwapReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCollectRandSwapReward.typeUrl,
      value: MsgCollectRandSwapReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCollectRandSwapReward {
  export const typeUrl: string = `/${protobufPackage}.MsgCollectRandSwapReward`;
  export const Proto = MsgCollectRandSwapReward_pb;
  export interface Proto extends MsgCollectRandSwapReward_pb {}
}

