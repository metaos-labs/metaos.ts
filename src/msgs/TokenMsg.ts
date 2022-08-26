import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgIssue as MsgIssue_pb,
  MsgMint as MsgMint_pb,
  MsgBurn as MsgBurn_pb,
  MsgTransferOwnership as MsgTransferOwnership_pb,
  MsgConfirmOwnership as MsgConfirmOwnership_pb,
} from "../proto/token/tx";

export class MsgIssue extends BaseMsg {
  public protoMsg: MsgIssue_pb;
  constructor(msg: MsgIssue_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgIssue.typeUrl,
      value: MsgIssue_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgIssue {
  export const typeUrl: string = `/${protobufPackage}.MsgIssue`;
  export const Proto = MsgIssue_pb;
  export interface Proto extends MsgIssue_pb {}
}

export class MsgMint extends BaseMsg {
  public protoMsg: MsgMint_pb;
  constructor(msg: MsgMint_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgMint.typeUrl,
      value: MsgMint_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgMint {
  export const typeUrl: string = `/${protobufPackage}.MsgMint`;
  export const Proto = MsgMint_pb;
  export interface Proto extends MsgMint_pb {}
}

export class MsgBurn extends BaseMsg {
  public protoMsg: MsgBurn_pb;
  constructor(msg: MsgBurn_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgBurn.typeUrl,
      value: MsgBurn_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgBurn {
  export const typeUrl: string = `/${protobufPackage}.MsgBurn`;
  export const Proto = MsgBurn_pb;
  export interface Proto extends MsgBurn_pb {}
}

export class MsgTransferOwnership extends BaseMsg {
  public protoMsg: MsgTransferOwnership_pb;
  constructor(msg: MsgTransferOwnership_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgTransferOwnership.typeUrl,
      value: MsgTransferOwnership_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgTransferOwnership {
  export const typeUrl: string = `/${protobufPackage}.MsgTransferOwnership`;
  export const Proto = MsgTransferOwnership_pb;
  export interface Proto extends MsgTransferOwnership_pb {}
}

export class MsgConfirmOwnership extends BaseMsg {
  public protoMsg: MsgConfirmOwnership_pb;
  constructor(msg: MsgConfirmOwnership_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgConfirmOwnership.typeUrl,
      value: MsgConfirmOwnership_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgConfirmOwnership {
  export const typeUrl: string = `/${protobufPackage}.MsgConfirmOwnership`;
  export const Proto = MsgConfirmOwnership_pb;
  export interface Proto extends MsgConfirmOwnership_pb {}
}
