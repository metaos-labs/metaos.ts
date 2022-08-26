import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgEthereumTx as MsgEthereumTx_pb
} from "../proto/ethermint/evm/v1/tx";

export class MsgEthereumTx extends BaseMsg {
  public protoMsg: MsgEthereumTx_pb;
  constructor(msg: MsgEthereumTx_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgEthereumTx.typeUrl,
      value: MsgEthereumTx_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgEthereumTx {
  export const typeUrl: string = `/${protobufPackage}.MsgEthereumTx`;
  export const Proto = MsgEthereumTx_pb;
  export interface Proto extends MsgEthereumTx_pb {}
}


