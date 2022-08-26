import { BaseMsg } from "../BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgCreateVestingAccount as MsgCreateVestingAccount_pb,
} from "../../proto/cosmos/vesting/v1beta1/tx";

export class MsgCreateVestingAccount extends BaseMsg {
  public protoMsg: MsgCreateVestingAccount_pb;
  constructor(msg: MsgCreateVestingAccount_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreateVestingAccount.typeUrl,
      value: MsgCreateVestingAccount_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgCreateVestingAccount {
  export const typeUrl: string = `/${protobufPackage}.MsgCreateVestingAccount`;
  export const Proto = MsgCreateVestingAccount_pb;
  export interface Proto extends MsgCreateVestingAccount_pb {}
}


