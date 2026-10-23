# BestprintondemandData SDK utility: make_context

from bestprintondemanddata_sdk.core.context import BestprintondemandDataContext


def make_context_util(ctxmap, basectx):
    return BestprintondemandDataContext(ctxmap, basectx)
