import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgSubmitEvidence as MsgSubmitEvidence_pb,
} from "../../proto/cosmos/evidence/v1beta1/tx";

export class MsgSubmitEvidence extends BaseMsg {
  public protoMsg: MsgSubmitEvidence_pb;
  constructor(msg: MsgSubmitEvidence_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSubmitEvidence.typeUrl,
      value: MsgSubmitEvidence_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSubmitEvidence {
  export const typeUrl: string = `/${protobufPackage}.MsgSubmitEvidence`;
  export const Proto = MsgSubmitEvidence_pb;
  export interface Proto extends MsgSubmitEvidence_pb {}
}


