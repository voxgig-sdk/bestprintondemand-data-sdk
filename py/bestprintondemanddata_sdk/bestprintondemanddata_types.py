# Typed models for the BestprintondemandData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Compare(TypedDict):
    summary: str


class CompareLoadMatch(TypedDict):
    supplier_a: str
    supplier_b: str


class Cost(TypedDict):
    summary: str


class CostLoadMatchRequired(TypedDict):
    query: str


class CostLoadMatch(CostLoadMatchRequired, total=False):
    limit: int


class PriceChange(TypedDict):
    summary: str


class PriceChangeLoadMatch(TypedDict, total=False):
    product: str
    supplier: str
