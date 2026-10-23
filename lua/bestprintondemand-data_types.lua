-- Typed models for the BestprintondemandData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Compare
---@field summary string

---@class CompareLoadMatch
---@field supplier_a string
---@field supplier_b string

---@class Cost
---@field summary string

---@class CostLoadMatch
---@field limit? number
---@field query string

---@class PriceChange
---@field summary string

---@class PriceChangeLoadMatch
---@field product? string
---@field supplier? string

local M = {}

return M
