import {
  MsgCollect as MsgCollect_pb,
  MsgCollectReward as MsgCollectReward_pb,
  MsgCreatePool as MsgCreatePool_pb,
  MsgCreatePosition as MsgCreatePosition_pb,
  MsgDecreaseLiquidity as MsgDecreaseLiquidity_pb,
  MsgIncreaseLiquidity as MsgIncreaseLiquidity_pb,
  MsgSwapExactIn as MsgSwapExactIn_pb,
  MsgSwapExactOut as MsgSwapExactOut_pb,
  protobufPackage,
} from "../proto/swap/tx";
import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";

export class MsgCollectReward extends BaseMsg {
  public protoMsg: MsgCollectReward_pb;
  constructor(msg: MsgCollectReward_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCollectReward.typeUrl,
      value: MsgCollectReward_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCollectReward {
  export const typeUrl: string = `/${protobufPackage}.MsgCollectReward`;
  export const Proto = MsgCollectReward_pb;
  export interface Proto extends MsgCollectReward_pb {}
}

export class MsgSwapExactOut extends BaseMsg {
  public protoMsg: MsgSwapExactOut_pb;
  constructor(msg: MsgSwapExactOut_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSwapExactOut.typeUrl,
      value: MsgSwapExactOut_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSwapExactOut {
  export const typeUrl: string = `/${protobufPackage}.MsgSwapExactOut`;
  export const Proto = MsgSwapExactOut_pb;
  export interface Proto extends MsgSwapExactOut_pb {}
}

export class MsgSwapExactIn extends BaseMsg {
  public protoMsg: MsgSwapExactIn_pb;
  constructor(msg: MsgSwapExactIn_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSwapExactIn.typeUrl,
      value: MsgSwapExactIn_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSwapExactIn {
  export const typeUrl: string = `/${protobufPackage}.MsgSwapExactIn`;
  export const Proto = MsgSwapExactIn_pb;
  export interface Proto extends MsgSwapExactIn_pb {}
}

export class MsgCreatePool extends BaseMsg {
  public protoMsg: MsgCreatePool_pb;
  constructor(msg: MsgCreatePool_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreatePool.typeUrl,
      value: MsgCreatePool_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreatePool {
  export const typeUrl: string = `/${protobufPackage}.MsgCreatePool`;
  export const Proto = MsgCreatePool_pb;
  export interface Proto extends MsgCreatePool_pb {}
}

export class MsgCollect extends BaseMsg {
  public protoMsg: MsgCollect_pb;
  constructor(msg: MsgCollect_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCollect.typeUrl,
      value: MsgCollect_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCollect {
  export const typeUrl: string = `/${protobufPackage}.MsgCollect`;
  export const Proto = MsgCollect_pb;
  export interface Proto extends MsgCollect_pb {}
}

export class MsgCreatePosition extends BaseMsg {
  public protoMsg: MsgCreatePosition_pb;
  constructor(msg: MsgCreatePosition_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreatePosition.typeUrl,
      value: MsgCreatePosition_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreatePosition {
  export const typeUrl: string = `/${protobufPackage}.MsgCreatePosition`;
  export const Proto = MsgCreatePosition_pb;
  export interface Proto extends MsgCreatePosition_pb {}
}

export class MsgDecreaseLiquidity extends BaseMsg {
  public protoMsg: MsgDecreaseLiquidity_pb;
  constructor(msg: MsgDecreaseLiquidity_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgDecreaseLiquidity.typeUrl,
      value: MsgDecreaseLiquidity_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgDecreaseLiquidity {
  export const typeUrl: string = `/${protobufPackage}.MsgDecreaseLiquidity`;
  export const Proto = MsgDecreaseLiquidity_pb;
  export interface Proto extends MsgDecreaseLiquidity_pb {}
}

export class MsgIncreaseLiquidity extends BaseMsg {
  public protoMsg: MsgIncreaseLiquidity_pb;
  constructor(msg: MsgIncreaseLiquidity_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgIncreaseLiquidity.typeUrl,
      value: MsgIncreaseLiquidity_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgIncreaseLiquidity {
  export const typeUrl: string = `/${protobufPackage}.MsgIncreaseLiquidity`;
  export const Proto = MsgIncreaseLiquidity_pb;
  export interface Proto extends MsgIncreaseLiquidity_pb {}
}
