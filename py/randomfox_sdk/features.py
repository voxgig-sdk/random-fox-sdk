# RandomFox SDK feature factory

from randomfox_sdk.feature.base_feature import RandomFoxBaseFeature
from randomfox_sdk.feature.ratelimit_feature import RandomFoxRatelimitFeature
from randomfox_sdk.feature.retry_feature import RandomFoxRetryFeature
from randomfox_sdk.feature.test_feature import RandomFoxTestFeature
from randomfox_sdk.feature.timeout_feature import RandomFoxTimeoutFeature


_FEATURES = {
    "base": lambda: RandomFoxBaseFeature(),
    "ratelimit": lambda: RandomFoxRatelimitFeature(),
    "retry": lambda: RandomFoxRetryFeature(),
    "test": lambda: RandomFoxTestFeature(),
    "timeout": lambda: RandomFoxTimeoutFeature(),
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
