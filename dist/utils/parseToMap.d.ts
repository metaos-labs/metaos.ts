export declare function objectToMap<K, T>(source: Object): Map<string, any>;
export declare function arrayToMap<T, K extends keyof T>(array: Array<T>, property: K): Map<T[K], T>;
