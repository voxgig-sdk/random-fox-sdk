# RandomFox SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RandomFoxFeatures
  def self.make_feature(name)
    case name
    when "base"
      RandomFoxBaseFeature.new
    when "ratelimit"
      RandomFoxRatelimitFeature.new
    when "retry"
      RandomFoxRetryFeature.new
    when "test"
      RandomFoxTestFeature.new
    when "timeout"
      RandomFoxTimeoutFeature.new
    else
      RandomFoxBaseFeature.new
    end
  end
end
