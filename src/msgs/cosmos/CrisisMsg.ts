import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgVerifyInvariant as MsgVerifyInvariant_pb,
} from "../../proto/cosmos/crisis/v1beta1/tx";

export class MsgVerifyInvariant extends BaseMsg {
  public protoMsg: MsgVerifyInvariant_pb;
  constructor(msg: MsgVerifyInvariant_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgVerifyInvariant.typeUrl,
      value: MsgVerifyInvariant_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgVerifyInvariant {
  export const typeUrl: string = `/${protobufPackage}.MsgVerifyInvariant`;
  export const Proto = MsgVerifyInvariant_pb;
  export interface Proto extends MsgVerifyInvariant_pb {}
}


