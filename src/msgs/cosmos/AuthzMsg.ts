import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgGrant as MsgGrant_pb,
  MsgExec as MsgExec_pb,
  MsgRevoke as MsgRevoke_pb,
} from "../../proto/cosmos/authz/v1beta1/tx";

export class MsgGrant extends BaseMsg {
  public protoMsg: MsgGrant_pb;
  constructor(msg: MsgGrant_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgGrant.typeUrl,
      value: MsgGrant_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgGrant {
  export const typeUrl: string = `/${protobufPackage}.MsgGrant`;
  export const Proto = MsgGrant_pb;
  export interface Proto extends MsgGrant_pb {}
}

export class MsgExec extends BaseMsg {
  public protoMsg: MsgExec_pb;
  constructor(msg: MsgExec_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgExec.typeUrl,
      value: MsgExec_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgExec {
  export const typeUrl: string = `/${protobufPackage}.MsgExec`;
  export const Proto = MsgExec_pb;
  export interface Proto extends MsgExec_pb {}
}

export class MsgRevoke extends BaseMsg {
  public protoMsg: MsgRevoke_pb;
  constructor(msg: MsgRevoke_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgExec.typeUrl,
      value: MsgRevoke_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgRevoke {
  export const typeUrl: string = `/${protobufPackage}.MsgRevoke`;
  export const Proto = MsgRevoke_pb;
  export interface Proto extends MsgRevoke_pb {}
}

