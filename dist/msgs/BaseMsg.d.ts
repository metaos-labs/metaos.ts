import { EncodeObject } from "@cosmjs/proto-signing";
export declare abstract class BaseMsg {
    constructor();
    abstract generateMessage(): EncodeObject;
}
