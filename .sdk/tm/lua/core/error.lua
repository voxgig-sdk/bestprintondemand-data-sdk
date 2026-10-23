-- BestprintondemandData SDK error

local json = require("dkjson")

local BestprintondemandDataError = {}
BestprintondemandDataError.__index = BestprintondemandDataError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function BestprintondemandDataError.new(code, msg, ctx)
  local self = setmetatable({}, BestprintondemandDataError)
  self.is_sdk_error = true
  self.sdk = "BestprintondemandData"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function BestprintondemandDataError:context()
  return CONTEXT[self]
end


function BestprintondemandDataError:error()
  return self.msg
end


function BestprintondemandDataError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function BestprintondemandDataError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function BestprintondemandDataError:to_json()
  return json.encode(self:to_table())
end


function BestprintondemandDataError:__tostring()
  return self.msg
end


function BestprintondemandDataError.__tojson(self)
  return self:to_json()
end


return BestprintondemandDataError
