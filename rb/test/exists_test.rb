# BestprintondemandData SDK exists test

require "minitest/autorun"
require_relative "../BestprintondemandData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = BestprintondemandDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
