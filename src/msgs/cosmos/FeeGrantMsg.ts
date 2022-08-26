import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgGrantAllowance as MsgGrantAllowance_pb,
  MsgRevokeAllowance as MsgRevokeAllowance_pb
} from "../../proto/cosmos/feegrant/v1beta1/tx";

export class MsgGrantAllowance extends BaseMsg {
  public protoMsg: MsgGrantAllowance_pb;
  constructor(msg: MsgGrantAllowance_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgGrantAllowance.typeUrl,
      value: MsgGrantAllowance_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgGrantAllowance {
  export const typeUrl: string = `/${protobufPackage}.MsgGrantAllowance`;
  export const Proto = MsgGrantAllowance_pb;
  export interface Proto extends MsgGrantAllowance_pb {}
}

export class MsgRevokeAllowance extends BaseMsg {
  public protoMsg: MsgRevokeAllowance_pb;
  constructor(msg: MsgRevokeAllowance_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgRevokeAllowance.typeUrl,
      value: MsgRevokeAllowance_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgRevokeAllowance {
  export const typeUrl: string = `/${protobufPackage}.MsgRevokeAllowance`;
  export const Proto = MsgRevokeAllowance_pb;
  export interface Proto extends MsgRevokeAllowance_pb {}
}


