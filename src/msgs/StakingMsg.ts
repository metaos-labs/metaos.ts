import { BaseMsg } from './BaseMsg';
import {
  protobufPackage,
  MsgCreateValidator as MsgCreateValidator_pb,
  MsgEditValidator as MsgEditValidator_pb,
  MsgDelegate as MsgDelegate_pb,
  MsgBeginRedelegate as MsgBeginRedelegate_pb,
  MsgUndelegate as MsgUndelegate_pb
} from "../proto/cosmos/staking/v1beta1/tx";
import {EncodeObject} from "@cosmjs/proto-signing";

export class MsgCreateValidator extends BaseMsg {
  public protoMsg: MsgCreateValidator_pb;
  constructor(msg: MsgCreateValidator_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreateValidator.typeUrl,
      value: MsgCreateValidator_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreateValidator {
  export const typeUrl: string = `/${protobufPackage}.MsgCreateValidator`;
  export const Proto = MsgCreateValidator_pb;
  export interface Proto extends MsgCreateValidator_pb {}
}

export class MsgEditValidator extends BaseMsg {
  public protoMsg: MsgEditValidator_pb;
  constructor(msg: MsgEditValidator_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgEditValidator.typeUrl,
      value: MsgEditValidator_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgEditValidator {
  export const typeUrl: string = `/${protobufPackage}.MsgEditValidator`;
  export const Proto = MsgEditValidator_pb;
  export interface Proto extends MsgEditValidator_pb {}
}

export class MsgDelegate extends BaseMsg {
  public protoMsg: MsgDelegate_pb;
  constructor(msg: MsgDelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgDelegate {
  export const typeUrl: string = `/${protobufPackage}.MsgDelegate`;
  export const Proto = MsgDelegate_pb;
  export interface Proto extends MsgDelegate_pb {}
}

export class MsgBeginRedelegate extends BaseMsg {
  public protoMsg: MsgBeginRedelegate_pb;
  constructor(msg: MsgBeginRedelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgBeginRedelegate.typeUrl,
      value: MsgBeginRedelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgBeginRedelegate {
  export const typeUrl: string = `/${protobufPackage}.MsgBeginRedelegate`;
  export const Proto = MsgBeginRedelegate_pb;
  export interface Proto extends MsgBeginRedelegate_pb {}
}

export class MsgUndelegate extends BaseMsg {
  public protoMsg: MsgUndelegate_pb;
  constructor(msg: MsgUndelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgUndelegate.typeUrl,
      value: MsgUndelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgUndelegate {
  export const typeUrl: string = `/${protobufPackage}.MsgUndelegate`;
  export const Proto = MsgUndelegate_pb;
  export interface Proto extends MsgUndelegate_pb {}
}
