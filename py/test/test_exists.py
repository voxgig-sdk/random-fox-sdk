# ProjectName SDK exists test

import pytest
from randomfox_sdk import RandomFoxSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RandomFoxSDK.test(None, None)
        assert testsdk is not None
