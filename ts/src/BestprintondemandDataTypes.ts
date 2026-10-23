// Typed models for the BestprintondemandData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Compare {
  summary: string
}

export interface CompareLoadMatch {
  supplier_a: string
  supplier_b: string
}

export interface Cost {
  summary: string
}

export interface CostLoadMatch {
  limit?: number
  query: string
}

export interface PriceChange {
  summary: string
}

export interface PriceChangeLoadMatch {
  product?: string
  supplier?: string
}

