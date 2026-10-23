# BestprintondemandData SDK exists test

import pytest
from bestprintondemanddata_sdk import BestprintondemandDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BestprintondemandDataSDK.test(None, None)
        assert testsdk is not None
