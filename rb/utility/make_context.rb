# BestprintondemandData SDK utility: make_context
require_relative '../core/context'
module BestprintondemandDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    BestprintondemandDataContext.new(ctxmap, basectx)
  }
end
