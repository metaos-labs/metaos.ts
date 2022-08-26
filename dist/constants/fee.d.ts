export declare enum Fee_Amount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
export declare const FEE_AMOUNT_DETAIL: Record<Fee_Amount, {
    label: string;
    value: Fee_Amount;
    description: string;
}>;
