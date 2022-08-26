import {
  protobufPackage,
  MsgCreateRandSwapRewardConfig as MsgCreateRandSwapRewardConfig_pb,
  MsgOpenRandSwapReward as MsgOpenRandSwapReward_pb,
  MsgCloseRandSwapReward as MsgCloseRandSwapReward_pb,
  MsgUpdateRandSwapRewardConfig as MsgUpdateRandSwapRewardConfig_pb,
  MsgCollectRandSwapReward as MsgCollectRandSwapReward_pb,
  MsgCreateLiquidityRewardConfig as MsgCreateLiquidityRewardConfig_pb,
  MsgUpdateLiquidityRewardConfig as MsgUpdateLiquidityRewardConfig_pb,
  MsgOpenLiquidityReward as MsgOpenLiquidityReward_pb,
  MsgCloseLiquidityReward as MsgCloseLiquidityReward_pb,
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

export class MsgOpenRandSwapReward extends BaseMsg {
  public protoMsg: MsgOpenRandSwapReward_pb;
  constructor(msg: MsgOpenRandSwapReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgOpenRandSwapReward.typeUrl,
      value: MsgOpenRandSwapReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgOpenRandSwapReward {
  export const typeUrl: string = `/${protobufPackage}.MsgOpenRandSwapReward`;
  export const Proto = MsgOpenRandSwapReward_pb;
  export interface Proto extends MsgOpenRandSwapReward_pb {}
}

export class MsgCloseRandSwapReward extends BaseMsg {
  public protoMsg: MsgCloseRandSwapReward_pb;
  constructor(msg: MsgCloseRandSwapReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCloseRandSwapReward.typeUrl,
      value: MsgCloseRandSwapReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCloseRandSwapReward {
  export const typeUrl: string = `/${protobufPackage}.MsgCloseRandSwapReward`;
  export const Proto = MsgCloseRandSwapReward_pb;
  export interface Proto extends MsgCloseRandSwapReward_pb {}
}

export class MsgUpdateRandSwapRewardConfig extends BaseMsg {
  public protoMsg: MsgUpdateRandSwapRewardConfig_pb;
  constructor(msg: MsgUpdateRandSwapRewardConfig_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgUpdateRandSwapRewardConfig.typeUrl,
      value: MsgUpdateRandSwapRewardConfig_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgUpdateRandSwapRewardConfig {
  export const typeUrl: string = `/${protobufPackage}.MsgUpdateRandSwapRewardConfig`;
  export const Proto = MsgUpdateRandSwapRewardConfig_pb;
  export interface Proto extends MsgUpdateRandSwapRewardConfig_pb {}
}

export class MsgCreateLiquidityRewardConfig extends BaseMsg {
  public protoMsg: MsgCreateLiquidityRewardConfig_pb;
  constructor(msg: MsgCreateLiquidityRewardConfig_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreateLiquidityRewardConfig.typeUrl,
      value: MsgCreateLiquidityRewardConfig_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreateLiquidityRewardConfig {
  export const typeUrl: string = `/${protobufPackage}.MsgCreateLiquidityRewardConfig`;
  export const Proto = MsgCreateLiquidityRewardConfig_pb;
  export interface Proto extends MsgCreateLiquidityRewardConfig_pb {}
}

export class MsgUpdateLiquidityRewardConfig extends BaseMsg {
  public protoMsg: MsgUpdateLiquidityRewardConfig_pb;
  constructor(msg: MsgUpdateLiquidityRewardConfig_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgUpdateLiquidityRewardConfig.typeUrl,
      value: MsgUpdateLiquidityRewardConfig_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgUpdateLiquidityRewardConfig {
  export const typeUrl: string = `/${protobufPackage}.MsgUpdateLiquidityRewardConfig`;
  export const Proto = MsgUpdateLiquidityRewardConfig_pb;
  export interface Proto extends MsgUpdateLiquidityRewardConfig_pb {}
}

export class MsgOpenLiquidityReward extends BaseMsg {
  public protoMsg: MsgOpenLiquidityReward_pb;
  constructor(msg: MsgOpenLiquidityReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgOpenLiquidityReward.typeUrl,
      value: MsgOpenLiquidityReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgOpenLiquidityReward {
  export const typeUrl: string = `/${protobufPackage}.MsgOpenLiquidityReward`;
  export const Proto = MsgOpenLiquidityReward_pb;
  export interface Proto extends MsgOpenLiquidityReward_pb {}
}

export class MsgCloseLiquidityReward extends BaseMsg {
  public protoMsg: MsgCloseLiquidityReward_pb;
  constructor(msg: MsgCloseLiquidityReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCloseLiquidityReward.typeUrl,
      value: MsgCloseLiquidityReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCloseLiquidityReward {
  export const typeUrl: string = `/${protobufPackage}.MsgCloseLiquidityReward`;
  export const Proto = MsgCloseLiquidityReward_pb;
  export interface Proto extends MsgCloseLiquidityReward_pb {}
}
