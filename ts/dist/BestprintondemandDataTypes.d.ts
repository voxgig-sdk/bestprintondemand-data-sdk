export interface Compare {
    summary: string;
}
export interface CompareLoadMatch {
    supplier_a: string;
    supplier_b: string;
}
export interface Cost {
    summary: string;
}
export interface CostLoadMatch {
    limit?: number;
    query: string;
}
export interface PriceChange {
    summary: string;
}
export interface PriceChangeLoadMatch {
    product?: string;
    supplier?: string;
}
