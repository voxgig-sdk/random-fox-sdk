# RandomFox SDK feature factory

from feature.base_feature import RandomFoxBaseFeature
from feature.test_feature import RandomFoxTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RandomFoxBaseFeature(),
        "test": lambda: RandomFoxTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
