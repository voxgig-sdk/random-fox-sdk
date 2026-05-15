# RandomFox SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RandomFoxFeatures
  def self.make_feature(name)
    case name
    when "base"
      RandomFoxBaseFeature.new
    when "test"
      RandomFoxTestFeature.new
    else
      RandomFoxBaseFeature.new
    end
  end
end
