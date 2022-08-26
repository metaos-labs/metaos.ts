import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgGovRepurchase as MsgGovRepurchase_pb,
} from "../proto/deflation/tx";

export class MsgGovRepurchase extends BaseMsg {
  public protoMsg: MsgGovRepurchase_pb;
  constructor(msg: MsgGovRepurchase_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgGovRepurchase.typeUrl,
      value: MsgGovRepurchase_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgGovRepurchase {
  export const typeUrl: string = `/${protobufPackage}.MsgGovRepurchase`;
  export const Proto = MsgGovRepurchase_pb;
  export interface Proto extends MsgGovRepurchase_pb {}
}


