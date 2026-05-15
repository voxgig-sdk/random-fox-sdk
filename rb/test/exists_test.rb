# RandomFox SDK exists test

require "minitest/autorun"
require_relative "../RandomFox_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RandomFoxSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
