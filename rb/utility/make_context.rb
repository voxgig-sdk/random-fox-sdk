# RandomFox SDK utility: make_context
require_relative '../core/context'
module RandomFoxUtilities
  MakeContext = ->(ctxmap, basectx) {
    RandomFoxContext.new(ctxmap, basectx)
  }
end
