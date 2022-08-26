import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgSend as MsgSend_pb,
  MsgMultiSend as MsgMultiSend_pb,
} from "../../proto/cosmos/bank/v1beta1/tx";

export class MsgSend extends BaseMsg {
  public protoMsg: MsgSend_pb;
  constructor(msg: MsgSend_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSend.typeUrl,
      value: MsgSend_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSend {
  export const typeUrl: string = `/${protobufPackage}.MsgSend`;
  export const Proto = MsgSend_pb;
  export interface Proto extends MsgSend_pb {}
}

export class MsgMultiSend extends BaseMsg {
  public protoMsg: MsgMultiSend_pb;
  constructor(msg: MsgMultiSend_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgMultiSend.typeUrl,
      value: MsgMultiSend_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgMultiSend {
  export const typeUrl: string = `/${protobufPackage}.MsgMultiSend`;
  export const Proto = MsgMultiSend_pb;
  export interface Proto extends MsgMultiSend_pb {}
}


