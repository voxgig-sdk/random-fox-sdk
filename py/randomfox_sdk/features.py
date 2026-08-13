# RandomFox SDK feature factory

from randomfox_sdk.feature.base_feature import RandomFoxBaseFeature
from randomfox_sdk.feature.test_feature import RandomFoxTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RandomFoxBaseFeature(),
        "test": lambda: RandomFoxTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
