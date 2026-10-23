# frozen_string_literal: true

# Typed models for the BestprintondemandData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Compare entity data model.
#
# @!attribute [rw] summary
#   @return [String]
Compare = Struct.new(
  :summary,
  keyword_init: true
)

# Request payload for Compare#load.
#
# @!attribute [rw] supplier_a
#   @return [String]
#
# @!attribute [rw] supplier_b
#   @return [String]
CompareLoadMatch = Struct.new(
  :supplier_a,
  :supplier_b,
  keyword_init: true
)

# Cost entity data model.
#
# @!attribute [rw] summary
#   @return [String]
Cost = Struct.new(
  :summary,
  keyword_init: true
)

# Request payload for Cost#load.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String]
CostLoadMatch = Struct.new(
  :limit,
  :query,
  keyword_init: true
)

# PriceChange entity data model.
#
# @!attribute [rw] summary
#   @return [String]
PriceChange = Struct.new(
  :summary,
  keyword_init: true
)

# Request payload for PriceChange#load.
#
# @!attribute [rw] product
#   @return [String, nil]
#
# @!attribute [rw] supplier
#   @return [String, nil]
PriceChangeLoadMatch = Struct.new(
  :product,
  :supplier,
  keyword_init: true
)

