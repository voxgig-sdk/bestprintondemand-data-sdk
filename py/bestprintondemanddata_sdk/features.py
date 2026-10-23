# BestprintondemandData SDK feature factory

from bestprintondemanddata_sdk.feature.base_feature import BestprintondemandDataBaseFeature
from bestprintondemanddata_sdk.feature.ratelimit_feature import BestprintondemandDataRatelimitFeature
from bestprintondemanddata_sdk.feature.retry_feature import BestprintondemandDataRetryFeature
from bestprintondemanddata_sdk.feature.test_feature import BestprintondemandDataTestFeature
from bestprintondemanddata_sdk.feature.timeout_feature import BestprintondemandDataTimeoutFeature


_FEATURES = {
    "base": lambda: BestprintondemandDataBaseFeature(),
    "ratelimit": lambda: BestprintondemandDataRatelimitFeature(),
    "retry": lambda: BestprintondemandDataRetryFeature(),
    "test": lambda: BestprintondemandDataTestFeature(),
    "timeout": lambda: BestprintondemandDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
