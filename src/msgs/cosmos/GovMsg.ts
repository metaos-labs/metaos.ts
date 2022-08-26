import { BaseMsg } from '../BaseMsg';
import {
  protobufPackage,
  MsgSubmitProposal as MsgSubmitProposal_pb,
  MsgVote as MsgVote_pb,
  MsgVoteWeighted as MsgVoteWeighted_pb,
  MsgDeposit as MsgDeposit_pb,
} from "../../proto/cosmos/gov/v1beta1/tx";
import {EncodeObject} from "@cosmjs/proto-signing";

export class MsgSubmitProposal extends BaseMsg {
  public protoMsg: MsgSubmitProposal_pb;
  constructor(msg: MsgSubmitProposal_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSubmitProposal.typeUrl,
      value: MsgSubmitProposal_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgSubmitProposal {
  export const typeUrl: string = `/${protobufPackage}.MsgSubmitProposal`;
  export const Proto = MsgSubmitProposal_pb;
  export interface Proto extends MsgSubmitProposal_pb {}
}

export class MsgDeposit extends BaseMsg {
  public protoMsg: MsgDeposit_pb;
  constructor(msg: MsgDeposit_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgDeposit.typeUrl,
      value: MsgDeposit_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgDeposit {
  export const typeUrl: string = `/${protobufPackage}.MsgDeposit`;
  export const Proto = MsgDeposit_pb;
  export interface Proto extends MsgDeposit_pb {}
}

export class MsgVote extends BaseMsg {
  public protoMsg: MsgVote_pb;
  constructor(msg: MsgVote_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgVote.typeUrl,
      value: MsgVote_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgVote {
  export const typeUrl: string = `/${protobufPackage}.MsgVote`;
  export const Proto = MsgVote_pb;
  export interface Proto extends MsgVote_pb {}
}

export class MsgVoteWeighted extends BaseMsg {
  public protoMsg: MsgVoteWeighted_pb;
  constructor(msg: MsgVoteWeighted_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgVoteWeighted.typeUrl,
      value: MsgVoteWeighted_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgVoteWeighted {
  export const typeUrl: string = `/${protobufPackage}.MsgVoteWeighted`;
  export const Proto = MsgVoteWeighted_pb;
  export interface Proto extends MsgVoteWeighted_pb {}
}
