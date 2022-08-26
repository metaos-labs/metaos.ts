import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgSend as MsgSend_pb,
} from "../proto/nft/tx";

export class MsgSendNft extends BaseMsg {
  public protoMsg: MsgSend_pb;
  constructor(msg: MsgSend_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSendNft.typeUrl,
      value: MsgSend_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSendNft {
  export const typeUrl: string = `/${protobufPackage}.MsgSend`;
  export const Proto = MsgSend_pb;
  export interface Proto extends MsgSend_pb {}
}


