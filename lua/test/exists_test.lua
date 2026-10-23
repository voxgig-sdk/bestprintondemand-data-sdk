-- BestprintondemandData SDK exists test

local sdk = require("bestprintondemand-data_sdk")

describe("BestprintondemandDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
