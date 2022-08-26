export * from "./pool";
export * from "./token";
export * from "./wallet";
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare enum Tip_Level {
    Info = "info",
    Warning = "warning",
    Error = "error"
}
export declare enum Direction {
    In = "exactIn",
    Out = "exactOut"
}
