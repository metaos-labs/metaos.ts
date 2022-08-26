export * from "./pool";
export * from "./token";
export * from "./wallet";

export type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export enum Tip_Level {
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum Direction {
  In = "exactIn",
  Out = "exactOut",
}
