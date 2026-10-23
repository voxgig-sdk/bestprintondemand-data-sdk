<?php
declare(strict_types=1);

// Typed models for the BestprintondemandData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Compare entity data model. */
class Compare
{
    public string $summary;
}

/** Request payload for Compare#load. */
class CompareLoadMatch
{
    public string $supplier_a;
    public string $supplier_b;
}

/** Cost entity data model. */
class Cost
{
    public string $summary;
}

/** Request payload for Cost#load. */
class CostLoadMatch
{
    public ?int $limit = null;
    public string $query;
}

/** PriceChange entity data model. */
class PriceChange
{
    public string $summary;
}

/** Request payload for PriceChange#load. */
class PriceChangeLoadMatch
{
    public ?string $product = null;
    public ?string $supplier = null;
}

